import React from "react";
import Link from "next/link";
import { ChevronRight, Shield, Scale, Cookie, Eye, AlertCircle } from "lucide-react";
import { PageShell, Section } from "@/components/ui/Section";
import { EyebrowPill } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";

type LegalIconName = "shield" | "scale" | "cookie" | "eye" | "alert";

const ICON_MAP = {
  shield: Shield,
  scale: Scale,
  cookie: Cookie,
  eye: Eye,
  alert: AlertCircle,
} as const;

interface LegalPageLayoutProps {
  title: string;
  badgeText: string;
  iconName: LegalIconName;
  lastUpdated: string;
  dateTime?: string;
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  badgeText,
  iconName,
  lastUpdated,
  dateTime = "2026-10-30",
  children,
}: LegalPageLayoutProps) {
  const Icon = ICON_MAP[iconName];

  return (
    <PageShell>
      {/* Hero-aligned Header Card */}
      <Section
        surface="dark-inset"
        ariaLabel={`${title} Header`}
        innerClassName="py-8 sm:py-12 lg:py-14"
      >
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-on-dark-subtle mb-5"
        >
          <Link href="/" className="hover:text-on-dark transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-brand-primary">{title}</span>
        </nav>

        <EyebrowPill surface="dark" icon={Icon}>
          {badgeText}
        </EyebrowPill>

        <h1 className="mt-5 font-display-hero text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.06] tracking-[-0.03em] text-on-dark">
          {title}
        </h1>

        <p className="mt-4 text-sm text-on-dark-muted">
          Last updated: <time dateTime={dateTime}>{lastUpdated}</time>
        </p>
      </Section>

      {/* Document Surface */}
      <Section surface="plain">
        <Card surface="light" padding="lg" hoverable={false} className="w-full">
          <article className="max-w-[78ch] flex flex-col gap-8 text-text-muted leading-relaxed text-[15px]">
            {children}
          </article>
        </Card>
      </Section>
    </PageShell>
  );
}

