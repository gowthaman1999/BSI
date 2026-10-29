"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, PhoneCall } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/85 backdrop-blur-xl border-b border-black/[0.04] transition-all">
      <div className="h-20 max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a1f] animate-pulse" />
          <span className="font-headline-sm text-[22px] font-bold tracking-tight text-primary">
            Blackstone
          </span>
          <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
            Studio
          </span>
        </a>

        {/* Desktop Nav Pills */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-surface-container-low border border-black/[0.04] shadow-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full font-label-button text-[14px] transition-all ${
                  isActive
                    ? "bg-surface-container-lowest text-primary font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-primary text-on-primary font-label-button text-[14px] hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-4 h-4 text-white/80" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-dim transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-surface/98 backdrop-blur-2xl border-b border-black/[0.08] shadow-2xl p-6 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-2xl font-label-button text-[16px] flex items-center justify-between ${
                    isActive
                      ? "bg-surface-container-lowest text-primary font-bold shadow-sm"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-black/[0.06] flex flex-col gap-3">
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full h-13 py-3.5 rounded-full bg-primary text-white text-center font-semibold text-[15px] flex items-center justify-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a strategy call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
