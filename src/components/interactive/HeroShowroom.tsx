"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Calculator,
  Plus,
  X,
  ShoppingBag,
  Eye,
  Sliders,
  Award,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { productsData } from "@/data/productsData";
import { companyConfig, getWhatsAppUrl } from "@/data/companyData";

interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  productId: string;
  label: string;
  featureSnippet: string;
  startingPrice: string;
}

interface RoomScene {
  id: string;
  name: string;
  tagline: string;
  image: string;
  hotspots: Hotspot[];
}

const ROOM_SCENES: RoomScene[] = [
  {
    id: "kitchen",
    name: "Gourmet Island Kitchen",
    tagline: "Sintered stone waterfall island with concealed pocket-door pantry",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=85",
    hotspots: [
      {
        id: "k-island",
        x: 48,
        y: 64,
        productId: "contemporary-island-kitchen",
        label: "Monolith Waterfall Island",
        featureSnippet: "Sintered Stone Counter • Blum InnoTech Drawers",
        startingPrice: "₹3,85,000",
      },
      {
        id: "k-overhead",
        x: 74,
        y: 32,
        productId: "l-shaped-modular-kitchen",
        label: "Anti-Fingerprint Overhead Cabinets",
        featureSnippet: "Aventos HK-S Bi-Fold • 3000K Architectural LED",
        startingPrice: "₹2,45,000",
      },
      {
        id: "k-pantry",
        x: 18,
        y: 42,
        productId: "parallel-galley-kitchen",
        label: "Concealed Tall Pantry Tall-Boy",
        featureSnippet: "6-Tier Chrome Baskets • BWP Marine Plywood",
        startingPrice: "₹2,15,000",
      },
    ],
  },
  {
    id: "living",
    name: "Architectural TV & Living Wall",
    tagline: "Fluted acoustic panelling with cantilevered marble media console",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    hotspots: [
      {
        id: "l-tv",
        x: 52,
        y: 45,
        productId: "architectural-fluted-tv-wall",
        label: "Fluted Media Wall System",
        featureSnippet: "Concealed Cable Ducts • Ambient Glow Dimmer",
        startingPrice: "₹1,65,000",
      },
      {
        id: "l-buffet",
        x: 82,
        y: 65,
        productId: "backlit-glass-crockery-credenza",
        label: "Aura Fluted Glass Buffet",
        featureSnippet: "Champagne Gold Frame • Wine Storage",
        startingPrice: "₹1,45,000",
      },
    ],
  },
  {
    id: "bedroom",
    name: "Master Suite & Glass Wardrobe",
    tagline: "Floor-to-ceiling bronze tinted sliding glass with walk-in dressing suite",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85",
    hotspots: [
      {
        id: "b-wardrobe",
        x: 28,
        y: 42,
        productId: "sliding-glass-wardrobe",
        label: "Tinted Glass Sliding Wardrobe",
        featureSnippet: "Black Anodized Frame • Sensor LED Strips",
        startingPrice: "₹2,85,000",
      },
      {
        id: "b-bed",
        x: 68,
        y: 68,
        productId: "japandi-platform-storage-bed",
        label: "Japandi Hydraulic Platform Bed",
        featureSnippet: "German Gas Lift Pistons • Floating Pedestals",
        startingPrice: "₹1,25,000",
      },
    ],
  },
  {
    id: "office",
    name: "Executive Workplace",
    tagline: "Linear desking clusters and veneer executive director suites",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85",
    hotspots: [
      {
        id: "o-cluster",
        x: 45,
        y: 62,
        productId: "linear-collaborative-workstation",
        label: "Apex 4-Person Desking Cluster",
        featureSnippet: "CRCA Steel Frame • Flip-Up Power Boxes",
        startingPrice: "₹1,10,000",
      },
      {
        id: "o-study",
        x: 82,
        y: 45,
        productId: "floating-architectural-study",
        label: "Atelier Floating Wall Study",
        featureSnippet: "Heavy-Duty Wall Mount • Acoustic Tackable Board",
        startingPrice: "₹95,000",
      },
    ],
  },
];

export default function HeroShowroom() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const { openQuickView, addToCart, openConsultation } = useStore();

  const scene = ROOM_SCENES[activeSceneIndex];

  const getProductForHotspot = (productId: string) => {
    return productsData.find((p) => p.id === productId);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] pt-4 pb-16 lg:pb-24 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Bar - Inspired by navbar.gallery */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 shadow-xs text-xs font-semibold text-stone-800">
            <span className="flex h-2 w-2 rounded-full bg-[#EEC10E] animate-pulse" />
            <span className="text-stone-500 font-medium">New 2026 Architectural Catalog</span>
            <span className="text-stone-300">•</span>
            <span className="text-[#1F3B6B] font-bold">10-Year Marine Carcass Guarantee</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
          </div>
        </div>

        {/* Hero Editorial Header - Inspired by supahero.io & styles.refero.design */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-stone-900 tracking-tight leading-[1.08]">
            Architectural Spaces. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#1F3B6B] via-[#2d5699] to-[#EEC10E] bg-clip-text text-transparent">
              Mastercrafted Modular Millwork.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed">
            From precision German-machined kitchens and floor-to-ceiling wardrobes to corporate headquarters — factory-engineered with 0.5mm precision and zero-joint PUR edge sealing.
          </p>

          {/* Dual Main CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#1F3B6B] hover:bg-[#15294b] text-white px-7 py-4 rounded-2xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <ShoppingBag className="w-4 h-4 text-[#EEC10E]" />
              <span>Explore 2026 Collection</span>
            </Link>

            <Link
              href="/estimator"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-900 px-7 py-4 rounded-2xl text-sm font-bold border border-stone-300 shadow-xs hover:border-stone-400 transition-all duration-200"
            >
              <Calculator className="w-4 h-4 text-[#EEC10E]" />
              <span>Instant Cost Estimator (60s)</span>
            </Link>

            <button
              onClick={() => openConsultation()}
              className="inline-flex items-center justify-center gap-2 bg-[#EEC10E] hover:bg-[#dfb40a] text-stone-950 px-6 py-4 rounded-2xl text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free 3D Consult</span>
            </button>
          </div>
        </div>

        {/* Interactive Room Showroom Canvas */}
        <div className="relative rounded-3xl overflow-hidden border border-stone-300/80 shadow-2xl bg-stone-900 group">
          {/* Room Scene Navigation Tabs */}
          <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            <div className="flex items-center gap-2 bg-stone-950/75 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 pointer-events-auto">
              {ROOM_SCENES.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveSceneIndex(index);
                    setActiveHotspot(null);
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeSceneIndex === index
                      ? "bg-[#EEC10E] text-stone-950 shadow-sm"
                      : "text-stone-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Instruction pill */}
            <div className="hidden md:flex items-center gap-2 bg-stone-950/70 backdrop-blur-md text-stone-300 px-3.5 py-2 rounded-xl border border-white/10 text-xs font-medium pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-[#EEC10E] animate-ping" />
              <span>Click glowing pins on furniture to inspect</span>
            </div>
          </div>

          {/* Scene Background Image */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
            <Image
              src={scene.image}
              alt={scene.name}
              fill
              priority
              className="object-cover transition-opacity duration-700"
            />
            {/* Subtle cinematic gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/40 pointer-events-none" />

            {/* Pulsing Hotspots Pins */}
            {scene.hotspots.map((spot) => {
              const isSelected = activeHotspot?.id === spot.id;
              return (
                <div
                  key={spot.id}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setActiveHotspot(isSelected ? null : spot)}
                    className="group/btn relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#EEC10E] text-stone-950 shadow-xl focus:outline-none transition-transform duration-300 hover:scale-125"
                    aria-label={`Inspect ${spot.label}`}
                  >
                    <span className="absolute inset-0 rounded-full bg-[#EEC10E] animate-ping opacity-60" />
                    {isSelected ? (
                      <X className="w-5 h-5 relative z-10" />
                    ) : (
                      <Plus className="w-5 h-5 relative z-10 font-bold transition-transform group-hover/btn:rotate-90" />
                    )}
                  </button>

                  {/* Hotspot Floating Preview Card */}
                  {isSelected && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-14 z-30 w-72 sm:w-80 rounded-2xl bg-white/95 backdrop-blur-xl p-4 shadow-2xl border border-stone-200 animate-fade-in-up text-left">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#EEC10E] block">
                            Architectural Unit
                          </span>
                          <h4 className="text-sm font-extrabold text-stone-900 leading-snug">
                            {spot.label}
                          </h4>
                        </div>
                        <span className="text-xs font-black text-[#1F3B6B] shrink-0">
                          {spot.startingPrice}
                        </span>
                      </div>

                      <p className="text-[11px] text-stone-600 mt-1">
                        {spot.featureSnippet}
                      </p>

                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-stone-100">
                        {getProductForHotspot(spot.productId) && (
                          <button
                            onClick={() => {
                              const p = getProductForHotspot(spot.productId);
                              if (p) openQuickView(p);
                            }}
                            className="flex-1 flex items-center justify-center gap-1.5 bg-[#1F3B6B] hover:bg-[#15294b] text-white py-2 px-3 rounded-xl text-[11px] font-bold transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5 text-[#EEC10E]" />
                            <span>Quick View & Specs</span>
                          </button>
                        )}

                        <button
                          onClick={() => {
                            const p = getProductForHotspot(spot.productId);
                            if (p) addToCart(p);
                          }}
                          className="flex items-center justify-center p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
                          aria-label="Add to estimate"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Bar inside Showroom Canvas */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#EEC10E] block">
                Featured Space
              </span>
              <h3 className="text-base sm:text-lg font-bold">{scene.name}</h3>
              <p className="text-xs text-stone-400 mt-0.5">{scene.tagline}</p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/10 transition-colors"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3 h-3 text-[#EEC10E]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Real Estate Developers & Builders Trust Ticker - Inspired by supahero.io */}
        <div className="mt-12 pt-8 border-t border-stone-200/80">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-stone-600 mb-6">
            Trusted by Homeowners Across Leading Architectural Communities
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="text-sm sm:text-base font-extrabold tracking-widest text-stone-800">
              PRESTIGE
            </span>
            <span className="text-sm sm:text-base font-extrabold tracking-widest text-stone-800">
              BRIGADE
            </span>
            <span className="text-sm sm:text-base font-extrabold tracking-widest text-stone-800">
              SOBHA
            </span>
            <span className="text-sm sm:text-base font-extrabold tracking-widest text-stone-800">
              LODHA
            </span>
            <span className="text-sm sm:text-base font-extrabold tracking-widest text-stone-800">
              GODREJ
            </span>
            <span className="text-sm sm:text-base font-extrabold tracking-widest text-stone-800">
              TOTAL ENVIRONMENT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
