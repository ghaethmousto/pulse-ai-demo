# Pulse AI Brand Tokens

Primary source: `design/reference-ui/pulse-design-tokens.css`.

## Core colors extracted from the provided design system

```css
--pulse-wine:         #8d354b;
--pulse-wine-light:   #b6546c;
--pulse-wine-glow:    #cf5976;
--pulse-wine-subtle:  #f0dfdf;
--pulse-wine-border:  rgba(141,53,75,0.22);
--pulse-maroon:       #6D2B28;
--pulse-maroon-deep:  #390e19;

--bg-base:      #f5f0ed;
--bg-surface:   #ffffff;
--bg-surface-2: #fdfbf9;
--bg-subtle:    #efe7e2;
--bg-muted:     #ede7e3;

--fg-primary:   #201d1a;
--fg-secondary: #453c3a;
--fg-tertiary:  #6f615b;
--fg-disabled:  #a09690;
--fg-on-accent: #ffffff;
```

## Typography

Use Raleway through `next/font/google` or an approved licensed font pipeline. Do not depend on local font binaries inside the repo unless licensing is explicitly cleared.

## Visual discipline

- Wine red is an accent, not a background blanket.
- Main UI should remain warm ivory / white / charcoal with disciplined red highlights.
- Avoid generic SaaS blues/purples.
- Cards should have refined depth, not heavy cheap shadows.
