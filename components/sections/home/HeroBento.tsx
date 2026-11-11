"use client";

import React, { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Section, Reveal, HERO_EASE } from "@/components/ui/Section";
import { EyebrowPill } from "@/components/ui/Heading";
import { ActionButton } from "@/components/ui/Button";

export function HeroBento() {
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageFrameRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-5%", "5%"]
  );

  const parallaxScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1.06, 1]
  );

  return (
    <Section
      surface="dark-inset"
      ariaLabel="Hero"
      innerClassName="pt-6 sm:pt-12 lg:pt-14 pb-4 sm:pb-8 lg:pb-10"
    >
      {/* 1. Top-Left Pill / Eyebrow Tag */}
      <Reveal immediate delay={0}>
        <EyebrowPill surface="dark">
          Digital Studio for U.S. Businesses
        </EyebrowPill>
      </Reveal>

      {/* 2. Large Left-Aligned 2-Line Headline */}
      <motion.h1
        initial={shouldReduceMotion ? false : { y: 14 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease: HERO_EASE }}
        className="mt-4 sm:mt-6 font-display-hero text-[clamp(2.05rem,5.2vw,4.5rem)] font-medium leading-[1.06] tracking-[-0.03em] text-on-dark max-w-full lg:max-w-[64%]"
      >
        Clean design.
        <br />
        Serious engineering.
      </motion.h1>

      {/* 3. Two-Column CTA + Supporting Subtext Row */}
      <Reveal immediate delay={0.1} className="mt-5 sm:mt-9 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start lg:items-center">
        {/* Left: Primary CTA Pill + Secondary Work Link */}
        <div className="lg:col-span-7 flex flex-wrap items-center gap-2.5 sm:gap-4">
          <ActionButton href="/contact" variant="primary" surface="dark" size="lg">
            Book a strategy call
          </ActionButton>
          <ActionButton href="/portfolio" variant="secondary" surface="dark" size="lg" showArrow={false}>
            View our work
          </ActionButton>
        </div>

        {/* Right: Supporting Paragraph */}
        <div className="lg:col-span-5">
          <p className="font-body-lg text-[14px] sm:text-[16px] leading-relaxed text-on-dark-muted max-w-[460px]">
            We partner with ambitious U.S. teams to design and engineer scalable web
            applications, modern brand identities, and high-performance digital products.
          </p>
        </div>
      </Reveal>

      {/* 4. Wide Bottom Hero Image Card with Scroll Parallax & Frosted Rating Badge */}
      <motion.div
        initial={shouldReduceMotion ? false : { y: 18 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: HERO_EASE }}
        ref={imageFrameRef}
        className="relative mt-7 sm:mt-14 lg:mt-16 overflow-hidden rounded-[16px] sm:rounded-[22px] border border-white/[0.10] bg-surface-dark-subtle h-[290px] sm:h-[420px] lg:h-[470px] xl:h-[510px] shadow-[0_24px_64px_-16px_rgba(0,0,0,0.65)]"
      >
        {/* Parallax Image Container */}
        <motion.div
          style={{ y: parallaxY, scale: parallaxScale }}
          className="absolute inset-x-0 -top-[8%] -bottom-[8%] will-change-transform"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk8H5D_lGy_eNTZOf-OmrfUXS7-CwwCvkecmtHk17g3y8JVX9dSxAaJyOku8uOfmC8y3phEv3eDILiTqx3JUv9xS4iJDxFr7TgL0Tp4d1-_mBh0B2McUgEozYJnJEIPfhRRxmlcIf1a1UM9v_UZG8v5UvHXx8oObZ8KZXnQFVkiR3gCC3MAlAf5SZmkGfU9J7mpkThcV4Rm_8BETFIQgGLOvKPql_KWaAbTCehoPnk"
            alt="Blackstone Infomatics Studio Workspace"
            fill
            priority
            quality={100}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 95vw"
          />
        </motion.div>

        {/* Subtle Contrast Scrim for Overlaid Frosted Cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark/65 via-transparent to-surface-dark/35"
        />

        {/* Top-Left Frosted-Glass Track Record / Laurel Badge */}
        <div className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 z-10 max-w-[225px] sm:max-w-[265px] rounded-[16px] sm:rounded-[20px] border border-white/[0.16] bg-surface-dark/60 p-3.5 sm:p-5 text-on-dark backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-between gap-2">
            <span className="font-label-caps text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-on-dark-muted">
              Track Record
            </span>
            <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" aria-hidden="true" />
          </div>

          <div className="mt-2 sm:mt-3 flex items-center justify-center gap-2 sm:gap-2.5">
            <Image
              src="/images/leafs.svg"
              alt=""
              width={42}
              height={91}
              className="h-9 sm:h-11 w-auto opacity-85"
            />
            <span className="font-display-hero text-[36px] sm:text-[44px] leading-none tracking-[-0.04em] font-semibold text-on-dark">
              200+
            </span>
            <Image
              src="/images/leafs.svg"
              alt=""
              width={42}
              height={91}
              className="h-9 sm:h-11 w-auto opacity-85 -scale-x-100"
            />
          </div>

          <p className="mt-2 sm:mt-2.5 text-center font-body-md text-[12px] sm:text-[13px] leading-snug text-white/85">
            projects delivered over 8+ years, with 100% support.
          </p>
        </div>

        {/* Bottom-Right Subtle Studio Pill */}
        <div className="absolute bottom-3.5 right-3.5 sm:bottom-6 sm:right-6 z-10">
          <span className="inline-flex items-center rounded-full border border-white/[0.16] bg-surface-dark/60 px-3 py-1.5 font-label-caps text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.10em] text-white/90 backdrop-blur-md">
            Studio Workspace • EST / PST
          </span>
        </div>
      </motion.div>
    </Section>
  );
}
