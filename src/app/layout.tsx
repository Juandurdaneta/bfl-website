import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Built For Life Financial Agency | Financial Strategies for Families",
  description: "Get your FREE Financial Needs Analysis and discover exactly where you're leaving money on the table. Tax-optimized wealth-building strategies for hard-working families.",
  keywords: "financial planning, tax optimization, wealth building, insurance planning, financial advisor",
  openGraph: {
    title: "Built For Life Financial Agency",
    description: "Finally: A Clear Financial Strategy That Protects Your Family, Optimizes Your Taxes, and Builds Lasting Wealth",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
