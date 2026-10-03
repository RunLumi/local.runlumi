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
