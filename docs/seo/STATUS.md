# SEO/GEO campaign checkpoint

Updated 2026-10-06 · Asia/Saigon · active, day 1. Full contract: [goal](../GOAL_SEO_GEO_90_DAYS.md). Append-only history: [WORKLOG.md](WORKLOG.md).

## Campaign and permissions

- Activated by human `/goal` on 2026-10-06. Reviews: 2026-11-04 / 2026-12-04 / 2027-01-04.
- CA-001 was skipped as redundant. CA-002 was approved, posted once by u/suoinguon in the designated r/smallbusiness Q4 promotion thread, and publicly verified at [its permalink](https://www.reddit.com/r/smallbusiness/comments/1wwpjlw/comment/pe8nwi9/). That exact one-comment authorization is consumed. Next read-only check: 2026-10-13 09:00 +07:00; no reply/repost authorization.
- Weekly heartbeat creation was rejected by automatic approval review; explicit scheduling authorization remains unanswered. No scheduler is configured.
- GSC Wizard is available but not connected. A connection suggestion was made; no Google account/property data has been accessed. GSC/organic/referral metrics, qualified enquiries, paid outcomes and broader AI citation coverage remain unknown. No trackers or live test enquiries.
- Chrome DevTools MCP is not available in this session. The web-perf workflow requires it and directs us to stop when its tools are unavailable. No CWV/lab trace was measured; see [measurement access note](research/2026-10-06-measurement-access.md).

## Verified releases

- PR #25 merged at f3fa8ae; deployed as https://13b45206.lumi-local.pages.dev. It added the official free Google QR instructions to both QR service pages.
- PR #28 merged at ae0478b and deployed at https://de3ec339.lumi-local.pages.dev. VI/EN website service pages clarify inventory/cart/checkout/order management is excluded.
- PR #30 merged at 5c18b97 and deployed at https://25f31f3b.lumi-local.pages.dev. VI/EN website service pages clarify no CRM, reminders, automatic messages or lead nurturing; enquiry destination and response owner should be agreed before publication.
- Both RUN-016 and RUN-017 passed exact-head local static build, all 48 tests, seed validation and CMS Worker build. `scripts/verify-release.mjs` passed production route/canonical/sitemap/private-data checks; HTTP/browser readback verified the exact VI/EN FAQs on custom domain and deployment host. Hosted workflows failed before steps because of Actions budget; this is not hosted Linux proof. CMS Worker and editorial data were not deployed/changed.
- Service pages rendered in VI/EN at 320/375/768/1440 without horizontal overflow. Both new answers were expanded in the live browser. This is not a full-site accessibility, performance or conversion audit.

## Evidence and decisions

- [Dataset receipt](research/2026-10-06-baseline.md): 2,740 rows / 2,070 exact terms / 670 repeated rows; historical export, zero organic observations.
- [Query discovery](research/2026-10-06-query-discovery.md): 15 Vietnamese queries across three hypotheses; not a position audit.
- [Technical and internal-link checks](research/2026-10-06-technical-baseline.md), [guide checks](research/2026-10-06-links-and-article-audit.md), and [remaining guides](research/2026-10-06-remaining-guides.md): 38 sitemap URLs passed bounded metadata checks; zero graph orphans within that set. Not proof of indexing or demand.
- [Browser SERP sample](research/2026-10-06-browser-serp-sample.md): three contextual queries with third-party AI Overview citations; not universal visibility.
- [Gift-shop scope signal](research/2026-10-06-giftshop-scope-signal.md): one international discussion informs exclusions only, not Vietnam demand or willingness to pay.
- [Vietnam community scan](research/2026-10-06-vietnam-community-scan.md): indexed seller post and stale marketplace thread; no fresh owner discussion/rules suitable for another candidate. No new action proposed.

## Next actions

1. On 2026-10-13, inspect CA-002 for replies/removal; prepare any reply for approval unless standing reply scope is explicitly granted.
2. Connect GSC Wizard or authorize the Search Console property before reading its private query/page data. Until then, leave organic/indexed/citation outcomes unknown.
3. Add the Chrome DevTools MCP configuration from the web-perf skill before attempting lab CWV traces.
4. Continue the 90-day cadence with new owner context and measured outcomes; avoid same-day repetitive SERPs or generic content volume. Revisit the day-30/60/90 decisions on their dates.

## Recovery

Read this checkpoint, goal, worklog and both CSV ledgers before external actions. Inspect submitting/unknown/pending outcomes before retrying. Preserve the shared checkout’s unrelated `docs/blog/checkpoint.md` edit. Production release for RUN-017 is verified at 25f31f3b; no running dev server remains.
