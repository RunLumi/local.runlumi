// Read-only release check through a locally connected Pages → compiled CMS Worker.
import assert from 'node:assert/strict';
const root = new URL(process.env.BLOG_PROXY_URL ?? 'http://127.0.0.1:4335');
if (root.protocol !== 'http:' || !['127.0.0.1','localhost','[::1]'].includes(root.hostname)) throw new Error('This integration verifier is local-only.');
const read = async(path) => {
 const response = await fetch(new URL(path,root),{redirect:'manual',signal:AbortSignal.timeout(10000)});
 return {response,body:await response.text()};
};
for(const path of ['/blog/','/en/blog/','/blog/dich-vu-google-maps/','/en/blog/dich-vu-google-maps/','/blog/rss.xml','/en/blog/rss.xml','/sitemap.xml']) {
 const {response,body}=await read(path);
 assert.equal(response.status,200,path);
 assert.ok(body.length>500,path);
 assert.equal(response.headers.get('Cache-Control'),'no-store',path);
 if(path.endsWith('/')) {
  assert.match(body,/Lumi Local/);
  assert.match(response.headers.get('Content-Security-Policy'),/script-src 'self'/);
  assert.doesNotMatch(body,/@vite\/client|\/@fs\/|\/node_modules\//,'Release check requires compiled CMS output, not the Astro dev server.');
 }
}
const first=await read('/_emdash/admin/login');assert.equal(first.response.status,200);
const policy=first.response.headers.get('Content-Security-Policy');
const nonce=policy.match(/'nonce-([^']+)'/)?.[1];assert.ok(nonce);
for(const [,attrs]of first.body.matchAll(/<script\b([^>]*)>/g))assert.ok(attrs.includes(`nonce="${nonce}"`),'Admin script must match the response nonce.');
const assets=new Set([...first.body.matchAll(/(?:src|href)="(\/_blog-assets\/[^" ]+)"/g)].map(m=>m[1]));
assert.ok(assets.size>=2,'Compiled admin scripts/styles must be present.');
for(const path of assets){const {response}=await read(path);assert.equal(response.status,200,path);}
const second=await read('/_emdash/admin/login');assert.notEqual(second.response.headers.get('Content-Security-Policy'),policy);
for(const path of ['/_emdash/api/auth/dev-bypass','/_emdash/api/setup/dev-bypass'])assert.ok([403,404].includes((await read(path)).response.status),'Development bypass must be disabled in the compiled Worker.');
assert.ok([401,403].includes((await read('/_emdash/api/content/posts')).response.status),'Anonymous visitor must not read the admin content API.');
for(const path of ['/data/','/data/keywords.csv'])assert.equal((await read(path)).response.status,503,'Private research must fail closed with no auth secret.');
const enquiry=await fetch(new URL('/api/enquiries',root),{method:'POST',headers:{'Content-Type':'application/json',Origin:root.origin},body:JSON.stringify({name:'Synthetic Test',business:'Synthetic integration check',phone:'0908123456',consent:true,locale:'en'})});
assert.equal(enquiry.status,503,'This verifier requires the secret-free preview; no external delivery.');assert.equal((await enquiry.json()).ok,false);
console.log(`PASS: compiled CMS through real Pages service binding; ${assets.size} admin assets, nonce policy, disabled dev bypass, anonymous API denial, private-data denial and secret-free enquiry failure.`);
