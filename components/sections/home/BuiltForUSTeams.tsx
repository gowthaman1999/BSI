import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { BENEFITS_US_TEAMS, TESTIMONIAL } from "@/lib/data";
import { Section, Reveal } from "@/components/ui/Section";
import { SectionHeading, EyebrowPill } from "@/components/ui/Heading";

export function BuiltForUSTeams() {
  return (
    <Section surface="dark" id="built-for-us">
      <Reveal>
        <SectionHeading
          eyebrow="04 / Built for U.S. teams"
          title="Engineered for seamless cross-border collaboration."
          surface="dark"
          description="Aligned across EST and PST working windows with direct Slack, Linear, and GitHub integration."
          layout="split"
        />
      </Reveal>

      {/* 3 Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {BENEFITS_US_TEAMS.map((item) => (
          <div
            key={item.tag}
            className="rounded-[20px] sm:rounded-[24px] border border-border-dark bg-white/[0.03] hover:bg-white/[0.05] hover:border-border-dark-strong p-6 sm:p-8 flex flex-col gap-3 transition-all duration-300"
          >
            <span className="font-label-caps text-[10px] sm:text-[11px] uppercase text-brand-primary tracking-[0.12em] font-semibold">
              {item.tag}
            </span>
            <h3 className="font-headline-sm text-[20px] text-on-dark tracking-[-0.02em] font-semibold">
              {item.title}
            </h3>
            <p className="font-body-sm text-[14px] text-on-dark-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Testimonial Card */}
      <div className="rounded-[20px] sm:rounded-[24px] border border-border-dark bg-surface-dark-subtle/80 p-5 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-5 h-64 lg:h-[300px] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-white/[0.10] relative group">
            <Image
              src={TESTIMONIAL.image}
              alt="Collaborative software engineering review"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-transparent to-surface-dark/20"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-end">
              <span className="inline-flex items-center rounded-full border border-white/[0.16] bg-surface-dark/65 px-3 py-1 font-label-caps text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.10em] text-white/95 backdrop-blur-md">
                {TESTIMONIAL.tag}
              </span>
            </div>
          </div>

          {/* Quote & Author */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5 p-1 sm:p-2">
            <div className="flex items-center justify-between gap-4">
              <EyebrowPill surface="dark">Client Voice</EyebrowPill>
              <Quote className="w-7 h-7 text-brand-primary/80 shrink-0" aria-hidden="true" />
            </div>
            <blockquote className="font-headline-md text-[20px] sm:text-[24px] lg:text-[26px] text-on-dark tracking-[-0.02em] font-medium leading-snug">
              “{TESTIMONIAL.quote}”
            </blockquote>
            <div className="pt-4 border-t border-border-dark flex flex-col gap-0.5">
              <div className="font-body-md text-[15px] font-semibold text-on-dark">
                {TESTIMONIAL.author}
              </div>
              <div className="font-body-sm text-[13px] text-on-dark-subtle">
                {TESTIMONIAL.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
