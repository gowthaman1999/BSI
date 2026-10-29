import React from "react";
import { PortfolioGallery } from "@/components/sections/portfolio/PortfolioGallery";

export const metadata = {
  title: "Selected Work & Portfolio — Blackstone Infomatics",
  description:
    "Explore recent web applications, design systems, and software platforms engineered for ambitious growing enterprises.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-10">
        {/* Hero Section */}
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5a1f]" />
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
              Selected Partnerships
            </span>
          </div>
          <h1 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg lg:text-display-hero tracking-[-0.03em] font-semibold leading-tight text-primary max-w-4xl">
            Selected work.
          </h1>
          <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            High-performance web applications, interactive 3D configurators, and modern brand
            systems delivered with uncompromising technical craft.
          </p>
        </div>

        {/* Gallery with category filters */}
        <PortfolioGallery />

        {/* Closing CTA */}
        <div className="mt-8 text-center max-w-xl mx-auto flex flex-col items-center gap-3">
          <h3 className="font-headline-sm text-[22px] font-semibold text-primary">
            Have a project in mind?
          </h3>
          <p className="font-body-sm text-on-surface-variant">
            Let&apos;s evaluate your technical scope and assemble a dedicated delivery team.
          </p>
          <a
            href="/contact"
            className="mt-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#ff5a1f] to-[#e04810] text-white font-semibold text-[14px] inline-flex items-center justify-center hover:shadow-lg transition-all"
          >
            Start project discovery
          </a>
        </div>
      </div>
    </div>
  );
}

