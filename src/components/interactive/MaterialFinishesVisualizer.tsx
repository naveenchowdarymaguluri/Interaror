"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Layers, Flame, Droplets, SunMedium } from "lucide-react";

interface MaterialItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  keyBenefits: string[];
  metrics: {
    scratchResistance: string;
    moistureTolerance: string;
    maintenance: string;
    recommendedZones: string;
  };
}

const MATERIALS: MaterialItem[] = [
  {
    id: "anti-fingerprint-matt",
    name: "Super-Matt Anti-Fingerprint Acrylic",
    category: "Kitchen & Wardrobe Shutters",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    description:
      "Nano-coated matte surface that diffuses light completely, eliminating greasy fingerprints and offering an ultra-soft, warm architectural touch.",
    keyBenefits: [
      "Thermal self-healing micro-scratches",
      "Zero light glare under recessed LED lights",
      "100% moisture-cured PUR edge band matching",
    ],
    metrics: {
      scratchResistance: "Class 4A Commercial",
      moistureTolerance: "100% Boiling Water Resistant",
      maintenance: "Gentle Microfiber Wipe",
      recommendedZones: "High-Traffic Kitchens, Handleless Drawers",
    },
  },
  {
    id: "white-oak-veneer",
    name: "Natural European White Oak Veneer",
    category: "Luxury Panelling & Islands",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    description:
      "Quarter-cut selected natural timber veneers bonded onto calibrated marine substrates and sealed with ultra-matt Italian polyurethane varnish.",
    keyBenefits: [
      "Authentic organic grain continuity",
      "Non-yellowing UV-cured Italian PU lacquer",
      "Bookmatched seamless wall returns",
    ],
    metrics: {
      scratchResistance: "Class 3B Residential",
      moistureTolerance: "Polyurethane Sealed Surface",
      maintenance: "Dry Dusting & Wood Conditioner",
      recommendedZones: "Living Media Walls, Island Returns, Executive Suites",
    },
  },
  {
    id: "calacatta-quartz",
    name: "Calacatta Gold Sintered Quartz 15mm",
    category: "Countertops & Waterfalls",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
    description:
      "Engineered stone composed of 93% pure crushed quartz and polymer resins. Non-porous, stain-proof, and impervious to turmeric, wine, or lemon acid.",
    keyBenefits: [
      "Zero porosity — zero stain penetration",
      "Seamless 45-degree mitered waterfall edge",
      "Food-grade hygienic certified surface",
    ],
    metrics: {
      scratchResistance: "Mohs Hardness 7 (Knife Proof)",
      moistureTolerance: "Zero Absorption (< 0.03%)",
      maintenance: "Mild Soap & Water",
      recommendedZones: "Kitchen Islands, Wet Zones, Breakfast Counters",
    },
  },
  {
    id: "bronze-fluted-glass",
    name: "Bronze Toughened Glass & Fluted Aluminium",
    category: "Wardrobes & Partitions",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80",
    description:
      "8mm toughened reflective bronze safety glass set in anodized matte black aluminum extrusions with integrated sensor-driven LED upright channels.",
    keyBenefits: [
      "Semi-transparent warm reflection adds spatial volume",
      "Shatter-proof safety toughened glass standard",
      "Italian top-hung suspension with zero floor track",
    ],
    metrics: {
      scratchResistance: "Toughened Mineral Glass",
      moistureTolerance: "100% Humidity Impervious",
      maintenance: "Glass Cleaner & Soft Cloth",
      recommendedZones: "Master Wardrobes, Walk-in Dressing Suites",
    },
  },
];

export default function MaterialFinishesVisualizer() {
  const [selectedId, setSelectedId] = useState<string>("anti-fingerprint-matt");

  const activeMaterial =
    MATERIALS.find((m) => m.id === selectedId) || MATERIALS[0];

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Decorative Subtle Glowing Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#EEC10E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1F3B6B]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEC10E]/15 text-[#EEC10E] text-xs font-bold uppercase tracking-wider mb-2 font-mono border border-[#EEC10E]/30">
            <Layers className="w-3.5 h-3.5" />
            <span>Tactile Material Library</span>
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Curated Architectural Finishes
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Click through our signature certified substrates and surfaces calibrated for high durability and timeless aesthetic depth.
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {MATERIALS.map((mat) => {
            const isSelected = mat.id === selectedId;
            return (
              <button
                key={mat.id}
                type="button"
                onClick={() => setSelectedId(mat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap hardware-accelerated ${
                  isSelected
                    ? "bg-[#EEC10E] text-[#1F3B6B] shadow-gold-sm font-extrabold scale-100"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
              >
                {mat.name.split(" ")[0]} {mat.name.split(" ")[1]}
              </button>
            );
          })}
        </div>

        {/* Detailed Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          {/* Left 6 Cols: High Res Image with Luxury Frame */}
          <div className="lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <Image
              src={activeMaterial.image}
              alt={activeMaterial.name}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EEC10E] block">
                {activeMaterial.category}
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">
                {activeMaterial.name}
              </h4>
            </div>
          </div>

          {/* Right 6 Cols: Architectural Specs & Benefits */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                [Material Profile]
              </span>
              <h4 className="text-2xl font-black text-white mt-1">
                {activeMaterial.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {activeMaterial.description}
              </p>
            </div>

            {/* Key Benefits List */}
            <div className="space-y-2 pt-1">
              {activeMaterial.keyBenefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#EEC10E] flex-shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Technical Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="text-slate-400 block text-[11px]">Scratch Test</span>
                <span className="font-bold text-white font-mono mt-0.5 block">
                  {activeMaterial.metrics.scratchResistance}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="text-slate-400 block text-[11px]">Water Reaction</span>
                <span className="font-bold text-white font-mono mt-0.5 block">
                  {activeMaterial.metrics.moistureTolerance}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="text-slate-400 block text-[11px]">Recommended Zones</span>
                <span className="font-bold text-white text-[11px] mt-0.5 block">
                  {activeMaterial.metrics.recommendedZones}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="text-slate-400 block text-[11px]">Care Standard</span>
                <span className="font-bold text-white font-mono mt-0.5 block">
                  {activeMaterial.metrics.maintenance}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
