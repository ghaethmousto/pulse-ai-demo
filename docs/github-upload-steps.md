# GitHub Upload Steps

## If you already have a project repo

Copy these folders/files into the root of your Next.js repo:

```text
CLAUDE.md
docs/
design/
public/assets/
messages/
starter-files/
```

Then run:

```bash
git add .
git commit -m "Add Pulse AI design handoff package"
git push
```

## If you need a new repo quickly

```bash
npx create-next-app@latest pulse-ai-demo --ts --tailwind --eslint --app
cd pulse-ai-demo
npm install next-themes next-intl motion framer-motion embla-carousel-react lenis lucide-react clsx tailwind-merge class-variance-authority
```

Copy the handoff files into the project root, then:

```bash
git init
git add .
git commit -m "Initial Pulse AI demo with handoff package"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```
