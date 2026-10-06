import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {photographFor,photographKeys} from '../src/blog/photographs.js';
const posts=readdirSync('src/blog/content').map(f=>JSON.parse(readFileSync('src/blog/content/'+f,'utf8')));
const provenance=JSON.parse(readFileSync('docs/blog/photography.json','utf8'));
test('every bilingual guide has a distinct local photograph with verified dimensions and provenance',async()=>{
 assert.equal(photographKeys.length,10);assert.equal(provenance.images.length,10);
 assert.equal(new Set(provenance.images.map(i=>i.originalSha256)).size,10);
 for(const p of posts){
  const photo=photographFor(p);assert.ok(photo);assert.ok(photo.alt);assert.equal(photo.caption,p.locale==='en'?'Illustration':'Ảnh minh hoạ');
  const entry=provenance.images.find(i=>i.key===photo.key);assert.ok(entry.prompt);assert.equal(entry.generator,'built-in image_gen');
  for(const asset of entry.assets){const bytes=readFileSync(asset.path);assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256);const meta=await sharp(bytes).metadata();assert.equal(meta.format,'webp');assert.equal(meta.width,asset.width);assert.equal(meta.height,asset.height);assert.equal(asset.height,Math.round(asset.width*2/3));assert.ok(bytes.length<300_000);}
 }
});
test('unknown CMS articles never inherit an unrelated release photograph',()=>{
 for(const p of [{locale:'vi',slug:'new-guide'},{locale:'en',slug:'../dich-vu-google-maps'},{locale:'fr',slug:'seo-google-maps'},null])assert.equal(photographFor(p),undefined);
});
test('visible article photographs, social images and structured data agree, with illustration labels',()=>{
 for(const p of posts){
  const photo=photographFor(p);const html=readFileSync(`dist/${p.locale==='en'?'en/':''}blog/${p.slug}/index.html`,'utf8');
  assert.ok(html.includes('photograph-article'));assert.ok(html.includes(photo.srcset));assert.ok(html.includes(photo.alt));
  assert.ok(html.includes(`property="og:image" content="https://local.runlumi.app${photo.src}"`));
  assert.ok(html.includes(`name="twitter:image" content="https://local.runlumi.app${photo.src}"`));
  assert.ok(html.includes(`<figcaption>${photo.caption}</figcaption>`));assert.match(html,/width="1536" height="1024"/);
  const ld=JSON.parse(html.match(/type="application\/ld\+json">(.*?)<\/script>/s)[1]);assert.equal(ld['@graph'].find(i=>i['@type']==='Article').image,'https://local.runlumi.app'+photo.src);
  if(p.slug==='qr-review-google')assert.ok(html.includes(p.locale==='en'?'Printing and physical stands are excluded.':'Không bao gồm in ấn và giá đỡ.'));
 }
});
