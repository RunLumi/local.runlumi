# Search Console sitemap utility assessment — RUN-058

Updated: 2026-10-07 · Asia/Ho_Chi_Minh. Read-only; no Search Console control was used.

## Decision

Defer the optional sitemap submission. The current objective is to inspect Search Console's index/discovery state on or after 2026-10-14 without submitting a sitemap or requesting indexing. Reevaluate only if that later read shows a concrete discovery problem that the existing internal links and `robots.txt` reference do not address. Any Search Console write still needs explicit human authorization.

## Site evidence

- RUN-026 recorded zero submitted entries in `sc-domain:local.runlumi.app`; the homepage and core website-service URL were unknown to Google, while their live URL tests reported availability and indexability. RUN-032 separately found the garage URL unknown and indexable in a live test. These are dated observations, not evidence of current full-site indexing state.
- Latest Pages deployment: `https://08a3ee8d.lumi-local.pages.dev`, serving commit `4dd5920` from PR #79. Source comparison confirms the current documentation branch has no changes to serving paths since that commit.
- The current built sitemap has 38 URLs, all on `https://local.runlumi.app`, and none under `/data/`. A local crawlable-anchor graph from the homepage reaches all 38 sitemap URLs; zero sitemap URLs are unreachable. `robots.txt` already advertises the sitemap at its root.
- This build and graph inspection corroborate the production source and earlier deployment verifier, but they do not prove what Google has crawled or indexed.

## Official guidance and tradeoff

Google Search Console Help says that a small site (about 500 pages or fewer) whose pages can all be reached by following links from its homepage probably does not need the Sitemaps report. It explains that the report lists sitemaps submitted through that report or API; a sitemap found through another method may not appear there. [Google Search Console Sitemaps report](https://support.google.com/webmasters/answer/7451001?hl=en-GB)

Google also describes sitemap submission as a hint: it does not guarantee that Google downloads the sitemap or crawls the listed URLs. The report can show processing errors, but this 38-page site already has internal paths from its homepage and a root `robots.txt` sitemap reference. [Google Search Central: Build and Submit a Sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

The strongest argument for submitting is that the domain is new to Search Console and earlier URL Inspection results said unknown; a successful submission would make a Sitemaps report row available for monitoring. The counterargument is stronger for the present moment: the site is small, all sitemap pages are reachable from the homepage, the sitemap is referenced in `robots.txt`, and there is no evidence of a sitemap parse or fetch error. The optional Search Console write has low incremental value before the scheduled read-only inspection.

## Authorization and next step

No sitemap submission, URL Inspection indexing request, export, property setting, analytics action or billing change occurred. The prior proposal to submit `https://local.runlumi.app/sitemap.xml` to `sc-domain:local.runlumi.app` is deferred; no approval is being relied on. On or after 2026-10-14, inspect the garage and updated business-location guide's index/discovery status once. If a material discovery issue remains, present the exact write and its evidence for approval before using Search Console controls.
