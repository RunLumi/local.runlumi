import test from 'node:test';
import assert from 'node:assert/strict';
import { checkBlogSetupAccess } from '../server/blog-setup-lock.js';
import { proxyBlog } from '../server/blog-proxy.js';
const secret=['synthetic','owner','setup','fixture','123456789'].join('-');
const request=(authorization)=>new Request('https://local.runlumi.app/_emdash/admin/setup',{headers:authorization?{Authorization:authorization}:{}});
test('first-admin setup fails closed without configuration or with malformed access',async()=>{
 for(const env of [{},{BLOG_SETUP_TOKEN:''},{BLOG_SETUP_TOKEN:'weak'}])assert.equal((await checkBlogSetupAccess(request(),env)).status,503);
 for(const header of ['', 'Basic !!!', 'Basic '+btoa('owner:incorrect'),'Basic '+btoa('other:'+secret),'Basic '+btoa('owner:'+secret)+'junk'])assert.equal((await checkBlogSetupAccess(request(header),{BLOG_SETUP_TOKEN:secret})).status,401);
});
test('only owner setup credential or the explicit ready flag can pass the first-admin lock',async()=>{
 assert.equal(await checkBlogSetupAccess(request('Basic '+btoa('owner:'+secret)),{BLOG_SETUP_TOKEN:secret}),null);
 assert.equal(await checkBlogSetupAccess(request(),{BLOG_ADMIN_READY:'true'}),null);
 assert.equal((await checkBlogSetupAccess(request(),{BLOG_ADMIN_READY:true})).status,503);
});
test('the Pages proxy checks setup access before contacting EmDash while public blog remains readable',async()=>{
 let calls=0;const env={BLOG:{fetch:async()=>{calls++;return new Response('upstream');}}};
 assert.equal((await proxyBlog({request:request(),env})).status,503);assert.equal(calls,0);
 assert.equal((await proxyBlog({request:new Request('https://local.runlumi.app/blog/'),env})).status,200);assert.equal(calls,1);
});
