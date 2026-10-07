import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {serviceRoutes,sourceContexts,validatedContext} from '../src/services/routes.js';
import {onRequestPost} from '../functions/api/enquiries.js';
const htmlFor=path=>readFileSync(`dist${path}index.html`,'utf8');
test('seven bilingual pairs have exact semantic routing, reciprocal locale metadata, sitemap and safe contact forms',()=>{
 assert.equal(Object.keys(serviceRoutes).length,7);
 const sitemap=readFileSync('dist/sitemap.xml','utf8');
 const home={vi:htmlFor('/'),en:htmlFor('/en/')};
 for(const [key,r]of Object.entries(serviceRoutes))for(const locale of ['vi','en']){
  const path=r[locale];const html=htmlFor(path);const other=locale==='vi'?'en':'vi';
  assert.match(html,new RegExp(`rel="canonical" href="https://local.runlumi.app${path}"`));
  for(const lang of ['vi','en'])assert.ok(html.includes(`hreflang="${lang}-VN" href="https://local.runlumi.app${r[lang]}"`));
  assert.ok(html.includes(`hreflang="x-default" href="https://local.runlumi.app${r.vi}"`));
  assert.ok(html.includes(`href="${r[other]}" lang="${other}"`));
  assert.ok(sitemap.includes('https://local.runlumi.app'+path));assert.ok(home[locale].includes(`href="${path}"`));
  assert.equal((html.match(/<h1>/g)??[]).length,1);
  assert.match(html,/action="\/api\/enquiries"/);assert.match(html,/name="source"/);assert.match(html,/name="offer_interest"/);
  for(const id of [...html.matchAll(/href="#([^"]+)"/g)].map(x=>x[1]))assert.ok(html.includes(`id="${id}"`),path+': '+id);
  assert.match(html,/1[.,]990[.,]000/);assert.match(html,/399[.,]000/);assert.match(html,/1[.,]591[.,]000/);assert.match(html,/599[.,]000/);assert.match(html,/999[.,]000/);
  const ld=JSON.parse(html.match(/type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.ok(ld['@graph'].some(x=>x['@type']==='BreadcrumbList'));assert.doesNotMatch(JSON.stringify(ld),/AggregateRating|LocalBusiness|"Review"|FAQPage/);
  assert.ok(!existsSync(`dist/en/dich-vu/${path.split('/').at(-2)}/index.html`));
  assert.ok(!html.includes('discord.com/api/webhooks'));
 }
});
test('website service page distinguishes its owner-confirmed Zalo contact action from embedded chat integration',()=>{
 const vi=htmlFor('/dich-vu/website-doanh-nghiep-dia-phuong/');const en=htmlFor('/en/services/local-business-website/');
 assert.match(vi,/Starter có tích hợp Zalo Chat Widget không\?/);assert.match(vi,/mở Zalo tới kênh do chủ xác nhận/);assert.match(vi,/không bao gồm Zalo Chat Widget nhúng trên website/);
 assert.match(en,/Does Starter include a Zalo Chat Widget\?/);assert.match(en,/opens the Zalo destination the owner confirms/);assert.match(en,/does not include an embedded Zalo Chat Widget/);
});
test('enquiry context is derived from route allowlist rather than arbitrary client data',()=>{
 for(const c of sourceContexts)assert.deepEqual(validatedContext({...c,offer_interest:'forged'}),c);
 for(const raw of [{source:'https://attacker.test/phone=123',locale:'vi'},{source:'/nganh/spa/?name=person',locale:'vi'},{source:'/nganh/spa/',locale:'en'},null])assert.equal(validatedContext(raw),null);
});
test('validated non-PII service intent reaches the real intake payload without unknown or URL query data',async t=>{
 const payloads=[];t.mock.method(globalThis,'fetch',async(_url,init)=>{payloads.push(JSON.parse(init.body));return new Response('{}',{status:200});});
 const valid={name:'Synthetic Test',business:'Synthetic Business',phone:'0908123456',consent:true,locale:'vi',source:'/nganh/spa/',cta_intent:'forged',offer_interest:'forged'};
 const env={DISCORD_TRIAL_WEBHOOK_URL:'https://discord.com/api/webhooks/test/test'};
 const request=data=>new Request('https://local.runlumi.app/api/enquiries',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://local.runlumi.app'},body:JSON.stringify(data)});
 assert.equal((await onRequestPost({request:request(valid),env})).status,200);
 assert.match(payloads[0].content,/Source: \/nganh\/spa\/ \| Intent: preview \| Offer: starter/);assert.doesNotMatch(payloads[0].content,/forged/);
 await onRequestPost({request:request({...valid,source:'/nganh/spa/?private=untrusted'}),env});assert.doesNotMatch(payloads[1].content,/Source:|untrusted/);
});
