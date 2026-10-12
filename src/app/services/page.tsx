import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Interior Design Services & Turnkey Solutions",
  description:
    "Explore Office Elevate's 8 comprehensive interior services: Complete Home Interiors, Modular Kitchens, Wardrobes, Office Fit-outs, and Custom Furniture Manufacturing.",
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Comprehensive Offerings
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1F3B6B] mt-2 tracking-tight">
              Interior Design & Precision Modular Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              From bespoke residential homes to dynamic corporate offices and custom millwork fabrication, explore how our end-to-end expertise delivers functional elegance to your space.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 rounded-3xl bg-slate-50/60 border border-slate-200/80 shadow-sm"
              >
                {/* Visual Image */}
                <div
                  className={`lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/11] shadow-md border border-slate-200 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#1F3B6B]/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                    {service.category}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-5 text-left ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-[#EEC10E] uppercase tracking-wider">
                      Service 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F3B6B] mt-1">
                      {service.title}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-2">
                    {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">{f.title}:</strong> {f.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-[#1F3B6B] hover:bg-[#122442] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-sm"
                    >
                      <span>Explore Full Scope & Specs</span>
                      <ArrowRight className="w-4 h-4 text-[#EEC10E]" />
                    </Link>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl border border-slate-200 transition-all"
                    >
                      <span>Request Quote</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-10 py-16 bg-[#1F3B6B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
            Looking for a Tailored Interior Solution?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Schedule an Architectural Consultation with Our Team
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Our interior architects will review your space drawings, walk you through material options, and prepare an itemized Bill of Quantities.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
