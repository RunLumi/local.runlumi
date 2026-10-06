# Technical SEO follow-up — RUN-024

Observed 2026-10-07 on the production origin `https://local.runlumi.app`. This is a bounded first-party crawl of the current sitemap, not an indexing or traffic report. It fetched 38 sitemap URLs at low concurrency with no login, form submission, user data, or search-engine scraping. The private `/data` surface was not crawled; the release verifier separately confirmed its anonymous access controls on both production hosts.

## Findings

| Area | Observed result | Evidence limit |
|---|---|---|
| Crawlability | `robots.txt` and `sitemap.xml` returned 200. Robots allows public routes, declares the HTTPS sitemap, and disallows `/_emdash/` and `/data/`. Sitemap contains 38 unique same-host URLs. | Search Console submission and crawl coverage remain unknown. |
| Page response and index signals | All 38 sitemap URLs returned 200 without redirect; each had a matching self-canonical, one H1, a unique title, a meta description, and no `noindex` robots meta. | This does not prove Google indexed or ranks them. Response-level `X-Robots-Tag` was not independently enumerated for every page. |
| International alternates | All 38 pages had a consistent Vietnamese/English alternate pair, targets within the sitemap, and reciprocal page-to-page mappings. | No geotargeting or actual language-specific search visibility is inferred. |
| Links and content assets | No broken in-page hash targets in the fetched HTML. Across 118 image elements, none lacked an `alt` attribute or explicit width/height. Two JSON-LD `Service` objects parsed; no JSON-LD parse error. | Alt-text quality, lazy-image load completion, visual prominence, and rich-result eligibility were not measured. No FAQ schema was added. |
| HTTPS and headers | HTTP `http://local.runlumi.app/` returned 301 to HTTPS. The HTTPS homepage sent CSP, Referrer-Policy, X-Content-Type-Options, X-Frame-Options and Permissions-Policy. No HSTS header was observed. | HSTS is an optional browser-cached security-hardening item, not a verified crawl/indexability blocker on this audit. It is left unchanged; Cloudflare describes the persistent browser behavior [here](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security/). |
| Mobile and keyboard spot checks | Earlier RUN-023 checks covered VI/EN home and website-service pages at 320/375/768/1440 CSS px with no horizontal overflow. Today, the visible skip link focused on the first Tab and Enter moved to `#main`; Space opened the VI and EN homepage FAQ and the EN service FAQ. | This is not a full keyboard, screen-reader, contrast, or all-page visual audit. |
| Performance and outcomes | No field or lab Core Web Vitals result is available; no performance score is assigned. | Chrome DevTools MCP is absent; Search Console is unconnected. Indexed status, impressions, clicks, referrals, AI citations, enquiries and sales remain unknown. |

No sitemap-page crawl, canonical, title, meta-description, H1, image-dimension, local-fragment, or hreflang defect was found in this bounded pass. I do not assign an overall health score: Google index coverage and Core Web Vitals are unavailable, and these checks cannot stand in for those measures.

## Next evidence

- At the scheduled 2026-10-13 review, check CA-002 for replies/removal read-only; do not reply or repost without new scope.
- Keep GSC/indexing and CWV outcomes marked unknown until a read-only Search Console property and a supported lab measurement path are authorized and available.
- Revisit HSTS only as an explicit security-hardening decision; the current HTTP-to-HTTPS redirect already works.
