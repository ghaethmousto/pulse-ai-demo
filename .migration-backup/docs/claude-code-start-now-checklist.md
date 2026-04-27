# Start Now Checklist — Claude Code Remote

## 1. Create Next.js app

```bash
npx create-next-app@latest pulse-ai-demo --ts --tailwind --eslint --app
cd pulse-ai-demo
npm install next-themes next-intl motion framer-motion embla-carousel-react lenis lucide-react clsx tailwind-merge class-variance-authority
```

Optional:

```bash
npx shadcn@latest init
```

## 2. Copy this package into repo root

Required root content:

```text
CLAUDE.md
docs/
design/
demo-data/
messages/
starter-files/
public/assets/
```

## 3. Push to GitHub

```bash
git add .
git commit -m "Add Pulse AI Claude Code handoff package"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## 4. Claude Code Desktop

- Open Code
- Select Remote environment
- Select GitHub repo
- Use Opus if available
- Start with Prompt 00 from `docs/claude-code-fast-start-prompts.md`

Do not let Claude Code before it reads and plans.
