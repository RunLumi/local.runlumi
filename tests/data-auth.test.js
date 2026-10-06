import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { authorizeData, createDataHandler, isDataPath, ADMIN_ROLE } from '../server/data-auth.js';
import { onRequest } from '../functions/data/index.js';

// Synthetic EmDash Worker: maps a session cookie to /_emdash/api/auth/me replies.
function blog(sessions = { 'astro-session=admin': ADMIN_ROLE, 'astro-session=editor': 40 }, calls = []) {
  return {
    calls,
    async fetch(req) {
      calls.push(req);
      const url = new URL(req.url);
      if (url.pathname === '/_emdash/api/auth/logout') {
        const headers = new Headers({ 'content-type': 'application/json' });
        headers.append('set-cookie', 'astro-session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax');
        headers.append('set-cookie', 'other=; Path=/; Max-Age=0');
        return new Response('{"success":true}', { status: 200, headers });
      }
      assert.equal(url.pathname, '/_emdash/api/auth/me');
      const role = sessions[req.headers.get('cookie')];
      if (role === undefined) return Response.json({ success: false, error: { code: 'NOT_AUTHENTICATED' } }, { status: 401 });
      return Response.json({ success: true, data: { id: 'synthetic', email: 'owner@example.test', role } });
    },
  };
}
const ready = (binding = blog()) => ({ BLOG: binding, BLOG_ADMIN_READY: 'true' });
const request = (path = '/data/', cookie, { method = 'GET', origin = 'https://example.test', accept } = {}) => new Request(origin + path, {
  method, headers: { ...(cookie ? { cookie } : {}), ...(accept ? { accept } : {}) },
});
const ADMIN = 'astro-session=admin';

test('without an initialized editor binding, nothing is authorized', async () => {
  for (const env of [{}, { BLOG_ADMIN_READY: 'true' }, { BLOG: blog() }, { BLOG: blog(), BLOG_ADMIN_READY: 'false' }, { DATA_PASSWORD: 'retired-shared-password-123' }]) {
    const response = await onRequest({ request: request('/data/', ADMIN), env });
    assert.equal(response.status, 503);
    assert.match(response.headers.get('cache-control'), /no-store/);
    assert.ok(!(await response.text()).includes('keyword-dataset'));
  }
});

test('an EmDash administrator session serves private content without caching', async () => {
  for (const path of ['/data', '/data/', '/data/index.html', '/data/?nojs=1']) {
    const response = await onRequest({ request: request(path, ADMIN), env: ready() });
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /text\/html/);
    assert.match(await response.text(), /id="keyword-dataset"/);
    assert.match(response.headers.get('cache-control'), /private, no-store/);
    assert.equal(response.headers.get('cloudflare-cdn-cache-control'), 'no-store');
    assert.equal(response.headers.get('vary'), 'Cookie');
    assert.equal(response.headers.get('referrer-policy'), 'no-referrer');
  }
  const csv = await onRequest({ request: request('/data/keywords.csv', ADMIN), env: ready() });
  assert.equal(await csv.text(), readFileSync('docs/LumiLocalKeywords.csv', 'utf8'));
  assert.match(csv.headers.get('content-disposition'), /attachment/);
  const head = await onRequest({ request: request('/data/', ADMIN, { method: 'HEAD' }), env: ready() });
  assert.equal(head.status, 200); assert.equal(await head.text(), '');
});

test('the visitor cookie is forwarded only to the auth endpoint over the binding', async () => {
  const calls = [];
  await authorizeData(request('/data/', ADMIN), ready(blog(undefined, calls)));
  assert.equal(calls.length, 1);
  assert.equal(new URL(calls[0].url).pathname, '/_emdash/api/auth/me');
  assert.equal(calls[0].method, 'GET');
  assert.equal(calls[0].headers.get('cookie'), ADMIN);
  assert.equal(calls[0].headers.get('authorization'), null);
});

test('anonymous browsers go to the editor passkey sign-in and come back; other clients get 401', async () => {
  for (const cookie of [undefined, 'astro-session=expired']) {
    const page = await onRequest({ request: request('/data/', cookie, { accept: 'text/html' }), env: ready() });
    assert.equal(page.status, 302);
    assert.equal(page.headers.get('location'), '/_emdash/admin/login?redirect=%2Fdata%2F');
    for (const path of ['/data/keywords.csv', '/data/']) {
      const response = await onRequest({ request: request(path, cookie), env: ready() });
      assert.equal(response.status, 401);
      assert.ok(!(await response.text()).includes('keyword-dataset'));
    }
  }
  const csvFromBrowser = await onRequest({ request: request('/data/keywords.csv', undefined, { accept: 'text/html' }), env: ready() });
  assert.equal(csvFromBrowser.status, 401);
  const login = await onRequest({ request: request('/data/login'), env: ready() });
  assert.equal(login.status, 302); assert.equal(login.headers.get('location'), '/_emdash/admin/login?redirect=%2Fdata%2F');
});

test('signed-in users below administrator are refused', async () => {
  const response = await onRequest({ request: request('/data/keywords.csv', 'astro-session=editor'), env: ready() });
  assert.equal(response.status, 403);
  assert.ok(!(await response.text()).includes('Avg. monthly searches'));
});

test('an unreachable or malformed editor response fails closed', async () => {
  const broken = [
    { fetch: async () => { throw new Error('synthetic outage'); } },
    { fetch: async () => new Response('upstream', { status: 500 }) },
    { fetch: async () => new Response('not json', { status: 200 }) },
    { fetch: async () => Response.json({ success: true, data: { role: '50' } }) },
    { fetch: async () => new Response(JSON.stringify({ success: true, data: { role: 50, pad: 'x'.repeat(20000) } })) },
  ];
  for (const binding of broken) {
    const response = await onRequest({ request: request('/data/', ADMIN), env: ready(binding) });
    assert.equal(response.status, 503);
    assert.ok(!(await response.text()).includes('keyword-dataset'));
  }
  const huge = await authorizeData(request('/data/', 'astro-session=' + 'a'.repeat(9000)), ready());
  assert.equal(huge.status, 431);
});

test('unsupported methods, nonlocal HTTP and unknown routes cannot serve data', async () => {
  assert.equal((await onRequest({ request: request('/data/', ADMIN, { method: 'POST' }), env: ready() })).status, 405);
  assert.equal((await onRequest({ request: request('/data/unknown', ADMIN), env: ready() })).status, 404);
  assert.equal((await authorizeData(request('/data/', ADMIN, { origin: 'http://example.test' }), ready())).status, 403);
  assert.equal(await authorizeData(request('/data/', ADMIN, { origin: 'http://127.0.0.1:4323' }), ready()), null);
});

test('sign out ends the editor session, relays each cleared cookie and rejects cross-origin posts', async () => {
  const calls = [];
  const out = await onRequest({ request: new Request('https://example.test/data/logout', { method: 'POST', headers: { origin: 'https://example.test', cookie: ADMIN } }), env: ready(blog(undefined, calls)) });
  assert.equal(out.status, 303);
  assert.equal(out.headers.get('location'), '/_emdash/admin/login');
  assert.equal(out.headers.getSetCookie().length, 2);
  assert.match(out.headers.getSetCookie()[0], /^astro-session=;.*Max-Age=0/);
  assert.equal(new URL(calls[0].url).pathname, '/_emdash/api/auth/logout');
  assert.equal(calls[0].headers.get('x-emdash-request'), '1');
  const forged = await onRequest({ request: new Request('https://example.test/data/logout', { method: 'POST', headers: { origin: 'https://other.test', cookie: ADMIN } }), env: ready() });
  assert.equal(forged.status, 403);
  assert.equal((await onRequest({ request: request('/data/logout', ADMIN), env: ready() })).status, 405);
  const expired = { fetch: async () => Response.json({ success: false }, { status: 401 }) };
  const stale = await onRequest({ request: new Request('https://example.test/data/logout', { method: 'POST', headers: { origin: 'https://example.test', cookie: 'astro-session=expired' } }), env: ready(expired) });
  assert.equal(stale.status, 303);
  assert.match(stale.headers.get('set-cookie'), /^astro-session=; Path=\/; Max-Age=0; HttpOnly; SameSite=Lax; Secure$/);
  const down = { fetch: async () => { throw new Error('synthetic outage'); } };
  assert.equal((await onRequest({ request: new Request('https://example.test/data/logout', { method: 'POST', headers: { origin: 'https://example.test', cookie: ADMIN } }), env: ready(down) })).status, 503);
});

test('handler factory keeps private fixtures behind the same check', async () => {
  const handler = createDataHandler('private fixture', 'csv fixture');
  assert.equal((await handler({ request: request('/data/', 'astro-session=editor'), env: ready() })).status, 403);
  assert.equal(await (await handler({ request: request('/data/', ADMIN), env: ready() })).text(), 'private fixture');
});

test('private pages and CSV are absent from static fallback assets', () => {
  assert.equal(existsSync('dist/data'), false);
  assert.equal(existsSync('dist/data/index.html'), false);
  assert.equal(existsSync('dist/data/keywords.csv'), false);
  assert.equal(existsSync('dist/data-login.js'), false);
  assert.ok(existsSync('.data-build/research.js'));
  const routes = JSON.parse(readFileSync('dist/_routes.json', 'utf8'));
  assert.ok(routes.include.includes('/data'));
  assert.ok(routes.include.includes('/data/*'));
  assert.deepEqual(routes.exclude, []);
});

test('local development guard recognizes encoded, slash-normalized and exact data paths', () => {
  for (const path of ['/data', '/data/', '/data/index.html', '/d%61ta/keywords.csv', '//data//', '/DATA/']) assert.equal(isDataPath(path), true);
  for (const path of ['/', '/en/', '/database', '/api/enquiries']) assert.equal(isDataPath(path), false);
});
