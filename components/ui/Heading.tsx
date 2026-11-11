import React from "react";
import { Box, type LucideIcon } from "lucide-react";

type SurfaceTone = "light" | "dark";

interface EyebrowPillProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  surface?: SurfaceTone;
  className?: string;
}

export function EyebrowPill({
  children,
  icon: Icon = Box,
  surface = "light",
  className = "",
}: EyebrowPillProps) {
  const toneClasses =
    surface === "dark"
      ? "border-border-dark-strong bg-white/[0.04] text-on-dark/90"
      : "border-border bg-surface text-text-primary shadow-xs";

  return (
    <div
      className={`inline-flex w-fit items-center gap-2 rounded-tag border px-3 py-1.5 backdrop-blur-sm ${toneClasses} ${className}`}
    >
      <Icon className="h-3.5 w-3.5 text-brand-primary shrink-0" aria-hidden="true" />
      <span className="font-label-caps text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em]">
        {children}
      </span>
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  title: React.ReactNode;
  description?: React.ReactNode;
  surface?: SurfaceTone;
  as?: "h1" | "h2";
  layout?: "stacked" | "split" | "center";
  rightSlot?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  surface = "light",
  as = "h2",
  layout = "stacked",
  rightSlot,
  className = "",
}: SectionHeadingProps) {
  const titleColor = surface === "dark" ? "text-on-dark" : "text-text-primary";
  const descColor = surface === "dark" ? "text-on-dark-muted" : "text-text-muted";

  const HeadingTag = as;
  const titleClasses =
    as === "h1"
      ? "font-display-hero text-[clamp(2.05rem,5.2vw,4.5rem)] font-medium leading-[1.06] tracking-[-0.03em]"
      : "font-headline-lg text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em]";

  if (layout === "center") {
    return (
      <div className={`flex flex-col items-center text-center gap-3 max-w-2xl mx-auto ${className}`}>
        {eyebrow && (
          <EyebrowPill icon={eyebrowIcon} surface={surface}>
            {eyebrow}
          </EyebrowPill>
        )}
        <HeadingTag className={`${titleClasses} ${titleColor}`}>{title}</HeadingTag>
        {description && (
          <p className={`font-body-lg text-[15px] sm:text-[16px] leading-relaxed ${descColor}`}>
            {description}
          </p>
        )}
      </div>
    );
  }

  if (layout === "split") {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        {eyebrow && (
          <EyebrowPill icon={eyebrowIcon} surface={surface}>
            {eyebrow}
          </EyebrowPill>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
          <HeadingTag className={`lg:col-span-7 ${titleClasses} ${titleColor}`}>
            {title}
          </HeadingTag>
          {(description || rightSlot) && (
            <div className="lg:col-span-5 flex flex-col gap-4 lg:items-end">
              {description && (
                <p
                  className={`font-body-lg text-[14px] sm:text-[16px] leading-relaxed max-w-[460px] ${descColor}`}
                >
                  {description}
                </p>
              )}
              {rightSlot}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {eyebrow && (
        <EyebrowPill icon={eyebrowIcon} surface={surface}>
          {eyebrow}
        </EyebrowPill>
      )}
      <HeadingTag className={`${titleClasses} ${titleColor} max-w-4xl`}>{title}</HeadingTag>
      {description && (
        <p
          className={`font-body-lg text-[14px] sm:text-[16px] leading-relaxed max-w-2xl ${descColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

