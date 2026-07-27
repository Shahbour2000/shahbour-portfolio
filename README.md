# Abdallah Shahbour — Portfolio

Premium personal-brand portfolio for Abdallah Shahbour, Visual Designer. Next.js 16 (App Router) + TypeScript + Tailwind v4, with English/Arabic localization and full RTL support architected in from the foundation.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 — CSS-first tokens in `src/app/globals.css`
- **Motion:** [Motion](https://motion.dev) (`motion/react`)
- **i18n:** next-intl — English default, Arabic architected in, RTL-ready
- **Deployment:** Vercel

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` (English) or `http://localhost:3000/ar` (Arabic, RTL).

## Project structure

```
src/
  app/[locale]/   Routes — everything lives under the locale segment
  components/ui/  Design-system primitives (Button, Container, Section, Typography…)
  content/        Editable content — nav, experience, skills, tools, socials, site meta
  theme/          Typed accessors over the CSS design tokens
  i18n/           next-intl routing, request config, locale-aware navigation
  types/          Shared TypeScript types
messages/         en.json / ar.json translation strings
```

## Status

Built in phases per the project documentation (`PROJECT_SPEC.md`, `DESIGN_SYSTEM.md`, `ARCHITECTURE.md`, `MASTER_PROMPT.md`). Phase 1 (Foundation) and Phase 2 (Design System) are complete and verified (`npm run build` / `npm run lint` both pass clean). Phase 3 (Global Layout — Navbar, Footer) is next.
