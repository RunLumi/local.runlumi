const encoder = new TextEncoder();
const SESSION_COOKIE = 'lumi_data_session';
const SESSION_SECONDS = 8 * 60 * 60;
export const DATA_USER = 'owner';
export const PRIVATE_HEADERS = {
  'Cache-Control': 'private, no-store, max-age=0',
  'CDN-Cache-Control': 'no-store',
  'Cloudflare-CDN-Cache-Control': 'no-store',
  'Vary': 'Authorization, Cookie',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Content-Security-Policy': "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data:; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'",
};

export function dataResponse(body, status = 200, headers = {}) {
  return new Response(body, { status, headers: { ...PRIVATE_HEADERS, 'Content-Type': 'text/plain; charset=utf-8', ...headers } });
}

export function dataPath(pathname) {
  // Reject ambiguous encodings rather than handing them to another asset router.
  try { return decodeURIComponent(pathname).replace(/\\/g, '/').replace(/\/+/g, '/'); }
  catch { return null; }
}

export function isDataPath(pathname) {
  const path = dataPath(pathname)?.toLowerCase();
  return path === '/data' || path?.startsWith('/data/');
}

function loginPage(message = '') {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow,noarchive"><title>Research access · Lumi Local</title><link rel="icon" href="/brand/lumi-logo.svg"><link rel="stylesheet" href="/data-login.css"><script src="/data-login.js" defer></script></head><body><main><a class="brand" href="/"><img src="/brand/lumi-logo.svg" width="32" height="32" alt="">Lumi Local</a><p class="eyebrow">PRIVATE RESEARCH WORKSPACE</p><h1>Sign in to view<br>the research.</h1><p>Enter the shared research password to open the keyword dashboard and its CSV.</p><form method="post" action="/data/login"><label for="password">Research password</label><input id="password" name="password" type="password" minlength="16" maxlength="256" autocomplete="current-password" required autofocus><p class="error" role="alert" ${message ? '' : 'hidden'}>${message}</p><button type="submit">Open keyword intelligence →</button></form><p class="meta">Access lasts up to 8 hours. This sign-in does not create an account.</p><a class="back" href="/">← Back to Lumi Local</a></main></body></html>`;
}

function challenge(request) {
  const showForm = ['GET','HEAD'].includes(request.method)
    && !request.headers.has('authorization')
    && (request.headers.get('accept') ?? '').includes('text/html')
    && !new URL(request.url).pathname.endsWith('.csv');
  return dataResponse(loginPage(), showForm ? 200 : 401, {
    'Content-Type': 'text/html; charset=utf-8',
    // Programmatic Basic Auth is still supported; browsers get a normal form.
    ...(request.headers.has('authorization') ? { 'WWW-Authenticate': 'Basic realm="Lumi Local research", charset="UTF-8"' } : {}),
  });
}

function checkConfiguration(request, env) {
  const url = new URL(request.url);
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  if (url.protocol !== 'https:' && !local) return dataResponse('HTTPS is required.', 403);
  const password = env?.DATA_PASSWORD;
  if (typeof password !== 'string' || password.length < 16 || encoder.encode(password).length > 256) {
    return dataResponse('Research access is unavailable until its password is configured.', 503);
  }
  return null;
}

async function keyFor(password) {
  return crypto.subtle.importKey('raw', encoder.encode(password), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

async function validCredentials(credentials, password) {
  const key = await keyFor(password);
  const expected = await crypto.subtle.sign('HMAC', key, encoder.encode(`${DATA_USER}:${password}`));
  return crypto.subtle.verify('HMAC', key, expected, encoder.encode(credentials));
}

function base64url(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function unbase64url(value) {
  const standard = value.replace(/-/g, '+').replace(/_/g, '/');
  return Uint8Array.from(atob(standard + '='.repeat((4 - standard.length % 4) % 4)), char => char.charCodeAt(0));
}

async function validSession(request, password) {
  const cookies = request.headers.get('cookie') ?? '';
  if (cookies.length > 8192) return false;
  const value = cookies.split(';').map(part => part.trim()).find(part => part.startsWith(SESSION_COOKIE+'='))?.slice(SESSION_COOKIE.length+1);
  const match = /^(\d{10})\.([A-Za-z0-9_-]{22})\.([A-Za-z0-9_-]{43})$/.exec(value ?? '');
  if (!match) return false;
  const expires = Number(match[1]), now = Math.floor(Date.now()/1000);
  if (expires <= now || expires > now + SESSION_SECONDS) return false;
  try {
    return await crypto.subtle.verify('HMAC', await keyFor(password), unbase64url(match[3]), encoder.encode(`lumi-data-session:${match[1]}.${match[2]}`));
  } catch { return false; }
}

function cookie(request, value, maxAge) {
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
  return `${SESSION_COOKIE}=${value}; Path=/data; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure}`;
}

async function boundedForm(request) {
  if (!(request.headers.get('content-type') ?? '').toLowerCase().startsWith('application/x-www-form-urlencoded')) return null;
  const reader = request.body?.getReader(); if (!reader) return null;
  let size = 0; const chunks = [];
  try {
    while (true) {
      const {done,value} = await reader.read(); if (done) break;
      size += value.byteLength;
      if (size > 4096) { await reader.cancel(); return null; }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size); let offset = 0;
  chunks.forEach(chunk => { bytes.set(chunk,offset); offset += chunk.byteLength; });
  return new URLSearchParams(new TextDecoder().decode(bytes));
}

async function login(request, env) {
  const invalid = checkConfiguration(request, env); if (invalid) return invalid;
  if (request.method !== 'POST') return dataResponse(loginPage(), 200, { 'Content-Type': 'text/html; charset=utf-8' });
  if (request.headers.get('origin') !== new URL(request.url).origin) return dataResponse('Invalid request origin.',403);
  const form = await boundedForm(request);
  const password = form?.get('password') ?? '';
  if (!password || encoder.encode(password).length > 256 || !await validCredentials(`${DATA_USER}:${password}`,env.DATA_PASSWORD)) {
    if ((request.headers.get('accept')??'').includes('application/json')) return dataResponse('{"ok":false}',401,{ 'Content-Type':'application/json' });
    return dataResponse(loginPage('The password was not accepted. Please try again.'),200,{ 'Content-Type':'text/html; charset=utf-8' });
  }
  const expires = Math.floor(Date.now()/1000) + SESSION_SECONDS;
  const nonce = base64url(crypto.getRandomValues(new Uint8Array(16)));
  const payload = `${expires}.${nonce}`;
  const signature = base64url(await crypto.subtle.sign('HMAC',await keyFor(env.DATA_PASSWORD),encoder.encode(`lumi-data-session:${payload}`)));
  const setCookie = cookie(request,`${payload}.${signature}`,SESSION_SECONDS);
  if ((request.headers.get('accept')??'').includes('application/json')) return dataResponse(null,204,{ 'Set-Cookie':setCookie });
  return dataResponse(null,303,{ Location:'/data/', 'Set-Cookie':setCookie });
}

export async function authorizeData(request, env) {
  const invalid = checkConfiguration(request, env); if (invalid) return invalid;
  if (await validSession(request,env.DATA_PASSWORD)) return null;
  const header = request.headers.get('authorization') ?? '';
  if (header.length > 2048) return challenge(request);
  const match = /^Basic\s+([A-Za-z0-9+/]+={0,2})$/i.exec(header);
  if (!match || match[1].length % 4 === 1) return challenge(request);
  let credentials;
  try {
    const bytes = Uint8Array.from(atob(match[1]), char => char.charCodeAt(0));
    credentials = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch { return challenge(request); }
  if (!credentials.includes(':') || encoder.encode(credentials).length > 512) return challenge(request);
  // Web Crypto HMAC verification avoids JavaScript string/byte comparisons of
  // secrets. Bind the complete credentials, preserving colons in the password.
  const valid = await validCredentials(credentials,env.DATA_PASSWORD);
  return valid ? null : challenge(request);
}

export function createDataHandler(page, csv) {
  return async function onRequest({ request, env }) {
    const path = dataPath(new URL(request.url).pathname);
    if (path === '/data/login') return login(request,env);
    if (path === '/data/logout' && request.method === 'POST') {
      if (request.headers.get('origin') !== new URL(request.url).origin) return dataResponse('Invalid request origin.',403);
      const headers = { 'Set-Cookie':cookie(request,'',0) };
      if ((request.headers.get('accept')??'').includes('application/json')) return dataResponse(null,204,headers);
      return dataResponse(null,303,{ ...headers, Location:'/data/login' });
    }
    const denied = await authorizeData(request, env);
    if (denied) return denied;
    if (!['GET', 'HEAD'].includes(request.method)) return dataResponse('Method not allowed.', 405, { Allow: 'GET, HEAD' });
    const body = request.method === 'HEAD' ? null : undefined;
    if (['/data', '/data/', '/data/index.html'].includes(path)) {
      return dataResponse(body === null ? null : page, 200, { 'Content-Type': 'text/html; charset=utf-8' });
    }
    if (path === '/data/keywords.csv') {
      return dataResponse(body === null ? null : csv, 200, {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="LumiLocalKeywords.csv"',
      });
    }
    return dataResponse('Not found.', 404);
  };
}
