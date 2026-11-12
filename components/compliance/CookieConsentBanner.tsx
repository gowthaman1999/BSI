"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Shield, X, SlidersHorizontal } from "lucide-react";

export function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    functional: false,
  });

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("bsi_cookie_consent");
    if (!saved) {
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = {
      essential: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("bsi_cookie_consent", JSON.stringify(fullConsent));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectNonEssential = () => {
    const minConsent = {
      essential: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("bsi_cookie_consent", JSON.stringify(minConsent));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    const customConsent = {
      ...preferences,
      essential: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("bsi_cookie_consent", JSON.stringify(customConsent));
    setShowBanner(false);
    setShowModal(false);
  };

  if (!mounted || !showBanner) return null;

  return (
    <>
      {/* Sticky Banner */}
      <aside
        role="region"
        aria-label="Cookie and Privacy Consent"
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-5 rounded-[22px] bg-surface border border-border-strong shadow-card-hover animate-in slide-in-from-bottom-4 duration-300"
      >
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-accent-text shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-sm text-sm font-semibold text-text-primary">
              Privacy &amp; Cookie Choices
            </h3>
            <p className="font-body-sm text-xs text-text-muted leading-relaxed">
              We use essential cookies to ensure our digital platform operates securely, and optional analytics cookies to measure site engagement in accordance with US privacy standards. Review our{" "}
              <Link href="/cookies" className="underline text-brand-accent-text hover:text-brand-primary font-medium">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline text-brand-accent-text hover:text-brand-primary font-medium">
                Privacy Policy
              </Link>.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-full bg-brand-primary hover:bg-brand-primary-light text-on-accent text-xs font-semibold shadow-cta transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-4 py-2 rounded-full bg-surface-subtle hover:bg-surface-subtle-hover text-text-primary border border-border-strong text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-2.5 py-2 text-xs text-text-muted hover:text-text-primary underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
              >
                <SlidersHorizontal className="w-3 h-3" aria-hidden="true" />
                <span>Preferences</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Preferences Modal Dialog */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="w-full max-w-lg bg-surface rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-border-strong shadow-dark-card flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-brand-primary" aria-hidden="true" />
                <h3 id="cookie-modal-title" className="font-headline-sm text-lg font-semibold text-text-primary">
                  Cookie Preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-full bg-surface-subtle hover:bg-surface-subtle-hover flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close preferences dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-text-muted leading-relaxed">
              Customize which categories of cookies you permit. Strictly essential cookies are required for basic site navigation, CSRF protection, and theme preference persistence.
            </p>

            <div className="flex flex-col gap-3 py-1">
              <div className="p-3.5 rounded-2xl bg-surface-subtle border border-border flex items-center justify-between">
                <div className="flex flex-col pr-4">
                  <span className="text-xs font-bold text-text-primary">Strictly Essential Cookies</span>
                  <span className="text-[11px] text-text-muted">Security tokens, layout rendering, and accessibility settings.</span>
                </div>
                <span className="text-[11px] font-semibold text-brand-accent-text px-2.5 py-1 rounded-full bg-brand-primary/10">
                  Always Active
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-subtle border border-border flex items-center justify-between">
                <div className="flex flex-col pr-4">
                  <span className="text-xs font-bold text-text-primary">Analytics &amp; Performance</span>
                  <span className="text-[11px] text-text-muted">Anonymous telemetry to measure sub-second page performance and user flows.</span>
                </div>
                <input
                  type="checkbox"
                  id="cookie-analytics"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4 rounded accent-[#eaac1f] cursor-pointer"
                  aria-label="Allow Analytics Cookies"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-subtle border border-border flex items-center justify-between">
                <div className="flex flex-col pr-4">
                  <span className="text-xs font-bold text-text-primary">Functional &amp; Experience</span>
                  <span className="text-[11px] text-text-muted">Interactive portfolio filter presets and interactive 3D preferences.</span>
                </div>
                <input
                  type="checkbox"
                  id="cookie-functional"
                  checked={preferences.functional}
                  onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                  className="w-4 h-4 rounded accent-[#eaac1f] cursor-pointer"
                  aria-label="Allow Functional Cookies"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-border">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-4 py-2 rounded-full text-xs font-semibold text-text-muted hover:text-text-primary transition-colors"
              >
                Reject All Non-Essential
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-primary-light text-on-accent text-xs font-semibold shadow-cta transition-all"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
