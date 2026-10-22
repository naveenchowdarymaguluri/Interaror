"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Calculator,
  Phone,
  MessageCircle,
  Star,
  Award,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { companyConfig, getWhatsAppUrl, getPhoneUrl } from "@/data/companyData";

export default function CtaShowcase() {
  const { openConsultation, openLookbook } = useStore();

  return (
    <section className="py-20 bg-stone-900 relative overflow-hidden text-white border-y border-stone-800">
      {/* Background Architectural Image with atmospheric gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Interior Background"
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Value Props & Testimonial Proof */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#EEC10E] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero-Risk Design Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to transform your home with precision modular millwork?
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl">
              Meet our senior architects for an in-studio or online session. We will review your floor plan, provide 3D spatial layouts, and generate a transparent, itemized Bill of Quantities (BOQ) with zero hidden fees.
            </p>

            {/* Confidence Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EEC10E] shrink-0" />
                <span>Free Initial 3D Spatial Concept</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EEC10E] shrink-0" />
                <span>Laser Digital Site Survey</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EEC10E] shrink-0" />
                <span>45-Day Handover with Penalty Clause</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EEC10E] shrink-0" />
                <span>10-Year Water-Resistant Warranty</span>
              </div>
            </div>

            {/* Social Proof Pill */}
            <div className="pt-4 flex items-center gap-4 text-xs text-stone-300 border-t border-white/10">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div>
                <strong className="text-white font-bold">4.96 out of 5</strong> based on 450+ completed residences & corporate offices.
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Card 1: Book Consultation Modal Trigger */}
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl hover:border-[#EEC10E]/50 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EEC10E] bg-white/5 px-2.5 py-1 rounded-md">
                  Fastest Way to Begin
                </span>
                <Calendar className="w-5 h-5 text-[#EEC10E]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Schedule Free 3D Design Session
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  Connect directly with a dedicated interior architect to explore layouts, hardware, and budget estimates.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <button
                  onClick={() => openConsultation()}
                  className="w-full flex items-center justify-center gap-2 bg-[#EEC10E] hover:bg-[#dfb40a] text-stone-950 py-3.5 px-4 rounded-xl font-black text-xs shadow-lg transition-all hover:scale-[1.02]"
                >
                  <span>Book Free Studio / Video Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl("Hello Terraform Modular, I want to book a free 3D design session.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl font-bold text-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 2: 60-Second Estimator Shortcut */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#EEC10E] shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Need an Instant Cost Estimate?</h4>
                  <p className="text-[11px] text-stone-400">
                    Use our interactive pricing calculator in 60 seconds.
                  </p>
                </div>
              </div>

              <Link
                href="/estimator"
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/10 transition-colors shrink-0"
              >
                Estimate →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
