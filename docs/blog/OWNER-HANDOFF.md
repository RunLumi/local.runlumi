# Lumi Local editor owner handoff

Owner selected by the user: **hong@runlumi.app**. Public release is live. **Editor registration is not complete**: first-admin routes are deliberately locked while temporary credential approval is pending. No setup credential has been created or saved.

## Before registration

Approve the pending request to generate a temporary setup credential, save it as encrypted Cloudflare Pages secret `BLOG_SETUP_TOKEN` and in a local file readable only by the owner account, and delete it after registration. This approval is separate from the already completed code release. Automatic approval review rejected the earlier attempt because the credential's access and storage scope was not explicit. Do not work around that rejection or remove the lock.

After explicit approval, the operator will create the temporary credential, deploy the protected setup configuration and verify the guard on both the custom domain and Pages alias. The owner receives the credential through the approved private handoff file, never Git, logs, command arguments or a public URL. Keep the setup token separate from the EmDash passkey.

## Owner actions after setup access is enabled

1. Open [the production setup page](https://local.runlumi.app/_emdash/admin/setup) on the final HTTPS origin. If challenged by temporary HTTP Basic access, use username `owner` and the credential from the private handoff file. A current 503 means setup access has not been enabled; it is not an instruction to disable protections.
2. Follow the EmDash setup wizard. Use the Lumi Local site title. The ten reviewed guides are already seeded; avoid overwriting editorial content. Use `hong@runlumi.app` for the first administrator.
3. Register a passkey using your own device, biometric prompt, security key or trusted passkey manager. The human owner performs this step; an agent must not create a credential on the owner's behalf. Do not send the passkey, recovery information or device PIN into chat.
4. Confirm the editor opens and shows the existing articles, then tell the operator registration is finished. Do not publish a synthetic article or send an email solely for setup proof.

## Operator verification and closing temporary access

Read back the intended administrator and completed setup state through authorized server-side access, without printing passkey/session/token material. Confirm successful owner login at the final custom-domain origin. Only after this proof, set the server-side `BLOG_ADMIN_READY` marker to the string `true`, remove `BLOG_SETUP_TOKEN`, remove the approved temporary credential file and redeploy Pages. Preserve all existing enquiry/research secrets.

Check that anonymous editor navigation goes to the normal EmDash sign-in flow; anonymous content-management APIs deny access; development bypass is disabled; the owner can sign in; and VI/EN blog, feeds, sitemap, service pages and private research guards still work. Actual HTTPS WebAuthn registration and owner login are separate from local admin/browser proof.

## Public release versus editor readiness

Public blog pages read published content from EmDash/D1 and do not require an editor session. Service/industry pages and enquiry intake are already released. No token or readiness flag is necessary merely to read them. Keep the editor locked if registration cannot be completed. Do not claim a first-admin account exists, set readiness early, expose an unclaimed wizard, or copy the local development admin database into production.
