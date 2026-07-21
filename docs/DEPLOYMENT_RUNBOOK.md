# DEPLOYMENT RUNBOOK

## Build

`powershell
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org
pnpm install
pnpm build
`

## Deploy (Vercel CLI)

`powershell
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org
vercel deploy --prod --yes
`

## Deploy (Git Push)

Push to main branch. Vercel Git integration auto-deploys.

## Verify

`powershell
# Check HTTP status
Invoke-WebRequest -Uri https://www.mind-reply.com -UseBasicParsing | Select StatusCode

# Check Vercel deployment
vercel deployments list mindreply --limit 1
`

## Escalation

| Issue | Action |
|-------|--------|
| Build fails | Check pnpm build locally, fix type errors |
| Domain 530 | Verify domain assignment in Vercel dashboard |
| 404 on root | Check app/page.tsx exists |
| Vercel login | ercel login |
| GitHub login | gh auth login |
| DNS issues | Vercel dashboard ? Domains ? mind-reply.com |
