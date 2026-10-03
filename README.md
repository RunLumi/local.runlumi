# Lumi Local

Lumi Local is RunLumi's done-for-you online presence product for Vietnamese local businesses.

> **Được tìm thấy. Được tin tưởng. Được liên hệ dễ hơn.**

This repository contains the customer-facing website, product copy, design contract, pricing, GTM snapshot, and field-sales playbook for Lumi Local.

## Current commercial ladder

- **Lumi Trust Kit:** 399.000đ one-time.
- **Lumi Local Starter:** 1.990.000đ for year one.
- Trust Kit is credited 100% if the customer upgrades to Starter within 30 days.
- **Renewal:** 599.000đ/year with a RunLumi subdomain or 999.000đ/year with one standard custom domain.
- **Lumi Ops:** only after a real lead/follow-up/operations pain is observed.

Website is a core component of Lumi Local, not the product identity. The durable operating idea is:

**Distribution → Trust → Ownership → Workflow**

## Product guardrails

- Do not position Lumi Local as an “AI website builder”.
- Do not require Google Business Profile edit access.
- Do not manually manage Google Maps as part of this offer.
- Do not buy, incentivize, gate, or fabricate Google reviews.
- Do not promise Google ranking, leads, customers, or revenue.
- Free Local Presence Alerts are public-data alerts where implemented, not a managed Maps service.

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

The intended production origin is `https://local.runlumi.app`.

## Repository map

- `src/` — Astro landing page and content.
- `public/` — original Lumi SVG assets and static security files.
- `functions/` + `server/` — same-origin lead enquiry endpoint for Cloudflare Pages.
- `DESIGN.md` — visual contract.
- `COPY.md` — customer-facing copy rules.
- `POSITIONING.md` — product positioning.
- `PRICING.md` — current commercial offer.
- `docs/GTM.md` — GTM snapshot from Lumi HQ.
- `docs/FIELD_PLAYBOOK.md` — field-sales execution snapshot.
- `SECURITY.md` — enquiry-form and secret-handling rules.
- `AGENTS.md` — instructions for agents working in this repo.

## Source of truth

This repo is the implementation source of truth for the Lumi Local website. Company-level GTM and operating decisions remain in `RunLumi/lumi-hq`; when the two intentionally diverge, update this repo explicitly rather than silently guessing.

Private repository. © 2026 RunLumi.
