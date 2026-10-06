import { readFile, readdir, writeFile } from 'node:fs/promises';
const directory = new URL('../src/blog/content/', import.meta.url);
const posts = await Promise.all((await readdir(directory)).filter(f => f.endsWith('.json')).sort().map(async f => JSON.parse(await readFile(new URL(f,directory),'utf8'))));
const fields = [
  ['title','Title','string'], ['description','Search description','text'], ['answer','Short answer','text'], ['content','Article','portableText'], ['topic','Topic slug','string'], ['keyword','Primary query (editorial only)','string'], ['author','Publisher slug','string'], ['pub_date','Publication date','datetime'], ['reviewed_date','Sources checked on','string'], ['featured','Featured','boolean'], ['sources','Primary sources: label and url','json'], ['related','Related article slugs','json']
].map(([slug,label,type]) => ({ slug,label,type,required:['title','description','answer','content','topic','author','pub_date','reviewed_date','sources'].includes(slug), ...(['title','description','content'].includes(slug) ? {searchable:true} : {}) }));
const seed = { version:'1',defaultLocale:'vi',meta:{name:'Lumi Local blog',description:'Owner-first local presence guides'},settings:{title:'Lumi Local',tagline:'Hiểu rõ trước khi thuê.'},collections:[{slug:'posts',label:'Articles',labelSingular:'Article',urlPattern:'/blog/{slug}',supports:['drafts','revisions','search','seo'],fields}],content:{ posts:posts.map(p => {
  const {locale,slug,...data}=p;
  return {id:`${locale}-${slug}`,slug,locale,status:'published',...(locale==='en'?{translationOf:`vi-${slug}`} : {}),data};
}).sort((a,b)=>a.locale==='vi' && b.locale!=='vi'?-1:a.locale!=='vi' && b.locale==='vi'?1:0) }};
await writeFile(new URL('../seed/blog.json',import.meta.url),JSON.stringify(seed,null,2)+'\n');
console.log(`Generated reviewed seed: ${posts.length} articles. Never reapplied over live editorial changes.`);
