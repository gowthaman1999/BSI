import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
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
  ],
  authors: [{ name: "Blackstone Infomatics" }],
  openGraph: {
    title: "Blackstone Infomatics — Clean design. Serious engineering.",
    description:
      "Digital studio partnering with U.S. teams for scalable web applications and high-performance engineering.",
    url: "https://blackstoneinfomatics.com",
    siteName: "Blackstone Infomatics",
    locale: "en_US",
    type: "website",
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
    <html lang="en" className={manrope.variable}>
      <body className="bg-surface font-sans text-on-surface antialiased min-h-screen flex flex-col selection:bg-brand-orange selection:text-white">
        <Navbar />
        <main className="w-full pt-20 flex-grow bg-surface">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

