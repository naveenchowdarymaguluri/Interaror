"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ZoomIn,
  ZoomOut,
  Layers,
  Sparkles,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  Ruler,
  Cpu,
  ShieldCheck,
  Eye,
  Info,
  CheckCircle2,
  ArrowRight,
  Compass,
} from "lucide-react";

export interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  spec: string;
  category: "Architectural" | "Joinery" | "Hardware" | "Material";
}

export interface DepthLayer {
  level: number;
  depthMeters: string;
  zoomFactor: string;
  stageName: string;
  stageTagline: string;
  title: string;
  description: string;
  image: string;
  xrayImage?: string;
  metrics: { label: string; value: string }[];
  hotspots: Hotspot[];
}

export interface SpaceTypology {
  id: string;
  name: string;
  category: string;
  location: string;
  layers: DepthLayer[];
}

const SPACES: SpaceTypology[] = [
  {
    id: "lumina-kitchen",
    name: "The Lumina Island Kitchen",
    category: "Culinary Joinery",
    location: "Indiranagar Penthouse",
    layers: [
      {
        level: 0,
        depthMeters: "0.0m",
        zoomFactor: "1.0x Macro",
        stageName: "Panoramic Space",
        stageTagline: "Macro Volume & Daylighting",
        title: "Architectural Spatial Composition",
        description:
          "Wide-angle volume planning with natural north-east glazing, calibrated 3,050mm ceiling clearance, and a central quartz waterfall island anchoring the culinary zone.",
        image:
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Ceiling Clearance", value: "3,050mm (10ft)" },
          { label: "Island Dimensions", value: "3,000 × 1,100mm" },
          { label: "Daylight Aspect", value: "North-East Facing" },
        ],
        hotspots: [
          {
            id: "k-0-1",
            x: 48,
            y: 62,
            title: "Waterfall Island Architecture",
            spec: "Calacatta Gold 15mm sintered quartz with bookmatched mitered drops",
            category: "Architectural",
          },
          {
            id: "k-0-2",
            x: 78,
            y: 38,
            title: "Concealed Appliance Wall",
            spec: "Floor-to-ceiling cabinetry flush with civil wall reveal",
            category: "Joinery",
          },
        ],
      },
      {
        level: 1,
        depthMeters: "1.8m",
        zoomFactor: "2.5x Joinery",
        stageName: "Joinery Framework",
        stageTagline: "Spatial Flow & Module Carcass",
        title: "Modular Joinery & Ergonomic Circulation",
        description:
          "Step into the joinery layout: Strict 450mm–900mm structural carcass grids create an ergonomic golden triangle between prep, induction cooktop, and pantry tall units.",
        image:
          "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Counter Ergonomics", value: "860mm Working Ht" },
          { label: "Aisle Flow Clearance", value: "1,200mm Main Zone" },
          { label: "Plinth Architecture", value: "100mm Recessed PVC" },
        ],
        hotspots: [
          {
            id: "k-1-1",
            x: 35,
            y: 52,
            title: "Prep & Cooking Triangle",
            spec: "Continuous 900mm clearance between undermount sink and induction hub",
            category: "Joinery",
          },
          {
            id: "k-1-2",
            x: 75,
            y: 45,
            title: "Pantry Tall Unit Column",
            spec: "120kg load-bearing steel internal pullout frame with chrome baskets",
            category: "Hardware",
          },
        ],
      },
      {
        level: 2,
        depthMeters: "3.6m",
        zoomFactor: "5.0x Internal",
        stageName: "Cabinet Internals",
        stageTagline: "Deep Inside the Carcass",
        title: "Concealed Hardware & Precision Drawers",
        description:
          "Deep inside the cabinetry: German soft-close Blum Legrabox runner assemblies, velvet cutlery organizers, and internal shadow lighting embedded into 18mm BWP Marine Carcasses.",
        image:
          "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Runner Mechanics", value: "Blum Legrabox 40kg" },
          { label: "Cycle Endurance", value: "100,000 Operations" },
          { label: "Internal Illumination", value: "2700K Recessed LED" },
        ],
        hotspots: [
          {
            id: "k-2-1",
            x: 42,
            y: 58,
            title: "Blum Legrabox Soft-Close",
            spec: "Integrated BLUMOTION fluid dampers for effortless, silent glide",
            category: "Hardware",
          },
          {
            id: "k-2-2",
            x: 68,
            y: 40,
            title: "Marine Sink Matrix Carcass",
            spec: "100% IS:710 Marine BWP Plywood with SS 304 waterproof floor liner",
            category: "Material",
          },
        ],
      },
      {
        level: 3,
        depthMeters: "5.4m",
        zoomFactor: "10.0x Micro",
        stageName: "Micro Joinery Core",
        stageTagline: "0.5mm Zero-Joint & Moisture Sealing",
        title: "0.5mm Zero-Joint PUR Sealing & Substrate",
        description:
          "At microscopic tolerances: Moisture-curing Polyurethane (PUR) hot-melt adhesive creates an impermeable zero-joint bond that repels steam and boiling water permanently.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Joint Seam Gap", value: "< 0.5mm Invisible" },
          { label: "Adhesive Chemistry", value: "Moisture-Cured PUR" },
          { label: "Core Substrate", value: "IS:710 Marine 18mm" },
        ],
        hotspots: [
          {
            id: "k-3-1",
            x: 50,
            y: 48,
            title: "PUR Zero-Joint Polymer Bond",
            spec: "Cross-linked molecular bond that never softens or swells under heat or water",
            category: "Material",
          },
          {
            id: "k-3-2",
            x: 72,
            y: 60,
            title: "Calibrated Multi-Ply Marine Core",
            spec: "Selected hardwood veneers pressed under 180 tonnes with zero void spaces",
            category: "Material",
          },
        ],
      },
    ],
  },
  {
    id: "serenity-wardrobe",
    name: "The Serenity Fluted Suite",
    category: "Master Bedroom Storage",
    location: "Koramangala Residence",
    layers: [
      {
        level: 0,
        depthMeters: "0.0m",
        zoomFactor: "1.0x Macro",
        stageName: "Master Suite Ambience",
        stageTagline: "Floor-to-Ceiling Verticality",
        title: "Architectural Wardrobe Elevation",
        description:
          "Floor-to-ceiling Bronze tinted toughened glass sliders framed by anodized matte black aluminum, reflecting daylight and creating visual spatial depth.",
        image:
          "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Ceiling Span", value: "3,000mm Vertical" },
          { label: "Profile Finish", value: "Matt Anodized Black" },
          { label: "Door Infill", value: "Bronze Toughened Glass" },
        ],
        hotspots: [
          {
            id: "w-0-1",
            x: 45,
            y: 50,
            title: "Bronze Reflexive Facade",
            spec: "8mm toughened safety glass with anti-glare reflection control",
            category: "Architectural",
          },
        ],
      },
      {
        level: 1,
        depthMeters: "1.8m",
        zoomFactor: "2.5x Joinery",
        stageName: "Sliding Track & Framing",
        stageTagline: "Italian Top-Hung Suspension",
        title: "Zero Floor Track Engineering",
        description:
          "Heavy-duty Italian top-hung sliding gear completely eliminates dirt-collecting floor grooves, creating clean seamless flooring across the entire bedroom.",
        image:
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Floor Track", value: "0mm (Zero Floor Groove)" },
          { label: "Door Weight Capacity", value: "80kg per panel" },
          { label: "Sliding Mechanism", value: "Italian Heavy-Duty" },
        ],
        hotspots: [
          {
            id: "w-1-1",
            x: 52,
            y: 35,
            title: "Top-Hung Ceiling Track",
            spec: "Recessed extrusion anchored directly into structural ceiling slab",
            category: "Hardware",
          },
        ],
      },
      {
        level: 2,
        depthMeters: "3.6m",
        zoomFactor: "5.0x Internal",
        stageName: "Luxury Internals",
        stageTagline: "Velvet Organizers & Hydraulic Lifts",
        title: "Illuminated Compartments & Organizers",
        description:
          "Deep inside the wardrobe: Vertical integrated warm LED profiles illuminate velvet-lined jewelry trays, pull-out trouser racks, and hydraulic wardrobe lifts.",
        image:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Upper Access", value: "Hydraulic Wardrobe Lift" },
          { label: "Drawer Lining", value: "Italian Micro-Suede" },
          { label: "LED Sensors", value: "PIR Proximity Driven" },
        ],
        hotspots: [
          {
            id: "w-2-1",
            x: 45,
            y: 62,
            title: "Velvet Jewelry Showcase",
            spec: "Multi-compartment organizer with soft-closing push-to-open slides",
            category: "Joinery",
          },
          {
            id: "w-2-2",
            x: 65,
            y: 28,
            title: "Hydraulic Wardrobe Lift",
            spec: "Pneumatic assist arm bringing upper tier hangers down to chest height",
            category: "Hardware",
          },
        ],
      },
      {
        level: 3,
        depthMeters: "5.4m",
        zoomFactor: "10.0x Micro",
        stageName: "Core Stability",
        stageTagline: "High-Density Moisture Resistance",
        title: "HDHMR Core & Acoustic Fluting",
        description:
          "Engineered with ultra-dense HDHMR boards that maintain 100% dimensional stability across extreme monsoon humidity without bowing, sagging, or warping.",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Board Density", value: "> 850 kg/m³ HDHMR" },
          { label: "Moisture Swelling", value: "< 4% after 24hr soak" },
          { label: "Panel Straightness", value: "Guaranteed Zero Bow" },
        ],
        hotspots: [
          {
            id: "w-3-1",
            x: 55,
            y: 50,
            title: "High-Density Fibrous Core",
            spec: "Dense matrix with high screw-holding torque (1500N), resisting sag under load",
            category: "Material",
          },
        ],
      },
    ],
  },
  {
    id: "horizon-office",
    name: "Horizon Tech Workplace",
    category: "Corporate Interiors",
    location: "Outer Ring Road Tech Park",
    layers: [
      {
        level: 0,
        depthMeters: "0.0m",
        zoomFactor: "1.0x Macro",
        stageName: "Collaborative Floor",
        stageTagline: "Acoustic Zoning & Open Circulation",
        title: "Enterprise Workplace Architecture",
        description:
          "Panoramic corporate floor plan balancing 80 workstations, acoustic meeting pods, executive breakout booths, and natural light distribution across 6,800 sq.ft.",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Floor Area", value: "6,800 sq.ft" },
          { label: "Desk Density", value: "80 Agiles + 6 Cabins" },
          { label: "Acoustic Ceiling", value: "NRC 0.85 Baffles" },
        ],
        hotspots: [
          {
            id: "o-0-1",
            x: 50,
            y: 50,
            title: "Acoustic Spatial Zoning",
            spec: "Suspended ceiling felt baffles reducing speech reverberation to < 0.6s",
            category: "Architectural",
          },
        ],
      },
      {
        level: 1,
        depthMeters: "1.8m",
        zoomFactor: "2.5x Joinery",
        stageName: "Desking Clusters",
        stageTagline: "Ergonomic Modular Bench System",
        title: "Modular 4-Person Collaboration Bench",
        description:
          "Precision-engineered benching clusters built with powder-coated CRCA steel legs and Highland Pine pre-laminated worktops with chamfered edges.",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Worktop Dimensions", value: "1,200 × 600mm per user" },
          { label: "Steel Frame", value: "50 × 50mm CRCA Box" },
          { label: "Finish Standard", value: "Anti-Scratch Melamine" },
        ],
        hotspots: [
          {
            id: "o-1-1",
            x: 45,
            y: 55,
            title: "Shared Wire Duct Trough",
            spec: "High-capacity dual-compartment raceway separating power from Cat6A LAN lines",
            category: "Joinery",
          },
        ],
      },
      {
        level: 2,
        depthMeters: "3.6m",
        zoomFactor: "5.0x Internal",
        stageName: "Wire Management",
        stageTagline: "Flip-Up Power & Clean Umbilical Riser",
        title: "Concealed Electrification & Connectivity",
        description:
          "Stepping inside the workstation structure: Flip-up aluminum connectivity modules, concealed under-desk wire baskets, and flexible umbilical floor conduits.",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Power Ports", value: "3 Multi-Pin + Dual USB-C" },
          { label: "Wire Raceway", value: "Under-desk Galvanized Tray" },
          { label: "Floor Conduit", value: "Articulated Snake Riser" },
        ],
        hotspots: [
          {
            id: "o-2-1",
            x: 48,
            y: 45,
            title: "Integrated Pop-Up Power Box",
            spec: "Brushed aluminum bezel with surge protection and 65W PD fast charging",
            category: "Hardware",
          },
        ],
      },
      {
        level: 3,
        depthMeters: "5.4m",
        zoomFactor: "10.0x Micro",
        stageName: "Engineering Substrate",
        stageTagline: "Commercial Durability Standards",
        title: "E1 Low-Emission Board & Impact PVC Edge",
        description:
          "Built for 10+ years of high-traffic commercial use: 2mm high-impact PVC edge banding sealed with hot-melt glue on E1 certified low-formaldehyde core.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        metrics: [
          { label: "Emission Standard", value: "EN 717-1 Class E1" },
          { label: "Edge Band Thickness", value: "2.0mm High Impact PVC" },
          { label: "Scratch Resistance", value: "Class 3A Commercial" },
        ],
        hotspots: [
          {
            id: "o-3-1",
            x: 50,
            y: 50,
            title: "2mm Heavy-Impact Edge Seam",
            spec: "Chamfered 2mm thick PVC edge that absorbs severe chair armrest knocks without chipping",
            category: "Material",
          },
        ],
      },
    ],
  },
];

export default function DeepInteriorExplorer() {
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>("lumina-kitchen");
  const [currentDepthIndex, setCurrentDepthIndex] = useState<number>(0);
  const [xrayMode, setXrayMode] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isAutoTouring, setIsAutoTouring] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentSpace =
    SPACES.find((s) => s.id === selectedSpaceId) || SPACES[0];
  const currentLayer = currentSpace.layers[currentDepthIndex];

  // Auto tour timer
  useEffect(() => {
    if (!isAutoTouring) return;
    const interval = setInterval(() => {
      setCurrentDepthIndex((prev) => (prev + 1) % currentSpace.layers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoTouring, currentSpace.layers.length]);

  const handleNextDepth = () => {
    setIsAutoTouring(false);
    setCurrentDepthIndex((prev) =>
      prev < currentSpace.layers.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevDepth = () => {
    setIsAutoTouring(false);
    setCurrentDepthIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleSelectDepth = (idx: number) => {
    setIsAutoTouring(false);
    setCurrentDepthIndex(idx);
    setActiveHotspot(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#0E1A2D] text-white rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden hardware-accelerated"
    >
      {/* Top Architectural HUD Status Bar */}
      <div className="border-b border-white/10 bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Left Title & Status */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEC10E]/15 border border-[#EEC10E]/40 text-[#EEC10E] flex items-center justify-center flex-shrink-0">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#EEC10E] px-2 py-0.5 rounded bg-[#EEC10E]/10 border border-[#EEC10E]/30 font-mono">
                  3D Spatial Depth Inspection
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Live Sync
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                Deep Interior Explorer
              </h3>
            </div>
          </div>

          {/* Center Space Typology Selector Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {SPACES.map((space) => {
              const isActive = space.id === selectedSpaceId;
              return (
                <button
                  key={space.id}
                  type="button"
                  onClick={() => {
                    setSelectedSpaceId(space.id);
                    setCurrentDepthIndex(0);
                    setActiveHotspot(null);
                    setIsAutoTouring(false);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap hardware-accelerated ${
                    isActive
                      ? "bg-[#EEC10E] text-[#1F3B6B] shadow-md scale-100 font-extrabold"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                  }`}
                >
                  {space.name}
                </button>
              );
            })}
          </div>

          {/* Right Controls: X-Ray Mode & Auto Tour */}
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setXrayMode(!xrayMode)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 border ${
                xrayMode
                  ? "bg-amber-500/20 text-amber-300 border-amber-400 shadow-sm"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
              }`}
              title="Toggle Architectural Wireframe & Internal Skeleton"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>X-Ray Skeleton: {xrayMode ? "ON" : "OFF"}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsAutoTouring(!isAutoTouring)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 border ${
                isAutoTouring
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-400"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAutoTouring ? "Pause Tour" : "Auto Dive"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[580px]">
        {/* Left 8 Columns: 3D Viewport Chamber */}
        <div className="lg:col-span-8 relative bg-slate-950 overflow-hidden flex items-center justify-center p-3 sm:p-6 select-none">
          {/* Blueprint Grid Background when in X-Ray Mode */}
          {xrayMode && (
            <div className="absolute inset-0 bg-blueprint-grid opacity-35 z-10 pointer-events-none" />
          )}

          {/* 3D Perspective Chamber */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-2xl perspective-1200 hardware-accelerated">
            {/* The Layer Image with Dynamic 3D Scale & Depth Transition */}
            <div
              className={`relative w-full h-full transition-transform duration-700 ease-out preserve-3d hardware-accelerated ${
                xrayMode ? "contrast-125 saturate-50 hue-rotate-15" : ""
              }`}
              style={{
                transform: `scale(${1 + currentDepthIndex * 0.08}) translateZ(${
                  currentDepthIndex * 30
                }px)`,
              }}
            >
              <Image
                src={currentLayer.image}
                alt={`${currentSpace.name} - ${currentLayer.title}`}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />

              {/* Lighting Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

              {/* X-Ray Scanline & Tech Grid Overlay */}
              {xrayMode && (
                <div className="absolute inset-0 bg-scanlines pointer-events-none mix-blend-overlay" />
              )}
            </div>

            {/* Floating Live Depth Badge in Upper Left of Viewport */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/20 text-xs font-mono flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#EEC10E]" />
                <span className="text-[#EEC10E] font-bold">
                  {currentLayer.depthMeters}
                </span>
                <span className="text-slate-400">|</span>
                <span className="text-white font-medium">
                  {currentLayer.zoomFactor}
                </span>
              </div>

              <div className="hidden sm:inline-flex px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/20 text-[11px] font-bold text-slate-300 shadow-lg">
                {currentLayer.stageName}
              </div>
            </div>

            {/* Interactive Hotspot Radar Pins */}
            {currentLayer.hotspots.map((hs) => {
              const isSelected = activeHotspot?.id === hs.id;
              return (
                <div
                  key={hs.id}
                  style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    type="button"
                    onClick={() => setActiveHotspot(isSelected ? null : hs)}
                    className="relative group focus:outline-none"
                    aria-label={`Inspect ${hs.title}`}
                  >
                    {/* Pulsing Radar Ring */}
                    <span className="absolute -inset-2 rounded-full bg-[#EEC10E]/30 animate-radar-pulse" />
                    {/* Center Core Button */}
                    <span
                      className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-200 shadow-xl ${
                        isSelected
                          ? "bg-[#EEC10E] text-[#1F3B6B] border-white scale-125"
                          : "bg-[#1F3B6B] text-[#EEC10E] border-[#EEC10E] hover:scale-110"
                      }`}
                    >
                      <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                  </button>

                  {/* Overlaid Floating Spec Card (Desktop & Tablet) */}
                  {isSelected && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 sm:w-72 p-3.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-[#EEC10E]/70 text-left shadow-2xl animate-fade-in z-40 pointer-events-auto">
                      <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#EEC10E] tracking-wider mb-1">
                        <span>{hs.category} Hotspot</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveHotspot(null);
                          }}
                          className="text-slate-400 hover:text-white text-xs px-1"
                        >
                          ✕
                        </button>
                      </div>
                      <h4 className="text-xs font-bold text-white">
                        {hs.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                        {hs.spec}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile / Tablet Quick Navigation Arrows Overlaid on Image */}
            <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none z-20">
              <button
                type="button"
                onClick={handlePrevDepth}
                disabled={currentDepthIndex === 0}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center pointer-events-auto transition-all ${
                  currentDepthIndex === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-[#EEC10E] hover:text-[#1F3B6B] hover:scale-105"
                }`}
                aria-label="Previous Depth Level"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNextDepth}
                disabled={currentDepthIndex === currentSpace.layers.length - 1}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center pointer-events-auto transition-all ${
                  currentDepthIndex === currentSpace.layers.length - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-[#EEC10E] hover:text-[#1F3B6B] hover:scale-105"
                }`}
                aria-label="Next Depth Level"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Progress Depth Bar */}
            <div className="absolute bottom-3 left-4 right-4 z-20">
              <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md p-2 rounded-xl border border-white/10">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold pl-1 hidden sm:inline">
                  Spatial Depth:
                </span>
                <div className="flex-1 grid grid-cols-4 gap-1.5">
                  {currentSpace.layers.map((layer, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectDepth(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx <= currentDepthIndex
                          ? "bg-[#EEC10E] shadow-[0_0_8px_rgba(238,193,14,0.6)]"
                          : "bg-white/20 hover:bg-white/30"
                      }`}
                      title={`Go to Layer ${idx + 1}: ${layer.stageName}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono font-bold text-[#EEC10E] pr-1">
                  Stage 0{currentDepthIndex + 1}/04
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 Columns: Architectural Depth Dossier HUD */}
        <div className="lg:col-span-4 p-5 sm:p-6 bg-slate-900/90 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between text-left">
          <div className="space-y-4">
            {/* Stage Indicator Pill */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#EEC10E] font-mono px-2.5 py-1 rounded bg-[#EEC10E]/10 border border-[#EEC10E]/30">
                <Layers className="w-3 h-3" />
                <span>Layer 0{currentDepthIndex + 1} • {currentLayer.depthMeters}</span>
              </span>
              <span className="text-xs font-mono text-slate-400">
                {currentLayer.zoomFactor}
              </span>
            </div>

            {/* Title & Technical Tagline */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                {currentLayer.stageTagline}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {currentLayer.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentLayer.description}
            </p>

            {/* Technical Verification Specs Grid */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                [Engineering Tolerances & Specifications]
              </span>
              <div className="grid grid-cols-1 gap-2">
                {currentLayer.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs"
                  >
                    <span className="text-slate-400 font-medium">{m.label}</span>
                    <span className="text-white font-mono font-bold text-right">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Hotspot Callout (If Selected) */}
            {activeHotspot && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-[#EEC10E]/60 animate-fade-in">
                <div className="text-[10px] font-bold text-[#EEC10E] uppercase tracking-wider">
                  Inspecting: {activeHotspot.category}
                </div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {activeHotspot.title}
                </div>
                <div className="text-[11px] text-slate-200 mt-1">
                  {activeHotspot.spec}
                </div>
              </div>
            )}
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handlePrevDepth}
                disabled={currentDepthIndex === 0}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                  currentDepthIndex === 0
                    ? "bg-white/5 text-slate-500 border-white/5 cursor-not-allowed"
                    : "bg-white/10 hover:bg-white/20 text-white border-white/10"
                }`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Surface Layer</span>
              </button>

              <button
                type="button"
                onClick={handleNextDepth}
                disabled={currentDepthIndex === currentSpace.layers.length - 1}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                  currentDepthIndex === currentSpace.layers.length - 1
                    ? "bg-[#EEC10E]/30 text-amber-300 border-[#EEC10E]/40 cursor-not-allowed"
                    : "bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] font-extrabold border-[#EEC10E] shadow-md"
                }`}
              >
                <span>Deeper Layer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct Consultation Link */}
            <Link
              href="/estimator"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 hover:text-white transition-colors"
            >
              <span>Calculate Custom BOQ for this Space</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EEC10E]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
