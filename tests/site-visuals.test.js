import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import sharp from 'sharp';
import { serviceRoutes } from '../src/services/routes.js';

function allFiles(root) {
  return readdirSync(root,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?allFiles(join(root,entry.name)):[join(root,entry.name)]);
}

test('every public HTML page has a locally served illustrative photo',()=>{
  const pages=allFiles('dist').filter(path=>path.endsWith('.html'));
  assert.ok(pages.length>=35,`expected the public routes to be built, got ${pages.length}`);
  for(const path of pages){
    const html=readFileSync(path,'utf8');
    const photos=[...html.matchAll(/src="(\/(?:photos|blog-images)\/[^" ]+\.webp)"/g)].map(m=>m[1]);
    assert.ok(photos.length>0,`${relative('dist',path)} has no page-specific illustrative photo`);
    for(const photo of photos)assert.ok(existsSync(join('public',photo.slice(1))),`${photo} is missing from public assets`);
  }
  assert.ok(!existsSync('dist/data/index.html'),'the private research dashboard stays outside the public Pages bundle');
});

test('service and industry routes receive matching illustrated scenes and the canonical icon set',()=>{
  const expected={maps:'service-maps',check:'service-check',website:'service-website',spa:'salon',garage:'garage',hvac:'hvac'};
  for(const [key,scene] of Object.entries(expected)){
    const route=serviceRoutes[key];
    for(const locale of ['vi','en']){
      const html=readFileSync(`dist${route[locale]}index.html`,'utf8');
      assert.ok(html.includes(`/photos/${scene}-960.webp`),`${key}/${locale} is missing its scene`);
      assert.match(html,/<svg[^>]+class="lumi-icon service-icon-mark"[^>]+aria-hidden="true"/);
      assert.match(html,/AI illustration|Ảnh minh họa bằng AI/);
      assert.match(html,/srcset="[^"]+480w,[^"]+960w,[^"]+1440w/);
    }
  }
  for(const route of [serviceRoutes.qr.vi,serviceRoutes.qr.en]){
    const html=readFileSync(`dist${route}index.html`,'utf8');
    assert.match(html,/qr-counter-(?:vi|en)-960\.webp/);
    const imageTag=html.match(/<img[^>]+src="\/photos\/qr-counter-(?:vi|en)-960\.webp"[^>]*>/)?.[0]??'';
    assert.match(imageTag,/alt="[^"]+"/);
  }
});

test('editorial policy and not-found pages carry disclosed, descriptive image alternatives',()=>{
  for(const locale of ['','en/']){
    const html=readFileSync(`dist/${locale}blog/about/index.html`,'utf8');
    assert.match(html,/editorial-method-960\.webp/);
    assert.match(html,/AI-generated editorial illustration|Ảnh minh họa biên tập bằng AI/);
    const imageTag=html.match(/<img[^>]+src="\/photos\/editorial-method-960\.webp"[^>]*>/)?.[0]??'';
    assert.match(imageTag,/alt="[^"]+"/);
  }
  const missing=readFileSync('dist/404.html','utf8');
  assert.match(missing,/missing-route-960\.webp/);
  assert.match(missing,/không phải địa chỉ doanh nghiệp cụ thể/);
});

test('new scroll motion stays feature-detected, low-travel and reduced-motion gated',()=>{
  const services=readFileSync('src/styles/services.css','utf8');
  const blog=readFileSync('src/styles/blog.css','utf8');
  for(const css of [services,blog]){
    assert.match(css,/@supports \(animation-timeline:view\(\)\)/);
    assert.match(css,/prefers-reduced-motion:no-preference/);
    assert.match(css,/translateY\(1[0-2]px\)/);
  }
});

test('sitewide ImageGen assets retain prompt, source and derivative hash provenance',async()=>{
  const manifest=JSON.parse(readFileSync('docs/site-visual-assets.json','utf8'));
  assert.equal(manifest.generator,'built-in image_gen');
  assert.deepEqual(manifest.derivatives.widths,[480,960,1440]);
  assert.equal(manifest.images.length,5);
  for(const image of manifest.images){
    assert.match(image.prompt,/Use case: photorealistic-natural/);
    const source=readFileSync(image.source);
    assert.equal(createHash('sha256').update(source).digest('hex'),image.originalSha256);
    const sourceMeta=await sharp(source).metadata();
    assert.equal(sourceMeta.width,1536);assert.equal(sourceMeta.height,1024);
    assert.equal(image.assets.length,3);
    for(const asset of image.assets){
      const bytes=readFileSync(asset.path);
      assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256);
      assert.equal(bytes.length,asset.bytes);
      const meta=await sharp(bytes).metadata();
      assert.equal(meta.width,asset.width);assert.equal(meta.height,asset.height);
    }
  }
});
