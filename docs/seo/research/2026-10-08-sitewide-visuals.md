# Public-page visual coverage — RUN-078

## Objective and boundary

On 2026-10-08 the user updated the active goal: make every public page feel
distinctive, highly realistic, modern and trustworthy with ImageGen imagery,
purposeful motion and the existing Lumi icon system, while avoiding content-farm
repetition. `DESIGN.md` and the current local build were treated as the design
and route source of truth. No marketing claim, customer proof, result, or
production data was generated.

The build emitted 42 HTML pages before the private-data guard. These cover 41
public routes, including the not-found page, plus the private research page that
the build guard moves out of the public bundle. RSS, sitemap and API endpoints
are non-visual. Existing home and article images were retained. Topic/search
lists already surface article-specific images. Existing salon, garage, HVAC and
localized QR illustrations now also appear on their matching bilingual service
pages. Five new page-matched scenes close the remaining Maps, owner-check,
website, editorial-method and 404 gaps.

## Art direction

The new images are premium natural-light editorial photographs of modest,
unbranded Vietnamese business settings and tactile objects. They avoid people,
legible text, fake UI, review outcomes, Google marks, identifiable businesses,
and fabricated source records. Each scene supports the page task instead of
repeating a generic thumbnail: a specific entrance for owner-confirmed
directions, blank materials for checking owner-controlled facts, blank-screen
devices beside the real HTML artifact, an empty desk for the published-method
page, and a quiet turning lane for the 404. All images have descriptive alt text
and visible AI-illustration disclosures.

`ServiceIcon.astro` remains the source of functional icons. Service and industry
pages now use distinct, relevant 24px outline icons; the journal-method and
404 headings use the same local icon family. No new icon family or remote asset
dependency was added.

Service hero imagery and editorial article imagery each get one subtle
view-timeline arrival per page template: up to 12px travel with opacity and
scale only. It is enabled only where view timelines are supported, on larger
fine-pointer viewports, and when reduced motion is not requested. Small/touch
views keep the static photo and layout. The home page keeps its existing
choreography; no animation is applied to every section.

## Verification

- Five 1536×1024 source PNGs are preserved in `output/imagegen/`; 480/960/1440px
  WebP derivatives are local to `public/photos/`. Final prompts, exact source
  hashes, derivative hashes/sizes and page assignments are in
  [`PHOTO_ASSETS.md`](../../../PHOTO_ASSETS.md) and
  [`site-visual-assets.json`](../../site-visual-assets.json).
- Node 24.19.0 `npm ci --offline` completed with 0 reported vulnerabilities.
  `npm run build` generated 42 pages; the privacy guard moved `/data/` research
  assets out of the public output. `npm test` passed 62/62, including image
  route-coverage, exact source/derivative hash, dimensions, icon, motion and
  privacy-boundary checks. `git diff --check` passed.
- A local browser checked 41 public routes at 320/375/768/1440 CSS-pixel
  viewport overrides (164 checks). Each retained one H1, no horizontal
  overflow and no broken locally loaded photo. The scan caught a narrow-screen
  overflow in the English homepage's Starter bullet grid; its track now uses a
  shrinkable `minmax(0,1fr)` column. Mobile/desktop service-page, mobile
  editorial-policy and 404 layouts were visually inspected.
- All observed in-page anchors resolve; both service-page locales keep the
  existing `/api/enquiries` form. No form was submitted.

## Limits and next gate

This is local source and browser-preview evidence only. No GitHub push/PR,
production deployment, CMS write, Search Console action, enquiry, or acquisition
outcome is claimed. The protected `/data/` dashboard deliberately remains
photo-free because adding generated analytics or customer-like scenes would
undermine its evidence boundary. Publish only after the actual release gate is
available, then recheck the deployed source, bilingual routes, image delivery,
reduced-motion behavior, and anonymous `/data/` protection.
