# Lumi Local editor owner handoff

Owner: **hong@runlumi.app**. On 2026-10-06, the owner reported passkey registration and successful sign-in. Production D1 readback confirmed one enabled administrator with that email, a registered passkey and completed setup. The live setup-status API also returned `needsSetup: false`. No passkey, session or recovery material was retrieved by the operator.

The owner explicitly approved temporary setup access before it was enabled. After registration was verified, the operator set the encrypted production `BLOG_ADMIN_READY` marker to the string `true`, deleted `BLOG_SETUP_TOKEN` and deleted the private 0600 handoff file. Existing enquiry secrets and the production CMS binding were preserved. Redeploy Pages after these configuration changes; check the normal sign-in flow on both production hostnames.

## Using the editor

Open [the production editor](https://local.runlumi.app/_emdash/admin) on the final custom-domain HTTPS origin and sign in with the registered passkey. A temporary HTTP Basic password is no longer part of the current production configuration. The ten reviewed guides are already published; EmDash/D1 is the editorial source. Do not overwrite live edits with the release seed or copy a local development administrator into production.

Keep passkeys, recovery information, device PINs and session cookies out of chat, Git and logs. The human owner performs any additional passkey registration. Operator verification of a database record is separate from the owner's report of successful browser sign-in.

## Releasing future changes

Public blog pages read published content without an editor session. Static service/industry pages and the enquiry endpoint remain separate from CMS authentication. Preserve the existing enquiry secret, private research protection and disconnected preview CMS binding.

After deployment, verify anonymous editor navigation reaches normal EmDash sign-in, anonymous content-management APIs deny access, development bypass remains disabled, completed setup cannot be claimed again, and public VI/EN guides, feeds, sitemap and service pages work. Do not claim email delivery, rankings or sales from these checks.

## Fresh-install procedure

For a different, unclaimed production database, keep first-admin setup inaccessible until the human explicitly authorizes the temporary credential's access and storage scope. The initial attempt in this release was rejected by automatic approval review; it made no credential change. The owner subsequently approved the precise scope. Do not infer permission for a future installation from this historical approval.

Bootstrap a fresh seed-only database with no development identities. Save any approved temporary setup credential only as an encrypted Pages secret and a private owner-readable handoff file. Verify the protected wizard on both production hostnames. The human registers a passkey at the final custom-domain origin. Only after the intended enabled administrator, registered credential, completed setup and human sign-in are verified should the operator set readiness, remove temporary access and redeploy. Keep the editor locked if these checks fail.

## Research workspace uses the same sign-in — 2026-10-06

The private keyword research at [/data/](https://local.runlumi.app/data/) no longer has its own password. Open it while signed in to the editor as an administrator; if you are signed out, it sends you to the editor's passkey sign-in and returns you to `/data/`. Editors below administrator are refused. “Sign out” on the research page also signs you out of the editor. To grant or remove research access, change the person's EmDash role.
