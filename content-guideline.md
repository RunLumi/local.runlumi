# Lumi Local editorial contract

Owner: Lumi Local. Updated 2026-10-06. Applies to both the reviewed release snapshots and EmDash. This is the canonical blog guideline; [COPY.md](COPY.md) remains authoritative for offer copy, [DESIGN.md](DESIGN.md) for visuals, and [PRICING.md](PRICING.md) for prices. Never weaken those contracts to match a query.

## Objective and strongest objection

Help a Vietnamese local-business owner decide what to do themselves, what to pay for, and how to retain ownership. Earn qualified discovery through useful answers, then offer Lumi only when its actual scope fits. “Win SEO/GEO” is an objective, not a result or a guarantee.

The strongest objection: the largest relevant queries often ask for services Lumi does not sell. Verification or managed SEO demand can bring visitors who will never buy a website/QR package. Do not hide that mismatch. Say it early, link to the free official process, and judge the experiment by qualified enquiries rather than raw traffic. The tradeoff is lower immediate CTA pressure in exchange for an honest expectation and fewer support obligations.

## Choose an intent, not the largest number

Use [the keyword plan](docs/blog/keyword-plan.md). The CSV is a historical Keyword Planner-style export, with monthly columns September 2025–August 2026. Its geography, match settings and extraction method are not documented in the file; do not invent them. “Competition” and bids describe advertising, not organic difficulty. Monthly average searches are estimates, not visits Lumi can earn.

Deduplicate exact queries after Unicode/space/case normalization. Flag conflicting rows; do not silently sum or choose the highest. Group close variants into a single intent and designate one canonical page; never sum variants as unique people or create competing pages for “Map” and “Maps”. Keep raw research and keyword dashboards private. Public pages contain the useful answer, not the commercial keyword dataset.

Priority considers relevance to an owner, legitimate demand, proximity to Lumi's deliverables, evidence availability and policy risk. Exclude broad navigational queries (maps gg, bản đồ, vị trí của tôi), downloads, satellite/3D maps and arbitrary city doorway pages. Buying fake reviews is a policy-warning topic, never an offer. A high-volume query with poor product fit belongs in education or the backlog.

## Page brief and writing

Before writing, record locale, primary query, the one question answered, stage of the reader's decision, canonical slug, topic, related articles, primary sources, claim limits, source-check date and intended next action. One distinct question per page. Google Maps is the entry point; Distribution → Trust → Ownership → Workflow is the durable product narrative.

Write the answer in the first paragraph and the short-answer field. Use natural Vietnamese with correct diacritics; put a meaningful query in the title without forcing every variation into the body. No keyword density target, mandatory word count, stock “ultimate guide”, fake urgency or abstract introductions. Use complete paragraphs, concrete decisions, useful examples and necessary lists/tables. A short complete answer is better than filler. Long articles must earn their length with evidence or distinct actions.

Separate fact, inference and recommendation. Platform claims need primary documentation; experience claims need an actual permitted experiment. Label hypothetical examples. Research memos generate hypotheses; their unresolved citation tokens and unverified competitor prices are not publishable sources. Do not repeat competitor accusations, prices or market-share claims without checking the original dated source. Never fabricate screenshots, reviews, customer logos, team members, credentials or field experience.

Keep the article useful even when the reader buys nothing. Link to Google's free path where appropriate. Place the Lumi scope beside any commercial CTA: owner-controlled Google account, no profile creation/verification/management, print-ready artwork rather than printing or physical stands. Reuse the exact CTA from src/content/copy.js. An enquiry is not payment, account creation or a reserved slot. Verify prices/renewals/30-day credit against canonical copy whenever mentioned.

Exact review invitation:

> Bạn đã sử dụng dịch vụ của chúng tôi? Quét QR để chia sẻ trải nghiệm trên Google. Mọi phản hồi đều được trân trọng.

> Have you used our service? Scan the QR to share your experience on Google. All feedback is welcome.

Invite all genuine customers; no requested rating, rewards, selective invitations, suppression or promised visibility. Lumi never asks for Google passwords, OTPs or edit permissions.

## Evidence and freshness

Each article needs a visible publisher, publication date, separate source-check date, linked source list, useful related links and a limitation statement where needed. A source must support the associated claim. Cite a specific source inline for contested or detailed claims; the source list is not permission to sprinkle unsupported assertions. Avoid copying sources; summarize in original language and keep exact quotations minimal.

Check Google procedures before each publication or substantial update and at least quarterly for live procedural guides. Review commercial offer copy whenever prices change. A date refresh requires a substantive recheck, not an automatic build date. Keep material corrections in [the editorial log](docs/blog/editorial-log.md). The public about page discloses Lumi's commercial interest and AI assistance. Until permitted real case studies exist, do not imply the guides are field-tested.

Translate the actual answer and scope, not just the title. Keep the same slug across VI/EN. Do not publish empty or machine-padded translations; a missing language is a 404 with no false hreflang. The English versions address the same Vietnam-local offer; English keyword volumes are unknown, not inferred from the Vietnamese dataset.

## SEO and GEO implementation

One h1, readable h2/h3 hierarchy, stable heading anchors, correct canonicals, self/paired hreflang only for actual published translations, natural internal links and a mobile reading column. Published articles appear in the archive, feed and sitemap. Drafts, future publication dates, private dashboards, admin screens and search pages must not appear in indexable discovery outputs. Search pages carry noindex; do not mistake robots disallow for access control.

Use truthful Article, Blog, Organization and BreadcrumbList structured data matching visible content. Lumi's editorial publication is not a fictional local storefront: do not invent LocalBusiness addresses or ratings. Do not add FAQ schema expecting a general-business rich result. Don't use hidden answer text, schema keywords stuffing, fake citations or city/industry doorway pages.

For AI discovery, make definitions and concise answers understandable on their own, use primary-source links, named entities and clear scope, and keep important information in server-rendered HTML. Google states its existing SEO practices apply to AI features; there is no special required AI schema or text file. llms.txt is an optional readable directory, with no claimed citation benefit. No guarantee of inclusion in Google AI features, ChatGPT, Perplexity or any answer engine.

Primary references, accessed 2026-10-06:

- [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google guidance on generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Google local ranking factors](https://support.google.com/business/answer/7091)
- [Google review invitations](https://support.google.com/business/answer/3474122)
- [Google Maps contribution policy](https://support.google.com/contributionpolicy/answer/7400114)

## EmDash workflow and ownership

See [the CMS runbook](docs/blog/README.md). Release snapshots are Portable Text JSON, seeded once into EmDash. After activation the database is authoritative. Never reapply sample content over live edits; the import skips existing slugs. Create new work as a draft, check sources and bilingual scope, preview at all required widths, then publish deliberately. Keep the author as the real organization unless a real named writer agrees to a byline.

Topic slugs are the controlled vocabulary in src/blog/site.js. Select one existing topic; change taxonomy in code with an archive/link check when a new intent truly needs it. Related fields contain existing canonical slugs. Required source metadata and dates are editorial fields; do not substitute unsupported administrative SEO settings. Redirect a moved published URL deliberately; never silently reuse its slug for another intent.

The CMS SEO panel is not a second copy contract. This implementation uses the article's title/description for metadata; editorial exceptions need a template change and review. Publishing authority does not permit billing, DNS, Google account access, customer contact or credential exposure.

## Release gate and measurement

Run npm test, npm run build, and npm run build:blog. Validate the EmDash seed, exercise a real local draft → publish → edit → unpublish flow and test missing CMS binding/error behavior. Inspect VI/EN index, article and long labels at 320/375/768/1440; test search with accents and no matches, keyboard focus, anchors, canonical/hreflang, feeds, sitemap, private-data exclusion and the enquiry's missing-webhook behavior. Record what actually passed; never equate a build with production publication.

Within 7 days of an authorized release: verify the real URLs and indexability, connect the owner's Search Console using explicit account authorization, record a dated baseline and read one relevant SERP for each intent. No outreach is implied. The cheapest falsification test is a manually reviewed batch of the first 10 enquiries: classify the actual need as Lumi-fit, specialist Google work or unclear. Do not collect extra PII merely for analytics.

Experiment thresholds (chosen operating rules, not forecasts): after at least 30 attributable organic enquiries, continue this keyword wedge only if at least 6 are within Lumi scope and at least 2 buy Starter or Trust Kit. If fewer than 6 fit, revise or stop the acquisition promise before adding pages. A 90-day search checkpoint with fewer than 200 non-brand impressions across this cluster triggers an indexing/intent/distribution review, not automatic mass publishing. Low samples remain inconclusive. GSC impressions/clicks, CTA clicks, delivered enquiries and paid sales are separate proof layers.

Track indexed canonical URLs, query/page impressions and clicks, within-scope enquiries, paid signals and support burden. GEO visibility is a dated sample of observed citations with query/provider/source URL; it is not a causal proof or a universal score. A publication may lose quoted context over time; clear boundaries in each answer reduce misleading reuse. Stop immediately for a policy breach, false customer evidence or private-data leak. Restore the last verified static snapshot and review the affected claim within 24–48 hours.

## Photographic illustrations

The initial ten VI/EN posts each have an original AI-generated photographic illustration, mapped by exact locale and slug in src/blog/photographs.js. These are presentation assets; EmDash remains authoritative for article text and publication state. A new or renamed slug receives no unrelated image by default. Review the image whenever a guide changes subject. Public captions use “Ảnh minh hoạ” in Vietnamese and “Illustration” in English. The editorial policy explains AI generation; no picture is evidence of a customer, business, implementation or result.

Use natural light, plausible materials and restrained local-business contexts. Never generate customer portraits, Google screenshots, ratings, testimonials, fabricated readable documents or purported working QR codes. The counter-card photographs show blank backs, not a scan destination. Pictured stands are illustrative and excluded from the Lumi offer. Generate actual print QR files from an owner-confirmed link through the separate artwork workflow.

Keep final assets local under public/blog-images/, use WebP derivatives with intrinsic dimensions and responsive srcset, and match Article/Open Graph/Twitter images to the visible article photograph. Preserve prompts and checksums in docs/blog/photography.json. Do not overwrite live CMS content or reapply the seed to add imagery. Verify every published image, its illustration label and the editorial disclosure in static and CMS builds, on mobile, and at the real production URL.
