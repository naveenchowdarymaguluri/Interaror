"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Send,
  Building,
  Sparkles,
  ArrowRight,
  Compass,
  Calendar,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { companyConfig, getPhoneUrl, getWhatsAppUrl } from "@/data/companyData";
import { useStore } from "@/context/StoreContext";

export default function ContactPage() {
  const [scopes, setScopes] = useState<string[]>(["full-home"]);
  const [appointmentType, setAppointmentType] = useState<string>("studio");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Bangalore",
    approxSqft: "2400",
    date: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleScope = (scopeId: string) => {
    setScopes((prev) =>
      prev.includes(scopeId) ? prev.filter((s) => s !== scopeId) : [...prev, scopeId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FBF9F5] text-[#1B1C1A] pb-24">
      {/* Top Editorial Header & Live Concierge Indicator */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 pt-8 pb-6">
        <Breadcrumbs items={[{ label: "Book Architectural Consultation" }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 pb-6 border-b border-[#CDC5BC]/30">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F3EF] border border-[#CDC5BC]/40 text-[#EEC10E] mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#EEC10E] animate-pulse" />
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#122442] font-bold">
                Private Appointments • 2026 Calendar
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] text-[#122442] tracking-tight leading-tight">
              Book a Private Architectural Consultation
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#4A463F] mt-2 font-light leading-relaxed max-w-2xl">
              Engage with our lead interior architects for complimentary 3D spatial planning, material curation, and bespoke modular budgeting.
            </p>
          </div>

          {/* Live Concierge Badge */}
          <div className="flex items-center gap-4 bg-[#F5F3EF] px-5 py-4 rounded-xl border border-[#CDC5BC]/30 shadow-sm shrink-0">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-3 h-3 rounded-full bg-[#EEC10E] animate-ping opacity-50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#EEC10E]" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] uppercase text-[#7C766E] tracking-wider font-bold">
                Direct Concierge Active
              </span>
              <span className="font-serif text-sm font-semibold text-[#122442]">
                Mon – Sat: 9:30 AM – 7:00 PM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Asymmetric Layout */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Consultation Planner */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-[#CDC5BC]/30">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* 1. Spatial Scope Selection */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-baseline justify-between">
                    <label className="font-sans text-xs uppercase tracking-wider font-bold text-[#122442]">
                      1. Select Project Scope
                    </label>
                    <span className="font-sans text-xs text-[#7C766E]">
                      Select all applicable
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: "full-home", title: "Full Home Interior", desc: "Turnkey joinery & spatial flow" },
                      { id: "modular-kitchen", title: "Modular Kitchen Suite", desc: "Stone islands & concealed millwork" },
                      { id: "custom-wardrobes", title: "Custom Wardrobes", desc: "Fluted glass & interior lighting" },
                      { id: "living-media", title: "Living & Media Walls", desc: "Acoustic paneling & consoles" },
                      { id: "commercial-studio", title: "Executive Studio / Office", desc: "Desking clusters & boardroom" },
                    ].map((scope) => {
                      const isChecked = scopes.includes(scope.id);
                      return (
                        <div
                          key={scope.id}
                          onClick={() => toggleScope(scope.id)}
                          className={`cursor-pointer p-4 rounded-xl border transition-all ${
                            isChecked
                              ? "bg-[#122442] text-white border-[#122442] shadow-sm"
                              : "bg-[#F5F3EF] text-[#1B1C1A] border-transparent hover:border-[#CDC5BC]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-sans text-xs font-bold">{scope.title}</span>
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                                isChecked ? "bg-[#EEC10E] text-[#122442] font-black" : "border border-stone-400"
                              }`}
                            >
                              {isChecked && "✓"}
                            </div>
                          </div>
                          <span
                            className={`font-sans text-[11px] leading-tight block ${
                              isChecked ? "text-slate-300" : "text-[#7C766E]"
                            }`}
                          >
                            {scope.desc}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Consultation Medium */}
                <div className="flex flex-col gap-2 pt-2 border-t border-[#CDC5BC]/20">
                  <label className="font-sans text-xs uppercase tracking-wider font-bold text-[#122442]">
                    2. Preferred Appointment Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "studio", label: "In Experience Studio" },
                      { id: "site", label: "On-Site Laser Visit" },
                      { id: "virtual", label: "3D Virtual Session" },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setAppointmentType(type.id)}
                        className={`p-3 rounded-xl font-sans text-xs font-bold transition-all ${
                          appointmentType === type.id
                            ? "bg-[#EEC10E] text-[#122442] shadow-sm"
                            : "bg-[#F5F3EF] text-[#4A463F] hover:bg-[#EAE8E4]"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Contact Details */}
                <div className="flex flex-col gap-3 pt-2 border-t border-[#CDC5BC]/20">
                  <label className="font-sans text-xs uppercase tracking-wider font-bold text-[#122442]">
                    3. Contact & Spatial Details
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-sans text-[10px] uppercase font-bold text-[#7C766E] block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F5F3EF] border-none font-sans text-xs text-[#1B1C1A] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[10px] uppercase font-bold text-[#7C766E] block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F5F3EF] border-none font-sans text-xs text-[#1B1C1A] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-sans text-[10px] uppercase font-bold text-[#7C766E] block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F5F3EF] border-none font-sans text-xs text-[#1B1C1A] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[10px] uppercase font-bold text-[#7C766E] block mb-1">
                        Approximate Carpet Area (sq.ft)
                      </label>
                      <input
                        type="text"
                        value={formData.approxSqft}
                        onChange={(e) => setFormData({ ...formData, approxSqft: e.target.value })}
                        placeholder="e.g. 2400 sq.ft"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F5F3EF] border-none font-sans text-xs text-[#1B1C1A] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-[10px] uppercase font-bold text-[#7C766E] block mb-1">
                      Design Notes & Specific Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your property location, handover date, or preferred materials..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#F5F3EF] border-none font-sans text-xs text-[#1B1C1A] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#122442] hover:bg-[#EEC10E] hover:text-[#122442] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {isSubmitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-xs text-center font-semibold animate-fade-in">
                    Thank you, {formData.name || "Client"}. Our senior interior architect has been assigned to your project and will reach out within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Studio Credentials & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Experience Studio Address Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#CDC5BC]/30 space-y-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Experience Studios
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#122442]">
                Bangalore Studio & Workshop
              </h2>
              <p className="font-sans text-xs text-[#4A463F] leading-relaxed">
                Experience tactile material swatches, test soft-closing Blum tandem drawers, and examine 1:1 joinery assemblies.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F5F3EF]">
                  <MapPin className="w-4 h-4 text-[#EEC10E] shrink-0 mt-0.5" />
                  <div className="font-sans text-xs text-[#1B1C1A]">
                    <strong>Flagship Atelier:</strong> {companyConfig.address.line1}, {companyConfig.address.line2}, {companyConfig.address.city} – {companyConfig.address.pincode}
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#F5F3EF]">
                  <Clock className="w-4 h-4 text-[#EEC10E] shrink-0 mt-0.5" />
                  <div className="font-sans text-xs text-[#1B1C1A]">
                    <strong>Working Hours:</strong> {companyConfig.workingHours.days}, {companyConfig.workingHours.hours}
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getPhoneUrl()}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#122442] text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1f3b6b] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EEC10E]" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={getWhatsAppUrl("Hello Terraform Modular, I want to book an architectural consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-lg bg-[#25D366] text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp BOQ</span>
                </a>
              </div>
            </div>

            {/* Architectural Commitments */}
            <div className="bg-[#122442] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-4 border border-white/10">
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#EEC10E]">
                Directorial Guarantee
              </span>
              <h3 className="font-serif text-2xl text-white">
                Quiet Execution. Full Accountability.
              </h3>
              <div className="space-y-3 font-sans text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EEC10E] shrink-0" />
                  <span>Itemized BOQ with 0% hidden variations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EEC10E] shrink-0" />
                  <span>Strict NDA protection for bespoke architectural plans</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EEC10E] shrink-0" />
                  <span>10-Year guaranteed warranty on all marine carcasses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
