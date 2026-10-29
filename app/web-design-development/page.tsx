import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  Palette,
  ShieldCheck,
  Zap,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { PROJECTS } from "@/lib/data";

export const metadata = {
  title: "Web Design & Development — Blackstone Infomatics",
  description:
    "Engineering rigor meets uncompromising visual fidelity. Sub-second Next.js web applications, design systems, and headless CMS platforms.",
};

const WHATS_INCLUDED = [
  {
    title: "SSR & Edge Architecture",
    description:
      "Next.js App Router with React Server Components, streaming hydration, and edge-cached dynamic content for instant page transitions.",
    icon: Cpu,
  },
  {
    title: "Design System Sync",
    description:
      "Direct token integration from Figma variables into Tailwind CSS classes. Zero visual drift between design mockups and production code.",
    icon: Palette,
  },
  {
    title: "Headless CMS Pipelines",
    description:
      "Frictionless editorial workflows integrated with Sanity, Contentful, or Strapi. Marketing teams edit copy without needing developers.",
    icon: Layers,
  },
  {
    title: "Sub-Second Web Vitals",
    description:
      "LCP < 1.2s, CLS = 0, and FID < 50ms guaranteed. Every asset is optimized with next/image, next/font, and modern SVG vector sprites.",
    icon: Zap,
  },
  {
    title: "Strict Type Safety",
    description:
      "End-to-end TypeScript schema validation with Zod. APIs, props, and server responses are checked at compile time, eliminating runtime crashes.",
    icon: Code2,
  },
  {
    title: "WCAG 2.1 AA Certified",
    description:
      "Keyboard-accessible interactive elements, proper semantic landmarks, screen-reader aria labels, and verified color contrast ratios.",
    icon: ShieldCheck,
  },
];

const TECH_STACK = [
  { name: "Next.js 15+", role: "Framework", desc: "React Server Components & App Router" },
  { name: "TypeScript", role: "Language", desc: "Strict compile-time type validation" },
  { name: "Tailwind CSS", role: "Styling", desc: "Design token mapping & zero-runtime CSS" },
  { name: "Framer Motion", role: "Animation", desc: "60fps hardware-accelerated transitions" },
  { name: "PostgreSQL", role: "Database", desc: "Relational data modeling with Prisma/Drizzle" },
  { name: "Vercel / Cloud", role: "Deployment", desc: "Global edge CDN & preview deployments" },
];

export default function WebDesignDevelopmentPage() {
  const puretone = PROJECTS.find((p) => p.id === "puretone") || PROJECTS[0];

  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-12 sm:gap-20">
        {/* 1. BREADCRUMBS & HERO */}
        <section className="w-full flex flex-col gap-4">
          <nav className="flex items-center gap-2 text-[13px] text-on-surface-variant">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/services" className="hover:text-primary transition-colors">
              Services
            </a>
            <span>/</span>
            <span className="text-primary font-semibold">Web Design & Development</span>
          </nav>

          <div className="relative rounded-[32px] p-2 sm:p-3 overflow-hidden bg-gradient-to-br from-[#faf9f6] via-[#f5f4ef] to-[#edece6] border border-black/[0.05] shadow-[0_20px_60px_-15px_rgba(255,90,31,0.06)]">
            <div className="bg-gradient-to-b from-[#ffffff] to-[#fbfbf9] border border-black/[0.06] rounded-[28px] p-6 sm:p-12 flex flex-col gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5a1f]" />
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                  Flagship Capability
                </span>
              </div>
              <h1 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg lg:text-display-hero tracking-[-0.03em] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#111111] via-[#222222] to-[#444444] max-w-4xl">
                Web design & development that performs.
              </h1>
              <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We engineer production web applications that blend brutalist design clarity with
                serious frontend engineering. Built on Next.js, TypeScript, and atomic design tokens.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[12px] font-semibold text-primary">
                <span className="px-3 py-1 bg-surface-container rounded-full">Next.js 15+</span>
                <span className="px-3 py-1 bg-surface-container rounded-full">TypeScript 5+</span>
                <span className="px-3 py-1 bg-surface-container rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 bg-surface-container rounded-full">WCAG 2.1 AA</span>
                <span className="px-3 py-1 bg-surface-container rounded-full">Lighthouse 95+</span>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="h-12 px-7 rounded-full bg-primary text-white font-label-button text-[14px] inline-flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  Start web engineering sprint
                </a>
                <a
                  href="#case-study"
                  className="h-12 px-7 rounded-full bg-surface-container-high border border-black/[0.05] text-primary font-label-button text-[14px] inline-flex items-center justify-center hover:bg-surface-dim transition-colors"
                >
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT'S INCLUDED (6-CARD 3x2 GRID) */}
        <section className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              The Deliverables
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              What’s included in every platform.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHATS_INCLUDED.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-[#ff5a1f]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-headline-sm text-[20px] font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. TECH STACK BENTO */}
        <section className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              Standardized Tooling
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              Modern stack. Zero technical debt.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="bg-surface-container-lowest rounded-[24px] p-5 border border-black/[0.04] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-label-caps text-[11px] text-[#ff5a1f] uppercase tracking-wider font-semibold">
                    {tech.role}
                  </span>
                  <h3 className="font-bold text-[18px] text-primary mt-1">{tech.name}</h3>
                </div>
                <p className="text-[12px] text-on-surface-variant mt-3 leading-snug">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. RELATED CASE STUDY CARD */}
        <section className="w-full" id="case-study">
          <div className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-10 border border-black/[0.04] shadow-sm flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 h-72 sm:h-96 rounded-2xl overflow-hidden relative border border-black/[0.06] shadow-md">
              <Image
                src={puretone.image}
                alt={puretone.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="px-3 py-1 rounded-full bg-white text-primary text-[12px] font-bold">
                  {puretone.metrics}
                </span>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider">
                Featured Case Study
              </span>
              <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary font-semibold">
                {puretone.title}
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {puretone.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {puretone.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <a
                  href="/portfolio"
                  className="h-12 px-7 rounded-full bg-primary text-white font-semibold text-[14px] inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors"
                >
                  <span>Explore full portfolio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DARK CALL-TO-ACTION BAND */}
        <section className="w-full">
          <div className="bg-tertiary text-white rounded-[28px] p-8 sm:p-12 border border-white/[0.08] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="font-label-caps text-label-caps uppercase text-[#ff5a1f] tracking-wider">
                Kickoff in 5–7 Days
              </span>
              <h2 className="font-headline-md text-headline-sm sm:text-headline-md text-white font-semibold">
                Ready to engineer your next web platform?
              </h2>
              <p className="font-body-md text-[#cac6c3] max-w-xl">
                Book a technical discovery session with a founding partner to review your PRD and architecture scope.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/contact"
                className="h-12 px-8 rounded-full bg-gradient-to-r from-[#ff5a1f] to-[#e04810] text-white font-semibold text-[14px] inline-flex items-center justify-center hover:shadow-lg transition-all"
              >
                Book strategy call
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

