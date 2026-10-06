// Private research access is granted by the Lumi Local editor (EmDash) sign-in.
// There is no separate research password: the Pages Function forwards the
// visitor's own cookies to the CMS Worker over the BLOG service binding and asks
// who they are. Only an ADMIN may read the dataset. Every other outcome —
// anonymous, lower role, unclaimed editor, unreachable CMS — fails closed.

export const ADMIN_ROLE = 50; // @emdash-cms/auth Role.ADMIN
const ME_PATH = '/_emdash/api/auth/me';
const LOGIN_PATH = '/_emdash/admin/login';
const LOGOUT_PATH = '/_emdash/api/auth/logout';
const MAX_COOKIE_BYTES = 8192;
const MAX_ME_BYTES = 16 * 1024;

export const PRIVATE_HEADERS = {
  'Cache-Control': 'private, no-store, max-age=0',
  'CDN-Cache-Control': 'no-store',
  'Cloudflare-CDN-Cache-Control': 'no-store',
  'Vary': 'Cookie',
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

const wantsPage = request => ['GET', 'HEAD'].includes(request.method)
  && (request.headers.get('accept') ?? '').includes('text/html')
  && !new URL(request.url).pathname.endsWith('.csv');

// Anonymous browsers go to the editor's passkey sign-in and come back here;
// CSV and programmatic requests get a plain 401 with no dataset.
function signIn(request) {
  if (!wantsPage(request)) return dataResponse('Sign in to the Lumi Local editor as an administrator to access research.', 401);
  const back = dataPath(new URL(request.url).pathname) ?? '/data/';
  return dataResponse(null, 302, { Location: `${LOGIN_PATH}?redirect=${encodeURIComponent(back)}` });
}

function unavailable() {
  return dataResponse('Research access is unavailable until the Lumi Local editor sign-in is configured.', 503);
}

function checkConfiguration(request, env) {
  const url = new URL(request.url);
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  if (url.protocol !== 'https:' && !local) return dataResponse('HTTPS is required.', 403);
  // An unclaimed editor (first-admin setup still open) must never authorize anyone.
  if (typeof env?.BLOG?.fetch !== 'function' || env?.BLOG_ADMIN_READY !== 'true') return unavailable();
  return null;
}

async function boundedJson(response) {
  const text = await response.text();
  if (text.length > MAX_ME_BYTES) return null;
  try { return JSON.parse(text); } catch { return null; }
}

export async function authorizeData(request, env) {
  const invalid = checkConfiguration(request, env); if (invalid) return invalid;
  const cookie = request.headers.get('cookie') ?? '';
  if (!cookie) return signIn(request);
  if (cookie.length > MAX_COOKIE_BYTES) return dataResponse('Request headers are too large.', 431);

  let me;
  try {
    me = await env.BLOG.fetch(new Request(new URL(ME_PATH, request.url), {
      method: 'GET',
      headers: { cookie, accept: 'application/json' },
      redirect: 'manual',
    }));
  } catch { return unavailable(); }

  if (me.status === 401 || me.status === 403) return signIn(request);
  if (!me.ok) return unavailable();
  const role = (await boundedJson(me))?.data?.role;
  if (typeof role !== 'number') return unavailable();
  if (role < ADMIN_ROLE) return dataResponse('Your Lumi Local account does not have research access.', 403);
  return null;
}

// Ends the editor session (the same session the editor uses) and returns to its sign-in page.
async function logout(request, env) {
  const url = new URL(request.url);
  if (request.headers.get('origin') !== url.origin) return dataResponse('Invalid request origin.', 403);
  if (typeof env?.BLOG?.fetch !== 'function') return unavailable();
  let response;
  try {
    response = await env.BLOG.fetch(new Request(new URL(LOGOUT_PATH, url), {
      method: 'POST',
      headers: { cookie: request.headers.get('cookie') ?? '', origin: url.origin, 'X-EmDash-Request': '1', accept: 'application/json' },
      redirect: 'manual',
    }));
  } catch { return unavailable(); }
  const result = dataResponse(null, 303, { Location: LOGIN_PATH });
  // A session the CMS no longer recognises is already signed out: clear the stale cookie.
  if (response.status === 401 || response.status === 403) {
    const secure = url.protocol === 'https:' ? '; Secure' : '';
    result.headers.append('Set-Cookie', `astro-session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure}`);
    return result;
  }
  if (!response.ok && response.status !== 302) return unavailable();
  // Relay each cookie-clearing header separately; joined Set-Cookie values are invalid.
  for (const value of response.headers.getSetCookie?.() ?? []) result.headers.append('Set-Cookie', value);
  return result;
}

export function createDataHandler(page, csv) {
  return async function onRequest({ request, env }) {
    const path = dataPath(new URL(request.url).pathname);
    if (path === '/data/login') return dataResponse(null, 302, { Location: `${LOGIN_PATH}?redirect=${encodeURIComponent('/data/')}` });
    if (path === '/data/logout') {
      if (request.method !== 'POST') return dataResponse('Method not allowed.', 405, { Allow: 'POST' });
      return logout(request, env);
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
