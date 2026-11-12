"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ActionButton } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Web Dev", href: "/web-design-development" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border shadow-xs transition-colors duration-200">
      <div className="h-20 w-full px-4 sm:px-8 lg:px-10 xl:px-14 flex items-center justify-between gap-4">
        {/* Brand Logo with Crisp Light & Dark Mode Variants */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg p-1"
          aria-label="Blackstone Infomatics Homepage"
        >
          <div className="relative h-9 sm:h-10 w-auto aspect-[3.01/1] flex items-center">
            <Image
              src="/images/logo.webp"
              alt="Blackstone Infomatics"
              width={180}
              height={60}
              priority
              className="h-9 sm:h-10 w-auto object-contain dark:hidden"
            />
            <Image
              src="/images/logo-white.webp"
              alt="Blackstone Infomatics"
              width={180}
              height={60}
              priority
              className="h-9 sm:h-10 w-auto object-contain hidden dark:block"
            />
          </div>
        </Link>

        {/* Desktop Nav Pills */}
        <nav
          className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-surface-subtle border border-border"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full font-label-button text-[13px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
                  isActive
                    ? "bg-surface-dark text-white dark:bg-white dark:text-[#121212] font-semibold shadow-xs"
                    : "text-text-muted hover:text-text-primary hover:bg-surface-subtle-hover"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Theme Toggle / Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />

          <div className="hidden sm:block">
            <ActionButton href="/contact" variant="primary" surface="light" size="sm">
              Book a call
            </ActionButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-surface-subtle flex items-center justify-center text-text-primary hover:bg-surface-subtle-hover border border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-surface/95 backdrop-blur-2xl border-b border-border shadow-dark-card p-5 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-2xl font-label-button text-[15px] flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-surface-dark text-white font-semibold"
                      : "text-text-muted hover:text-text-primary hover:bg-surface-subtle"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    className={`w-4 h-4 ${isActive ? "text-brand-primary" : "opacity-50"}`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-border flex flex-col">
            <ActionButton
              href="/contact"
              variant="primary"
              surface="light"
              size="md"
              className="w-full justify-between"
            >
              Book a strategy call
            </ActionButton>
          </div>
        </div>
      )}
    </header>
  );
}
