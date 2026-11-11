import React from "react";
import {
  Clock,
  DollarSign,
  Laptop,
  Sparkles,
  MapPin,
} from "lucide-react";
import { CAREER_ROLES } from "@/lib/data";
import { PageShell, Section, Reveal } from "@/components/ui/Section";
import { SectionHeading, EyebrowPill } from "@/components/ui/Heading";
import { Card, TagChip } from "@/components/ui/Card";
import { ActionButton } from "@/components/ui/Button";

export const metadata = {
  title: "Careers & Principal Engineering — Blackstone Infomatics",
  description:
    "Build software with people who care about craft. Explore open principal engineering and design roles with async-first autonomy.",
};

const STUDIO_PRINCIPLES = [
  {
    tag: "Integrity",
    title: "Craft Over Speed",
    desc: "We do not ship half-baked prototypes dressed up as production code. We value clean architectural structure and maintainable codebases.",
  },
  {
    tag: "Standard",
    title: "Zero Technical Debt",
    desc: "Every pull request must be strictly typed, well-commented, accessible according to WCAG 2.1 AA, and covered by automated tests.",
  },
  {
    tag: "Culture",
    title: "Asynchronous Autonomy",
    desc: "We minimize useless meetings. We coordinate through clear Linear issues, detailed RFC documents, and async Slack threads.",
  },
];

const BENEFITS = [
  {
    icon: Laptop,
    title: "Remote & Flexible",
    desc: "Work from anywhere with dedicated daily overlap for standups and PR reviews in U.S. time zones.",
  },
  {
    icon: DollarSign,
    title: "Principal Compensation",
    desc: "Top 5% market compensation ($120k–$180k USD equivalent) with transparent tiers and profit-sharing.",
  },
  {
    icon: Sparkles,
    title: "Hardware & Desk Stipend",
    desc: "$3,500 initial setup stipend for Apple Silicon workstations, 4K displays, and ergonomic chairs.",
  },
  {
    icon: Clock,
    title: "Continuous Learning",
    desc: "$2,000 annual budget for technical books, courses, conference registrations, and certifications.",
  },
];

const HIRING_STEPS = [
  {
    step: "Step 01",
    time: "48 Hours",
    title: "Application Review",
    desc: "A principal engineer reviews your GitHub and portfolio projects. No AI automated resume filters.",
  },
  {
    step: "Step 02",
    time: "45 Minutes",
    title: "Technical Discovery",
    desc: "An informal conversation discussing past architectural challenges and engineering philosophies.",
  },
  {
    step: "Step 03",
    time: "3 Hours Max",
    title: "Paid Architecture Challenge",
    desc: "A real-world design or coding scenario. Take-home, strictly time-boxed, and 100% paid.",
  },
  {
    step: "Step 04",
    time: "Same Day",
    title: "Founder Alignment & Offer",
    desc: "Meet the founders, discuss long-term alignment, and receive a formal transparent written offer.",
  },
];

export default function CareersPage() {
  return (
    <PageShell>
      {/* 1. HERO SECTION */}
      <Section
        surface="dark-inset"
        ariaLabel="Careers Hero"
        innerClassName="py-10 sm:py-14 lg:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-8 flex flex-col">
            <Reveal immediate delay={0}>
              <EyebrowPill surface="dark">Principal Requisitions</EyebrowPill>
            </Reveal>

            <Reveal immediate delay={0.05}>
              <h1 className="mt-5 sm:mt-6 font-display-hero text-[clamp(2.05rem,5vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.03em] text-on-dark">
                Build software with people who care about craft.
              </h1>
            </Reveal>

            <Reveal immediate delay={0.1}>
              <p className="mt-5 font-body-lg text-[15px] sm:text-[16px] text-on-dark-muted max-w-2xl leading-relaxed">
                We hire high-agency engineers and designers who enjoy deep focus, rigorous standards, and building scalable digital systems for U.S. clients.
              </p>
              <div className="mt-7">
                <ActionButton href="#open-roles" variant="primary" surface="dark" size="lg">
                  View open roles
                </ActionButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal immediate delay={0.15}>
              <div className="rounded-[20px] sm:rounded-[24px] border border-border-dark-strong bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-dark-card">
                <div>
                  <span className="font-label-caps text-[10px] sm:text-[11px] uppercase text-brand-primary tracking-[0.12em] font-semibold">
                    Studio Culture
                  </span>
                  <div className="text-[40px] sm:text-[46px] font-semibold tracking-[-0.03em] text-on-dark mt-2 leading-none">
                    100% Async
                  </div>
                  <p className="text-[14px] text-on-dark-muted mt-3 leading-relaxed">
                    Zero micromanagement. We measure outcomes, code quality, and delivery consistency.
                  </p>
                </div>
                <div className="pt-5 border-t border-border-dark">
                  <span className="text-[12px] font-medium text-white/85">
                    Average tenure: 4.2 years across senior engineering staff.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 2. PRINCIPLES */}
      <Section surface="plain">
        <Reveal>
          <SectionHeading
            eyebrow="The Blackstone Standard"
            title="How we build together."
            layout="split"
            description="High autonomy powered by written RFCs, automated checks, and mutual technical respect."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {STUDIO_PRINCIPLES.map((p) => (
            <Card key={p.title} surface="light" padding="md" className="h-full">
              <div className="flex flex-col gap-3">
                <span className="font-label-caps text-[11px] uppercase text-brand-accent-text tracking-[0.12em] font-semibold">
                  {p.tag}
                </span>
                <h3 className="font-headline-sm text-[20px] font-semibold text-text-primary">
                  {p.title}
                </h3>
                <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. BENEFITS BENTO */}
      <Section surface="subtle">
        <Reveal>
          <SectionHeading
            eyebrow="Benefits & Compensation"
            title="Engineered for principal performance."
            layout="split"
            description="Competitive compensation, hardware stipends, and dedicated continuous learning budgets."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <Card key={b.title} surface="light" padding="md" className="h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface-subtle border border-border flex items-center justify-center text-brand-primary shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-headline-sm text-[19px] font-semibold text-text-primary">
                      {b.title}
                    </h3>
                    <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* 4. OPEN ROLES */}
      <Section surface="plain" id="open-roles">
        <Reveal>
          <SectionHeading
            eyebrow="Open Requisitions"
            title="Current principal requisitions."
            layout="split"
            description="Every requisition works directly alongside founding architects on U.S. client platforms."
          />
        </Reveal>

        <div className="flex flex-col gap-4 sm:gap-5">
          {CAREER_ROLES.map((role) => (
            <Card key={role.id} surface="light" padding="md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <TagChip surface="light">{role.department}</TagChip>
                    <span className="flex items-center gap-1.5 text-xs text-text-muted font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand-primary" aria-hidden="true" />
                      {role.location}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-[22px] font-semibold text-text-primary mt-1">
                    {role.title}
                  </h3>
                  <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {role.tags.map((t) => (
                      <TagChip key={t} surface="light">
                        {t}
                      </TagChip>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <ActionButton
                    href={`mailto:careers@blackstoneinfomatics.com?subject=Application:%20${encodeURIComponent(
                      role.title
                    )}`}
                    variant="primary"
                    surface="light"
                    size="md"
                  >
                    Apply for role
                  </ActionButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 5. HIRING PROCESS */}
      <Section surface="subtle">
        <Reveal>
          <SectionHeading
            eyebrow="The Process"
            title="Transparent, paid, respectful of your time."
            layout="split"
            description="Four fast, humane stages designed by engineers."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {HIRING_STEPS.map((step) => (
            <Card key={step.step} surface="light" padding="md" className="h-full">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-label-caps text-[10px] sm:text-[11px] uppercase text-brand-accent-text tracking-[0.12em] font-semibold">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold text-text-muted">
                    {step.time}
                  </span>
                </div>
                <h3 className="font-headline-sm text-[18px] font-semibold text-text-primary mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 6. HIGH CONTRAST DARK CTA */}
      <Section surface="dark">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <EyebrowPill surface="dark">Open Inquiries</EyebrowPill>
            <h2 className="font-headline-md text-[clamp(1.5rem,2.6vw,2.15rem)] text-on-dark font-medium tracking-[-0.025em]">
              Don&apos;t see your exact role?
            </h2>
            <p className="font-body-md text-[15px] text-on-dark-muted leading-relaxed">
              We are always eager to talk with outstanding full-stack engineers, design systems architects, and technical project managers.
            </p>
          </div>
          <div className="flex-shrink-0">
            <ActionButton
              href="mailto:careers@blackstoneinfomatics.com?subject=Open%20Engineering%20Application"
              variant="primary"
              surface="dark"
              size="lg"
            >
              Send open application
            </ActionButton>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
