"use client";

import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const HERO_EASE = [0.22, 1, 0.36, 1] as const;

const PARALLAX_SPRING = {
  stiffness: 95,
  damping: 26,
  mass: 0.28,
  restDelta: 0.001,
} as const;

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="w-full px-3 sm:px-5 lg:px-6 xl:px-8 pt-3 pb-14 sm:pb-24 flex flex-col gap-12 sm:gap-20">
        {children}
      </div>
    </div>
  );
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  immediate = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (immediate) {
    return (
      <motion.div
        initial={shouldReduceMotion ? false : { y: 14 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay, ease: HERO_EASE }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, delay, ease: HERO_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  scaleRange?: [number, number];
  className?: string;
}

export function Parallax({
  children,
  offset = 24,
  scaleRange,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, PARALLAX_SPRING);
  const y = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [offset, -offset]
  );
  const scale = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion || !scaleRange ? [1, 1] : scaleRange
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, scale }} className="will-change-transform h-full">
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxMediaProps {
  children: React.ReactNode;
  range?: [string, string];
  scaleRange?: [number, number];
  className?: string;
}

export function ParallaxMedia({
  children,
  range = ["-8%", "8%"],
  scaleRange = [1.08, 1.01],
  fill = false,
  className = "",
}: ParallaxMediaProps & { fill?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, PARALLAX_SPRING);
  const y = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : range
  );
  const scale = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : scaleRange
  );

  return (
    <div
      ref={ref}
      className={`${fill ? "absolute inset-0" : "relative w-full h-full"} overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-x-0 -top-[10%] -bottom-[10%] will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

function ParallaxBackdrop({ tone }: { tone: "dark" | "subtle" }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, PARALLAX_SPRING);
  const patternY = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-36, 36]
  );
  const glowY = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [48, -48]
  );

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {tone === "dark" && (
        <motion.div
          style={{ y: patternY }}
          className="absolute -inset-y-12 inset-x-0 opacity-80 hero-diagonal-pattern will-change-transform"
        />
      )}
      <motion.div
        style={{ y: glowY }}
        className={`absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full blur-3xl will-change-transform ${
          tone === "dark"
            ? "bg-brand-primary/[0.12]"
            : "bg-brand-primary/[0.06]"
        }`}
      />
    </div>
  );
}

type SectionSurface = "plain" | "subtle" | "dark" | "dark-inset";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  ariaLabel?: string;
  surface?: SectionSurface;
  className?: string;
  innerClassName?: string;
}

export function Section({
  children,
  id,
  ariaLabel,
  surface = "plain",
  className = "",
  innerClassName = "",
}: SectionProps) {
  if (surface === "dark-inset") {
    return (
      <section id={id} aria-label={ariaLabel} className={`scroll-mt-24 w-full ${className}`}>
        <div className="relative w-full overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] hero-surface-dark border border-border-dark shadow-dark-card">
          <ParallaxBackdrop tone="dark" />
          <div
            className={`relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-14 ${innerClassName}`}
          >
            {children}
          </div>
        </div>
      </section>
    );
  }

  if (surface === "dark") {
    return (
      <section
        id={id}
        aria-label={ariaLabel}
        className={`scroll-mt-24 w-full relative overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] hero-surface-dark border border-border-dark text-on-dark p-6 sm:p-10 lg:p-12 xl:p-14 shadow-dark-card ${className}`}
      >
        <ParallaxBackdrop tone="dark" />
        <div className={`relative z-10 w-full flex flex-col gap-6 sm:gap-8 ${innerClassName}`}>
          {children}
        </div>
      </section>
    );
  }

  if (surface === "subtle") {
    return (
      <section
        id={id}
        aria-label={ariaLabel}
        className={`scroll-mt-24 w-full relative overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] bg-surface-subtle hero-surface-light-glow border border-border p-6 sm:p-10 lg:p-12 xl:p-14 shadow-card ${className}`}
      >
        <ParallaxBackdrop tone="subtle" />
        <div className={`relative z-10 w-full flex flex-col gap-6 sm:gap-8 ${innerClassName}`}>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`scroll-mt-24 w-full flex flex-col gap-6 sm:gap-8 ${className}`}
    >
      {children}
    </section>
  );
}
