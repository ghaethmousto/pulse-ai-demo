# Claude Code — Fast Start Prompts

Use these prompts in order.

---

## Prompt 00 — Immediate setup + plan only

```text
You are working on the Pulse AI demo web app.

Do not edit files yet.

First, inspect the repository and read:
- CLAUDE.md
- docs/product-brief.md
- docs/brand-tokens.md
- docs/acceptance-criteria.md
- docs/tech-stack-and-packages.md
- docs/i18n-theme-rtl-spec.md
- docs/motion-and-interaction-spec.md
- docs/demo-project-al-reem-tower.md
- docs/pulse-floating-ai-spec.md
- docs/pulse-ai-demo-qa-bank.md
- demo-data/al-reem-tower.json
- demo-data/pulse-ai-demo-dialogues.json
- design/claude-design-handoff/
- design/wireframes/screenshots/
- design/reference-ui/

Return only:
1. Your understanding of the product.
2. The design system interpretation.
3. The implementation architecture.
4. Required packages and setup steps.
5. Exact file/folder changes you will make.
6. Risks or missing info.
7. A step-by-step execution plan.

Do not write code yet.
```

---

## Prompt 01 — Technical foundation

```text
Proceed with technical foundation setup only.

Implement:
1. Required packages from docs/tech-stack-and-packages.md.
2. next-themes dark/light mode.
3. next-intl with /en and /ar locale routing.
4. Dynamic html lang and dir attributes.
5. messages/en.json and messages/ar.json.
6. Theme toggle.
7. Language toggle.
8. App providers.
9. Tailwind dark mode class strategy.
10. Base design tokens / CSS variables.

Do not build the full landing page yet.

Run:
- npm run lint if available
- npm run typecheck if available
- npm run build

Fix errors you can.

Final report must include files changed, commands run, build result, and remaining limitations.
```

---

## Prompt 02 — Landing page implementation

```text
Now implement the landing page only.

Use the supplied Claude Design handoff, HTML wireframes, JSX references, screenshots, and Pulse design tokens as the primary references.

Requirements:
- Implement /en and /ar landing pages.
- Match the wireframe structure and visual hierarchy.
- Use approved content from translation files.
- Support dark/light mode.
- Support Arabic RTL.
- Use premium, subtle motion.
- Use Lenis only if it improves the landing page and does not break scrolling.
- Use Embla only if a carousel improves storytelling.
- Use Aceternity UI selectively only if it improves the premium feel.
- No lorem ipsum.
- No backend.
- No authentication.

Before finishing, run build and fix errors.
```

---

## Prompt 03 — Internal demo app pages

```text
Implement the internal demo pages:
- /en/dashboard and /ar/dashboard
- /en/projects and /ar/projects
- /en/projects/[id] and /ar/projects/[id]
- /en/pulse and /ar/pulse
- /en/tasks and /ar/tasks
- /en/approvals and /ar/approvals
- /en/reports and /ar/reports
- /en/settings and /ar/settings

Use Al Reem Tower as the primary demo project using demo-data/al-reem-tower.json.

Show:
- Project health
- Delay status
- Approvals
- Tasks
- Site reports
- AI summaries
- Risk levels
- Project Pulse timeline
- Floating AI assistant panel named Pulse on every page, using demo-data/pulse-ai-demo-dialogues.json

Keep design consistent with the landing page and reference UI.
Support dark/light and EN/AR RTL.
Run build and fix errors.
```

---

## Prompt 04 — Premium polish

```text
Perform a premium UI polish pass.

Goal: make the app look like an Apple-level construction intelligence platform, not a generic SaaS template.

Improve:
- First fold impact
- Spacing
- Typography
- Card depth
- Shadows
- Glass effects
- Color discipline
- Button states
- Hover states
- Motion
- RTL behavior
- Light mode quality
- Dark mode quality
- Mobile responsiveness
- Dashboard density
- Visual consistency across all routes

Do not change the product concept.
Do not remove approved content.
Do not add random colors.
Run build and fix errors.
```

---

## Prompt 05 — Final QA + PR

```text
Run final QA and prepare the branch for review.

Check and fix:
- Broken routes
- Build errors
- TypeScript errors
- Lint errors
- Mobile responsiveness
- Arabic RTL layout issues
- Dark/light contrast issues
- Placeholder text
- Missing content
- Visual inconsistencies
- Unused components
- Generic-looking sections
- Vercel deployment readiness

Final report:
1. App status
2. Files changed
3. Commands run
4. Build/typecheck/lint results
5. Known limitations
6. Deployment notes
7. Exact next recommended task
```


---

## Prompt 02B — Floating Pulse AI foundation

```text
Implement the mandatory floating AI assistant named Pulse.

Read:
- docs/pulse-floating-ai-spec.md
- docs/pulse-ai-demo-qa-bank.md
- demo-data/pulse-ai-demo-dialogues.json
- design/reference-ui/images/Floating Pulse.png

Requirements:
- Pulse must appear on every route.
- It must have collapsed and expanded states.
- It must show route-aware suggested questions.
- It must display scripted answers from the JSON file.
- It must support English and Arabic.
- It must support RTL in Arabic.
- It must support dark and light mode.
- Use logical CSS positioning, not hardcoded right/left.
- Do not integrate a real AI API yet.

Run build and fix errors.
```
