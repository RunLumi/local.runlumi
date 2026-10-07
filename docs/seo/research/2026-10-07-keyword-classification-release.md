# RUN-036 — Maps-embedding classification and dashboard release

PR #55 merged to `main` as `110e1873ac68e7476b873a108766d3843eda7119`. The merged tree matched the exact tree tested before merge.

The two current website/Maps embed queries are low-confidence educational candidates (informational, score 54 each), based on the dated tutorial-heavy SERP sample and the offer’s actual owner-confirmed directions-link scope. The historical 10/mo estimates, source CSV fingerprint, unknown targeting, 2,070 unique terms and zero organic observations were unchanged. Aggregate classification counts are now 0 offer-adjacent, 211 educational, 36 outside-offer and 1,823 excluded.

Local validation: all 48 tests passed; `npm run build` rendered 42 routes; `protect-data-build.mjs` kept `/data/index.html` and `/data/keywords.csv` out of public `dist` and generated the private Function module. The exact tree also passed the repository pre-push hook with the same test/build checks. Hosted PR and automatic deployment workflows failed before starting because the GitHub Actions budget blocked runner use; no hosted Linux pass is claimed.

Manual Pages production deployment used exact main source `110e187`, branch `main`, project `lumi-local`. Deployment ID: `42b56205-4d93-4356-92ba-528b1a29611d`; host: [42b56205.lumi-local.pages.dev](https://42b56205.lumi-local.pages.dev). The production release verifier passed against `https://local.runlumi.app`, covering bilingual service/industry URLs, journal/feed/sitemap and anonymous private-data denial. Signed-in browser readback on `/data/` showed the updated wording, 0 offer-adjacent and 211 educational counts; the original Sep 2025–Aug 2026 snapshot and unknown target settings remain disclosed.

No Google-side sitemap/indexing request, lead/contact action, customer-facing offer change, data-source change or tracking was made. This updates a transparent editorial heuristic; it is not evidence of traffic, ranking, buyer intent or paid demand.
