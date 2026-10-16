import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import BudgetEstimator from "@/components/estimator/BudgetEstimator";
import { ShieldCheck, HelpCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Budget Estimator | Calculate Cost for 1BHK, 2BHK, 3BHK, Villa & Office",
  description:
    "Calculate an indicative interior design and modular furniture budget based on your carpet area, room scope, and finish tier with Terraform Modular's transparent estimator.",
};

export default function EstimatorPage() {
  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Budget Estimator" }]} />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Transparent Cost Planning
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1F3B6B] mt-2 tracking-tight">
              Indicative Interior Budget Estimator
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Plan your interior investment with confidence. Select your floor plan, customize room requirements, and see indicative budgets across Essential, Premium, and Luxury finish tiers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Estimator Section */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BudgetEstimator />

          {/* Educational Insights on Pricing */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-[#EEC10E] mb-2">
                Factor 01
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">
                Core Substrate Grade
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Using 100% 710-grade BWP Marine Plywood for wet zones (kitchen sink, vanity) ensures lifetime water resistance compared to standard commercial ply.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-[#EEC10E] mb-2">
                Factor 02
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">
                Shutter Finish Textures
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Anti-fingerprint super matt laminates offer unbeatable value, while virgin European acrylics, PU satin paints, and natural veneers require extra polishing phases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-[#EEC10E] mb-2">
                Factor 03
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">
                Internal Hardware Motions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tandem drawer boxes with integrated Blum or Hettich soft-close dampers and corner swing-out carousels elevate daily ergonomic comfort.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
