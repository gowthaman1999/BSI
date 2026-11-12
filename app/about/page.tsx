import React from "react";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, Code2, Users, Layers, Zap } from "lucide-react";
import { PageShell, Section, Reveal, ParallaxMedia } from "@/components/ui/Section";
import { SectionHeading, EyebrowPill } from "@/components/ui/Heading";
import { Card, TagChip } from "@/components/ui/Card";
import { ActionButton } from "@/components/ui/Button";

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
    <PageShell>
      {/* 1. HERO SECTION */}
      <Section
        surface="dark-inset"
        ariaLabel="About Studio Hero"
        innerClassName="py-10 sm:py-14 lg:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col">
            <Reveal immediate delay={0}>
              <EyebrowPill surface="dark">Studio Philosophy</EyebrowPill>
            </Reveal>

            <Reveal immediate delay={0.05}>
              <h1 className="mt-5 sm:mt-6 font-display-hero text-[clamp(2.05rem,5vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.03em] text-on-dark">
                A small studio with a high bar.
              </h1>
            </Reveal>

            <Reveal immediate delay={0.1}>
              <p className="mt-5 font-body-lg text-[15px] sm:text-[16px] text-on-dark-muted max-w-2xl leading-relaxed">
                Blackstone Infomatics was founded on a simple premise: ambitious digital
                products don&apos;t require bloated agency rosters. They require small,
                senior-level teams with uncompromising standards for design craft and software rigor.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                <ActionButton href="/contact" variant="primary" surface="dark" size="lg">
                  Start a conversation
                </ActionButton>
                <ActionButton href="/portfolio" variant="secondary" surface="dark" size="lg" showArrow={false}>
                  Explore our work
                </ActionButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal immediate delay={0.15}>
              <div className="relative rounded-[18px] sm:rounded-[22px] overflow-hidden border border-white/[0.12] bg-surface-dark-subtle h-[300px] sm:h-[360px] shadow-dark-card group">
                <ParallaxMedia fill range={["-8%", "8%"]} scaleRange={[1.08, 1.01]}>
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk8H5D_lGy_eNTZOf-OmrfUXS7-CwwCvkecmtHk17g3y8JVX9dSxAaJyOku8uOfmC8y3phEv3eDILiTqx3JUv9xS4iJDxFr7TgL0Tp4d1-_mBh0B2McUgEozYJnJEIPfhRRxmlcIf1a1UM9v_UZG8v5UvHXx8oObZ8KZXnQFVkiR3gCC3MAlAf5SZmkGfU9J7mpkThcV4Rm_8BETFIQgGLOvKPql_KWaAbTCehoPnk"
                    alt="Blackstone Studio Engineering Desk"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </ParallaxMedia>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-transparent to-transparent"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center rounded-full border border-white/[0.16] bg-surface-dark/65 px-3 py-1.5 font-label-caps text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.10em] text-white/95 backdrop-blur-md">
                    Flagship Studio Environment
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 2. VALUES */}
      <Section surface="plain">
        <Reveal>
          <SectionHeading
            eyebrow="The Standard"
            title="Engineering craft meets design precision."
            layout="split"
            description="Every system is engineered to look intentional, load instantaneously, and remain clean to maintain years later."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <Card surface="light" padding="md" className="h-full">
            <div className="flex flex-col gap-3.5">
              <div className="w-10 h-10 rounded-full bg-surface-subtle border border-border flex items-center justify-center text-brand-primary">
                <Code2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-headline-sm text-[20px] text-text-primary font-semibold">
                Clean architectures &amp; typed systems.
              </h3>
              <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                Zero sloppy shortcuts. Every endpoint is strictly typed, every component is modular, and every repository passes automated linting and integration tests.
              </p>
            </div>
          </Card>

          <Card surface="light" padding="md" className="h-full">
            <div className="flex flex-col gap-3.5">
              <div className="w-10 h-10 rounded-full bg-surface-subtle border border-border flex items-center justify-center text-brand-primary">
                <Users className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-headline-sm text-[20px] text-text-primary font-semibold">
                Direct access &amp; open pipelines.
              </h3>
              <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                We believe in total transparency. Clients participate in our Slack channels, watch progress on Linear boards, and review pull requests in real time.
              </p>
            </div>
          </Card>

          <Card surface="light" padding="md" className="h-full">
            <div className="flex flex-col gap-3.5">
              <div className="w-10 h-10 rounded-full bg-surface-subtle border border-border flex items-center justify-center text-brand-primary">
                <Zap className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-headline-sm text-[20px] text-text-primary font-semibold">
                Pixel integrity &amp; 60fps fluidity.
              </h3>
              <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                What is designed in Figma matches what runs in the browser down to the exact sub-pixel padding, border radius, easing curve, and dark mode tint.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* 3. WORKING RITUALS */}
      <Section surface="subtle">
        <Reveal>
          <SectionHeading
            eyebrow="Operating Model"
            title="How we work together."
            layout="split"
            description="Async rigor combined with synchronous EST/PST working windows so momentum never stalls."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {WORKING_RITUALS.map((ritual) => {
            const Icon = ritual.icon;
            return (
              <Card key={ritual.title} surface="light" padding="md" className="h-full">
                <div className="flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-full bg-surface-subtle border border-border flex items-center justify-center text-brand-primary">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-headline-sm text-[18px] text-text-primary font-semibold">
                    {ritual.title}
                  </h3>
                  <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                    {ritual.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* 4. LEADERSHIP & TEAM */}
      <Section surface="plain">
        <Reveal>
          <SectionHeading
            eyebrow="Studio Leadership"
            title="The engineers & designers building your product."
            layout="split"
            description="A tight senior bench with deep specialization across architecture, design systems, and frontend craft."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.name} surface="light" padding="md" className="h-full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-headline-sm text-[20px] font-semibold text-text-primary">
                    {member.name}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-brand-primary" aria-hidden="true" />
                </div>
                <span className="font-label-caps text-[10px] sm:text-[11px] uppercase text-brand-accent-text tracking-[0.1em] font-semibold">
                  {member.role}
                </span>
                <p className="font-body-sm text-[14px] text-text-muted leading-relaxed mt-2">
                  {member.bio}
                </p>
              </div>
              <div className="pt-5 flex flex-wrap gap-1.5 border-t border-border mt-5">
                {member.tags.map((t) => (
                  <TagChip key={t} surface="light">
                    {t}
                  </TagChip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 5. 1% CSR TEASER (Dark Showcase) */}
      <Section surface="dark">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <EyebrowPill surface="dark" icon={HeartHandshake}>
              Social &amp; Ecological Responsibility
            </EyebrowPill>
            <h2 className="font-headline-lg text-[clamp(1.65rem,3vw,2.35rem)] text-on-dark font-medium tracking-[-0.025em]">
              1% of engineering hours dedicated to ecological &amp; community initiatives.
            </h2>
            <p className="font-body-md text-[15px] text-on-dark-muted leading-relaxed">
              We believe engineering leverage should support the natural world. Every quarter, our team donates software engineering and spatial mapping infrastructure to biodiversity conservation projects across the Western Ghats.
            </p>
          </div>
          <div className="flex-shrink-0">
            <ActionButton href="/portfolio" variant="primary" surface="dark" size="lg">
              View Western Ghats project
            </ActionButton>
          </div>
        </div>
      </Section>

      {/* 6. CLOSING CTA */}
      <Section surface="subtle">
        <SectionHeading
          eyebrow="Work With Us"
          title="Ready to work with a team that cares about craft?"
          description="Tell us about your technical roadmap and target delivery date."
          layout="center"
        />
        <div className="flex justify-center">
          <ActionButton href="/contact" variant="primary" surface="light" size="lg">
            Book a strategy call
          </ActionButton>
        </div>
      </Section>
    </PageShell>
  );
}
