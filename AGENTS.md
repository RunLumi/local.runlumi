# Lumi Local repository instructions

Read [`DESIGN.md`](DESIGN.md), [`COPY.md`](COPY.md), [`POSITIONING.md`](POSITIONING.md), [`PRICING.md`](PRICING.md), and the relevant docs before changing customer-facing claims or copy.

## Product identity

The customer-facing product is **Lumi Local**.

Do not call the product “Lumi Website” and do not position it as an AI website builder. Website generation is a cost advantage, not the sales message.

Current ladder:

- Lumi Trust Kit: **399.000đ one-time**.
- Lumi Local Starter: **1.990.000đ year one**.
- Trust Kit is fully credited if upgrading within **30 days**.
- Renewal from year two: **599.000đ/year** with a RunLumi subdomain or **999.000đ/year** with one standard custom domain.
- Lumi Ops is an expansion path only after real operational pain appears.

## Durable narrative & presence trinity

**Distribution → Trust → Ownership → Workflow**

Always consult [`COPY.md`](COPY.md) for the canonical bilingual copy contract.

The customer-facing value proposition centers on the **3-pillar local presence trinity**:
1. **Google Maps presence:** Local buyers find your place with accurate location and directions. The owner retains 100% Google account ownership.
2. **Real Counter Review QR:** Print-ready acrylic standees placed at checkout invite genuine happy customers to leave permanent 5-star Google reviews (compound trust).
3. **Decision-closing mobile website:** Sub-second mobile loading with transparent service menus, hours, and 1-tap Call/Zalo booking actions.

Website is a component of Lumi Local. The durable value is done-for-you setup, distribution, publishing, domain/hosting, maintenance, and the customer relationship.

## Claims and Google guardrails

All customer-facing text must strictly follow [`COPY.md`](COPY.md).

Never:

- promise Google ranking, traffic, leads, customers, or revenue;
- fabricate testimonials, logos, customer counts, ratings, or results;
- ask for Google Business Profile edit access for this offer;
- present Lumi as manually managing Google Maps or reviews;
- buy, incentivize, gate, or fabricate Google reviews;
- say Free Local Presence Alerts are a managed service.

Review QR copy must invite genuine customers to share an honest experience (see exact phrasing in [`COPY.md`](COPY.md)).

## Visual system

Follow [`DESIGN.md`](DESIGN.md).

Preserve:

- warm Paper + Civic Navy + Lumi Blue;
- Geist only;
- one dark navy inversion;
- opaque sheets;
- exactly two glass navigation controls: header and workflow dock;
- original folded-L logo;
- light theme;
- restrained depth;
- no gradient spectacle, glowing AI orbs, decorative serif, fake dashboards, or fake customer screenshots.

Use inspectable HTML and original local SVG illustrations.

## Website implementation

- VI homepage: `/`.
- EN homepage: `/en/`.
- `src/components/Landing.astro` is the primary customer-facing implementation.
- All customer copy strings must match [`COPY.md`](COPY.md).
- `src/styles/global.css` contains canonical tokens.
- `src/styles/local.css` contains Lumi Local layout.
- Primary CTA: **Xem thử Lumi Local cho business của tôi** / **Show me Lumi Local for my business**.
- The enquiry form is not payment, account creation, or a reserved slot.

## Enquiry endpoint

Browser posts only to `/api/enquiries`. The Cloudflare Pages Function reads the encrypted `DISCORD_TRIAL_WEBHOOK_URL` secret.

Never expose the webhook URL in browser code or docs containing actual credentials. Do not log PII.

## Verification

Before calling work complete:

- inspect VI/EN at 320/375/768/1440 widths;
- verify all CTA anchors and form submission;
- check long Vietnamese labels and diacritics;
- verify FAQ and pricing match docs;
- test missing webhook secret;
- verify no Google edit access is implied;
- run `npm run build`;
- do not claim production deployment until the real URL is verified.

Do not change DNS, billing, repository visibility, or contact customers without explicit authorization.

## Maintaining AI engineering guidance

At the first repository task each month (Asia/Ho_Chi_Minh), follow [the monthly practice review](docs/AI-ENGINEERING.md#monthly-ai-engineering-practice-review), starting with claude.dev. Apply evidence-backed improvements to this contract and canonical docs; preserve existing ownership, security, product, and release rules. This runs on agent entry, not a background scheduler.

Before long-task interruption/compaction, record a redacted checkpoint and revalidate actual state on resume using [the resume protocol](docs/AI-ENGINEERING.md#resuming-agent-work). Claims of better prompt/skill/workflow outcomes require [independent evaluation](docs/AI-ENGINEERING.md#evaluating-guidance-changes); source recommendations and green counts alone are not proof.
