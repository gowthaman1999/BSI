import React from "react";
import { ArrowUpRight, Activity, ShoppingBag, Compass, Trees } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

export function SelectedWorkSection() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Healthcare":
        return <Activity className="w-6 h-6 text-outline" />;
      case "Retail":
        return <ShoppingBag className="w-6 h-6 text-outline" />;
      case "Hospitality":
        return <Compass className="w-6 h-6 text-outline" />;
      case "Non-Profit":
        return <Trees className="w-6 h-6 text-outline" />;
      default:
        return <Activity className="w-6 h-6 text-outline" />;
    }
  };

  return (
    <section className="w-full flex flex-col gap-5" id="work">
      {/* Header */}
      <div className="flex flex-col gap-1 px-2">
        <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
          03 / Selected work
        </span>
        <h2 className="font-headline-lg text-headline-sm sm:text-headline-lg text-primary tracking-[-0.03em] font-semibold">
          Recent partnerships.
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {PROJECTS.slice(0, 4).map((project) => (
          <div
            key={project.id}
            className="lg:col-span-6 bg-surface-container-lowest rounded-[28px] p-6 sm:p-9 flex flex-col justify-between border border-black/[0.04] shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                  {project.category}
                </span>
                <a
                  href="/portfolio"
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-[#ff5a1f] group-hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary tracking-[-0.02em] font-semibold">
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Visual Container */}
            <div className="w-full h-52 bg-surface-container rounded-2xl mt-6 flex flex-col items-center justify-center p-6 text-center border border-black/[0.04] relative overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2">
                  {getIcon(project.category)}
                </div>
                <span className="font-label-caps text-label-caps uppercase text-white tracking-wider font-semibold">
                  {project.badge}
                </span>
                {project.metrics && (
                  <span className="mt-1 px-3 py-1 rounded-full bg-white/90 text-primary text-[12px] font-bold">
                    {project.metrics}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

