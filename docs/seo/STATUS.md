# SEO/GEO campaign checkpoint

Updated 2026-10-06 · Asia/Saigon · active, day 1. Full contract: [goal](../GOAL_SEO_GEO_90_DAYS.md). Append-only history: [WORKLOG.md](WORKLOG.md).

## Campaign and permissions

- Activated by the human `/goal` request on 2026-10-06. Reviews: 2026-11-04 / 2026-12-04 / 2027-01-04.
- CA-001 was skipped as redundant. CA-002 was approved, posted once by u/suoinguon in the designated r/smallbusiness Q4 promotion thread, and publicly verified at [its permalink](https://www.reddit.com/r/smallbusiness/comments/1wwpjlw/comment/pe8nwi9/). That exact one-comment permission is consumed. Next check: 2026-10-13 09:00 +07:00; read-only first, no reply/repost authorization.
- Weekly heartbeat creation was rejected by automatic review because explicit scheduling authorization was absent. No automation is configured.
- GSC/organic/referral metrics, qualified enquiries, paid outcomes and broader AI citation coverage remain unknown. No trackers or live test enquiries.

## Verified releases

- PR #25 merged at f3fa8ae; deployed as https://13b45206.lumi-local.pages.dev. It adds official free Google QR instructions to the VI/EN QR service pages.
- PR #28 merged at ae0478b. It states that Starter is an information/enquiry site, not an inventory, cart, online checkout/payment or order-management system. Deploy https://de3ec339.lumi-local.pages.dev; the custom-domain and deployment-host VI/EN pages both return 200 and contain the new section/FAQ.
- Exact merged head passed protected static build, all 48 existing tests, seed validation, CMS Worker build and `scripts/verify-release.mjs`. Hosted CI/release did not start because of Actions budget; this is not hosted Linux proof. Manual release used the documented Pages path. CMS Worker and editorial data were not deployed/changed.
- The live VI/EN FAQ was opened in the browser and the new answer expanded. VI mobile screenshot inspected; local responsive check covered both languages at 320/375/768/1440 with one h1/no horizontal overflow. This is not full-site accessibility or field-performance proof.

## Evidence and decisions

- [Day-one dataset receipt](research/2026-10-06-baseline.md): 2,740 rows / 2,070 exact terms / 670 repeated rows; historical export, zero organic observations.
- [Query discovery](research/2026-10-06-query-discovery.md): 15 Vietnamese queries; three clusters are hypotheses, not a position audit.
- [Technical baseline](research/2026-10-06-technical-baseline.md) and [link/article checks](research/2026-10-06-links-and-article-audit.md): 38 sitemap URLs passed bounded metadata checks; zero graph orphans among those URLs. Not proof of indexing or demand.
- [Browser SERP sample](research/2026-10-06-browser-serp-sample.md): three dated desktop Google queries with third-party AI Overview citations; no Lumi citation in inspected portions. Personalized/provider samples do not establish universal visibility.
- [RUN-016 scope signal](research/2026-10-06-giftshop-scope-signal.md): one international gift-shop thread asked about inventory/follow-up/update needs. It prompted clearer exclusions, not a claim about Vietnam market size or willingness to pay.
- Private /data anonymous denial was separately verified. No authenticated GSC access or organic outcome data.

## Next actions

1. On 2026-10-13, inspect CA-002 for replies/removal in browser; prepare a reply only for approval unless standing reply scope has been authorized.
2. Obtain account-level Search Console access only through explicit user authorization; otherwise keep indexing, traffic and conversion outcomes marked unknown.
3. Continue week-one evidence collection through new, relevant owner questions and site diagnostics. Prefer validated buyer gaps over additional generic content. Preserve the three-post-per-week total cap and stricter channel rules.

## Recovery

Read this checkpoint, goal, worklog and both CSV ledgers before external actions. Inspect submitting/unknown/pending outcomes before retrying. Preserve the shared checkout’s unrelated `docs/blog/checkpoint.md` edit. The current worktree is isolated and detached at the latest merged serving head; no temporary dev server remains.
