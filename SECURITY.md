# Security

## Lead enquiry flow

Browser → same-origin `POST /api/enquiries` → server-side Discord webhook.

The browser must never receive or contain the Discord webhook URL.

Production secret:

`DISCORD_TRIAL_WEBHOOK_URL`

Store it as an encrypted Cloudflare Pages environment variable.

## Data minimization

Required fields:

- name;
- business name;
- phone/Zalo;
- explicit contact consent.

Optional:

- email;
- short note.

Do not collect payment details, customer records, credentials, Google account data, or confidential documents in the enquiry form.

## Endpoint controls

The Pages Function must keep:

- request body cap;
- field-length caps;
- same-origin checks where practical;
- honeypot;
- no-store responses;
- mention suppression in Discord;
- JSON and form-urlencoded parsing only;
- no PII logging;
- 503 when webhook configuration is missing.

For a larger public campaign, add Cloudflare rate limiting / WAF and consider Turnstile only if abuse justifies it.

## Google

Lumi Local does not need a customer's Google login or Google Business Profile edit permission for the current offer.

Do not request or store those credentials.

## Reviews

Never facilitate fake reviews, paid/incentivized reviews, review gating, or five-star-specific asks.

## Domain ownership

Do not hold a customer's domain hostage. If Lumi registers a domain for a customer, ownership and transfer expectations must be clear before payment.

## EmDash blog boundary — 2026-10-06

The optional `BLOG` service binding forwards only blog/admin/CMS assets/sitemap routes. Existing enquiry secrets and authenticated `/data` stay on Pages. No CMS error falls back to stale static content when the binding is configured. Admin responses are no-store/noindex; the proxy gives each HTML response fresh script nonces through HTMLRewriter instead of allowing unrestricted inline scripts. Public page CSP remains unchanged. Keep an uninitialized production admin private until the owner completes passkey setup; never copy a local dev admin to production. CMS resources and production credential custody require a deliberate release. The seed/import scripts never print tokens, and local bypass is loopback-only. See docs/blog/README.md.

CMS build artifacts must exclude adapter-generated local `.dev.vars` and `.env` copies as well as private research. The successful `build:blog` post-build guard removes these generated files recursively before the artifact can be considered deployable; original source credentials remain untouched. Never upload an interrupted/raw Astro build output. The credential-exclusion regression uses synthetic data only.

The first production editor claim is protected by `server/blog-setup-lock.js`. An absent readiness flag and absent/weak token fail closed. A temporary encrypted token is only for owner setup. Public blog pages remain accessible; the original enquiry webhook secret is preserved. Registration of the owner passkey is a human step. See docs/blog/README.md for activation and token removal.
