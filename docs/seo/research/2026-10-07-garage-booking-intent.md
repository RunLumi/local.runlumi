# Garage website intent check — RUN-030

Observed 2026-10-07 at 07:05 +07:00 through Google Search in the signed-in in-app desktop browser. Vietnamese interface (`hl=vi`); screenshot viewport was 1265×712 image pixels, CSS viewport dimensions not measured. Results may be personalized; location and ranking controls were not fixed.

## Queries and observations

1. `website gara ô tô bảng giá dịch vụ` showed garage price lists and repair/service pages such as Hà Thành Garage, 1Car, Quang Đức Auto and Bảo Tín. In this sample, the phrase primarily matched vehicle owners checking prices, not garage owners shopping for a website.
2. `thiết kế website gara ô tô` returned website-design agencies, templates and industry examples including DNCN, Vietads, Oto360, Sota Group and Clickweb. The displayed AI Overview summarized repair-website features and highlighted online appointment booking, alongside service lists and prices.

This is a two-query, single-session result sample. It does not establish search volume, demand, ranking, conversion, or how Google results appear to other users. Vendor feature statements and the AI Overview are not independent proof that Lumi should provide booking.

## Page fit and change

The live Lumi Local garage page already emphasizes owner-confirmed repair scope, hours, directions and Call/Zalo. Its illustration disclosure says the demo is not a real shop, appointment or emergency contact; its FAQ covers quotes, emergency claims and workshop software. It did not directly answer whether the purchased site includes online appointment booking.

Added a VI/EN garage FAQ that says customers contact the garage through Call/Zalo and the garage confirms acceptance, timing and price. Starter does not include an online booking calendar or reservation feature. This clarifies the existing product boundary; it adds no scheduling capability, page, schema or performance claim. The exact bilingual wording is in [COPY.md](../../../COPY.md) and implemented in `src/services/content.ts`.

## Local verification

- Static Pages build passed and generated 42 routes; all 48 existing tests passed; EmDash seed validation passed; the CMS Worker build and private-output guard passed on Node 24.19.0.
- A same-origin local iframe probe exercised both the rendered FAQ and the VI page at 320, 375, 768 and 1440 CSS pixels. Each iframe reported its requested `innerWidth`, the booking question and answer were present, and `documentElement.scrollWidth` stayed below its viewport width (305/320, 360/375, 753/768 and 1425/1440).
- These checks apply to the local generated build; publication and production readback remain pending.

## Limits and next check

This is a fit/expectation clarification based on a small personalized sample, not evidence of buyer willingness to pay. Verify both published locales and the merged Pages release before calling it live. Track qualified enquiries and paid outcomes separately; do not infer acquisition impact from the SERP observation or a page release.
