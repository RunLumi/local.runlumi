// Real local D1/EmDash lifecycle, no mock CMS. Only disposable synthetic content.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { EmDashClient,devBypassInterceptor } from 'emdash/client';
const root=process.env.BLOG_CMS_URL ?? 'http://127.0.0.1:4324';
const target=new URL(root);
if(target.protocol!=='http:'||!['127.0.0.1','localhost','[::1]'].includes(target.hostname)) throw new Error('Lifecycle tests require a local development CMS.');
const client=new EmDashClient({baseUrl:root,interceptors:[devBypassInterceptor(root)]});
const fixture=JSON.parse(await readFile(new URL('../src/blog/content/vi-dich-vu-google-maps.json',import.meta.url),'utf8'));
const {slug:oldSlug,locale,...data}=fixture;
const slug=`synthetic-cms-check-${Date.now()}`;
const fetchPage=async(path)=>{const r=await fetch(root+path);return {status:r.status,body:await r.text()};};
let id;
try {
 const entry=await client.create('posts',{slug,locale:'vi',status:'draft',data:{...data,title:'Synthetic CMS lifecycle check',featured:false}});id=entry.id;
 assert.equal((await fetchPage('/blog/'+slug+'/')).status,404);
 for(const path of ['/blog/','/blog/rss.xml','/sitemap.xml'])assert.ok(!(await fetchPage(path)).body.includes(slug));
 await client.publish('posts',id);
 assert.equal((await fetchPage('/blog/'+slug+'/')).status,200);
 for(const path of ['/blog/','/blog/rss.xml','/sitemap.xml'])assert.ok((await fetchPage(path)).body.includes(slug),path);
 // A VI-only publication has no fake English page or paired hreflang.
 assert.equal((await fetchPage('/en/blog/'+slug+'/')).status,404);
 assert.ok(!(await fetchPage('/blog/'+slug+'/')).body.includes('hreflang="en"'));
 const current=await client.get('posts',id);
 await client.update('posts',id,{_rev:current._rev,data:{title:'Synthetic CMS updated without rebuilding'},locale:'vi'});
 await client.publish('posts',id);
 assert.ok((await fetchPage('/blog/'+slug+'/')).body.includes('Synthetic CMS updated without rebuilding'));
 await client.unpublish('posts',id);
 assert.equal((await fetchPage('/blog/'+slug+'/')).status,404);
 for(const path of ['/blog/','/blog/rss.xml','/sitemap.xml'])assert.ok(!(await fetchPage(path)).body.includes(slug));
 const withdrawn=await client.get('posts',id);
 await client.update('posts',id,{locale:'vi',_rev:withdrawn._rev,data:{pub_date:'2099-01-01T00:00:00Z'}});
 await client.publish('posts',id);
 assert.equal((await fetchPage('/blog/'+slug+'/')).status,404);
 for(const path of ['/blog/','/blog/rss.xml','/sitemap.xml'])assert.ok(!(await fetchPage(path)).body.includes(slug));
 console.log('PASS: local CMS draft exclusion, publish, edit publication without rebuild, unpublish, feed/sitemap consistency missing translation and future-date exclusion.');
} finally { if(id)await client.delete('posts',id); }
