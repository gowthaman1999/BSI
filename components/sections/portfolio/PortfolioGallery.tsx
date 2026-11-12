"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Card, TagChip } from "@/components/ui/Card";
import { EyebrowPill } from "@/components/ui/Heading";
import { ActionButton } from "@/components/ui/Button";
import { ParallaxMedia } from "@/components/ui/Section";

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
      {/* Filter Pill Row Matching Header Switcher */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-surface-subtle border border-border w-fit">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-label-button text-[13px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
              activeCategory === cat
                ? "bg-surface-dark text-white dark:bg-white dark:text-[#121212] font-semibold shadow-xs"
                : "text-text-muted hover:text-text-primary hover:bg-surface-subtle-hover"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
        {filteredProjects.map((project, idx) => (
          <Card
            key={project.id}
            surface="light"
            padding="md"
            className={`${
              idx % 3 === 0 ? "lg:col-span-7" : idx % 3 === 1 ? "lg:col-span-5" : "lg:col-span-12"
            } group h-full`}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-label-caps text-[11px] uppercase text-brand-accent-text tracking-[0.12em] font-semibold">
                  {project.category}
                </span>
                {project.metrics && (
                  <TagChip surface="light">{project.metrics}</TagChip>
                )}
              </div>
              <h3 className="font-headline-md text-[22px] sm:text-[26px] text-text-primary tracking-[-0.025em] font-semibold">
                {project.title}
              </h3>
              <p className="font-body-md text-[14px] sm:text-[15px] text-text-muted leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Media Box */}
            <div className="w-full h-56 sm:h-72 rounded-[16px] sm:rounded-[20px] overflow-hidden mt-6 relative border border-border bg-surface-dark">
              <ParallaxMedia fill range={["-8%", "8%"]} scaleRange={[1.09, 1.01]}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </ParallaxMedia>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-transparent to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end">
                <span className="font-label-caps text-white/95 uppercase tracking-[0.10em] backdrop-blur-md px-3 py-1.5 rounded-full bg-surface-dark/65 border border-white/[0.16] text-[10px] sm:text-[11px] font-medium">
                  {project.badge}
                </span>
              </div>
            </div>

            {/* Tags & Action */}
            <div className="pt-6 border-t border-border mt-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <TagChip key={t} surface="light">
                    {t}
                  </TagChip>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-text-primary hover:text-brand-accent-text transition-colors"
              >
                <span>Request case study data</span>
                <ArrowUpRight className="w-4 h-4 text-brand-primary" aria-hidden="true" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* NDA Architectural Benchmark (Dark Card) */}
      <Card surface="dark" padding="lg" className="mt-2">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <EyebrowPill surface="dark" icon={Lock}>
              Confidential Client Projects
            </EyebrowPill>
            <h3 className="font-headline-md text-[22px] sm:text-[26px] text-on-dark font-medium tracking-[-0.02em]">
              Want to review architectural schematics under NDA?
            </h3>
            <p className="font-body-md text-[15px] text-on-dark-muted leading-relaxed">
              Much of our core engineering work for U.S. fintech, medical, and defense contractors is protected by strict non-disclosure agreements. We can provide a private architectural walkthrough of sanitized codebases and schemas.
            </p>
          </div>
          <div className="flex-shrink-0">
            <ActionButton href="/contact" variant="primary" surface="dark" size="lg">
              Request NDA Walkthrough
            </ActionButton>
          </div>
        </div>
      </Card>
    </div>
  );
}
