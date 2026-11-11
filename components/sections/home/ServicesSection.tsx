import React from "react";
import { SERVICES } from "@/lib/data";
import { ServiceCard } from "./ServiceCard";
import { Section, Reveal } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";

export function ServicesSection() {
  return (
    <Section surface="plain" id="services">
      <Reveal>
        <SectionHeading
          eyebrow="01 / Services"
          title="One team for your whole digital presence."
          description="Unified design systems, full-stack engineering, mobile delivery, and performance marketing built under one senior roof."
          layout="split"
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
