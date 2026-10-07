# Mobile directions instructions in the existing guide — RUN-040

## Objective and evidence

RUN-038 sampled the Vietnamese query `cách chia sẻ link chỉ đường Google Maps cho khách`. Its visible AI Overview described a mobile share flow, while the existing Lumi guide at that time gave only desktop steps. This supports a narrowly scoped educational update, not a claim that Lumi should appear in that result or that the query has commercial demand.

Google Maps Help was checked on 2026-10-07. The mobile procedure is: open Maps, tap Directions, enter the destination and choose a route, then More → Share directions and select an app. The desktop procedure remains: Directions → destination and route → Share → Send a link → Copy link. The article asks readers to verify that the route reaches the entrance the owner confirmed.

## Published content

The paired EmDash articles at [VI](https://local.runlumi.app/blog/tao-dia-diem-google-maps/) and [EN](https://local.runlumi.app/en/blog/tao-dia-diem-google-maps/) were updated and explicitly published in the previous continuation on 2026-10-07. The exact CMS publication time was not captured. Current readback on 2026-10-07 confirms both public pages show the mobile and desktop procedure, the entrance check, and source-check date 2026-10-07. The signed-in editor shows the VI article saved, live, with an “Unpublish Article” control; no CMS mutation was made during this verification.

The VI/EN static release snapshots now match the updated directions section and source link. They are a fallback/build snapshot only; no import or direct database write occurred. The existing routes, slugs, canonicals and reciprocal language pairing are unchanged. This is not an indexing, ranking, traffic or conversion result.

## Responsive verification and limits

A fresh headless Chromium read-only pass checked both public routes at 320, 375, 768 and 1440 CSS pixels. All eight had `document.documentElement.scrollWidth === window.innerWidth`; each rendered the mobile procedure, entrance check and official Maps Help link. The 320px VI and EN views were captured and visually inspected. Screenshots are retained outside Git at `/private/tmp/seo-mobile-vi-320.png` and `/private/tmp/seo-mobile-en-320.png`.

No signed-out moderation/index check, Search Console update or production code deployment is claimed. The published CMS version already serves these instructions; this PR aligns the static source. GitHub's normal main-branch release workflow is responsible for the Pages build/deploy triggered by merge. If it does not run, keep the limitation visible and verify the CMS remains live.
