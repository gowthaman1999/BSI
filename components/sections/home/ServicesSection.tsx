import React from "react";
import { SERVICES } from "@/lib/data";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section className="w-full flex flex-col gap-5" id="services">
      {/* Section Header */}
      <div className="flex flex-col gap-1 px-2">
        <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
          01 / Services
        </span>
        <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
          One team for your whole digital presence.
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
