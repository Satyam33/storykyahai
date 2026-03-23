"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, ChevronUp } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  // Do not render footer on the contact-us page
  if (pathname === "/contact-us") return null;

  return (
    <footer className="w-full bg-[#111111] text-white">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <Link href="/">
          <Image src="/brandLogo.png" alt="Story Kyahai Logo" width={180} height={48} className="h-10 w-auto object-contain" />
        </Link>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 text-sm font-bold text-white tracking-wide">
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /> Facebook</a>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /> Instagram</a>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Youtube className="w-5 h-5" /> Youtube</a>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /> LinkedIn</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 flex flex-col lg:flex-row gap-20 justify-between border-b border-white/10">
        <div className="flex-1 space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Have a project in mind?<br />
            <Link href="/contact-us" className="underline decoration-white hover:decoration-primary transition-colors decoration-[4px] underline-offset-[12px]">Let's Connect</Link>
          </h2>

          <div className="flex flex-wrap gap-6 pt-4">
            <a href="mailto:hello@storykyahai.com" className="px-8 py-4 rounded-full border border-white/20 hover:border-primary transition-colors text-lg font-medium tracking-wide">
              hello@storykyahai.com
            </a>
            <div className="px-8 py-4 rounded-full border border-white/20 text-lg font-medium tracking-wide">
              +91 99999 99999 <span className="text-white/30 mx-4">|</span> +91 88888 88888
            </div>
          </div>
        </div>

        <div className="flex-none lg:max-w-[400px] w-full flex flex-col gap-16">
          <div className="space-y-8">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white">Useful Links</h3>
            <div className="grid grid-cols-2 gap-y-6 font-medium text-white/80 text-lg">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              {/* <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link> */}
              <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Visit Our Office
            </h3>
            <p className="text-white/70 leading-relaxed font-medium text-lg pt-2 pr-10">
              123, Story House, Opp. Creator Park, <br />
              Brand Road, Mumbai, India – 400001
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 relative flex flex-col items-center justify-center text-center">
        <p className="text-white/50 text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} Story Kyahai? All rights reserved.
        </p>
      </div>
    </footer>
  );
}
