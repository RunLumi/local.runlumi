# Owner-language SERP validation — RUN-045

Observed: 2026-10-07, 12:04–12:07 Asia/Ho_Chi_Minh
Provider: Google Search, desktop browser; exact viewport dimensions unknown.
Query settings: hl=vi, gl=vn, num=10, pws=0. Google’s footer said results were not personalized, showed Vietnam, and could not determine precise location. The browser indicated a signed-in Google session; no account identifier is recorded.
Evidence: browser accessibility-tree readback of visible first-page results; no screenshot persisted. One snapshot per query, not ranking history or demand measurement.

## Query observations

| Query | Visible results and features | Intent signal and limit |
|---|---|---|
| website có bảng giá dịch vụ | Web results were mainly website-design pricing pages, including online-shop offers. After the page finished loading, a Google AI Overview summarized broad vendor price ranges and cited vendor pages. Related searches included website quotes, sales websites, WordPress, and operating costs. No Lumi URL appeared in the visible results inspected. | Commercial comparison intent is plausible, but the results mix information sites and ecommerce packages. This sample does not establish volume, rank, or qualified demand. |
| tích hợp Zalo vào website | AI Overview and visible results explained embedding a Zalo chat widget; the overview cited Zalo for Developers and vendor tutorials. Related searches included embedding Zalo, Zalo OA, and Zalo Chat. No Lumi URL appeared in the visible results inspected. | Primarily technical/how-to intent. Lumi’s offer is a click-to-open Zalo contact action, not an embedded chat widget or automated OA workflow. Do not target the broad integration phrase as package demand. |
| mã QR đánh giá Google cho doanh nghiệp | Google Business Help appeared as the first visible web result, followed by free QR generators, how-to pages, and video results. Related searches were also DIY QR/location questions. No Lumi URL appeared in the visible results inspected. | Strong DIY/how-to signal in this snapshot. Search presence does not imply a paid artwork market; keep Google’s free path clear and sell only the agreed preparation/artwork scope. |

## Existing destination check

- The live VI local-business website service page displays Starter’s first-year price, renewal choices, owner-confirmed directions, Call/Zalo actions, and explicit exclusions for booking, ecommerce and CRM. It already answers the package and scope comparison without a new URL.
- The live VI QR offer page points to Google’s free QR instructions and explains that Lumi charges for artwork preparation and agreed handoff, not access to reviews. The published VI/EN QR guide contains the same free DIY route, review-policy boundaries, and a Google Help source.
- The live English QR guide was checked for equivalent scope and source links. No copy or route change was warranted.

Primary references visible in the QR SERP: [Google Business Help: create a review link or QR code](https://support.google.com/business/answer/16816815?hl=en) and [Zalo for Developers: Chat Widget](https://developers.zalo.me/docs/social/zalo-chat-widget). These support the free/official paths only; they do not establish commercial demand.

## Decision

Keep the three existing destinations and do not add a service or blog page from this sample. The website-price query deserves measurement on the existing canonical service page; Zalo-widget intent is outside the package; QR intent remains largely DIY in this snapshot. Google Search Console is still unconnected, so impressions, clicks, indexing, enquiries and paid outcomes remain unknown. Reassess page/query data only when the exact-host Search Console property is available and its reporting window contains useful data.
