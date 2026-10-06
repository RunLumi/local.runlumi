# Live technical baseline — RUN-007

Observed 2026-10-06. Full row evidence: [safe metadata receipt](2026-10-06-live-sitemap-audit.json). Bounded HTTP reads followed the actual live sitemap, with a 20-second timeout per request; no authentication or enquiry submission.

All 38 current sitemap URLs returned HTTP 200, remained at their requested URL, carried an exact self canonical and exactly one h1, and had no observed noindex meta/response directive. No duplicate titles were found. Every locale alternate points to an audited sitemap destination and has a reciprocal link. Counts reflect listed, eligible pages; they do not establish Google indexing, ranking, impressions, traffic or citation.

This follows the verified Pages release f3fa8ae / 13b45206. CMS output was read live; seed snapshots were not substituted. Private data was not fetched or saved in this receipt. Earlier release verifier separately checked anonymous private-data denial.

No defect found in these properties. Do not manufacture a technical edit to fill a quota. Still open: rendered article/homepage visual and keyboard checks, internal-link/orphan inventory, image checks, field performance, actual GSC observations and legitimate authorized participation. The next useful action is to close those concrete gaps, then wait for permission/time where required rather than treating page counts as success.
