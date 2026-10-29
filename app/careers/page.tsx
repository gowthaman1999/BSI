import React from "react";
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Code2,
  DollarSign,
  Laptop,
  Sparkles,
  MapPin,
} from "lucide-react";
import { CAREER_ROLES } from "@/lib/data";

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
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-12 sm:gap-20">
        {/* 1. HERO BENTO SECTION */}
        <section className="w-full">
          <div className="relative rounded-[32px] p-2 sm:p-3 overflow-hidden bg-gradient-to-br from-[#faf9f6] via-[#f5f4ef] to-[#edece6] border border-black/[0.05] shadow-[0_20px_60px_-15px_rgba(255,90,31,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-8 bg-gradient-to-b from-[#ffffff] to-[#fbfbf9] border border-black/[0.06] rounded-[28px] p-6 sm:p-10 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff5a1f]" />
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                      Principal Requisitions
                    </span>
                  </div>
                  <h1 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg lg:text-display-hero tracking-[-0.03em] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#111111] via-[#222222] to-[#444444]">
                    Build software with people who care about craft.
                  </h1>
                  <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    We hire high-agency engineers and designers who enjoy deep focus, rigorous standards, and building scalable digital systems for U.S. clients.
                  </p>
                </div>
                <div className="pt-8 flex items-center gap-3">
                  <a
                    href="#open-roles"
                    className="h-12 px-7 rounded-full bg-primary text-white font-semibold text-[14px] inline-flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    View open roles
                  </a>
                </div>
              </div>

              {/* Stat Card */}
              <div className="lg:col-span-4 bg-tertiary text-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-white/[0.08] shadow-xl">
                <div>
                  <span className="font-label-caps text-label-caps uppercase text-[#ff5a1f] tracking-wider">
                    Studio Culture
                  </span>
                  <div className="text-[44px] font-bold text-white mt-2 leading-none">
                    100% Async
                  </div>
                  <p className="text-[14px] text-[#cac6c3] mt-3 leading-relaxed">
                    Zero micromanagement. We measure outcomes, code quality, and delivery consistency.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/[0.08]">
                  <span className="text-[12px] font-medium text-white/80">
                    Average tenure: 4.2 years across senior engineering staff.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRINCIPLES */}
        <section className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              The Blackstone Standard
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              How we build together.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STUDIO_PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 flex flex-col gap-3 border border-black/[0.04] shadow-sm"
              >
                <span className="font-label-caps text-label-caps uppercase text-[#ff5a1f] tracking-wider">
                  {p.tag}
                </span>
                <h3 className="font-headline-sm text-[20px] font-bold text-primary">
                  {p.title}
                </h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. BENEFITS BENTO */}
        <section className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              Benefits & Compensation
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              Engineered for principal performance.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 flex items-start gap-4 border border-black/[0.04] shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-headline-sm text-[19px] font-bold text-primary">
                      {b.title}
                    </h3>
                    <p className="font-body-sm text-on-surface-variant leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. OPEN ROLES */}
        <section className="w-full flex flex-col gap-5" id="open-roles">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              Open Requisitions
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              Current principal requisitions.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {CAREER_ROLES.map((role) => (
              <div
                key={role.id}
                className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 border border-black/[0.04] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                      {role.department}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-on-surface-variant font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#ff5a1f]" />
                      {role.location}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-[22px] font-bold text-primary mt-1">
                    {role.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {role.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-surface-container text-[11px] text-on-surface font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href={`mailto:careers@blackstoneinfomatics.com?subject=Application:%20${encodeURIComponent(
                      role.title
                    )}`}
                    className="h-12 px-7 rounded-full bg-primary text-white font-semibold text-[14px] inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    <span>Apply for role</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. HIRING PROCESS */}
        <section className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              The Process
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              Transparent, paid, respectful of your time.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIRING_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase text-[#ff5a1f] tracking-wider">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-bold text-on-surface-variant">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-[18px] font-bold text-primary mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. HIGH CONTRAST DARK CTA */}
        <section className="w-full">
          <div className="bg-tertiary text-white rounded-[28px] p-8 sm:p-12 border border-white/[0.08] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="font-label-caps text-label-caps uppercase text-[#ff5a1f] tracking-wider">
                Open Inquiries
              </span>
              <h2 className="font-headline-md text-headline-sm sm:text-headline-md text-white font-semibold">
                Don&apos;t see your exact role?
              </h2>
              <p className="font-body-md text-[#cac6c3] max-w-xl">
                We are always eager to talk with outstanding full-stack engineers, design systems architects, and technical project managers.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="mailto:careers@blackstoneinfomatics.com?subject=Open%20Engineering%20Application"
                className="h-12 px-8 rounded-full bg-gradient-to-r from-[#ff5a1f] to-[#e04810] text-white font-semibold text-[14px] inline-flex items-center justify-center hover:shadow-lg transition-all"
              >
                Send open application
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

