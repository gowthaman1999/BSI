import React from "react";
import { PROCESS_STEPS } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="w-full flex flex-col gap-5" id="process">
      {/* Header */}
      <div className="flex flex-col gap-1 px-2">
        <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
          02 / Process
        </span>
        <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
          Predictable, agile delivery.
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.step}
            className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 flex flex-col justify-between h-full border border-black/[0.04] shadow-sm hover:border-black/10 transition-colors"
          >
            <div>
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                {step.step}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary tracking-[-0.02em] font-semibold mt-4 mb-2">
                {step.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="pt-8 border-t border-black/[0.04] mt-6">
              <span className="font-label-caps text-label-caps text-primary font-bold">
                {step.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

