"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type ServiceItem } from "@/lib/data";
import { Card, TagChip } from "@/components/ui/Card";
import { ActionButton } from "@/components/ui/Button";
import { EyebrowPill } from "@/components/ui/Heading";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  if (service.isDark || service.variant === "dark") {
    return (
      <Card
        surface="dark"
        padding="lg"
        className={`${service.colSpan || "lg:col-span-12 md:col-span-2"} h-full`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <EyebrowPill surface="dark">{service.domain}</EyebrowPill>
            <h3 className="font-headline-md text-[clamp(1.5rem,2.4vw,2rem)] text-on-dark tracking-[-0.025em] font-medium mt-1">
              {service.title}
            </h3>
            <p className="font-body-md text-[15px] text-on-dark-muted leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {service.tags.map((tag) => (
                <TagChip key={tag} surface="dark">
                  {tag}
                </TagChip>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <ActionButton href="/contact" variant="primary" surface="dark" size="lg">
              Request marketing audit
            </ActionButton>
          </div>
        </div>
      </Card>
    );
  }

  const isSideImageVariant = service.variant === "side-image";
  const isBottomImageVariant = service.variant === "bottom-image";
  const isTopImageVariant = service.variant === "top-image";

  const renderMedia = (heightClass: string) =>
    service.image ? (
      <div
        className={`relative rounded-[16px] overflow-hidden border border-border bg-surface-subtle ${heightClass}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent"
        />
        {service.badge && (
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end">
            <span className="inline-flex items-center rounded-full border border-white/[0.16] bg-surface-dark/65 px-2.5 py-1 font-label-caps text-[10px] font-medium uppercase tracking-[0.10em] text-white/95 backdrop-blur-md">
              {service.badge}
            </span>
          </div>
        )}
      </div>
    ) : null;

  return (
    <Card
      surface="light"
      padding="md"
      className={`${service.colSpan || ""} group h-full focus-within:ring-2 focus-within:ring-brand-primary`}
    >
      <div className="flex flex-col gap-3.5">
        {/* Top banner image on mobile/tablet or top-image desktop variant */}
        {service.image && (
          <div className={isTopImageVariant ? "block" : "block lg:hidden"}>
            {renderMedia("w-full h-40 mb-1")}
          </div>
        )}

        {/* Top Header Row: Domain Overline + Hero-style Action Circle */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-label-caps text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-accent-text">
            {service.domain}
          </span>
          <Link
            href="/services"
            className="w-9 h-9 rounded-full bg-surface-subtle border border-border flex items-center justify-center text-text-primary group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white group-hover:rotate-45 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label={`Learn more about ${service.title}`}
          >
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Card Body */}
        {isSideImageVariant && service.image ? (
          <>
            <div className="hidden lg:flex flex-row items-center justify-between gap-6">
              <div className="flex-1 min-w-0 flex flex-col gap-2.5">
                <h3 className="font-headline-md text-[22px] sm:text-[24px] text-text-primary tracking-[-0.025em] font-semibold">
                  {service.title}
                </h3>
                <p className="font-body-md text-[15px] text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="w-48 xl:w-56 shrink-0">
                {renderMedia("aspect-[4/3] w-full")}
              </div>
            </div>

            <div className="block lg:hidden flex flex-col gap-2">
              <h3 className="font-headline-md text-[22px] text-text-primary tracking-[-0.025em] font-semibold">
                {service.title}
              </h3>
              <p className="font-body-md text-[14px] text-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          </>
        ) : isBottomImageVariant && service.image ? (
          <>
            <h3 className="font-headline-md text-[22px] sm:text-[24px] text-text-primary tracking-[-0.025em] font-semibold">
              {service.title}
            </h3>
            <p className="font-body-md text-[14px] sm:text-[15px] text-text-muted leading-relaxed">
              {service.description}
            </p>
            <div className="hidden lg:block mt-1">
              {renderMedia("w-full h-40")}
            </div>
          </>
        ) : (
          <>
            <h3 className="font-headline-md text-[22px] sm:text-[24px] text-text-primary tracking-[-0.025em] font-semibold">
              {service.title}
            </h3>
            <p className="font-body-md text-[14px] sm:text-[15px] text-text-muted leading-relaxed">
              {service.description}
            </p>
          </>
        )}
      </div>

      {/* Tags Row */}
      <div className="pt-5 flex flex-wrap items-center gap-2 border-t border-border mt-6">
        {service.tags.map((tag) => (
          <TagChip key={tag} surface="light">
            {tag}
          </TagChip>
        ))}
      </div>
    </Card>
  );
}
