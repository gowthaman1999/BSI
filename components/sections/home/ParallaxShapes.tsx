"use client";

import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ParallaxShapes() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Different depth translation speeds
  const yBg = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : 80]);
  const yMid = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : -100]);
  const rotateRing = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : 45]);
  const yFast = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : -150]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Layer 0: Ambient Gradient Glow Orbs (Speed 0.15) */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-brand-primary/15 via-brand-primary-light/8 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: yBg }}
        className="absolute -bottom-24 -left-20 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-brand-accent/15 via-brand-primary/10 to-transparent blur-3xl opacity-70"
        aria-hidden="true"
      />

      {/* Layer 1: Midground Orbital Rings inspired by Logo Globe (Speed 0.35) */}
      <motion.div
        style={{ y: yMid, rotate: rotateRing }}
        className="hidden md:block absolute top-12 right-16 w-80 h-80 opacity-20 dark:opacity-30"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-brand-primary">
          {/* Globe Latitude Ellipses */}
          <circle cx="100" cy="100" r="90" strokeWidth="1.2" strokeDasharray="4 6" />
          <ellipse cx="100" cy="100" rx="90" ry="40" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="90" ry="70" strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="100" y1="10" x2="100" y2="190" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </motion.div>

      {/* Layer 1b: Second Orbital Arc on Left */}
      <motion.div
        style={{ y: yMid }}
        className="hidden lg:block absolute bottom-10 left-12 w-64 h-64 opacity-15 dark:opacity-25"
        aria-hidden="true"
      >
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full stroke-brand-accent">
          <circle cx="80" cy="80" r="70" strokeWidth="1" strokeDasharray="5 5" />
          <ellipse cx="80" cy="80" rx="70" ry="25" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Layer 3: Kinetic Floating Beacon Node (Speed 0.85) */}
      <motion.div
        style={{ y: yFast }}
        className="hidden sm:flex absolute top-1/3 right-1/4 items-center gap-2 px-3 py-1.5 rounded-full bg-surface/80 backdrop-blur-md border border-border shadow-md"
        aria-hidden="true"
      >
        <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
        <span className="font-label-caps text-[11px] uppercase tracking-wider text-text-primary">
          Latency &lt; 20ms
        </span>
      </motion.div>
    </div>
  );
}

