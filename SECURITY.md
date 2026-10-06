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

## Research workspace access

`/data`, `/data/`, `/data/index.html` and `/data/keywords.csv` require a password
sign-in. Programmatic HTTP Basic access is also supported with username `owner`.
The password is the server-only
`DATA_PASSWORD` secret (at least 16 characters). Missing or weak configuration
returns 503. Anonymous HTML navigation receives a public sign-in form (200),
never the dataset. Unauthenticated CSV/programmatic requests return 401.
Incorrect form submission renders an error without issuing a session; enhanced
JSON login returns 401. HTTPS is required outside loopback development. No
credential values are embedded in browser code, source, build artifacts, logs
or documentation.

Authenticated and denied responses use browser/CDN `no-store` directives and
vary on Authorization and Cookie. Credentials and session signatures are checked
with Web Crypto HMAC verification. Sessions expire after 8 hours and use a
host-only HttpOnly, SameSite=Strict cookie scoped to `/data`, with Secure on HTTPS.
Login and logout POSTs require a matching Origin; form bodies are byte-capped.
The shared password is suitable for this bounded owner-only research page;
it does not provide individual accounts, MFA or audit trails. Sign out clears the
current browser cookie. Rotate the secret to invalidate all prior sessions and
Basic credentials. Basic clients authenticate each request with the shared
password; signing out a browser cookie does not revoke those clients.

The build moves the research HTML and CSV into ignored `.data-build/research.js`,
which is bundled into the Pages Function. They are absent from `dist`, so static
fallback, direct asset requests and Function quota failure cannot serve them.
Do not copy `.data-build`, source CSVs or a raw Astro build into public assets.
Always run `npm run build`, not `astro build` alone, for deployment.

Use ignored `.dev.vars` for the local secret and `npm run dev:data` for the
authenticated preview. The ordinary Astro dev server blocks `/data`; raw-source
and private-build HTTP access are denied by its filesystem rules. A static-only
preview does not implement authentication and has no research content to serve.

Production and Pages preview environments must each configure `DATA_PASSWORD`
as an encrypted Pages secret before access can succeed. Never pass a password
as a command argument or commit `.dev.vars`. [Cloudflare Basic Auth guidance](https://developers.cloudflare.com/workers/examples/basic-auth/)
and [Pages fallback behavior](https://developers.cloudflare.com/pages/functions/routing/#fail-open--closed)
were checked 2026-10-06. This local implementation does not prove a production
secret is configured or a deployment has occurred.

## EmDash blog boundary — 2026-10-06

The optional `BLOG` service binding forwards only blog/admin/CMS assets/sitemap routes. Existing enquiry secrets and authenticated `/data` stay on Pages. No CMS error falls back to stale static content when the binding is configured. Admin responses are no-store/noindex; the proxy gives each HTML response fresh script nonces through HTMLRewriter instead of allowing unrestricted inline scripts. Public page CSP remains unchanged. Keep an uninitialized production admin private until the owner completes passkey setup; never copy a local dev admin to production. CMS resources and production credential custody require a deliberate release. The seed/import scripts never print tokens, and local bypass is loopback-only. See docs/blog/README.md.

CMS build artifacts must exclude adapter-generated local `.dev.vars` and `.env` copies as well as private research. The successful `build:blog` post-build guard removes these generated files recursively before the artifact can be considered deployable; original source credentials remain untouched. Never upload an interrupted/raw Astro build output. The credential-exclusion regression uses synthetic data only.
