"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const HERO_EASE = [0.22, 1, 0.36, 1] as const;

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-12 pt-3 pb-14 sm:pb-24 flex flex-col gap-12 sm:gap-20">
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
      <section
        id={id}
        aria-label={ariaLabel}
        className={`scroll-mt-24 mx-[calc(50%-50vw+12px)] sm:mx-[calc(50%-50vw+18px)] lg:mx-[calc(50%-50vw+20px)] ${className}`}
      >
        <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] hero-surface-dark border border-border-dark shadow-dark-card">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-75 hero-diagonal-pattern"
          />
          <div
            className={`relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-12 ${innerClassName}`}
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
        className={`scroll-mt-24 relative overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] hero-surface-dark border border-border-dark text-on-dark p-6 sm:p-10 lg:p-12 shadow-dark-card ${className}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-75 hero-diagonal-pattern"
        />
        <div className={`relative z-10 flex flex-col gap-6 sm:gap-8 ${innerClassName}`}>
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
        className={`scroll-mt-24 relative overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] bg-surface-subtle hero-surface-light-glow border border-border p-6 sm:p-10 lg:p-12 shadow-card ${className}`}
      >
        <div className={`relative z-10 flex flex-col gap-6 sm:gap-8 ${innerClassName}`}>
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

