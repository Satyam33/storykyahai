import type { Metadata } from "next";
import { Geist, Geist_Mono, Bakbak_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bakbakOne = Bakbak_One({
  weight: "400",
  variable: "--font-bakbak",
  subsets: ["devanagari", "latin"],
});

import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "story kyahai ? | Marketing Agency",
  description: "Har brand mein ek kahani hoti hai... bas kisi ko sunani nahi aati.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bakbakOne.variable} antialiased`}>
      <body className="min-h-screen flex flex-col pt-24" suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
