# Homepage salon booking-language check — RUN-031

Observed 2026-10-07 at 07:43 +07:00 on the live VI and EN homepages. The salon mockup label read “Bảng giá · Đặt lịch · Nhắn Zalo” / “Services · Booking · Direct Zalo”; adjacent description said visitors message Zalo to ask about availability.

RUN-030's single Google search sample showed online booking prominently in auto-repair website-design results. It does not establish demand, but it made the homepage label worth checking against the offer. The exact bilingual label could imply a booking function even though Starter offers contact actions and the business confirms appointments through its own process.

Changed only the illustrative label to “Bảng giá · Hỏi lịch qua Zalo” / “Services · Ask about availability.” The existing explanatory sentence remains. No booking, calendar, or reservation feature was added. The strings are listed in [COPY.md](../../../COPY.md) and sourced in `src/content/copy.js`.

Limits: This is a consistency correction informed by one personalized SERP sample, not evidence of local demand or business impact. Verify both live homepage labels after the Pages release; no ranking, enquiry, or conversion change is claimed.

## Local verification

- Static build passed (42 routes), all 48 tests passed, EmDash seed validation passed, and the CMS Worker build/private-output guard passed on Node 24.19.0.
- A same-origin responsive check rendered both locales at 320, 375, 768 and 1440 CSS pixels. All eight combinations had no horizontal overflow; each showed the new label and no longer showed the old “Booking” / “Đặt lịch” label.
- These checks apply to the generated local build only. The candidate is not deployed yet.
