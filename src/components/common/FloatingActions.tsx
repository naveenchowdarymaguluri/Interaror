"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Calculator, X } from "lucide-react";
import Link from "next/link";
import { companyConfig, getPhoneUrl, getWhatsAppUrl } from "@/data/companyData";

export default function FloatingActions() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Estimator Pill */}
      <Link
        href="/estimator"
        className="pointer-events-auto hidden sm:inline-flex items-center gap-2 bg-[#1F3B6B] hover:bg-[#122442] text-white px-4 py-2.5 rounded-full text-xs font-bold shadow-lg transition-all transform hover:-translate-y-0.5 border border-white/20"
      >
        <Calculator className="w-3.5 h-3.5 text-[#EEC10E]" />
        <span>Cost Estimator</span>
      </Link>

      {/* Floating Buttons Cluster */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Quick Call */}
        <a
          href={getPhoneUrl()}
          className="w-12 h-12 bg-white text-[#1F3B6B] hover:bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
          aria-label="Direct Phone Call"
          title={`Call ${companyConfig.displayPhone}`}
        >
          <Phone className="w-5 h-5 text-[#1F3B6B]" />
        </a>

        {/* WhatsApp Floating Trigger */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-13 h-13 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-105"
          aria-label="Chat with Terraform Modular on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#EEC10E] border-2 border-white rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#EEC10E] border-2 border-white rounded-full" />
        </a>
      </div>
    </div>
  );
}
