# Lumi Local copy contract

Updated 2026-10-05. This contract supersedes earlier copy that asked for five stars, promised sub-second loading, physical standees, immediate Google alerts, unlimited revisions, or a 24-hour response.

## Source and voice

The exact bilingual section strings are maintained once in [`src/content/copy.js`](src/content/copy.js), imported by [`Landing.astro`](src/components/Landing.astro). Update both locales together. Inline interface labels and illustrative business details remain in Landing.astro and must follow this contract. Do not copy marketing text into a second implementation.

Write for a busy local owner: specific services, clear prices, and an easy next step. Sell work done for the owner, not AI or guaranteed demand. Preserve the current design and visible AI/concept disclosures.

## Offer

Starter is the primary offer: **1.990.000đ year one**. Trust Kit is an optional **399.000đ one-time** fallback, never a required first purchase. Full credit applies to upgrades within **30 days**, leaving **1.591.000đ** to pay. Renewal is **599.000đ/year** for a RunLumi subdomain or **999.000đ/year** for one standard custom domain, hosting, SSL, and technical maintenance. Confirm domain eligibility and cost before payment. Premium, aftermarket, or unusually priced domains are quoted separately. Do not guarantee every .vn/.com is eligible.

Starter includes a mobile service website, verified business content, Call/Zalo, Maps directions, an enquiry form, print-ready review QR artwork, year-one hosting and SSL, and one basic content revision round. Printing, physical stands, shipping, unlimited content edits, ads, profile management, and custom integrations are excluded unless separately agreed and quoted.

Technical maintenance is continuity of the agreed website, hosting and SSL; it is not ongoing marketing or unlimited content work. Free automated alerts may be offered only for signals actually implemented and verified. They are not a current guaranteed package inclusion.

## Primary CTA and enquiry

- VI: **Xem thử Lumi Local cho business của tôi**
- EN: **Show me Lumi Local for my business**

The enquiry requests business name, contact name, phone/Zalo and contact consent. Email and note are optional. It is not payment, account creation, or a reserved slot. Lumi confirms needs and arranges a preview; no unstaffed response SLA. Success means confirmed delivery to the configured intake, not a sale or a completed preview. Errors retain the fields and do not claim delivery.

## Google and review boundaries

Maps means a directions link or embed using owner-confirmed information, plus a checklist the owner can use. Do not imply Lumi creates, verifies, edits or manages the Google Business Profile. Never ask for passwords or edit permissions.

Invite all genuine customers; do not select only happy customers, request a particular rating, offer rewards, suppress negative feedback, or promise permanent reviews. Google controls moderation and visibility. This follows [Google Maps contribution policy](https://support.google.com/contributionpolicy/answer/7400114), checked 2026-10-04.

Exact review invitation:

> Bạn đã sử dụng dịch vụ của chúng tôi? Quét QR để chia sẻ trải nghiệm trên Google. Mọi phản hồi đều được trân trọng.

> Have you used our service? Scan the QR to share your experience on Google. All feedback is welcome.

## Evidence limits

No fabricated customers, ratings, testimonials or results. Illustrations are not customer proof. Contact buttons do not constitute a booking system. Do not promise ranking, traffic, leads, customers, revenue, security guarantees, 24/7 availability, or numeric speed without applicable measured evidence and clear limits.

Public information is not permission to republish customer photos or create an official site. Use authorized assets, keep prospect previews private, label them as drafts, disable real enquiry capture, and obtain owner approval before publication.


## Persuasive copy direction — 2026-10-05

Lead with the visitor’s reason to choose the business, then show the concrete details that support that choice: services, prices, real photos and direct contact. Explain why the owner would hire Lumi: content, setup, publication and agreed upkeep handled for them. The preview is the next step for judging fit; an enquiry is not a purchase.

VI hero: “Trước khi khách ghé, cho họ lý do chọn bạn.” EN: “Before they visit, give them a reason to choose you.” These are invitations to present the business well, not claims of conversion gains. Make price inclusions visible at the first price. Explain how a website complements Facebook/Zalo; acknowledge when existing channels may be sufficient. Put scope limitations where the buyer compares the offer, while keeping the first message focused on value. Do not create false urgency, fake social proof or unmeasured savings.

## Review pass — 2026-10-06

Removed drift from this contract: unmeasured “fast/high-speed hosting”, renewal text implying any .vn/.com is included, “standee” wording that implied a physical stand, “all-inclusive” on the year-one receipt, a “live draft” that is not live, and an EN Trust Kit line promising “real reviews”. `tests/copy.test.js` now rejects these phrases. The enquiry form distinguishes a field rejection (visitor can fix it) from a delivery failure (retry later); neither claims delivery.

## Blog extension — 2026-10-06

The VI `/blog/` and EN `/en/blog/` use the same offer and exact CTA, imported from `src/content/copy.js`. Blog-specific educational text is maintained in `src/blog/content/` for the reviewed release snapshot and in EmDash after activation. It must follow [content-guideline.md](content-guideline.md), retain Google ownership/review boundaries, and distinguish owner DIY from Lumi's commercial scope. Canonical homepage section strings remain single-source; the blog does not duplicate the homepage implementation.

## Service and industry pages

Localized service/industry content is maintained in src/services/content.ts with the route map in src/services/routes.js. Page-intent CTAs follow docs/GOAL_BILINGUAL_SERVICE_PAGES.md: Check my business / Kiểm tra business của tôi for public checks, Show me the Trust Kit for my business / Xem Trust Kit cho business của tôi for QR, and the canonical preview CTA for websites/industries. All use EnquiryForm.astro and /api/enquiries. Only allowlisted source, locale, intent and offer context is forwarded to intake; no third-party analytics is added. These pages preserve the offer and Google/review boundaries above.

## Mobile homepage navigation

Mobile menu controls: “Mở menu” / “Đóng menu” in VI; “Open menu” / “Close menu” in EN. Reuse canonical `copy[locale].nav` links and the primary CTA. Language selection remains available inside the mobile menu. Keep the disclosure usable without JavaScript; expose expanded state and support keyboard navigation.

## Company footer, about and vision — 2026-10-08

Canonical VI/EN company copy, user-supplied company details and official social URLs live in [src/content/company.js](src/content/company.js). [Footer.astro](src/components/Footer.astro) shares these across home, service, industry, company and journal pages. Keep Singapore legal-entity/UEN details distinct from the Vietnam operations office/tax ID; D-U-N-S is an identifier, not an endorsement or quality certification. Preserve the supplied address spelling without implying independent registry verification. No company phone number is displayed.

Company pages: `/about/` ↔ `/en/about/`, `/vision/` ↔ `/en/vision/`. The journal editorial policy remains separately at `/blog/about/` and `/en/blog/about/`. Reuse the canonical primary CTA and link to the homepage enquiry; do not invent another intake or attach unallowlisted source context.

Reference pages read 2026-10-08: [CJS about](https://cjs.vn/about/) and [CJS vision](https://cjs.vn/vision/). Adapt the practical, clear approach to Lumi Local's actual scope. Do not import CJS's experience count, enterprise/self-hosted offer, one-time software pricing, superlatives, security guarantees or telephone number. Lumi Local's vision expresses intent, not a measured business outcome; operational expansion follows observed recurring needs. Company details and social links were supplied by the owner for this update.
