import React from "react";
import { ArrowUpRight, Check, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { ALL_SERVICES_CATALOG } from "@/lib/data";

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
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-12 sm:gap-20">
        {/* 1. HERO BENTO SECTION */}
        <section className="w-full">
          <div className="relative rounded-[32px] p-2 sm:p-3 overflow-hidden bg-gradient-to-br from-[#faf9f6] via-[#f5f4ef] to-[#edece6] border border-black/[0.05] shadow-[0_20px_60px_-15px_rgba(255,90,31,0.06)]">
            <div className="bg-gradient-to-b from-[#ffffff] to-[#fbfbf9] border border-black/[0.06] rounded-[28px] p-6 sm:p-12 flex flex-col gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5a1f]" />
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                  Full-Lifecycle Digital Delivery
                </span>
              </div>
              <h1 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg lg:text-display-hero tracking-[-0.03em] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#111111] via-[#222222] to-[#444444] max-w-4xl">
                Everything your digital presence needs.
              </h1>
              <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                From initial design tokens and interactive Figma prototypes to scalable Next.js
                deployments, mobile engineering, and data-driven marketing — we eliminate the friction of coordinating multiple agencies.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="h-12 px-7 rounded-full bg-primary text-white font-label-button text-[14px] inline-flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  Schedule technical discovery
                </a>
                <a
                  href="/web-design-development"
                  className="h-12 px-7 rounded-full bg-surface-container-high border border-black/[0.05] text-primary font-label-button text-[14px] inline-flex items-center justify-center hover:bg-surface-dim transition-colors"
                >
                  Explore Web Dev focus
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SERVICES CATALOG (11 DOMAINS) */}
        <section className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              Capabilities Matrix
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              The 11 core disciplines we master.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_SERVICES_CATALOG.map((srv, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-[11px] font-semibold uppercase text-on-surface-variant">
                      {srv.category}
                    </span>
                    <span className="flex items-center gap-1 text-[12px] font-medium text-on-surface-variant">
                      <Clock className="w-3.5 h-3.5 text-[#ff5a1f]" />
                      {srv.timeline}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-[20px] font-bold text-primary mt-1">
                    {srv.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.04] mt-4 flex flex-col gap-1">
                  <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold">
                    Key Deliverables:
                  </span>
                  <span className="text-[12px] text-primary/80 font-medium leading-snug">
                    {srv.deliverables}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. ENGAGEMENT MODELS */}
        <section className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              Collaboration Structures
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              How we engage with your team.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.title}
                className={`rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border shadow-sm transition-all ${
                  model.highlight
                    ? "bg-tertiary text-white border-white/[0.1] shadow-xl relative overflow-hidden"
                    : "bg-surface-container-lowest text-primary border-black/[0.04]"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-label-caps text-label-caps uppercase tracking-wider font-semibold ${
                        model.highlight ? "text-[#ff5a1f]" : "text-on-surface-variant"
                      }`}
                    >
                      {model.timeline}
                    </span>
                    <span
                      className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold uppercase ${
                        model.highlight
                          ? "bg-[#ff5a1f] text-white"
                          : "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      {model.badge}
                    </span>
                  </div>
                  <h3
                    className={`font-headline-md text-[24px] font-semibold tracking-tight ${
                      model.highlight ? "text-white" : "text-primary"
                    }`}
                  >
                    {model.title}
                  </h3>
                  <p
                    className={`font-body-sm leading-relaxed ${
                      model.highlight ? "text-[#cac6c3]" : "text-on-surface-variant"
                    }`}
                  >
                    {model.description}
                  </p>

                  <div className="pt-4 border-t border-black/[0.04] flex flex-col gap-2.5">
                    {model.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-[13px]">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            model.highlight ? "text-[#ff5a1f]" : "text-emerald-600"
                          }`}
                        />
                        <span
                          className={
                            model.highlight ? "text-[#e6e1df]" : "text-on-surface"
                          }
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="/contact"
                    className={`w-full h-12 rounded-full font-semibold text-[14px] flex items-center justify-center gap-1 transition-all ${
                      model.highlight
                        ? "bg-gradient-to-r from-[#ff5a1f] to-[#e04810] text-white hover:shadow-lg"
                        : "bg-surface-container text-primary hover:bg-surface-dim"
                    }`}
                  >
                    <span>Discuss this model</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CLOSING CTA BANNER */}
        <section className="w-full">
          <div className="bg-surface-container-lowest rounded-[28px] p-8 sm:p-12 border border-black/[0.04] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="font-label-caps text-label-caps uppercase text-[#ff5a1f] tracking-wider">
                Custom Roadmap
              </span>
              <h2 className="font-headline-md text-headline-sm sm:text-headline-md text-primary font-semibold">
                Not sure what you need? Book a free strategy call.
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-xl">
                We review your current code, infrastructure, and design files to recommend the most cost-effective path forward.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/contact"
                className="h-12 px-8 rounded-full bg-primary text-white font-semibold text-[14px] inline-flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-md"
              >
                Schedule 30-min call
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

