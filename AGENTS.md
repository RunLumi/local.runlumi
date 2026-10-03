# Lumi Local repository instructions

Read `DESIGN.md`, `COPY.md`, `POSITIONING.md`, `PRICING.md`, and the relevant docs before changing customer-facing claims.

## Product identity

The customer-facing product is **Lumi Local**.

Do not call the product “Lumi Website” and do not position it as an AI website builder. Website generation is a cost advantage, not the sales message.

Current ladder:

- Lumi Trust Kit: **399.000đ one-time**.
- Lumi Local Starter: **1.990.000đ year one**.
- Trust Kit is fully credited if upgrading within **30 days**.
- Renewal from year two: **599.000đ/year** with a RunLumi subdomain or **999.000đ/year** with one standard custom domain.
- Lumi Ops is an expansion path only after real operational pain appears.

## Durable narrative

**Distribution → Trust → Ownership → Workflow**

Website is a component of Lumi Local. The durable value is done-for-you setup, distribution, publishing, domain/hosting, maintenance, and the customer relationship.

## Claims and Google guardrails

Never:

- promise Google ranking, traffic, leads, customers, or revenue;
- fabricate testimonials, logos, customer counts, ratings, or results;
- ask for Google Business Profile edit access for this offer;
- present Lumi as manually managing Google Maps or reviews;
- buy, incentivize, gate, or fabricate Google reviews;
- say Free Local Presence Alerts are a managed service.

Review QR copy must invite genuine customers to share an honest experience.

## Visual system

Follow `DESIGN.md`.

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
