import React from "react";
import { ArrowUpRight, ShieldCheck, Clock, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-black/[0.05] pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col gap-12">
        {/* Top Bento Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a1f]" />
              <span className="font-headline-sm text-[24px] font-bold tracking-tight text-primary">
                Blackstone Infomatics
              </span>
            </div>
            <p className="font-body-md text-[15px] text-on-surface-variant max-w-sm leading-relaxed">
              We partner with ambitious U.S. teams to design and engineer
              scalable web applications, modern brand systems, and
              high-performance digital products.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[13px] font-medium text-emerald-800 bg-emerald-50 w-fit px-3 py-1.5 rounded-full border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Q4 & Q1 engineering sprints</span>
            </div>
          </div>

          {/* Navigation Links (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                Directory
              </span>
              <ul className="flex flex-col gap-2.5 font-body-sm text-[14px]">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="hover:text-primary transition-colors"
                  >
                    Selected Work
                  </a>
                </li>
                <li>
                  <a
                    href="/web-design-development"
                    className="hover:text-primary transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Studio
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:text-primary transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                Capabilities
              </span>
              <ul className="flex flex-col gap-2.5 font-body-sm text-[14px] text-on-surface-variant">
                <li>Next.js Platforms</li>
                <li>Design Systems</li>
                <li>Headless Commerce</li>
                <li>Mobile Engineering</li>
                <li>Technical SEO</li>
                <li>WCAG 2.1 AA Audits</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.08em]">
                Connect
              </span>
              <div className="flex flex-col gap-2.5 font-body-sm text-[14px]">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-secondary-container" />
                  <span>Email Inquiries</span>
                </a>
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <Clock className="w-3.5 h-3.5 text-secondary-container" />
                  <span>EST & PST Hours</span>
                </div>
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <MapPin className="w-3.5 h-3.5 text-secondary-container" />
                  <span>Austin & Remote</span>
                </div>
                <a
                  href="/contact"
                  className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-[#ff5a1f] hover:underline"
                >
                  <span>Book Strategy Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Baseline */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-on-surface-variant">
          <p>© {new Date().getFullYear()} Blackstone Infomatics. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>WCAG 2.1 AA Compliant</span>
            </span>
            <span>100% Client IP Ownership</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

