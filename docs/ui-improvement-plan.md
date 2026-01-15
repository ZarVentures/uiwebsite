## Urban Innovation Website – UI/UX Improvement Plan

### 1. Assess Current State

1. **Baseline UX & performance audit**
   1. Open the site on desktop and mobile (Chrome DevTools: iPhone/Pixel/iPad breakpoints).
   2. Run Lighthouse (Performance, Accessibility, Best Practices, SEO) on key pages.
   3. Note slow elements: large images, blocking scripts, layout shifts (CLS).
   4. Document key flows: Home → Portfolio → Services → Contact.

2. **Design system inventory**
   1. Confirm brand palette (gold, neutrals, dark navy) and typography hierarchy.
   2. List reusable patterns: hero, section headers, cards, grids, CTAs, forms, footer.
   3. Identify inconsistencies in spacing, fonts, and colors across pages.

### 2. UI Component & Layout System

3. **Design tokens (Tailwind theme)**
   1. Finalize color palette (primary, accent, neutral, success/warning/error).
   2. Lock in type scale, line heights, spacing scale, radii, and shadow levels.
   3. Encode tokens in Tailwind config / CSS variables and remove ad‑hoc hex colors.

4. **Layout primitives**
   1. Create `PageShell` for max‑width container and global page padding.
   2. Create a reusable `Section` component (props: `variant`, `id`, `className`).
   3. Standardize vertical rhythm between sections (e.g., 40–64px depending on viewport).

5. **Hero & card components**
   1. Implement `PageHero` (badge, title, subtitle, background image, overlay).
   2. Implement `InfoCard` / `ServiceCard` / `ValueCard` using shared base styles.
   3. Replace page‑specific hero and card markup with these components.

### 3. Visual Polish & Premium Feel

6. **Hero sections**
   1. Ensure all heroes use consistent padding, overlay strength, and text alignment.
   2. Use high‑quality, compressed hero images with consistent art direction.
   3. Ensure primary CTA is clear on Home; secondary CTAs as needed on inner pages.

7. **Typography & spacing**
   1. Enforce a clear heading hierarchy (H1/H2/H3) and avoid oversized long headings on mobile.
   2. Normalize paragraph max‑widths (~60–75 characters) for readability.
   3. Tighten or expand white space where needed to balance density vs. luxury feel.

8. **Micro‑interactions**
   1. Use consistent hover/focus styles for links, buttons, and cards.
   2. Keep animations subtle (150–250ms, `ease-out`) and avoid layout jumps.
   3. Ensure focus-visible states are keyboard friendly and visually on‑brand.

### 4. Performance & Load Time

9. **Image optimization**
   1. Convert hero/portfolio images to WebP (keep JPEG fallback if needed).
   2. Use `next/image` with accurate `sizes`, `priority` only for topmost hero, lazy‑load others.
   3. Compress all images (target < 200–300 KB for heroes, smaller for cards/thumbnails).

10. **Bundle & dependency hygiene**
    1. Import only used icons/components; avoid `* as` icon imports.
    2. Remove unused components and dead code.
    3. Verify tree‑shaking is effective via Next.js build output.

11. **CSS / Tailwind cleanup**
    1. Confirm Tailwind content paths to ensure unused utilities are purged in production.
    2. Replace custom CSS rules with Tailwind utilities where appropriate.
    3. Remove any legacy or redundant global styles.

### 5. SEO & Semantic HTML

12. **Metadata & head tags**
    1. Configure per‑page `title` and `meta description`.
    2. Add Open Graph and Twitter Card metadata for key pages.
    3. Ensure canonical URLs and favicon configuration are correct.

13. **Semantic and accessible markup**
    1. Use semantic tags: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`.
    2. Maintain logical heading order (single H1 per page).
    3. Provide descriptive `alt` text for content images; use `alt=""` for decorative ones.

14. **Internal linking & discoverability**
    1. Ensure all important sections/pages are reachable via header/footer navigation.
    2. Use descriptive anchor text for internal links.
    3. Add or verify XML sitemap and robots.txt (via Next.js/Amplify config).

### 6. Accessibility & Mobile Responsiveness

15. **Responsive layout checks**
    1. Test at 320, 375, 414, 768, 1024, 1280, 1440 widths.
    2. Fix any overflow, clipping, or awkward wrapping on small screens.
    3. Ensure tap targets are large enough and spaced for touch devices.

16. **Accessibility testing**
    1. Run Lighthouse + axe DevTools to identify contrast and ARIA issues.
    2. Test full keyboard navigation (Tab/Shift+Tab, Enter/Space on interactive elements).
    3. Add ARIA labels where needed (e.g., social icon group, hero landmarks).

### 7. AWS Amplify & Cost Optimization

17. **Build & hosting optimization**
    1. Confirm production builds use `next build` with no dev‑only flags.
    2. Ensure static assets are cached aggressively (via Amplify/CloudFront defaults).
    3. Enable gzip/brotli compression (usually automatic with CloudFront).

18. **Asset & usage review**
    1. Track bandwidth for large assets; consider CDN/S3 offload if they grow.
    2. Limit unnecessary third‑party scripts that add cost and latency.
    3. Restrict CI/CD triggers to relevant branches (e.g., `main`) to save build minutes.

### 8. Regression Testing & Quality Gates

19. **Regression pass**
    1. Manually test navigation across all pages (desktop + mobile).
    2. Verify hero images, cards, portfolio filters, and contact form interactions.
    3. Confirm there are no console errors or hydration issues.

20. **Final quality gate**
    1. Re‑run Lighthouse; aim for Performance ≥ 80, Accessibility ≥ 90, SEO ≥ 90.
    2. Capture before/after metrics and screenshots.
    3. Log remaining nice‑to‑have improvements as backlog items for future iterations.


