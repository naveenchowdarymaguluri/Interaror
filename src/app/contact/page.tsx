import React from "react";
import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Send,
  Building,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { companyConfig, getPhoneUrl, getWhatsAppUrl } from "@/data/companyData";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Terraform Modular Design Studio & Factory",
  description:
    "Connect with Terraform Modular for your residential or commercial interior consultation. Book a studio visit, request a site measurement, or message us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Let&apos;s Connect
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1F3B6B] mt-2 tracking-tight">
              Start Your Interior Journey
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Have questions about an upcoming home possession, modular kitchen renovation, or corporate office fit-out? Connect with our interior design architects today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Cols: Contact Details & Studio Info */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                  Studio & Head Office
                </span>
                <h2 className="text-2xl font-extrabold text-[#1F3B6B] mt-1">
                  Visit Our Experience Studio
                </h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Touch physical material swatches, test Blum and Hettich hardware motions, and discuss 3D floor plan layouts with our designers.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#1F3B6B] border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5 text-[#EEC10E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                      Studio Address
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {companyConfig.address.line1}, {companyConfig.address.line2},{" "}
                      {companyConfig.address.city}, {companyConfig.address.state} –{" "}
                      {companyConfig.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#1F3B6B] border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Phone className="w-5 h-5 text-[#EEC10E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                      Direct Telephone
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      <a
                        href={getPhoneUrl()}
                        className="font-semibold text-slate-900 hover:text-[#1F3B6B] transition-colors"
                      >
                        {companyConfig.displayPhone}
                      </a>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Available Mon–Sat during working hours
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#1F3B6B] border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Mail className="w-5 h-5 text-[#EEC10E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                      Email Consultations
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      <a
                        href={`mailto:${companyConfig.email}`}
                        className="font-semibold text-slate-900 hover:text-[#1F3B6B] transition-colors"
                      >
                        {companyConfig.email}
                      </a>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Send CAD drawings & architectural briefs
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#1F3B6B] border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Clock className="w-5 h-5 text-[#EEC10E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                      Consultation Hours
                    </h4>
                    <p className="text-xs text-slate-700 font-semibold mt-1">
                      {companyConfig.workingHours.days}
                    </p>
                    <p className="text-xs text-slate-500">
                      {companyConfig.workingHours.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Express Box */}
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-xs uppercase tracking-wider text-emerald-950">
                    Instant WhatsApp Enquiry
                  </span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                  Need a quick budget estimate or want to send your floor plan PDF? Our team typically responds within 30 minutes on WhatsApp during business hours.
                </p>
                <a
                  href={getWhatsAppUrl("Hello Terraform Modular, I would like to enquire about an interior project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>
            </div>

            {/* Right 7 Cols: Validated Multi-Field Lead Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl text-left">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E] block">
                    Detailed Consultation
                  </span>
                  <h3 className="text-2xl font-black text-[#1F3B6B] mt-1">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fill out the form below. We treat all space dimensions and specifications confidentially.
                  </p>
                </div>

                <EnquiryForm
                  initialProjectType="Complete Home Interiors"
                  sourceContext="Contact Us Page"
                />
              </div>

              {/* Map Placeholder Card */}
              <div className="mt-8 p-6 rounded-3xl bg-slate-50 border border-slate-200 text-left">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#EEC10E]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Studio Location & Directions
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    [Google Maps Embed Integration Ready]
                  </span>
                </div>
                <div className="aspect-[21/9] w-full rounded-2xl bg-slate-200 flex items-center justify-center text-xs text-slate-500 font-medium border border-slate-300/80">
                  <span>Interactive Map & Parking Navigation (Outer Ring Road Sector 5, Bangalore)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
