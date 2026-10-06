import { readFile } from 'node:fs/promises';
import { EmDashClient, devBypassInterceptor, tokenInterceptor } from 'emdash/client';
const url = process.env.EMDASH_URL ?? 'http://127.0.0.1:4324';
const target = new URL(url);
const token = process.env.EMDASH_TOKEN;
if (!token && !['localhost','127.0.0.1','[::1]'].includes(target.hostname)) throw new Error('Remote imports require EMDASH_TOKEN; dev bypass is loopback only.');
const client = new EmDashClient({ baseUrl:url,interceptors:[token ? tokenInterceptor(token) : devBypassInterceptor(url)] });
const seed = JSON.parse(await readFile(new URL('../seed/blog.json',import.meta.url),'utf8'));
// Skip existing entries. This command never overwrites CMS editorial changes.
let created = 0;
const ids = new Map();
for (const locale of ['vi','en']) {
 const existing = new Map();
 for await (const item of client.listAll('posts',{locale})) existing.set(item.slug,item.id);
 for (const post of seed.content.posts.filter(p=>p.locale===locale)) {
  if (existing.has(post.slug)) { if(locale==='vi')ids.set(post.slug,existing.get(post.slug));continue; }
  const entry = await client.create('posts',{slug:post.slug,locale,status:'draft',...(locale==='en'?{translationOf:ids.get(post.slug)}:{}),data:post.data});
  if(locale==='vi')ids.set(post.slug,entry.id);
  if(post.status==='published')await client.publish('posts',entry.id);
  created++;
 }
}
console.log(`Imported ${created} new articles; existing CMS entries preserved.`);
