// Reef's switchable static / EmDash architecture, narrowed to the Lumi blog.
import { fontProviders } from 'astro/config';
import { fileURLToPath } from 'node:url';
export const cmsEnabled = process.env.LUMI_BLOG_CMS === '1';
export const sourceAlias = fileURLToPath(new URL(cmsEnabled ? './src/blog/source.emdash.js' : './src/blog/source.static.js', import.meta.url));
export const liveAlias = fileURLToPath(new URL(cmsEnabled ? './src/blog/live.emdash.js' : './src/blog/live.static.js', import.meta.url));
export async function blogRuntime() {
  if (!cmsEnabled) return { config:{}, integrations:[] };
  const [{ default:cloudflare }, { default:react }, { default:emdash }, { d1,r2 }] = await Promise.all([
    import('@astrojs/cloudflare'), import('@astrojs/react'), import('emdash/astro'), import('@emdash-cms/cloudflare')
  ]);
  return {
    config: { fonts:[{provider:fontProviders.local(),name:'Geist',cssVariable:'--font-emdash',options:{variants:[{src:['@fontsource-variable/geist/files/geist-latin-wght-normal.woff2'],weight:'100 900',style:'normal'},{src:['@fontsource-variable/geist/files/geist-vietnamese-wght-normal.woff2'],weight:'100 900',style:'normal'}]}}], output:'server', outDir:'./dist-blog/', trailingSlash:'ignore', adapter:cloudflare({ configPath:'./wrangler.blog.jsonc', imageService:'compile' }) },
    integrations:[react(), emdash({ fonts:false, database:d1({ binding:'BLOG_DB' }), storage:r2({ binding:'BLOG_MEDIA' }), admin:{ siteName:'Lumi Local', logo:'/brand/lumi-logo.svg' } }), {
      name:'lumi:blog-routes', hooks:{ 'astro:route:setup':({ route }) => {
        const component = route.component.replaceAll('\\', '/');
        // Preserve static landing + private dashboard extraction; only CMS and blog are live.
        route.prerender = !(component.includes('/blog/') || component.includes('emdash') || component.endsWith('/sitemap.xml.js'));
      }}
    }]
  };
}
