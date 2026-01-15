## Urban Innovation Website – Component Architecture

### 1. Global Layout

1. **`app/layout.tsx`**
   - Wraps all pages with HTML shell, fonts, and global styles.
   - Layout:
     - `<html>` → `<body>` → `{children}`.

2. **`PageShell` (planned)**
   - Reusable wrapper for page content.
   - Responsibilities:
     - Constrain width: `max-w-7xl mx-auto`.
     - Apply horizontal padding: `px-4 sm:px-6 lg:px-8`.
     - Provide vertical spacing for main content.

3. **`Section` (planned)**
   - Generic section wrapper.
   - Props:
     - `id?: string`
     - `variant?: "default" | "muted" | "dark" | "image-hero"`
     - `className?: string`
   - Encapsulates consistent vertical padding and background variants.

---

### 2. Navigation & Footer

1. **`components/header.tsx`**
   - Sticky top navigation bar.
   - Includes:
     - Brand block with logo image and “Urban Innovation” text.
     - Primary navigation links:
       - `/` (Home)
       - `/about`
       - `#portfolio`
       - `/quality-safety`
       - `/services`
       - `/contact`
     - Mobile hamburger menu with slide-down nav.
   - Future enhancements:
     - `variant` prop for light/dark contexts.
     - Drop-downs if site grows.

2. **`components/footer.tsx`**
   - Four-column layout:
     - Brand description.
     - Contact details with icons (address, phone, email).
     - Quick links (Home, About, Portfolio, Services).
     - Social icons (Instagram, Facebook, LinkedIn).
   - Uses Lucide icons for visual consistency.
   - Candidate reusable pieces:
     - `ContactInfoItem` for icon + label + value.
     - `IconLink` for social links.

---

### 3. Home Page Composition

1. **`app/page.tsx`**
   - Composition:
     - `<Header />`
     - `<Hero />`
     - `<Services />` (home services preview)
     - `<Portfolio />`
     - `<Testimonials />`
     - `<Footer />`

2. **`components/hero.tsx`**
   - Home hero section (“LET YOUR HOME BE…UNIQUE AND STYLISH”).
   - Uses site data (`useSiteData`) for dynamic content.
   - Background:
     - Solid dark blue with optional background image (currently dark navy).
   - Elements:
     - Optional badge.
     - H1 with highlighted span.
     - Subtitle.
     - Primary and secondary CTAs (buttons).
   - Future refactor:
     - Turn into a generic `PageHero` component with props so it can be reused on other pages.

3. **`components/services.tsx` (Home section)**
   - “What we Do” section with 4 service cards.
   - Data-driven from `lib/storage.ts` (`defaultServices` or CMS state).
   - Each card:
     - Icon (Lucide by name).
     - Title and description.
     - Card layout and hover effect.
   - This component is separate from the `/services` page but shares concept; long-term, can share service data structures.

4. **`components/portfolio.tsx`**
   - Portfolio grid with category filter.
   - Uses `useSiteData` projects array.
   - Includes:
     - Category chip bar.
     - Cards with image, category, title, description, location, date.

5. **`components/testimonials.tsx`**
   - Hard-coded testimonials in card layout.
   - Candidate for future CMS integration.

---

### 4. About Page

1. **`app/about/page.tsx`**
   - Page layout:
     - `<Header />`
     - Image hero (`about-hero`).
     - Main content section (company description & expertise).
     - “WHY URBAN INNOVATION?” section with image + text + reasons.
     - “Our Facilities” section with image and descriptive text.
     - `<Footer />`
   - Components:
     - Embedded `Image` hero (could be refactored to `PageHero`).
     - Several `section` blocks using card-like styling.
   - Future reusable blocks:
     - `TwoColumnImageText` for repeated “text + image” layouts.
     - `BulletGrid` for “Our expertise” list.

---

### 5. Services Page

1. **`app/services/page.tsx`**
   - Page layout:
     - `<Header />`
     - Image hero (`services-hero`).
     - Service 1 card (list of bullet items).
     - Service 2 card (list of bullet items).
     - `<Footer />`
   - Components:
     - Inline hero section, similar in structure to About hero.
     - Two `section` blocks using card styling for the service lists.
   - Suggested components:
     - `ServiceGroupCard`:
       - Props: `{ title: string; items: string[] }`
       - Reused for Service 1 and Service 2 blocks.
     - `ServiceBulletList`:
       - Renders compact bullet rows with dash icon and text.

---

### 6. Quality & Safety Policy Page

1. **`app/quality-safety/page.tsx`**
   - Page layout:
     - `<Header />`
     - Image hero (`quality-safety-hero`).
     - Main policy content card (text block).
     - “Our Values” section with 4 value cards in a grid.
     - `<Footer />`
   - Components:
     - Inline hero section.
     - Single large policy `section`.
     - Reusable “value card” pattern (number + title + text).
   - Suggested reusable components:
     - `ValueCard`:
       - Props: `{ index: number; title: string; description: string }`.
       - Could be reused in About/Services pages where values are listed.

---

### 7. Contact Page

1. **`app/contact/page.tsx`**
   - Page layout:
     - `<Header />`
     - Image hero (`contact-hero`).
     - Two-column content:
       - Left: `Head Office` card + logo card.
       - Right: `Write to us` form.
     - `<Footer />`
   - Components:
     - Hero section (consistent with other pages).
     - Address card:
       - Uses simple `<p>` elements; could be upgraded to a `ContactInfoCard`.
     - Logo card with `Image`.
     - Contact form card with inputs and textarea.
   - Suggested reusable components:
     - `ContactInfoCard`:
       - Props: `{ title, addressLines, phone?, email? }`.
     - `ContactForm`:
       - Props: optional `onSubmit`, preconfigured fields.

---

### 8. Shared Data & Hooks

1. **`lib/storage.ts`**
   - Holds interfaces and default content:
     - `Project`, `SiteContent`, `HeroContent`, `Service`.
   - Default arrays:
     - `defaultProjects`, `defaultHero`, `defaultServices`.
   - Functions for localStorage-backed data:
     - `getProjects`, `saveProjects`, `getContent`, `saveContent`, `getHero`, `saveHero`, `getServices`, `saveServices`.

2. **`lib/use-site-data.ts`**
   - Central hook for accessing site data in client components.
   - Returns `projects`, `content`, `hero`, `services`, `isLoading`, and update functions.
   - Used by `Hero`, `Services`, `Portfolio`, and admin components.

---

### 9. Planned Refactors & Reuse Opportunities

1. **Introduce `PageHero` component**
   - Replace hero implementations in:
     - Home (optional),
     - About,
     - Services,
     - Quality & Safety,
     - Contact.
   - Props:
     - `title`, `subtitle?`, `badge?`, `backgroundImage?`, `overlayOpacity?`, `align?`.

2. **Extract repeated sections into components**
   - `TwoColumnImageText` for image + copy sections.
   - `CardSection` wrapper for content inside white rounded cards.
   - `ServiceGroupCard` and `ValueCard` for lists of capabilities/values.

3. **Centralize data**
   - Move hard-coded service lists and values into structured data arrays.
   - Keep content in `lib/content.ts` or similar for easier editing and translation.


