// Read-only live imagery verification. No credentials, enquiries or CMS writes.
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {photographFor,photographKeys} from '../src/blog/photographs.js';
const origin=process.env.RELEASE_ORIGIN ?? 'https://local.runlumi.app';
const provenance=JSON.parse(await readFile(new URL('../docs/blog/photography.json',import.meta.url),'utf8'));
for(const key of photographKeys){
 const locale=key.slice(0,2),slug=key.slice(3);const photo=photographFor({locale,slug});
 const path=`/${locale==='en'?'en/':''}blog/${slug}/`;
 const r=await fetch(origin+path);assert.equal(r.status,200,path);assert.equal(r.headers.get('cache-control'),'no-store');const html=await r.text();
 assert.ok(html.includes('photograph-article'));assert.ok(html.includes(photo.srcset));assert.ok(html.includes(`property="og:image" content="https://local.runlumi.app${photo.src}"`));assert.ok(html.includes(`name="twitter:image" content="https://local.runlumi.app${photo.src}"`));assert.match(html,/<figcaption>[^<]*AI/);
 const ld=JSON.parse(html.match(/type="application\/ld\+json">(.*?)<\/script>/s)[1]);assert.equal(ld['@graph'].find(i=>i['@type']==='Article').image,'https://local.runlumi.app'+photo.src);
 for(const asset of provenance.images.find(i=>i.key===key).assets){const image=await fetch(origin+'/'+asset.path.replace(/^public\//,''));assert.equal(image.status,200,asset.path);assert.ok(image.headers.get('content-type')?.includes('image/webp'));const bytes=Buffer.from(await image.arrayBuffer());assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256,asset.path);}
 console.log('Verified photograph, disclosure, metadata and 3 image sizes: '+path);
}
console.log('PASS: all ten live CMS guides have their reviewed photographic illustrations.');
