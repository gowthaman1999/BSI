import React from "react";
import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { LegalPageLayout } from "@/components/compliance/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Blackstone Infomatics",
  description:
    "Information regarding our use of cookies, local storage, analytics beacons, and how you can manage tracking preferences on Blackstone Infomatics.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      badgeText="Tracking Transparency & User Control"
      iconName="cookie"
      lastUpdated="October 30, 2026"
    >
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          1. What Are Cookies?
        </h2>
        <p>
          Cookies are small alphanumeric text files stored on your computer or mobile device when you browse websites. They are widely used to maintain security, preserve user preferences (such as light or dark theme choices), and evaluate platform responsiveness without identifying individual visitors personally.
        </p>
        <p>
          In addition to HTTP cookies, <strong className="text-text-primary">[COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC]</strong> (&ldquo;Blackstone Infomatics&rdquo;) may use local storage, session storage, and web telemetry tokens to facilitate modern web application performance.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          2. Types of Cookies We Use
        </h2>
        <div className="overflow-x-auto my-2 rounded-[16px] border border-border">
          <table className="w-full text-left text-xs sm:text-sm overflow-hidden">
            <thead className="bg-surface-subtle text-text-primary font-semibold">
              <tr>
                <th className="p-3.5 border-b border-border">Cookie Type</th>
                <th className="p-3.5 border-b border-border">Purpose</th>
                <th className="p-3.5 border-b border-border">Default Lifespan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3.5 font-medium text-text-primary">Strictly Essential Cookies</td>
                <td className="p-3.5">Required for platform stability, security tokens, CSRF protection, and preserving theme selections.</td>
                <td className="p-3.5">Session / 1 Year</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-text-primary">Functional Cookies</td>
                <td className="p-3.5">Saves cookie consent preferences, portfolio filter states, and interactive 3D settings.</td>
                <td className="p-3.5">6 Months</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-text-primary">Performance &amp; Analytics</td>
                <td className="p-3.5">Collects anonymized telemetry on sub-second page load times, layout shifts, and route responsiveness.</td>
                <td className="p-3.5">Up to 2 Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          3. No Cross-Site Behavioral Tracking
        </h2>
        <div className="p-5 rounded-[16px] bg-surface-subtle border border-border">
          <p className="font-semibold text-text-primary">
            We respect your digital footprint: We do not deploy third-party advertising cookies, retargeting pixels, or data broker trackers.
          </p>
          <p className="mt-1.5 text-xs sm:text-sm">
            Our digital studio does not monetize user tracking or build advertising profiles across external properties.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          4. Managing Your Cookie Choices
        </h2>
        <p>You have full authority over cookie installation on our Platform:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>
            <strong className="text-text-primary">Consent Banner:</strong> You can modify or withdraw your cookie preferences at any time using the on-site consent banner or preferences dialogue.
          </li>
          <li>
            <strong className="text-text-primary">Browser Controls:</strong> Most modern web browsers (Chrome, Edge, Safari, Firefox) allow you to block or delete cookies via your browser privacy settings. Note that disabling essential cookies may impact platform styling or functionality.
          </li>
          <li>
            <strong className="text-text-primary">Global Privacy Control (GPC):</strong> We recognize and respect automated browser opt-out signals such as the Global Privacy Control header.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-3 border-t border-border pt-6">
        <h2 className="text-xl font-semibold text-text-primary tracking-[-0.02em]">
          5. Contact Information
        </h2>
        <p>If you have any questions regarding our use of cookies or telemetry, please contact:</p>
        <div className="p-5 rounded-[16px] bg-surface-subtle border border-border flex flex-col gap-2 text-sm">
          <span className="font-semibold text-text-primary">[COMPANY LEGAL NAME, e.g., Blackstone Infomatics LLC]</span>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>[CONTACT EMAIL, e.g., inquiries@blackstoneinfomatics.com]</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-primary shrink-0" aria-hidden="true" />
            <span>[PHYSICAL MAILING ADDRESS / LOCATION, e.g., Austin, TX / Delaware]</span>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
