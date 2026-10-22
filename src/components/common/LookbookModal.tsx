"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Download,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function LookbookModal() {
  const { isLookbookOpen, closeLookbook } = useStore();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isLookbookOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div
          onClick={closeLookbook}
          className="fixed inset-0 bg-stone-950/75 backdrop-blur-md transition-opacity"
        />

        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-stone-200">
          <button
            onClick={closeLookbook}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-5">
            {/* Visual Cover Column */}
            <div className="sm:col-span-2 relative min-h-[220px] sm:min-h-full bg-stone-900 p-6 flex flex-col justify-between overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                alt="Terraform Modular 2026 Lookbook"
                fill
                className="object-cover opacity-40 mix-blend-luminosity"
              />
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#EEC10E] block">
                  Edition 2026
                </span>
                <h4 className="text-xl font-black text-white mt-1 leading-tight">
                  Architectural Lookbook & Material Spec
                </h4>
              </div>

              <div className="relative z-10 space-y-1 pt-6 text-[11px] text-stone-300">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EEC10E]" />
                  84 Curated Room Blueprints
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EEC10E]" />
                  Material & Finish Swatch Guide
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EEC10E]" />
                  Itemized BOQ Pricing Matrix
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="sm:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Download className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900">Lookbook Unlocked!</h4>
                    <p className="text-xs text-stone-600 mt-1 max-w-xs mx-auto">
                      We have prepared your copy of the 2026 Specification Catalog. Click below to download the high-resolution PDF.
                    </p>
                  </div>
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("2026 Interior Specification & Lookbook (PDF, 24MB) download initialized.");
                      closeLookbook();
                    }}
                    className="inline-flex items-center gap-2 bg-[#1F3B6B] hover:bg-[#15294b] text-white py-3 px-6 rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    <Download className="w-4 h-4 text-[#EEC10E]" />
                    <span>Download Lookbook PDF (24 MB)</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                      Free Instant Download
                    </span>
                    <h3 className="text-xl font-extrabold text-[#1F3B6B] mt-1">
                      Get The Complete 2026 Interior Catalog
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Includes architectural kitchen layouts, wardrobe internals, hardware technical drawings, and finishes index.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] font-bold text-stone-700 block mb-1">
                        Your Work / Personal Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#1F3B6B] focus:ring-1 focus:ring-[#1F3B6B]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-stone-700 block mb-1">
                        Phone / WhatsApp Number (For instant PDF link)
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#1F3B6B] focus:ring-1 focus:ring-[#1F3B6B]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#1F3B6B] hover:bg-[#15294b] text-white py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    <Download className="w-4 h-4 text-[#EEC10E]" />
                    <span>Get Instant PDF Access</span>
                  </button>

                  <p className="text-[10px] text-stone-400 text-center">
                    🔒 Zero spam. We only send relevant architectural updates & price guides.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
