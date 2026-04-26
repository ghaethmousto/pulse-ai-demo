# Pulse AI — Claude Code Handoff Package Enhanced

This package contains the Pulse AI design handoff, Claude Code instructions, visual references, design tokens, screenshots, JSX references, and implementation prompts.

## Use this package by copying it into a Next.js repo root

Recommended stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- next-themes
- next-intl
- motion / motion-react
- Embla Carousel
- Lenis
- Lucide Icons

## Critical instruction

Claude Code must read `CLAUDE.md` first.

Then use:

```text
docs/claude-code-fast-start-prompts.md
```

Start with Prompt 00, then Prompt 01.

## Fast setup

Read:

```text
docs/quick-start-before-work.md
```

## Design sources

The main design sources are:

```text
design/claude-design-handoff/
design/wireframes/screenshots/
design/reference-ui/
design/reference-ui/pulse-design-tokens.css
```

## Do not upload local font files blindly

Use Raleway via `next/font/google` unless a licensed font pipeline is confirmed.


## Ultimate additions in this package

This version includes:

- Required demo project: **Al Reem Tower**
- Structured project data: `demo-data/al-reem-tower.json`
- Scripted Pulse AI demo Q&A: `demo-data/pulse-ai-demo-dialogues.json`
- Mandatory Floating AI spec: `docs/pulse-floating-ai-spec.md`
- Demo project brief: `docs/demo-project-al-reem-tower.md`
- Master implementation prompt: `docs/claude-code-master-implementation-prompt.md`
- Start-now checklist: `docs/claude-code-start-now-checklist.md`
- Example PulseFloatingAI component under `starter-files/components/`
- Message additions for English and Arabic

Core instruction: Claude Code must build the app bilingual, RTL-aware, theme-aware, and with Floating Pulse on every page.
