"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Calculator,
  ShoppingBag,
  Sparkles,
  Calendar,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { companyConfig, getPhoneUrl, getWhatsAppUrl } from "@/data/companyData";

export default function StickyBottomBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { cartCount, setIsCartOpen, openConsultation } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-2xl w-[94%] sm:w-auto animate-fade-in-up">
      <div className="bg-stone-900/95 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-2xl px-4 py-2.5 flex items-center justify-between sm:justify-center gap-3 sm:gap-4 ring-1 ring-black/10">
        {/* Quick Estimate link */}
        <Link
          href="/estimator"
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-stone-200 hover:text-white transition-all border border-white/10"
        >
          <Calculator className="w-3.5 h-3.5 text-[#EEC10E]" />
          <span className="hidden sm:inline">Instant Estimator</span>
          <span className="sm:hidden">Estimate</span>
        </Link>

        {/* Free 3D Consultation button */}
        <button
          onClick={() => openConsultation()}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#EEC10E] hover:bg-[#d9b00c] text-stone-950 text-xs font-extrabold shadow-sm transition-all"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Free 3D Consult</span>
        </button>

        {/* Cart / Basket Trigger */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-stone-200 hover:text-white transition-all border border-white/10"
          aria-label="Open Quote Basket"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-[#EEC10E]" />
          <span className="hidden sm:inline">Quote Basket</span>
          {cartCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#EEC10E] text-stone-950 text-[10px] font-black flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        {/* WhatsApp Direct */}
        <a
          href={getWhatsAppUrl("Hello Terraform Modular, I am viewing your interior catalog and would like to speak with a designer.")}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
