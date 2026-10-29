import React from "react";
import { FAQS } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="w-full flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col gap-1 px-2">
        <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
          05 / FAQ
        </span>
        <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
          Frequently asked questions.
        </h2>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FAQS.map((faq, idx) => (
          <div
            key={idx}
            className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 flex flex-col gap-3 border border-black/[0.04] shadow-sm hover:border-black/10 transition-colors"
          >
            <h3 className="font-headline-sm text-[19px] text-primary tracking-[-0.02em] font-semibold">
              {faq.question}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

