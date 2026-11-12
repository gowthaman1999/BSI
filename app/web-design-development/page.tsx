import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Layers,
  Palette,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { PageShell, Section, Reveal, ParallaxMedia } from "@/components/ui/Section";
import { SectionHeading, EyebrowPill } from "@/components/ui/Heading";
import { Card, TagChip } from "@/components/ui/Card";
import { ActionButton } from "@/components/ui/Button";

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
    <PageShell>
      {/* 1. BREADCRUMBS & HERO */}
      <Section
        surface="dark-inset"
        ariaLabel="Web Design & Development Hero"
        innerClassName="py-8 sm:py-14 lg:py-16"
      >
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-on-dark-subtle mb-6">
          <Link href="/" className="hover:text-on-dark transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-on-dark transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-brand-primary font-semibold">Web Design &amp; Development</span>
        </nav>

        <Reveal immediate delay={0}>
          <EyebrowPill surface="dark">Flagship Capability</EyebrowPill>
        </Reveal>

        <Reveal immediate delay={0.05}>
          <h1 className="mt-5 sm:mt-6 font-display-hero text-[clamp(2.05rem,5.2vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.03em] text-on-dark max-w-4xl">
            Web design &amp; development that performs.
          </h1>
        </Reveal>

        <Reveal
          immediate
          delay={0.1}
          className="mt-6 sm:mt-9 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center"
        >
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <ActionButton href="/contact" variant="primary" surface="dark" size="lg">
                Start web engineering sprint
              </ActionButton>
              <ActionButton
                href="#case-study"
                variant="secondary"
                surface="dark"
                size="lg"
                showArrow={false}
              >
                View Case Study
              </ActionButton>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js 15+", "TypeScript 5+", "Tailwind CSS", "WCAG 2.1 AA", "Lighthouse 95+"].map(
                (chip) => (
                  <TagChip key={chip} surface="dark">
                    {chip}
                  </TagChip>
                )
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="font-body-lg text-[14px] sm:text-[16px] leading-relaxed text-on-dark-muted max-w-[460px]">
              We engineer production web applications that blend brutalist design clarity with
              serious frontend engineering. Built on Next.js, TypeScript, and atomic design tokens.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 2. WHAT'S INCLUDED */}
      <Section surface="plain">
        <Reveal>
          <SectionHeading
            eyebrow="The Deliverables"
            title="What’s included in every platform."
            description="Production reliability baked in across rendering, design systems, CMS pipelines, and automated accessibility."
            layout="split"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {WHATS_INCLUDED.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} surface="light" padding="md" className="h-full">
                <div className="flex flex-col gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-surface-subtle border border-border flex items-center justify-center text-brand-primary">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-headline-sm text-[20px] font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* 3. TECH STACK BENTO */}
      <Section surface="subtle">
        <Reveal>
          <SectionHeading
            eyebrow="Standardized Tooling"
            title="Modern stack. Zero technical debt."
            layout="split"
            description="Every platform is engineered on battle-tested tooling with clean separation of concerns and strict static typing."
          />
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TECH_STACK.map((tech) => (
            <Card key={tech.name} surface="light" padding="sm" className="h-full">
              <div>
                <span className="font-label-caps text-[10px] text-brand-accent-text uppercase tracking-[0.12em] font-semibold">
                  {tech.role}
                </span>
                <h3 className="font-semibold text-[18px] text-text-primary mt-1.5">
                  {tech.name}
                </h3>
              </div>
              <p className="text-[12px] text-text-muted mt-3 leading-snug">
                {tech.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. RELATED CASE STUDY CARD */}
      <Section surface="plain" id="case-study">
        <Card surface="light" padding="lg" hoverable={false}>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 h-72 sm:h-96 rounded-[18px] sm:rounded-[22px] overflow-hidden relative border border-border bg-surface-dark">
              <ParallaxMedia fill range={["-8%", "8%"]} scaleRange={[1.08, 1.01]}>
                <Image
                  src={puretone.image}
                  alt={puretone.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ParallaxMedia>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark/75 via-transparent to-transparent"
              />
              {puretone.metrics && (
                <div className="absolute bottom-5 left-5">
                  <span className="px-3.5 py-1.5 rounded-full border border-white/[0.16] bg-surface-dark/65 backdrop-blur-md text-white text-[12px] font-semibold">
                    {puretone.metrics}
                  </span>
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <EyebrowPill surface="light">Featured Case Study</EyebrowPill>
              <h2 className="font-headline-lg text-[clamp(1.65rem,3vw,2.35rem)] text-text-primary font-medium tracking-[-0.03em]">
                {puretone.title}
              </h2>
              <p className="font-body-md text-[15px] text-text-muted leading-relaxed">
                {puretone.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {puretone.tags.map((t) => (
                  <TagChip key={t} surface="light">
                    {t}
                  </TagChip>
                ))}
              </div>
              <div className="pt-4">
                <ActionButton href="/portfolio" variant="primary" surface="light" size="md">
                  Explore full portfolio
                </ActionButton>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* 5. DARK CALL-TO-ACTION BAND */}
      <Section surface="dark">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <EyebrowPill surface="dark">Kickoff in 5–7 Days</EyebrowPill>
            <h2 className="font-headline-md text-[clamp(1.5rem,2.6vw,2.15rem)] text-on-dark font-medium tracking-[-0.025em]">
              Ready to engineer your next web platform?
            </h2>
            <p className="font-body-md text-[15px] text-on-dark-muted leading-relaxed">
              Book a technical discovery session with a founding partner to review your PRD and architecture scope.
            </p>
          </div>
          <div className="flex-shrink-0">
            <ActionButton href="/contact" variant="primary" surface="dark" size="lg">
              Book strategy call
            </ActionButton>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
