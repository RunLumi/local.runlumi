import { serviceRoutes } from '../services/routes.js';
import { base, articleUrl, origin, topics, xml } from './site.js';

// Called with the currently published CMS collection in production, never the seed.
export function sitemapEntries({vi=[],en=[]}, now=new Date()) {
  const entries=new Map();
  const addGroup=(group,paths)=>{
    const locales=Object.keys(paths);
    const alternates=locales.length===2
      ? [...locales.map(locale=>({lang:group==='pages'?`${locale}-VN`:locale,url:origin+paths[locale]})),{lang:'x-default',url:origin+paths.vi}]
      : [];
    for(const path of Object.values(paths))entries.set(origin+path,{group,url:origin+path,alternates});
  };
  addGroup('pages',{vi:'/',en:'/en/'});
  for(const route of Object.values(serviceRoutes))addGroup('pages',{vi:route.vi,en:route.en});
  addGroup('journal',{vi:'/blog/',en:'/en/blog/'});
  addGroup('journal',{vi:'/blog/about/',en:'/en/blog/about/'});
  const published={};
  for(const [locale,posts] of Object.entries({vi,en})) {
    published[locale]=posts.filter(post=>post.locale===locale && !post.draft &&
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) && !['about','search','topics'].includes(post.slug) &&
      Number.isFinite(Date.parse(post.pub_date)) && Date.parse(post.pub_date)<=now.getTime());
  }
  for(const topic of topics) {
    const paths={};
    for(const locale of ['vi','en'])if(published[locale].some(p=>p.topic===topic.slug))paths[locale]=`${base(locale)}topics/${topic.slug}/`;
    addGroup('topics',paths);
  }
  for(const slug of [...new Set([...published.vi,...published.en].map(p=>p.slug))].sort()) {
    const paths={};
    for(const locale of ['vi','en']) {
      const post=published[locale].find(p=>p.slug===slug);
      if(post)paths[locale]=articleUrl(post);
    }
    addGroup('articles',paths);
  }
  return [...entries.values()];
}

export function sitemapXml(posts) {
  const entries=sitemapEntries(posts);
  const groups=['pages','journal','topics','articles'];
  return '<?xml version="1.0" encoding="UTF-8"?>\n'+
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+
    groups.map(group=>`  <!-- ${group} -->\n`+entries.filter(entry=>entry.group===group).map(entry=>
      `  <url>\n    <loc>${xml(entry.url)}</loc>\n`+
      entry.alternates.map(a=>`    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${xml(a.url)}" />\n`).join('')+
      '  </url>\n').join('')).join('')+'</urlset>\n';
}
