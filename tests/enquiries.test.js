import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost, onRequestGet } from '../functions/api/enquiries.js';
const valid = { name:'Synthetic Test', business:'Test business', phone:'0908123456', consent:true, locale:'en' };
const request = (data=valid, headers={}) => new Request('https://example.test/api/enquiries', { method:'POST', headers:{'content-type':'application/json', ...headers}, body:JSON.stringify(data) });
const env = { DISCORD_TRIAL_WEBHOOK_URL:'https://discord.com/api/webhooks/test/test' };
test('missing secret fails closed and responses are not cached', async()=>{
 const r=await onRequestPost({request:request(),env:{}}); assert.equal(r.status,503); assert.equal(r.headers.get('cache-control'),'no-store'); assert.equal((await r.json()).ok,false);
});
test('cross-origin, invalid consent and invalid phone are rejected',async()=>{
 assert.equal((await onRequestPost({request:request(valid,{origin:'https://other.test'}),env})).status,403);
 for(const data of [{...valid,consent:false},{...valid,phone:'call me'},{...valid,email:'bad'}]) assert.equal((await onRequestPost({request:request(data),env})).status,400);
});
test('actual bytes are capped without Content-Length, including multibyte payloads',async()=>{
 for(const note of ['a'.repeat(25000),'ệ'.repeat(9000)]) assert.equal((await onRequestPost({request:request({...valid,note}),env})).status,413);
});
test('malformed JSON and unsupported bodies fail, GET is rejected',async()=>{
 const r=new Request('https://example.test/api/enquiries',{method:'POST',headers:{'content-type':'application/json'},body:'{'});
 assert.equal((await onRequestPost({request:r,env})).status,400);
 assert.equal((await onRequestPost({request:request(valid,{'content-type':'text/plain'}),env})).status,400);
 assert.equal(onRequestGet({request:new Request('https://example.test/api/enquiries')}).status,405);
});
test('honeypot avoids delivery; upstream failures never report success',async(t)=>{
 let calls=0;t.mock.method(globalThis,'fetch',async()=>{calls++;return new Response('',{status:500});});
 assert.equal((await onRequestPost({request:request({...valid,website:'spam'}),env})).status,202);assert.equal(calls,0);
 assert.equal((await onRequestPost({request:request(),env})).status,502);assert.equal(calls,1);
});
test('successful synthetic delivery suppresses mentions and has a deadline',async(t)=>{
 t.mock.method(globalThis,'fetch',async(url,init)=>{
  assert.match(url,/wait=true/);assert.equal(init.redirect,'error');assert.ok(init.signal);
  const body=JSON.parse(init.body);assert.deepEqual(body.allowed_mentions,{parse:[]});assert.ok(!body.content.includes('@everyone'));
  return new Response('{}',{status:200});
 });
 const r=await onRequestPost({request:request({...valid,name:'@everyone'}),env});assert.equal(r.status,200);assert.deepEqual(await r.json(),{ok:true});
});
test('network failure and native form posts',async(t)=>{
 t.mock.method(globalThis,'fetch',async()=>{throw new Error('synthetic network failure');});
 assert.equal((await onRequestPost({request:request(),env})).status,502);
 const req=new Request('https://example.test/api/enquiries',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded','accept':'text/html'},body:new URLSearchParams({...valid,consent:'yes'})});
 const r=await onRequestPost({request:req,env:{}});assert.equal(r.status,503);assert.match(r.headers.get('content-type'),/text\/html/);
});
test('native English form response preserves language and return route',async()=>{
 const req=new Request('https://example.test/api/enquiries',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded',accept:'text/html'},body:new URLSearchParams({...valid,consent:'yes'})});
 const r=await onRequestPost({request:req,env:{}});const html=await r.text();
 assert.equal(r.status,503);assert.match(html,/<html lang="en">/);assert.match(html,/href="\/en\/"/);assert.match(html,/could not be confirmed/);
});
