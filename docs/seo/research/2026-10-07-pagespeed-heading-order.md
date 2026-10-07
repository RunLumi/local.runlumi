# PSI/Lighthouse snapshot — RUN-028

Observed 2026-10-07 for `https://local.runlumi.app/` in Google PageSpeed Insights; report captured 06:22 GMT+7. [Mobile report](https://pagespeed.web.dev/analysis/https-local-runlumi-app/e6gb0oc7is?form_factor=mobile). One automated lab run; no field metrics were available. Environment: emulated Moto G Power, Lighthouse 13.5.0, headless Chromium 153.0.8010.36, slow-4G throttling, initial page load.

| Result | Value |
|---|---:|
| Lighthouse Performance | 94 |
| Accessibility | 99 |
| Best Practices | 92 |
| SEO | 100 |
| FCP / LCP / TBT / CLS / Speed Index | 2.1s / 2.7s / 0ms / 0 / 2.7s |
| CrUX field data | No Data |

Lighthouse identified a concrete heading-order issue on the Vietnamese and English homepages: after the H1, the three headings within the illustrative business previews were H3, before the next page-level H2. The mockups are peer-level content sections beneath the page heading. In the RUN-028 code candidate these three elements are H2; only their selectors changed to preserve existing typography. Local AX/rendered checks confirm H1 → H2 and 320/375/768/1440 widths without horizontal overflow on both locales. This structural fix is not yet a production result until the code PR merges and is deployed.

Other observations are recorded for later prioritization: the single mobile run estimated 900ms savings from render-blocking requests and 229KiB from image delivery. The listed image variants include 480/960/1440 widths and are lazy-loaded; Lighthouse's displayed-CSS-size comparison may overstate waste for a high-DPR screen. No image change is bundled without a resolution/DPR-aware assessment. Best Practices 92 includes security checks for HSTS, COOP and Trusted Types; HSTS remains an optional security-hardening decision, outside this change. Desktop lab was not separately rerun after any code change.

Search Console on the dedicated local property reports insufficient field data for mobile and desktop CWV. A lab run cannot replace field data, prove broad accessibility, or establish ranking, citation, traffic or conversion outcomes.


## After release — 2026-10-07

PR #41 merged to `main` as `8e3c19ba366a406c415d3ea62bf3f28fce939018` and was deployed to Cloudflare Pages production deployment `1f99c9d0-edc9-4ab3-bf4d-20a62df9bec3` (`https://1f99c9d0.lumi-local.pages.dev`). The homepage hero preview headline is H2 in both live `/` and `/en/` pages. `scripts/verify-release.mjs` passed against both the custom domain and the Pages hostname, including service metadata and anonymous private `/data` protection.

A second mobile PSI run after deployment (report `78yzu4zu82`, captured 06:30 GMT+7) scored Performance 92, Accessibility 100, Best Practices 92, SEO 100. It no longer reports the sequential-heading issue and records 10 manual accessibility checks. FCP remained 2.1s, LCP 2.7s, TBT 0ms and CLS 0; Speed Index varied from 2.7s to 4.1s between single lab runs. This confirms the specific automated finding disappeared in the rerun, but does not establish a broad accessibility pass or performance improvement. CrUX remains “No Data.”
