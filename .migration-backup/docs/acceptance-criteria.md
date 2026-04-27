# Acceptance Criteria

The demo is accepted only when the following are true.

## General
- App runs locally.
- Main routes work.
- No obvious runtime errors.
- No lorem ipsum.
- No random placeholder UI.
- Main layout is responsive on desktop, tablet, and mobile.
- Build succeeds.

## Theme
- Dark mode works.
- Light mode works.
- Theme selection persists.
- Navigation/settings include a theme toggle.
- All cards, text, buttons, forms, charts, and panels remain readable in both themes.
- Light mode looks intentionally designed, not simply inverted.

## Language and RTL
- English and Arabic are implemented using `next-intl`.
- Routes are locale-prefixed: `/en` and `/ar`.
- English pages use `lang="en"` and `dir="ltr"`.
- Arabic pages use `lang="ar"` and `dir="rtl"`.
- User-facing strings come from translation files.
- Arabic copy is professional and executive-grade.
- RTL affects the layout, alignment, navigation, directional icons, and timeline behavior where needed.

## Landing page
- Uses the supplied Pulse wireframes and screenshots as the layout/design reference.
- Preserves the product narrative.
- First fold looks premium and presentation-grade.
- Uses official Pulse colors/tokens.
- Contains strong visual storytelling, not generic SaaS blocks.
- Works in EN/AR and dark/light.

## Internal app
- Dashboard shows executive KPIs and project health.
- Projects page has realistic project cards/table and filters.
- Project detail page shows status, delays, tasks, reports, documents, and AI summary.
- Project Pulse timeline shows planned vs actual progress, risks, delay/acceleration, and responsible party.
- Approvals, reports, tasks, and settings pages are implemented as believable demo pages.
- Floating AI assistant is visible and coherent with the product.
- Internal pages work in EN/AR and dark/light.

## Visual quality
- Consistent spacing, typography, buttons, cards, badges, and surface depth.
- Wine red is used with discipline.
- Glass and glow effects are refined, not excessive.
- Motion is purposeful and calm.
- Aceternity-style effects, if used, are adapted to Pulse brand and not copied blindly.
- Lenis does not break normal scrolling/forms/modals.
- Embla does not hide critical project data.

## Final report
Claude must report:
- Files changed
- Routes implemented
- Components created
- Commands run
- Build result
- Typecheck/lint result if available
- Remaining limitations
- Deployment notes


## Demo project — Al Reem Tower
- Al Reem Tower is the primary project across the demo.
- Data must come from `demo-data/al-reem-tower.json` or a consistent TypeScript adaptation of it.
- Dashboard, projects, project detail, pulse timeline, tasks, approvals, and reports must all reference the same Al Reem Tower data.
- Do not invent conflicting project metrics.

## Floating AI — Pulse
- Floating Pulse AI assistant appears on every route.
- Pulse has collapsed and expanded states.
- Pulse uses scripted Q&A from `demo-data/pulse-ai-demo-dialogues.json`.
- Pulse works in English and Arabic.
- Pulse supports RTL layout in Arabic.
- Pulse works in dark and light modes.
- Pulse is visually premium and consistent with `design/reference-ui/images/Floating Pulse.png`.
- Pulse must not be a dead decorative button; it must display demo questions and answers.
