// Server-to-server forwarding of validated Lumi Local enquiries to Lumi's
// internal CRM (runlumi.app). Only enquiries addressed to Lumi go here;
// enquiries from customers' Starter sites never do.
//
// The CRM verifies an HMAC over `${timestamp}.${idempotencyKey}.${body}` and
// stores each idempotency key once, so retries cannot create duplicates.
const ALLOWED_CRM_ORIGINS = ['https://runlumi.app', 'https://www.runlumi.app'];
export const CONSENT_TEXT_VERSION = 'enquiry-consent-v1';
const ATTEMPTS = 2;
const TIMEOUT_MS = 6000;

const hex = (buffer) => [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, '0')).join('');

async function sha256(text) {
  return hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)));
}

async function hmac(secret, text) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return hex(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(text)));
}

/** Returns the CRM endpoint only when it is an allowlisted HTTPS origin and a secret exists. */
export function crmConfig(env) {
  const url = env?.CRM_INTAKE_URL || '';
  const secret = env?.CRM_INTAKE_SECRET || '';
  if (!url || secret.length < 32) return null;
  try {
    const parsed = new URL(url);
    if (!ALLOWED_CRM_ORIGINS.includes(parsed.origin) || parsed.pathname !== '/api/intake/local') return null;
    return { url: parsed.toString(), secret };
  } catch {
    return null;
  }
}

/** The same submission on the same Ho Chi Minh City day maps to one key. */
export async function idempotencyKey(payload, now = new Date()) {
  const day = new Date(now.getTime() + 7 * 3600_000).toISOString().slice(0, 10);
  const phone = payload.phone.replace(/\D/g, '');
  const parts = [day, phone, payload.business.toLowerCase(), payload.name.toLowerCase(), payload.note, payload.locale, payload.context?.source || ''];
  return 'enq_' + (await sha256(parts.join('\u001f'))).slice(0, 48);
}

export function crmPayload(data, context) {
  return {
    name: data.name,
    business: data.business,
    phone: data.phone,
    email: data.email,
    note: data.note,
    locale: data.locale === 'en' ? 'en' : 'vi',
    consent: true,
    consent_text_version: CONSENT_TEXT_VERSION,
    context: context
      ? { page_slug: context.page_slug, source: context.source, cta_intent: context.cta_intent, offer_interest: context.offer_interest }
      : null
  };
}

/**
 * Returns { status: 'disabled' | 'stored' | 'duplicate' | 'failed', id? }.
 * Retries only network errors, 429 and 5xx, reusing the same key; a 4xx is
 * final. Nothing is reported as stored unless the CRM confirmed it.
 */
export async function forwardToCrm(env, payload, now = new Date()) {
  const config = crmConfig(env);
  if (!config) return { status: 'disabled' };
  const body = JSON.stringify(payload);
  const key = await idempotencyKey(payload, now);
  for (let attempt = 1; attempt <= ATTEMPTS; attempt += 1) {
    const timestamp = String(Math.floor(Date.now() / 1000));
    let response;
    try {
      response = await fetch(config.url, {
        method: 'POST',
        redirect: 'error',
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: {
          'Content-Type': 'application/json',
          'X-Lumi-Source': 'local.runlumi.app',
          'X-Lumi-Timestamp': timestamp,
          'Idempotency-Key': key,
          'X-Lumi-Signature': 'v1=' + (await hmac(config.secret, `${timestamp}.${key}.${body}`))
        },
        body
      });
    } catch {
      continue;
    }
    if (response.status === 201 || response.status === 200) {
      const result = await response.json().catch(() => ({}));
      if (result?.ok && typeof result.id === 'string') return { status: result.duplicate ? 'duplicate' : 'stored', id: result.id };
      return { status: 'failed' };
    }
    if (response.status !== 429 && response.status < 500) return { status: 'failed' };
  }
  return { status: 'failed' };
}
