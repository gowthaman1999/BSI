import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "dark";
type ButtonSurface = "light" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ActionButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: ButtonVariant;
  surface?: ButtonSurface;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function ActionButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  surface = "light",
  size = "md",
  showArrow,
  className = "",
  ariaLabel,
}: ActionButtonProps) {
  const hasArrow = showArrow ?? variant === "primary";

  const sizeStyles =
    variant === "primary"
      ? size === "sm"
        ? "pl-4 pr-1.5 py-1.5 text-[13px] gap-2.5"
        : size === "lg"
        ? "pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 text-[14px] sm:text-[15px] gap-3"
        : "pl-4 pr-1.5 py-1.5 sm:pl-5 sm:pr-2 sm:py-1.5 text-[13px] sm:text-[14px] gap-2.5 sm:gap-3"
      : size === "sm"
      ? "h-10 px-4 text-[13px] gap-2"
      : size === "lg"
      ? "h-[46px] sm:h-[54px] px-5 sm:px-6 text-[13px] sm:text-[14px] gap-2"
      : "h-[44px] sm:h-[48px] px-5 sm:px-6 text-[13px] sm:text-[14px] gap-2";

  const circleSize =
    size === "sm"
      ? "h-7 w-7"
      : size === "lg"
      ? "h-8 w-8 sm:h-10 sm:w-10"
      : "h-8 w-8 sm:h-9 sm:w-9";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = `group bg-brand-primary hover:bg-brand-primary-light text-white font-semibold shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
      surface === "dark" ? "focus-visible:ring-offset-surface-dark" : "focus-visible:ring-offset-background"
    }`;
  } else if (variant === "secondary") {
    variantStyles =
      surface === "dark"
        ? "border border-border-dark-strong bg-white/[0.04] text-on-dark/90 hover:bg-white/[0.10] hover:text-on-dark font-medium active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        : "border border-border-strong bg-surface text-text-primary hover:bg-surface-subtle-hover font-medium shadow-xs active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary";
  } else {
    variantStyles =
      surface === "dark"
        ? "bg-white text-[#121212] hover:bg-white/90 font-semibold shadow-sm active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        : "bg-surface-dark text-white hover:bg-surface-dark-subtle font-semibold shadow-xs active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary";
  }

  const baseClasses = `inline-flex items-center justify-center rounded-full whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {hasArrow && variant === "primary" && (
        <span
          className={`flex ${circleSize} items-center justify-center rounded-full bg-surface-dark-subtle text-white transition-transform duration-300 group-hover:rotate-45 shrink-0`}
        >
          <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      )}
      {hasArrow && variant !== "primary" && (
        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-80" aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    const isExternalOrHash =
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("http") ||
      href.startsWith("#");

    if (isExternalOrHash) {
      return (
        <a href={href} className={baseClasses} aria-label={ariaLabel}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

