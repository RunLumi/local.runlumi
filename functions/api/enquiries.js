const MAX_BODY = 24 * 1024;

const limits = {
  name: 80,
  business: 160,
  phone: 40,
  email: 254,
  note: 1000,
  locale: 8,
  website: 200
};

function clean(value, max) {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/[\u0000-\u001F\u007F]/g, ' ').slice(0, max);
}

function escapeDiscord(value) {
  return value.replace(/@/g, '@\u200b').replace(/\x60\x60\x60/g, 'ʼʼʼ');
}

function wantsHtml(request) {
  return (request.headers.get('accept') || '').includes('text/html');
}

function respond(request, status, body) {
  const baseHeaders = {
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  };

  if (wantsHtml(request)) {
    const ok = status >= 200 && status < 300;
    const title = ok ? 'Lumi Local — Đã nhận' : 'Lumi Local — Chưa gửi được';
    const message = ok
      ? 'Lumi đã nhận yêu cầu. Bước này chưa thu phí hoặc tạo tài khoản.'
      : 'Chưa gửi được yêu cầu. Vui lòng quay lại và thử lại sau.';
    const html =
      '<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' +
      title +
      '</title><body style="font-family:system-ui;padding:40px;max-width:680px;margin:auto"><h1>' +
      title +
      '</h1><p>' +
      message +
      '</p><p><a href="/">Về Lumi Local</a></p></body></html>';

    return new Response(html, {
      status,
      headers: { ...baseHeaders, 'Content-Type': 'text/html; charset=utf-8' }
    });
  }

  return new Response(JSON.stringify(body), {
    status,
    headers: { ...baseHeaders, 'Content-Type': 'application/json; charset=utf-8' }
  });
}

async function parseBody(request) {
  const length = Number(request.headers.get('content-length') || 0);
  if (length && length > MAX_BODY) throw new Error('too_large');

  const type = request.headers.get('content-type') || '';
  if (type.includes('application/json')) return await request.json();

  if (type.includes('application/x-www-form-urlencoded') || type.includes('multipart/form-data')) {
    return Object.fromEntries(await request.formData());
  }

  throw new Error('unsupported');
}

export async function onRequestPost({ request, env }) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');
  if (origin && origin !== requestUrl.origin) {
    return respond(request, 403, { ok: false, error: 'origin' });
  }

  let raw;
  try {
    raw = await parseBody(request);
  } catch (error) {
    return respond(request, error?.message === 'too_large' ? 413 : 400, { ok: false, error: 'invalid_body' });
  }

  const data = {};
  for (const [key, max] of Object.entries(limits)) data[key] = clean(raw?.[key], max);

  if (data.website) return respond(request, 202, { ok: true });

  const consent = raw?.consent === true || raw?.consent === 'yes' || raw?.consent === 'on';
  const validEmail = !data.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  if (!data.name || !data.business || !data.phone || !consent || !validEmail) {
    return respond(request, 400, { ok: false, error: 'invalid_fields' });
  }

  const webhook = env?.DISCORD_TRIAL_WEBHOOK_URL || '';
  const validWebhook =
    webhook.startsWith('https://discord.com/api/webhooks/') ||
    webhook.startsWith('https://discordapp.com/api/webhooks/');

  if (!validWebhook) {
    return respond(request, 503, { ok: false, error: 'unavailable' });
  }

  const lines = [
    '**Lumi Local enquiry**',
    'Name: ' + escapeDiscord(data.name),
    'Business: ' + escapeDiscord(data.business),
    'Phone/Zalo: ' + escapeDiscord(data.phone),
    data.email ? 'Email: ' + escapeDiscord(data.email) : null,
    'Locale: ' + escapeDiscord(data.locale || 'vi'),
    data.note ? 'Note: ' + escapeDiscord(data.note) : null
  ].filter(Boolean);

  let upstream;
  try {
    upstream = await fetch(webhook + (webhook.includes('?') ? '&' : '?') + 'wait=true', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: lines.join('\n').slice(0, 1900),
        allowed_mentions: { parse: [] }
      })
    });
  } catch {
    return respond(request, 502, { ok: false, error: 'delivery_failed' });
  }

  if (!upstream.ok) {
    return respond(request, 502, { ok: false, error: 'delivery_failed' });
  }

  return respond(request, 200, { ok: true });
}

export function onRequestGet({ request }) {
  return respond(request, 405, { ok: false, error: 'method_not_allowed' });
}
