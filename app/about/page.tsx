import React from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Code2, Users, Layers, Zap } from "lucide-react";

export const metadata = {
  title: "About Studio — Blackstone Infomatics",
  description:
    "A small studio with a high bar. We partner with ambitious U.S. teams to engineer clean, scalable web applications.",
};

const TEAM_MEMBERS = [
  {
    name: "Arun Kumar",
    role: "Founding Partner & Systems Architect",
    bio: "Ex-enterprise infrastructure lead with 12+ years designing distributed backend systems and high-throughput APIs.",
    tags: ["Systems Architecture", "PostgreSQL", "Cloud Operations"],
  },
  {
    name: "Maya Reynolds",
    role: "Design Director & Design Systems Lead",
    bio: "Specializes in atomic design systems, micro-interactions, and accessibility across complex web ecosystems.",
    tags: ["Design Systems", "Figma Variables", "WCAG 2.1 AA"],
  },
  {
    name: "Siddharth Lavanya",
    role: "Principal Full-Stack Engineer",
    bio: "Frontend authority specializing in Next.js Server Components, React Compiler architectures, and state optimization.",
    tags: ["Next.js", "TypeScript", "Performance"],
  },
  {
    name: "Daniel Park",
    role: "Lead DevOps & Infrastructure",
    bio: "Focuses on zero-downtime deployment pipelines, Kubernetes cluster hardening, and automated CI/CD workflows.",
    tags: ["Kubernetes", "AWS / GCP", "CI/CD"],
  },
  {
    name: "Vidya Thogai",
    role: "Head of Product Strategy",
    bio: "Bridges technical roadmap milestones with enterprise business objectives and user research validation.",
    tags: ["Product Strategy", "User Research", "Agile Sprints"],
  },
  {
    name: "Ethan Vance",
    role: "Senior Frontend Engineer",
    bio: "Obsessed with 60fps animations, layout geometry, responsive typography, and cross-browser visual fidelity.",
    tags: ["Tailwind CSS", "Framer Motion", "UI Engineering"],
  },
];

const WORKING_RITUALS = [
  {
    title: "Direct Access",
    desc: "No account managers playing telephone. You speak directly with the senior engineers and designers crafting your product.",
    icon: Users,
  },
  {
    title: "Dual-Track Sprints",
    desc: "Design and engineering run in parallel tracks. As wireframes are validated, architectural scaffolding begins immediately.",
    icon: Layers,
  },
  {
    title: "Live from Day One",
    desc: "Automated preview deployments on every pull request. Test interactive builds on real devices from week one.",
    icon: Zap,
  },
  {
    title: "Total Ownership",
    desc: "Clean codebases, complete documentation, and 100% intellectual property transfer upon sprint invoice clearance.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-12 sm:gap-20">
        {/* 1. HERO BENTO SECTION */}
        <section className="w-full">
          <div className="relative rounded-[32px] p-2 sm:p-3 overflow-hidden bg-gradient-to-br from-[#faf9f6] via-[#f5f4ef] to-[#edece6] border border-black/[0.05] shadow-[0_20px_60px_-15px_rgba(255,90,31,0.06)]">
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left Hero (8 Cols) */}
              <div className="lg:col-span-8 bg-gradient-to-b from-[#ffffff] to-[#fbfbf9] border border-black/[0.06] rounded-[28px] p-6 sm:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff5a1f]" />
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                      Studio Philosophy
                    </span>
                  </div>
                  <h1 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg lg:text-display-hero tracking-[-0.03em] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#111111] via-[#222222] to-[#444444]">
                    A small studio with a high bar.
                  </h1>
                  <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
                    Blackstone Infomatics was founded on a simple premise: ambitious digital
                    products don&apos;t require bloated agency rosters. They require small,
                    senior-level teams with uncompromising standards for design craft and software rigor.
                  </p>
                </div>
                <div className="pt-8 sm:pt-10 flex items-center gap-3">
                  <a
                    href="/contact"
                    className="h-12 px-7 rounded-full bg-primary text-white font-label-button text-[14px] inline-flex items-center justify-center hover:bg-neutral-800 transition-colors"
                  >
                    Start a conversation
                  </a>
                  <a
                    href="/portfolio"
                    className="h-12 px-7 rounded-full bg-surface-container-high border border-black/[0.05] text-primary font-label-button text-[14px] inline-flex items-center justify-center hover:bg-surface-dim transition-colors"
                  >
                    Explore our work
                  </a>
                </div>
              </div>

              {/* Right Hero (4 Cols) */}
              <div className="lg:col-span-4 relative rounded-[28px] overflow-hidden border border-black/[0.06] shadow-sm min-h-[300px] group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk8H5D_lGy_eNTZOf-OmrfUXS7-CwwCvkecmtHk17g3y8JVX9dSxAaJyOku8uOfmC8y3phEv3eDILiTqx3JUv9xS4iJDxFr7TgL0Tp4d1-_mBh0B2McUgEozYJnJEIPfhRRxmlcIf1a1UM9v_UZG8v5UvHXx8oObZ8KZXnQFVkiR3gCC3MAlAf5SZmkGfU9J7mpkThcV4Rm_8BETFIQgGLOvKPql_KWaAbTCehoPnk"
                  alt="Blackstone Studio Engineering Desk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <span className="font-label-caps text-label-caps text-white/95 uppercase tracking-wider backdrop-blur-md px-3 py-1 rounded-full bg-black/40 border border-white/10">
                    Flagship Studio Environment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. VALUES BENTO */}
        <section className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              The Standard
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              Engineering craft meets design precision.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 border border-black/[0.04] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                Clean architectures & typed systems.
              </h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Zero sloppy shortcuts. Every endpoint is strictly typed, every component is modular, and every repository passes automated linting and integration tests.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 border border-black/[0.04] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                Direct access & open pipelines.
              </h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                We believe in total transparency. Clients participate in our Slack channels, watch progress on Linear boards, and review pull requests in real time.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 border border-black/[0.04] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-[#ff5a1f]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                Pixel integrity & 60fps fluidity.
              </h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                What is designed in Figma matches what runs in the browser down to the exact sub-pixel padding, border radius, easing curve, and dark mode tint.
              </p>
            </div>
          </div>
        </section>

        {/* 3. WORKING RITUALS */}
        <section className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              Operating Model
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              How we work together.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKING_RITUALS.map((ritual) => {
              const Icon = ritual.icon;
              return (
                <div
                  key={ritual.title}
                  className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] shadow-sm"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-headline-sm text-[18px] text-primary font-semibold">
                      {ritual.title}
                    </h3>
                    <p className="font-body-sm text-on-surface-variant leading-relaxed">
                      {ritual.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. LEADERSHIP & TEAM */}
        <section className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 px-2">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              Studio Leadership
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
              The engineers & designers building your product.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-sm text-[20px] font-bold text-primary">
                      {member.name}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-[#ff5a1f]" />
                  </div>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    {member.role}
                  </span>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed mt-2">
                    {member.bio}
                  </p>
                </div>
                <div className="pt-6 flex flex-wrap gap-1.5 border-t border-black/[0.04] mt-4">
                  {member.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full bg-surface-container text-[11px] font-medium text-on-surface"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. 1% CSR TEASER */}
        <section className="w-full">
          <div className="bg-tertiary text-on-tertiary rounded-[28px] p-6 sm:p-9 border border-white/[0.08] shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2 text-emerald-400">
                <HeartHandshake className="w-5 h-5" />
                <span className="font-label-caps text-label-caps uppercase tracking-wider">
                  Social & Ecological Responsibility
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-white font-semibold">
                1% of engineering hours dedicated to ecological & community initiatives.
              </h2>
              <p className="font-body-md text-[#cac6c3] leading-relaxed">
                We believe engineering leverage should support the natural world. Every quarter, our team donates software engineering and spatial mapping infrastructure to biodiversity conservation projects across the Western Ghats.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/portfolio"
                className="h-12 px-7 rounded-full bg-white text-primary font-semibold text-[14px] inline-flex items-center justify-center hover:bg-neutral-200 transition-colors shadow-md"
              >
                View Western Ghats project
              </a>
            </div>
          </div>
        </section>

        {/* 6. CLOSING CTA */}
        <section className="w-full text-center py-6">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary font-semibold tracking-tight">
              Ready to work with a team that cares about craft?
            </h2>
            <p className="font-body-lg text-on-surface-variant">
              Tell us about your technical roadmap and target delivery date.
            </p>
            <a
              href="/contact"
              className="mt-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#ff5a1f] to-[#e04810] text-white font-semibold text-[14px] inline-flex items-center justify-center hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Book a strategy call
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

