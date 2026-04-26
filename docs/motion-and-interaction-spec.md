# Pulse AI — Motion & Interaction Specification

## Motion philosophy

Pulse AI should feel premium, calm, intelligent, and alive. Motion must support clarity and product storytelling. It should not feel like a visual effects demo.

## Use motion for

- Hero reveal
- Feature cards reveal
- Executive dashboard metric reveal
- Floating AI assistant entrance and micro-interactions
- Project Pulse line/timeline movement
- Hover lift on cards/buttons
- Section transitions on landing page

## Avoid

- Excessive bounce
- Random parallax
- Heavy scroll-jacking
- Large blur animations that hurt readability
- Animating every element
- Delayed animations that make the app feel slow

## Package usage

Preferred for new components:

```ts
import { motion } from "motion/react";
```

Use `framer-motion` only when copied components, especially Aceternity UI snippets, require it.

## Lenis rules

Lenis may be used only for marketing/landing pages.

Do not apply Lenis to:

- Dashboard tables
- Modal dialogs
- Dropdowns
- Scrollable panels
- Forms
- Mobile pages if it causes scroll bugs

## Embla Carousel rules

Use Embla only for:

- Product module carousel
- Case study carousel
- Screenshot/gallery carousel
- Platform journey carousel

Do not hide important dashboard data in carousels.

## Aceternity UI usage

Allowed selectively for:

- Hero background
- Spotlight / background beams
- Animated cards
- Sticky scroll reveal
- Premium landing storytelling sections

Rules:

- Must be adapted to Pulse brand tokens.
- Must support dark/light mode.
- Must support Arabic RTL.
- Remove unnecessary effects.
- Do not make the site look like an Aceternity component gallery.
