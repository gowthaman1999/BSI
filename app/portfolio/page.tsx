import React from "react";
import { PortfolioGallery } from "@/components/sections/portfolio/PortfolioGallery";
import { PageShell, Section, Reveal } from "@/components/ui/Section";
import { SectionHeading, EyebrowPill } from "@/components/ui/Heading";
import { ActionButton } from "@/components/ui/Button";

export const metadata = {
  title: "Selected Work & Portfolio — Blackstone Infomatics",
  description:
    "Explore recent web applications, design systems, and software platforms engineered for ambitious growing enterprises.",
};

export default function PortfolioPage() {
  return (
    <PageShell>
      {/* 1. HERO SECTION */}
      <Section
        surface="dark-inset"
        ariaLabel="Portfolio Hero"
        innerClassName="py-10 sm:py-14 lg:py-16"
      >
        <Reveal immediate delay={0}>
          <EyebrowPill surface="dark">Selected Partnerships</EyebrowPill>
        </Reveal>

        <Reveal immediate delay={0.05}>
          <h1 className="mt-5 sm:mt-6 font-display-hero text-[clamp(2.05rem,5.2vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.03em] text-on-dark max-w-4xl">
            Selected work.
          </h1>
        </Reveal>

        <Reveal
          immediate
          delay={0.1}
          className="mt-6 sm:mt-9 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center"
        >
          <div className="lg:col-span-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <ActionButton href="/contact" variant="primary" surface="dark" size="lg">
              Start project discovery
            </ActionButton>
            <ActionButton href="/services" variant="secondary" surface="dark" size="lg" showArrow={false}>
              Explore services
            </ActionButton>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body-lg text-[14px] sm:text-[16px] leading-relaxed text-on-dark-muted max-w-[460px]">
              High-performance web applications, interactive 3D configurators, and modern brand
              systems delivered with uncompromising technical craft.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 2. GALLERY WITH FILTERS */}
      <Section surface="plain">
        <PortfolioGallery />
      </Section>

      {/* 3. CLOSING CTA */}
      <Section surface="subtle">
        <SectionHeading
          eyebrow="Next Step"
          title="Have a project in mind?"
          description="Let's evaluate your technical scope and assemble a dedicated delivery team."
          layout="center"
        />
        <div className="flex justify-center">
          <ActionButton href="/contact" variant="primary" surface="light" size="lg">
            Start project discovery
          </ActionButton>
        </div>
      </Section>
    </PageShell>
  );
}
