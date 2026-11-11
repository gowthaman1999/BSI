import React from "react";
import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { LegalPageLayout } from "@/components/compliance/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Blackstone Infomatics",
  description:
    "Terms of Service governing engineering contracts, intellectual property rights, and platform use with Blackstone Infomatics.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      badgeText="US Commercial Engineering Standard"
      iconName="scale"
      lastUpdated="October 30, 2026"
    >
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          1. Agreement to Terms
        </h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Client&rdquo;, &ldquo;User&rdquo;, or &ldquo;you&rdquo;) and <strong className="text-text-primary">[COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC]</strong> (&ldquo;Blackstone Infomatics&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) regarding your access to and use of our digital platforms, engineering services, and design deliverables.
        </p>
        <p>
          By accessing our Platform or contracting our services, you expressly acknowledge and agree to be bound by these Terms and all incorporated schedules.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          2. Intellectual Property &amp; 100% Client Ownership Guarantee
        </h2>
        <div className="p-5 rounded-[16px] bg-surface-subtle border border-border">
          <h3 className="text-sm font-semibold text-text-primary mb-1.5">
            Client Work Product Assignment
          </h3>
          <p className="text-xs sm:text-sm">
            Unless otherwise agreed in a separate Statement of Work (SOW), upon full and final payment of all agreed fees, <strong className="text-text-primary">100% of all custom code, user interface designs, architecture diagrams, and custom digital assets</strong> created specifically for Client shall be irrevocably assigned to and owned exclusively by Client as &ldquo;work made for hire&rdquo;.
          </p>
        </div>
        <p>
          Blackstone Infomatics retains ownership of its preexisting background tools, reusable developer boilerplate, general utility libraries, and standard development methodologies (&ldquo;Background IP&rdquo;). To the extent Background IP is embedded in final deliverables, Client is granted a perpetual, royalty-free, worldwide license to utilize such Background IP with the delivered system.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          3. Scope of Services &amp; Sprint Retainers
        </h2>
        <p>
          Engineering deliverables, design systems, and milestone commitments are detailed in mutually executed Statements of Work (SOW) or Master Services Agreements (MSA). Sprints are conducted iteratively with bi-weekly demonstrations. Any additions to the agreed scope require a written change order.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          4. Warranties &amp; Performance Disclaimers
        </h2>
        <p>
          Blackstone Infomatics warrants that services will be performed in a professional, workmanlike manner adhering to current software engineering best practices, semantic accessibility (WCAG 2.2 AA), and modern security guidelines.
        </p>
        <p className="uppercase text-xs font-semibold text-text-muted bg-surface-subtle p-4 rounded-[14px] border border-border">
          EXCEPT AS EXPRESSLY SET FORTH IN A FORMAL STATEMENT OF WORK, SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR UNINTERRUPTED ERROR-FREE OPERATION OF THIRD-PARTY APIs.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          5. Limitation of Liability
        </h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE UNITED STATES LAW, NEITHER BLACKSTONE INFOMATICS NOR ITS PRINCIPALS SHALL BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA LOSS, OR SYSTEM DOWNTIME). OUR TOTAL AGGREGATE LIABILITY ARISING FROM ANY CLAIM UNDER THESE TERMS SHALL NOT EXCEED THE TOTAL FEES ACTUALLY PAID BY CLIENT UNDER THE APPLICABLE STATEMENT OF WORK DURING THE PRECEDING THREE (3) MONTHS.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          6. Governing Law &amp; Dispute Resolution
        </h2>
        <p>
          These Terms and any dispute arising out of or related to our services shall be governed by and construed in accordance with the laws of the <strong className="text-text-primary">[BUSINESS LOCATION / US STATE, e.g., State of Delaware / State of Texas]</strong>, without regard to conflict of law principles.
        </p>
        <p>
          Any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by confidential binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules, conducted within <strong className="text-text-primary">[BUSINESS LOCATION / US STATE]</strong>.
        </p>
      </section>

      <section className="flex flex-col gap-3 border-t border-border pt-6">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          7. Contact &amp; Legal Notices
        </h2>
        <p>All formal notices regarding these Terms must be sent in writing to:</p>
        <div className="p-5 rounded-[16px] bg-surface-subtle border border-border flex flex-col gap-2 text-sm">
          <span className="font-semibold text-text-primary">[COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC]</span>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>[CONTACT EMAIL, e.g., legal@blackstoneinfomatics.com]</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>[PHYSICAL MAILING ADDRESS / REGISTERED AGENT, e.g., Austin, TX / Wilmington, DE]</span>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
