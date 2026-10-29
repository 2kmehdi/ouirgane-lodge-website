---
name: premium-animation
description: Build an Awwwards-quality, editorial luxury hotel website for Ouirgane Discovery Lodge using the Atlas Green palette, GSAP, and Lenis.
---

# Design System: The Atlas Green Palette (Editorial Luxury & Soft Organic)
- **Colors (CSS Variables):**
  - `--deep-forest: #0B3D20;` /* Main dark background */
  - `--atlas-green: #277A4D;` /* Primary brand color, buttons */
  - `--sage: #74C69D;`        /* Accents, hover states */
  - `--pale-sage: #D8F3DC;`   /* Light background sections */
  - `--cream: #FFFDF5;`       /* Main text on dark, card backgrounds */
  - `--warm-earth: #F4EFE6;`  /* Secondary light background */
  - `--muted-gold: #C8A352;`  /* Premium accent, borders, icons */
  - `--charcoal: #1A1A1A;`    /* Body text on light sections */

- **Typography:**
  - Headings: Playfair Display (Serif, 600 weight) — Editorial luxury feel.
  - Body: Jost (Sans-serif, 400/500 weight) — Clean, elegant modernism.

# Motion & Interaction Rules
1. **Lenis & GSAP Sync:** Register ScrollTrigger FIRST. Drive Lenis solely from `gsap.ticker.add((time) => lenis.raf(time * 1000))`.
2. **Hero Parallax:** Background image starts scaled (1.15) and slowly zooms out to 1.0 while moving up with scroll scrub.
3. **Micro-interactions:** Scale 1.05 on hover with `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
4. **Experiences Bento Grid:** Portrait aspect cards with hover-zoom and sliding `--atlas-green` title drawer.
5. **Accessibility:** Respect `prefers-reduced-motion` — bypass parallax, heavy transforms, and instant display.
