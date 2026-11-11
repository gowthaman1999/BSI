import React from "react";
import { ArrowUpRight, Activity, ShoppingBag, Compass, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { Section, Reveal } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";

export function SelectedWorkSection() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Healthcare":
        return <Activity className="w-5 h-5" aria-hidden="true" />;
      case "Retail":
        return <ShoppingBag className="w-5 h-5" aria-hidden="true" />;
      case "Hospitality":
        return <Compass className="w-5 h-5" aria-hidden="true" />;
      case "Non-Profit":
        return <Trees className="w-5 h-5" aria-hidden="true" />;
      default:
        return <Activity className="w-5 h-5" aria-hidden="true" />;
    }
  };

  return (
    <Section surface="plain" id="work">
      <Reveal>
        <SectionHeading
          eyebrow="03 / Selected work"
          title="Recent partnerships."
          description="Production platforms engineered for healthcare networks, commerce leaders, hospitality brands, and conservation teams."
          layout="split"
        />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        {PROJECTS.slice(0, 4).map((project) => (
          <Card
            key={project.id}
            surface="light"
            padding="md"
            className="lg:col-span-6 group h-full"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-label-caps text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-accent-text">
                  {project.category}
                </span>
                <Link
                  href="/portfolio"
                  aria-label={`Explore ${project.title}`}
                  className="w-9 h-9 rounded-full bg-surface-subtle border border-border flex items-center justify-center text-text-primary group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
              <h3 className="font-headline-md text-[22px] sm:text-[26px] text-text-primary tracking-[-0.025em] font-semibold">
                {project.title}
              </h3>
              <p className="font-body-md text-[14px] sm:text-[15px] text-text-muted leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Visual Container with Hero Frosted Overlay */}
            <div className="w-full h-56 bg-surface-dark rounded-[16px] sm:rounded-[20px] mt-6 border border-border relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-surface-dark/35 to-surface-dark/25"
              />
              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-5 text-center">
                <div className="w-11 h-11 rounded-full bg-surface-dark/65 border border-white/[0.16] backdrop-blur-md flex items-center justify-center text-brand-primary mb-2.5 shadow-lg">
                  {getIcon(project.category)}
                </div>
                <span className="font-label-caps text-[10px] sm:text-[11px] uppercase text-white tracking-[0.12em] font-semibold">
                  {project.badge}
                </span>
                {project.metrics && (
                  <span className="mt-2 px-3.5 py-1 rounded-full border border-white/[0.16] bg-surface-dark/70 backdrop-blur-md text-white text-[12px] font-semibold">
                    {project.metrics}
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
