import test from 'node:test';
import assert from 'node:assert/strict';
import {copy} from '../src/content/copy.js';
import {readFileSync} from 'node:fs';
test('both locales preserve prices, full credit, and safe claims',()=>{
 for(const [locale,c] of Object.entries(copy)){
  const text=JSON.stringify(c);
  assert.doesNotMatch(text,/5.star|5 sao|vĩnh viễn|sub.second|dưới 1 giây|until satisfied|24 hours|24h/i);
  assert.equal(c.packages.starter.price,locale==='vi'?'1.990.000đ':'1,990,000 VND');
  assert.match(c.packages.credit,/30/);assert.match(c.packages.credit,/1[.,]591[.,]000/);
  assert.equal(c.included.items.length,6);assert.equal(c.faq.items.length,8);
  // COPY.md: no unmeasured speed, no guaranteed .vn/.com eligibility, no implied physical stand.
  assert.doesNotMatch(text,/tốc độ cao|high.speed|fast hosting|\.vn\/\.com|standee|all.inclusive|live draft/i);
  assert.ok(c.convenience.you.items.length<c.convenience.lumi.items.length,'owner part stays visibly smaller');
  for(const key of ['invalid','phoneHint','phoneFormat']) assert.ok(c.form[key],`${locale}: form.${key}`);
 }
});
test('pages share locale PNG cards and offer data that matches pricing',()=>{
 for(const [file,locale] of [['dist/index.html','vi'],['dist/en/index.html','en']]){
  const html=readFileSync(file,'utf8');
  // Inline interface strings in Landing.astro follow the same contract as copy.js.
  assert.doesNotMatch(html,/tốc độ cao|high.speed|fast hosting|\.vn\/\.com|standee|all.inclusive|live draft/i,file);
  // Phone pattern must compile under the HTML v-flag and match the server's 8–15 digit rule.
  const pattern=new RegExp(`^(?:${html.match(/name="phone"[^>]*pattern="([^"]+)"/)[1]})$`,'v');
  for(const ok of ['0908 123 456','+84 908 123 456','(028) 3822-1234']) assert.match(ok,pattern);
  for(const bad of ['++++++++','        ','0908','1234567890123456']) assert.doesNotMatch(bad,pattern);
  assert.match(html,new RegExp(`og:image" content="https://local.runlumi.app/social-card-${locale}.png"`));
  const png=readFileSync(`public/social-card-${locale}.png`);
  assert.equal(png.readUInt32BE(16),1200);assert.equal(png.readUInt32BE(20),630);
  const ld=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.deepEqual(ld.offers.map(o=>[o.price,o.priceCurrency]),[['1990000','VND'],['399000','VND']]);
  assert.doesNotMatch(JSON.stringify(ld),/aggregateRating|review/i);
 }
 assert.match(readFileSync('dist/404.html','utf8'),/noindex/);
});
test('built pages include local form and all anchor targets',()=>{
 for(const file of ['dist/index.html','dist/en/index.html']){
  const html=readFileSync(file,'utf8');
  for(const [,id] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(html.includes(`id="${id}"`),`${file}: missing ${id}`);
  assert.match(html,/action="\/api\/enquiries"/);assert.doesNotMatch(html,/discord\.com\/api\/webhooks/);
 }
});
