# CRM-capable enquiry handler release impact — RUN-048 (evidence refinement RUN-050)

Updated: 2026-10-07 13:23 +07:00

## Verified release facts

- PR [#71](https://github.com/RunLumi/local.runlumi/pull/71) merged at main commit 437e7da287e8a0d0bbea55ad80e1296b673a57fd.
- Production Deploy workflow run #82 completed successfully and deployed to [16798958.lumi-local.pages.dev](https://16798958.lumi-local.pages.dev).
- The release job ran the static build, tests, EmDash seed validation, Worker build, Pages upload, and Verify live pages. Verifier output confirms service/industry route pairs, journal/feed/sitemap and anonymous private-data protection.
- Sibling repository PR [RunLumi/www.runlumi.app#27](https://github.com/RunLumi/www.runlumi.app/pull/27) deployed the CRM Worker. Its merged release record says the Worker preflight confirmed the server-side CRM_INTAKE_SECRET, and unsigned intake checks returned 401 for a bad signature (rather than 503).

## What remains unknown

The local.runlumi adapter forwards only if both Pages project secrets CRM_INTAKE_URL and CRM_INTAKE_SECRET are configured. Neither Pages secret presence nor the exact adapter activation state was verified. The Worker-side secret evidence does not prove the Pages side is configured.

No live enquiry was submitted. Therefore there is no new evidence of an end-to-end CRM record, consent capture, delivery, attribution, qualified lead, or paid outcome. The local.runlumi release verifier does not test form submission. PR #71's own test table reports a synthetic local D1 integration, which is distinct from a production enquiry.

## SEO/GEO measurement implication

Keep enquiry and paid outcomes unknown until an authorized real enquiry is confirmed through the privacy-approved CRM ledger or other approved private source. Do not infer customer acquisition from deployment or a successful release verifier. No PII, credentials, account identifiers, or secret values were recorded.
