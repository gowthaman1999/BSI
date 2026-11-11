import React from "react";
import { FAQS } from "@/lib/data";
import { Section, Reveal } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";

export function FAQSection() {
  return (
    <Section surface="plain" id="faq">
      <Reveal>
        <SectionHeading
          eyebrow="05 / FAQ"
          title="Frequently asked questions."
          description="Practical details on engagement models, intellectual property ownership, and time-zone collaboration."
          layout="split"
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {FAQS.map((faq, idx) => (
          <Card key={idx} surface="light" padding="md" className="h-full">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-label-caps text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-accent-text">
                  0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/60" aria-hidden="true" />
              </div>
              <h3 className="font-headline-sm text-[19px] sm:text-[20px] text-text-primary tracking-[-0.02em] font-semibold">
                {faq.question}
              </h3>
              <p className="font-body-md text-[14px] sm:text-[15px] text-text-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
