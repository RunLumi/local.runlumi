# /goal - Lumi Local bilingual service-page expansion

**Status:** implemented; production proof is recorded in the release log
**Primary market:** Vietnam  
**Languages:** Vietnamese + English  
**Production origin:** https://local.runlumi.app  
**Updated:** 2026-10-06

## Mission

Expand Lumi Local from a strong bilingual homepage into a small, high-intent service and industry architecture that captures real search demand around Google Maps, Google reviews, local-business websites, and local visibility in Vietnam.

This is **not** a generic SEO-content project.

The job is to turn search intent into a clean Lumi Local funnel:

> **Search intent -> useful service page -> inspectable offer -> enquiry / preview -> Trust Kit or Starter -> annual renewal**

The pages must help a busy local-business owner understand what Lumi can actually do, what Lumi does not do, what it costs, and what the next step is.

Do not turn Lumi Local into a managed Google Maps agency. Do not create pages merely because a keyword exists. Every indexable page must correspond to a real customer problem, a real Lumi capability, and a clear conversion path.

---

## 1. Read first

Before implementation, read the current repository source of truth:

- `AGENTS.md`
- `DESIGN.md`
- `COPY.md`
- `POSITIONING.md`
- `PRICING.md`
- `STRATEGY.md`
- `docs/GTM.md`
- `docs/FIELD_PLAYBOOK.md`
- `docs/GOAL_LANDING_PAGE.md`
- `docs/UI_UX_RESEARCH_2026-10.md`

If this goal conflicts with a newer explicit product/pricing decision in the repository, stop and surface the conflict instead of silently choosing one.

Do not change pricing, product scope, Google access policy, review policy, DNS, billing, or production secrets as part of this goal.

---

## 2. Product truth that every page must preserve

The customer-facing product is **Lumi Local**.

Do not rename it Lumi Website. Do not position it as an AI website builder.

Core commercial ladder:

| Offer | Price | Role |
| --- | ---: | --- |
| **Lumi Trust Kit** | **399.000đ one-time** | low-risk entry / trust layer |
| **Lumi Local Starter** | **1.990.000đ year one** | primary offer |
| **RunLumi Address renewal** | **599.000đ/year from year two** | low-cost continuity |
| **Custom-domain renewal** | **999.000đ/year from year two** | recommended professional continuity |

If a Trust Kit customer upgrades to Starter within 30 days, credit the full 399.000đ. Remaining amount: **1.591.000đ**.

Starter remains the core product. Trust Kit is a risk reducer, not a mandatory toll gate.

Durable narrative:

> **Distribution -> Trust -> Ownership -> Workflow**

The website is a core component, not the whole product.

---

## 3. Evidence and market framing

The Vietnamese market visibly uses search language such as:

- dịch vụ Google Maps;
- dịch vụ Google Map;
- SEO Google Maps / SEO Maps;
- tạo Google Maps cho cửa hàng;
- xác minh Google Maps / Google Business Profile;
- tối ưu Google Maps;
- quản lý / chăm sóc Google Maps;
- đánh giá Google Maps / review Google Maps;
- mã QR đánh giá Google;
- Google Maps bị khóa / tạm ngưng / mất quyền;
- Local SEO;
- website doanh nghiệp / website cửa hàng / website theo ngành.

Treat this as **search-language evidence**, not proof of exact search volume.

Do not invent monthly search volumes. If Search Console, Keyword Planner, Ahrefs, Semrush, or another approved source later provides volume, store the source and date before using it.

### Public market examples reviewed on 2026-10-06

These are references for packaging and market language, not endorsements:

- An Nguyên Marketing: https://annguyenmarketing.com/dich-vu-google-map
  - publicly lists creation/verification, optimization, monthly care, Local SEO, audit, QR/review workflows;
  - public pricing observed includes 1.290.000đ creation/verification, 2.490.000đ initial optimization, 990.000đ audit, and recurring care/Local SEO packages.
- KINGNCT: https://kingnct.vn/dich-vu-google-maps
  - public pricing observed around 1.5m-1.875m before VAT for verification-related packages.
- Fast Marketing: https://fastmarketing.com.vn/dich-vu-google-maps
  - public packaging includes 1.990.000đ basic and higher Google Maps packages;
  - some offers include seeded five-star reviews and ranking-oriented claims. These are examples of what Lumi must **not** copy.
- BT Marketing: https://btmkt.vn/dich-vu-google-maps/
  - public menu shows low-ticket setup/edit items and higher recurring/SEO services.
- MapCare: https://mapcare.vn/dich-vu-google-map-ho-chi-minh/
  - useful for observing local-language packaging and city-level search intent.

The useful market signal is not "copy competitors." It is:

> Vietnamese businesses already understand Google Maps as a paid service category, but much of the market bundles profile access, verification, ranking promises, managed work, or review practices that do not fit Lumi's current product.

Lumi should capture the demand while offering a narrower, cleaner product.

---

## 4. Google policy boundary

Use official Google documentation as the authority, not competitor claims.

Primary references:

- Local ranking factors: https://support.google.com/business/answer/7091
- Maps user-generated content / review policy: https://support.google.com/contributionpolicy/answer/7400114
- Multilingual URL guidance: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- hreflang/localized versions: https://developers.google.com/search/docs/specialty/international/localized-versions
- canonical guidance: https://developers.google.com/search/docs/crawling-indexing/canonicalization

Google says local results are mainly based on relevance, distance, and prominence. There is no way to request or pay Google for a better local ranking.

Google permits merchants to invite genuine customers to leave honest reviews, but prohibits paid/incentivized reviews, selective positive-review solicitation, rating manipulation, and asking reviewers to include specific content.

Therefore every Lumi page must obey these rules:

### Never claim

- Top 1 / Top 3 Google Maps;
- guaranteed ranking improvement;
- guaranteed traffic, calls, leads, customers, bookings, or revenue;
- "Google-approved" or "Google partner" unless formally true and documented;
- that Lumi can control Google moderation;
- that QR guarantees more reviews;
- that Lumi can make a suspended profile return;
- that Lumi can verify any profile;
- that Lumi manages the customer's Google Business Profile under the current offer.

### Never offer by default

- fake reviews;
- seeded reviews;
- paid reviews;
- review exchanges;
- discounts/rewards for reviews;
- review gating;
- instructions asking customers to mention keywords, locations, staff names, or a specific rating;
- Google password collection;
- Google Business Profile owner/manager access;
- ongoing manual GBP posting/replying/editing;
- suspension/reinstatement execution;
- profile verification execution.

### Allowed current framing

- public presence check using information visible publicly;
- owner-confirmed Maps direction link/embed;
- neutral review-request copy;
- print-ready Google Review QR artwork;
- Call/Zalo/Maps contact assets;
- website that clearly presents services, hours, location context, and contact paths;
- checklist showing what the owner should verify in their own profile;
- education about official Google processes;
- referral/partner routing for work outside Lumi scope, if a real partner exists later.

---

# 5. Bilingual URL architecture

This site is bilingual. **URL localization is part of the product requirement, not a later SEO polish task.**

Vietnamese is the root locale. English lives under `/en/`.

Do not add `/vi/` unless the whole existing site is intentionally migrated in a separate project.

Use trailing slashes consistently.

## 5.1 Build-now route pairs

| Purpose | Vietnamese canonical | English canonical |
| --- | --- | --- |
| Homepage | `/` | `/en/` |
| Google Maps service-intent page | `/dich-vu/google-maps/` | `/en/services/google-maps/` |
| Google Review QR | `/dich-vu/ma-qr-danh-gia-google/` | `/en/services/google-review-qr/` |
| Public Google presence check | `/dich-vu/kiem-tra-hien-dien-google/` | `/en/services/google-presence-check/` |
| Local-business website | `/dich-vu/website-doanh-nghiep-dia-phuong/` | `/en/services/local-business-website/` |
| Spa industry | `/nganh/spa/` | `/en/industries/spa/` |
| Garage / auto repair industry | `/nganh/garage/` | `/en/industries/auto-repair/` |
| HVAC / air-conditioning industry | `/nganh/dien-lanh/` | `/en/industries/hvac/` |

### URL rules

- Vietnamese slugs should use natural Vietnamese search language without accents.
- English slugs should be idiomatic English, not literal Vietnamese transliterations.
- Proper product/brand terms such as Google Maps may remain English in both locales.
- Do not create two indexable aliases for the same intent.
- Do not create `/en/dich-vu/...` or Vietnamese copy at English URLs.
- Do not create English slugs at the Vietnamese root when a natural Vietnamese slug exists.
- The language switcher on a service/industry page must switch to the **equivalent page**, not dump the visitor back on the homepage.
- If a route changes after launch, use a permanent redirect to the chosen canonical.

## 5.2 Hreflang and canonical requirements

Every VI/EN pair must:

1. have a self-referencing canonical;
2. reference both language variants with reciprocal `hreflang`;
3. use `vi-VN` for Vietnamese;
4. use `en-VN` for English aimed at English-speaking business owners/operators in Vietnam;
5. use `x-default` pointing to the Vietnamese canonical unless a true language selector is introduced later;
6. use fully qualified HTTPS URLs;
7. never canonicalize the English translation to the Vietnamese page or vice versa.

Example for the Google Maps pair:

```html
<link rel="canonical" href="https://local.runlumi.app/dich-vu/google-maps/" />
<link rel="alternate" hreflang="vi-VN" href="https://local.runlumi.app/dich-vu/google-maps/" />
<link rel="alternate" hreflang="en-VN" href="https://local.runlumi.app/en/services/google-maps/" />
<link rel="alternate" hreflang="x-default" href="https://local.runlumi.app/dich-vu/google-maps/" />
```

The English page contains the same alternate cluster but self-canonicalizes to the English URL.

## 5.3 Sitemap

Update the sitemap so every indexable VI and EN URL is present.

Prefer generating the sitemap from the same route/content data rather than manually maintaining a second list if the current Astro architecture makes that simple.

If hreflang is implemented in the sitemap, follow Google's `xhtml:link` format and include reciprocal alternates. Do not maintain contradictory hreflang in HTML and sitemap.

---

# 6. Information architecture and navigation

Do not turn the header into a mega-menu.

Keep the current restrained navigation. Service discovery can happen through:

- one compact "Dịch vụ / Services" entry if the current navigation can support it cleanly;
- contextual internal links on the homepage;
- a service cluster near relevant sections;
- footer links;
- service-to-service links;
- industry-to-service links.

Desired graph:

```text
VI homepage
  -> Google Maps
  -> Google Review QR
  -> Google presence check
  -> Local-business website
  -> Spa / Garage / Điện lạnh

EN homepage
  -> Google Maps
  -> Google Review QR
  -> Google presence check
  -> Local-business website
  -> Spa / Auto repair / HVAC
```

Service pages should link laterally only when useful.

Examples:

- Google Maps -> presence check + Review QR + website;
- Review QR -> Google Maps + Trust Kit + website;
- presence check -> Google Maps + website;
- website -> Google Maps + industry pages;
- each industry page -> website + Review QR + Google Maps.

Avoid footer link farms.

---

# 7. Shared page system

Do not hand-build 14 unrelated pages.

Create a reusable, inspectable service/industry page system that preserves `DESIGN.md`.

Recommended architecture, adapt to current repo conventions:

- one typed content/data source for localized service pages;
- one shared service-page template/component;
- one shared industry-page template/component;
- locale-aware metadata helper;
- locale-aware route map;
- locale-aware language switcher;
- shared CTA/enquiry component;
- shared "scope / not included" component;
- shared FAQ component;
- shared product-ladder rail;
- shared related-pages component;
- structured data generated from the page's real content.

Do not create a generic page factory that makes every page read identically. Shared structure is good; duplicated SEO filler is not.

Each page needs a unique reason to exist.

---

# 8. Build-now service pages

## 8.1 Vietnamese: /dich-vu/google-maps/
## English: /en/services/google-maps/

### Search intent

Vietnamese users looking for "dịch vụ Google Maps" often expect some combination of setup, verification, optimization, reviews, profile care, recovery, or SEO.

Lumi currently does **not** provide that full managed scope.

This page therefore captures the category while making the boundary obvious.

### VI metadata

**Title:** Dịch vụ Google Maps cho doanh nghiệp địa phương | Lumi Local

**H1:** Google Maps của business đã đủ để khách tin và liên hệ chưa?

**Meta description:** Lumi Local kiểm tra phần hiện diện công khai, kết nối Maps với website, Call/Zalo và QR xin đánh giá thật. Không cần giao quyền quản trị Google.

### EN metadata

**Title:** Google Maps Support for Local Businesses in Vietnam | Lumi Local

**H1:** Is your Google presence ready for customers to trust and contact you?

**Meta description:** Lumi Local checks your public presence and connects Maps, your website, Call/Zalo and honest-review QR assets without taking over your Google account.

### Hero

Explain the customer outcome first:

- customers can confirm the business;
- understand what it does;
- find directions;
- call/Zalo;
- see a proper website;
- leave genuine feedback more easily.

Immediately state:

> Lumi does not log in to, verify, edit, or manage your Google Business Profile under this package.

Do not hide this in FAQ.

### Offer mapping

Primary CTA: **Kiểm tra business của tôi** / **Check my business**

Primary commercial path:
- public check;
- Trust Kit 399k when the owner needs the trust/review/contact layer;
- Starter 1.99m when the business needs a proper website and complete contact surface.

### Required sections

1. Hero + clear scope.
2. "Khách đang thấy gì khi tìm business của bạn?" public-presence checklist.
3. Maps + website + Call/Zalo + review QR relationship.
4. What Lumi can do today.
5. What Lumi does not do.
6. Trust Kit vs Starter decision.
7. Transparent pricing.
8. Process: send business -> Lumi checks public context -> confirm scope -> deliver.
9. Google policy-safe review explanation.
10. FAQ.
11. Enquiry CTA.
12. Related pages.

### FAQ targets

- Lumi có tạo Google Maps mới không?
- Lumi có cần mật khẩu hoặc quyền quản trị Google không?
- Lumi có SEO Google Maps lên Top 3 không?
- Nếu thông tin trên Google sai thì Lumi sửa giúp được không?
- QR đánh giá Google có hợp lệ không?
- Trust Kit khác Starter thế nào?
- Business đã có Facebook/Zalo thì có cần website không?

English FAQ should answer the same customer questions naturally, not word-for-word machine translation.

---

## 8.2 Vietnamese: /dich-vu/ma-qr-danh-gia-google/
## English: /en/services/google-review-qr/

### Search intent

Capture:

- mã QR đánh giá Google;
- QR Google Review;
- QR review Google Maps;
- tạo mã QR xin đánh giá Google.

Do not compete by pretending QR generation itself is scarce. Free QR generators exist.

The paid value is **done-for-you, correct destination, branded print-ready artwork, neutral request copy, contact assets, and integration into the Lumi Local presence**.

### VI metadata

**Title:** Mã QR đánh giá Google cho cửa hàng | Lumi Local

**H1:** Cho khách một đường ngắn hơn để chia sẻ trải nghiệm thật trên Google.

**Meta description:** Lumi tạo QR đánh giá Google và file artwork sẵn để in, kèm lời mời đánh giá trung lập. Không mua review, không ép 5 sao, không review gating.

### EN metadata

**Title:** Google Review QR for Local Businesses in Vietnam | Lumi Local

**H1:** Give real customers a shorter path to share an honest Google review.

**Meta description:** Lumi prepares a Google Review QR and print-ready artwork with neutral review copy. No bought reviews, five-star pressure or review gating.

### Required sections

1. Hero with inspectable QR artifact.
2. What the QR actually does.
3. What 399k Trust Kit includes.
4. Why a business might pay Lumi when free QR tools exist.
5. Where the artwork can be used: counter, receipt/card artwork, after-service message, etc. Do not imply printing is included.
6. Exact neutral review invitation from `COPY.md`.
7. Policy-safe vs unsafe examples.
8. Trust Kit -> Starter 30-day credit.
9. FAQ.
10. CTA.

### Critical copy

Never use "xin 5 sao" as Lumi's instruction.

Use the canonical invitation from `COPY.md`.

Make it explicit that Google controls whether reviews appear and how they are moderated.

---

## 8.3 Vietnamese: /dich-vu/kiem-tra-hien-dien-google/
## English: /en/services/google-presence-check/

### Search intent

This is Lumi's safest bridge from "something is wrong with my Google presence" into a productized audit.

Do not imply access to private Business Profile analytics or settings.

### VI metadata

**Title:** Kiểm tra hiện diện Google của doanh nghiệp | Lumi Local

**H1:** Khi khách tìm tên business, họ đang thấy gì?

**Meta description:** Lumi kiểm tra thông tin công khai của business trên Google và website: Maps, link liên hệ, nội dung cơ bản và các điểm dễ gây mất niềm tin.

### EN metadata

**Title:** Google Presence Check for Local Businesses | Lumi Local

**H1:** What do customers see when they search for your business?

**Meta description:** Lumi reviews publicly visible Google and website information, including Maps, contact paths and obvious trust gaps, without requiring Google account access.

### Scope

Can inspect publicly:

- business name;
- visible address/service context;
- public phone;
- public website link;
- public hours where visible;
- visible review destination;
- obvious broken website/contact links;
- whether a basic website/contact surface exists;
- consistency of owner-confirmed facts supplied to Lumi.

Cannot claim access to:

- private GBP performance data;
- account health;
- unpublished edits;
- verification state beyond what is publicly observable;
- internal Google reasons for suspension/ranking.

### CTA

**Kiểm tra business của tôi** / **Check my business**

This page may become the best top-of-funnel CTA destination if conversion data proves it.

---

## 8.4 Vietnamese: /dich-vu/website-doanh-nghiep-dia-phuong/
## English: /en/services/local-business-website/

### Search intent

Capture owners who already know they need a website.

This is the page closest to Starter and should have the strongest direct commercial intent.

### VI metadata

**Title:** Website cho doanh nghiệp địa phương từ 1.990.000đ | Lumi Local

**H1:** Một website gọn để khách hiểu, tin và liên hệ với business của bạn.

**Meta description:** Lumi Local Starter 1.990.000đ năm đầu: website mobile-first, Call/Zalo, Maps, form liên hệ, hosting + SSL và một vòng chỉnh sửa cơ bản.

### EN metadata

**Title:** Local Business Website in Vietnam from 1,990,000 VND | Lumi Local

**H1:** A focused website that helps customers understand and contact your business.

**Meta description:** Lumi Local Starter is 1,990,000 VND for year one with a mobile-first website, Call/Zalo, Maps, enquiry form, hosting, SSL and one basic revision round.

### Required sections

1. Hero with price visible.
2. Inspectable mobile website example.
3. Why website complements Facebook/Zalo rather than pretending to replace them.
4. Exact Starter scope.
5. What is not included.
6. Own domain vs RunLumi address.
7. Year-two renewal.
8. How Lumi prepares content from verified business information.
9. Three-step delivery.
10. Relevant industries.
11. FAQ.
12. Primary preview CTA.

Do not call this "thiết kế website theo yêu cầu." Standardization is part of the product economics.

---

# 9. Build-now industry pages

Industry pages are not city doorway pages.

Do not generate dozens of pages by replacing an industry noun.

Build only these three first:

- Spa;
- Garage / auto repair;
- Điện lạnh / HVAC.

Each must contain genuinely industry-specific examples, customer questions, contact behavior, and website structure.

## 9.1 Spa

VI: `/nganh/spa/`  
EN: `/en/industries/spa/`

VI H1:

> Website và Google trust kit cho spa địa phương.

EN H1:

> Website and Google trust assets for local spas in Vietnam.

Show examples such as:

- treatment/service menu;
- price/range only when supplied and approved by owner;
- opening hours;
- location;
- Zalo/contact;
- real authorized photos;
- Google Review QR after genuine service.

Never make medical/beauty outcome claims that the business has not substantiated.

## 9.2 Garage / auto repair

VI: `/nganh/garage/`  
EN: `/en/industries/auto-repair/`

VI H1:

> Cho khách biết garage sửa gì, ở đâu và gọi ai ngay trên điện thoại.

EN H1:

> Make it easy to see what your auto shop fixes, where it is, and how to call.

Useful artifacts:

- service list;
- roadside/emergency contact only if genuinely offered;
- Maps directions;
- opening hours;
- vehicle/service categories;
- Call/Zalo;
- review QR after completed work.

Do not claim 24/7 unless owner-confirmed.

## 9.3 Điện lạnh / HVAC

VI: `/nganh/dien-lanh/`  
EN: `/en/industries/hvac/`

VI H1:

> Một trang rõ ràng cho dịch vụ điện lạnh, từ lắp đặt đến bảo trì.

EN H1:

> A clear online home for HVAC installation, repair and maintenance.

Useful artifacts:

- service area;
- installation / repair / maintenance;
- equipment types only when owner-confirmed;
- phone/Zalo;
- quote enquiry;
- Maps or service-area context;
- review QR after genuine completed jobs.

Do not fabricate brands serviced, response time, emergency availability, warranties, certifications, or pricing.

---

# 10. Pages to test later, not build as indexed commercial pages now

Do not create these merely to increase page count.

## /dich-vu/toi-uu-google-maps/
EN equivalent: /en/services/google-maps-optimization/

Current issue: the searcher expects actual GBP optimization and often ongoing edits/access. Lumi does not currently provide that scope.

Only build/index after validating a productized, policy-safe offer with clear access/ownership rules and acceptable manual effort.

## /dich-vu/local-seo/
EN equivalent: /en/services/local-seo/

Current issue: "Local SEO" usually implies a broader recurring service: website SEO, GBP optimization, citations, content, reporting, links, reputation, or rank tracking.

Do not index until Lumi has a defined recurring product and delivery model.

## verification / suspension / recovery pages

Examples of intents:

- xác minh Google Maps;
- Google Maps bị khóa;
- khôi phục Google Business Profile;
- mất quyền Google Maps.

These can become educational guides later, but do not create commercial service pages unless Lumi actually develops that capability or a transparent partner route.

Never bait a high-intent recovery query into a service Lumi cannot deliver.

---

# 11. Search-demand to offer ladder

Use this routing logic:

| Searcher problem | Best Lumi next step |
| --- | --- |
| "Tôi muốn khách review dễ hơn" | Trust Kit 399k |
| "Google/website/contact của tôi nhìn thiếu hoặc rời rạc" | public presence check -> Trust Kit or Starter |
| "Tôi chưa có website / website yếu" | Starter 1.99m directly |
| "Tôi muốn dịch vụ Google Maps" but need is unclear | public check first, then route honestly |
| "Tôi muốn Top 3 Maps" | educate, no ranking promise; do not pretend current scope is managed SEO |
| "Tôi cần verify / recover / unsuspend" | educational / partner route, not current paid offer |
| "Tôi muốn mua review 5 sao" | refuse that method; offer neutral QR workflow for genuine customers |
| "Tôi cần managed GBP every month" | do not sell until recurring capability is validated |

The website must make these boundaries feel like professionalism, not defensiveness.

---

# 12. Copy direction

Write in the language customers use.

Prefer:

- "khách tìm thấy";
- "đúng thông tin";
- "dễ gọi";
- "dễ Zalo";
- "dễ chỉ đường";
- "mã QR đánh giá Google";
- "khách thật";
- "website cho cửa hàng / doanh nghiệp địa phương";
- "Lumi làm phần setup cho bạn";
- "không cần giao quyền Google";
- "xem thử cho business của tôi".

Use "hiện diện online" only when the surrounding copy makes it concrete.

Avoid:

- omnichannel;
- digital transformation;
- AI-powered ecosystem;
- growth engine;
- dominate local search;
- hack Google Maps;
- Local Authority unless educational context truly requires it;
- generic "unlock growth" language;
- keyword stuffing.

English pages should be written as natural English for an owner/operator in Vietnam, not literal Vietnamese translations.

---

# 13. Page UX requirements

Follow `DESIGN.md` rather than inventing a second visual brand.

Every service page should answer, in roughly this order:

1. **What problem is this page about?**
2. **What will Lumi actually do?**
3. **What will Lumi not do?**
4. **What tangible artifact will I receive?**
5. **How much does the relevant offer cost?**
6. **What happens next?**

Use product surfaces, checklists, QR artwork previews, mobile website previews, Call/Zalo/Maps artifacts, and inspectable HTML.

Do not use generic SEO illustrations such as rockets, graphs going up, fake rank trackers, fake Google dashboards, or fabricated Maps screenshots.

No fake testimonials or logos.

No competitor logos unless legally and contextually justified for editorial comparison.

Mobile is primary. Most field prospects may reopen pages from Zalo.

At 320px:

- no horizontal overflow;
- price remains readable;
- CTA remains thumb-friendly;
- comparison sections collapse cleanly;
- FAQ is usable;
- language switch does not lose the equivalent route;
- no sticky UI hides content.

---

# 14. CTA architecture

Do not create a different form for every page unless data proves that necessary.

Reuse the existing enquiry endpoint and privacy/security model.

Primary CTA labels may vary by intent:

### Generic / Google pages

VI: **Kiểm tra business của tôi**  
EN: **Check my business**

### Website / industry pages

VI: **Xem thử Lumi Local cho business của tôi**  
EN: **Show me Lumi Local for my business**

### Review QR page

VI: **Xem Trust Kit cho business của tôi**  
EN: **Show me the Trust Kit for my business**

All CTAs should converge on the same low-friction enquiry system, with page/intent context captured safely.

Add a non-PII hidden/source field such as:

- page slug;
- locale;
- CTA intent;
- offer interest.

Do not put sensitive information in analytics URLs.

The form remains an enquiry, not payment, account creation, booking, or guaranteed response time.

---

# 15. Analytics events

Implement only if an analytics provider is already approved/configured. Do not silently add a third-party tracker.

Use a stable event vocabulary so future analytics can map search intent to revenue:

- `service_page_view`
- `industry_page_view`
- `cta_check_business`
- `cta_preview`
- `cta_trust_kit`
- `phone_click`
- `zalo_click`
- `maps_click`
- `language_switch`
- `faq_open`
- `enquiry_start`
- `enquiry_submit_success`
- `enquiry_submit_error`

Recommended dimensions:

- locale;
- page_type;
- page_slug;
- intent_cluster;
- offer_interest.

Do not track raw name, phone, email, note, review text, or other PII in analytics.

---

# 16. Structured data

Use structured data only when it accurately describes visible content.

Potentially appropriate:

- `Organization` for RunLumi/Lumi Local identity where already established;
- `WebSite`;
- `Service` on genuine service pages;
- `FAQPage` only if current Google eligibility/guidance and repository policy support it, and only for visible FAQs;
- `BreadcrumbList`.

Do not add:

- fake `AggregateRating`;
- fake `Review`;
- fake `LocalBusiness` address;
- fake prices inconsistent with visible content;
- customer review schema for testimonials that do not exist.

Structured data is not a ranking guarantee.

---

# 17. Internal linking and breadcrumbs

Each page should have a visible breadcrumb.

Examples:

VI:

> Lumi Local / Dịch vụ / Mã QR đánh giá Google

EN:

> Lumi Local / Services / Google Review QR

Industry pages:

> Lumi Local / Ngành / Điện lạnh

and

> Lumi Local / Industries / HVAC

Use semantic equivalent links across languages.

Do not use English breadcrumb nouns on Vietnamese pages unless they are product/brand names.

---

# 18. Content uniqueness and doorway-page guardrail

A page is not ready to index if its only unique content is:

- industry name;
- city name;
- one swapped hero image;
- one changed keyword.

For each page, require unique:

- problem framing;
- examples;
- artifact;
- FAQ;
- relevant offer explanation;
- related links;
- at least one section that would make no sense on another service/industry page.

Do not create district/city pages such as `/dich-vu-google-maps-quan-1/`, `/quan-3/`, etc. in this phase.

We are building a compact authority cluster, not an SEO page farm.

---

# 19. Agent research loop before writing copy

Before implementing or materially rewriting a service page:

1. Search the target query in Vietnamese and English where relevant.
2. Record the dominant intent and at least five relevant result types.
3. Separate:
   - official Google documentation;
   - Vietnamese commercial competitors;
   - free tools;
   - editorial guides;
   - forums/community evidence.
4. Do not treat competitor marketing claims as facts.
5. Do not copy competitor wording.
6. Check whether Lumi can actually satisfy the dominant intent.
7. If intent and capability do not match, change the page framing or do not index it.

AI should accelerate gathering and synthesis. Human/product judgment decides what Lumi sells.

---

# 20. Implementation order

Implement in this order:

### Phase 1 - shared localization/SEO infrastructure

- locale route map;
- canonical helper;
- hreflang helper;
- language-switch equivalent routing;
- metadata model;
- breadcrumb model;
- sitemap generation/update.

### Phase 2 - highest-confidence service pages

1. Google Review QR;
2. local-business website;
3. Google presence check;
4. Google Maps category-intent page.

Why this order:

- Review QR maps directly to Trust Kit;
- website maps directly to Starter;
- presence check is safely deliverable without Google account access;
- broad "dịch vụ Google Maps" has high commercial relevance but the largest expectation mismatch, so its scope language must be tested carefully.

### Phase 3 - industry pages

1. Spa;
2. Garage / auto repair;
3. Điện lạnh / HVAC.

### Phase 4 - homepage/internal linking refinement

Add only the minimum navigation/internal-link changes needed to make the new cluster discoverable.

Do not redesign the homepage again unless a specific issue blocks the service-page journey.

---

# 21. 30-day falsification plan

These pages are an acquisition experiment, not proof of an SEO moat.

Track by page and locale.

## Search signal

If a page is indexed but receives essentially no relevant impressions after a reasonable crawl/index period, inspect:

- intent;
- title/H1;
- crawlability;
- internal links;
- whether the query cluster is actually searched;
- whether the page is too weak or too new to compete.

Do not immediately create more pages.

## Snippet signal

Working diagnostic threshold:

- if a page receives >=200 relevant impressions with CTR below 1%, review title, description, SERP intent match, and brand/value clarity.

This is an experiment threshold, not an industry benchmark.

## Conversion signal

Working diagnostic threshold:

- if a service page receives >=100 qualified landing sessions and produces zero enquiries, treat offer/CTA/message match as suspect.

Again, this is a falsification threshold, not a universal conversion benchmark.

## Offer signal

Watch:

- Trust Kit enquiries;
- Trust Kit paid;
- Starter enquiries;
- Starter paid;
- Trust Kit -> Starter within 30 days;
- human sales time;
- preview time;
- delivery time;
- manual Google work requested;
- support burden.

If the Google Maps page produces many leads asking for verification, suspension recovery, ranking guarantees, or managed GBP work but few leads for Lumi's actual scope, **do not broaden scope reflexively**. First test whether the page framing is attracting the wrong intent.

If Trust Kit sells but Starter attach remains near zero, treat Trust Kit as a possible dead-end product rather than assuming it is a successful wedge.

---

# 22. Definition of done

This goal is complete only when:

- all 7 VI routes and all 7 EN equivalents exist;
- every route has natural, locale-specific copy;
- every pair has correct self-canonical + reciprocal hreflang;
- language switching preserves semantic route equivalence;
- sitemap contains all intended indexable routes;
- no page implies Google account access;
- no page promises ranking, leads, customers, reviews, or revenue;
- no page sells fake/incentivized/gated reviews;
- Google Review QR copy is neutral and policy-safe;
- pricing exactly matches `PRICING.md`;
- Trust Kit credit rule is correct;
- Starter is still visually/commercially primary where appropriate;
- pages use the existing Lumi Local design system;
- mobile works at 320/375/768 and desktop at 1440;
- no horizontal overflow;
- CTA/form path works;
- source/intent context reaches the enquiry endpoint without PII leakage to analytics;
- structured data contains no fabricated proof;
- build/tests pass;
- no broken links;
- no accidental duplicate locale URLs;
- no English body copy on VI pages or Vietnamese body copy on EN pages except proper nouns/examples where appropriate;
- rendered output is manually inspected, not just source-reviewed.

Do not claim production deployment until the live production URLs have been verified.

---

# 23. Final quality test

A Vietnamese owner arriving from Google should be able to answer within seconds:

> "Lumi có làm đúng việc tôi đang cần không?"

They should then understand:

> "Nếu tôi chỉ cần phần review/trust, có gói 399k. Nếu tôi cần một phần hiện diện đầy đủ hơn với website, Starter là 1,99 triệu năm đầu."

An English-speaking owner/operator in Vietnam should reach the same understanding from the English route without encountering Vietnamese URL structure or machine-translated copy.

The desired reaction is:

> **"Đúng vấn đề tôi đang tìm. Scope rõ. Giá rõ. Không trò lách Google. Cho Lumi xem business của tôi."**

And in English:

> **"This matches the problem I searched for. The scope is clear, the price is clear, and I keep control of Google. Show me what Lumi would do for my business."**


## Implementation evidence — 2026-10-06

All seven VI/EN pairs are implemented from src/services/content.ts and src/services/routes.js through shared templates, form, scope, pricing, FAQs and related links. The homepage links to every route. Locale metadata uses reciprocal vi-VN/en-VN/x-default and self-canonicals. The sitemap reads the same route map. Source/intent/offer context is allowlisted at /api/enquiries and sent only to the existing intake; no analytics provider was added.

Pre-copy search review is recorded in SERVICE-PAGE-RESEARCH-2026-10-06.md. Local rendered QA covered all 14 routes at exact CSS widths 320/375/768/1440 (56 cases), with no horizontal overflow or missing anchors. Screenshots and measurements: /private/tmp/lumi-service-visual-qa. Service/industry heroes at each width and full website/auto layouts were visually reviewed; local form submission to a missing-secret endpoint reports failure and retains fields. Automated metadata/link/pricing/source-context tests run with the build. Live production verification follows the authorized release; no search/business outcome is assumed.
