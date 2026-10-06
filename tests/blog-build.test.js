import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { protectBlogBuild,clearCmsConfigRedirect } from '../scripts/protect-blog-build.mjs';

test('CMS artifact removes generated secrets and private data but preserves the deployable bundle',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'lumi-blog-build-test-'));
 const root=pathToFileURL(dir+'/');
 try {
  await mkdir(new URL('client/data/',root),{recursive:true});
  await mkdir(new URL('server/.prerender/',root),{recursive:true});
  for(const file of ['server/.dev.vars','server/.dev.vars.preview','server/.prerender/.dev.vars','server/.env','server/.env.local','client/data/index.html','client/data/keywords.csv']) await writeFile(new URL(file,root),'synthetic-private-fixture');
  await writeFile(new URL('server/entry.mjs',root),'export default {}');
  await writeFile(new URL('server/wrangler.json',root),'{}');
  await protectBlogBuild(root);
  for(const file of ['server/.dev.vars','server/.dev.vars.preview','server/.prerender/.dev.vars','server/.env','server/.env.local','client/data/']) await assert.rejects(access(new URL(file,root)));
  assert.equal(await readFile(new URL('server/entry.mjs',root),'utf8'),'export default {}');
  assert.equal(await readFile(new URL('server/wrangler.json',root),'utf8'),'{}');
 }finally{await rm(dir,{recursive:true,force:true});}
});

test('CMS config redirect is cleared for subsequent Pages commands and unrelated redirects survive',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'lumi-blog-config-test-'));const root=pathToFileURL(dir+'/');
 try{await mkdir(new URL('.wrangler/deploy/',root),{recursive:true});const target=new URL('.wrangler/deploy/config.json',root);
 await writeFile(target,JSON.stringify({configPath:'../../dist-blog/server/wrangler.json'}));await clearCmsConfigRedirect(root);await assert.rejects(access(target));
 await writeFile(target,JSON.stringify({configPath:'../../other/server/wrangler.json'}));await clearCmsConfigRedirect(root);assert.ok(await readFile(target,'utf8'));
 }finally{await rm(dir,{recursive:true,force:true});}
});
