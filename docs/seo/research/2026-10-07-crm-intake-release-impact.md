# CRM-capable enquiry handler release impact — RUN-048

Observed: 2026-10-07, 13:04–13:06 Asia/Ho_Chi_Minh.

## Verified release facts

- PR [#71](https://github.com/RunLumi/local.runlumi/pull/71) merged at main commit 437e7da287e8a0d0bbea55ad80e1296b673a57fd.
- Production Deploy workflow run #82 completed successfully and deployed to [16798958.lumi-local.pages.dev](https://16798958.lumi-local.pages.dev).
- The release job ran the static build, tests, EmDash seed validation, Worker build, Pages upload, and Verify live pages. Verifier output confirms service/industry route pairs, journal/feed/sitemap and anonymous private-data protection.

## What deployment does not prove

PR #71 adds optional server-to-server forwarding from Lumi Local’s validated /api/enquiries handler to Lumi’s internal CRM. The code description says the adapter is disabled unless both CRM_INTAKE_URL and CRM_INTAKE_SECRET are configured. This inspection did not read Pages secret values or verify their presence, so CRM forwarding activation is unknown.

No live enquiry was submitted. Therefore there is no new evidence of a CRM record, consent capture, delivery, attribution, qualified lead, or paid outcome. The release verifier does not test form submission. The PR description reports its own test and synthetic local D1 validation; that is PR-provided validation, separate from hosted deployment verification.

## SEO/GEO measurement implication

Keep enquiry/paid outcome counts unknown until an authorized real enquiry is confirmed through the privacy-approved CRM ledger or other approved private source. Do not infer customer acquisition from deployment or a successful release verifier. No PII, credentials, account identifiers, or secret values were recorded.
