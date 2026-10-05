# Lumi Local readiness review — 2026-10-04

## Changes and decision

The strategy now separates evidence from acquisition hypotheses, keeps Starter primary, preserves original research under docs/archive, and uses a founder-led 30-business pilot instead of scheduling a large sales team. COPY.md, pricing, agent guidance and bilingual page copy now agree on honest reviews, digital QR artwork, one revision, conditional alerts and no numeric performance guarantees. The exact section copy is centralized in src/content/copy.js.

The intake now caps actual streamed bytes, validates basic phone structure, bounds delivery time, rejects redirects, and requires a positive JSON acknowledgement before clearing the browser form. Both build and deployment workflows run the regression suite before proceeding. No credentials were read or changed, and no real enquiry was sent.

## Evidence obtained

- `npm run build`: passed on the changed working tree.
- `npm test`: 14 passed. Tests cover built anchor targets, key bilingual claims/prices, missing secret, origin rejection, consent/phone/email validation, actual body bytes without Content-Length, malformed and unsupported bodies, honeypot, upstream failure, successful stubbed delivery, mention suppression, client success/failure handling, and the English native-form language/return route.
- `git diff --check`: passed.
- Browser inspected VI/EN using frames with outer widths 320/375/768/1440. Scrollbars consumed approximately 14 CSS pixels, so content widths were roughly 306/362/755/1426; this is a responsive layout check, not device emulation. Fixed the 320px header collision and English dock overflow; final English narrow frame measured clientWidth=scrollWidth=305. Earlier nonfunctional viewport overrides were discarded as evidence.
- Inspected Vietnamese wrapping and form fields; clicked the enquiry anchor and submitted synthetic data through the real handler behind a temporary Node HTTP adapter with no webhook configured. The visible failure retained details and restored the button. Success is tested with a stub, not real Discord delivery.
- Restored visible AI/concept disclosures. Existing photos and inspectable interfaces retained. No motion redesign or new third-party dependency.
- Google review policy checked on 2026-10-04: https://support.google.com/contributionpolicy/answer/7400114 . Honest, non-incentivized requests are allowed; selective positive solicitation is prohibited.

## Explicit limits and launch gates

At the initial review these edits were local and uncommitted. No deployment, hosted CI pass, Cloudflare runtime check, real Discord delivery, real-device test, complete accessibility audit or measured performance improvement is claimed. The temporary preview does not apply Cloudflare headers. The existing security-header contract is unchanged.

Before production release, run the checks on the exact release revision, verify the actual Pages Function and configured intake with an authorized synthetic enquiry, verify both live language URLs and headers, and inspect a real phone. Maintain per-client written delivery, domain ownership/transfer and cancellation/refund terms before accepting payments. No source in this repo establishes current support staffing or a response SLA.

Before claiming market readiness, execute the paid pilot and contribution gates in STRATEGY.md. Demand, retention, support cost and unit economics remain unknown. No website edit can guarantee market victory or zero mistakes.

## Resume checkpoint

Checkout: /Volumes/SSD/local.runlumi, branch main, starting HEAD 94427c7. All changes in this pass concern strategy/copy, responsive fixes, intake and regression checks; inspect actual Git state before continuing. Temporary local server: /tmp/lumi-local-server.mjs, port 4359; no production secret. It serves dist and invokes the handler with an empty environment. Stop/restart only after verifying the process state. Do not commit temporary test payloads or contact information.

Continuation: fixed the native (no-JavaScript) English form response, which previously returned Vietnamese with a Vietnamese-home link. Re-ran all 14 tests successfully. Pilot geography and affordable cash/time budget have been requested; no outreach authorized or executed.

Live readback on 2026-10-04: both https://local.runlumi.app/ and /en/ responded to public HTTPS GET requests and still contained the old permanent-five-star claim; neither contained the corrected printing exclusion. This verifies a release gap, not a failed deployment attempt. Publication and a labelled synthetic Discord intake test were requested from the user. No POST or release was performed. The web retrieval tool could not access the pages; direct curl succeeded after allowing network access.

Release authorization: user requested “create pr, merge” on 2026-10-04. This authorizes the PR/merge and the existing automatic production deployment. The separate Discord test remains unauthorized. Fresh local build and all 14 tests passed before commit. Hosted checks and live readback will be reported after merge.

## Updated goal: landing content and visual authenticity

Research PR #11 merged at 3ffb1b8 with passing hosted build. Following the expanded user goal, local edits now replace the three slogan hero with a single customer-oriented headline, revise bilingual generic copy, replace six generated feature photos with original icons and flat scope rows, and replace the generated enquiry people with a next-step explanation. DESIGN.md records the direction. Build, 14 tests and diff check pass. These new visual edits are not yet browser-verified, committed or deployed. Next: inspect both languages at required widths, refine layout/copy based on rendered evidence, then deliver the reviewed changes. Preserve the original two glass controls and one navy inversion.

Landing visual check, 2026-10-05: inspected VI/EN hero screenshots in all eight outer-width frames (320/375/768/1440). Content client widths 305/360/753/1425 equalled scroll widths in both locales. Inspected desktop feature rows and enquiry layout; primary CTA reached the form. Frame testing has the earlier scrollbar/device limitations. Existing intake code is unchanged by this visual refinement. No conversion improvement is claimed.
