import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { BENEFITS_US_TEAMS, TESTIMONIAL } from "@/lib/data";

export function BuiltForUSTeams() {
  return (
    <section className="w-full flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col gap-1 px-2">
        <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
          04 / Built for U.S. teams
        </span>
        <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
          Engineered for seamless cross-border collaboration.
        </h2>
      </div>

      {/* 3 Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {BENEFITS_US_TEAMS.map((item) => (
          <div
            key={item.tag}
            className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 flex flex-col justify-between border border-black/[0.04] shadow-sm hover:border-black/10 transition-colors"
          >
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                {item.tag}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary tracking-[-0.02em] font-semibold">
                {item.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Card */}
      <div className="w-full bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 border border-black/[0.04] shadow-sm flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Image */}
          <div className="lg:col-span-5 h-64 lg:h-full min-h-[220px] rounded-2xl overflow-hidden border border-black/[0.06] shadow-sm relative group">
            <Image
              src={TESTIMONIAL.image}
              alt="Collaborative software engineering review"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <span className="font-label-caps text-label-caps text-white/95 uppercase tracking-wider backdrop-blur-md px-2.5 py-1 rounded-full bg-black/40 border border-white/10">
                {TESTIMONIAL.tag}
              </span>
            </div>
          </div>

          {/* Quote & Author */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 p-2 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                Client Voice
              </span>
              <Quote className="w-8 h-8 text-neutral-300" />
            </div>
            <blockquote className="font-headline-md text-headline-sm sm:text-headline-md text-primary tracking-[-0.02em] font-semibold leading-snug">
              “{TESTIMONIAL.quote}”
            </blockquote>
            <div className="pt-3 border-t border-black/[0.05]">
              <div className="font-body-md text-body-md font-semibold text-primary">
                {TESTIMONIAL.author}
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">
                {TESTIMONIAL.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

