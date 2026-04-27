# Claude Code First Prompts

## Prompt 1 — Plan only

```text
You are working on the Pulse AI demo web app.

Do not edit files yet.

Read:
- CLAUDE.md
- design/claude-design-handoff/html/Pulse Wireframes.html
- design/claude-design-handoff/jsx/
- design/wireframes/screenshots/
- design/reference-ui/pulse-design-tokens.css
- design/reference-ui/images/
- docs/product-brief.md
- docs/brand-tokens.md
- docs/acceptance-criteria.md

Task:
Analyze the design handoff and existing reference files.

Return:
1. Your understanding of the product
2. The intended landing page structure
3. Component architecture
4. Design system interpretation
5. Implementation plan
6. Files you expect to create or modify
7. Risks or missing information
8. Exact execution steps

Do not write code yet.
```

## Prompt 2 — Landing page only

```text
Proceed with implementation of the landing page only.

Use the Claude Design handoff, JSX wireframes, screenshots, and design tokens as the primary reference.

Requirements:
- Match the landing page structure and visual hierarchy from the design.
- Use the official Pulse colors and typography rules.
- Build with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons where useful.
- Create reusable components.
- Make it responsive for desktop, tablet, and mobile.
- No lorem ipsum.
- No backend.
- No authentication.
- Do not implement internal app pages yet unless required for navigation placeholders.

Before finishing:
- Run npm install if needed.
- Run npm run lint if available.
- Run npm run build.
- Fix all errors you can.

Final response:
- Files changed
- Components created
- Commands run
- Build result
- Remaining limitations
```

## Prompt 3 — Internal demo app

```text
Now implement the internal demo app pages.

Required routes:
- /dashboard
- /projects
- /projects/[id]
- /pulse
- /tasks
- /approvals
- /reports
- /settings

Use realistic UAE construction project mock data.

The app must show:
- Project health
- Delay status
- Approvals
- Tasks
- Site reports
- AI summaries
- Risk levels
- Project Pulse timeline
- Floating AI assistant panel

Keep the visual system consistent with the landing page and design handoff.

Run build and fix all errors before final response.
```

## Prompt 4 — Premium polish

```text
Perform a premium UI polish pass.

Goal:
Make the app feel like a high-end Apple-level construction intelligence platform, not a generic SaaS template.

Improve:
- First impression
- Spacing
- Typography
- Card depth
- Shadows
- Glass effects
- Color discipline
- Button states
- Hover states
- Motion
- Mobile responsiveness
- Dashboard density
- Landing page storytelling
- Visual consistency across all routes

Do not change the product concept.
Do not remove approved content.
Do not add random colors.
Keep the wine-red / black / white / gray direction.

Run build after changes and fix errors.
```

## Prompt 5 — QA + PR

```text
Run a final QA pass and prepare a clean pull request.

Check:
- Broken routes
- Build errors
- TypeScript errors
- Lint errors
- Mobile responsiveness
- Placeholder text
- Missing content
- Visual inconsistencies
- Unused components
- Generic-looking sections
- Deployment readiness for Vercel

Fix what you can.

Then prepare a PR summary with:
- Clear title
- Summary
- Test results
- Known limitations
```
