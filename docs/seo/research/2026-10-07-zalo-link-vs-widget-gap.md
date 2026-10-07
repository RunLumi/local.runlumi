# Zalo website contact: link versus embedded widget — RUN-054

Updated: 2026-10-07 · Vietnam / Vietnamese owner-language context

## Decision

Clarify the Zalo contact boundary in the existing bilingual local-business website service page. Do not create a new URL, promise a widget, or assign search volume/difficulty from this sample.

## Scope and evidence

- Product: Lumi Local Starter, a mobile service-information and enquiry site. It includes Call/Zalo contact actions; the owner confirms the destination. Custom integrations, CRM and automated follow-up are excluded by the current product contract.
- Historical keyword data: RUN-044 contains 20 constructed owner-language seeds; the source export itself has no recorded Zalo seed and its targeting provenance is unknown. No current volume, organic difficulty, ranking, or buyer validation exists for the phrases below.
- Exact seed phrases reviewed: `tích hợp Zalo vào website`, `nút Zalo trên website`, and `gắn link Zalo trên website`. Related variants considered: `tạo link Zalo OA cho website`, `nút chat Zalo trên website`, and `thêm link Zalo vào website`. These variants were not measured and should not be combined as independent demand.
- A bounded general-web search snapshot on 2026-10-07 returned the official Zalo Chat Widget documentation and third-party setup tutorials for the broad integration phrasing, plus OA-link/QR tutorials for the narrower link phrasing. This was not a localized, device-controlled Google top-10 audit and does not prove ranking or volume.
- Zalo’s official developer documentation describes its Chat Widget as an embedded website chat with a Zalo Official Account and lists the OA ID (`data-oaid`) as required: [Zalo Chat Widget documentation](https://developers.zalo.me/docs/social/zalo-chat-widget). This is the key scope distinction, not proof of Lumi buyer demand.
- The live VI and EN service pages already describe Call/Zalo, a service website, and exclusions for custom integrations and automated follow-up. The visible FAQ did not explicitly distinguish the included click-to-open contact action from an embedded Zalo Chat Widget. Page readback was observed in the signed-in browser on 2026-10-07.

## Classification and prioritization

| Phrase | Intent hypothesis | Offer fit | GEO shape | Volume / organic difficulty |
|---|---|---|---|---|
| `tích hợp Zalo vào website` | Informational / technical how-to; sampled results emphasized embedding Chat Widget | Low for Starter; custom integration is excluded | How-to can trigger direct answers | Unknown / unknown |
| `nút Zalo trên website` | Ambiguous informational; may mean a plain link, widget, or floating plugin | Medium only when it means owner-confirmed contact link | Definition/comparison answerable | Unknown / unknown |
| `gắn link Zalo trên website` | Informational implementation; closest lexical match to the included contact action | Medium, subject to owner-confirmed destination | Short steps / link-vs-widget distinction | Unknown / unknown |
| `tạo link Zalo OA cho website` | Informational; may expect OA setup, identity, or platform operations | Low-to-medium; link placement may fit, OA setup/management does not | How-to answerable | Unknown / unknown |

No numeric opportunity score is computed: the required volume and organic-difficulty inputs are missing. Search-result counts and advertising competition are not substitutes.

## Existing-page opportunity

The current bilingual website page is the correct canonical destination. Its existing answer already says visitors can open Zalo and that custom integrations/automated follow-up are outside Starter. A single bilingual FAQ adds the missing distinction: an owner-confirmed contact action opens Zalo; it is not an embedded Zalo Chat Widget, chatbot, OA management or automated message workflow. This is a scope clarification and expectation filter, not an assertion that Zalo search demand converts.

No separate article, route, city page, schema type, widget implementation, user tracking, or indexing request is warranted from this one search sample. The dashboard's stale count of two Reddit actions is also corrected to three separately authorized actions; this campaign evidence is not Vietnam keyword-demand evidence.

## GEO and content handoff

A concise Q&A is independently understandable and fits the existing service page. It separates the product's owner-confirmed link from Zalo's embedded widget, avoiding hidden text, unsupported claims, and an FAQ schema expansion. Keep the official developer source in this internal report; the service FAQ explains Lumi's own scope.

**Next actions:** validate both locales at 320/375/768/1440 CSS px, run service tests/build, merge and verify the actual production page. On or after 2026-10-14, read exact-host Search Console page/index data once. Revisit the Zalo topic only if query evidence or qualified owner questions justify it.

## Skill handoff summary

- **Priority:** clarify the Zalo link/widget boundary in the existing VI/EN service URL.
- **Evidence:** 3 constructed seed phrases; 1 official Zalo developer source; 1 live bilingual destination; no measured volume or organic difficulty.
- **Decision:** add one bilingual FAQ, no new URL or feature.
- **Risk:** broad “Zalo integration” intent may be for an embedded widget or automation outside Starter.
- **Next:** confirm build, responsive rendering, hosted checks, live release, then compare exact-host GSC data when its scheduled window is useful.
