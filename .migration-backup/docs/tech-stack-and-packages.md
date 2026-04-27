# Pulse AI — Technical Stack & Packages

## Required package install

Install these before or during implementation:

```bash
npm install next-themes next-intl motion framer-motion embla-carousel-react lenis lucide-react clsx tailwind-merge class-variance-authority
```

Recommended shadcn setup:

```bash
npx shadcn@latest init
```

Recommended shadcn components to add later:

```bash
npx shadcn@latest add button card badge tabs dialog dropdown-menu sheet tooltip separator scroll-area input textarea select table
```

## Why these packages are included

| Package | Purpose | Usage rule |
|---|---|---|
| `next-themes` | Dark/light mode | Required globally |
| `next-intl` | EN/AR localization | Required globally |
| `motion` | New React animations | Preferred for new motion work |
| `framer-motion` | Aceternity compatibility | Use only if copied snippets require it |
| `embla-carousel-react` | Smooth carousel sections | Storytelling only, not critical data |
| `lenis` | Smooth landing scroll | Landing only, avoid dashboards/forms/tables |
| `lucide-react` | Icons | Main icon system |
| `clsx` / `tailwind-merge` | Class composition | Required for clean components |
| `class-variance-authority` | Component variants | Buttons/cards/badges variants |
| `shadcn/ui` | Base component layer | Use as foundation, not as generic look |
| `Aceternity UI` | Premium animated sections | Selective use only, must adapt to brand |

## Required package.json scripts

Claude should add or verify:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  }
}
```

If `next lint` is not supported by the current Next.js version, use the project's working lint command and report it.
