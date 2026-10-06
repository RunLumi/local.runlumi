// Generate distribution-size derivatives from the selected original outputs.
// Input is a private operator-side manifest, never an image API credential.
import sharp from 'sharp';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {photographKeys} from '../src/blog/photographs.js';
const input=process.argv[2];assert.ok(input,'Pass the selected image manifest path');
const images=JSON.parse(await readFile(input,'utf8'));
assert.equal(images.length,photographKeys.length);
await mkdir('public/blog-images',{recursive:true});
const output=[];
for(const {key,path,prompt} of images){
 assert.ok(photographKeys.includes(key));assert.ok(prompt);
 const original=await readFile(path);const metadata=await sharp(original).metadata();
 assert.equal(metadata.width,1536);assert.equal(metadata.height,1024);
 const assets=[];
 for(const width of [480,960,1536]){
  const dest=`public/blog-images/${key}-${width}.webp`;
  const image=await sharp(original).resize({width,withoutEnlargement:true}).webp({quality:78,effort:6}).toBuffer();
  await writeFile(dest,image);const size=await sharp(image).metadata();
  assets.push({path:dest,width:size.width,height:size.height,bytes:image.length,sha256:createHash('sha256').update(image).digest('hex')});
 }
 output.push({key,prompt,generator:'built-in image_gen',generatedDate:'2026-10-06',originalSha256:createHash('sha256').update(original).digest('hex'),assets});
 console.log(key+': '+assets.map(a=>`${a.width}w ${Math.round(a.bytes/1024)}KiB`).join(', '));
}
await writeFile('docs/blog/photography.json',JSON.stringify({description:'Generated editorial illustrations, not photographs of real Lumi customers or premises. Selected outputs visually inspected; only distribution-size derivatives are public.',images:output},null,2)+'\n');
