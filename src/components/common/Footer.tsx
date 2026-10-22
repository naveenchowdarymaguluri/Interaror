"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Download,
  BookOpen,
  Award,
  Factory,
  Sparkles,
} from "lucide-react";
import Logo from "./Logo";
import { companyConfig, getPhoneUrl, getWhatsAppUrl } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import { productCategories } from "@/data/productsData";
import { useStore } from "@/context/StoreContext";

export default function Footer() {
  const { openLookbook } = useStore();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & 2026 Lookbook Callout - Inspired by footer.design & cta.gallery */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-white/10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl space-y-2 text-center lg:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#EEC10E] flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Edition 2026 Architectural Catalog
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Download the 2026 Interior Specification & Lookbook
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              84 pages of luxury floor plans, kitchen ergonomics, German hardware specs, and authentic material swatch comparisons.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={openLookbook}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EEC10E] hover:bg-[#dfb40a] text-stone-950 px-6 py-3.5 rounded-2xl text-xs font-black shadow-md transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Download Free Lookbook (PDF)</span>
            </button>
            <a
              href={getWhatsAppUrl("Hello, I would like to receive the 2026 Interior Lookbook on WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3.5 rounded-2xl text-xs font-bold border border-white/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Get on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="dark" showTagline={true} />
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Terraform Modular delivers thoughtful interior architecture and factory-engineered modular furniture. From bespoke residential living spaces and modular kitchens to corporate headquarters, we unite architectural integrity with precision manufacturing.
            </p>

            {/* Studio Status Live Indicator */}
            <div className="flex items-center gap-2 text-xs text-stone-300 bg-white/5 p-3 rounded-2xl border border-white/10 max-w-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <strong className="text-white block font-semibold text-[11px]">
                  Design Studios Open Today
                </strong>
                <span className="text-[10px] text-stone-400">
                  Mon – Sun: 10:00 AM – 8:00 PM (Indiranagar & Jubilee Hills)
                </span>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Studio</span>
              </a>
              <a
                href={getPhoneUrl()}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#EEC10E]" />
                <span>{companyConfig.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Product Collections Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#EEC10E] uppercase">
              Modular Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              {productCategories.slice(0, 7).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products#${cat.slug}`}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-[#EEC10E] hover:underline font-bold inline-flex items-center gap-1 pt-1"
                >
                  <span>View All Collections</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Interior Services Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#EEC10E] uppercase">
              Design & Fit-Out
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/estimator"
                  className="text-[#EEC10E] hover:underline font-bold inline-flex items-center gap-1 pt-1"
                >
                  <span>Instant BOQ Estimator</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Experience Studios & Quality Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#EEC10E] uppercase">
              Experience Centers
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div>
                <strong className="text-white block font-semibold">Flagship Studio (Bangalore)</strong>
                <p className="text-[11px] mt-0.5 text-stone-400">
                  {companyConfig.address.line1}, {companyConfig.address.line2}, {companyConfig.address.city} - {companyConfig.address.pincode}
                </p>
              </div>

              <div>
                <strong className="text-white block font-semibold">Factory & Machine Center</strong>
                <p className="text-[11px] mt-0.5 text-stone-400">
                  Peenya Industrial Area, Phase II, Bangalore
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1.5 text-[11px]">
                <span className="flex items-center gap-1.5 text-stone-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  IS:710 Marine BWP Certified
                </span>
                <span className="flex items-center gap-1.5 text-stone-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Blum & Hettich Authorized Partner
                </span>
                <span className="flex items-center gap-1.5 text-stone-300">
                  <Award className="w-3.5 h-3.5 text-[#EEC10E]" />
                  10-Year Carcass Replacement Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Large Editorial Watermark Typography - Inspired by footer.design */}
        <div className="py-10 border-b border-white/5 select-none overflow-hidden">
          <p className="text-4xl sm:text-6xl lg:text-7xl font-black text-white/5 tracking-tighter text-center uppercase whitespace-nowrap">
            TERRAFORM MODULAR • ARCHITECTURAL MILLWORK
          </p>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Terraform Modular Studio. All rights reserved.</p>

          <div className="flex items-center gap-6 text-stone-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
