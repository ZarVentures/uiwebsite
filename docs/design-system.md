## Urban Innovation Website – Design System

### 1. Brand Foundations

1. **Brand attributes**
   - Luxury, premium, contemporary, minimal.
   - Neutral base with gold accents and deep navy/dark backgrounds.

2. **Core principles**
   - High contrast for readability.
   - Generous spacing and clear hierarchy.
   - Subtle motion only; no distracting animations.

---

### 2. Color System

> Implementation: via CSS variables in `app/globals.css` and Tailwind theme extension.

1. **Base colors**
   - `background`: soft off‑white / cream.
   - `foreground`: deep neutral (for text).
   - `muted`: light neutral for secondary backgrounds.
   - `border`: subtle beige/gray for card borders.

2. **Brand colors**
   - `primary`: rich gold (used for highlights, icons, and key actions).
   - `primary-light`: lighter gold for backgrounds/tints.
   - `navy`: dark blue used for the main hero background on Home.

3. **Accent colors**
   - `accent`: variations of gold/amber used in gradients and hover states.
   - `card-yellow`: warm yellow/cream (`#FDF0D5`) for service cards.

4. **Status colors (for future use)**
   - `success`: green variant.
   - `warning`: amber/orange.
   - `error`: red.

5. **Usage guidelines**
   - Use `primary` for:
     - Badges, CTA borders, key icons, active states.
   - Use `navy` for:
     - Large hero backgrounds with white/gold text.
   - Use `muted`/`card-yellow` for:
     - Card backgrounds and subtle section separation.

---

### 3. Typography

1. **Font family**
   - Primary: `Geist` (or similar modern sans serif).
   - Fallbacks: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

2. **Type scale (approximate)**
   - `Display` (hero titles): `text-4xl` → `text-7xl` responsive.
   - `H1` (page title): `text-4xl` / `text-5xl`.
   - `H2` (section titles): `text-3xl` / `text-4xl`.
   - `H3` (card titles, subheadings): `text-xl` / `text-2xl`.
   - `Body`: `text-base` / `text-lg`.
   - `Small text`: `text-sm` / `text-xs` (badges, meta).

3. **Font weights**
   - Titles: `font-bold` / `font-extrabold`.
   - Body: `font-light` / `font-normal`.
   - Labels/badges: `font-semibold`.

4. **Line-height & tracking**
   - Headings: `leading-tight` (`leading-[1.1]`) with slightly negative tracking.
   - Body: `leading-relaxed` for long paragraphs.
   - Avoid overly tight tracking for smaller text to maintain readability.

---

### 4. Spacing & Layout

1. **Global spacing scale**
   - Use Tailwind spacing (`1, 2, 4, 6, 8, 10, 12, 16` etc.).
   - Page vertical rhythm:
     - Heroes: `py-16` → `py-24` depending on viewport.
     - Sections: `py-10`–`py-20`.
     - Card padding: `p-6`–`p-10`.

2. **Layout containers**
   - `max-w-7xl mx-auto` for main content.
   - Horizontal padding:
     - `px-4` (mobile), `sm:px-6`, `lg:px-8` (desktop).

3. **Grids**
   - Home services: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`.
   - Values/testimonials: `grid-cols-1 md:grid-cols-2` (optionally `lg:grid-cols-3`).
   - Portfolio: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

---

### 5. Components & States

1. **Buttons**
   - Primary:
     - Gold gradient background, dark text or white text depending on contrast.
     - Rounded corners (`rounded-lg`/`xl`).
     - Hover: slight scale up + increased shadow.
   - Secondary:
     - White/transparent background with gold border.
     - Hover: stronger border + subtle background tint.

2. **Cards**
   - `Card` base:
     - Background: `bg-white` or `bg-card-yellow` for emphasis.
     - Border: `border border-border` or gold-tinted border.
     - Shadow: custom `luxury` shadow for depth without heaviness.
     - Radius: `rounded-2xl`.
   - Hover state:
     - Small `translate-y` change (`-translate-y-1`).
     - Stronger shadow and/or faint gradient overlay.

3. **Hero sections**
   - Background:
     - Either solid `navy` or page-specific hero image.
   - Overlay:
     - `bg-black/40` layer to ensure text contrast.
   - Content:
     - Badge (small pill).
     - Title and optional highlighted span.
     - Optional subtitle and CTA buttons.

4. **Badges**
   - Style:
     - Pill shape (`rounded-full`).
     - Background: semi-transparent white on dark, white/cream on light.
     - Small uppercase text with tracking-wide.

---

### 6. Iconography

1. **Icon set**
   - Lucide icons throughout (services, contact info, social).
   - Sizes:
     - Small inline icons: `16–20px`.
     - Hero/feature icons: `24–32px`.

2. **Color usage**
   - Contact icons:
     - Light gold (`#FACC6B`) on dark footer background.
   - Social icons:
     - Light tints of brand colors (Instagram, Facebook, LinkedIn) for visibility.
   - Service icons:
     - `text-primary` within subtle colored icon backgrounds.

---

### 7. Accessibility Guidelines

1. **Contrast**
   - Ensure all text on gold/yellow meets WCAG AA.
   - Dark text on light cards, white text on navy/dark heroes.

2. **Focus states**
   - Visible focus ring on interactive elements:
     - e.g., `outline outline-2 outline-primary` with offset.

3. **Typography**
   - Avoid using all-caps for long text; reserve for small badges and short headings.
   - Ensure minimum body text size is comfortable on mobile (`text-base` or `text-sm` at smallest).

---

### 8. SEO & UX Alignment

1. **Heading hierarchy**
   - One H1 per page; subsequent sections use H2/H3.

2. **Content structure**
   - Use section titles that reflect keywords (e.g., “Interior Design Services”, “Quality and Safety Policy”, “Contact Urban Innovation”).

3. **Microcopy**
   - Clear, action-oriented CTAs (“View Portfolio”, “Request a Consultation”).

This design system should guide all new components and visual changes, ensuring a consistent, premium experience across the Urban Innovation website. 


