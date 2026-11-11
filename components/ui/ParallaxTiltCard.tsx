"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform, useReducedMotion } from "framer-motion";

interface ParallaxTiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxTiltCard({ children, className = "" }: ParallaxTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const springConfig = { damping: 20, stiffness: 180 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  if (shouldReduceMotion) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-shadow duration-300 ${
        isHovered ? "shadow-xl" : "shadow-sm"
      } ${className}`}
    >
      {children}
      {/* Subtle dynamic sheen reflection overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-tr from-transparent via-white/[0.04] to-brand-primary/10 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}

