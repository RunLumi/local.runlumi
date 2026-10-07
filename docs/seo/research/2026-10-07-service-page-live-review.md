# RUN-062 — Live bilingual service-page review

Observed: 2026-10-07, Asia/Ho_Chi_Minh. Pages reviewed:

- https://local.runlumi.app/dich-vu/website-doanh-nghiep-dia-phuong/
- https://local.runlumi.app/en/services/local-business-website/

This was a read-only production review. No form was submitted and no production, CMS, account, analytics or Search Console state changed.

## Evidence

- Both pages return an indexable page with one H1, a locale-specific title/description, a self-referencing canonical, and reciprocal `vi-VN`, `en-VN` and `x-default` alternates.
- All observed in-page links on both pages resolve to an existing target. Both locales expose the canonical Lumi Local preview CTA and visible FAQ sections.
- Visible pricing and scope match `COPY.md` and `PRICING.md`: Starter 1.990.000đ / 1,990,000 VND in year one; optional Trust Kit 399.000đ / 399,000 VND; full credit within 30 days; 1.591.000đ / 1,591,000 VND remaining; and renewals of 599.000đ / 599,000 VND for a RunLumi address or 999.000đ / 999,000 VND for one standard custom domain from year two.
- Both pages state the no-booking, no-store/CRM, no-Google-account-access and no-ranking/outcome-guarantee boundaries. The illustration and sample contact actions are labeled as illustrative.
- JSON-LD contains `Organization`, `WebSite`, `Service` and `BreadcrumbList`. It contains no `FAQPage`, `Product`, `AggregateRating` or customer-review proof.

Google's Search documentation changelog says the FAQ rich-result feature is no longer shown in Google Search and its documentation was removed in June 2026. Therefore, the page's omission of FAQPage is appropriate for Google rich-result purposes; do not add markup solely to pursue that retired feature. Visible FAQs remain useful to readers. Source: [Google Search documentation updates](https://developers.google.com/search/updates), accessed 2026-10-07.

## Decision and limits

The checked live content matches the current offer and localization contracts; this review found no specific copy or metadata correction to make. No 80-item CORE-EEAT score was assigned: the installed auditor guidance is version 9.1 and its FAQ-schema recommendation is stale against Google's current documentation, while many of its authority items require unavailable evidence. A rubric score would not be an acquisition, ranking or GEO outcome. The available evidence does not establish indexing, rankings, field CWV, AI citations, referrals, enquiries or sales. No new route, page or schema type is warranted from this review.
