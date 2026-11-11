import React from "react";
import { ContactBento } from "@/components/sections/home/ContactBento";
import { PageShell, Section, Reveal } from "@/components/ui/Section";
import { EyebrowPill } from "@/components/ui/Heading";

export const metadata = {
  title: "Contact & Discovery — Blackstone Infomatics",
  description:
    "Schedule a technical discovery session or share your project requirements with our principal engineering team.",
};

export default function ContactPage() {
  return (
    <PageShell>
      {/* 1. HERO HEADER */}
      <Section
        surface="dark-inset"
        ariaLabel="Contact Hero"
        innerClassName="py-10 sm:py-14 lg:py-16"
      >
        <Reveal immediate delay={0}>
          <EyebrowPill surface="dark">Direct Inquiries</EyebrowPill>
        </Reveal>

        <Reveal immediate delay={0.05}>
          <h1 className="mt-5 sm:mt-6 font-display-hero text-[clamp(2.05rem,5.2vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.03em] text-on-dark max-w-4xl">
            Start a project.
          </h1>
        </Reveal>

        <Reveal immediate delay={0.1}>
          <p className="mt-5 font-body-lg text-[15px] sm:text-[16px] text-on-dark-muted max-w-2xl leading-relaxed">
            Whether you need a dedicated senior engineering squad or a turnkey platform build, we
            review your requirements and reply with an architectural proposal within 24 hours.
          </p>
        </Reveal>
      </Section>

      {/* 2. CONTACT FORM & STUDIO ACCESS */}
      <ContactBento />
    </PageShell>
  );
}
