import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Clock, Mail, MapPin, Scale } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full px-3 sm:px-4 lg:px-5 pb-3 sm:pb-5 mt-auto" aria-label="Site Footer">
      <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] hero-surface-dark border border-border-dark text-on-dark shadow-dark-card">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 hero-diagonal-pattern"
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex flex-col gap-12">
          {/* Top Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Brand Info (4 cols) */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-3 w-fit rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                <Image
                  src="/images/logo-white.webp"
                  alt="Blackstone Infomatics"
                  width={180}
                  height={60}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <p className="font-body-md text-[14px] text-on-dark-muted max-w-sm leading-relaxed">
                We partner with ambitious U.S. teams to design and engineer
                scalable web applications, modern design systems, and
                high-performance digital products.
              </p>
              <div className="pt-1 inline-flex items-center gap-2 rounded-tag border border-border-dark-strong bg-white/[0.04] px-3 py-1.5 w-fit backdrop-blur-sm text-[11px] font-semibold text-white/90">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shrink-0" aria-hidden="true" />
                <span>Available for Q4 &amp; Q1 engineering sprints</span>
              </div>
              {/* CAN-SPAM Registered Address Notice */}
              <p className="text-[11px] text-on-dark-subtle mt-1 leading-normal">
                [COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC] • [PHYSICAL MAILING ADDRESS, e.g., Austin, TX / Delaware]
              </p>
            </div>

            {/* Navigation Links (8 cols) */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {/* Directory */}
              <div className="flex flex-col gap-3.5">
                <span className="font-label-caps text-[10px] sm:text-[11px] uppercase text-on-dark-subtle tracking-[0.12em] font-semibold">
                  Directory
                </span>
                <ul className="flex flex-col gap-2.5 font-body-sm text-[14px]">
                  <li>
                    <Link href="/" className="text-on-dark-muted hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-on-dark-muted hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-on-dark-muted hover:text-white transition-colors">
                      Selected Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-design-development" className="text-on-dark-muted hover:text-white transition-colors">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-on-dark-muted hover:text-white transition-colors">
                      About Studio
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-on-dark-muted hover:text-white transition-colors">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Capabilities */}
              <div className="flex flex-col gap-3.5">
                <span className="font-label-caps text-[10px] sm:text-[11px] uppercase text-on-dark-subtle tracking-[0.12em] font-semibold">
                  Capabilities
                </span>
                <ul className="flex flex-col gap-2.5 font-body-sm text-[14px] text-on-dark-muted">
                  <li>Next.js Platforms</li>
                  <li>Design Systems</li>
                  <li>Headless Commerce</li>
                  <li>Mobile Engineering</li>
                  <li>Technical SEO</li>
                  <li>WCAG 2.2 AA Audits</li>
                </ul>
              </div>

              {/* US Compliance & Legal Pages */}
              <div className="flex flex-col gap-3.5">
                <span className="font-label-caps text-[10px] sm:text-[11px] uppercase text-on-dark-subtle tracking-[0.12em] font-semibold flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-brand-primary" aria-hidden="true" />
                  <span>Compliance</span>
                </span>
                <ul className="flex flex-col gap-2.5 font-body-sm text-[14px]">
                  <li>
                    <Link href="/privacy" className="text-on-dark-muted hover:text-brand-primary transition-colors">
                      Privacy Policy (CCPA)
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-on-dark-muted hover:text-brand-primary transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="text-on-dark-muted hover:text-brand-primary transition-colors">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/accessibility" className="text-on-dark-muted hover:text-brand-primary transition-colors">
                      Accessibility Statement
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer" className="text-on-dark-muted hover:text-brand-primary transition-colors">
                      Legal Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div className="flex flex-col gap-3.5">
                <span className="font-label-caps text-[10px] sm:text-[11px] uppercase text-on-dark-subtle tracking-[0.12em] font-semibold">
                  Connect
                </span>
                <div className="flex flex-col gap-2.5 font-body-sm text-[14px]">
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="inline-flex items-center gap-2 text-white hover:text-brand-primary transition-colors font-medium"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-primary shrink-0" aria-hidden="true" />
                    <span>Email Inquiries</span>
                  </a>
                  <div className="flex items-center gap-2 text-on-dark-muted">
                    <Clock className="w-3.5 h-3.5 text-brand-primary shrink-0" aria-hidden="true" />
                    <span>EST &amp; PST Hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-dark-muted">
                    <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" aria-hidden="true" />
                    <span>Austin &amp; Remote</span>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-primary hover:text-brand-primary-light transition-colors"
                  >
                    <span>Book Strategy Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Baseline Row */}
          <div className="pt-8 border-t border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-on-dark-subtle">
            <p>© {new Date().getFullYear()} [COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC]. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <span className="inline-flex items-center gap-1.5 text-on-dark-muted font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-primary" aria-hidden="true" />
                <span>WCAG 2.2 AA &amp; ADA Verified</span>
              </span>
              <span className="text-on-dark-subtle">100% Client IP Ownership</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
