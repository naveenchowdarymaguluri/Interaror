"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  Eye,
  Plus,
  Sliders,
  Check,
  Layers,
  Compass,
  Maximize2,
  FileText,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { productsData } from "@/data/productsData";
import { companyConfig, getWhatsAppUrl, getPhoneUrl } from "@/data/companyData";

interface CoreSystem {
  id: string;
  category: "culinary" | "wardrobe" | "living" | "executive";
  romanNumeral: string;
  badge: string;
  name: string;
  startingPrice: string;
  description: string;
  image: string;
  materiality: string;
  highlightKey: string;
  highlightVal: string;
  swatches: { name: string; color: string; border?: string }[];
  specs: string[];
}

const CORE_SYSTEMS: CoreSystem[] = [
  {
    id: "system-culinary",
    category: "culinary",
    romanNumeral: "System I",
    badge: "Patented Reveal",
    name: "Monolith Kitchens",
    startingPrice: "₹3,85,000",
    description:
      "Concealed induction surfaces beneath bookmatched stone plinths, dual pocket-door pantries that vanish into fluted millwork, and custom-milled bronze cutlery matrices.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-xzq3qN1bmPzVfKx3MgNZ3hWK3xixFlCgoZfermwW73-AOdGxEdgCVDVENo6uN1NrRuj1bIiR52h3dz9FoOVVBmHmaFEZgzZ2mDdsqDtceSmX3D5K_qAwJzH8zWOn9EH7ES3UZ2qzsiStMqmf8G8a2B7z_F18EzPQiwoVEBfn7rT7Vt5Ud-v6f8uJvE0HKsjPZ9dAxwYc1brpCNrPDYl0eTrJgpjwADnxaS9S_uZq",
    materiality: "Bookmatched Quartzite • Smoked Walnut",
    highlightKey: "Hardware",
    highlightVal: "Blum Aventos HK-S & Servo-Drive",
    swatches: [
      { name: "Roman Travertine", color: "#E8E2D7" },
      { name: "Smoked Alpine Walnut", color: "#2B2118" },
      { name: "Calacatta Gold", color: "#F0EFEA" },
      { name: "Brushed Brass", color: "#C5A880" },
    ],
    specs: ["0.2mm Flush Joinery", "Boiling-Waterproof BWP Core", "Zero-Fingerprint Matt"],
  },
  {
    id: "system-wardrobe",
    category: "wardrobe",
    romanNumeral: "System II",
    badge: "Integrated Vaults",
    name: "Architectural Wardrobes",
    startingPrice: "₹2,75,000",
    description:
      "Full-height fluted glass doors framed in champagne anodized aluminum, perimeter 2700K zero-shadow illumination, and hand-stitched Tuscan saddle leather vaults for watches and jewelry.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBurdIuGArWcCwX8GFN4ud9C9YyLmeP0QaVcpFJd9UAQaBugWtNTJtouw7XtaV1Tzi1oGBZ1nTcJopDweVGi3HUmmS0fL-sw3WrSHarFy0CMJE-l_gI0bvkAfw8_J8xhSP3zs7sEh09Zkq5qxpNmLntnmVLB4EdGLudJmA1dyc9TznfTYnflyE4Ouk6bT273D3VAiMKYvmeGOhoqsXX1_AIQ-2NbM9qHRF8MRyB1yGa",
    materiality: "Saddle Leather • Champagne Anodized Alum",
    highlightKey: "Lighting",
    highlightVal: "Perimeter 2700K Micro-Diffused",
    swatches: [
      { name: "Saddle Tan Leather", color: "#8E5B36" },
      { name: "Smoked Grey Glass", color: "#3A3B3C" },
      { name: "Champagne Aluminum", color: "#D4AF37" },
      { name: "Belgian Ecru Linen", color: "#DDD8CD" },
    ],
    specs: ["Soft Hydraulic Dampening", "Acoustic Backing Panels", "Biometric Vault Drawers"],
  },
  {
    id: "system-living",
    category: "living",
    romanNumeral: "System III",
    badge: "Acoustic NRC 0.85",
    name: "Living Systems & Media",
    startingPrice: "₹2,10,000",
    description:
      "Acoustic ribbed walnut slats concealing speaker bays, cantilevered monolithic travertine credenzas, and cable-free flush integration for gallery-standard television displays.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxKlcVUg_MsoPsehoQ_91DAk_tB4wWgzaCuIwZCnoOixszrXg6ZyGSQMpC1l9rxG0cXjKl5n3mlJN_4xGu68EBp8Yegm5Z6FDPFi7zWTdcclzslE76nyYYJtp_YGOqZJ0PsfffkMonUXbstb8vdze83e73g66TZB5ukGEYPGebGwOh7aRWM705kBuJ7n4ZeY3Bskoq0xSCMvPDfTpT1DX73GpjDXrH0Rnqzlt1JHvc",
    materiality: "Ribbed Timber • Honed Roman Travertine",
    highlightKey: "Acoustics",
    highlightVal: "Italian NRC 0.85 Sound Baffles",
    swatches: [
      { name: "Rift European Walnut", color: "#3C2E24" },
      { name: "Navona Travertine", color: "#EFECE6" },
      { name: "Nero Marquina", color: "#1A1A1A" },
      { name: "Matte Anthracite", color: "#2B2D2F" },
    ],
    specs: ["Sub-Millimeter Plinth", "Motorized Cable Riser", "Veneer Bookmatching"],
  },
  {
    id: "system-executive",
    category: "executive",
    romanNumeral: "System IV",
    badge: "Directorial Suite",
    name: "Executive & Studio Suites",
    startingPrice: "₹3,20,000",
    description:
      "Full-height architectural partitions with concealed espresso wet bars, wireless inductive leather desk surfaces, and acoustically dampened double-glazed sliding panels.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAioGxhnRUxI-HR990xiskuwUvbGg0aHjtZrJ8649qLMVeCk-LA1BIR4M-Oyi8MsPVka24PT620URbxciF2rRLXwc1sGhpglA-LT9tf_KRPPz37XMIEjcb8gs9RoO-vR0ES7ep0L2ngBmGOD2tlh85rYRHWaWpY_SbOtxdCBbtvkNVObNA7WkbYwZdkyESmK1WnbnxYmod5g00at7IVYlMxHJUFTf5RtvI3CF6DlWwR",
    materiality: "Inductive Saddle Hide • Bronze Roll-top",
    highlightKey: "Functionality",
    highlightVal: "Concealed Bar & Magnetic Rails",
    swatches: [
      { name: "Mocha Hide", color: "#4E3629" },
      { name: "Smoked Oak", color: "#2E2822" },
      { name: "Brushed Bronze", color: "#7B6244" },
      { name: "Honed Limestone", color: "#E5E1D8" },
    ],
    specs: ["Fast Inductive Charging", "Concealed Wet Bar", "Biometric Locking Drawer"],
  },
];

const PROVENANCE_MATERIALS = [
  {
    title: "Navona Travertine",
    origin: "Tivoli, Italy • Cross-Cut Honed",
    description: "Delicate linear veining with organic micro-cavities sealed with subtle mineral composite.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5z55pnsSZ-pSYPJY0y6Z2cdV7OfkdVCr7tXlpzh4IunnQlsNKzNuPwFRaoJahz16MhHxC7JoyvctabI2JsT_a1z2_ppJTtK7Zl6IWxzzV1ToUsqglY-TX1lsizlqDTzICRjvrlXOr7pA11NWbWN_PeXElg8JoWjUX-MMRGz_EnUXjI-Onja6r6WFdVE16WAAGS6DCLUzZ9PqReh5N6H7CEeduCmDCJjLgLiZ8vt92",
  },
  {
    title: "Smoked Alpine Walnut",
    origin: "Valais, Switzerland • Deep Oiled",
    description: "Rift-sawn slow-grown timber treated with organic cold-pressed plant oils for low satin depth.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSKpvEnue8ckTJDA2AfkGGkdww1ziBM3FbyY23D5Tqt6lk9H8cWBb83tUWgGSS9xN2hz1ZyzG0Nr6QquZaZqVK7NKTehGOXnxS9NopjiVdxvcRHKnSIudcj75ySqYDdRVFC3dTeop9pJ80dVb6qMXiP8pdTcjlF63NMxGHx4LqLBMb6Q1XFsksbdgWjcHl8bLd9bkZ1CnmULIiJPQ9wDmcB1HnRoT6yfy4NzwjmTV4",
  },
  {
    title: "Champagne Brass",
    origin: "Brescia, Italy • Satin Anodized",
    description: "Directional hairline brushed finish with microscopic anti-oxidation layer that prevents patina.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB630H70qpro00fbK7PKxJdAA-3NIp526bEvdGocnZ5EVYoklm1zbM84-n0eJ2SIvseu_rb-LBzZvHHL7OU_R8U4QPoKyvZFltLfZhtKHBPfdDsDWDy1PETxcQ1lNth90Z3L5SyAk7kfj9mC9l54H5MeUk4gyDg_n8SxQpu9_EHCOoGzh1Y5TaAzDzApwhCSCjXXEVzcuOn9Yp-1jtHRbewOw-UUahKHb6cAKPEH7eC",
  },
  {
    title: "Belgian Raw Linen",
    origin: "Flanders • Acoustic Backed",
    description: "Heavy ecru architectural wall upholstery fabric offering natural tactile texture and sound isolation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGOdLxq0moPf5SKcFSoqi5SyqGausox2toFT63cNSuMyJX5UXXzCdhg_XJ76I1C-hdDat3mPESF5BtKlvd39nuSPggPZlLCW8wrxW1hlGfHGb7i75Ijf6_veF1BkBydRC08QDf-6oCx1S4Q6rCxOqLIqOb3myr3nOJReQyzmDM4KPxp2UFxmRlI5wrmU92JEXqq5G0yMHWI50YflPicFgN8q3oMf_RXJM_z7wGzMSi",
  },
];

export default function AtelierHomeShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeCaseView, setActiveCaseView] = useState<"completed" | "blueprint">("completed");
  const [selectedSwatches, setSelectedSwatches] = useState<Record<string, number>>({
    "system-culinary": 0,
    "system-wardrobe": 0,
    "system-living": 0,
    "system-executive": 0,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    scope: "full",
  });

  const { openConsultation, addToCart } = useStore();

  const filteredSystems =
    selectedFilter === "all"
      ? CORE_SYSTEMS
      : CORE_SYSTEMS.filter((s) => s.category === selectedFilter);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleAddSystemToDossier = (system: CoreSystem) => {
    const matchedProduct = productsData.find((p) => p.id === system.id) || {
      id: system.id,
      slug: system.id,
      categorySlug: system.category,
      categoryName: "Architectural Systems",
      title: `Terraform Modular ${system.name} (${system.romanNumeral})`,
      tagline: system.description,
      shortDescription: system.description,
      fullDescription: system.description,
      primaryImage: system.image,
      galleryImages: [system.image],
      materialsAvailable: [system.materiality],
      finishesAvailable: system.swatches.map((s) => s.name),
      features: system.specs,
      dimensionsGuide: "Custom Millimeter Specification",
      idealApplication: "Luxury Residential Commission",
      priceFormatted: system.startingPrice,
      leadTime: "8.5 Weeks",
    };

    addToCart(
      matchedProduct,
      system.swatches[selectedSwatches[system.id] || 0].name,
      system.materiality,
      "Custom Millimeter Specification"
    );
  };

  return (
    <div className="flex flex-col w-full bg-[#FBF9F5] text-[#1B1C1A]">
      {/* =========================================================================
          SECTION 1: IMMERSIVE CINEMATIC HERO
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#122442] text-white">
        {/* Background Editorial Architectural Photography */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBk07LThFZ022ubgayGFf5H3sDBcP3upGzS6XUSCN5EXvYJxqzH_78rnvF99IzHvAlY7EiOL4AaBCq5x3-woQQ3IDOOpoy4FQT83CnhIO8YTeFjCqcHHsbMPZYtODhGCMsGimhGy0JmV0Ae8AlMFTG0xSFEV02AYAFdgUH6n_DBFctyIxCQVS_18QX3ZcEdsirEqdKcb27pTHzrmjyh1DwtQei7Wbo1xWwDQ5D-i6XS')`,
          }}
        />

        {/* Architectural Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#122442] via-[#122442]/70 to-[#122442]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#122442]/90 via-transparent to-[#122442]/50" />

        {/* Blueprint fine lines overlay */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-36 sm:pt-44 pb-16 flex flex-col justify-end min-h-[820px] lg:min-h-[890px]">
          <div className="max-w-3xl flex flex-col gap-6">
            {/* Edition Micro-Badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#EEC10E] animate-pulse" />
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7E1DC]">
                TERRAFORM MODULAR • EDITION MMXXV
              </span>
            </div>

            {/* Editorial Serif Display Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.02em] text-white">
              Quiet Luxury.<br />
              <span className="italic font-light text-[#EEC10E]">Precision</span> Engineering.
            </h1>

            {/* Architectural Subtext */}
            <p className="font-sans text-base sm:text-lg text-slate-200 max-w-2xl font-light leading-relaxed">
              Bespoke modular interior architecture crafted with European machinery, Italian concealed hardware, and hand-selected natural stones. Engineered to redefine permanent residential sanctuaries.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#systems"
                className="px-7 py-3.5 bg-[#EEC10E] hover:bg-[#d9ae0b] text-[#122442] font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-md shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Core Systems
              </a>
              <button
                type="button"
                onClick={() => openConsultation()}
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-md border border-white/20 shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <span>Book Private Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#EEC10E]" />
              </button>
            </div>
          </div>

          {/* Architectural Dimension Marker Footer in Hero */}
          <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-sans text-xs uppercase tracking-[0.16em] text-slate-300">
            <div className="flex flex-col gap-1">
              <span className="text-[#EEC10E] font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                0.2mm
              </span>
              <span className="text-slate-400 text-[11px]">Joint Tolerance Standard</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#EEC10E] font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                100%
              </span>
              <span className="text-slate-400 text-[11px]">Bespoke Monoliths</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#EEC10E] font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                Swiss & Blum
              </span>
              <span className="text-slate-400 text-[11px]">CAD Micro-Engineered</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#EEC10E] font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                10 Yrs
              </span>
              <span className="text-slate-400 text-[11px]">Structural Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ARCHITECTURAL CREDENTIALS PROPOSITION BAR
          ========================================================================= */}
      <section className="w-full bg-[#F5F3EF] border-y border-[#CDC5BC]/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F0EEEA] transition-colors">
              <ShieldCheck className="w-7 h-7 text-[#EEC10E] shrink-0 pt-0.5" />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm text-[#1B1C1A]">
                  10-Year Warranty
                </span>
                <span className="font-sans text-xs text-[#4A463F] mt-0.5">
                  Guaranteed structural integrity across all modular joints and substrates.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F0EEEA] transition-colors">
              <Sparkles className="w-7 h-7 text-[#EEC10E] shrink-0 pt-0.5" />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm text-[#1B1C1A]">
                  Blum & Hettich Precision
                </span>
                <span className="font-sans text-xs text-[#4A463F] mt-0.5">
                  Concealed hydraulic runners, soft-close dampening, and titanium hardware.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F0EEEA] transition-colors">
              <Compass className="w-7 h-7 text-[#EEC10E] shrink-0 pt-0.5" />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm text-[#1B1C1A]">
                  Sub-Millimeter CAD
                </span>
                <span className="font-sans text-xs text-[#4A463F] mt-0.5">
                  5-axis CNC laser-milled architectural components pre-assembled in factory.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F0EEEA] transition-colors">
              <Layers className="w-7 h-7 text-[#EEC10E] shrink-0 pt-0.5" />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm text-[#1B1C1A]">
                  Turnkey White-Glove
                </span>
                <span className="font-sans text-xs text-[#4A463F] mt-0.5">
                  Dedicated master joiners handling delivery, site coordination, and fit-out.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTERACTIVE CORE ARCHITECTURAL SYSTEMS GRID
          ========================================================================= */}
      <section className="w-full py-20 bg-[#FBF9F5]" id="systems">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header & Interactive Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl flex flex-col gap-2">
              <span className="font-sans text-xs uppercase tracking-[0.18em] font-bold text-[#EEC10E]">
                Modular Architecture
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#122442]">
                Core Architectural Systems
              </h2>
              <p className="font-sans text-sm text-[#4A463F] leading-relaxed">
                Four disciplined spatial frameworks conceived to unify storage, materiality, and pure geometry within high-calibre residences.
              </p>
            </div>

            {/* Filter Pills for Interactive Micro-view */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Systems" },
                { id: "culinary", label: "Culinary" },
                { id: "wardrobe", label: "Dressing" },
                { id: "living", label: "Living" },
                { id: "executive", label: "Studio" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-[0.14em] font-bold transition-all duration-300 shadow-sm ${
                    selectedFilter === tab.id
                      ? "bg-[#122442] text-white shadow-md scale-105"
                      : "bg-[#F0EEEA] text-[#4A463F] hover:text-[#122442] hover:bg-[#EAE8E4]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bento-style Architectural Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {filteredSystems.map((system, idx) => {
              // 7 cols for 1st & 4th, 5 cols for 2nd & 3rd
              const colSpan = idx % 3 === 0 ? "lg:col-span-7" : "lg:col-span-5";
              const currentSwatchIndex = selectedSwatches[system.id] || 0;

              return (
                <div
                  key={system.id}
                  className={`${colSpan} bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(31,29,26,0.05)] border border-[#CDC5BC]/30 hover:border-[#EEC10E]/40 hover:shadow-2xl transition-all duration-500 flex flex-col group`}
                >
                  {/* Imagery with Micro-Badge Overlay */}
                  <div className="relative w-full h-72 sm:h-84 md:h-96 overflow-hidden bg-stone-100">
                    <Image
                      src={system.image}
                      alt={system.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md font-sans text-[10px] font-bold text-[#122442] shadow-sm uppercase tracking-widest">
                        {system.romanNumeral}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#122442]/90 backdrop-blur-md font-sans text-[10px] font-bold text-[#EEC10E] shadow-sm uppercase tracking-widest border border-white/10">
                        {system.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-sans">
                      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EEC10E]" />
                        <span>{system.specs[0]}</span>
                      </div>
                      <span className="bg-[#EEC10E] text-[#122442] font-black text-xs px-2.5 py-1 rounded-md">
                        {system.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Specifications */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow gap-5">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-2xl sm:text-[26px] font-medium text-[#122442]">
                          {system.name}
                        </h3>
                      </div>
                      <p className="font-sans text-sm text-[#4A463F] leading-relaxed">
                        {system.description}
                      </p>
                    </div>

                    {/* Interactive Finish Swatch Previewer */}
                    <div className="pt-2">
                      <span className="font-sans text-[10px] uppercase tracking-wider text-[#7C766E] font-bold block mb-2">
                        Finish Palette: {system.swatches[currentSwatchIndex].name}
                      </span>
                      <div className="flex items-center gap-2">
                        {system.swatches.map((swatch, sIdx) => (
                          <button
                            key={swatch.name}
                            type="button"
                            onClick={() =>
                              setSelectedSwatches((prev) => ({ ...prev, [system.id]: sIdx }))
                            }
                            className={`relative w-7 h-7 rounded-full shadow-inner transition-transform ${
                              currentSwatchIndex === sIdx
                                ? "ring-2 ring-[#EEC10E] ring-offset-2 scale-110"
                                : "hover:scale-105"
                            }`}
                            style={{ backgroundColor: swatch.color }}
                            title={swatch.name}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Specification Matrix Bar */}
                    <div className="pt-4 border-t border-[#CDC5BC]/30 flex flex-wrap items-center justify-between gap-4 bg-[#F5F3EF] p-4 rounded-lg">
                      <div className="flex flex-col">
                        <span className="font-sans text-[10px] uppercase tracking-widest text-[#7C766E] font-semibold">
                          Materiality Core
                        </span>
                        <span className="font-sans text-xs font-bold text-[#1B1C1A]">
                          {system.materiality}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleAddSystemToDossier(system)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#122442] hover:bg-[#1f3b6b] text-white font-sans text-xs uppercase tracking-wider font-bold rounded shadow-sm transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5 text-[#EEC10E]" />
                          <span>Add to Quote</span>
                        </button>
                        <Link
                          href="/products"
                          className="inline-flex items-center gap-1 font-sans text-xs uppercase tracking-wider text-[#122442] hover:text-[#EEC10E] font-bold p-2 transition-colors"
                        >
                          <span>Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FEATURED PROJECT SHOWCASE: THE HIGHLINE PENTHOUSE
          ========================================================================= */}
      <section className="w-full py-20 bg-[#F5F3EF] border-y border-[#CDC5BC]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-1 mb-8">
            <span className="font-sans text-xs uppercase tracking-[0.18em] font-bold text-[#EEC10E]">
              Case in Focus • Private Residence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#122442]">
              The Highline Penthouse, Tribeca
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Before / After CAD Toggle */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl overflow-hidden shadow-2xl bg-stone-900 border border-[#CDC5BC]/40">
                {/* Completed Finish View */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                    activeCaseView === "completed" ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_EI0nVbNZEaCZnQeEcAdaPwHFLY3WtPqTjoqI0NiaQgwGeGpDrHr_exl0_ieszpDwkEEvYCMOhuswxJ6SkLsJHA2CXVrl5WUqYP2IjkWsooTt1lLr_U6vo2Gt3Mk2w6J1w4vnmNZ29zTgaMGlrSWvpC3hEIJNm4ODFYXOHVXGvkads5-uVPx1EaJlv3iwG1ZgqoYXvkoGzYJltWtMDS29Hnjz5oiDChvPw6KKIGmx')`,
                  }}
                >
                  <span className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded bg-white/95 backdrop-blur-md font-sans text-xs uppercase tracking-widest text-[#122442] font-bold shadow-md">
                    Turnkey Handover Finish
                  </span>
                </div>

                {/* CAD Blueprint Wireframe View */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                    activeCaseView === "blueprint" ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsKGV-KrfdJm414D_a6K90L6NQkS1dLTb6_M8rhTsNSt2k8OA59tjbj6oXbJVXUywC4X3icUxRS92riys8wwUWGAVs7E43xzHOWTIlRP2IJExoTcpxh8r7szq4Erk9e6gxcCmflMFUFUMvjM1oqzE47b5CWCbbtT5WDJPaHQ_AwMPObuDargho6tP2I9WD2R0bS1w2Pc3cJXtQCBY_Y4_YUBKdSOLwQ-g6Xbw9CGWU')`,
                  }}
                >
                  <span className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded bg-[#122442]/95 backdrop-blur-md font-sans text-xs uppercase tracking-widest text-[#EEC10E] font-bold shadow-md border border-white/10">
                    Sub-Millimeter 3D CAD Wireframe
                  </span>
                </div>
              </div>

              {/* View Toggle Bar */}
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-[#CDC5BC]/30">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveCaseView("completed")}
                    className={`px-4 py-2 rounded font-sans text-xs uppercase tracking-wider font-bold transition-all ${
                      activeCaseView === "completed"
                        ? "bg-[#122442] text-white shadow-sm"
                        : "bg-transparent text-[#4A463F] hover:text-[#122442]"
                    }`}
                  >
                    Completed Finish
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCaseView("blueprint")}
                    className={`px-4 py-2 rounded font-sans text-xs uppercase tracking-wider font-bold transition-all ${
                      activeCaseView === "blueprint"
                        ? "bg-[#122442] text-white shadow-sm"
                        : "bg-transparent text-[#4A463F] hover:text-[#122442]"
                    }`}
                  >
                    CAD Blueprint
                  </button>
                </div>
                <span className="hidden sm:inline font-sans text-xs text-[#7C766E]">
                  Private Collector • 4,200 sq.ft Monolith
                </span>
              </div>
            </div>

            {/* Metrics Matrix & Palette Anatomy */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#CDC5BC]/30 flex flex-col gap-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#CDC5BC]/20">
                  <span className="font-serif text-2xl font-medium text-[#122442]">
                    Spatial Transformation
                  </span>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#EEC10E] bg-[#122442] px-2.5 py-1 rounded">
                    Tribeca, NY
                  </span>
                </div>
                <p className="font-sans text-sm text-[#4A463F] leading-relaxed">
                  Complete gut renovation converting an unpartitioned warehouse volume into a serene 3-suite sanctuary using Terraform Modular&apos;s continuous wall module system. All services and ductwork were enclosed inside flush walnut panels.
                </p>

                {/* Metrics Matrix */}
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="p-4 bg-[#F5F3EF] rounded-lg flex flex-col">
                    <span className="font-sans text-[10px] uppercase font-bold text-[#7C766E] tracking-wider">
                      Fabrication Lead
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#122442] mt-1">
                      8.5 Wks
                    </span>
                    <span className="font-sans text-xs text-[#4A463F]">Factory CNC Milling</span>
                  </div>
                  <div className="p-4 bg-[#F5F3EF] rounded-lg flex flex-col">
                    <span className="font-sans text-[10px] uppercase font-bold text-[#7C766E] tracking-wider">
                      Site Install
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#122442] mt-1">
                      11 Days
                    </span>
                    <span className="font-sans text-xs text-[#4A463F]">Zero-Dust Assembly</span>
                  </div>
                </div>

                {/* Material Provenance Swatches */}
                <div className="flex flex-col gap-2 pt-1">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#7C766E] font-bold">
                    Curated Material Palette
                  </span>
                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#EAE8E4] border border-[#CDC5BC] shadow-inner" />
                      <span className="font-sans text-xs text-[#1B1C1A]">Navona Travertine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#2C2824] shadow-inner" />
                      <span className="font-sans text-xs text-[#1B1C1A]">Smoked Walnut</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#C5A880] shadow-inner" />
                      <span className="font-sans text-xs text-[#1B1C1A]">Brushed Brass</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/projects"
                  className="mt-2 inline-flex items-center justify-center w-full px-5 py-3.5 bg-[#122442] hover:bg-[#EEC10E] hover:text-[#122442] text-white font-sans text-xs uppercase tracking-widest font-bold rounded transition-colors duration-300 shadow-md gap-2"
                >
                  <span>Explore Full Project Lookbook</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: INTERACTIVE MATERIAL TACTILITY STRIP
          ========================================================================= */}
      <section className="w-full py-20 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-xs uppercase tracking-[0.18em] font-bold text-[#EEC10E]">
                Material Provenance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#122442]">
                Tactile Integrity
              </h2>
            </div>
            <p className="font-sans text-sm text-[#4A463F] max-w-md leading-relaxed">
              Sourced from third-generation family quarries in Tuscany, sustainable Swiss timber cooperatives, and bespoke anodizing foundries in Milan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROVENANCE_MATERIALS.map((mat) => (
              <div
                key={mat.title}
                className="flex flex-col bg-white p-5 rounded-xl shadow-[0_2px_16px_rgba(31,29,26,0.04)] border border-[#CDC5BC]/30 hover:shadow-xl hover:border-[#EEC10E]/40 transition-all duration-300 group"
              >
                <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 bg-stone-100">
                  <Image
                    src={mat.image}
                    alt={mat.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <span className="font-serif text-xl font-medium text-[#122442]">
                  {mat.title}
                </span>
                <span className="font-sans text-xs font-semibold text-[#EEC10E] mt-1">
                  {mat.origin}
                </span>
                <p className="font-sans text-xs text-[#4A463F] mt-2 leading-relaxed">
                  {mat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: DIRECTORIAL CONSULTATION INQUIRY
          ========================================================================= */}
      <section
        className="w-full py-20 bg-[#122442] text-white relative overflow-hidden"
        id="consultation"
      >
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#EEC10E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#EEC10E] animate-pulse" />
                <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#E7E1DC]">
                  Private Appointments
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl leading-tight text-white">
                Craft Your Sanctuary.<br />
                <span className="text-[#EEC10E] italic font-light">Meet with Our Master Architects.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Whether embarking on a full residence commission or specifying single-suite modular insertions, our directorship will review your architectural floor plans and curate a bespoke specification dossier.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2 text-slate-300 font-sans text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EEC10E]" />
                  <span>Complimentary CAD Feasibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EEC10E]" />
                  <span>Material Sample Box Dispatched</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EEC10E]" />
                  <span>Strict NDA Protected</span>
                </div>
              </div>
            </div>

            {/* Right Consultation Form Card */}
            <div className="lg:col-span-5 bg-white text-[#1B1C1A] p-6 sm:p-8 rounded-xl shadow-2xl border border-white/20">
              <form onSubmit={handleConsultationSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 pb-2 border-b border-stone-100">
                  <span className="font-serif text-2xl font-bold text-[#122442]">
                    Directorial Inquiry
                  </span>
                  <span className="font-sans text-xs text-[#4A463F]">
                    Response guaranteed within 24 business hours.
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#7C766E]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-[#F5F3EF] rounded-md border-none font-sans text-xs text-[#1B1C1A] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#7C766E]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="direct@residence.com"
                      className="w-full px-4 py-3 bg-[#F5F3EF] rounded-md border-none font-sans text-xs text-[#1B1C1A] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#7C766E]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#F5F3EF] rounded-md border-none font-sans text-xs text-[#1B1C1A] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#7C766E]">
                    Spatial Scope
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F3EF] rounded-md border-none font-sans text-xs text-[#1B1C1A] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
                  >
                    <option value="full">Full Penthouse / Entire Residence</option>
                    <option value="kitchen">Monolith Kitchen Suite</option>
                    <option value="wardrobe">Architectural Dressing Room</option>
                    <option value="living">Living & Acoustic Media Wall</option>
                    <option value="studio">Executive Study & Studio Suite</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-4 bg-[#122442] text-white hover:bg-[#EEC10E] hover:text-[#122442] font-sans text-xs uppercase tracking-widest font-bold rounded-md transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Initiate Architectural Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {formSubmitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-xs font-semibold text-center animate-fade-in">
                    Thank you, {formData.name || "Client"}. An Atelier master architect has received your dossier and will reach out shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
