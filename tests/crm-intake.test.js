import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { onRequestPost } from '../functions/api/enquiries.js';
import { crmConfig, idempotencyKey } from '../src/services/crm-intake.js';

// Synthetic signing key for tests only; generated, never a real credential.
const signingKey = 'k'.repeat(40);
const valid = { name: 'Synthetic Test', business: 'Test garage', phone: '0908123456', consent: true, locale: 'vi', source: '/nganh/garage/', page_slug: 'garage' };
const request = (data = valid) => new Request('https://local.runlumi.app/api/enquiries', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
const env = { DISCORD_TRIAL_WEBHOOK_URL: 'https://discord.com/api/webhooks/test/test', CRM_INTAKE_URL: 'https://runlumi.app/api/intake/local', CRM_INTAKE_SECRET: signingKey };

function mockUpstreams(t, { crm = [201], discord = 200 } = {}) {
  const calls = { crm: [], discord: 0 };
  t.mock.method(globalThis, 'fetch', async (url, init) => {
    if (String(url).startsWith('https://runlumi.app/')) {
      const status = crm[Math.min(calls.crm.length, crm.length - 1)];
      calls.crm.push(init);
      if (status === 'network') throw new Error('synthetic network failure');
      return Response.json(status < 300 ? { ok: true, id: 'inb_synthetic', duplicate: status === 200 } : { ok: false }, { status });
    }
    calls.discord += 1;
    return new Response('{}', { status: discord });
  });
  return calls;
}

test('stores in the CRM with a verifiable signature, validated context and consent', async (t) => {
  const calls = mockUpstreams(t);
  const response = await onRequestPost({ request: request(), env });
  assert.equal(response.status, 200);
  assert.equal(calls.crm.length, 1);
  assert.equal(calls.discord, 1);
  const init = calls.crm[0];
  const headers = new Headers(init.headers);
  const expected = 'v1=' + createHmac("sha256", signingKey).update(`${headers.get('x-lumi-timestamp')}.${headers.get('idempotency-key')}.${init.body}`).digest('hex');
  assert.equal(headers.get('x-lumi-signature'), expected);
  assert.equal(headers.get('x-lumi-source'), 'local.runlumi.app');
  assert.equal(init.redirect, 'error');
  const body = JSON.parse(init.body);
  assert.deepEqual(body.context, { page_slug: 'garage', source: '/nganh/garage/', cta_intent: 'preview', offer_interest: 'starter' });
  assert.equal(body.consent, true);
});

test('a repeated submission the CRM already holds is not announced twice', async (t) => {
  const calls = mockUpstreams(t, { crm: [200] });
  assert.equal((await onRequestPost({ request: request(), env })).status, 200);
  assert.equal(calls.discord, 0);
});

test('CRM failures retry once with the same key; Discord still counts as delivery', async (t) => {
  const calls = mockUpstreams(t, { crm: [503, 503] });
  assert.equal((await onRequestPost({ request: request(), env })).status, 200);
  assert.equal(calls.crm.length, 2);
  assert.equal(new Headers(calls.crm[0].headers).get('idempotency-key'), new Headers(calls.crm[1].headers).get('idempotency-key'));
});

test('a 4xx from the CRM is final and never retried', async (t) => {
  const calls = mockUpstreams(t, { crm: [422] });
  await onRequestPost({ request: request(), env });
  assert.equal(calls.crm.length, 1);
});

test('stored in the CRM is success even if Discord fails; both failing is not', async (t) => {
  mockUpstreams(t, { crm: [201], discord: 500 });
  assert.equal((await onRequestPost({ request: request(), env })).status, 200);
  t.mock.restoreAll();
  mockUpstreams(t, { crm: ['network', 'network'], discord: 500 });
  assert.equal((await onRequestPost({ request: request(), env })).status, 502);
});

test('without a Discord webhook the CRM alone can confirm; without either it fails closed', async (t) => {
  mockUpstreams(t, { crm: [201] });
  assert.equal((await onRequestPost({ request: request(), env: { ...env, DISCORD_TRIAL_WEBHOOK_URL: '' } })).status, 200);
  assert.equal((await onRequestPost({ request: request(), env: {} })).status, 503);
});

test('only allowlisted HTTPS CRM endpoints with a strong secret are used', () => {
  assert.ok(crmConfig(env));
  assert.equal(crmConfig({ ...env, CRM_INTAKE_URL: 'https://evil.example/api/intake/local' }), null);
  assert.equal(crmConfig({ ...env, CRM_INTAKE_URL: 'http://runlumi.app/api/intake/local' }), null);
  assert.equal(crmConfig({ ...env, CRM_INTAKE_URL: 'https://runlumi.app/other' }), null);
  assert.equal(crmConfig({ ...env, CRM_INTAKE_SECRET: 'short' }), null);
});

test('idempotency keys are stable per submission and day', async () => {
  const payload = { name: 'A', business: 'B', phone: '0908 123 456', note: '', locale: 'vi', context: null };
  const day = new Date('2026-10-07T03:00:00Z');
  assert.equal(await idempotencyKey(payload, day), await idempotencyKey({ ...payload, phone: '0908123456' }, day));
  assert.notEqual(await idempotencyKey(payload, day), await idempotencyKey({ ...payload, note: 'different' }, day));
  assert.notEqual(await idempotencyKey(payload, day), await idempotencyKey(payload, new Date('2026-10-08T03:00:00Z')));
  assert.match(await idempotencyKey(payload, day), /^enq_[a-f0-9]{48}$/);
});
