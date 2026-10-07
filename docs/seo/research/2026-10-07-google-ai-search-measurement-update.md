# RUN-063 — Google AI Search measurement update

Checked 2026-10-07 against current Google Search Central and Search Console Help. This is a documentation review; no Search Console property, site setting, analytics, or data export was changed.

## Current official guidance

- Google's AI Search guide says standard Search requirements still apply: pages must be indexed and snippet-eligible. There is no special AI schema, `llms.txt` file, or other machine-readable markup required for AI Overviews or AI Mode. Avoid creating query-fan-out pages or inauthentic mentions solely to influence AI results. Sources: [AI Search optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) and [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).
- Google states that the Search generative AI control rolled out to all websites worldwide by 2026-08-31. It governs inclusion in AI Overviews, AI Mode and certain Discover features. `Include` is the default for top-level properties; child properties may inherit a parent's setting. Changing the control is a Search Console setting mutation, not part of this review. Source: [Search generative AI control](https://support.google.com/webmasters/answer/16908024).
- The Search Generative AI performance report rolled out worldwide by 2026-08-31. It reports impressions for AI Overviews and AI Mode, grouped by pages, countries, dates and devices; `Web: multimodal` includes image-originating search. The help page does not list query dimensions. A missing report usually means insufficient impressions, though exclusion can also prevent eligibility. Source: [Generative AI performance report](https://support.google.com/webmasters/answer/16984139).
- Google separately says Search Console performance reports count AI Mode in overall Search traffic. Keep the dedicated AI impressions view distinct from overall clicks/impressions to avoid double counting. Source: [Google Search documentation updates](https://developers.google.com/search/updates).
- Google's generative-AI content guidance was updated 2026-10-01: review generated copy and metadata for accuracy, quality and relevance; content provenance can help readers, but no ranking formula or disclosure mandate is claimed here. Source: [Using generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content).

## Consequence for Lumi Local

The existing campaign already calls for indexed canonical pages, ordinary Search Console metrics and observed AI citations. At the scheduled 2026-10-14 exact-host read, inspect the Search generative AI control and report without changing settings. Record `Include`, `Exclude` or `Inherit` as shown. If a report is available, capture its date range, impressions, page breakdown and text/multimodal filters. If it is absent, record whether the control excludes the property; otherwise leave visibility unknown because low impressions can suppress the report. Do not interpret the report as external AI-platform citations, search queries, clicks, leads or sales.

## Limits

No live Search Console setting or report was read in this run. The exact-host state remains unverified. The control's documented default is not evidence of this property's current value, especially when parent inheritance may apply. No conclusion about Lumi's eligibility, impressions or citations is made.
