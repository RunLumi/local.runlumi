# Search Console and indexing snapshot — RUN-026

Observed 2026-10-07 through the existing signed-in Search Console browser. Read-only only; no sitemap submission, URL-indexing request, property setting, export, or GA4 action was performed. The selected Search Console property was `sc-domain:local.runlumi.app`; no account identifier or raw query list is retained.

## Observations

- The dedicated `local.runlumi.app` property overview showed “Processing data, please check again in a day or so” for performance and indexing. Its Sitemaps report contained zero submitted entries.
- URL Inspection for `https://local.runlumi.app/` reported “URL is not on Google”; reason: “URL is unknown to Google.” It showed no referring sitemap or page and no previous crawl. A read-only live test then reported “URL is available to Google” and “Page can be indexed,” with no enhancement detected.
- URL Inspection for the canonical website-service page, `https://local.runlumi.app/dich-vu/website-doanh-nghiep-dia-phuong/`, on the parent `sc-domain:runlumi.app` property also reported “URL is unknown to Google” and no referring sitemap. Its live test reported the page is available/indexable and found one valid Breadcrumbs item.
- On `sc-domain:runlumi.app`, the Performance report was restricted with a Page “URLs containing” filter of `https://local.runlumi.app/`, Search type Web, and the 7-day range 2026-09-28 through 2026-10-04. It showed 0 clicks, 0 impressions and no query rows; last update was 9 hours earlier. This range contains at most two days after the local subdomain was attached to the production custom domain on 2026-10-03, so it is an initial launch snapshot, not a stable demand baseline. The unfiltered parent-property totals are not attributed to Lumi Local.
- `https://local.runlumi.app/sitemap.xml` is live, valid and listed in the site's `robots.txt` from the RUN-024 crawl. Search Console has no submitted sitemap entry for the dedicated local property. The published sitemap therefore has not yet been confirmed as submitted to Search Console.

## Interpretation and write boundary

The homepage and core service page can be fetched and are eligible for indexing when Google discovers them, but Search Console currently has no index record for either URL. This is consistent with a newly attached domain with no sitemap submission; it is not proof of the only cause, and it does not predict timing or eventual indexing. No indexing, ranking, traffic, AI-citation, enquiry or revenue improvement is claimed.

The exact proposed external action is to submit `https://local.runlumi.app/sitemap.xml` to `sc-domain:local.runlumi.app` in Search Console. That is a Search Console write asking Google to process the sitemap. The repository's [GSC access note](2026-10-06-gsc-connector-availability.md) says a read request does not authorize URL-submission or other write scopes. No submit or “Request indexing” control was clicked; human approval is pending.

## Limits and next check

This sample is restricted to one property, one filtered host and the visible date range. It is not full-site index coverage; Search Console's dedicated property reports remain in processing state. GSC Wizard is not connected. Referrals, non-brand query performance, AI citations, qualified enquiries and paid outcomes remain unknown. Recheck after new authorization or a later dated data window; do not repeat same-day SERP sampling to fill the gap.
