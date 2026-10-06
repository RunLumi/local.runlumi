import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { proxyBlog } from '../server/blog-proxy.js';
const posts = readdirSync('src/blog/content').map(f=>JSON.parse(readFileSync('src/blog/content/'+f,'utf8')));
test('release guides have bilingual counterparts, real sources and valid related links',()=>{
 assert.equal(posts.length,10);
 for(const p of posts){
  assert.ok(posts.some(x=>x.slug===p.slug && x.locale!==p.locale));
  assert.ok(p.sources.length>=2);
  for(const s of p.sources)assert.match(s.url,/^https:\/\/support\.google\.com\//);
  for(const slug of p.related)assert.ok(posts.some(x=>x.slug===slug && x.locale===p.locale));
  assert.ok(p.content.every(b=>b._key && b.children.length));
  const path=`dist/${p.locale==='en'?'en/':''}blog/${p.slug}/index.html`;
  const html=readFileSync(path,'utf8');
  assert.match(html,/<a href="https:\/\/support\.google\.com\/business\/answer\/\d+" rel="noopener">(?:Hướng dẫn chính thức của Google\.|Google’s official guidance\.)<\/a>/);
  assert.match(html,/<h1>/);assert.equal((html.match(/<h1>/g)??[]).length,1);
  assert.match(html,/href="\/(en\/)?#bat-dau"/);
  for(const [,id]of html.matchAll(/href="#([^"]+)"/g))assert.ok(html.includes(`id="${id}"`),`${path}: ${id}`);
  assert.match(html,/hreflang="vi"/);assert.match(html,/hreflang="en"/);
  const ld=JSON.parse(html.match(/type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.ok(ld['@graph'].some(x=>x['@type']==='Article'&&x.headline===p.title));
 }
});
test('discovery endpoints omit private data, admin and search pages',()=>{
 const sitemap=readFileSync('dist/sitemap.xml','utf8');
 assert.doesNotMatch(sitemap,/\/data\/|_emdash|\/search\//);
 for(const p of posts)assert.ok(sitemap.includes(`/blog/${p.slug}/`));
 assert.ok(!existsSync('dist/data/index.html')&&!existsSync('dist/data/keywords.csv'));
 for(const locale of ['','en/'])assert.match(readFileSync(`dist/${locale}blog/search/index.html`,'utf8'),/noindex, follow/);
});
test('optional CMS proxy preserves static mode, forwards auth unchanged and fails without stale content',async()=>{
 const request=new Request('https://local.runlumi.app/blog/');
 assert.equal(await (await proxyBlog({request,env:{},next:()=>new Response('static')})).text(),'static');
 assert.equal((await proxyBlog({request:new Request('https://local.runlumi.app/_emdash/admin'),env:{},next:()=>new Response('bad')})).status,404);
 let seen;
 const r=await proxyBlog({request:new Request('https://local.runlumi.app/_emdash/api/content/posts',{method:'POST',body:'synthetic',headers:{Origin:'https://local.runlumi.app'}}),env:{BLOG_ADMIN_READY:'true',BLOG:{fetch:async req=>{seen=req;return new Response('saved',{headers:{'Set-Cookie':'synthetic=value; HttpOnly'}});}}}});
 assert.equal(seen.headers.get('Origin'),'https://local.runlumi.app');assert.equal(seen.method,'POST');assert.equal(await seen.text(),'synthetic');
 assert.equal(r.headers.get('Cache-Control'),'no-store');assert.equal(r.headers.get('X-Robots-Tag'),'noindex, nofollow');assert.match(r.headers.get('Set-Cookie'),/HttpOnly/);
 const fail=await proxyBlog({request,env:{BLOG:{fetch:async()=>{throw new Error('unavailable');}}}});
 assert.equal(fail.status,503);assert.doesNotMatch(await fail.text(),/static|seed/);
});
