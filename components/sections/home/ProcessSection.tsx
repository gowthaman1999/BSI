import React from "react";
import { PROCESS_STEPS } from "@/lib/data";
import { Section, Reveal } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Card, TagChip } from "@/components/ui/Card";

export function ProcessSection() {
  return (
    <Section surface="subtle" id="process">
      <Reveal>
        <SectionHeading
          eyebrow="02 / Process"
          title="Predictable, agile delivery."
          description="Weekly milestones, transparent staging builds, and senior engineers directly inside your workflow from kickoff to scale."
          layout="split"
        />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {PROCESS_STEPS.map((step) => (
          <Card key={step.step} surface="light" padding="md" className="h-full">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-label-caps text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-accent-text">
                  {step.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-primary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-sm text-[20px] text-text-primary tracking-[-0.02em] font-semibold mt-4 mb-2">
                {step.title}
              </h3>
              <p className="font-body-sm text-[14px] text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="pt-6 border-t border-border mt-6">
              <TagChip surface="light">{step.duration}</TagChip>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
