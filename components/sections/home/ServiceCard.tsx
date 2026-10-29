"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type ServiceItem } from "@/lib/data";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  // Dark marketing banner variant
  if (service.isDark || service.variant === "dark") {
    return (
      <div
        className={`${
          service.colSpan || "lg:col-span-12 md:col-span-2"
        } bg-tertiary text-on-tertiary rounded-[28px] p-6 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/[0.08] shadow-xl relative overflow-hidden h-full`}
      >
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="font-label-caps text-label-caps uppercase text-[#868381] tracking-[0.08em]">
            {service.domain}
          </span>
          <h3 className="font-headline-md text-headline-md text-white tracking-[-0.02em] font-semibold">
            {service.title}
          </h3>
          <p className="font-body-md text-[15px] text-[#cac6c3] leading-relaxed">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/[0.08] text-white font-label-caps text-label-caps rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/contact"
            className="h-12 px-7 rounded-full bg-gradient-to-r from-[#ff5a1f] to-[#e04810] text-white font-label-button text-[14px] inline-flex items-center justify-center hover:shadow-[0_8px_20px_-4px_rgba(255,90,31,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold"
          >
            Request marketing audit
          </a>
        </div>
      </div>
    );
  }

  const isSideImageVariant = service.variant === "side-image";
  const isBottomImageVariant = service.variant === "bottom-image";
  const isTopImageVariant = service.variant === "top-image";

  return (
    <div
      tabIndex={0}
      className={`${
        service.colSpan || ""
      } bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 flex flex-col justify-between border border-black/[0.04] shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a1f] focus-visible:ring-offset-2 h-full`}
    >
      <div className="relative z-10 flex flex-col gap-3">
        {/* 1. TOP BANNER IMAGE:
            - Rendered on Mobile (<768px) and Tablet (768-1023px) for ALL service cards with images (position same as Custom software)
            - Also rendered on Desktop for Custom Software (top-image variant)
        */}
        {service.image && (
          <div
            className={`w-full h-36 rounded-2xl overflow-hidden mb-1 border border-black/[0.06] shadow-sm relative ${
              isTopImageVariant ? "block" : "block lg:hidden"
            }`}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {service.badge && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
                <span className="font-label-caps text-label-caps text-white/90 uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                  {service.badge}
                </span>
              </div>
            )}
          </div>
        )}

        {/* 2. TOP HEADER ROW: Domain Overline + Action Arrow */}
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
            {service.domain}
          </span>
          <a
            href="/services"
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-[#ff5a1f] group-hover:text-white transition-colors"
            aria-label={`Learn more about ${service.title}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3. CARD BODY */}
        {isSideImageVariant && service.image ? (
          /* Web design & development & UI/UX design:
             Desktop: Two-column layout with title & description on left, image on the right side.
             Mobile / Tablet: Standard title & description (image is already at the top banner).
          */
          <>
            {/* Desktop Two-Column Layout (Text Left, Image on Right) */}
            <div className="hidden lg:flex flex-row items-center justify-between gap-6">
              <div className="flex-1 min-w-0 flex flex-col gap-2.5">
                <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-primary tracking-[-0.02em] font-semibold">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Right Side Image */}
              <div className="relative w-48 xl:w-56 aspect-[4/3] rounded-2xl overflow-hidden border border-black/[0.06] shadow-sm shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1280px) 224px, 192px"
                />
                {service.badge && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
                    <span className="font-label-caps text-label-caps text-white/90 uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                      {service.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile / Tablet Layout: Standard Title & Description */}
            <div className="block lg:hidden flex flex-col gap-2">
              <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-primary tracking-[-0.02em] font-semibold">
                {service.title}
              </h3>
              <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </div>
          </>
        ) : isBottomImageVariant && service.image ? (
          /* Mobile apps & E-commerce:
             Desktop: Title, Description, Image UNDER description.
             Mobile / Tablet: Standard Title & Description (image is already at the top banner).
          */
          <>
            <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-primary tracking-[-0.02em] font-semibold">
              {service.title}
            </h3>
            <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
              {service.description}
            </p>

            {/* Desktop Only: Image under description */}
            <div className="hidden lg:block w-full h-36 rounded-2xl overflow-hidden mt-1 border border-black/[0.06] shadow-sm relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1280px) 33vw, 360px"
              />
              {service.badge && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
                  <span className="font-label-caps text-label-caps text-white/90 uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                    {service.badge}
                  </span>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Top-image (Custom Software) or default */
          <>
            <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-primary tracking-[-0.02em] font-semibold">
              {service.title}
            </h3>
            <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
              {service.description}
            </p>
          </>
        )}
      </div>

      {/* 4. TAGS ROW */}
      <div className="relative z-10 pt-6 flex flex-wrap items-center gap-2 border-t border-black/[0.04] mt-4">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-surface-container text-on-surface font-label-caps text-label-caps rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
