# MindReply

MindReply now includes a production-ready **Campaign Concept Studio** alongside the existing product surfaces. The studio lets marketing teams enter a short brief, target audience, product details, tone, and channels, then generates a concise campaign concept, five copy variants, a launch checklist, image prompts, and generated images.

## Campaign Studio

Route: `/campaign-studio`

The studio uses server-side OpenAI calls only. The client sends campaign inputs to a Next.js API route, and the server uses the OpenAI Responses API for structured text generation and the image API for creative direction assets.

## What is included

- Next.js frontend with app routes and health checks
- Express backend with `/health`, admin chat, connectors, and analytics endpoints
- Campaign concept studio UI with loading, error, and empty states
- Structured campaign generation with copy variants, checklist, and image prompts
- Image generation for campaign direction visuals
- Stripe, Anthropic, Google, Clerk, Sentry, and Neon/Postgres integration points
- Docker, Docker Compose, and Kubernetes deployment assets
- GitHub Actions automation for CI, security, and deployment

## Environment variables

Use `.env.example` as the source of truth. At minimum, set:

- `OPENAI_API_KEY`
- `OPENAI_TEXT_MODEL` (default: `gpt-5.5`)
- `OPENAI_IMAGE_MODEL` (default: `gpt-image-2`)
- existing app runtime variables for auth, database, analytics, and deployment

## Install

```bash
corepack enable
pnpm install
```

## Run

```bash
pnpm dev
```

Open the campaign studio at:

```bash
/campaign-studio
```

## Validate

```bash
bash automation/scripts/validate.sh
bash automation/scripts/security.sh
```

## Deploy

The repository uses `main` as the canonical production branch. Production validation runs through GitHub Actions, and the deploy step is intentionally separated from client-side code.

## Tuning points

Adjust these later in `app/api/campaign-studio/generate/route.ts`:

- text model selection
- prompt instructions
- structured output schema
- image model selection
- image size and count

## Validation plan

- Empty input is rejected before the API call
- Structured JSON is validated on the server
- Image generation failures return partial results instead of breaking the whole response
- The client displays loading, error, and empty states

## Deployment notes

- Keep `OPENAI_API_KEY` server-side only
- The client never calls OpenAI directly
- Use the campaign studio route as the only backend boundary for generation
- Confirm `/api/health` and `/health` before release

## Production layout

This repo is best treated as a single source of truth with these lanes:

- `main` for production-ready code
- feature branches for changes
- GitHub Actions for validation and deployment
- Vercel for the Next.js frontend
- container/Kubernetes assets for environments that need them

## Notes

The repository already contains multiple deployment scripts and migration notes. The goal of this cleanup is to keep the canonical path simple: documented setup, validated CI, and one clear production flow.
