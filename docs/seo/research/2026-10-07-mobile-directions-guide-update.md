# Mobile directions instructions in the existing guide — RUN-040

## Objective and evidence

RUN-038 sampled the Vietnamese query `cách chia sẻ link chỉ đường Google Maps cho khách`. Its visible AI Overview described a mobile share flow, while the existing Lumi guide at that time gave only desktop steps. This supports a narrowly scoped educational update, not a claim that Lumi should appear in that result or that the query has commercial demand.

Google Maps Help was checked on 2026-10-07. The mobile procedure is: open Maps, tap Directions, enter the destination and choose a route, then More → Share directions and select an app. The desktop procedure remains: Directions → destination and route → Share → Send a link → Copy link. The article asks readers to verify that the route reaches the entrance the owner confirmed.

## Published content

The paired EmDash articles at [VI](https://local.runlumi.app/blog/tao-dia-diem-google-maps/) and [EN](https://local.runlumi.app/en/blog/tao-dia-diem-google-maps/) were updated and explicitly published in the previous continuation on 2026-10-07. The exact CMS publication time was not captured. Current readback on 2026-10-07 confirms both public pages show the mobile and desktop procedure, the entrance check, and source-check date 2026-10-07. The signed-in editor shows the VI article saved, live, with an “Unpublish Article” control; no CMS mutation was made during this verification.

The VI/EN static release snapshots now match the updated directions section and source link. They are a fallback/build snapshot only; no import or direct database write occurred. The existing routes, slugs, canonicals and reciprocal language pairing are unchanged. This is not an indexing, ranking, traffic or conversion result.

## Responsive verification and limits

A fresh headless Chromium read-only pass checked both public routes at 320, 375, 768 and 1440 CSS pixels. All eight had `document.documentElement.scrollWidth === window.innerWidth`; each rendered the mobile procedure, entrance check and official Maps Help link. The 320px VI and EN views were captured and visually inspected. Screenshots are retained outside Git at `/private/tmp/seo-mobile-vi-320.png` and `/private/tmp/seo-mobile-en-320.png`.

## Release receipt

PR [#61](https://github.com/RunLumi/local.runlumi/pull/61) merged to `main` as `09f5e1f851e60baa7663a3cd980fe2549be2651b`. GitHub's PR build and production deploy jobs both failed before starting because the RunLumi Actions budget was at 100% ($48 of $48, stop-usage enabled); no hosted runner steps executed. The exact merged main head passed `npm test` (48/48), `npm run build` (42 routes and private-data extraction guard), and `npm run build:blog` on Node 24.19.0. Existing dynamic-route and chunk-size warnings remain visible.

After those checks, Wrangler 4.140.0 deployed the exact main build to Pages project `lumi-local`, production branch `main`: deployment ID `869f296d-f6f3-483c-9fb1-bf3910a4adb4`, source `09f5e1f`, [deployment host](https://869f296d.lumi-local.pages.dev). The read-only `scripts/verify-release.mjs` passed on both that host and `https://local.runlumi.app`, including public routes/feed/sitemap and anonymous private-data protection. Browser readback on both hosts confirms the updated VI/EN guide text and source link. No CMS/database write, secret, binding, DNS, sitemap/indexing request, enquiry, ranking or business outcome is claimed.
