# Agent entry: Lumi Local Facebook GTM

- User-confirmed contact cap (2026-10-07): at most 5 new owners in any rolling 60-minute window, using the authorized signed-in account through Browser UI. Treat 3–5/hour as a ceiling, not a target. Count submitting, pending and unknown sends; do not retry unknown outcomes. Check timestamps across runs in the private ledger before each send. The first-batch and expansion gates still apply.

Read [README.md](README.md), [GOAL_PROMPT.md](GOAL_PROMPT.md), [WORKLOG.md](WORKLOG.md) and [BROWSER_AGENT.md](BROWSER_AGENT.md) before campaign work. [COPY.md](../../COPY.md), [PRICING.md](../../PRICING.md), [STRATEGY.md](../../STRATEGY.md) and root security rules remain authoritative.

- The user explicitly authorized Browser UI operation through their existing signed-in Facebook account for this Lumi Local pilot on 2026-10-07. Preserve that scope across turns; do not ask again for the same authorization. Confirm the visible account/Page at run time. Their login does not authorize a different account, channel, paid campaign or broader audience.
- Default to `user_browser_ui`, not an API. Browser UI use is still agent-controlled software; do not claim it is human-operated or a Meta-approved exception. Use only visible normal UI affordances; no Graph/HTTP calls, scraping scripts/exports, proxies, CAPTCHA solving or anti-detection behavior. Check current policy/contact/data rules and stop on a platform warning or unresolved prohibition.
- Keep one vertical and the existing 30-business pilot. No scraping/export of Maps, Facebook follower/commenter lists, personal profiles or private groups. No unsolicited repeated follow-up or alternate-channel bypass.
- Use the supported browser tool and its live documentation/state. No hidden APIs, cookie export, evasion, CAPTCHA solving or improvised selectors.
- Write truthful personalized drafts; `not_found_after_checks` is not proof a website does not exist. Use authorized assets and private, disclosed previews only.
- Real prospect/contact/consent/action/meeting data belongs only in approved private operational storage. Templates in Git stay empty. Redact reports/checkpoints and preserve unrelated SEO/GEO work.
- Single execution owner. Check prior actions and suppression before mutations; record `submitting` before Send/Save. Verify exact thread/event; `unknown` is never permission to retry.
- Read the append-only PII-free worklog before each run/resume. Append `in_progress` before discovery, a checkpoint after every batch of at most five candidates/actions, and a terminal status at finish. Reconcile in-flight state first; never repeat a query, candidate, message or meeting without a recorded reason. The private ledger remains the source of truth for recipient-level dedupe.
- Distinguish draft, verified UI send, reply, both-confirmed meeting, held demo and verified payment. Report missing policy/platform/runtime evidence explicitly.
- The existing private cohort/action/suppression ledger remains a hard prerequisite to finding prospects. If its approved location cannot be accessed, do not search or send; record the exact blocker in the worklog.
