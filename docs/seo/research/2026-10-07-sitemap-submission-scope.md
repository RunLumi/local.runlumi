# Search Console sitemap submission scope — RUN-058

Observed: 2026-10-07, Asia/Ho_Chi_Minh. Read-only; no Search Console submit control was used.

## Exact proposed write

Submit `https://local.runlumi.app/sitemap.xml` once to the Search Console Domain property `sc-domain:local.runlumi.app`.

## Current evidence

- RUN-026 recorded zero submitted sitemap entries in this exact-host property. It also recorded that the homepage and core website-service URL were unknown to Google, while their live URL tests said they were available and indexable. RUN-032 separately found the garage URL unknown to Google and live-fetch/indexable.
- Production deployment `08a3ee8d.lumi-local.pages.dev` came from main `4dd5920` (PR #79, deployment run `37587273670`). Its live release verifier passed service/industry routes, journal/feed/sitemap and anonymous private-data protection.
- The fresh local static build from the same serving commit generated `dist/sitemap.xml` with 38 `<loc>` URLs. All 38 point to `https://local.runlumi.app`; zero paths contain `/data`. Prior RUN-007/RUN-024 production crawls covered the same 38 public sitemap URLs. This local count is scope corroboration, not a fresh Search Console read or a claim that Google has indexed them.
- The sitemap content includes the site's localized public canonical pages and the approved Zalo scope clarification changed page text only; it added no URL. Submitting asks Google to process/discover these URLs. It does not guarantee crawling, indexing, ranking, traffic, citations or enquiries, and does not alter site content, account ownership or billing.

## Authorization boundary and next step

No Search Console sitemap submission, URL Inspection indexing request, property change, export, or analytics action has occurred. The campaign contract requires explicit human authorization for this one-time Search Console write. Until authorization is given, keep Google-side actions read-only. The separate scheduled read-only index review for the garage and business-location pages remains on or after 2026-10-14.
