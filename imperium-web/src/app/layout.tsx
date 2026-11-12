import type { Metadata, Viewport } from "next";
import { Overpass, Overpass_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { organizationLd, websiteLd } from "@/lib/seo";
import { site } from "@/content/site";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-overpass",
  display: "swap",
});
const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-overpass-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Imperium | Contact centre, communications and applied AI",
    template: "%s | Imperium",
  },
  description: site.description,
  applicationName: "Imperium",
  authors: [{ name: "Imperium Software Technologies", url: site.url }],
  formatDetection: { telephone: false },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${overpass.variable} ${overpassMono.variable}`}>
      <body className="min-h-dvh">
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
