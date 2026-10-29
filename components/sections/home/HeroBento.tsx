"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function HeroBento() {
  return (
    <section className="w-full">
      <div className="relative rounded-[32px] p-2 sm:p-3 overflow-hidden bg-gradient-to-br from-[#faf9f6] via-[#f5f4ef] to-[#edece6] border border-black/[0.05] shadow-[0_20px_60px_-15px_rgba(255,90,31,0.06)]">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#ff5a1f]/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#1c1b1b]/5 to-transparent blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Main Hero Card (8 Cols) */}
          <div className="lg:col-span-8 bg-gradient-to-b from-[#ffffff] to-[#fbfbf9] border border-black/[0.06] rounded-[28px] p-6 sm:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5a1f] animate-pulse" />
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                  Digital Studio for U.S. Businesses
                </span>
              </div>
              <h1 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg lg:text-display-hero tracking-[-0.03em] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#111111] via-[#222222] to-[#444444]">
                Clean design.
                <br />
                Serious engineering.
              </h1>
              <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
                We partner with ambitious U.S. teams to design and engineer scalable web
                applications, modern brand identities, and high-performance digital products.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-8 sm:pt-10">
              <a
                href="/contact"
                className="h-12 px-7 rounded-full bg-gradient-to-r from-primary to-[#2a2a2a] text-on-primary font-label-button text-[14px] inline-flex items-center justify-center hover:opacity-90 active:scale-[0.98] shadow-md transition-all"
              >
                Book a strategy call
              </a>
              <a
                href="/portfolio"
                className="h-12 px-7 rounded-full bg-surface-container-high border border-black/[0.05] text-primary font-label-button text-[14px] inline-flex items-center justify-center hover:bg-surface-dim active:scale-[0.98] transition-colors"
              >
                View our work
              </a>
            </div>
          </div>

          {/* Right Column (4 Cols Stack) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Stat Card: Track Record */}
            <div className="bg-gradient-to-b from-[#181818] to-[#121212] border border-white/[0.08] text-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5a1f]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between relative z-10">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.08em] text-[#868381]">
                  Track Record
                </span>
                <CheckCircle2 className="w-6 h-6 text-[#ff5a1f]" />
              </div>
              <div className="my-auto py-4 relative z-10">
                <div className="font-display-hero text-[64px] sm:text-[76px] lg:text-[80px] leading-none tracking-[-0.04em] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#d8d8d8]">
                  200+
                </div>
              </div>
              <div className="relative z-10">
                <p className="font-body-md text-[15px] text-[#cac6c3] leading-snug">
                  projects delivered over 8+ years, with 100% support.
                </p>
              </div>
            </div>

            {/* Studio Workspace Image Card */}
            <div className="relative rounded-[28px] overflow-hidden border border-black/[0.06] shadow-sm h-48 lg:h-full min-h-[170px] group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk8H5D_lGy_eNTZOf-OmrfUXS7-CwwCvkecmtHk17g3y8JVX9dSxAaJyOku8uOfmC8y3phEv3eDILiTqx3JUv9xS4iJDxFr7TgL0Tp4d1-_mBh0B2McUgEozYJnJEIPfhRRxmlcIf1a1UM9v_UZG8v5UvHXx8oObZ8KZXnQFVkiR3gCC3MAlAf5SZmkGfU9J7mpkThcV4Rm_8BETFIQgGLOvKPql_KWaAbTCehoPnk"
                alt="Blackstone Infomatics Studio Workspace"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="font-label-caps text-label-caps text-white/90 uppercase tracking-wider backdrop-blur-sm px-2.5 py-1 rounded-full bg-black/30 border border-white/10">
                  Studio Workspace • EST / PST
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

