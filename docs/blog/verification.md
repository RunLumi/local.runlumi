# Blog verification — 2026-10-06

Implementation proof only. No production deployment, search ranking, AI citation, customer conversion or paid-signal result is claimed.

## Verified locally

- Node 24.19.0; Astro 7.3.2; EmDash 0.38.0; Reef adaptation source/version in REEF.md.
- npm run build: passed; 28 static pages/endpoints. Existing protect-data-build extracts private HTML/CSV from dist.
- npm test: 37 passed, including three blog checks plus existing copy, enquiry and private-data/keyword regressions. Built guides have paired languages, source links, valid heading anchors, exact CTA destinations, truthful Article data and indexable discovery exclusions.
- EmDash seed CLI --validate: passed for seed/blog.json; ten articles, five per language. Initial imports were real local D1 writes, not mocked content.
- npm run build:blog: passed. Worker output under dist-blog; private data HTML/CSV removed. Local Geist Font registration avoids remote font fetching. Runtime date 2026-09-30 fits the preserved local workerd binary.
- scripts/verify-blog-cms.mjs: passed against the actual local EmDash/D1 boundary. Draft → published → edited draft → published update → unpublished; all archive/feed/sitemap states consistent, missing EN returns 404 without false hreflang, future-dated published content excluded. Its synthetic article is soft-deleted in finally.
- Admin UI visibly rendered, hydrated and showed ten published articles. No invented team/users or production admin setup. The initial local dev account was created via the vendor's development-only setup route.
- Optional proxy unit checks: static fallback without BLOG, admin unavailable without binding, forwarded method/body/Origin/cookie response and upstream failure as 503 without stale seed content.
- Admin nonce policy exercised in real local workerd/HTMLRewriter with a synthetic upstream HTML response: both scripts receive the CSP nonce, nonce changes per response, no shared cache. This proves rewriting; it does not prove a production passkey flow or the complete Pages→CMS service binding.
- Secret-free isolated Pages preview at 127.0.0.1:4325 compiled the actual Functions: VI/EN blog/feed/sitemap 200; admin 404 without binding; private /data HTML and CSV 503 without auth configuration. Valid enquiry returned 503 with missing webhook. Browser submission showed a truthful failure and retained the synthetic fields/consent. No Discord delivery occurred.

## Responsive and interaction proof

VI/EN landing, journal index and primary article were checked at exact CSS widths 320, 375, 768 and 1440: 24 route/viewport combinations, document scrollWidth matched innerWidth, local Geist loaded, no missing fragment anchors. Browser's existing zoom required compensating viewport dimensions; measured CSS width, not requested physical dimensions, is the recorded criterion.

Screenshots at /private/tmp/lumi-blog-qa/ include every combination plus admin and final-preview.png; responsive.json records measurements. Index and article screenshots were visually inspected across all four widths. The narrow header search link had a CSS specificity defect; the corrected override removes it on mobile while search remains discoverable in the archive.

Search: xac minh finds two VI guides; a nonsense query gives zero results with a visible announcement. Mobile contents expands; heading fragments and inline primary-source hrefs are correct. Bilingual metadata, diacritics and scope/price text were checked. CTA points to /#bat-dau or /en/#bat-dau, the existing enquiry form.

## Limits and operational follow-up

The CMS build warns that static getStaticPaths is ignored for the two deliberately dynamic routes, and that the vendor admin bundle has a large chunk. These warnings are visible; no size or performance guarantee is made. Static mode and CMS mode use the same layouts with different content sources.

Production activation requires the deployment/runbook checks, owner-controlled passkey setup while initialization remains private, D1/R2/SESSION resources, optional BLOG binding and actual HTTPS browser verification. Real Search Console data, English keyword demand, AI citations and paid enquiries are unmeasured. A green build is not evidence of market success.

No Git commit, PR, merge, remote deployment, DNS, billing, Google profile operation or customer contact was requested or performed. Existing dashboard/research WIP remains in the shared checkout.

## Continuation — complete local binding and release guards

Revalidated 2026-10-06. The original local CMS at port 4324 remained live. Two task-owned isolated previews were started: compiled CMS at 4334 and Pages at 4335. Pages showed BLOG connected to the named local Worker. No remote resources or deployment were used.

- **Defect fixed:** adapter-generated local `.dev.vars` copies were present in CMS server build output. The previous statement about private data exclusion did not cover these files. They were never deployed or printed. The generated copies were removed; recursive exclusion of `.dev.vars` and `.env` variants now runs first in the post-build guard. Source credentials remain untouched. A synthetic artifact test covers nested copies and preservation of entry/config files.
- **Compiled binding check passed:** npm run test:blog:proxy checked compiled VI/EN index/article HTML, RSS/sitemap, no-store, fresh matching CSP script nonces, two admin script/style assets, dev-bypass 403, anonymous content-API denial, private /data denial and valid missing-webhook enquiry failure through actual Pages Functions → Worker service binding. The compiled CMS used a consistent isolated backup of LOCAL D1/KV metadata, not production data.
- **Browser proof:** compiled admin login hydrated behind the proxy CSP, showing the passkey/email sign-in controls without console errors. Screenshot: /private/tmp/lumi-blog-qa/proxy-admin-login.png. Actual production HTTPS/passkey registration is still unverified.
- **Publication forwarding passed:** BLOG_CMS_URL=http://127.0.0.1:4335 npm run test:blog:cms against the service-bound LOCAL development CMS exercised draft/publish/edit/unpublish, future-date exclusion and missing EN. This is distinct from the compiled read-only runtime check. The verifier removed only its synthetic fixture.
- **CI updated:** .node-version pins 24.19.0; both workflows use it and validate the seed plus CMS build before release. These are local workflow edits, not a claim of hosted CI passing. The existing release destination remains Pages; adding a CMS build does not activate the BLOG production binding.
- **Checks:** 38 regression tests passed, including the build-credential exclusion; CMS build and post-build cleanup passed. Artifact inspection confirms no credential files or private data HTML/CSV remain in dist-blog.

Production deployment, first-admin custody, hosted CI and search/business outcomes remain separate, unperformed release steps.

## Isolated release PR — 2026-10-06

Prepared from GitHub main dae9e74a072dacb83e1af3ee1a82f81f90db961e in /private/tmp/lumi-local-release-20261006, branch codex/emdash-local-blog. The source research/CSV are included as internal docs in the private repository; the unfinished /data dashboard/auth implementation is excluded and preserved in the original checkout. The isolated slice has 23 passing tests (the previous 38 included unrelated dashboard tests). Static build, seed validation and CMS build passed. Added default-deny first-admin setup locking and regression checks. Hosted CI and production evidence are recorded in the release entry when available.

Concurrent upstream integration: PR #15 merged during release preparation, bringing the earlier journal/private research changes to main at 1c410361d5c728d7b19e2c7dcb99e876bf734ab5. PR #16 now preserves that entire implementation and adds only service pages, first-admin/release guards and final release configuration. Earlier isolated-slice counts are historical; final combined checks supersede them below.
