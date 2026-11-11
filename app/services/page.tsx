import React from "react";
import { Check, Clock } from "lucide-react";
import { ALL_SERVICES_CATALOG } from "@/lib/data";
import { PageShell, Section, Reveal } from "@/components/ui/Section";
import { SectionHeading, EyebrowPill } from "@/components/ui/Heading";
import { Card, TagChip } from "@/components/ui/Card";
import { ActionButton } from "@/components/ui/Button";

export const metadata = {
  title: "Services & Capabilities — Blackstone Infomatics",
  description:
    "Everything your digital presence needs. Web development, UI/UX design, custom software, mobile apps, and growth marketing.",
};

const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Sprint Team",
    timeline: "2-Week Sprints",
    badge: "Most Popular",
    description:
      "A dedicated, embedded squad of senior engineers and designers operating directly in your Slack and Linear boards.",
    features: [
      "Full working day EST/PST overlap",
      "Direct communication with principal engineers",
      "Bi-weekly interactive Zoom demos",
      "Continuous CI/CD preview deployments",
      "Flexible roadmap adjustments per sprint",
    ],
    highlight: true,
  },
  {
    title: "Fixed-Scope Milestone Build",
    timeline: "4–12 Weeks Delivery",
    badge: "Predictable Budget",
    description:
      "Ideal for well-defined new product launches, greenfield platforms, or complete website redesigns with strict deadlines.",
    features: [
      "Rigorous discovery & PRD alignment",
      "Milestone-based payment schedule",
      "Zero hidden variance or hourly creeping",
      "Full WCAG AA accessibility audit",
      "30-day post-launch warranty support",
    ],
    highlight: false,
  },
  {
    title: "Architecture & Advisory",
    timeline: "1–4 Weeks Engagement",
    badge: "Executive Advisory",
    description:
      "High-impact technical audits, design system governance, Core Web Vitals optimization, and fractional CTO consulting.",
    features: [
      "In-depth codebase & security audit",
      "Design token architecture review",
      "Sub-second performance tuning",
      "Cloud infrastructure cost reduction",
      "Comprehensive executive roadmap report",
    ],
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      {/* 1. HERO SECTION (Hero Design Language) */}
      <Section
        surface="dark-inset"
        ariaLabel="Services Hero"
        innerClassName="py-10 sm:py-14 lg:py-16"
      >
        <Reveal immediate delay={0}>
          <EyebrowPill surface="dark">Full-Lifecycle Digital Delivery</EyebrowPill>
        </Reveal>

        <Reveal immediate delay={0.05}>
          <h1 className="mt-5 sm:mt-6 font-display-hero text-[clamp(2.05rem,5.2vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.03em] text-on-dark max-w-4xl">
            Everything your digital presence needs.
          </h1>
        </Reveal>

        <Reveal
          immediate
          delay={0.1}
          className="mt-6 sm:mt-9 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center"
        >
          <div className="lg:col-span-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <ActionButton href="/contact" variant="primary" surface="dark" size="lg">
              Schedule technical discovery
            </ActionButton>
            <ActionButton
              href="/web-design-development"
              variant="secondary"
              surface="dark"
              size="lg"
              showArrow={false}
            >
              Explore Web Dev focus
            </ActionButton>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body-lg text-[14px] sm:text-[16px] leading-relaxed text-on-dark-muted max-w-[460px]">
              From initial design tokens and interactive Figma prototypes to scalable Next.js
              deployments, mobile engineering, and data-driven marketing — we eliminate the
              friction of coordinating multiple agencies.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 2. SERVICES CATALOG (11 DOMAINS) */}
      <Section surface="plain">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities Matrix"
            title="The 11 core disciplines we master."
            description="End-to-end engineering, product design, commerce architecture, and search performance built to production standards."
            layout="split"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {ALL_SERVICES_CATALOG.map((srv, idx) => (
            <Card key={idx} surface="light" padding="md" className="h-full">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between gap-2">
                  <TagChip surface="light">{srv.category}</TagChip>
                  <span className="flex items-center gap-1.5 text-[12px] font-medium text-text-muted">
                    <Clock className="w-3.5 h-3.5 text-brand-primary" aria-hidden="true" />
                    {srv.timeline}
                  </span>
                </div>
                <h3 className="font-headline-sm text-[20px] font-semibold text-text-primary mt-1.5">
                  {srv.title}
                </h3>
                <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-5 border-t border-border mt-5 flex flex-col gap-1">
                <span className="font-label-caps text-[10px] text-brand-accent-text uppercase tracking-[0.12em] font-semibold">
                  Key Deliverables:
                </span>
                <span className="text-[13px] text-text-primary/85 font-medium leading-snug">
                  {srv.deliverables}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. ENGAGEMENT MODELS */}
      <Section surface="subtle">
        <Reveal>
          <SectionHeading
            eyebrow="Collaboration Structures"
            title="How we engage with your team."
            description="Flexible sprint retainers, milestone builds, and executive architecture advisory tailored to your roadmap."
            layout="split"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {ENGAGEMENT_MODELS.map((model) => (
            <Card
              key={model.title}
              surface={model.highlight ? "dark" : "light"}
              padding="md"
              className="h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-label-caps text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-semibold ${
                      model.highlight ? "text-brand-primary" : "text-brand-accent-text"
                    }`}
                  >
                    {model.timeline}
                  </span>
                  <span
                    className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wide ${
                      model.highlight
                        ? "bg-brand-primary text-white"
                        : "bg-surface-subtle border border-border text-text-muted"
                    }`}
                  >
                    {model.badge}
                  </span>
                </div>
                <h3
                  className={`font-headline-md text-[23px] font-semibold tracking-[-0.02em] ${
                    model.highlight ? "text-on-dark" : "text-text-primary"
                  }`}
                >
                  {model.title}
                </h3>
                <p
                  className={`font-body-sm text-[14px] leading-relaxed ${
                    model.highlight ? "text-on-dark-muted" : "text-text-muted"
                  }`}
                >
                  {model.description}
                </p>

                <div
                  className={`pt-4 border-t mt-2 flex flex-col gap-2.5 ${
                    model.highlight ? "border-border-dark" : "border-border"
                  }`}
                >
                  {model.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-[13px]">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          model.highlight ? "text-brand-primary" : "text-brand-accent-text"
                        }`}
                        aria-hidden="true"
                      />
                      <span className={model.highlight ? "text-white/90" : "text-text-primary"}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <ActionButton
                  href="/contact"
                  variant={model.highlight ? "primary" : "secondary"}
                  surface={model.highlight ? "dark" : "light"}
                  size="md"
                  className="w-full justify-between"
                  showArrow={true}
                >
                  Discuss this model
                </ActionButton>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. CLOSING CTA BANNER (Dark Accent Cadence) */}
      <Section surface="dark">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <EyebrowPill surface="dark">Custom Roadmap</EyebrowPill>
            <h2 className="font-headline-md text-[clamp(1.5rem,2.6vw,2.15rem)] text-on-dark font-medium tracking-[-0.025em]">
              Not sure what you need? Book a free strategy call.
            </h2>
            <p className="font-body-md text-[15px] text-on-dark-muted leading-relaxed">
              We review your current code, infrastructure, and design files to recommend the most cost-effective path forward.
            </p>
          </div>
          <div className="flex-shrink-0">
            <ActionButton href="/contact" variant="primary" surface="dark" size="lg">
              Schedule 30-min call
            </ActionButton>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
