# Garage page URL Inspection — RUN-032

Observed 2026-10-07 at 07:55 +07:00 in the existing authenticated Google Search Console session, property `sc-domain:local.runlumi.app`. Read-only inspection plus the Search Console live URL test; no sitemap was submitted and no indexing request was made.

Inspected `https://local.runlumi.app/nganh/garage/`.

## Google-index report

- Search Console reported “URL is not on Google” and “URL is unknown to Google.”
- No referring sitemap or referring page was detected; the report showed no prior crawl.
- This is one URL’s current report, not evidence that all site URLs are unindexed.

## Live URL test

- “URL is available to Google”; page availability: “Page can be indexed.”
- Tested at 07:55:22 +07:00 as Google Inspection Tool smartphone.
- Crawl allowed: Yes; page fetch: Successful; indexing allowed: Yes.
- User-declared canonical: `https://local.runlumi.app/nganh/garage/`.
- Google-selected canonical is not determined until indexing. Discovery was not checked in the live test.
- One valid Breadcrumbs item was detected.

## Interpretation and next action

The live fetch does not explain the URL’s absence from Google’s indexed-state report: the page is reachable and indexable, while the report says it is unknown and no sitemap/referring page is recorded. A sitemap submission is the bounded discovery action already identified in `STATUS.md`, but it remains pending the user’s explicit authorization. No request-indexing action, ranking improvement, traffic, or business outcome is inferred.
