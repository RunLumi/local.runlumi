# Lumi Local

Lumi Local is RunLumi's done-for-you online presence product for Vietnamese local businesses.

> **Được tìm thấy. Được tin tưởng. Được liên hệ dễ hơn.**

This repository is the implementation source of truth for the Lumi Local website and contains the product, pricing, design, GTM, field-sales, security, and deployment context needed to operate it without guessing.

## Current product ladder

| Step | Offer | Price |
|---|---|---:|
| 1 | **Lumi Trust Kit** | **399.000đ one-time** |
| 2 | **Lumi Local Starter** | **1.990.000đ year one** |
| 3A | **RunLumi Address renewal** | **599.000đ/year** |
| 3B | **Custom-domain renewal** | **999.000đ/year** |
| 4 | **Lumi Ops** | Only after a real workflow pain is observed |

If a Trust Kit customer upgrades to Lumi Local Starter within 30 days, the full **399.000đ is credited**, so the remaining amount is **1.591.000đ**.

Website is a core component of Lumi Local, not the product identity. The durable operating idea is:

**Distribution → Trust → Ownership → Workflow**

## What Lumi Local is

Lumi Local gives a local business a practical online presence without asking the owner to become a website builder:

- mobile-first website / landing page;
- Google Review QR and standee artwork;
- Call / Zalo / Maps actions;
- contact form;
- hosting + SSL;
- basic local-search structure;
- one basic content revision round;
- technical maintenance within the chosen renewal scope;
- public-data Local Presence Alerts where implemented.

## What it is not

- not an “AI website builder”;
- not a managed Google Maps service;
- no need for Google Business Profile edit access;
- no bought, gated, incentivized, or fabricated reviews;
- no promise of Google ranking, leads, customers, or revenue;
- no unlimited custom design or integrations.

## Local development

```bash
npm ci
npm run dev
```

Build:

```bash
npm run build
npm test
```

The intended production origin is **https://local.runlumi.app**.

## Strategy and readiness

Start with [STRATEGY.md](STRATEGY.md) and [the pilot ledger](docs/PILOT.md). Technical checks do not prove market demand. Starter is the primary offer; Trust Kit is optional.

## Repository map

- `src/` — Astro pages, layout, and Lumi Local content.
- `public/` — original Lumi SVG assets, CSS/JS, headers, robots, sitemap, llms.
- `functions/api/enquiries.js` — same-origin Cloudflare Pages enquiry endpoint.
- `DESIGN.md` — visual contract.
- `COPY.md` — customer-facing copy rules.
- `POSITIONING.md` — product positioning.
- `PRICING.md` — current commercial offer.
- `docs/GTM.md` — GTM model and falsification gates.
- `docs/FIELD_PLAYBOOK.md` — field execution for student/part-time GTM reps.
- `docs/GOAL_LANDING_PAGE.md` — implementation goal for future agents.
- `docs/UI_UX_RESEARCH_2026-10.md` — external design references and the principles adopted from them.
- `SECURITY.md` — enquiry-form and secret-handling rules.
- `DEPLOY.md` — Cloudflare Pages deployment notes.
- `AGENTS.md` — repo operating instructions.

## Source of truth

This repo is authoritative for the Lumi Local site implementation and the commercial claims rendered by it. Company-level operating decisions remain in `RunLumi/lumi-hq`. If HQ changes pricing or GTM, update this repo explicitly and verify all rendered claims.

Private repository. © 2026 RunLumi.
