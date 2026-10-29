# Blackstone Infomatics — Web Platform

Pixel-accurate implementation of the **Blackstone Infomatics** digital studio platform, built from the Google Stitch design system (`Project 14930048133639489531`).

---

## ⚡ Tech Stack

* **Framework:** [Next.js 15+ (App Router)](https://nextjs.org/)
* **Language:** TypeScript 5+
* **Styling:** Tailwind CSS 3.4+ mapped to Stitch design tokens & CSS variables
* **Icons:** [Lucide React](https://lucide.dev/)
* **Form Validation:** React Hook Form & Zod
* **Animation:** Framer Motion & CSS keyframe transitions
* **Typography:** Manrope via `next/font/google`
* **Images:** Optimized with `next/image`

---

## 📱 Page & Screen Coverage

All 7 core pages reverse-engineered directly from Google Stitch desktop, tablet, and mobile layouts:

1. **Home (`/`)**:
   * Hero Bento with live status beacon and track record metrics (200+ projects).
   * Social proof brand ticker.
   * 01 Services matrix (6 Bento domain cards).
   * 02 Process breakdown (Discover, Design, Build, Grow).
   * 03 Selected work showcase (Puretone, Sharp Sofas, Ravi Home Stay, Western Ghats Foundation).
   * 04 Built for U.S. teams (Eastern/Pacific overlap hours, WCAG AA, transparent pricing, client quote).
   * 05 FAQ accordion bento.
   * Contact Bento with direct founder access and inquiry form.
2. **About Studio (`/about`)**:
   * Studio story, high-bar philosophy, and values Bento.
   * Operating model & working rituals (Direct Access, Dual-track sprints, Live from Day One).
   * Leadership & engineering team profiles.
   * 1% Ecological Commitment (Western Ghats initiative).
3. **Services & Capabilities (`/services`)**:
   * 11-domain capability matrix with deliverables and timelines.
   * 3 engagement models (Dedicated Sprint Team, Fixed-Scope Milestone Build, Architecture & Advisory).
   * Strategic consultation callout.
4. **Web Design & Development (`/web-design-development`)**:
   * Deep-dive service page with breadcrumb navigation.
   * What's Included 6-card grid (SSR/Edge, Design System sync, Headless CMS, Web Vitals, Type Safety, WCAG AA).
   * Standardized toolstack Bento.
   * Puretone Hearing Aid Center featured case study.
5. **Portfolio & Work (`/portfolio`)**:
   * Interactive category filter pills (Healthcare, Retail, Hospitality, Non-Profit, Enterprise, Logistics).
   * Case study cards with metrics, technology tags, and high-res imagery.
   * Confidential NDA architectural benchmark walkthrough block.
6. **Careers (`/careers`)**:
   * The Blackstone Standard (3 core engineering principles).
   * Compensation & benefits Bento (Async-first, $120k–$180k tiers, $3,500 desk stipend).
   * Open principal requisitions with direct mail application triggers.
   * 4-step transparent, paid hiring process.
7. **Contact & Discovery (`/contact`)**:
   * Start a project split Bento with validated Zod contact form and founder communication channels.

---

## 🚀 Getting Started

### 1. Prerequisites
* **Node.js**: v18.18 or higher (v22+ recommended)
* **npm**: v10+

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Design Tokens

* **Surface**: `#faf9f6` (Warm off-white slate)
* **Surface Containers**: `#ffffff` (Cards), `#f4f4f1` (Low), `#eeeeeb` (Default), `#e8e8e5` (High)
* **Text / Primary**: `#000000` & `#1a1c1a`
* **Text Muted**: `#444748`
* **Brand Accent**: `#ff5a1f` (Kinetic orange gradient `from-[#ff5a1f] to-[#e04810]`)
* **Dark Bento Cards**: `#121212` & `#181818` with `border-white/[0.08]`
* **Typography**: Manrope (Display Hero 64px, Headline LG 44px, Headline MD 28px, Headline SM 20px, Body MD 16px, Label Caps 12px)
* **Bento Radii**: `rounded-[28px]` and `rounded-[32px]`

