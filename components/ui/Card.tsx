import React from "react";

type CardSurface = "light" | "subtle" | "dark";

interface CardProps {
  children: React.ReactNode;
  surface?: CardSurface;
  hoverable?: boolean;
  padding?: "sm" | "md" | "lg";
  className?: string;
}

export function Card({
  children,
  surface = "light",
  hoverable = true,
  padding = "md",
  className = "",
}: CardProps) {
  const paddingClasses =
    padding === "sm"
      ? "p-5 sm:p-6"
      : padding === "lg"
      ? "p-6 sm:p-10 lg:p-12"
      : "p-6 sm:p-8";

  const surfaceClasses =
    surface === "dark"
      ? "hero-surface-dark text-on-dark border border-border-dark shadow-dark-card relative overflow-hidden"
      : surface === "subtle"
      ? "bg-surface-subtle text-text-primary border border-border shadow-xs"
      : "bg-surface text-text-primary border border-border shadow-card";

  const hoverClasses = hoverable
    ? surface === "dark"
      ? "hover:border-border-dark-strong transition-all duration-300"
      : "hover:shadow-card-hover hover:border-border-strong transition-all duration-300"
    : "";

  return (
    <div
      className={`rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] ${paddingClasses} ${surfaceClasses} ${hoverClasses} ${className}`}
    >
      {surface === "dark" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 hero-diagonal-pattern"
        />
      )}
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
}

interface TagChipProps {
  children: React.ReactNode;
  surface?: "light" | "dark";
  className?: string;
}

export function TagChip({
  children,
  surface = "light",
  className = "",
}: TagChipProps) {
  const toneClasses =
    surface === "dark"
      ? "bg-white/[0.07] text-on-dark-muted border border-border-dark"
      : "bg-surface-subtle text-text-primary border border-border";

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.03em] ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}

