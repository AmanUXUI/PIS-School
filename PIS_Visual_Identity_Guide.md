# Pavna International School (PIS) - Visual Identity & Design System Guide

This is a comprehensive, self-contained design and style specification document for Pavna International School (PIS). Use this guide to create and style any new subpages, dashboards, or portals to ensure an identical aesthetic to the school's primary homepage.

---

## 🎨 1. Core Color Palette

The PIS design system uses highly intentional color pairings balancing deep institutional trust with warm modern accents.

| Accent Role | CSS Variable | HEX Code | Tailwind Utility Style | Usage Guidelines |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Navy** | `--color-brand-navy` | `#201A5B` | `bg-brand-navy`, `text-brand-navy` | Main headings, call-to-actions, headers, footers |
| **Accent Orange** | `--color-brand-orange` | `#F48120` | `bg-brand-orange`, `text-brand-orange` | Accents, badges, active hover lines, action borders |
| **Hover Orange** | `--color-brand-dark-orange`| `#e06e10` | `hover:bg-brand-dark-orange` | Overlays, interactive button hover states |
| **Editorial Backing**| `--color-editorial-bg`| `#FDFCFB` | `bg-editorial-bg` | Page background of main educational sections |
| **Warm Sand Card** | — | `#FAF9F5` | `bg-[#FAF9F5]` | Testimonial backgrounds, carousel backdrops |
| **Deep Gray Base** | `--color-brand-black` | `#231F20` | `text-brand-black` | Primary high-readability body text |

---

## ✍️ 2. Typography & Hierarchy

The voice of PIS is academic, clean, and elegant. The system uses a customized **Gill Sans** stack for all displays, headings, and key interface labels.

*   **Primary Type Family:** `"Gill Sans", "Gill Sans MT", Calibri, sans-serif` (mapped to `font-sans` and `.font-gill`).

### Typography Scale

*   **Hero Display Headings:** `text-4xl sm:text-[54px] font-sans font-bold leading-tight tracking-tight`
*   **Section Title Headings:** `text-3xl sm:text-[42px] font-sans font-bold leading-tight tracking-tight`
*   **Subheadings / Grid Card Titles:** `text-[17px] sm:text-[20px] font-bold tracking-tight text-brand-navy`
*   **Subheader Badges (Uppercase):** `text-[11px] font-bold tracking-[1.65px] uppercase`
*   **Standard Body Paragraphs:** `text-[15px] sm:text-[16px] leading-[26px] text-neutral-600 font-normal font-gill`

---

## 🧩 3. Characteristic Components & Visual Patterns

### A. Section Subhead Accent (Centering Badge)
Flanked by balanced horizontal accent strips:
```tsx
<div className="flex items-center justify-center gap-3 mb-6 w-full">
  <div className="w-12 h-[2px] bg-brand-orange"></div>
  <span className="text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold text-brand-orange text-center">
    ABOUT PIS
  </span>
  <div className="w-12 h-[2px] bg-brand-orange"></div>
</div>
```

### B. Modern Bento-Grid Cards
Highly tactile container boxes with soft floating accent numbers:
```tsx
<div className="relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-neutral-100/80 bg-white shadow-sm hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] transition-all duration-500 group overflow-hidden hover:-translate-y-1">
  {/* Absolute Floating Number */}
  <span className="absolute top-4 sm:top-6 right-5 sm:right-8 text-2xl sm:text-[32px] font-serif font-bold text-neutral-50 group-hover:text-brand-orange/5 transition-colors duration-500 select-none">
    01
  </span>
  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange mb-4 sm:mb-6 transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white">
    <IconComponent size={18} />
  </div>
  <h4 className="text-[16px] sm:text-[17px] font-bold text-brand-navy mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-brand-orange">
    Title
  </h4>
  <p className="text-[14px] sm:text-[16px] text-neutral-600 leading-relaxed font-gill">
    Description text...
  </p>
</div>
```

### C. Primary Action Buttons
Interactive trigger buttons using an offset transition and rounded pill look:
```tsx
<button className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-brand-orange text-white font-bold text-[14px] transition-all duration-300 hover:bg-brand-dark-orange hover:shadow-soft active:scale-95">
  Learn More
</button>
```

### D. Layout Padding Standard
*   **Desktop Sections:** `py-24` (Top & Bottom: `96px` / `6rem`)
*   **Mobile Sections:** `py-16` (Top & Bottom: `64px` / `4rem`)
*   **Separators:** Handled cleanly with `border-t border-b border-gray-100/85`

---

## 🎨 4. Tailwind Configuration Integration

To maintain 100% style consistency, map your custom extensions in the Tailwind CSS configuration as follows:

```css
@theme {
  --font-sans: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
  --font-serif: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;

  --color-brand-navy: #201A5B;
  --color-brand-primary: #201A5B;
  --color-brand-orange: #F48120;
  --color-brand-dark-orange: #e06e10;
  --color-brand-gray: #B5B3B3;
  --color-brand-yellow: #FFCA05;
  --color-brand-sky: #00B7DD;
  --color-brand-black: #231F20;
  --color-editorial-bg: #FDFCFB;
}
```
