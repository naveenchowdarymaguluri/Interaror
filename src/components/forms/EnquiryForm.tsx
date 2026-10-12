"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/companyData";

interface EnquiryFormProps {
  initialProjectType?: string;
  initialRequirements?: string;
  sourceContext?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function EnquiryForm({
  initialProjectType = "Complete Home Interiors",
  initialRequirements = "",
  sourceContext = "General Consultation",
  onSuccess,
  compact = false,
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    projectType: initialProjectType,
    propertyType: "3BHK Apartment",
    budget: "₹10 Lakh - ₹15 Lakh",
    location: "",
    consultationMethod: "Phone Call",
    requirements: initialRequirements,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [leadId, setLeadId] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side quick checks
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    const cleanPhone = formData.mobile.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.location.trim()) {
      setErrorMessage("Please enter your project location or city.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourceContext,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setStatus("success");
      setLeadId(data.leadId || "");
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or WhatsApp us directly."
      );
    }
  };

  if (status === "success") {
    const waUrl = getWhatsAppUrl(
      `Hello Office Elevate, I just submitted an enquiry (#${leadId}) for ${formData.projectType} in ${formData.location}. Would love to discuss next steps!`
    );

    return (
      <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Consultation Request Received!</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Your enquiry has been registered{" "}
          {leadId && <span className="font-mono text-xs bg-emerald-100 px-2 py-0.5 rounded text-emerald-800">ref: {leadId}</span>}.
          A design consultant will review your space requirements and reach out within 24 business hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm hover:shadow"
          >
            <MessageCircle className="w-4 h-4" />
            Connect via WhatsApp Now
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                mobile: "",
                email: "",
                projectType: initialProjectType,
                propertyType: "3BHK Apartment",
                budget: "₹10 Lakh - ₹15 Lakh",
                location: "",
                consultationMethod: "Phone Call",
                requirements: "",
              });
            }}
            className="text-xs text-slate-600 hover:text-slate-900 underline font-medium px-4 py-2"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {errorMessage && (
        <div className="flex items-start gap-2.5 p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-4`}>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-amber-600">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rajesh Sharma"
            className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EEC10E] focus:ring-1 focus:ring-[#EEC10E] transition-all"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Mobile Number <span className="text-amber-600">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-2.5 text-xs text-slate-400 font-medium">+91</span>
            <input
              type="tel"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              placeholder="98765 43210"
              className="w-full pl-11 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EEC10E] focus:ring-1 focus:ring-[#EEC10E] transition-all"
            />
          </div>
        </div>
      </div>

      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-4`}>
        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rajesh@company.com"
            className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EEC10E] focus:ring-1 focus:ring-[#EEC10E] transition-all"
          />
        </div>

        {/* Project Location */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Project Location / City <span className="text-amber-600">*</span>
          </label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Whitefield, Bangalore"
            className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EEC10E] focus:ring-1 focus:ring-[#EEC10E] transition-all"
          />
        </div>
      </div>

      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3"} gap-4`}>
        {/* Project Type */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Project Type <span className="text-amber-600">*</span>
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#EEC10E] focus:ring-1 focus:ring-[#EEC10E] transition-all"
          >
            <option value="Complete Home Interiors">Complete Home Interiors</option>
            <option value="Modular Kitchen Design">Modular Kitchen Design</option>
            <option value="Bedroom & Wardrobes">Bedroom & Wardrobes</option>
            <option value="Living Room Interiors">Living Room Interiors</option>
            <option value="Corporate Office Interiors">Corporate Office Interiors</option>
            <option value="Commercial & Retail Fit-out">Commercial & Retail Fit-out</option>
            <option value="Turnkey Interior Execution">Turnkey Interior Execution</option>
            <option value="Custom Furniture Manufacturing">Custom Furniture Manufacturing</option>
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Property Type
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#EEC10E] focus:ring-1 focus:ring-[#EEC10E] transition-all"
          >
            <option value="1BHK Apartment">1BHK Apartment</option>
            <option value="2BHK Apartment">2BHK Apartment</option>
            <option value="3BHK Apartment">3BHK Apartment</option>
            <option value="4BHK / Villa">4BHK / Luxury Villa</option>
            <option value="Independent House / Rowhouse">Independent House / Rowhouse</option>
            <option value="Commercial Office Space">Commercial Office Space</option>
            <option value="Retail Store / Showroom">Retail Store / Showroom</option>
            <option value="Architectural / OEM Contract">Architectural / OEM Contract</option>
          </select>
        </div>

        {/* Budget Tier */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Approx. Budget <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#EEC10E] focus:ring-1 focus:ring-[#EEC10E] transition-all"
          >
            <option value="₹3 Lakh - ₹6 Lakh">₹3 Lakh – ₹6 Lakh</option>
            <option value="₹6 Lakh - ₹10 Lakh">₹6 Lakh – ₹10 Lakh</option>
            <option value="₹10 Lakh - ₹15 Lakh">₹10 Lakh – ₹15 Lakh</option>
            <option value="₹15 Lakh - ₹25 Lakh">₹15 Lakh – ₹25 Lakh</option>
            <option value="₹25 Lakh - ₹50 Lakh+">₹25 Lakh – ₹50 Lakh+</option>
            <option value="Discuss During Consultation">Discuss During Consultation</option>
          </select>
        </div>
      </div>

      {/* Preferred Consultation Method */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Preferred Consultation Method
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { id: "Phone Call", label: "Phone Call" },
            { id: "WhatsApp Discussion", label: "WhatsApp Chat" },
            { id: "Experience Studio Visit", label: "Studio Visit" },
            { id: "On-Site Visit", label: "On-Site Visit" },
          ].map((method) => (
            <label
              key={method.id}
              className={`flex items-center justify-center p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all text-center ${
                formData.consultationMethod === method.id
                  ? "bg-[#1F3B6B] text-white border-[#1F3B6B] shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="consultationMethod"
                value={method.id}
                checked={formData.consultationMethod === method.id}
                onChange={handleChange}
                className="sr-only"
              />
              {method.label}
            </label>
          ))}
        </div>
      </div>

      {/* Requirements Details */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Project Requirements & Notes <span className="text-slate-400 font-normal lowercase">(optional)</span>
        </label>
        <textarea
          name="requirements"
          rows={compact ? 2 : 3}
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Tell us about your room requirements, preferred design style (minimalist, modern, warm wood), or target possession date..."
          className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EEC10E] focus:ring-1 focus:ring-[#EEC10E] transition-all"
        />
      </div>

      <p className="text-[11px] text-slate-500 leading-normal">
        By submitting, you consent to Office Elevate contacting you regarding your interior design and modular furniture consultation. We never sell your personal contact information.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] font-bold py-3.5 px-6 rounded-xl text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Consultation Request...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Book Free Design Consultation</span>
          </>
        )}
      </button>
    </form>
  );
}
