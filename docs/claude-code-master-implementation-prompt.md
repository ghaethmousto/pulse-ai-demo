# Claude Code Master Implementation Prompt

```text
Proceed with implementation in controlled phases.

Use as source of truth:
- CLAUDE.md
- docs/
- design/claude-design-handoff/
- design/wireframes/screenshots/
- design/reference-ui/
- demo-data/al-reem-tower.json
- demo-data/pulse-ai-demo-dialogues.json

Core requirements:
1. Next.js App Router, TypeScript, Tailwind CSS.
2. next-intl with /en and /ar routes.
3. Real RTL layout for Arabic.
4. next-themes dark/light mode.
5. Landing page from wireframes and visual references.
6. Internal pages using Al Reem Tower as the primary project.
7. Floating AI assistant named Pulse on every page.
8. Scripted Q&A from demo-data/pulse-ai-demo-dialogues.json.
9. Premium motion with motion/react; do not over-animate.
10. Lenis only for landing smooth scroll if safe.
11. Embla only for storytelling carousels.
12. Aceternity UI selectively only if adapted to brand tokens.
13. Run lint/typecheck/build and fix errors.

Do not connect real backend or real AI API. Use mock data first.
```
