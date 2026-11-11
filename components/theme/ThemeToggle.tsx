"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-surface-container border border-border" aria-hidden="true" />
    );
  }

  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const getLabel = () => {
    if (theme === "system") return "Theme: System preference (Click to switch to Light)";
    if (theme === "light") return "Theme: Light mode (Click to switch to Dark)";
    return "Theme: Dark mode (Click to switch to System)";
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={getLabel()}
      title={getLabel()}
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-surface-subtle hover:bg-surface-subtle-hover border border-border text-text-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
    >
      {theme === "system" ? (
        <Laptop className="w-4 h-4 text-text-muted" aria-hidden="true" />
      ) : resolvedTheme === "dark" ? (
        <Moon className="w-4 h-4 text-brand-primary" aria-hidden="true" />
      ) : (
        <Sun className="w-4 h-4 text-brand-accent-text" aria-hidden="true" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

