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

`/data`, `/data/`, `/data/index.html` and `/data/keywords.csv` are readable only by
a signed-in Lumi Local editor **administrator** (EmDash role ADMIN, level 50).
There is no separate research password, Basic Auth or research-only session:
the editor passkey sign-in is the only way in. `DATA_PASSWORD` is retired and
ignored; delete it from any environment where it still exists.

How the check works (`server/data-auth.js`): the Pages Function forwards the
visitor's own `Cookie` header, and nothing else, over the `BLOG` service binding
to `GET /_emdash/api/auth/me` on the CMS Worker, then reads the returned role.

| Situation | Response |
|---|---|
| Administrator session | 200 page/CSV, `private, no-store`, `Vary: Cookie` |
| No or expired session, browser page request | 302 to `/_emdash/admin/login?redirect=/data/` |
| No or expired session, CSV or programmatic request | 401, no dataset |
| Signed in below ADMIN (editor, author, …) | 403, no dataset |
| `BLOG` binding missing, `BLOG_ADMIN_READY` not `true`, CMS unreachable or malformed reply | 503, fails closed |
| Non-HTTPS outside loopback | 403 |

`BLOG_ADMIN_READY` must be `true`, so an unclaimed editor whose first-admin setup
is still open can never authorize anyone. Pages previews deliberately have no
production `BLOG` binding (`wrangler.jsonc` `env.preview.services: []`), so
`/data` returns 503 there. “Sign out” on the research page POSTs to
`/data/logout`. That requires a matching Origin, ends the EmDash session (the
editor is signed out too) and returns to the editor sign-in. To remove someone's
research access, remove or demote their EmDash account; their next request is
refused because every request is re-checked against the CMS.

The build moves the research HTML and CSV into ignored `.data-build/research.js`,
which is bundled into the Pages Function. They are absent from `dist`, so static
fallback, direct asset requests and Function quota failure cannot serve them.
Do not copy `.data-build`, source CSVs or a raw Astro build into public assets.
Always run `npm run build`, not `astro build` alone, for deployment.

Local preview: run the CMS Worker locally (see [docs/blog/README.md](docs/blog/README.md)),
then `npm run dev:data` with `BLOG_ADMIN_READY=true` in ignored `.dev.vars`; Wrangler
binds `BLOG` from `wrangler.jsonc`. The ordinary Astro dev server blocks `/data`;
raw-source and private-build HTTP access are denied by its filesystem rules.

## EmDash blog boundary — 2026-10-06

The optional `BLOG` service binding forwards only blog/admin/CMS assets/sitemap routes. Existing enquiry secrets and authenticated `/data` stay on Pages. No CMS error falls back to stale static content when the binding is configured. Admin responses are no-store/noindex; the proxy gives each HTML response fresh script nonces through HTMLRewriter instead of allowing unrestricted inline scripts. Public page CSP remains unchanged. Keep an uninitialized production admin private until the owner completes passkey setup; never copy a local dev admin to production. CMS resources and production credential custody require a deliberate release. The seed/import scripts never print tokens, and local bypass is loopback-only. See docs/blog/README.md.

CMS build artifacts must exclude adapter-generated local `.dev.vars` and `.env` copies as well as private research. The successful `build:blog` post-build guard removes these generated files recursively before the artifact can be considered deployable; original source credentials remain untouched. Never upload an interrupted/raw Astro build output. The credential-exclusion regression uses synthetic data only.

The first production editor claim is protected by `server/blog-setup-lock.js`. An absent readiness flag and absent/weak token fail closed. A temporary encrypted token is only for owner setup. Public blog pages remain accessible; the original enquiry webhook secret is preserved. Registration of the owner passkey is a human step. See docs/blog/README.md for activation and token removal.
