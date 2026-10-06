# Search Console follow-up — RUN-029

Observed 2026-10-07 at 06:42 +07:00 in the existing authenticated Search Console session. Read-only; no exports or write controls used.

## Exact-host property

Selected `sc-domain:local.runlumi.app` and opened its Pages and Links reports. Both displayed “Processing data, please check again in a day or so.” No table rows or exact-host link counts were available. This does not establish zero indexed pages or zero backlinks.

## Parent-property Reddit link data

The parent `sc-domain:runlumi.app` Links report listed `reddit.com` with 2 external links and 1 target page. Opening that row showed the target as `https://runlumi.app/` (the apex domain), not `https://local.runlumi.app/en/`, the URL used in CA-002. This parent-property aggregate therefore does not verify the CA-002 Reddit comment as a link to Lumi Local. It also does not establish referral visits, conversions, or the absence of other Reddit links.

## Interpretation and next action

The action ledger records CA-002 as `verified_live` at its permalink, and its one-comment scope is consumed. This run did not revisit the Reddit thread. Its scheduled 2026-10-13 check remains read-only for replies/removal. Keep the dedicated property's sitemap submission and URL-indexing controls untouched pending explicit human authorization. Recheck the exact-host reports on a later review date rather than repeatedly polling while they process.
