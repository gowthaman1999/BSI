import React from "react";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LegalPageLayout } from "@/components/compliance/LegalPageLayout";

export const metadata: Metadata = {
  title: "Disclaimer | Blackstone Infomatics",
  description:
    "Professional engineering, technical advisory, and third-party benchmark disclaimers for Blackstone Infomatics.",
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      badgeText="General & Technical Disclosures"
      iconName="alert"
      lastUpdated="October 30, 2026"
    >
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          1. Website Information &amp; Technical Advice
        </h2>
        <p>
          The content provided on <code className="text-text-primary bg-surface-subtle px-1.5 py-0.5 rounded">https://blackstoneinfomatics.com</code> by <strong className="text-text-primary">[COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC]</strong> (&ldquo;Blackstone Infomatics&rdquo;) is published solely for general informational, commercial portfolio, and studio overview purposes.
        </p>
        <p>
          Nothing on this Platform should be construed as formal legal, regulatory, cybersecurity certification, or financial advice. Clients should consult their own qualified legal counsel and compliance officers regarding specific industry regulations (such as HIPAA, GDPR, PCI-DSS, or SOX).
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          2. Case Studies &amp; Performance Metrics
        </h2>
        <div className="p-5 rounded-[16px] bg-surface-subtle border border-border">
          <h3 className="text-sm font-semibold text-text-primary mb-1.5">
            Historical Metrics Disclaimer
          </h3>
          <p className="text-xs sm:text-sm">
            All portfolio statistics, conversion percentages (e.g., &ldquo;+148% appointment conversions&rdquo; or &ldquo;3.4x average order value&rdquo;), and operational benchmarks featured on our website represent authentic historical case study results achieved for specific client engagements. Past performance is not an absolute guarantee of identical outcomes for future projects, as results depend upon market dynamics, product-market fit, and external consumer behavior.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          3. External Links &amp; Third-Party Services
        </h2>
        <p>
          Our Platform may contain hyperlinks to external third-party websites, developer documentation, or cloud services. Blackstone Infomatics does not investigate, endorse, or assume responsibility for the accuracy or privacy practices of external web destinations.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          4. &ldquo;As Is&rdquo; Platform Access
        </h2>
        <p className="text-xs sm:text-sm bg-surface-subtle p-5 rounded-[16px] border border-border leading-relaxed">
          TO THE FULLEST EXTENT PERMITTED UNDER LAW, THE INFORMATION, CODE REPOSITORIES, AND VISUAL SAMPLES ON THIS SITE ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ACCURACY, TIMELINESS, OR UNINTERRUPTED AVAILABILITY.
        </p>
      </section>

      <section className="flex flex-col gap-3 border-t border-border pt-6">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          5. Contact Information
        </h2>
        <p>If you have any questions concerning this disclaimer, please contact:</p>
        <div className="p-5 rounded-[16px] bg-surface-subtle border border-border flex flex-col gap-2 text-sm">
          <span className="font-semibold text-text-primary">[COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC]</span>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>[CONTACT EMAIL, e.g., inquiries@blackstoneinfomatics.com]</span>
          </div>
          <span>Location: [BUSINESS LOCATION / US STATE, e.g., Austin, TX / Delaware]</span>
        </div>
      </section>
    </LegalPageLayout>
  );
}
