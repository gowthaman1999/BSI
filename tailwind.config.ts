import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Central Semantic Tokens (Hero Source of Truth) */
        background: "rgb(var(--bg-canvas) / <alpha-value>)",
        surface: "rgb(var(--bg-card) / <alpha-value>)",
        "surface-subtle": "rgb(var(--bg-subtle) / <alpha-value>)",
        "surface-subtle-hover": "rgb(var(--bg-subtle-hover) / <alpha-value>)",

        /* Signature Dark Surface Tokens */
        "surface-dark": "rgb(var(--bg-dark) / <alpha-value>)",
        "surface-dark-elevated": "rgb(var(--bg-dark-elevated) / <alpha-value>)",
        "surface-dark-subtle": "rgb(var(--bg-dark-subtle) / <alpha-value>)",
        "surface-dark-deep": "rgb(var(--bg-dark-deep) / <alpha-value>)",

        /* Foreground Tokens */
        "text-primary": "rgb(var(--fg-primary) / <alpha-value>)",
        "text-muted": "rgb(var(--fg-muted) / <alpha-value>)",
        "text-subtle": "rgb(var(--fg-subtle) / <alpha-value>)",
        "on-dark": "rgb(var(--fg-on-dark) / <alpha-value>)",
        "on-dark-muted": "rgb(var(--fg-on-dark-muted) / <alpha-value>)",
        "on-dark-subtle": "rgb(var(--fg-on-dark-subtle) / <alpha-value>)",

        /* Brand Accent Tokens */
        "brand-primary": "rgb(var(--accent) / <alpha-value>)",
        "brand-primary-light": "rgb(var(--accent-hover) / <alpha-value>)",
        "brand-primary-dark": "#c48a10",
        "brand-accent": "rgb(var(--accent) / <alpha-value>)",
        "brand-accent-text": "rgb(var(--accent-text) / <alpha-value>)",
        "on-accent": "rgb(var(--on-accent) / <alpha-value>)",
        "brand-orange": "rgb(var(--accent) / <alpha-value>)",

        /* Border Tokens */
        border: "var(--border-subtle)",
        "border-strong": "var(--border-strong)",
        "border-dark": "var(--border-dark)",
        "border-dark-strong": "var(--border-dark-strong)",

        /* Compatibility aliases mapped to central tokens */
        primary: "rgb(var(--fg-primary) / <alpha-value>)",
        "on-primary": "rgb(var(--bg-card) / <alpha-value>)",
        "primary-container": "rgb(var(--bg-dark-subtle) / <alpha-value>)",
        "surface-container": "rgb(var(--bg-subtle) / <alpha-value>)",
        "surface-container-low": "rgb(var(--bg-subtle) / <alpha-value>)",
        "surface-container-high": "rgb(var(--bg-subtle-hover) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--bg-card) / <alpha-value>)",
        "surface-dim": "rgb(var(--bg-subtle-hover) / <alpha-value>)",
        "on-surface": "rgb(var(--fg-primary) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--fg-muted) / <alpha-value>)",
        tertiary: "rgb(var(--bg-dark) / <alpha-value>)",
        "on-tertiary": "rgb(var(--fg-on-dark) / <alpha-value>)",
        "tertiary-fixed-dim": "rgb(var(--fg-on-dark-muted) / <alpha-value>)",
        "on-tertiary-container": "rgb(var(--fg-on-dark-subtle) / <alpha-value>)",
        outline: "rgb(var(--fg-subtle) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
        tag: "6px",
        media: "20px",
        card: "24px",
        bento: "28px",
        "bento-lg": "32px",
      },
      boxShadow: {
        xs: "0 1px 3px rgba(18, 18, 18, 0.05)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        "dark-card": "var(--shadow-dark)",
        cta: "var(--shadow-cta)",
        "cta-hover": "var(--shadow-cta-hover)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "sans-serif"],
        "display-hero": ["var(--font-manrope)", "Manrope", "sans-serif"],
        "headline-lg": ["var(--font-manrope)", "Manrope", "sans-serif"],
        "headline-md": ["var(--font-manrope)", "Manrope", "sans-serif"],
        "headline-sm": ["var(--font-manrope)", "Manrope", "sans-serif"],
        "body-lg": ["var(--font-manrope)", "Manrope", "sans-serif"],
        "body-md": ["var(--font-manrope)", "Manrope", "sans-serif"],
        "body-sm": ["var(--font-manrope)", "Manrope", "sans-serif"],
        "label-button": ["var(--font-manrope)", "Manrope", "sans-serif"],
        "label-caps": ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      fontSize: {
        "label-caps": ["11px", { lineHeight: "16px", letterSpacing: "0.12em", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "22px", letterSpacing: "0em", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
        "body-lg": ["16px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "headline-sm": ["20px", { lineHeight: "26px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-md": ["26px", { lineHeight: "34px", letterSpacing: "-0.025em", fontWeight: "600" }],
        "headline-lg-mobile": ["30px", { lineHeight: "36px", letterSpacing: "-0.03em", fontWeight: "500" }],
        "headline-lg": ["44px", { lineHeight: "50px", letterSpacing: "-0.03em", fontWeight: "500" }],
        "display-hero-mobile": ["36px", { lineHeight: "42px", letterSpacing: "-0.03em", fontWeight: "500" }],
        "display-hero": ["64px", { lineHeight: "70px", letterSpacing: "-0.03em", fontWeight: "500" }],
        "label-button": ["14px", { lineHeight: "20px", letterSpacing: "0em", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};

export default config;
