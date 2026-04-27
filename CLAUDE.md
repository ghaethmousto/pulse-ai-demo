# CLAUDE.md

## Project
Pulse AI demo web application.

## Objective
Build a premium, investor-grade web app demo for an AI-powered construction/project management platform. The app should show how consultants, contractors, owners, approvals, reports, delays, documents, risks, and AI summaries can be unified in one intelligent operating layer.

## Primary design sources
Read these before coding:

- `design/claude-design-handoff/html/Pulse Wireframes.html`
- `design/claude-design-handoff/jsx/`
- `design/wireframes/screenshots/`
- `design/reference-ui/pulse-design-tokens.css`
- `design/reference-ui/images/`
- `design/reference-ui/preview/`
- `docs/brand-tokens.md`
- `docs/product-brief.md`
- `docs/acceptance-criteria.md`
- `docs/i18n-theme-rtl-spec.md`
- `docs/motion-and-interaction-spec.md`
- `docs/tech-stack-and-packages.md`
- `docs/demo-project-al-reem-tower.md`
- `docs/pulse-floating-ai-spec.md`
- `docs/pulse-ai-demo-qa-bank.md`
- `demo-data/al-reem-tower.json`
- `demo-data/pulse-ai-demo-dialogues.json`

## Implementation standard
This must not become a generic SaaS template. Build a polished, premium, architecture/construction intelligence product.

Priority order:
1. Match the design intent and hierarchy from the supplied wireframes.
2. Use the visual system from the reference UI and design tokens.
3. Build dark/light mode and English/Arabic support from the beginning.
4. Build clean, reusable React components.
5. Keep the app demo-ready and presentation-grade.
6. Use realistic UAE/GCC construction project data.
7. Keep the first fold visually impressive.
8. Keep the internal app pages coherent with the landing page.

## Required technical stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui where useful
- `next-themes` for dark/light mode
- `next-intl` for English/Arabic localization
- `motion` / `motion/react` for new animations
- `framer-motion` only if needed by Aceternity UI snippets
- `embla-carousel-react` for storytelling carousels only
- `lenis` for landing-page smooth scrolling only
- `lucide-react` for icons
- `clsx`, `tailwind-merge`, `class-variance-authority` for component classes/variants
- Mock data first
- No backend unless explicitly requested
- No authentication unless explicitly requested

## Required routes
Use locale-prefixed routes:

- `/en`
- `/ar`
- `/en/dashboard` and `/ar/dashboard`
- `/en/projects` and `/ar/projects`
- `/en/projects/[id]` and `/ar/projects/[id]`
- `/en/pulse` and `/ar/pulse`
- `/en/tasks` and `/ar/tasks`
- `/en/approvals` and `/ar/approvals`
- `/en/reports` and `/ar/reports`
- `/en/settings` and `/ar/settings`

Default locale: `en`.

## Theme requirements
- Implement dark/light mode using `next-themes`.
- Use Tailwind `darkMode: "class"`.
- Add theme toggle in navigation and settings.
- Theme must persist between sessions.
- Every component must be readable and polished in both modes.
- Do not make light mode a weak inverted version of dark mode; tune surfaces, borders, contrast, and shadows separately through CSS variables.

## Localization and RTL requirements
- Use `next-intl`.
- No hardcoded user-facing text inside components.
- Put user-facing strings in `messages/en.json` and `messages/ar.json`.
- English pages use `lang="en"` and `dir="ltr"`.
- Arabic pages use `lang="ar"` and `dir="rtl"`.
- Arabic layout must be truly RTL, not only translated text.
- Directional icons/arrows must flip where needed.
- Avoid hardcoded `left` / `right` styling where logical properties or RTL-aware classes are possible.
- Arabic copy must be formal, professional, and suitable for executive/government presentation.

## Motion rules
- Use `motion/react` for new animations.
- Motion must be smooth, premium, subtle, and purposeful.
- Avoid excessive bounce, over-parallax, distracting scroll effects, and childish animations.
- Respect `prefers-reduced-motion` where feasible.
- Use Lenis only for the marketing/landing experience if it improves the feel. Do not apply it to dashboard tables, modals, dropdowns, or scrollable panels if it causes issues.
- Use Embla Carousel only for visual storytelling sections, not for critical business data.
- Aceternity UI components may be used selectively as inspiration/copy-paste components, but must be adapted to Pulse brand tokens and must support dark/light + EN/AR RTL.

## Visual rules
- Use Raleway via `next/font/google` or an approved font pipeline.
- Wine red / maroon is the primary accent.
- Base palette: warm ivory, white, charcoal, soft gray, controlled wine red.
- Avoid random colors.
- Avoid cartoon UI.
- Avoid overusing gradients.
- Use subtle glass, refined shadows, strong spacing, and precise hierarchy.
- The floating AI / Pulse elements should feel alive but not childish.

## Mandatory demo project
Use **Al Reem Tower** as the primary demo project across the entire application.

Source of truth:
- `demo-data/al-reem-tower.json`
- `docs/demo-project-al-reem-tower.md`

All internal pages must reference the same project data: dashboard, projects, project detail, Project Pulse timeline, tasks, approvals, reports, and Pulse AI assistant.

Do not create conflicting project numbers, dates, statuses, or names.

## Mandatory floating AI — Pulse
A floating AI assistant named **Pulse** must appear on every page.

Source of truth:
- `docs/pulse-floating-ai-spec.md`
- `demo-data/pulse-ai-demo-dialogues.json`
- `design/reference-ui/images/Floating Pulse.png`

Pulse must have collapsed and expanded states, route-aware suggested questions, scripted demo answers, EN/AR support, RTL support, and dark/light support.

If time is limited, implement scripted Q&A first and skip real AI API integration.

## Build rules
Before reporting completion:
- Run `npm run lint` if available.
- Run `npm run typecheck` if available. If missing, add a script such as `tsc --noEmit`.
- Run `npm run build`.
- Fix all errors you can.

## Final report required
Every coding task must end with:
1. Files changed
2. Components created or modified
3. Routes implemented
4. Commands run
5. Build/lint/typecheck result
6. Remaining limitations
7. How to run locally
8. Exact next recommended task
