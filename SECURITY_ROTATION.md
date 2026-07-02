# Security Rotation Status

Last audited: 2026-07-02 (agent/go-live-cleanup)

## Secret Inventory

| Secret Name | Source | Committed to Repo? | Rotation Needed | Status |
|---|---|---|---|---|
| `STRIPE_SECRET_KEY` | Stripe Dashboard | NO — referenced in docs as placeholder only (`sk_live_...`) | YES — rotate if key predates this audit | UNKNOWN — owner must verify |
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard | NO | YES — rotate if key predates this audit | UNKNOWN — owner must verify |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Dashboard | NO | LOW — publishable keys are public by design | UNKNOWN — owner must verify |
| `OPENAI_API_KEY` | OpenAI Platform | NO | YES — rotate if key predates this audit | UNKNOWN — owner must verify |
| `ANTHROPIC_API_KEY` | Anthropic Console | NO | YES — rotate if key predates this audit | UNKNOWN — owner must verify |
| `GOOGLE_CLIENT_ID` | Google Cloud Console | NO | NO — client IDs are not secret | OK |
| `GOOGLE_CLIENT_SECRET` | Google Cloud Console | NO | YES — rotate if key predates this audit | UNKNOWN — owner must verify |
| `GOOGLE_REDIRECT_URI` | Google Cloud Console | NO | NO — not a secret | OK |
| `CLERK_SECRET_KEY` | Clerk Dashboard | NO | YES — rotate if key predates this audit | UNKNOWN — owner must verify |
| `CLERK_WEBHOOK_SECRET` | Clerk Dashboard | NO | YES — rotate if key predates this audit | UNKNOWN — owner must verify |
| `DATABASE_URL` | Hosting provider | NO | YES — rotate DB password if it predates this audit | UNKNOWN — owner must verify |
| `JWT_SECRET` | Self-generated | NO | YES — must be strong random value (>= 32 chars) | UNKNOWN — owner must verify |
| `ADMIN_PASSWORD` | Self-generated | NO | YES — must be strong random value | UNKNOWN — owner must verify |
| `ADMIN_TOKEN_SECRET` | Self-generated | NO | YES — must be strong random value (>= 32 chars) | UNKNOWN — owner must verify |
| `SENTRY_DSN` | Sentry Dashboard | NO | NO — DSNs are safe to expose | OK |
| `SENTRY_AUTH_TOKEN` | Sentry Dashboard | NO | YES — rotate if token predates this audit | UNKNOWN — owner must verify |
| `VERCEL_TOKEN` | Vercel Dashboard | NO | YES — rotate if token predates this audit | UNKNOWN — owner must verify |
| `VERCEL_ORG_ID` | Vercel Dashboard | NO | NO — not a secret | OK |
| `VERCEL_PROJECT_ID` | Vercel Dashboard | NO | NO — not a secret | OK |

## .next/ Build Artifacts

**STATUS: REMOVED FROM VERSION CONTROL**

The `.next/` directory (39 files including webpack cache, build manifests, compiled pages) was committed to the repository. These build artifacts can leak internal paths and configuration.

- **Action taken:** `git rm -r --cached .next/` — removed from tracking
- **`.gitignore` already contained `.next/`** but files were added before the ignore rule existed
- **`tsconfig.tsbuildinfo`** also removed from tracking; `*.tsbuildinfo` added to `.gitignore`

## .env Files

**STATUS: NOT COMMITTED**

No `.env` files with actual values are tracked. `.env.example` and `.env.template` exist with empty/placeholder values only.

## Docs Referencing Secrets

Multiple documentation files reference secret key patterns (e.g., `sk_live_...`, `sk_test_...`) as placeholders. No actual secret values were found committed anywhere in the tracked files.

## GitHub Secrets

A token is stored in GitHub Secrets for this repo (per owner statement).

- Secret name: UNKNOWN — owner must verify
- Permission scope: UNKNOWN — owner must verify
- Rotation needed: UNKNOWN — owner must verify provenance and scope
- Recommendation: Replace with fine-grained PAT or GitHub App installation token scoped to required repos only

## Required Owner Actions

1. Verify all secrets listed above are current and not compromised
2. Rotate any secret that predates this audit or has unknown provenance
3. Verify GitHub Secrets token name, scope, and provenance
4. Confirm `ADMIN_PASSWORD` and `JWT_SECRET` are strong random values (not defaults)
5. After rotation, update secrets in all deployment environments (Vercel, Railway, etc.)
