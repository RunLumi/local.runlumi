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

- Main hero: `clamp(38px, 4.2vw, 60px)`; narrow screens: `clamp(36px, 9vw, 50px)`
- weight ~560
- line-height 1.08
- tracking around -0.06em

Vietnamese must use natural wrapping and enough line-height to protect diacritics. Body >=16px; metadata >=12px.

Do not introduce decorative serif fonts.

## Iconography

Use the original local `ServiceIcon.astro` set: a 24px grid, 1.7px rounded
strokes, and `currentColor`. Use 12–16px for compact preview controls, 20px
for supporting rows, and 25px inside flat 52px service emblems. No emoji or
mixed solid/outline interface icons. Keep labels alongside icons and mark
decorative SVGs `aria-hidden` and non-focusable. The folded-L logo and
illustrative QR patterns remain separate assets.


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

> **Trước khi khách ghé, cho họ lý do chọn bạn.**

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

User-approved update, 2026-10-03: use original ImageGen photorealistic concept
images for industry cards and the hero's website/phone previews. Keep the
product interfaces as inspectable HTML. Label generated imagery explicitly as
AI illustration, never as real customers, premises, or business results.
Prompts and provenance are recorded in `docs/PHOTO_ASSETS.md`.

User-approved extension, 2026-10-03: use the supplied ImageGen concepts for
all six service illustrations and the enquiry section. Keep visible AI
disclosures; generated people are not presented as Lumi staff or customers,
and generated devices, QR codes, and infrastructure are illustrative only.

## Motion and interaction

Motion should make the package tangible, explain a relationship, or confirm an action. Create memorable moments through purposeful choreography; avoid typing theatre, autoplay video dependency, and animation with no explanatory or interaction value.

- hover/focus transitions 120–180ms;
- lift <=1px;
- honor reduced motion;
- preserve keyboard focus;
- no first-load modal.

### Parallax and alternatives

**Design decision:** prefer micro-interactions and a small scroll-driven HTML/SVG sequence. Traditional parallax is optional, not the visual foundation. Keep the existing palette, Geist typography, folded-L logo, opaque sheets, and exactly two glass controls.

**Evidence boundary:** scroll-driven animation describes what controls progress, not a guarantee of speed or comfort; parallax can itself be scroll-driven. Performance depends on animated properties, rendering work, assets, and device capability. Immersive 3D/WebGL is not inherently faster than simple parallax. Large movement can also be uncomfortable regardless of technique. See the technical references below.

The following limits are Lumi Local design choices, not universal research thresholds:

| Technique | Appropriate Lumi Local use | Constraints and fallback |
| --- | --- | --- |
| Subtle parallax | A small depth cue between the hero's site, contact, and QR artifacts. | At most one composition; relative travel <=12px. Keep copy and CTA stationary. Disable on small screens, coarse pointers, and reduced motion. Avoid fixed-background tricks and full-screen camera movement. |
| Scroll-driven animations | Connect the website, contact surface, and honest-review QR as their section enters view. | Prefer opacity and transforms: translation <=16px, scale 0.98–1.02. Keep information available without animation. Rotation or SVG morphing must explain something and pass profiling; they are not defaults. |
| Immersive 3D / WebGL | An optional, explorable view of a real package object when depth materially helps understanding. | Prefer inspectable HTML, local SVG, and modest CSS perspective first. Three.js/WebGL is an exception requiring measured benefit and mobile profiling; provide a static HTML/SVG equivalent. No essential text or controls solely in canvas. |
| Kinetic / variable typography | A brief emphasis on one short supporting phrase. | Geist only; use only axes supported by the shipped font. Keep hero headline, prices, body copy, and CTA labels stable. Avoid per-letter motion, moving line breaks, clipped Vietnamese diacritics, and continuous weight animation. Static text is the default. |
| Sticky reveal / pinning | Keep one package illustration beside the three delivery steps while the text scrolls naturally. | Prefer native CSS sticky, with at most one such section. Release at its container boundary; use normal document flow on short or narrow viewports. No forced wheel/touch handling, artificial scroll runway, or overlapping cards that cover readable content. |
| Micro-interactions | Button press, visible focus, FAQ disclosure, selected industry, and enquiry status. | Use 120–180ms feedback and <=1px control lift. Touch and keyboard must receive equivalent state feedback. Never make essential information hover-only; avoid cursor chasing and attention-seeking ripples. |

### Suggested choreography

The hero opens fully readable with its artifacts already present. As the owner reaches the package explanation, one short sequence connects site → contact → review QR. The delivery section may hold a stationary illustration beside its steps. Buttons, FAQ, and form states provide the remaining motion.

Shipped 2026-10-03: hero exit parallax gives the three desk artifacts a small depth cue (site 0 / contact −6px / review QR −12px, scrubbed only while the stage exits, ≥1024px + fine pointer + motion allowed); the delivery section holds a sticky package composition (website → contact → review QR) whose connector rail draws in view and whose artifacts receive step-synced emphasis while the three steps scroll beside it; micro-interactions cover buttons, FAQ, industry switcher, and enquiry states. Kinetic typography and WebGL stay unshipped by choice.

Choose one principal scroll moment per page; do not stack every option above. Impression should come from composition, timing, and clarity, while the owner can immediately read the offer and act.

### Implementation and acceptance rules

- Start with visible, static HTML. Add CSS scroll/view timelines behind feature detection; unsupported browsers retain the complete static layout. A time-triggered entrance is not the same as progress tied to scroll position. Do not install a motion library solely for a reveal.
- Prefer `transform` and `opacity`; avoid animating layout dimensions, large blurs, or shadows during scrolling. Profile exceptions. Avoid repeated layout reads/writes in scroll handlers and blanket `will-change` promotion.
- With `prefers-reduced-motion: reduce`, remove parallax, scrubbed transforms, tilt, kinetic text, and animated pinning. Show the complete static state, preserve ordinary state feedback, and respond if the preference changes during the visit.
- Cursor tilt is optional only for fine pointers with hover. Never intercept touch scrolling or require dragging to understand the offer. Preserve keyboard navigation, visible focus, selection, browser find, and anchor destinations.
- If WebGL is justified, lazy-load it after essential content, cap render resolution, stop rendering offscreen or in hidden tabs, release resources, and recover to the static equivalent after context loss. No idle animation loop or canvas dependency for the enquiry path.
- Before shipping motion, compare the static and enhanced versions on the same device and network. Record asset cost, loading, interaction responsiveness, layout shifts, and a scroll performance trace. Simplify or remove effects that introduce visible stutter, delay content/CTA access, or shift layout. Desktop smoothness alone is insufficient evidence.
- Inspect VI/EN at 320/375/768/1440px, including long labels and diacritics; test touch, keyboard, reduced motion, no JS, unsupported timelines, and short viewports. Verify CTA anchors and form success/failure remain usable throughout. These checks apply when motion is implemented.

### Motion references

Reviewed 2026-10-03. Technical guidance supports implementation choices; trend articles are inspiration, not comparative performance evidence.

- [MDN: CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) — scroll and view progress timelines.
- [web.dev: High-performance CSS animations](https://web.dev/articles/animations-guide) — rendering costs, transform/opacity, and profiling.
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/prefers-reduced-motion) — user motion preferences and vestibular considerations.
- [MDN: WebGL best practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices) — device limits, resource costs, and rendering tradeoffs.
- [Figma: Web design trends](https://www.figma.com/resource-library/web-design-trends/) — visual inspiration for immersive elements, typography, and motion; not a mandate to adopt every trend.

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

## Content-led refinement — 2026-10-04

Use one plain-language customer question in the hero instead of three numbered slogan layers. Keep price and primary enquiry action adjacent. Retain inspectable industry previews with explicit concept/AI disclosure. The included scope is a flat, numbered two-column list (one column on phones), using original local icons rather than generated infrastructure photos. The enquiry area explains what happens after submission instead of showing generated people. Preserve the one navy section, two glass navigation controls, palette, Geist, and folded-L mark. No fabricated proof is introduced.

### Review pass — 2026-10-06

- The navy section is a division of labour, not a second copy of the delivery steps: a short “your part” list (3 items) beside a visibly longer “Lumi’s part” list (6 items). The asymmetry carries the done-for-you message; keep the owner list shorter than Lumi’s.
- Vietnamese text must render in Geist. `@fontsource-variable/geist` ≥5.3.0 ships the Vietnamese subset (U+1EA0–1EF9); older versions silently fall back to a system font for letters such as ạ, ọ, ế.
- No status dot without status semantics: the hero eyebrow carries no “live” indicator.
- Phones: illustrative examples are a horizontal snap rail with the next card peeking; principle cards are compact rows; deliverable icons sit beside their titles.
- 861–1180px uses the short header CTA so the nav and action never wrap.
