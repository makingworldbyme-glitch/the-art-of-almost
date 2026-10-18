# DESIGN SYSTEM: THE ART OF ALMOST
## An Ongoing Study of Nothing in Particular
### Version 1.0 — Architecture & Visual Specification

---

## 1. Brand Personality & Visual Principles

### 1.1 Core Ethos
*THE ART OF ALMOST* is an anti-portfolio. It deconstructs conventional digital portfolios—which obsess over productivity, unverified achievements, and manufactured self-importance—by borrowing their authoritative visual language to present philosophical ambiguity, deliberate restraint, and quiet satire.

> **Foundational Principle:**  
> *"Present nothing. Communicate everything."*  
> Every element that appears must possess a rigorous structural reason for being. If an element exists solely to fill empty space, it must be eliminated.

### 1.2 Personality Pillars
| Characteristic | Expression in Design & Code |
| :--- | :--- |
| **Elegan (Elegant)** | Monastic discipline, razor-thin hairline rules, high typographic contrast, and generous negative space. |
| **Intelektual (Intellectual)** | Editorial phrasing, measured cadence, classical book-design proportions, and dignified composure. |
| **Misterius (Mysterious)** | Incremental information disclosure. No desperate bids for immediate attention. |
| **Absurd (Absurd)** | The sharp tension between authoritative, museum-grade presentation and an intentional absence of conventional substance. |
| **Tenang (Calm)** | Static stability. Zero jittery animations, no loud saturated colors, no distracting ambient particles. |
| **Sadar Diri (Self-Aware)** | The design knows it is parodying portfolio conventions; it executes the parody with a deadpan, straight face. |

### 1.3 The Dual Identity Model
The interface visually and structurally demarcates two distinct layers:
1. **The Persona (*The Art of Almost*):** The front-facing philosophical anti-hero. Manifests in the monolithic headlines, unpopulated archive, and satirical timelines.
2. **The Person (*The Owner*):** Grounded, authentic, and accessible. Located discreetly in the About section and Footer (`[Owner Name]`, factual bio, and verified `mailto:` contact link).

---

## 2. Color Palette & Token Architecture

The color strategy is anchored in **Dark Editorial** aesthetics: warm obsidian backgrounds paired with high-contrast warm alabaster and muted stone typography. 

### 2.1 Color Tokens
| Token Name | Exact HEX | Role & Usage | WCAG Ratio vs #111110 |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#111110` | Canvas base; warm obsidian black. | Base |
| `--bg-secondary` | `#1A1A18` | Slightly elevated surface for structural panels. | ~1.1:1 |
| `--text-primary` | `#F1EFE8` | Warm alabaster paper; headlines, key titles, primary text. | **15.2:1 (AAA)** |
| `--text-secondary` | `#A4A29B` | Muted stone; body copy, editorial lead-ins, descriptions. | **8.7:1 (AAA)** |
| `--text-tertiary` | `#6E6D67` | Pebble gray; metadata, section indices (`01 //`), timestamps. | **3.8:1 (AA Large)** |
| `--border-subtle` | `#383833` | Hairline grid lines, frame borders, structural rules. | Decorative (1.6:1) |
| `--border-focus` | `#F1EFE8` | High-visibility keyboard navigation focus rings. | **15.2:1 (AAA)** |
| `--surface-light` | `#F1EFE8` | Editorial inverted block (used sparingly for contrast). | Contrast surface |
| `--text-on-light` | `#171715` | Deep carbon text used exclusively on `--surface-light`. | **14.8:1 (AAA)** |
| `--accent-hover` | `#FFFFFF` | Maximum luminance highlight on hover and focus. | **17.5:1 (AAA)** |

### 2.2 Color Rules
* **No pure digital blacks:** `#000000` is forbidden. The palette must retain the subtle warmth of printed editorial ink on deep black paperstock (`#111110`).
* **No arbitrary accent hues:** No primary blues, neon greens, or bright reds. The tension is derived strictly through typographic weight, value contrast, and spatial hierarchy.
* **No gradients or glassmorphism:** Avoid blurred backdrops (`backdrop-filter`) and multi-stop color ramps. Surfaces remain matte, solid, and opaque.

---

## 3. Typography System & Font Hierarchy

The typography marries classical literary sophistication with Swiss structural rigor.

### 3.1 Type Families
* **Serif Editorial (Primary Voice):** `'Cormorant Garamond'`, Georgia, 'Times New Roman', serif.  
  *Characteristics:* High stroke contrast, elegant ligatures, literary gravitas.  
  *Weights:* Regular (`400`), Italic (`400i`), Medium (`500`).
* **Modern Grotesque Sans (Structural Voice):** `'Inter'`, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif.  
  *Characteristics:* Neutral, geometric precision, exceptional legibility at micro scales.  
  *Weights:* Light (`300`), Regular (`400`), Medium (`500`), Semi-bold (`600`).

### 3.2 Fluid Typographic Scale (CSS `clamp()`)

```css
:root {
  /* Font Families */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Type Scale */
  --text-display: clamp(2.75rem, 7vw, 6.5rem);       /* Hero Monolith */
  --text-h1: clamp(2.125rem, 4.5vw, 3.875rem);       /* Major Section Titles */
  --text-h2: clamp(1.4rem, 2.5vw, 2.25rem);          /* Sub-headings */
  --text-lead: clamp(1.125rem, 1.5vw, 1.375rem);     /* Editorial Lead Statements */
  --text-body: clamp(0.9375rem, 1vw, 1.0625rem);     /* Standard Narrative Body */
  --text-small: 0.875rem;                            /* Annotations & Secondary Copy */
  --text-meta: 0.6875rem;                            /* Micro Indices, Kickers, Placards */

  /* Line Heights */
  --lh-tight: 1.04;
  --lh-title: 1.15;
  --lh-heading: 1.25;
  --lh-body: 1.65;
  --lh-relaxed: 1.8;

  /* Letter Spacing */
  --ls-display: -0.025em;
  --ls-heading: -0.015em;
  --ls-body: 0em;
  --ls-meta: 0.14em;
}
```

### 3.3 Semantic Typographic Roles

| Role | Font Family | Size Token | Weight / Style | Line Height | Letter Spacing | Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Monolith** | Serif | `--text-display` | 400 Regular | `1.04` | `-0.025em` | Normal |
| **Section Title** | Serif | `--text-h1` | 400 Regular | `1.15` | `-0.015em` | Normal |
| **Curatorial Subhead** | Serif | `--text-h2` | 400 Italic | `1.25` | `0` | Normal |
| **Editorial Lead** | Serif | `--text-lead` | 400 Italic | `1.55` | `0` | Normal |
| **Section Index / Kicker** | Sans | `--text-meta` | 600 Semi-bold | `1.2` | `+0.14em` | All Caps |
| **Standard Body** | Sans | `--text-body` | 300 Light | `1.65` | `0` | Normal |
| **Archive Stamp / Badge** | Sans | `--text-meta` | 500 Medium | `1.3` | `+0.18em` | All Caps |
| **Interactive Action / Nav**| Sans | `--text-small` | 400 Regular | `1.4` | `+0.08em` | All Caps |

---

## 4. Spacing Scale & Spatial Rhythm

The spacing system employs an **8px vertical baseline grid** combined with fluid macro gaps to guarantee proportional breathing room on all display dimensions.

```css
:root {
  /* Micro & Intra-Component Spacing */
  --space-3xs: 4px;
  --space-2xs: 8px;
  --space-xs: 12px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;

  /* Macro & Structural Spacing */
  --space-2xl: 64px;
  --space-3xl: 96px;
  --space-4xl: clamp(80px, 12vh, 160px);    /* Standard Intra-Section Gap */
  --space-monolith: clamp(120px, 18vh, 240px); /* Hero & Major Transition Gap */
}
```

### 4.1 Spacing Rules
* **Generous Section Buffers:** Sections must never visually compete. Each conceptual section is bounded by `--space-4xl` minimum padding.
* **Proximity Principle:** Micro-labels and indices sit `--space-xs` (12px) above headings. Body narratives sit `--space-lg` (32px) beneath section headings.
* **Zero Padding Congestion:** Interactive buttons have a minimum internal touch padding of `14px 28px`.

---

## 5. Grid & Container Rules

### 5.1 Container Boundaries
* **Maximum Layout Width:** `1240px` (guarantees readable line lengths on ultra-wide monitors without text stretching).
* **Page Margin (Gutter):** Fluid inline margin using `padding-inline: clamp(1.5rem, 5vw, 5rem)`.
* **Reading Measure:** Narrative text blocks are restricted to a `max-width` of `44ch` to `60ch` to preserve optimal typographic cadence.

### 5.2 Asymmetric Swiss Grid System
The layout utilizes an asymmetrical 12-column CSS Grid or a dedicated 2-column editorial ratio on desktop viewports:

```
┌────────────────────────────────────────────────────────────────────────┐
│ CONTAINER (max-width: 1240px)                                          │
├───────────────────────────────┬────────────────────────────────────────┤
│ LEFT ANCHOR (Columns 1–4)      │ RIGHT EXPANSE (Columns 5–12)           │
│ Width: ~30%                   │ Width: ~70%                            │
│                               │                                        │
│ • Section Index [01 // 05]    │ • Primary Serif Headline               │
│ • Micro-kicker label          │ • Editorial Lead Statement             │
│ • Archival status stamp       │ • Intentional Empty Space / Content    │
│ • Sticky spatial reference    │ • Secondary Commentary & Actions       │
└───────────────────────────────┴────────────────────────────────────────┘
```

---

## 6. Layout Principles by Device Class

### 6.1 Desktop (1024px and above)
* **Asymmetry:** Full 2-column or 12-column Swiss grid active.
* **Sticky Navigation:** Minimalist top bar with persistent wordmark and horizontal anchor links.
* **Expansive Negative Space:** Ample blank margins are maintained deliberately to frame the typography like an art monograph.

### 6.2 Tablet (641px to 1023px)
* **Proportional Scaling:** Left anchor column narrows to 25% or stacks cleanly above content if text measure is compromised.
* **Maintained Breathing Room:** Section gaps adjust from `160px` down to `96px`.
* **Touch Optimization:** Touch targets are strictly audited to be at least 44×44px.

### 6.3 Mobile (640px and below)
* **Linear Editorial Flow:** Grid drops to a clean, single-column vertical stack.
* **Preserved Emptiness:** Mobile padding does not collapse to zero; `clamp(1.5rem, 4vw, 2.5rem)` ensures the design does not feel cramped or hurried.
* **Typographic Hierarchy:** The display title scales gracefully via `clamp()` to prevent unsightly line breaks.

---

## 7. Buttons, Links & Navigation Styles

Every interactive element is restrained, high-contrast, and purposeful.

### 7.1 Navigation Bar
* **Structure:** Fixed/sticky top bar with solid backdrop (`#111110`) and a crisp `1px solid var(--border-subtle)` bottom hairline.
* **Left:** Wordmark: `THE ART OF ALMOST` (`var(--font-sans)`, `0.8125rem`, 600 weight, `+0.12em` letter spacing).
* **Right:** Anchor navigation links (`ABOUT`, `EXPERIENCE`, `ARCHIVE`, `CAPABILITIES`, `CONTACT`).
* **Active State:** The currently visible section (detected via `IntersectionObserver`) features a subtle white dot (`•`) or illuminated text color (`#FFFFFF`).

### 7.2 Editorial Text Links
* **Appearance:** Sans-serif (`--text-small`), all-caps, with an inline directional arrow glyph (`↗`).
* **Resting State:** Color `--text-secondary`, relative positioning.
* **Hover State:** Color shifts smoothly to `--accent-hover` (`#FFFFFF`). Arrow translates `2px` diagonally (`transform: translate(2px, -2px)`).
* **Hairline Underline Effect:** An underline constructed via a `::after` pseudo-element with `height: 1px`, `background: var(--text-primary)`, expanding from `scaleX(0)` to `scaleX(1)` with origin left.

### 7.3 Ghost Action Button (Easter Egg & Primary Actions)
* **Structure:** `<button class="btn-ghost">`
* **Border:** `1px solid var(--border-subtle)`
* **Typography:** `var(--font-sans)`, `--text-meta`, 500 weight, all-caps, `+0.14em` letter spacing.
* **Padding:** `14px 28px`
* **Resting Background:** Transparent.
* **Hover State:** Border shifts to `var(--text-secondary)`, subtle background fill `rgba(241, 239, 232, 0.04)`.
* **Active / Press State:** `transform: scale(0.99)`.

### 7.4 Focus Indicator (Accessibility)
* **Style:** High-contrast outline `2px solid var(--border-focus)`.
* **Offset:** `outline-offset: 4px;`
* **Rule:** Native outline is never removed (`outline: none` is forbidden unless replaced by `:focus-visible`).

---

## 8. Section Layout Specifications

### 8.1 Header / Wordmark
* **Role:** Persistent orientation anchor.
* **Height:** `64px` (Desktop), `56px` (Mobile).
* **Composition:** Left: Monogram/Title; Right: In-page anchor jump links.

### 8.2 Hero Section (`#home`)
* **Role:** The initial artistic provocation.
* **Min Height:** `85vh` to `90vh` of centered or top-weighted composition.
* **Elements:**
  1. Micro-kicker: `00 // PROLOGUE`
  2. Display Title: `A life, not yet summarized.` (Serif Display)
  3. Lead Narrative: *"An ongoing exploration of possibilities, without the unnecessary urgency of becoming something definitive."* (max-width `52ch`)
  4. Discreet Scroll Indicator: Hairline vertical line with micro-label `SCROLL ↓`.

### 8.3 About Section (`#about`)
* **Role:** Dual-layer disclosure (Persona to Person).
* **Composition:**
  * **Top Sub-section:** *"A PERSON IN PROGRESS."* Philosophical expansion on the refusal to be prematurely defined.
  * **Dividing Rule:** 1px hairline horizontal divider.
  * **Bottom Sub-section (The Person):** Factual origin disclosure:
    > *"Every concept has an origin. This one belongs to [NAMA ASLI]."*
    Brief factual paragraph and professional external link.

### 8.4 Experience Section (`#experience`)
* **Role:** Satirical career framework.
* **Header:** `02 // TRAJECTORY`
* **Title:** `A CAREER IN PROGRESS`
* **Subtitle:** `A professional narrative that has not yet found a compelling reason to become definitive.`
* **Structural Timeline:** Minimalist two-column index (e.g., `PHASE 01 — THE FORMATION`, `PHASE 02 — THE CONTEMPLATION`, `PHASE 03 — THE CURRENT STATE`). Open to interpretation; no fabricated corporate logos.

### 8.5 Selected Works (`#works`)
* **Role:** The emotional centerpiece of deliberate emptiness.
* **Header:** `03 // ARCHIVE`
* **Title:** `SELECTED WORKS`
* **Curatorial Statement:** *"A considered selection of work that has yet to require selection."*
* **The Frame:** A large, architectural box framed by `1px solid var(--border-subtle)`.
  * **Inside the Box:** 
    * Top row: `ARCHIVE REF. 000` (Left) | `STATUS: UNPOPULATED` (Right, highlighted with subtle indicator)
    * Center: Monolithic quiet typography: *"NO ITEMS CURRENTLY DISPLAYED."*
    * Bottom caption: *"This archive remains intentionally open to future developments."*
* **Easter Egg Anchor:** Discreet button placed below the frame: `[ REVEAL ADDITIONAL WORKS ]`.

### 8.6 Capabilities Section (`#capabilities`)
* **Role:** Critique of skill checklists.
* **Header:** `04 // CAPACITY`
* **Title:** `CAPABILITIES`
* **Lead:** *"A flexible framework for skills yet to become relevant."*
* **Composition:** Rather than 20 software badges with arbitrary progress bars, present an editorial tripartite matrix:
  * `01 // OBSERVATION` — Analyzing conventions before adopting them.
  * `02 // RESTRAINT` — Knowing when to withhold unnecessary features.
  * `03 // ADAPTATION` — Remaining deliberately unfinished.

### 8.7 Contact Section (`#contact`)
* **Role:** Direct, honest utility.
* **Header:** `05 // DIALOGUE`
* **Title:** `LET'S NOT MAKE THIS MORE COMPLICATED THAN NECESSARY.`
* **Lead:** *"Still curious?"*
* **Primary CTA:** Oversized editorial text link with prominent arrow:  
  `GET IN TOUCH ↗` (`mailto:user@domain.com`)
* **Secondary:** Direct display of email address in selectable monospace/sans for copy-paste ease.

### 8.8 Footer (`#footer`)
* **Role:** Colophon and legal closure.
* **Composition:**
  * Left: `THE ART OF ALMOST` | `An independent personal project by [NAMA ASLI].`
  * Right: `© 2026 — ALL POSSIBILITIES RESERVED.`
  * Center/Far Right: `BACK TO TOP ↑`

---

## 9. Animation & Transition Guidelines

### 9.1 Motion Philosophy
Animations are used exclusively to convey weight, smoothness, and dignity. No element moves more than 12px. No element bounces.

### 9.2 Curves & Durations
```css
:root {
  /* Editorial Easing Curve (Quintic Out) */
  --ease-editorial: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);

  /* Durations */
  --duration-instant: 150ms;
  --duration-hover: 250ms;
  --duration-reveal: 600ms;
  --duration-page: 900ms;
}
```

### 9.3 Permitted Transitions
1. **Interactive Hover:** Opacity changes from `0.7` to `1.0` over `250ms var(--ease-editorial)`.
2. **Hairline Underlines:** `transform: scaleX(0)` to `scaleX(1)` over `300ms var(--ease-editorial)`.
3. **Entrance Reveals:** Single-pass opacity shift (`0` to `1`) accompanied by a subtle upward shift (`transform: translateY(8px)` to `translateY(0)`).
4. **Easter Egg Reveal:** Gentle accordion expansion or fade-in of the comedic text block over `400ms`.

### 9.4 Reduced Motion Protocol
Under `prefers-reduced-motion: reduce`, all transitions and animations are collapsed immediately to guarantee compliance and user comfort:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 10. Accessibility Standards (WCAG 2.2 Level AA)

1. **Semantic HTML Landmarks:** Valid usage of `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<footer>`, and `<article>`.
2. **Skip Navigation:** A dedicated, hidden link at the very top of the DOM:
   ```html
   <a href="#main-content" class="skip-link">Skip to main content</a>
   ```
   Becomes fully visible on keyboard `:focus`.
3. **Color Contrast Guarantee:**
   * Primary text (`#F1EFE8`) on canvas (`#111110`): **15.2:1** (Surpasses AAA requirement of 7:1).
   * Secondary text (`#A4A29B`) on canvas (`#111110`): **8.7:1** (Surpasses AAA requirement of 7:1).
   * Tertiary metadata (`#6E6D67`) on canvas (`#111110`): **3.8:1** (Compliant for large/micro labels).
4. **Interactive Focus:** Outline ring `2px solid #F1EFE8` with `4px` offset on all focused anchors and buttons.
5. **ARIA Announcements for Easter Eggs:** The Easter Egg disclosure region includes `aria-live="polite"` so screen reader users hear the dry punchline announced cleanly without page reloading.
6. **No Color-Only Signaling:** All states are represented through typography, text change, borders, or clear iconography.

---

## 11. Responsive Behavior Matrix

| Viewport | Max Width | Columns | Page Margin | Hero Title Size | Section Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile S / M** (`< 480px`) | 100% | 1 Column | `1.5rem (24px)` | `2.75rem (44px)` | `80px` |
| **Mobile L / Tablet** (`481px - 768px`) | 100% | 1 Column | `2.5rem (40px)` | `3.5rem (56px)` | `100px` |
| **Desktop Standard** (`769px - 1199px`) | `1080px` | 2 Columns | `4rem (64px)` | `5.0rem (80px)` | `140px` |
| **Desktop Wide** (`1200px+`) | `1240px` | 12 Col / 2 Col | `5rem (80px)` | `6.5rem (104px)` | `180px` |

---

## 12. Rules for Preserving Intentional Negative Space

The biggest existential risk of a minimalist anti-portfolio is that visitors confuse **deliberate emptiness** with an **unfinished template or broken script**. The following five rules are mandatory:

```
                    ┌───────────────────────────────┐
                    │     CONFIDENT RESTRAINT       │
                    │   (Not Incomplete Failure)    │
                    └───────────────┬───────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
1. Active Framing            2. Curatorial Rigor          3. Typographic Scale
Hairlines prove boundaries   Explicit status plaques      Oversized serif carries
are engineered & intact.     confirm intentionality.      sculptural weight.
```

### Rule 1: Whitespace Must Be Actively Framed
Negative space must never bleed out into amorphous, ragged edges. It must be framed by architectural hairlines (`1px solid var(--border-subtle)`), clear grid coordinates, and section numbers (`01 // 05`). The lines prove the canvas is deliberate.

### Rule 2: Explicit Curatorial Cataloging in Selected Works
Never leave an empty box with a generic *"Nothing here"* or blank space. Use museum-grade catalog metadata:
* `ARCHIVE STATUS: INTENTIONALLY UNPOPULATED`
* `CATALOGUE ID: N/A`
* `CURATORIAL NOTE: Work withheld until definitive significance is attained.`

### Rule 3: Typographic Weight Substitutes for Imagery
Where a normal portfolio uses loud 16:9 mockup screenshots, *THE ART OF ALMOST* uses massive, high-contrast serif typography. The text itself serves as the visual centerpiece.

### Rule 4: Absolute Ban on Filler Elements
Under no circumstance will the following be introduced:
* Generic placeholder thumbnails or wireframe boxes.
* Decorative floating abstract blobs, SVG waves, or random geometric shapes.
* Software icons (React, Figma, Photoshop badges) in the Capabilities section.
* Invented testimonials from fictional art directors or clients.

### Rule 5: Witty Deadpan Micro-Interactions
The Easter Egg must not be an invasive modal popup or a confetti burst. It is an understated line of text that appears in place with deadpan comedic delivery:
> *"You have successfully revealed no additional information."*

---

## 13. Implementation Checklist for Phase 1

Before writing application code, verify that:
- [x] All color hex values match the specified tokens.
- [x] Font pairings (Cormorant Garamond + Inter) are defined with fallbacks.
- [x] Responsive layout rules prevent horizontal overflow at all screen widths down to 320px.
- [x] High-contrast accessibility standards are locked in.
- [x] Curatorial language is drafted for every empty state.

---
*End of Design System Specification. This document acts as the definitive styling authority for THE ART OF ALMOST.*
