"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { EyebrowPill } from "@/components/ui/Heading";

const BRANDS = [
  {
    id: "legend-xpress",
    name: "LEGEND XPRESS",
    tag: "LOGISTICS",
    render: () => (
      <div className="flex items-center gap-1.5 font-bold tracking-wider text-text-primary">
        <span className="text-[17px] font-extrabold tracking-tight">LEGEND</span>
        <span className="text-[14px] font-semibold text-text-muted tracking-widest uppercase">XPRESS</span>
      </div>
    ),
  },
  {
    id: "hydropress",
    name: "HYDROPRESS",
    tag: "INDUSTRIAL",
    render: () => (
      <div className="flex items-center gap-2 font-black tracking-tight text-text-primary">
        <div className="w-5 h-5 rounded bg-surface-dark text-white dark:bg-white dark:text-[#121212] flex items-center justify-center text-[10px] font-black">
          H
        </div>
        <span className="text-[18px] tracking-tight uppercase font-black">HYDROPRESS</span>
      </div>
    ),
  },
  {
    id: "royal-destiny",
    name: "Royal Destiny",
    tag: "HOSPITALITY",
    render: () => (
      <div className="flex flex-col items-center justify-center leading-none text-text-primary">
        <span className="font-serif italic text-[18px] tracking-wide font-normal">Royal Destiny</span>
        <span className="text-[8px] tracking-[0.25em] uppercase text-text-subtle mt-1 font-sans font-semibold">
          HOTELS &amp; RESORTS
        </span>
      </div>
    ),
  },
  {
    id: "oneworld",
    name: "OneWorld",
    tag: "GLOBAL",
    render: () => (
      <div className="flex items-center gap-2 text-text-primary">
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[2.2]">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
        </svg>
        <span className="text-[17px] font-bold tracking-tight">OneWorld</span>
      </div>
    ),
  },
  {
    id: "dhanaz",
    name: "DHANAZ",
    tag: "COMMERCE",
    render: () => (
      <div className="flex items-center gap-1.5 text-text-primary">
        <span className="text-[18px] font-extrabold tracking-widest">DHANAZ</span>
        <span className="text-[10px] text-brand-primary font-bold -mt-2">◆</span>
      </div>
    ),
  },
  {
    id: "thogai-murugan",
    name: "Thogai Murugan",
    tag: "ENTERPRISE",
    render: () => (
      <div className="flex flex-col items-center justify-center text-text-primary">
        <span className="text-[16px] font-bold tracking-wider uppercase">THOGAI MURUGAN</span>
        <div className="w-8 h-[2px] bg-brand-primary/60 rounded-full mt-0.5" />
      </div>
    ),
  },
  {
    id: "puretone",
    name: "Puretone",
    tag: "HEALTHCARE",
    render: () => (
      <div className="flex items-center gap-2 text-text-primary">
        <div className="w-5 h-5 rounded-full bg-surface-subtle border border-border-strong flex items-center justify-center text-text-primary text-xs font-bold">
          p
        </div>
        <span className="text-[17px] font-bold tracking-tight">Puretone</span>
      </div>
    ),
  },
  {
    id: "meridian",
    name: "MERIDIAN",
    tag: "CLINICAL",
    render: () => (
      <div className="flex items-center gap-1.5 text-text-primary">
        <span className="w-2.5 h-2.5 rounded-sm bg-brand-primary" />
        <span className="text-[16px] font-extrabold tracking-wider uppercase">MERIDIAN</span>
      </div>
    ),
  },
];

export function SocialProof() {
  const shouldReduceMotion = useReducedMotion();
  const marqueeItems = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <Section surface="plain" ariaLabel="Trusted by growing brands">
      <div className="rounded-[22px] sm:rounded-[28px] overflow-hidden bg-surface border border-border py-8 sm:py-10 shadow-card relative">
        {/* Section Header */}
        <div className="flex justify-center mb-6 sm:mb-8 px-4">
          <EyebrowPill surface="light">Trusted by growing brands</EyebrowPill>
        </div>

        {/* Marquee Wrapper with Edge Fade Gradients */}
        <div className="relative w-full overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          <motion.div
            className="flex items-center gap-4 sm:gap-5 w-max select-none"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: ["0%", "-33.333333%"],
                  }
            }
            transition={
              shouldReduceMotion
                ? {}
                : {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 28,
                      ease: "linear",
                    },
                  }
            }
          >
            {marqueeItems.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="w-[190px] sm:w-[215px] h-[80px] sm:h-[86px] bg-surface-subtle rounded-[16px] sm:rounded-[20px] border border-border flex items-center justify-center p-4 shrink-0 transition-all duration-200 hover:border-border-strong hover:bg-surface group cursor-default"
              >
                <div className="opacity-85 group-hover:opacity-100 transition-opacity">
                  {brand.render()}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
