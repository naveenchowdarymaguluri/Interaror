"use client";

import React, { useState, useMemo } from "react";
import { Calculator, ArrowRight, Check, Sparkles, MessageCircle, RefreshCw } from "lucide-react";
import { getWhatsAppUrl } from "@/data/companyData";
import EnquiryForm from "@/components/forms/EnquiryForm";

interface PropertyPreset {
  id: string;
  label: string;
  defaultArea: number;
  roomsCount: string;
}

const PROPERTY_PRESETS: PropertyPreset[] = [
  { id: "1bhk", label: "1 BHK", defaultArea: 550, roomsCount: "1 Bed, 1 Bath, Kitchen, Living" },
  { id: "2bhk", label: "2 BHK", defaultArea: 950, roomsCount: "2 Beds, 2 Baths, Kitchen, Living" },
  { id: "3bhk", label: "3 BHK", defaultArea: 1450, roomsCount: "3 Beds, 3 Baths, Kitchen, Living, Dining" },
  { id: "4bhk", label: "4 BHK / Villa", defaultArea: 2400, roomsCount: "4 Beds, 4 Baths, Kitchen, Living, Dining, Foyer" },
  { id: "office", label: "Corporate Office", defaultArea: 1800, roomsCount: "Open Desking, Cabins, Conference Room, Pantry" },
];

interface FinishTier {
  id: string;
  name: string;
  description: string;
  materials: string;
  multiplier: number; // Multiplier against base benchmark
}

const FINISH_TIERS: FinishTier[] = [
  {
    id: "essential",
    name: "Essential Collection",
    description: "Reliable commercial-grade modular joinery with durable finishes for rental homes and smart budgets.",
    materials: "Calibrated Commercial Plywood, 0.8mm Matt Laminate, Hettich standard soft-close hardware",
    multiplier: 1.0,
  },
  {
    id: "premium",
    name: "Premium Collection (Most Popular)",
    description: "High-performance moisture-resistant substrates with luxury finishes and seamless German fittings.",
    materials: "710-grade BWP Marine Plywood base, HDHMR, Anti-Fingerprint Matt & Acrylic shutters, Blum / Hafele dampers",
    multiplier: 1.35,
  },
  {
    id: "luxury",
    name: "Luxury Architectural",
    description: "Bespoke designer millwork, tinted glass profiles, imported veneers, PU satin lacquers, and quartz surfaces.",
    materials: "Calibrated Marine Ply, Natural Smoked Veneer, Fluted Panelling, Italian sliding systems, Smart LED profiles",
    multiplier: 1.85,
  },
];

interface ScopeItem {
  id: string;
  name: string;
  baseCost: number; // Base cost benchmark in INR
  includedInDefault: boolean;
}

const SCOPE_ITEMS: ScopeItem[] = [
  { id: "modular_kitchen", name: "Modular Kitchen (BWP Carcass + Tandem Drawers)", baseCost: 185000, includedInDefault: true },
  { id: "master_wardrobe", name: "Master Bedroom Floor-to-Ceiling Wardrobe", baseCost: 125000, includedInDefault: true },
  { id: "second_wardrobe", name: "Second Bedroom Sliding / Swing Wardrobe", baseCost: 95000, includedInDefault: true },
  { id: "living_tv_unit", name: "Living Room Feature Wall & TV Console", baseCost: 75000, includedInDefault: true },
  { id: "foyer_shoe", name: "Foyer Console & Ventilated Shoe Cabinet", baseCost: 35000, includedInDefault: false },
  { id: "crockery_dining", name: "Dining Crockery & Glass Display Unit", baseCost: 55000, includedInDefault: false },
  { id: "false_ceiling", name: "Architectural Gypsum False Ceiling & Cove Lighting", baseCost: 80000, includedInDefault: true },
  { id: "painting_finishes", name: "Premium Royal Emulsion Wall Painting", baseCost: 65000, includedInDefault: false },
];

export default function BudgetEstimator() {
  const [selectedProperty, setSelectedProperty] = useState<string>("3bhk");
  const [area, setArea] = useState<number>(1450);
  const [selectedTier, setSelectedTier] = useState<string>("premium");
  const [selectedScope, setSelectedScope] = useState<string[]>([
    "modular_kitchen",
    "master_wardrobe",
    "second_wardrobe",
    "living_tv_unit",
    "false_ceiling",
  ]);
  const [showQuoteModal, setShowQuoteModal] = useState<boolean>(false);

  const handlePropertyChange = (presetId: string) => {
    setSelectedProperty(presetId);
    const preset = PROPERTY_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      setArea(preset.defaultArea);
    }
  };

  const toggleScope = (scopeId: string) => {
    setSelectedScope((prev) =>
      prev.includes(scopeId) ? prev.filter((id) => id !== scopeId) : [...prev, scopeId]
    );
  };

  // Calculation logic based on configured benchmarks
  const estimate = useMemo(() => {
    const tier = FINISH_TIERS.find((t) => t.id === selectedTier) || FINISH_TIERS[1];
    
    // Sum base costs of selected scope
    const totalScopeBase = SCOPE_ITEMS.filter((item) =>
      selectedScope.includes(item.id)
    ).reduce((sum, item) => sum + item.baseCost, 0);

    // Apply tier multiplier
    const adjustedCost = totalScopeBase * tier.multiplier;

    // Apply scale factor based on area ratio compared to benchmark
    const areaScale = Math.max(0.75, Math.min(1.7, area / 1200));
    const median = adjustedCost * areaScale;

    const lowerBound = Math.round((median * 0.9) / 10000) * 10000;
    const upperBound = Math.round((median * 1.15) / 10000) * 10000;

    return {
      lower: lowerBound,
      upper: upperBound,
      tierName: tier.name,
    };
  }, [selectedTier, selectedScope, area]);

  const formatLakhs = (amount: number) => {
    const inLakhs = amount / 100000;
    return `₹${inLakhs.toFixed(2)} Lakh`;
  };

  const presetObject = PROPERTY_PRESETS.find((p) => p.id === selectedProperty);

  const waSummary = `Hello Office Elevate, I configured an indicative estimate for my ${presetObject?.label} (~${area} sq.ft) with ${estimate.tierName}. Indicative range: ${formatLakhs(estimate.lower)} to ${formatLakhs(estimate.upper)}. Can we schedule an exact site measurement and quotation?`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Top Banner */}
      <div className="bg-[#1F3B6B] text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEC10E]/20 text-[#EEC10E] text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Configurable Cost Guide</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Indicative Interior Budget Estimator
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Select your floor plan, scope of rooms, and finish preferences to view a transparent indicative investment range.
            </p>
          </div>
          <div className="text-left sm:text-right bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
            <span className="block text-xs uppercase tracking-wider text-slate-300 font-medium">
              Indicative Range
            </span>
            <span className="text-2xl sm:text-3xl font-black text-[#EEC10E]">
              {formatLakhs(estimate.lower)} – {formatLakhs(estimate.upper)}
            </span>
            <span className="block text-[11px] text-slate-400 mt-0.5">
              Subject to verified site measurements
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-10 space-y-10">
        {/* Step 1: Property Type */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
            Step 1: Select Property Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {PROPERTY_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePropertyChange(preset.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedProperty === preset.id
                    ? "bg-[#1F3B6B] text-white border-[#1F3B6B] shadow-md ring-2 ring-[#EEC10E]"
                    : "bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="font-bold text-base">{preset.label}</div>
                <div
                  className={`text-[11px] mt-1 line-clamp-1 ${
                    selectedProperty === preset.id ? "text-slate-200" : "text-slate-500"
                  }`}
                >
                  ~{preset.defaultArea} sq.ft
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Carpet Area */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Step 2: Approximate Carpet Area (Sq.Ft)
            </label>
            <span className="text-sm font-extrabold text-[#1F3B6B] bg-slate-100 px-3 py-1 rounded-lg">
              {area} Sq.Ft
            </span>
          </div>
          <input
            type="range"
            min={400}
            max={4500}
            step={50}
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1F3B6B]"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
            <span>400 sq.ft (Studio)</span>
            <span>2,000 sq.ft (Large Flat)</span>
            <span>4,500 sq.ft (Villa / Penthouse)</span>
          </div>
        </div>

        {/* Step 3: Finish & Material Grade */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
            Step 3: Choose Finish & Material Specification
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FINISH_TIERS.map((tier) => (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all relative ${
                  selectedTier === tier.id
                    ? "bg-amber-50/40 border-[#EEC10E] ring-2 ring-[#EEC10E] shadow-sm"
                    : "bg-slate-50/70 border-slate-200 hover:border-slate-300"
                }`}
              >
                {selectedTier === tier.id && (
                  <div className="absolute top-4 right-4 w-5 h-5 bg-[#EEC10E] text-[#1F3B6B] rounded-full flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}
                <h4 className="font-extrabold text-slate-900 text-base mb-1">{tier.name}</h4>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">{tier.description}</p>
                <div className="text-[11px] font-medium text-slate-500 pt-2 border-t border-slate-200/70">
                  <span className="font-semibold text-slate-700">Materials:</span> {tier.materials}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 4: Room Scope Selection */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Step 4: Select Scope of Works ({selectedScope.length} selected)
            </label>
            <button
              type="button"
              onClick={() => setSelectedScope(SCOPE_ITEMS.map((s) => s.id))}
              className="text-xs text-[#1F3B6B] hover:underline font-semibold"
            >
              Select All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SCOPE_ITEMS.map((item) => {
              const isSelected = selectedScope.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleScope(item.id)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    isSelected
                      ? "bg-white border-[#1F3B6B] shadow-sm text-slate-900"
                      : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[#1F3B6B] text-white"
                          : "border border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">{item.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Bar & Disclaimer */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                Calculated Range:
              </span>
              <span className="text-xl font-black text-[#1F3B6B]">
                {formatLakhs(estimate.lower)} – {formatLakhs(estimate.upper)}
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-xl">
              *<strong>Important Disclaimer:</strong> This estimator reflects indicative budget models based on standard modular dimensions and configured finish benchmarks. Final quote is calculated upon precise laser measurements, chosen internal hardware, and civil scope.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href={getWhatsAppUrl(waSummary)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Estimate</span>
            </a>
            <button
              type="button"
              onClick={() => setShowQuoteModal(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <span>Lock Detailed Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Consultation Submission */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              type="button"
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 text-lg font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Personalized Consultation
              </span>
              <h3 className="text-2xl font-black text-[#1F3B6B] mt-1">
                Receive an Itemized Quotation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Based on your estimated scope ({presetObject?.label}, {area} sq.ft, {estimate.tierName}).
              </p>
            </div>

            <EnquiryForm
              initialProjectType="Complete Home Interiors"
              initialRequirements={`Estimator Summary: ${presetObject?.label} (~${area} sq.ft) with ${estimate.tierName}. Indicative Range: ${formatLakhs(estimate.lower)} - ${formatLakhs(estimate.upper)}.`}
              sourceContext="Budget Estimator Modal"
              onSuccess={() => {
                setTimeout(() => setShowQuoteModal(false), 3000);
              }}
              compact={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
