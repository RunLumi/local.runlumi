# Protected keyword dashboard guidance refresh — RUN-034

## Change

Updated only the internal recommendation copy in `src/pages/data/index.astro`. The dashboard now identifies the VI/EN review guide as published, labels the keyword estimates historical, records the 7 October SERP findings, and defers new Maps pages until buyer-language and Search Console evidence support them. The private-data source CSV, authentication route, CMS binding, cookies, tracking, public marketing pages and secrets were not changed.

## Validation and release

- PR #52 merged to `main` as `17a03c4464288c58596b13d39a178713dbc5ceb4`, tree `493ca16828c404a95f79d057df99e21dcc83419d`.
- The repository pre-push hook passed the full test suite and 42-route static build. Its private-output guard removed the dashboard HTML/CSV from public `dist` assets.
- The PR build and automatic production workflow failed before any runner step because GitHub Actions reported that the budget prevented further use. No hosted Linux pass is claimed.
- Manually deployed the exact merged main source to Cloudflare Pages project `lumi-local`, branch `main`: deployment `6b79022c-3a18-420b-80c2-51d12b16f9c2`, host `https://6b79022c.lumi-local.pages.dev`.
- `RELEASE_ORIGIN=https://local.runlumi.app node scripts/verify-release.mjs` passed all bilingual service/industry checks, journal/feeds/sitemap checks, and anonymous private-data guards. A signed-in browser readback confirmed the new strategy text at `/data/`; its historical window, unknown targeting and zero organic observations remain visible. Anonymous `/data/` routes still redirect/deny as expected.

This is a private dashboard guidance refresh, not a search-performance result. No Search Console submission, URL-indexing request, tracking change, CMS article edit or customer outreach occurred in RUN-034.
