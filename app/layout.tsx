import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { CookieConsentBanner } from "@/components/compliance/CookieConsentBanner";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackstoneinfomatics.com"),
  title: "Blackstone Infomatics — Clean design. Serious engineering.",
  description:
    "We partner with ambitious U.S. teams to design and engineer scalable web applications, modern brand identities, and high-performance digital products.",
  keywords: [
    "Blackstone Infomatics",
    "Web Design",
    "Software Engineering",
    "Next.js Development",
    "UI/UX Design Systems",
    "TypeScript",
    "Headless Commerce",
    "WCAG 2.2 AA",
  ],
  authors: [{ name: "Blackstone Infomatics" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Blackstone Infomatics — Clean design. Serious engineering.",
    description:
      "Digital studio partnering with U.S. teams for scalable web applications, modern brand systems, and high-performance engineering.",
    url: "https://blackstoneinfomatics.com",
    siteName: "Blackstone Infomatics",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        width: 675,
        height: 224,
        alt: "Blackstone Infomatics Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackstone Infomatics — Clean design. Serious engineering.",
    description:
      "Digital studio partnering with U.S. teams for scalable web applications and high-performance engineering.",
    images: ["/images/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body className="bg-background font-sans text-text-primary antialiased min-h-screen flex flex-col selection:bg-brand-primary selection:text-white transition-colors duration-200">
        <ThemeProvider>
          {/* Accessible Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-brand-primary focus:text-white focus:rounded-full focus:shadow-2xl focus:font-bold focus:outline-none focus:ring-2 focus:ring-brand-accent"
          >
            Skip to main content
          </a>

          <Navbar />
          <main id="main-content" className="w-full pt-20 flex-grow bg-background">
            {children}
          </main>
          <Footer />

          {/* Cookie Consent Banner */}
          <CookieConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
