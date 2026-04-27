# Quick Start Before Work — 20 Minute Setup

This is the fastest safe path to make Claude Code start accurately.

## Option A — You already have a GitHub repo with Next.js

1. Download and unzip this handoff package.
2. Copy the following into the root of your repo:
   - `CLAUDE.md`
   - `docs/`
   - `design/`
   - `public/assets/`
   - `messages/` if present
   - `starter-files/` optional, as implementation references
3. Commit and push:

```bash
git add .
git commit -m "Add Pulse AI design handoff and Claude Code instructions"
git push
```

4. Open Claude Code Desktop.
5. Select `Code`.
6. Select `Remote` environment, not local.
7. Select your GitHub repo.
8. Create or use branch:

```text
feature/pulse-ai-demo-v1
```

9. Paste Prompt 00 from `docs/claude-code-fast-start-prompts.md`.
10. Wait for the plan. If it makes sense, paste Prompt 01.

## Option B — No repo yet

Create the app:

```bash
npx create-next-app@latest pulse-ai-demo --ts --tailwind --eslint --app
cd pulse-ai-demo
npm install next-themes next-intl motion framer-motion embla-carousel-react lenis lucide-react clsx tailwind-merge class-variance-authority
```

Optional shadcn:

```bash
npx shadcn@latest init
```

Copy this handoff package contents into the project root.

Then:

```bash
git init
git add .
git commit -m "Initial Pulse AI demo with design handoff"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Then open Claude Code Desktop and use Prompt 00.

## Fast command checklist

```bash
npm run build
```

If build passes before Claude starts, good. If it does not, Claude can fix it after setup.

## Critical instruction

Do not ask Claude to build everything in the first message.

Start with:
1. Plan only
2. Technical foundation
3. Landing page
4. Internal pages
5. Polish
6. QA
