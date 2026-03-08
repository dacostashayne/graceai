# GraceAI

Dark biblical-themed PWA scaffold for Catholic mental wellness and discipleship.

## Run locally

```bash
npm install
npm run dev
```

## Install on GitHub (publish this project)

1. Create a new empty repository on GitHub (for example: `your-org/graceai`).
2. In this project directory, connect the remote and push:

```bash
git remote add origin https://github.com/<owner>/<repo>.git
git branch -M main
git push -u origin main
```

If you prefer SSH:

```bash
git remote add origin git@github.com:<owner>/<repo>.git
git branch -M main
git push -u origin main
```

## Enable CI on GitHub

A GitHub Actions workflow is included at `.github/workflows/ci.yml`.
It automatically runs:
- `npm ci`
- `npm run lint`
- `npm run build`

on pushes and pull requests.

## Required environment variables

Set these in your local `.env.local` and in GitHub repository settings (Settings → Secrets and variables → Actions) when needed:

```env
ANTHROPIC_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
RESEND_API_KEY=
```

## Highlights

- Next.js 14 App Router + Tailwind UI in dark cathedral palette
- Onboarding, dashboard, Grace chat, journal, weapons, identity, community, crisis, donation pages
- Client + server crisis detection flow
- Claude chat API route with exact system prompt from spec
- Stripe donation endpoint stub
- PWA manifest + icons
- Supabase schema SQL included in `supabase-schema.sql`
