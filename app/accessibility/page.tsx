import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { LegalPageLayout } from "@/components/compliance/LegalPageLayout";

export const metadata: Metadata = {
  title: "Accessibility Statement | Blackstone Infomatics",
  description:
    "Blackstone Infomatics commitment to digital inclusion, WCAG 2.2 Level AA accessibility, and Section 508 / ADA compliance.",
};

export default function AccessibilityStatementPage() {
  return (
    <LegalPageLayout
      title="Accessibility Statement"
      badgeText="WCAG 2.2 Level AA & Section 508 Verified"
      iconName="eye"
      lastUpdated="October 30, 2026"
    >
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          1. Our Commitment to Digital Inclusion
        </h2>
        <p>
          <strong className="text-text-primary">[COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC]</strong> is steadfastly committed to ensuring digital accessibility for people of all abilities. We continuously refine the user experience of our platforms, aligning engineering practices with the <strong className="text-text-primary">Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong> standard, the <strong className="text-text-primary">Americans with Disabilities Act (ADA) Title III</strong>, and <strong className="text-text-primary">Section 508 of the U.S. Rehabilitation Act</strong>.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          2. Engineering Measures Implemented
        </h2>
        <p>We incorporate rigorous accessibility verification into every sprint cycle:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
          <div className="p-5 rounded-[16px] bg-surface-subtle border border-border flex flex-col gap-2">
            <div className="flex items-center gap-2 font-semibold text-text-primary text-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
              <span>High-Contrast Calibration</span>
            </div>
            <p className="text-xs leading-relaxed">
              All typography is checked against automated contrast analyzers, maintaining a minimum 4.5:1 ratio for standard text and 3:1 for large display elements.
            </p>
          </div>

          <div className="p-5 rounded-[16px] bg-surface-subtle border border-border flex flex-col gap-2">
            <div className="flex items-center gap-2 font-semibold text-text-primary text-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
              <span>Full Keyboard Operability</span>
            </div>
            <p className="text-xs leading-relaxed">
              Every interactive element—including navigation drawers, modals, filter pills, and form fields—is completely navigable via standard Tab/Shift+Tab keys with visible 2px focus rings.
            </p>
          </div>

          <div className="p-5 rounded-[16px] bg-surface-subtle border border-border flex flex-col gap-2">
            <div className="flex items-center gap-2 font-semibold text-text-primary text-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
              <span>Reduced Motion Respect</span>
            </div>
            <p className="text-xs leading-relaxed">
              Our parallax animations and 3D card tilts honor user system preferences via <code className="text-text-primary">prefers-reduced-motion: reduce</code>, disabling heavy transforms to prevent vestibular discomfort.
            </p>
          </div>

          <div className="p-5 rounded-[16px] bg-surface-subtle border border-border flex flex-col gap-2">
            <div className="flex items-center gap-2 font-semibold text-text-primary text-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
              <span>Assistive Screen Reader Support</span>
            </div>
            <p className="text-xs leading-relaxed">
              Semantic HTML landmarks (<code className="text-text-primary">header</code>, <code className="text-text-primary">nav</code>, <code className="text-text-primary">main</code>, <code className="text-text-primary">article</code>, <code className="text-text-primary">footer</code>) and descriptive ARIA labels ensure seamless compatibility with NVDA, JAWS, and VoiceOver.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          3. Known Limitations &amp; Ongoing Enhancements
        </h2>
        <p>
          While we strive for comprehensive conformance across all pages, certain third-party components (such as external map embeds or legacy client asset archives) may occasionally present temporary limitations. We actively monitor and remediate any reported issues during quarterly audits.
        </p>
      </section>

      <section className="flex flex-col gap-3 border-t border-border pt-6">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          4. Accessibility Feedback &amp; Support
        </h2>
        <p>
          We welcome your feedback on the accessibility of the Blackstone Infomatics platform. If you encounter any barriers or require information in an accessible alternative format (e.g., large print, audio transcript, or plain text), please reach out to our team:
        </p>
        <div className="p-5 rounded-[16px] bg-surface-subtle border border-border flex flex-col gap-2.5 text-sm">
          <span className="font-semibold text-text-primary">Accessibility Coordinator</span>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>
              Email:{" "}
              <a
                href="mailto:[CONTACT EMAIL, e.g., accessibility@blackstoneinfomatics.com]"
                className="underline text-brand-accent-text hover:text-brand-primary"
              >
                [CONTACT EMAIL, e.g., accessibility@blackstoneinfomatics.com]
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>Phone: [PHONE NUMBER, e.g., +1 (512) 555-0199]</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>Address: [PHYSICAL MAILING ADDRESS / LOCATION, e.g., Austin, TX / Delaware]</span>
          </div>
          <p className="text-xs text-text-subtle mt-1">
            We aim to acknowledge and address accessibility feedback within two (2) standard business days.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
