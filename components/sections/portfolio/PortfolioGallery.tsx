"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Lock, CheckCircle2 } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";

const CATEGORIES = [
  "All",
  "Healthcare",
  "Retail",
  "Hospitality",
  "Non-Profit",
  "Enterprise",
  "Logistics",
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Filter Pill Row */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-surface-container-low border border-black/[0.04] w-fit">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-label-button text-[13px] transition-all ${
              activeCategory === cat
                ? "bg-surface-container-lowest text-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className={`${
              idx % 3 === 0 ? "lg:col-span-7" : idx % 3 === 1 ? "lg:col-span-5" : "lg:col-span-12"
            } bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 border border-black/[0.04] shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow`}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-bold text-primary">
                  {project.metrics}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-primary font-semibold">
                {project.title}
              </h3>
              <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Media Box */}
            <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden mt-6 relative border border-black/[0.06]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="font-label-caps text-white/95 uppercase tracking-wider backdrop-blur-md px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[11px]">
                  {project.badge}
                </span>
              </div>
            </div>

            {/* Tags & Action */}
            <div className="pt-6 border-t border-black/[0.04] mt-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-surface-container text-[11px] font-medium text-on-surface"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:text-[#ff5a1f] transition-colors"
              >
                <span>Request case study data</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* NDA Architectural Benchmark (Dark Card) */}
      <div className="bg-tertiary text-white rounded-[28px] p-6 sm:p-10 border border-white/[0.08] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden mt-4">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-2 text-[#ff5a1f]">
            <Lock className="w-5 h-5" />
            <span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">
              Confidential Client Projects
            </span>
          </div>
          <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-white font-semibold">
            Want to review architectural schematics under NDA?
          </h3>
          <p className="font-body-md text-[#cac6c3] leading-relaxed">
            Much of our core engineering work for U.S. fintech, medical, and defense contractors is protected by strict non-disclosure agreements. We can provide a private architectural walkthrough of sanitized codebases and schemas.
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/contact"
            className="h-12 px-7 rounded-full bg-white text-primary font-semibold text-[14px] inline-flex items-center justify-center hover:bg-neutral-200 transition-colors shadow-md"
          >
            Request NDA Walkthrough
          </a>
        </div>
      </div>
    </div>
  );
}

