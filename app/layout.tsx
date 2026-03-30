import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { siteConfig } from "@/content/site";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.organization} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.organization}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} min-h-screen bg-(--surface) text-(--text-primary) antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="grow">{children}</main>
          <SiteFooter />
        </div>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
