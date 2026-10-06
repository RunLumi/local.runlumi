// Read-only production route/metadata check; never sends enquiries or credentials.
import assert from 'node:assert/strict';
import {serviceRoutes} from '../src/services/routes.js';
const origin=process.env.RELEASE_ORIGIN ?? 'https://local.runlumi.app';
const sitemap=await fetch(origin+'/sitemap.xml').then(async r=>{assert.equal(r.status,200);return r.text();});
for(const r of Object.values(serviceRoutes))for(const locale of ['vi','en']) {
 const url=origin+r[locale];const response=await fetch(url);assert.equal(response.status,200,url);const html=await response.text();
 assert.ok(html.includes(`rel="canonical" href="https://local.runlumi.app${r[locale]}"`),url);
 for(const l of ['vi','en'])assert.ok(html.includes(`hreflang="${l}-VN" href="https://local.runlumi.app${r[l]}"`),url);
 assert.ok(sitemap.includes('https://local.runlumi.app'+r[locale]),url);
 assert.ok(html.includes('name="source"'),url);assert.ok(!html.includes('discord.com/api/webhooks'),url);
 console.log('Verified '+r[locale]);
}
for(const path of ['/blog/','/en/blog/','/blog/rss.xml','/en/blog/rss.xml']) {const response=await fetch(origin+path);assert.equal(response.status,200,path);await response.text();}
for(const path of ['/data/keywords.csv','/data/index.html']) {const response=await fetch(origin+path);const body=await response.text();assert.ok([200,401,503].includes(response.status));assert.ok(!body.includes('Avg. monthly searches'),'Private keyword data must not appear anonymously.');}
console.log('PASS: production service/industry pairs, journal/feed/sitemap and anonymous private-data protection.');
