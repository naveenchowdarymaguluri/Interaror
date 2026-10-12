import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Compass,
  Award,
  ShieldCheck,
  CheckCircle,
  Users,
  Factory,
  ArrowRight,
  Target,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { companyConfig } from "@/data/companyData";

export const metadata: Metadata = {
  title: "About Us | Architectural Precision & Modular Excellence",
  description:
    "Learn about Office Elevate, our architectural philosophy, factory-engineered modular joinery, and commitment to reliable, enduring interior craftsmanship.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Our Story & Philosophy
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1F3B6B] mt-2 tracking-tight">
              Bridging Architectural Design & Precision Manufacturing
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Office Elevate was founded on a simple conviction: modern spaces deserve both thoughtful architectural vision and industrial modular execution that lasts for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Origins */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F3B6B]">
                Who We Are
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Design-First Thinking. Factory-Engineered Durability.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Traditional interior fit-outs in India have long suffered from unpredictable manual carpentry: delayed timelines, toxic fumes on-site, uneven hand cuts, and moisture-prone edge sealing that fails within a few monsoons.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>Office Elevate</strong>, we eliminated that friction. We integrated architectural space planning directly with automated modular machinery. Our designs are developed in 3D with millimeter-accurate CAD models and fabricated in our controlled manufacturing facility using computerized beam saws and reactive Polyurethane (PUR) edge banding.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The result is clean, elegant living and workspace environments delivered on predictable timelines with uncompromising material standards.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-[#1F3B6B]">100%</div>
                  <div className="text-xs text-slate-600 mt-1 font-semibold">
                    Calibrated Substrates Only
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-[#1F3B6B]">0.5mm</div>
                  <div className="text-xs text-slate-600 mt-1 font-semibold">
                    Machine Edge Accuracy
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Office Elevate Interior Design Studio Work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
              <div className="w-12 h-12 rounded-xl bg-[#1F3B6B] text-white flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#EEC10E]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1F3B6B] mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To transform homes, corporate offices, and commercial spaces through thoughtful space planning, honest material integrity, and industrial modular craftsmanship—eliminating guesswork and delivering enduring value.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
              <div className="w-12 h-12 rounded-xl bg-[#1F3B6B] text-white flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-[#EEC10E]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1F3B6B] mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the most reliable, design-forward interior and modular manufacturing partner for discerning homeowners, corporate businesses, and architectural practitioners across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
              The Values That Drive Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Architectural Intent",
                desc: "We balance form and ergonomic utility so every inch of your floor plan serves a distinct functional purpose.",
              },
              {
                title: "Material Honesty",
                desc: "We never substitute inferior particle boards for promised BWP Marine Plywood. What is specified in your BOQ is what is built.",
              },
              {
                title: "Manufacturing Precision",
                desc: "Industrial machinery eliminates human cutting errors, giving you sharp 90-degree lines and seamless edge joints.",
              },
              {
                title: "Single Accountability",
                desc: "One contract, one project manager, and transparent milestone reporting from conceptual 3D approval to key handover.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-left hover:border-[#EEC10E] transition-all"
              >
                <div className="text-sm font-bold text-[#EEC10E] mb-2">0{idx + 1}.</div>
                <h3 className="font-bold text-base text-slate-900 mb-2">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Team Callout */}
      <section className="py-16 bg-[#1F3B6B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
            Meet the Minds Behind Office Elevate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Architects, Joinery Engineers & Project Directors
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our multidisciplinary team combines spatial designers trained at top design institutes, factory machine operators with decades of millwork expertise, and site engineers who ensure on-time execution.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all"
            >
              <span>Connect with Our Design Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
