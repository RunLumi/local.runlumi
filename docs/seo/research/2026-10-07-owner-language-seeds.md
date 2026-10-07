# Owner-language keyword seed expansion — RUN-044

Updated: 2026-10-07 11:58 +07:00 · Status: proposed seeds, not measured demand

## Decision

The authenticated /data/ dashboard still reports a historical Vietnamese export (September 2025–August 2026, 2,740 raw rows, 2,070 exact unique terms, 670 exact repeats), unknown targeting/export settings, and zero organic observations. Its current analysis says only two terms mention websites and none mention QR. These are facts about that file, not current market size.

Prepared 20 additional Vietnamese seed candidates to test three gaps the dashboard identified: service menus/prices, contact routes, and QR/package ownership. They are constructed queries, not observed searches. Volume, trend, organic difficulty, rankings, and buyer intent remain unknown. No opportunity score is assigned because the input lacks current volume and defensible organic-difficulty data; ad competition is not an SEO difficulty proxy.

## Scope and export settings for a future measurement

- Audience: owners of local service businesses in Vietnam; Vietnamese-language queries.
- Location: Vietnam at country level. No city modifiers or doorway-page plan.
- Network: Google Search only; exclude Search Partners so the export does not mix in partner-network demand.
- Date range: use the latest 12 complete months available in Keyword Planner and record the actual start/end dates shown. Do not assume the current historical CSV has the same period.
- Keep seed rows separate. Google says average searches depend on the selected month range, location, language, network, and close variants; overlapping seed estimates must not be summed.
- If Keyword Planner requires new billing/account setup, stop. Do not create billing, start a campaign, or incur spend without separate authorization.

Google’s current help page describes these location, language, network and date-range controls and notes that Keyword Planner access requires account setup with billing information: [Refine your new keywords in Keyword Planner](https://support.google.com/google-ads/answer/6325025). This report does not claim that an export was run.

## Candidate seeds

| # | Seed candidate | Cluster | Intent hypothesis | Existing destination / caveat |
|---:|---|---|---|---|
| 1 | thiết kế website cho spa | Service menus | Commercial | Existing spa page and local-business website page; likely scope mismatch if the search expects appointment booking. |
| 2 | website spa giới thiệu dịch vụ | Service menus | Informational / commercial | Existing spa page; test whether the query means a simple service menu or a booking system. |
| 3 | website cho gara ô tô | Service menus | Commercial | Existing garage page; Starter supports calls and Zalo enquiries, not reservations. |
| 4 | website cho dịch vụ điện lạnh | Service menus | Commercial | Existing electrical/HVAC page; do not infer demand from the industry route alone. |
| 5 | mẫu website giới thiệu dịch vụ | Service menus | Informational | Existing homepage preview and local-business website page. |
| 6 | website có bảng giá dịch vụ | Service menus | Informational / commercial | Existing website page; prices and quote conditions must be owner-confirmed. |
| 7 | website có nút gọi điện | Contact routes | Informational | Existing website page; no conversion-rate claim. |
| 8 | tích hợp Zalo vào website | Contact routes | Informational | Existing website page; the offer is a contact link, not CRM or automated follow-up. |
| 9 | nút Zalo trên website | Contact routes | Informational | Close variant of #8; do not add its volume to #8. |
| 10 | website nhận yêu cầu báo giá | Contact routes | Informational / commercial | Existing website page; an enquiry form is not a quoting workflow or CRM. |
| 11 | website có link Google Maps chỉ đường | Contact routes | Informational | Existing bilingual directions guide; distinguish directions sharing from profile management. |
| 12 | gắn link Zalo trên website | Contact routes | Informational | Close variant of #8–9; keep separate until the export shows overlap. |
| 13 | mã QR đánh giá Google cho cửa hàng | QR and package | Mixed | Existing honest-review guide and Trust Kit; likely includes consumer/how-to intent. |
| 14 | tạo mã QR đánh giá Google cho doanh nghiệp | QR and package | Informational | Existing QR guide; no request for a rating, incentive, or managed review service. |
| 15 | giá thiết kế website cho spa | QR and package | Commercial | Existing spa and website pages; check appointment expectation before prioritizing. |
| 16 | giá làm website cho doanh nghiệp nhỏ | QR and package | Commercial | Existing local-business website page. |
| 17 | chi phí làm website giới thiệu dịch vụ | QR and package | Commercial | Existing website page; compare against the actual Starter scope and renewal. |
| 18 | dịch vụ làm website trọn gói | QR and package | Commercial | Existing website page; “trọn gói” must not obscure exclusions. |
| 19 | gói website cho cửa hàng nhỏ | QR and package | Commercial | Existing website page; willingness to pay is unknown. |
| 20 | chi phí duy trì website mỗi năm | QR and package | Commercial / comparison | Existing renewal section; use the documented 599,000đ / 999,000đ prices and domain conditions. |

Intent labels above are hypotheses from query wording, not confirmed SERP classifications. Rows 13–14 and the spa rows have especially high consumer/scope ambiguity. None justifies another URL before measurement.

## Bounded external observation

A web-search discovery pass for spa website and Zalo integration terms surfaced vendor-owned Uptech pages. The page titled “Thiết kế website mỹ phẩm, spa, thẩm mỹ viện có đặt lịch online” describes appointment selection, deposits and product sales; its related spa guide discusses service menus, prices and booking. This is one vendor’s positioning, not a Google ranking sample, market share, or proof of user demand. It flags a material mismatch risk for spa terms because Lumi Starter does not include online booking or ecommerce. See [Uptech’s spa offer](https://uptech.vn/thiet-ke-website/my-pham-spa) and [its spa page guide](https://uptech.vn/thiet-ke-website/my-pham-spa/website-spa).

## Next decision

Run these 20 seeds through an already-configured Keyword Planner account only if available, with the settings above and exact dates recorded. If that is unavailable, keep all fields unmeasured and continue using Search Console only after the connected property provides enough data. Do not add a page based on this seed list. The practical buyer bridge still needs separately authorized owner feedback; the dashboard’s proposed 10-owner test threshold (at least three describing a recent in-scope problem and at least two requesting a preview) is a proposed test, not evidence collected.
