import { defineConfig } from 'astro/config';
import { blogRuntime, sourceAlias, liveAlias, cmsEnabled } from './blog.config.mjs';
const blog = await blogRuntime();

export default defineConfig({
  site: 'https://local.runlumi.app',
  output: 'static',
  trailingSlash: 'always',
  ...blog.config,
  integrations: blog.integrations,
  i18n: { defaultLocale:'vi', locales:['vi','en'], routing:{prefixDefaultLocale:false,redirectToDefaultLocale:false} },
  build: { inlineStylesheets: 'never', assets: cmsEnabled ? '_blog-assets' : '_astro' },
  vite: {
    resolve: { alias: { '@blog/source': sourceAlias, '@blog/live':liveAlias } },
    build: { assetsInlineLimit: 0 },
    server: { fs: { deny: ['.env', '.env.*', '*.pem', '*.crt', '**/.git/**', '**/.dev.vars', '**/.data-build/**', '**/docs/LumiLocalKeywords.csv'] } },
  },
  devToolbar: { enabled: false },
});
