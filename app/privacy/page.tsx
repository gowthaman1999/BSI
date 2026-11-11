import React from "react";
import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { LegalPageLayout } from "@/components/compliance/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Blackstone Infomatics",
  description:
    "Privacy Policy and California Consumer Privacy Act (CCPA/CPRA) disclosures for Blackstone Infomatics. Learn how we collect, use, and safeguard personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      badgeText="CCPA / CPRA & US Standard Compliant"
      iconName="shield"
      lastUpdated="October 30, 2026"
    >
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          1. Overview &amp; Scope
        </h2>
        <p>
          This Privacy Policy governs the manner in which <strong>[COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC]</strong> (&ldquo;Blackstone Infomatics&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, maintains, protects, and discloses information gathered from users (&ldquo;you&rdquo; or &ldquo;Client&rdquo;) of the website located at <code className="text-text-primary bg-surface-subtle px-1.5 py-0.5 rounded">https://blackstoneinfomatics.com</code> and related digital services (collectively, the &ldquo;Platform&rdquo;).
        </p>
        <p>
          We operate in full accordance with applicable United States federal and state data protection laws, including the <strong>California Consumer Privacy Act of 2018 (CCPA)</strong>, as amended by the <strong>California Privacy Rights Act of 2020 (CPRA)</strong>, and other comprehensive state privacy regulations.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          2. Categories of Personal Information Collected
        </h2>
        <p>Within the preceding twelve (12) months, we may collect the following categories of personal information:</p>
        <div className="overflow-x-auto my-2 rounded-[16px] border border-border">
          <table className="w-full text-left text-xs sm:text-sm overflow-hidden">
            <thead className="bg-surface-subtle text-text-primary font-semibold">
              <tr>
                <th className="p-3.5 border-b border-border">Category</th>
                <th className="p-3.5 border-b border-border">Examples</th>
                <th className="p-3.5 border-b border-border">Business Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3.5 font-medium text-text-primary">Identifiers</td>
                <td className="p-3.5">Full name, business email address, phone number, company name, IP address.</td>
                <td className="p-3.5">To respond to inquiries, execute contractual agreements, and establish communication.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-text-primary">Commercial Information</td>
                <td className="p-3.5">Project budget ranges, scope requirements, service history, transaction records.</td>
                <td className="p-3.5">To deliver engineering proposals and maintain client billing.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-text-primary">Internet &amp; Network Activity</td>
                <td className="p-3.5">Browser type, operating system, referrer URL, interaction timestamps.</td>
                <td className="p-3.5">To analyze sub-second platform performance, detect security anomalies, and ensure responsiveness.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          3. &ldquo;Do Not Sell or Share My Personal Information&rdquo;
        </h2>
        <div className="p-5 rounded-[16px] bg-surface-subtle border border-border">
          <p className="font-semibold text-text-primary">
            Blackstone Infomatics DOES NOT sell, rent, or trade your personal information to third parties for monetary or other valuable consideration.
          </p>
          <p className="mt-1.5 text-xs sm:text-sm">
            We do not share your personal information for cross-context behavioral advertising. In accordance with California Civil Code &sect; 1798.120, consumers have the absolute right to opt out of the sale or sharing of their personal information at any time.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          4. Your Privacy Rights (CCPA / CPRA &amp; State Protections)
        </h2>
        <p>Depending on your state of residency, you possess specific statutory rights regarding your personal information:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li><strong className="text-text-primary">Right to Know &amp; Access:</strong> You may request disclosure of the specific pieces and categories of personal information collected.</li>
          <li><strong className="text-text-primary">Right to Delete:</strong> You may request the permanent deletion of personal data collected, subject to legal record retention requirements.</li>
          <li><strong className="text-text-primary">Right to Correct:</strong> You may request corrections to inaccurate personal records.</li>
          <li><strong className="text-text-primary">Right to Non-Discrimination:</strong> We will never discriminate against you, alter service pricing, or degrade service quality for exercising any privacy rights.</li>
        </ul>
        <p>
          To exercise your rights, submit a verified request by emailing{" "}
          <a href="mailto:[CONTACT EMAIL, e.g., legal@blackstoneinfomatics.com]" className="text-brand-accent-text underline font-medium hover:text-brand-primary">
            [CONTACT EMAIL, e.g., legal@blackstoneinfomatics.com]
          </a>{" "}
          with the subject line <em>&ldquo;Privacy Rights Request&rdquo;</em>.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          5. Children&rsquo;s Online Privacy Protection Act (COPPA) Statement
        </h2>
        <p>
          Our Platform is exclusively directed to business enterprises and adult professionals. In strict accordance with the Children&rsquo;s Online Privacy Protection Act (COPPA), our Platform is <strong className="text-text-primary">not directed to children under 13 years of age</strong>, and we do not knowingly collect personal data from anyone under 13. If you believe a child has provided us with personal information, please notify us immediately for prompt deletion.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          6. Data Security &amp; Retention
        </h2>
        <p>
          We implement industry-standard technical, physical, and administrative safeguards, including TLS 1.3 encryption in transit, strict role-based access control (RBAC), and SOC-2 compliant cloud infrastructure. We retain personal records only as long as necessary to fulfill contractual studio deliverables and statutory tax/accounting obligations.
        </p>
      </section>

      <section className="flex flex-col gap-3 border-t border-border pt-6">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          7. Contact Information
        </h2>
        <p>For questions or privacy inquiries, contact our Privacy Compliance Officer:</p>
        <div className="p-5 rounded-[16px] bg-surface-subtle border border-border flex flex-col gap-2 text-sm">
          <span className="font-semibold text-text-primary">[COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC]</span>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>[CONTACT EMAIL, e.g., inquiries@blackstoneinfomatics.com]</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>[PHYSICAL MAILING ADDRESS / BUSINESS LOCATION, e.g., Austin, TX / Delaware]</span>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
