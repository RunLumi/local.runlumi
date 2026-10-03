# Lumi Local design contract

Revision: **Civic Editorial Intelligence + restrained liquid glass**, October 2026.

## Identity

Lumi Local should feel like a lit operating desk: warm paper for reading, opaque white evidence sheets, Civic Navy ink, Lumi Blue authority, folded-L corners, and quiet connecting rails.

It is not a generic SaaS landing page and not an AI spectacle.

The page should make a local-business owner think:

> “Đẹp. Dễ hiểu. Giá này hợp lý. Họ làm hết cho mình.”

## Color tokens

Use these exact UI colors:

- Lumi Blue: `#006093`
- Lumi Blue hover: `#004f80`
- Lumi Blue active: `#003e6a`
- Lumi Blue soft: `#e4f3fc`
- Civic Navy: `#102a43`
- Ink: `#172033`
- Slate: `#5e6677`
- Paper: `#f4f0e8`
- White: `#ffffff`
- Archive: `#e7eaf0`
- Border: `#d9dee8`
- Strong border: `#c8d0de`
- Amber: `#f4a62a`
- Amber soft: `#fff4dc`
- Risk: `#c2410c`
- Risk soft: `#fff1ec`
- Success: `#1f7a4d`
- Success soft: `#e9f7ef`

Status colors require actual semantics.

## Typography

Geist is the only display/body family. Geist Mono is for indexes, numbers, and technical fragments.

Hero:

- `clamp(56px, 6.1vw, 82px)`
- weight ~560
- line-height 1.08
- tracking around -0.06em

Vietnamese must use natural wrapping and enough line-height to protect diacritics. Body >=16px; metadata >=12px.

Do not introduce decorative serif fonts.

## Grid and materials

- desktop max width: 1200px;
- 24px rhythm;
- section breathing room: 80px desktop, 40px tablet, 20px mobile;
- spacing scale: 4/8/12/16/20/24/32/40/48/64/80/96;
- 8px controls;
- 12px sheets;
- navy-tinted shadows;
- Blue is authority, not wallpaper.

Glass is allowed on exactly **two controls**:

1. header navigation;
2. hero workflow dock.

Use opaque fallback first; blur only when supported. Never blur content, nest glass, or add glowing rims.

Use exactly one major Civic Navy inversion to explain the done-for-you value. Everything else stays on warm paper / white sheets.

## Lumi Local content order

1. product hero with an inspectable business artifact;
2. compact trust strip;
3. illustrative industry relevance rail;
4. asymmetric 399k → 1.99m → 599k/999k offer ladder;
5. one navy “done-for-you” section;
6. bento-like feature hierarchy with website visually dominant;
7. three-step delivery;
8. annual renewal;
9. claim/review guardrails;
10. FAQ;
11. low-friction enquiry CTA.

The customer should never have to compare three equally loud pricing cards. Lumi Local Starter is the primary commercial object; Trust Kit is a risk-reduction sidecar and renewal is a future-cost receipt.

## Hero

Within about five seconds the owner should understand:

1. what Lumi Local does;
2. Lumi does the work for them;
3. year-one price;
4. what to do next.

Core headline:

> **Được tìm thấy. Được tin tưởng. Được liên hệ dễ hơn.**

Primary CTA:

> **Xem thử Lumi Local cho business của tôi**

Show the full package price clearly. Trust Kit should feel like a low-risk entry, not a competing product.

## Visuals

Use inspectable HTML product artifacts and original local SVGs, not generated screenshots pretending to be customer work.

The hero should make the product tangible with a browser/site surface, mobile contact surface, and review-QR object. Industry examples must be clearly illustrative and should reduce the owner's imagination cost without pretending to be customer proof.

Allowed:

- phone/site illustration;
- QR review stand illustration;
- Call/Zalo/Maps artifacts;
- abstract document/connection diagrams.

If photography is added later, it must show real operating work in natural light, have verified licensing, and be credited.

## Motion and interaction

No typing theatre, autoplay video dependency, or decorative animation.

- hover/focus transitions 120–180ms;
- lift <=1px;
- honor reduced motion;
- preserve keyboard focus;
- no first-load modal.

## Mobile

Most prospects will open the page from Zalo on a phone. Mobile is primary.

- 320px must work;
- no horizontal overflow;
- thumb-friendly CTA;
- no tiny comparison tables;
- pricing should be instantly readable;
- no sticky element that hides content.

## Research-informed refinement

The October 2026 refinement borrows principles, not visual assets, from world-class product/service sites reviewed in `docs/UI_UX_RESEARCH_2026-10.md`:

- central content earns the strongest visual weight;
- navigation and supporting structure recede;
- tangible product surfaces beat abstract feature claims;
- "built for you" is more persuasive for busy operators than another builder UI;
- relevant industry examples reduce imagination cost;
- responsive/mobile proof matters because the product itself is consumed on phones;
- progressive disclosure keeps the lead form light.

## Trust

Do not invent:

- testimonials;
- logos;
- customer counts;
- revenue outcomes;
- star ratings;
- “before/after” business results.

Trust comes from transparent pricing, tangible scope, clear limitations, own-domain option, no Google credential access, and visual quality.

## Release review

Check:

- VI/EN at 320/375/768/1440px;
- keyboard focus;
- no-JS content;
- form success/failure;
- contrast;
- Vietnamese wrapping;
- local SVGs;
- CSP;
- reduced motion/transparency;
- forced colors;
- real build;
- real production URL before claiming deployment.

A preview or passing source test is not a deployment.
