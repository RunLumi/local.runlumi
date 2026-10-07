# Lumi Local keyword intelligence

Built 2026-10-06. Route: `/data/` (English analysis UI, original Vietnamese keywords).

## Evidence and decision

`docs/LumiLocalKeywords.csv` is the source of truth. Its columns match Keyword
Planner historical metrics; exporter identity, extraction date, target location,
language settings and search network are not included. Do not infer these from
Vietnamese wording or VND currency. Monthly history is Sep 2025–Aug 2026.

The file contains 2,740 rows, 2,070 unique exact keyword strings, and 670 repeated
rows with no conflicting duplicate metrics. There are 43 accent/spacing variant
groups; those terms remain separate. Among unique terms, 1,286 lack bid ranges,
16 lack an advertising competition index and 23 have an infinite change metric.
There are no organic observations. Source SHA-256:
`b03aa2d8e53fa856e214fb988b448c6c88f07e6cca9832d06fc43f4b94c51fa4`.

Current wording rules produce 0 offer-adjacent terms, 211 educational candidates,
36 outside-offer terms and 1,823 exclusions. These are analyst hypotheses, not
validated buyer intent. Generic address setup is low-confidence; personal home
address setup, purchased/requested-rating reviews and tracking queries are
excluded. Profile verification and managed Maps SEO are outside Lumi's offer.

The two historical `website` queries concern embedding Maps in a website. A
bounded Vietnamese SERP sample on 2026-10-07 showed mostly technical/DIY iframe,
API and how-to results for the embed variants. They are classified as
low-confidence educational terms rather than offer-adjacent buyers: the offer
includes owner-confirmed directions links, not a Maps Embed API or profile
management service. One sampled SERP is not a complete difficulty audit or
evidence of commercial intent. The historical average remains 10/mo. for each
term; export targeting and current demand remain unknown.

Only 2 unique terms contain `website`; none contain `QR`. The strategic inference
is a research coverage gap, not absence of demand. Validate one owner-oriented
guide, review current results and expand the source before spending on content
at scale. The page gives proposed seven-day test thresholds separately from the
existing business pilot gates in [STRATEGY.md](../STRATEGY.md).

## Implementation and method

- `src/data/keyword-research.js` bundles the CSV at build time through a raw
  import, analyzes it once, and computes its fingerprint. No live data provider,
  credentials, third-party analytics or new dependencies are introduced.
- `src/lib/keyword-analysis.js` owns quoted CSV parsing, exact deduplication,
  null handling, classifications, scoring, filtering, sorting and safe exports.
- `src/pages/data/index.astro` renders the overview, first 25 candidates,
  selected-keyword history, strategy and source notes at build time. The
  post-build script moves the generated HTML/CSV outside public `dist` and into
  `.data-build/research.js`, bundled exclusively into the authenticated Function.
- `src/scripts/keyword-dashboard.js` enhances filters, pagination, selection,
  monthly SVG history, shareable filter URLs and filtered CSV export. Export
  includes a readable CSV fallback for browsers that block file downloads.
- `src/layouts/ResearchPage.astro` and `src/styles/data.css` isolate this workspace
  from the marketing layout, service schema and homepage language alternates.
- `/data/keywords.csv` provides the original source. `/data/*` has a `noindex`
  response-header rule; the page also has a robots meta tag and canonical URL.
  It is deliberately absent from the sitemap and homepage navigation. Access
  requires an EmDash ADMIN session, checked on every request by the Pages
  Function over the `BLOG` binding. Anonymous page requests redirect to the
  editor's passkey sign-in; anonymous CSV/API requests return 401 without data,
  lower roles return 403, and a missing or unhealthy CMS binding fails closed.
  See [SECURITY.md](../SECURITY.md#research-workspace-access). `noindex` is an
  additional indexing instruction, not the authentication mechanism.

Priority = rounded fit points + intent points +
`15 × min(1, log10(1 + searches) / 4)`. Fit points: 60 offer-adjacent, 40
educational. Intent points: 10 informational, 20 commercial, 25 transactional,
0 navigational. Outside-offer/excluded terms score 0. This is a documented
editorial heuristic, not a calibrated model, organic difficulty or forecast.
Advertising competition does not enter the score. Aggregate keyword volumes
are not presented as unique searchers, traffic, reachable buyers or TAM.

Keep zero, null and infinite-baseline changes distinct. Keep the supplied average
separate from the monthly series. For conflicting exact duplicates, the analyzer
reports a conflict and retains the first observation; inspect conflicts before
using any refreshed source. Keyword classifications use phrase rules, with
confidence and reasons visible per term. They require human review.

## Primary references

Definitions and policy accessed 2026-10-06:

- [Google Ads historical metrics](https://support.google.com/google-ads/answer/3022575?hl=en):
  searches include close variants and depend on settings; competition is among
  advertisers. Rounded and overlapping estimates limit aggregation.
- [Google review links and QR](https://support.google.com/business/answer/16816815?hl=en).
- [Google Maps contribution policy](https://support.google.com/contributionpolicy/answer/7400114?hl=en).

Product boundaries remain [COPY.md](../COPY.md), [POSITIONING.md](../POSITIONING.md),
[PRICING.md](../PRICING.md) and [DESIGN.md](../DESIGN.md). The page does not offer
Google profile management or predict reviews, rankings, traffic or revenue.

## Updating and checking

Replace the source deliberately, inspect schema/date/targeting, review the
classification rules and example seeds, then update the dated receipt and
snapshot assertions in `tests/keyword-analysis.test.js`. Counts/charts and the
fingerprint rebuild from the source; recommendations and review dates require
human review. Run `npm run build` followed by `npm test`.

Use `npm run dev:data` for the protected local preview on port 4323, with a
local CMS Worker running and `BLOG_ADMIN_READY=true` in ignored `.dev.vars`.
Ordinary Astro dev blocks `/data`. In production, sign in to the Lumi Local
editor as an administrator; there is no research password. See
[SECURITY.md](../SECURITY.md#research-workspace-access) and [DEPLOY.md](../DEPLOY.md).

Browser acceptance: editor sign-in redirect and return, non-admin refusal, sign-out; anonymous page and CSV
denial; default candidates; accent-insensitive search; combined
fit/topic/intent/minimum-volume filters; zero matches; reset; null-last sorts;
25/50/100 pagination; keyboard keyword selection; all 12 monthly values; filter
URL reload; source and filtered exports. Inspect `/data/`, `/` and `/en/` at
320/375/768/1440 CSS pixels. Check the built page under `public/_headers` CSP,
static content with scripts removed, and existing missing-secret enquiry
failure. A browser download event is not universally exposed by the in-app
browser: verify generated CSV through the visible export fallback as well.

No production deployment, outreach, ad spend, SERP audit, independent score
calibration or conversion experiment is established by this implementation.

### Access control, 2026-10-06

Superseded the same day: the shared password, Basic Auth and research-only
session below were removed. Access now requires a Lumi Local editor (EmDash)
administrator session, checked on every request over the `BLOG` service binding
(see [SECURITY.md](../SECURITY.md#research-workspace-access)). The record below is
kept for history.

#### Original password protection, 2026-10-06

The generated page and original CSV are now Function-only content, absent from
the static asset directory. `scripts/protect-data-build.mjs` enforces this during
`npm run build`; a raw `astro build` alone must never be deployed. This avoids a
static-data bypass when Functions are unavailable. The public login form contains
no research data. The shared server secret authenticates an 8-hour signed,
HttpOnly session; logout clears it and password rotation invalidates old sessions.
An optional Basic header is supported for programmatic verification.

Local Pages runtime checks confirmed unauthenticated requests never returned the
dataset, authenticated page/CSV requests returned 200 with no-store headers,
encoded path variants returned 404 without data, and both homepages remained
public. Browser login rejected a wrong password and accepted the generated
password. Sign out returned to the login form; reopening `/data/` after sign-out
still showed that form, with no dataset. The protected build and all 34 tests
passed. Credentials are stored only in ignored `.dev.vars` with mode 600;
no production password configuration or deployment is claimed.

### Implementation verification, 2026-10-06

`npm run build` and all 23 repository tests pass. Browser checks covered search,
combined filters, zero results, reset, pagination, URL restoration, keyboard
selection, monthly values and the generated CSV fallback. The compiled page ran
under the existing CSP without console errors. Exact 320/375/768/1440 CSS widths
had no document overflow on `/data/`, `/` or `/en/`; homepage local anchors all
resolved. A synthetic local EN enquiry against the actual Function with no
webhook secret displayed its failure message and retained the entered fields.
No upstream delivery was attempted. The first 25 rows and original-source link
remained in a script-free HTML preview. Native file-download completion was not
confirmed through the in-app browser; serialized export content and its download
link were verified. The generated original CSV matches the source exactly.
