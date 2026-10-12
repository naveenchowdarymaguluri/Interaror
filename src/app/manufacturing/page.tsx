import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Factory,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Ruler,
  Boxes,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { manufacturingSteps, materialSpecifications } from "@/data/manufacturingData";

export const metadata: Metadata = {
  title: "Manufacturing & Craftsmanship | Industrial Modular Joinery",
  description:
    "Discover Office Elevate's precision modular manufacturing: computerized beam saws, PUR zero-joint edge banding, multi-spindle boring, and rigorous 7-point QA audits.",
};

export default function ManufacturingPage() {
  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Manufacturing & Craftsmanship" }]} />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Precision Joinery Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1F3B6B] mt-2 tracking-tight">
              Factory Precision. Zero Compromise.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Why settle for on-site carpentry guesswork? Explore how our computerized beam saws, reactive PUR edge sealing, and multi-spindle boring eliminate human error and protect your cabinetry against Indian monsoons.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Advantage Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#1F3B6B] text-white flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-[#EEC10E]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#1F3B6B] mb-2">
                0.5mm Beam Saw Tolerance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dual-blade scoring prevents laminate chipping, ensuring dead-straight 90-degree cuts across large panels.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#1F3B6B] text-white flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-[#EEC10E]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#1F3B6B] mb-2">
                PUR Zero-Joint Sealing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Polyurethane moisture-curing hot-melt glue bonds edge bands invisibly, repelling boiling water and steam.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#1F3B6B] text-white flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#EEC10E]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#1F3B6B] mb-2">
                Factory Trial Pre-Assembly
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cabinets are dry-fitted and inspected before dispatch to guarantee zero surprises or rework at your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Manufacturing Journey */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              From Raw Board to Finished Room
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
              Our 6-Stage Manufacturing Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every modular component follows an automated, traceable factory pathway.
            </p>
          </div>

          <div className="space-y-12">
            {manufacturingSteps.map((step, idx) => {
              const isReversed = idx % 2 === 1;
              return (
                <div
                  key={step.stepNumber}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm"
                >
                  <div
                    className={`lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#1F3B6B] text-[#EEC10E] font-black text-lg flex items-center justify-center shadow-md">
                      {step.stepNumber}
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-7 space-y-4 text-left ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                        {step.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F3B6B] mt-1">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#EEC10E] flex-shrink-0 mt-0.5" />
                      <span>{step.technicalHighlight}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Raw Material Specification Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Engineered Substrates
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
              Materials & Hardware Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We engineer with genuine, certified raw materials calibrated to withstand real-world wear and moisture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialSpecifications.map((mat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {mat.category}
                  </div>
                  <h3 className="font-extrabold text-base text-[#1F3B6B]">{mat.name}</h3>
                  <div className="text-xs font-semibold text-amber-600 mt-0.5">
                    Grade: {mat.grade}
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    <strong className="text-slate-800">Best Application:</strong> {mat.bestUsedFor}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 space-y-1.5">
                  {mat.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing CTA */}
      <section className="mt-8 py-16 bg-[#1F3B6B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
            Custom Millwork & OEM Requirements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Discuss Your Custom Furniture Requirements
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Are you an architect, commercial developer, or homeowner with bespoke cabinetry drawings? Let&apos;s review your CAD models for direct factory fabrication.
          </p>
          <div className="pt-4">
            <Link
              href="/contact?type=Custom+Manufacturing"
              className="inline-flex items-center gap-2 bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <span>Connect with Our Factory Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
