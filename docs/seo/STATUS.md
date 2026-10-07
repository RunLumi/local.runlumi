# SEO/GEO campaign checkpoint

Updated 2026-10-07 · Asia/Ho_Chi_Minh · active, day 2. Full contract: [goal](../GOAL_SEO_GEO_90_DAYS.md). Append-only history: [WORKLOG.md](WORKLOG.md).

## Campaign and permissions

- Activated by human `/goal` on 2026-10-06. Reviews: day 30 2026-11-04; day 60 2026-12-04; day 90 2027-01-04.
- CA-001 was skipped as redundant. CA-002 was approved and publicly verified once by u/suoinguon in the designated r/smallbusiness Q4 promotion thread: [permalink](https://www.reddit.com/r/smallbusiness/comments/1wwpjlw/comment/pe8nwi9/). That one-comment authorization is consumed. No follow-up reply/repost scope.
- CA-003 is a drafted no-link factual reply to a new r/smallbusiness question about Google profile edits. Current thread rules and Google sources were checked, but CA-002’s scope does not cover this thread; nothing was posted. A separate one-time approval is required. See [RUN-035 thread note](research/2026-10-07-reddit-google-profile-edits-thread.md).
- Next read-only check: 2026-10-13 09:00 +07:00 for replies/removal.
- Weekly heartbeat creation was rejected by automatic approval review; explicit scheduling authorization remains unanswered. No automation configured.
- GSC Wizard remains unconnected. See [RUN-026 Search Console snapshot](research/2026-10-07-search-console-snapshot.md): read-only evidence on `sc-domain:local.runlumi.app`: its sitemap list is empty; homepage and core service URLs are unknown to Google despite passing live fetch tests. The parent property host-filtered 7-day report showed 0 clicks/0 impressions through 2026-10-04, only about two days after custom-domain attachment. No sitemap or URL-indexing write was submitted; broad index coverage, referrals, enquiries and paid outcomes remain unknown.
- RUN-029 rechecked the exact-host Pages and Links reports at 2026-10-07 06:42 +07:00; both still show “Processing data.” The parent property Links report's Reddit entry points to `https://runlumi.app/`, not the Lumi Local subdomain, so it does not confirm CA-002 as a backlink to this site. See [RUN-029 report note](research/2026-10-07-search-console-links-follow-up.md).
- RUN-032 inspected the live garage canonical in exact-host Search Console at 07:55 +07:00: its index report says URL unknown/no referring sitemap, while the live test fetched it successfully with crawl and indexing allowed and the expected canonical. This is one URL only; sitemap submission remains pending explicit authorization. See [RUN-032 report](research/2026-10-07-garage-url-inspection.md).
- RUN-033 published a bilingual directions-sharing answer and Google Maps Help source in the existing business-location guide through EmDash. Both public pages, canonical/alternates, sitemap entries and RSS feeds passed readback; all eight VI/EN responsive checks at 320/375/768/1440 CSS px had no horizontal overflow. No new URL or ranking/indexing result is implied. See [RUN-033 SERP and content report](research/2026-10-07-maps-directions-serp-and-content-update.md).
- RUN-034 refreshed the protected `/data/` strategy panel to reflect RUN-033’s published guides and dated SERP sample. PR #52 is live at Pages deployment `6b79022c`; the signed-in dashboard shows the new guidance and the production verifier confirms anonymous private-data protections. See [RUN-034 release report](research/2026-10-07-dashboard-guidance-release.md).
- RUN-036 revises the two Maps-embedding terms from offer-adjacent to low-confidence educational, based on the dated tutorial-heavy SERP sample and the actual directions-link scope. Historical 10/mo estimates are unchanged; 48 tests and the 42-route build pass, with production/dashboard readback pending.
- `/data/` requires EmDash ADMIN passkey authentication. The current in-app browser now shows the private dashboard in an authenticated session; the local source CSV is unchanged and covers Sep 2025–Aug 2026, so fresh demand data remain unavailable.
- Chrome DevTools MCP is absent. CrUX has no field CWV data, and no Chrome DevTools lab trace is available; the separate PSI Lighthouse reports are recorded below. See [measurement access note](research/2026-10-06-measurement-access.md). No trackers or live enquiries used.

## Verified releases

- PR #25 / Pages deployment `13b45206`: localized free Google QR instructions, VI/EN, verified on custom domain and Pages host.
- PR #28 / Pages deployment `de3ec339`: VI/EN website FAQ clarifies no inventory, carts, checkout or order management.
- PR #30 / Pages deployment `25f31f3b`: VI/EN FAQ clarifies no CRM or automated follow-up; agree enquiry destination and response owner.
- PR #35 / Pages deployment `7e191180`: VI/EN homepage and website-service FAQ explain when Facebook/Zalo may be sufficient and distinguish Starter from an online store. Production checks passed on both custom and Pages hosts.
- PR #41 / Pages deployment `1f99c9d0`: corrected homepage mockup heading hierarchy after one Lighthouse accessibility finding; live VI/EN H2 readback and the targeted post-deploy PSI finding check passed. No field CWV data.
- PR #46 / Pages deployment `ebdccc5f`: the auto-repair page now answers the online-booking question directly in VI/EN and states that Starter supports Call/Zalo enquiries but no online calendar/reservation. Live answer readback passed on both locales; this is an expectation clarification, not an acquisition result.
- PR #48 / Pages deployment `9b12e201`: the homepage salon preview label now describes a Zalo availability enquiry instead of “Booking” / “Đặt lịch.” Live VI/EN readback passed; no booking feature or conversion result is implied.
- PR #52 / Pages deployment `6b79022c`: refreshed the protected keyword dashboard’s internal strategy guidance after the completed SERP review and bilingual guide publication. Private routes remain protected; no keyword data or auth behavior changed.
- RUN-033 / EmDash publication (2026-10-07): the VI/EN business-location guide now explains how to share a Google Maps directions link and verify its destination against the owner-confirmed entrance. Both pages were read back live with the new source link and 2026-10-07 source-check date; canonical/alternates, sitemap and RSS were verified. This was a CMS content publication, not a Pages code deployment.
- Exact merged heads passed local static/CMS builds, 48 tests, seed validation and release verifier. Hosted workflows failed before steps due Actions budget; no hosted Linux pass. CMS Worker/editorial data were not changed.
- PR #31 and PR #32 record release/access state; PR #33 records the bounded Vietnam scan.

## Current evidence

- [Baseline](research/2026-10-06-baseline.md): 2,740 raw rows, 2,070 exact terms, 670 repeats; historical export, no organic observations.
- [15-query discovery](research/2026-10-06-query-discovery.md): three intent clusters are hypotheses, not rankings.
- [Production baseline](research/2026-10-06-technical-baseline.md): 38 live sitemap URLs passed bounded response/canonical/h1/alternate checks; not proof of indexing.
- [RUN-024 technical follow-up](research/2026-10-07-technical-audit.md): current 38-URL sitemap crawl found no canonical/title/h1/hreflang/image-attribute defect; index coverage and CWV remain unknown.
- [RUN-028 PSI/Lighthouse snapshot](research/2026-10-07-pagespeed-heading-order.md): the deployed VI/EN heading correction removed the targeted heading-order finding on one post-deploy mobile run (Accessibility 100); Performance varied across single runs, and CrUX still has no field CWV data.
- [Internal graph and guide checks](research/2026-10-06-links-and-article-audit.md) plus [remaining guides](research/2026-10-06-remaining-guides.md): no orphan sitemap pages or settled-width overflow in checked guides; not a full accessibility/performance audit.
- [Browser SERPs](research/2026-10-06-browser-serp-sample.md): three contextual desktop queries; third-party AI Overview citations observed, none for Lumi in portions reviewed. Not universal visibility.
- [Gift-shop scope signal](research/2026-10-06-giftshop-scope-signal.md): one international thread led to useful exclusions, not Vietnam demand.
- [Vietnam community scan](research/2026-10-06-vietnam-community-scan.md) and [fresh recheck](research/2026-10-07-community-recheck.md): no suitable recent Vietnamese owner discussion found; vendor/stale retail content not treated as demand.
- [RUN-029 Search Console follow-up](research/2026-10-07-search-console-links-follow-up.md): exact-host Pages and Links remain processing; parent-property Reddit link data point to the apex domain and cannot validate CA-002.
- [RUN-030 garage intent check](research/2026-10-07-garage-booking-intent.md): a tighter garage-design query showed online booking among competitor claims; PR #46 adds the VI/EN Call/Zalo enquiry and no-calendar FAQ. One personalized SERP sample; no demand or ranking inference.
- [RUN-031 homepage booking-language check](research/2026-10-07-homepage-booking-language.md): PR #48 changed the illustrative salon label to “ask about availability” through Zalo instead of “booking.” Static/CMS builds, tests, seed validation and eight local responsive checks passed; both live homepage labels were read back. This is a wording correction, not a new feature or search outcome.
- [RUN-032 garage URL inspection](research/2026-10-07-garage-url-inspection.md): one page is still unknown to Google despite passing the live fetch/indexability test; sitemap discovery remains the next bounded action and is still unauthorized.
- [RUN-033 Maps and directions SERP check](research/2026-10-07-maps-directions-serp-and-content-update.md): three dated Vietnam/Vietnamese queries showed overlapping how-to intent for embed variants and mixed DIY profile/directions intent. The existing guide gained the verified Google sharing steps; no separate landing page was added.
- [RUN-034 dashboard guidance release](research/2026-10-07-dashboard-guidance-release.md): private research recommendations now distinguish completed guide/SERP work from unvalidated demand; source CSV remains historical and protected.
- [RUN-036 classification review](research/2026-10-07-maps-directions-serp-and-content-update.md#follow-up-classification-review--run-036): two embed/how-to terms now score as educational candidates, not offer-adjacent; this changes a heuristic, not measured intent or demand.
- [RUN-035 Reddit thread review](research/2026-10-07-reddit-google-profile-edits-thread.md): a fresh public question is a candidate for a source-backed, no-link reply; CA-003 remains `drafted` pending explicit approval.

## Next actions

1. On 2026-10-13, read-only check CA-002 for replies/removal; do not reply without new authorization.
2. RUN-026 found no sitemap submitted in the dedicated GSC property. Submit `https://local.runlumi.app/sitemap.xml` only after explicit human authorization; until then, leave Google-side indexing untouched.
3. On or after 2026-10-14, read the index/discovery state once for the garage page and the updated business-location guide; keep Search Console read-only and scoped to `local.runlumi.app`. Submit `https://local.runlumi.app/sitemap.xml` only after explicit human authorization. GSC Wizard remains unconnected. Add Chrome DevTools MCP before laboratory performance traces; avoid repetitive searches and quota-driven posts.
4. CA-003 requires one-time human approval for the exact new Reddit thread and draft; do not post if approval is not given.

## Recovery

Read this checkpoint, goal, worklog and both CSVs before external actions. Inspect uncertain outcomes before retrying. Shared checkout has unrelated `docs/blog/checkpoint.md` WIP; preserve it. Latest Pages code deployment is `6b79022c`; RUN-033 is a separately verified EmDash article publication. No temporary dev server is active.


## RUN-023 — direct Facebook/Zalo answer refinement

One Google AI Overview answered a broad owner query categorically and conflated a website with an online store. Merged PR #35 updates the bilingual homepage and website-service FAQ with an honest channel-fit answer. See [RUN-023 sample](research/2026-10-07-facebook-zalo-ai-overview.md). It is a one-query signed-in SERP observation; no ranking/citation improvement claimed. VI/EN routes passed rendered checks at 320/375/768/1440 CSS px with no horizontal overflow; the Vietnamese service page was visually inspected at 320px. Live custom and Pages-host verifiers pass at deployment `7e191180`.
