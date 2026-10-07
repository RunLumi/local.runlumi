# Lumi Local Facebook GTM worklog

Append-only, PII-free campaign operations log. Read recent entries before any new discovery or contact action. Do not put business/page names, URLs, phone/email, message contents, thread/calendar links, credentials or reversible prospect IDs here; store operational details only in the approved private ledger. This worklog prevents duplicate research and actions, but it is not a lock or substitute for checking the private action ledger and platform state.

## 2026-10-07 — goal prompt authoring

- **Run:** `gtm-goal-prompt-2026-10-07`; status at start: `in_progress`.
- **Scope:** write a reusable `/goal` prompt and require future operators/agents to read and append this worklog during execution.
- **Before work:** inspected the current `docs/gtm/README.md`, `BROWSER_AGENT.md`, file inventory and Git status. No prior `docs/gtm/WORKLOG.md` or goal prompt existed in the checkout. The current checkout is behind `origin/main` and already contains unrelated SEO/blog changes; preserved those changes.
- **Duplicate shield:** no lead research, Facebook access, outreach, preview generation or meeting action is authorized by this documentation task. Do not count this documentation run as a pilot prospect or cohort activity.
- **Next checkpoint:** finish prompt and cross-links, validate local links and worklog record, then append completion evidence below.

## 2026-10-07 — goal prompt documentation complete

- **Run:** `gtm-goal-prompt-2026-10-07`; final status: `complete` for documentation scope.
- **Changed:** added `GOAL_PROMPT.md`; linked it and this worklog from README; made read/checkpoint requirements explicit in scoped agent instructions.
- **Validation:** pending final link, whitespace and header-only-template checks. No lead discovery, Facebook/browser access, contact, preview, meeting or campaign action occurred.
- **Next step:** an actual campaign needs its own authorized scope and private ledger; reconcile this worklog and the pilot action history before new discovery.

### Validation follow-up — 2026-10-07

- **Run:** `gtm-goal-prompt-2026-10-07`; status remains `complete` for documentation scope.
- **Proof:** 11 Markdown files checked; 57 relative links resolved; all three CSV templates remain header-only; whitespace/final-newline checks and `git diff --check` passed.
- **External actions:** none. The repo checkout remains 16 commits behind `origin/main`; unrelated local WIP was preserved and not synchronized.

## 2026-10-07 — Facebook pilot execution run opened

- **Run:** `lumi-fb-pilot-2026-10-07-01`; started `2026-10-07T06:37+07:00`; status: `in_progress`.
- **Scope:** audit the existing Bình Thạnh/Quận 4 garage cohort, find eligible businesses and prepare the first bounded batch only after duplicate/history and permission gates pass.
- **Before discovery:** read the current goal prompt, worklog, STRATEGY.md, PILOT.md and campaign-scope template. The checked-in template has no authorized private-storage location, action journal, suppression list, actual cohort contents or active campaign scope. PILOT.md says real contact details belong in approved private operational storage. No campaign storage connector or user-provided location is available in this run.
- **Gate result:** `needs_private_ledger_and_scope`. No prospect/business research, Facebook/account/browser access, contact, preview, meeting or campaign mutation has started. The run remains incomplete; do not start a second pilot run or change the run ID on resume.
- **Next action:** user identifies an already-approved private ledger/action journal accessible through an authorized tool or mounted location, and confirms the execution mode/scope in the private campaign record. Do not paste prospect PII into Git or this chat.

### Policy research checkpoint — 2026-10-07 06:39 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; still `in_progress`.
- **Independent work completed:** rechecked Meta Help Center, Meta's 2021 scraping statement, the Meta Messenger API collection index, current Facebook Terms, automated-data-collection terms, Spam standards and Messenger policy endpoints. Findings and exact access limits are recorded in `RESEARCH-2026-10-07.md`.
- **Gate state:** browser-agent access/cold message remains `policy_unverified`; the Meta API collection indicates user-initiated or opted-in recipients for Send API, but its detail page did not render. This does not establish whether human-operated Facebook UI cold outreach is permitted.
- **Prospect work:** 0 candidates searched, 0 business records opened, 0 messages/previews/meetings. The private dedupe/action ledger and active campaign scope remain unavailable, so the prompt's discovery gate is still closed.
- **Next action:** resume this same run when the approved ledger location/access method is available; reconcile it before searching. Recheck primary platform policy at execution time.

### Vietnam legal-source checkpoint — 2026-10-07 06:41 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; still `in_progress`.
- **Independent work completed:** checked official Government Gazette metadata for Law 75/2025/QH15 (Advertising Law amendment, effective 2026-01-01), consolidated Advertising Law 88/VBHN-VPQH, Law 91/2025/QH15 (personal data protection, effective 2026-01-01) and Decree 356/2025/NĐ-CP. Research note distinguishes the proved SMS/email advance-consent rule from the unresolved Messenger classification and records Article 16's bounded public-data rules without claiming a legal conclusion for this campaign.
- **Gate state:** `contact_basis=needs_review`; `policy_gate=policy_unverified`. No contact or prospect research was done. No private ledger/storage access has arrived.
- **Next action:** obtain the existing private ledger access and resolve channel-specific campaign scope/contact basis before discovery; if a lawful/allowed opt-in route is used, dedupe it against the existing pilot first.

### Resume checkpoint — 2026-10-07 06:42 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; still `in_progress`.
- **Local validation:** 9 GTM Markdown files, 34 relative links, whitespace/final newline and header-only CSV checks passed; `git diff --check` passed.
- **State:** checkout remains 19 commits behind its recorded `origin/main`; unrelated root SEO/blog WIP is preserved. The run research/worklog edits are local and have not been committed or published.
- **Dedupe/action counts:** 0 prospects researched, 0 messages, 0 previews, 0 meetings. The research update is policy/legal-source work only.
- **Resume condition:** use this same run ID; first access/reconcile the approved private cohort, action and suppression ledger and confirm the exact storage/campaign record. Do not start prospect discovery until then.

### User-input blocker — 2026-10-07 06:43 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status: `blocked` pending user-provided storage access.
- **Verified access check:** Codex Document Control returned no connected document sessions; this session exposes no Drive, Sheets, Dropbox, Box or SharePoint connector. No approved private ledger path is configured in the campaign scope. This establishes current tool availability only; it does not prove no ledger exists elsewhere.
- **Final counts for this blocked attempt:** 0 prospects researched, 0 business records opened, 0 messages, 0 previews, 0 meetings. Meta/legal research and documentation validation are recorded above.
- **Needed to resume:** user points to an already-approved private cohort/action/suppression ledger through a connected service or exact mounted path and states how the session may access it. Keep the same run ID; reconcile/dedupe before discovery.

### User direction — browser UI — 2026-10-07 06:44 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; resumed after user clarified preference for the Browser UI; status: `in_progress`.
- **Browser check:** Codex In-app Browser is available, but currently has no tabs. This does not prove a Facebook session/account is available. User authorized use of browser UI for this goal; do not represent agent-driven browser control as human operation or hide automation. Platform permission/contact basis for the exact method remain `policy_unverified`/`needs_review`.
- **Unchanged stop gate:** no approved private cohort/action/suppression ledger path was supplied and no connected document session exists. Therefore 0 businesses have been looked up; no browser navigation to prospect pages, contact, preview or meeting action occurred.
- **Next action:** obtain the existing private ledger location/access method; then dedupe and confirm that the proposed first batch is not already in the cohort before opening Facebook search.

### Browser-mode documentation update — 2026-10-07

- **Run:** `lumi-fb-pilot-2026-10-07-01`; resumed after direct user instruction; status `in_progress`.
- **User scope:** user explicitly states they are signed into Facebook and directs the agent to use Browser UI on their behalf for this Lumi Local pilot. Documentation now names `user_browser_ui` as the preferred mode. It does not claim the UI agent is a human or that user login overrides Meta policy.
- **Changed locally:** updated all active GTM guidance files to align on Browser UI, visible account/Page verification, no API/scraping/evasion, truthful sender identity, and the existing private-ledger gate; updated root agent guidance, docs/GTM.md, and STRATEGY.md's superseded execution note to remove contradictory defaults.
- **Session evidence:** user reports login; current CUA inventory showed the Codex in-app browser with no open tabs. Actual Facebook session/account remains unobserved in this run.
- **Prospect actions:** 0 searched/opened/contacted; no preview or meeting created. Private cohort/action/suppression ledger location is still missing, so GOAL_PROMPT discovery gate remains closed.
- **Next action:** user supplies the approved private ledger location/access method. On resume, keep this run ID, reconcile/dedupe first, then inspect the currently signed-in Browser identity and continue only within policy/contact basis.

### Full GTM Browser-scope alignment — 2026-10-07 06:50 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status `in_progress`; no prospect work.
- **User scope:** user explicitly authorized Browser UI use on their existing signed-in Facebook account for this Lumi Local pilot. Do not ask again for actions within scope. Do not claim Meta approval or human operation.
- **Changed locally:** aligned GTM docs, campaign template, root AGENTS.md, docs/GTM.md, STRATEGY.md and PILOT.md to the Browser mode; preserved visible-account checks, platform/contact/data gates, private-ledger dedupe and no API/scraping/evasion.
- **Session evidence:** user reports Facebook signed in; prior Browser inventory showed no open tab. Account/Page still not observed. No prospect search, messages, preview or meeting created.
- **Validation:** pending final stale-instruction, link, whitespace and header-only-template checks.
- **Next action:** user supplies approved private cohort/action/suppression ledger location; reconcile/dedupe before prospect discovery, then inspect the Browser account/Page.

### Browser session observation — 2026-10-07 06:53 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status `in_progress`.
- **Evidence:** opened Facebook in the Codex In-app Browser and observed a signed-in session. The tab showed the personal home feed; no prospect was inspected and no feed data/display name was recorded. Closed the verification tab without signing out.
- **Limit:** this establishes that the Browser profile has a signed-in Facebook session, not that this is the sender/Page selected for campaign delivery or that Meta permits agent-controlled activity.
- **Prospect actions:** still 0. The private cohort/action/suppression ledger is inaccessible; the discovery gate remains closed.

### Meta Terms gate confirmed in Browser — 2026-10-07 09:09 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status `in_progress`, Facebook prospecting gate blocked pending external permission evidence and private ledger access.
- **Primary source observed:** Meta Terms of Service, `facebook.com/legal/terms`, in the signed-in Browser session. Page states effective January 1, 2025. Section 3.2.3 prohibits automated access/collection of Meta Product data without Meta's prior permission, regardless of logged-in status.
- **Permission audit:** the user has authorized account-use for this bounded goal, but no prior permission from Meta covering agent-controlled Browser access/collection is recorded. These are separate permissions. Do not use Browser to search/open prospect Pages or collect prospect data absent that prior permission.
- **Private ledger gate:** cohort/action/suppression ledger location remains unavailable.
- **Counts:** 0 prospect pages opened, 0 businesses researched, 0 messages, 0 previews, 0 meetings. Terms read was a policy check, not prospect research.
- **Documentation updated:** goal prompt, Browser runbook, README, qualification playbook, campaign template, research note, root AGENTS, GTM, STRATEGY and PILOT now state the same gate. Local link/format verification follows.

### Meta Terms observed in signed-in Browser — 2026-10-07 09:09 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status `in_progress` pending user/external permission evidence and private ledger access.
- **Evidence:** opened `https://www.facebook.com/legal/terms` in the user's signed-in Facebook Browser session. Visible Terms page states effective date 2025-01-01. Section 3.2.3 says users may not access or collect Meta Product data using automated means without prior Meta permission, whether logged in or not. Source and operational interpretation were added to `RESEARCH-2026-10-07.md` and runbooks.
- **Gate consequence:** user authorization covers account-use intent but is not the Meta prior permission named by §3.2.3. No evidence of that permission is present. Do not agent-search/open prospect Pages or collect their data until that exact permission is evidenced. Do not use another account or method to bypass this condition.
- **Browser action:** read-only Terms navigation only; tab closed without signing out. No prospect Page opened; no lead, message, preview, or meeting created.
- **Other gate:** private 30-business cohort/action/suppression ledger remains inaccessible, so dedupe is also not done.

### Automated Data Collection Terms read — 2026-10-07 09:12 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; Facebook discovery/contact remains blocked.
- **Evidence:** opened `facebook.com/legal/automated_data_collection_terms` in the signed-in Browser. Terms effective 2024-10-07. Section 2 requires Meta express written permission before automated collection. Section 3 states accepting those Terms alone does not grant permission and directs users to a separate formal authorization process. Section 4(a) limits data use to a search engine, Meta URL previews, or another purpose with express written permission. Section 8 defines automated collection to include automated/programmatic tools capable of navigating/indexing the web surface or retrieving data directly from web pages/apps; the agent-controlled Browser fits that definition on its face.
- **Permission audit:** no express written permission covering Lumi prospecting/sales is present. The page did not expose a request link in the content read; no request was submitted.
- **Action:** closed the terms tab without signing out. No prospect page opened, no collection, messages, previews, or meetings.
- **Other gate:** private cohort/action/suppression ledger remains unavailable. Both blockers now documented; continue only independent non-Facebook work until exact permission and ledger access are supplied.

### Prior-permission route research and doc audit — 2026-10-07 09:15 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; no prospect discovery or contact.
- **Official-route check:** searched Meta/official domains for a public request entry point referenced by the Automated Data Collection Terms' “formal authorization process”; no explicit request URL or applicable self-service process was found in returned official results. This is not proof that Meta has no process; permission status remains absent unless the user supplies the actual written authorization or Meta's process becomes verifiable.
- **Documentation:** aligned GOAL_PROMPT, Browser runbook, campaign template, research, README, qualification playbook, root AGENTS, GTM, STRATEGY and PILOT to require express written Meta permission for this automated Browser collection/use and distinguish user permission from platform permission.
- **Validation:** pending final complete docs/link/whitespace/template audit.
- **Next state:** do not search/open prospect Pages or send campaign messages. Resume only if exact Meta written permission for the method/purpose and approved private cohort/action/suppression ledger become available.

### Final policy and consistency audit — 2026-10-07 09:16 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; no prospect discovery/contact.
- **Policy finding:** Meta's Automated Data Collection Terms, read in Browser, require express written permission before collection; acceptance of those Terms is not enough. Their stated default purposes do not include Lumi prospect sales unless Meta separately approves that purpose. An official-domain search found no public request URL; do not infer none exists.
- **Docs audit:** 9 GTM Markdown files and 34 relative links checked; templates are header-only; whitespace and `git diff --check` pass. Stale mode-string scan found no previous `research_and_draft`/`authorized_browser_execution` default.
- **External state:** no Meta permission document and no approved private 30-business/action/suppression ledger access. Both remain necessary external inputs; run stays open at these gates.

### Resumed-goal blocker audit — 2026-10-07 09:18 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; prospecting state remains `blocked_by_external_gates`.
- **No-progress classification:** earlier resumed turns changed documentation and verified the signed-in session/Meta Terms; this turn checked Meta official-domain results for the stated formal authorization route. Search returned no explicit request URL; this is bounded evidence, not proof no request process exists.
- **Completion evidence audit:** campaign scope is documented; browser account session was observed; policy research is grounded in Meta Terms §3.2.3 and the Automated Data Collection Terms. Missing required evidence: Meta express written permission covering agent-controlled access and the prospecting/sales purpose; approved private 30-business cohort/action/suppression ledger and access method.
- **Actions/results:** no prospect pages opened, 0 prospects researched, 0 messages, 0 previews, 0 meetings. No campaign PR or external contact action was made.
- **Validation:** pending final links/whitespace check after the policy clarification.
- **Next action:** resume this same run only when the written Meta permission evidence and approved ledger/access method are supplied; reconcile cohort/action/suppression before any discovery. Do not use alternative accounts or methods to bypass the missing permission.

### Connected private-ledger lookup — 2026-10-07 09:21 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; no prospect actions.
- **Read-only search:** searched ChatGPT Spaces for the exact Lumi Local garage-pilot cohort/action/suppression ledger query; 0 Pages matched. Listed all accessible Drive-backed Spaces by following the returned cursor to completion; 0 Spaces were available. Did not open or inspect unrelated private Pages.
- **Repo audit:** relevant inventory contains only `docs/PILOT.md` process instructions and three header-only GTM CSV templates; no populated 30-business ledger.
- **Permission state:** Meta express written permission for agent-controlled data access and prospecting purpose is still not evidenced. Meta's public Terms page did not expose an application URL in the content read; official-domain search found none, which does not prove no private/formal route exists.
- **Current result:** 0 prospects researched, 0 Page opens, 0 messages, 0 previews, 0 meetings. Both required external inputs remain absent.

### Resumed-goal audit — 2026-10-07 09:21 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; no new user-provided permission or ledger location arrived on resume.
- **Current evidence:** repo contains only empty ledger templates; a focused ChatGPT Space search found no matching ledger and the complete connected Space listing returned no Spaces. Official Meta Terms were read in Browser and explicitly require express written permission for automated collection, with separate purpose approval; no campaign permission document exists.
- **Consecutive resumed blocker:** the same two external prerequisites (Meta express written permission and approved private dedupe ledger) remain absent across resumed goal turns. No safe prospect discovery/contact action is available without them.
- **Next action:** user supplies both evidence sources/access locations; resume this same run and reconcile/dedupe before discovery. Do not bypass via another account or method.

### Current-state recheck — 2026-10-07 09:20 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status `in_progress`; no prospect action.
- **Repo evidence:** refreshed inventory shows only the three header-only GTM CSV templates and the process specification in `docs/PILOT.md`; no populated cohort/action/suppression ledger exists in this checkout. Primary checkout remains 19 commits behind `origin/main` with unrelated SEO/blog WIP preserved.
- **Connected storage:** ChatGPT Space tools are available, but no user-specified Space/page was identified. No Space listing or page search was run, to avoid browsing unrelated private content.
- **Outstanding gates:** (1) express written Meta permission for agent-controlled Browser data collection and this prospecting purpose; (2) an approved private ledger location/access method. User was asked for location/evidence references only, not prospect PII.
- **Counts:** 0 prospects researched, 0 Page opens for prospecting, 0 messages, 0 previews, 0 meetings.

### Documentation validation — 2026-10-07 06:55 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status `in_progress`.
- **Proof:** checked all 9 GTM Markdown files, 35 local links, whitespace/final newlines and all header-only CSV templates; `git diff --check` passed. Stale mode-string scan found only the historical no-outreach sentence in STRATEGY.md, now explicitly marked as superseded by the dated Browser scope update.
- **Scope:** documentation only. No prospect was searched; Browser session was verified and closed without opening business Pages or sending messages.
- **Remaining gate:** private ledger path/access and its duplicate/suppression state.

### User-confirmed account scope and hourly cap — 2026-10-07 09:32 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; documentation update.
- **Authorization:** user explicitly reiterated acting on their behalf through their signed-in Facebook account, contacting 3–5 owners/hour maximum. No repeat account-use approval needed within the existing campaign scope.
- **Execution limit:** at most 5 new owners in any rolling 60 minutes across runs; submitting/pending/unknown sends consume quota. Reconcile before retry; keep first-batch and expansion gates.
- **Actual results:** 0 prospects researched, 0 campaign sends, 0 meetings. Existing Meta-permission evidence and private dedupe-ledger access remain unresolved; this rate instruction does not supply either.

### Goal continuation recheck — 2026-10-07 09:34 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; previous turn was a no-progress status response; this turn rechecked repo/storage state and official-policy evidence.
- **Current-state evidence:** `README.md` still records no Meta permission and no private ledger. Repository inventory has only empty CSV templates; WORKLOG confirms 0 prospects/actions/meetings. No new user-provided permission record or ledger location is present.
- **Policy research:** searched public web for Meta's formal authorization route. Search results surfaced the current Automated Data Collection Terms' express-written-permission and separate-purpose language, but no current application route. Direct web opens of Meta legal pages redirected to a login/temporary-block page, so this search does not establish a new permission route or permission.
- **Action:** no prospect Page opened, no message sent, no private data written. The repeated prerequisites remain unchanged; resume with the same run after permission evidence and private ledger access are supplied, then dedupe before discovery.

### Resume audit, user approval attempt, session pause — 2026-10-07 09:44 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; final status this session: `blocked` (was `in_progress`). Goal paused by the runtime after this checkpoint.
- **Repo audit (CHẶNG 0):** branch `main` @ `c14a815`, 19 commits behind `origin/main` @ `2f260ea` (origin already has an earlier GTM-docs snapshot via #42; local `docs/gtm/` working copies are newer and untracked). Unrelated SEO/blog WIP preserved; no stash/reset/switch/pull performed. All three GTM CSV templates re-checked: header-only.
- **Dedupe/action reconciliation:** read the full worklog to the latest entry; this is the only active run and no parallel run was opened. No `submitting`/`unknown`/`pending` send exists in any record available; nothing to reconcile before any future discovery.
- **Gate recheck:** no Meta-issued express written permission evidence and no private cohort/action/suppression ledger location appeared this session. This host exposes no connected document storage and no mounted ledger path was supplied.
- **User message mid-turn:** the user replied "I approve this" to the two-blocker summary. Recorded as user intent only. It is not Meta-issued permission evidence and does not name a ledger location: only Meta can grant express written permission for the exact method and purpose under Terms §3.2.3 / Automated Data Collection Terms §§2–4, 8, and user authorization does not substitute. `policy_unverified` and the ledger gate remain closed; a later run must not treat this approval as evidence for either gate.
- **Final aggregate (all runs, all time):** 0 candidates checked, 0 business records opened, 0 messages prepared/submitted/verified/unknown, 0 previews, 0 meetings, 0 payments; send quota consumed 0/5 in any rolling 60-minute window.
- **Blockers:** (1) no express written Meta permission covering agent-controlled Browser access/collection with a prospecting/sales purpose; (2) no approved private cohort/action/suppression ledger location or access method.
- **Proof sources:** `RESEARCH-2026-10-07.md` (Terms read in signed-in Browser 2026-10-07 09:09–09:12 +07:00); header-only `docs/gtm/templates/`; this append-only worklog.
- **Next step:** resume this same run ID only when (a) an actual Meta-issued written permission document for this method/purpose is evidenced, or the user explicitly re-scopes the campaign away from agent-controlled Facebook access (e.g., operator-performed human outreach recorded as `evidence_origin=operator`), and (b) the user names the exact private ledger path/service and grants access. Then reconcile the ledger, dedupe business identity, and only after all gates pass consider discovery. Contact-basis review for cold openers still applies regardless of sender.

### Private ledger established under user delegation — 2026-10-07 09:52 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status: `in_progress` — blocked for agent-controlled Facebook actions only.
- **User direction:** user delegated the private-ledger location choice ("choose a folder") and asked to remove the Meta permission gate.
- **Ledger gate now satisfied:** private operational storage created at `/Users/james/RunLumi-Private/lumi-fb-pilot-2026-10-07/` (user home, outside every repo/worktree, not a synced cloud service). Contains `README.md` (custody/handling), `CAMPAIGN.md` (scope record filled only with evidenced values; unevidenced gates left `needs_review`/blank) and the three CSVs copied header-only from `docs/gtm/templates/`. Nothing pre-existed at the path; no data invented. Path recorded here as a non-PII operational pointer.
- **Meta permission gate not removed:** the user requested removal; declined. The gate reflects Meta Terms §3.2.3 / Automated Data Collection Terms §§2–4, 8 read in the signed-in Browser earlier today — an external requirement no repo edit can satisfy, and user approval does not substitute for Meta's express written permission. Agent-controlled Facebook discovery/contact/collection remains closed (`policy_unverified`); no repo doc was edited to mark it verified, since that would be a fabricated permission record.
- **Operator route recorded as available:** user-performed human outreach (operator evidence, `evidence_origin=operator`) with agent support on non-Facebook research/verification/drafting/ledger writes; sender identity, work slots and per-recipient contact basis still to be filled before first send. Candidate sourcing pending user decision: user-supplied names, or explicit re-scope to public non-Facebook web checks (web research for prospect lists was previously out of scope per earlier instruction).
- **Counts (all runs, all time):** 0 candidates checked, 0 business records opened, 0 messages prepared/submitted/verified/unknown, 0 previews, 0 meetings, 0 payments; send quota consumed 0/5 in any rolling 60-minute window.
- **Next step:** user supplies either (a) candidate garages they already know/can reach, or (b) explicit authorization for public non-Facebook web research to build the candidate list; agent then verifies websites, scores per playbook, drafts openers, and writes the ledger; user sends manually within quota. Agent-driven Facebook access stays closed unless an actual Meta-issued written permission is evidenced.

### Scope confirmed: web research for candidate list — 2026-10-07 09:58 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status: `in_progress`; discovery phase opening.
- **User direction:** "web research ok" — explicit re-scope authorizing public non-Facebook web research to build the candidate list. Agent-driven Facebook access remains closed (`policy_unverified`); Facebook page existence may only be noted from search-index snippets, never opened/collected by the agent.
- **First-lap budget:** research ≤120 minutes from discovery start; check ≤20 candidates; select ≤5 for batch 1; cash 0đ. Candidate names/URLs/evidence go to the private ledger only; Git/chat stay aggregate-only.
- **Method:** WebSearch + direct fetches of garage websites/VN directories; no Maps scraping/export, no Facebook navigation, no personal profiles, no bulk collection. Website status per FACEBOOK_PLAYBOOK taxonomy; multiple checks before any `not_found_after_checks`.
- **Next checkpoint:** after every ≤5 candidates checked, with aggregate counts and query/source families.

### Research checkpoint — 5 candidates checked — 2026-10-07 10:10 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status `in_progress`; research elapsed ≈15 of ≤120 minutes.
- **Checked (batch A, all Bình Thạnh independent garages with full directory addresses):** 5. Result: 4 `not_found_after_checks` on the web side (quoted name+street searches and two directory families; Facebook About field still unverified — operator must confirm before any send), 1 `existing_suitable` (complete official website verified by fetch) → rejected. Private ledger rows written (BT-01…BT-05); evidence in the private research log.
- **Query/source families:** two Vietnamese garage-directory families for Bình Thạnh; per-candidate quoted-name+street searches; one candidate domain fetched and identity-verified. No Facebook navigation or collection; no Maps scrape/export; no personal profiles.
- **Qualified (web-side, preliminary score 5/10 pending operator Facebook verification):** 4. Formal promotion to `draft_ready` requires operator checks (page exists, identity, 30–90d activity, About website field).
- **Next:** batch B of 5 (Bình Thạnh), then a Quận 4 batch; hard cap 20 checked candidates.

### Research checkpoint — 10 candidates checked — 2026-10-07 10:22 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status `in_progress`; research elapsed ≈25 of ≤120 minutes.
- **Checked (batch B, Bình Thạnh):** 5. Result: 3 `not_found_after_checks` on the web side (2 with single-source identity — operator must confirm the exact shop), 1 `existing_needs_review` (likely own site; server refused automated fetch, ownership/quality unverified → excluded from batch 1, review queue), 1 rejected earlier already counted (batch A). Cumulative: 10 checked — 6 web-side `not_found_after_checks`, 1 `existing_suitable` (rejected), 1 `existing_needs_review` (excluded from batch), plus 2 already counted; remaining cap: 10 checks.
- **Query/source families:** same two directory families + a third district-list family (rescue-service listicle) + per-candidate quoted name+street searches; one domain fetched (403 to automated fetch — recorded, not bypassed).
- **Tooling blocker:** WebSearch timed out repeatedly mid-batch; a fallback engine served a bot-detection CAPTCHA. No CAPTCHA solved, no workaround; partial checks recorded honestly and completed where possible.
- **New unchecked candidates queued:** one Nơ Trang Long garage with a tax-code registry signal (priority next lap); several names without verified addresses; chain/dealer/parts-shop/rescue-service names excluded on sight.
- **Next:** Quận 4 batch of 5, then final ≤5 from the queue; then select batch 1 (≤5) and draft openers.

### Research lap 1 complete — 20 checked, batch 1 selected — 2026-10-07 10:45 +07:00

- **Run:** `lumi-fb-pilot-2026-10-07-01`; status `in_progress` — research phase done, awaiting operator Facebook-side verification and sends. Research elapsed ≈45 of ≤120 minutes (09:58–10:45, incl. tooling blockers).
- **Checked 20 (cap reached), all Bình Thạnh/Quận 4 garage independents:** 16 `not_found_after_checks` on the web side (Facebook About field still unverified — decisive operator gate before any send), 1 `existing_suitable` → rejected, 1 `existing_needs_review` → excluded from batch 1, 2 `unknown` (insufficient verification; not send-ready, queued for next lap).
- **Query/source families:** three Vietnamese garage-directory/listicle families per district, one business-registry lookup, one brand workshop-locator lookup, per-candidate quoted name+street searches, one candidate-domain fetch (HTTP 403 — recorded, not bypassed). No Facebook navigation or collection by the agent; no Maps scrape/export; no personal profiles; no phone numbers or prospect identifiers stored in Git.
- **Tooling:** intermittent search timeouts and one bot-detection CAPTCHA on a fallback engine; no CAPTCHA solved, no evasion; affected checks completed later or honestly recorded as `unknown`.
- **Batch 1:** 5 businesses selected (2 Quận 4 + 3 Bình Thạnh), ranked by identity strength (multi-source/registry), recent activity proxies and address completeness; both pilot districts covered. Five personalized drafts prepared with per-send checklists; 3 alternates named. Details in the private ledger only.
- **Scores:** all batch-1 leads 5/10 preliminary (web-side evidence caps activity/pain/contact-basis scoring by design; operator verification can raise them). No candidate reached the ≥8 priority line — expected for web-only evidence, recorded per playbook.
- **Quota (all runs, all time):** 0 candidates contacted, 0 sends in any state; 0/5 used in the rolling 60-minute window.
- **Next action (operator, human):** per-draft checklist in the private ledger — verify page identity, the About website field, and 30–90-day activity on Facebook; fill sender name; journal `prepared → authorized → submitting` before each Send; send once, read back, log outcome. Agent records operator-reported evidence (`evidence_origin=operator`) and supports replies/meeting prep. Agent-controlled Facebook access remains closed (`policy_unverified`).

## Branch reconciliation — 2026-10-08

The following upstream records are retained alongside the local history. Dated storage/status observations describe their individual runs.

## 2026-10-07 — Facebook method-permission recheck

- **Scope:** read current platform-method gate after the repository instructions explicitly authorized a bounded pilot on the existing Facebook account. This did not open a fanpage/inbox, create a prospect, or send contact.
- **Evidence:** Meta’s Facebook Help scraping article retrieved on 2026-10-07 defines automated collection from sites/interfaces built for people as scraping and describes enforcement against unauthorized collection. The official Facebook Terms endpoint returned a temporary-block/slow-down page during the source check, so the current terms text could not be verified through that route.
- **Decision:** user authorization for an account/scope does not itself prove Meta allows agent-driven browser collection. Leave `policy_gate=policy_unverified` for automated fanpage discovery/contact; do not continue Facebook UI collection or send. No account restriction is inferred from the web retrieval message.
- **Storage/duplicate gate:** the campaign templates still state no approved private prospect/action ledger is configured. Do not put lead/page identifiers in Git. `docs/seo/GOAL_PROMPT.md` remains a planning prompt, not an activated execution ledger.
- **Next:** continue owned-site/Search Console read-only work; revisit Facebook only after the exact automated method permission and private storage/basis gates are evidenced. No policy workaround was attempted.

### RUN-037 — Direct Facebook Terms readback

- **Time:** 2026-10-07 09:25 +07:00. Read-only, in the existing signed-in browser; opened the official Terms of Service and read its displayed 2025-01-01 effective date and section 3.2.
- **Finding:** §3.2(3) says automated access to or collection of data from Meta Products requires Meta’s prior permission, whether logged in or not. §3.2(2) prohibits spam. This directly blocks agent-driven fanpage discovery/collection and automated Messenger outreach absent exact Meta permission. The user-authorized pilot scope is a separate gate and does not override this method restriction.
- **Scope observed:** Terms page only. No fanpage/inbox opened, prospect record made, contact sent, account setting changed, or lead data stored.
- **Correction to earlier research note:** the prior “temporarily blocked/going too fast” message came from the web lookup path. Direct browser readback succeeded; that retrieval message was not a Facebook account restriction.
- **State:** Facebook agent execution remains stopped at `policy_unverified` until exact Meta permission is documented. Continue owned-site/SEO work and use only lawful, permitted non-Meta research or properly supplied human notes. No workaround attempted.
