import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { authorizeData, createDataHandler, isDataPath } from '../server/data-auth.js';
import { onRequest } from '../functions/data/index.js';

const env = { DATA_PASSWORD: 'synthetic-test-password:with-colon' };
const auth = (credentials = `owner:${env.DATA_PASSWORD}`) => 'Basic ' + Buffer.from(credentials).toString('base64');
const request = (path = '/data/', authorization, method = 'GET', origin = 'https://example.test') => new Request(origin + path, { method, headers: authorization ? { authorization } : {} });

test('missing, empty or weak configuration denies all protected access', async () => {
  for (const config of [{}, { DATA_PASSWORD: '' }, { DATA_PASSWORD: 'short' }]) {
    const response = await onRequest({ request: request('/data/', auth()), env: config });
    assert.equal(response.status, 503);
    assert.match(response.headers.get('cache-control'), /no-store/);
    assert.ok(!(await response.text()).includes('keyword-dataset'));
  }
});

test('unauthenticated and malformed access never returns the dashboard or CSV', async () => {
  for (const path of ['/data', '/data/', '/data/index.html', '/data/keywords.csv', '/data/keywords.csv?nojs=1', '/data/unknown']) {
    for (const header of [undefined, 'Bearer synthetic', 'Basic !!!', 'Basic YQ==', 'Basic ' + 'a'.repeat(2050), auth('owner:wrong'), auth('other:'+env.DATA_PASSWORD)]) {
      const response = await onRequest({ request: request(path, header), env });
      assert.equal(response.status, 401);
      if (header) assert.match(response.headers.get('www-authenticate'), /^Basic realm=/);
      else { assert.equal(response.headers.get('www-authenticate'),null); assert.match(await response.clone().text(),/action="\/data\/login"/); }
      const body = await response.text();
      assert.ok(!body.includes('keyword-dataset'));
      assert.ok(!body.includes('xác minh maps'));
      assert.ok(!body.includes(env.DATA_PASSWORD));
    }
  }
});

test('correct credentials serve exact private content without browser or CDN caching', async () => {
  for (const path of ['/data', '/data/', '/data/index.html', '/data/?nojs=1']) {
    const response = await onRequest({ request: request(path, auth()), env });
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /text\/html/);
    assert.match(await response.text(), /id="keyword-dataset"/);
    assert.match(response.headers.get('cache-control'), /private, no-store/);
    assert.equal(response.headers.get('cloudflare-cdn-cache-control'), 'no-store');
    assert.equal(response.headers.get('vary'), 'Authorization, Cookie');
    assert.equal(response.headers.get('referrer-policy'), 'no-referrer');
    assert.match(response.headers.get('content-security-policy'), /script-src 'self'/);
  }
  const csv = await onRequest({ request: request('/data/keywords.csv', auth()), env });
  assert.equal(await csv.text(), readFileSync('docs/LumiLocalKeywords.csv', 'utf8'));
  assert.match(csv.headers.get('content-disposition'), /attachment/);
  const head = await onRequest({ request: request('/data/', auth(), 'HEAD'), env });
  assert.equal(head.status, 200); assert.equal(await head.text(), '');
});

test('unsupported methods, nonlocal HTTP and unknown routes cannot serve data', async () => {
  assert.equal((await onRequest({ request: request('/data/', auth(), 'POST'), env })).status, 405);
  assert.equal((await onRequest({ request: request('/data/unknown', auth()), env })).status, 404);
  assert.equal((await authorizeData(request('/data/', auth(), 'GET', 'http://example.test'), env)).status, 403);
  assert.equal(await authorizeData(request('/data/', auth(), 'GET', 'http://127.0.0.1:4323'), env), null);
});

test('private pages and CSV are absent from static fallback assets', () => {
  assert.equal(existsSync('dist/data'), false);
  assert.equal(existsSync('dist/data/index.html'), false);
  assert.equal(existsSync('dist/data/keywords.csv'), false);
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

test('password rotation invalidates the previous credential; passwords remain byte exact', async () => {
  const handler = createDataHandler('private fixture', 'csv fixture');
  const rotated = { DATA_PASSWORD: 'synthetic-replacement-password' };
  assert.equal((await handler({ request: request('/data/',auth()), env: rotated })).status, 401);
  assert.equal((await handler({ request: request('/data/',auth('owner:'+rotated.DATA_PASSWORD)), env: rotated })).status, 200);
  assert.equal((await handler({ request: request('/data/',auth('owner:'+rotated.DATA_PASSWORD+' ')), env: rotated })).status, 401);
});

const loginRequest = (password, origin = 'https://example.test', contentType = 'application/x-www-form-urlencoded') => new Request('https://example.test/data/login', {
  method:'POST',headers:{origin,'content-type':contentType},body:new URLSearchParams({password}),
});

test('password form creates an HttpOnly signed session usable for both page and CSV', async () => {
  const response = await onRequest({ request:loginRequest(env.DATA_PASSWORD),env });
  assert.equal(response.status,303);
  assert.equal(response.headers.get('location'),'/data/');
  const setCookie = response.headers.get('set-cookie');
  assert.match(setCookie,/HttpOnly/);assert.match(setCookie,/SameSite=Strict/);assert.match(setCookie,/Secure/);
  assert.match(setCookie,/Path=\/data/);assert.match(setCookie,/Max-Age=28800/);
  assert.ok(!setCookie.includes(env.DATA_PASSWORD));
  const cookie = setCookie.split(';')[0];
  for(const path of ['/data/','/data/keywords.csv']) {
    const result=await onRequest({request:new Request('https://example.test'+path,{headers:{cookie}}),env});
    assert.equal(result.status,200);
  }
});

test('wrong login, CSRF, unsupported bodies and oversized payloads do not issue a session', async () => {
  for(const req of [loginRequest('wrong password'),loginRequest(env.DATA_PASSWORD,'https://other.test'),loginRequest(env.DATA_PASSWORD,'https://example.test','text/plain'),loginRequest('x'.repeat(5000))]) {
    const response = await onRequest({request:req,env});
    assert.ok([200,403].includes(response.status));assert.equal(response.headers.get('set-cookie'),null);
    assert.ok(!(await response.text()).includes('keyword-dataset'));
  }
});

test('session tampering, expiry and password rotation deny access; logout clears it',async(t)=>{
  const session=await onRequest({request:loginRequest(env.DATA_PASSWORD),env});
  const cookie=session.headers.get('set-cookie').split(';')[0];
  const changed=cookie.replace(/\.(\d|[A-Za-z_-])/,(_,letter)=>'.'+(letter==='a'?'b':'a'));
  assert.equal((await onRequest({request:new Request('https://example.test/data/',{headers:{cookie:changed}}),env})).status,401);
  assert.equal((await onRequest({request:new Request('https://example.test/data/',{headers:{cookie}}),env:{DATA_PASSWORD:'rotated-test-password'}})).status,401);
  const originalNow=Date.now();t.mock.method(Date,'now',()=>originalNow+28801*1000);
  assert.equal((await onRequest({request:new Request('https://example.test/data/',{headers:{cookie}}),env})).status,401);
  const logout=await onRequest({request:new Request('https://example.test/data/logout',{method:'POST',headers:{origin:'https://example.test',cookie}}),env});
  assert.equal(logout.status,303);assert.match(logout.headers.get('set-cookie'),/Max-Age=0/);
  const crossOrigin=await onRequest({request:new Request('https://example.test/data/logout',{method:'POST',headers:{origin:'https://other.test',cookie}}),env});
  assert.equal(crossOrigin.status,403);
});

test('browser requests receive a public sign-in form, never private data; enhanced login returns 204',async()=>{
  const response=await onRequest({request:new Request('https://example.test/data/',{headers:{accept:'text/html'}}),env});
  assert.equal(response.status,200);
  const body=await response.text();assert.match(body,/action="\/data\/login"/);assert.ok(!body.includes('keyword-dataset'));
  const req=loginRequest(env.DATA_PASSWORD);req.headers.set('accept','application/json');
  const signed=await onRequest({request:req,env});assert.equal(signed.status,204);assert.ok(signed.headers.has('set-cookie'));assert.equal(await signed.text(),'');
  const bad=loginRequest('wrong-password-123456');bad.headers.set('accept','application/json');
  const rejected=await onRequest({request:bad,env});assert.equal(rejected.status,401);assert.deepEqual(await rejected.json(),{ok:false});
  const out=new Request('https://example.test/data/logout',{method:'POST',headers:{origin:'https://example.test',accept:'application/json'}});
  const logout=await onRequest({request:out,env});assert.equal(logout.status,204);assert.match(logout.headers.get('set-cookie'),/Max-Age=0/);
});
