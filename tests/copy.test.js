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
 }
});
test('built pages include local form and all anchor targets',()=>{
 for(const file of ['dist/index.html','dist/en/index.html']){
  const html=readFileSync(file,'utf8');
  for(const [,id] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(html.includes(`id="${id}"`),`${file}: missing ${id}`);
  assert.match(html,/action="\/api\/enquiries"/);assert.doesNotMatch(html,/discord\.com\/api\/webhooks/);
 }
});
