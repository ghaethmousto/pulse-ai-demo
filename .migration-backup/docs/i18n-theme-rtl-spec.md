# Pulse AI — Theme, Language, and RTL Specification

## Required behavior

The app must support four combinations from day one:

1. English + Light
2. English + Dark
3. Arabic + Light
4. Arabic + Dark

All four combinations must be usable and visually polished.

## Locale routing

Use locale-prefixed routes:

- `/en`
- `/ar`
- `/en/dashboard`
- `/ar/dashboard`

Default locale: `en`.

## Translation files

Create:

```text
messages/en.json
messages/ar.json
```

Rules:

- No hardcoded visible UI text in components.
- Navigation labels, page titles, CTAs, badges, statuses, and empty states must use translations.
- Arabic translation must be executive-grade Arabic, not literal machine translation.

## Direction rules

English:

```html
<html lang="en" dir="ltr">
```

Arabic:

```html
<html lang="ar" dir="rtl">
```

RTL must affect layout, not only text. Claude must check:

- Text alignment
- Sidebar position and navigation flow
- Margins/paddings
- Directional icons
- Timeline direction when necessary
- Floating AI panel placement if direction-specific
- Carousels/arrows

## Theme rules

Use `next-themes`.

Tailwind config:

```ts
darkMode: "class"
```

Recommended CSS variable strategy:

```css
:root {
  --background: 40 30% 98%;
  --foreground: 240 10% 8%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 8%;
  --muted: 35 18% 92%;
  --muted-foreground: 240 4% 42%;
  --border: 35 14% 86%;
  --accent: 348 76% 30%;
  --accent-foreground: 0 0% 100%;
}

.dark {
  --background: 240 10% 4%;
  --foreground: 0 0% 96%;
  --card: 240 8% 8%;
  --card-foreground: 0 0% 96%;
  --muted: 240 6% 14%;
  --muted-foreground: 240 5% 72%;
  --border: 240 6% 18%;
  --accent: 348 76% 42%;
  --accent-foreground: 0 0% 100%;
}
```

## Required components

Claude should create:

```text
components/theme-toggle.tsx
components/language-toggle.tsx
components/providers/theme-provider.tsx
components/providers/app-providers.tsx
```

If Lenis is used:

```text
components/providers/lenis-provider.tsx
```

## Acceptance checks

Claude must confirm:

- Theme toggle works.
- Language toggle works.
- `/en` and `/ar` routes render.
- Arabic routes use `dir="rtl"`.
- English routes use `dir="ltr"`.
- No major layout break in RTL.
- Build succeeds.
