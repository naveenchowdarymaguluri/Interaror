"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Layers,
  Sparkles,
  Maximize2,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Ruler,
  Info,
  ChevronRight,
  Eye,
} from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface Props {
  project: ProjectItem;
}

export default function ProjectDepthViewer({ project }: Props) {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [xrayActive, setXrayActive] = useState<boolean>(false);

  const layers = [
    {
      level: 1,
      title: "Finished Spatial Execution",
      tagline: "Panoramic Aesthetic & Daylight Balance",
      image: project.thumbnail,
      description:
        "The completed interior in its natural environment, showing full spatial harmony, daylight alignment, and custom furniture integration.",
      specs: [
        { label: "Spatial Area", value: project.area },
        { label: "Execution Timeline", value: project.completionTimeline },
        { label: "Project Typology", value: `${project.category} (${project.clientType})` },
      ],
    },
    {
      level: 2,
      title: "Modular Joinery & Spatial Layout",
      tagline: "Carcass Grid & Movement Circulation",
      image: project.gallery[0] || project.thumbnail,
      description:
        "Computer-calibrated modular carcasses arranged along a strict spatial grid to maximize functional storage while maintaining generous clearance aisles.",
      specs: [
        { label: "Modular Layout", value: "Factory Pre-Fabricated Knockdown" },
        { label: "Design Objective", value: project.designObjective.slice(0, 55) + "..." },
        { label: "Tolerance Standard", value: "0.5mm Computerized Beam Saw" },
      ],
    },
    {
      level: 3,
      title: "Core Substrates & German Hardware",
      tagline: "Internal Joinery Cross-Section",
      image: project.gallery[1] || project.thumbnail,
      description:
        "Inside the joinery: Boiling Water Proof (IS:710) Marine Plywood carcass, PUR zero-joint edge banding, and European soft-closing runners.",
      specs: [
        { label: "Core Substrate", value: project.materialsAndFinishes.substrate },
        { label: "Shutter Surface", value: project.materialsAndFinishes.shutterFinish },
        { label: "Fittings & Motions", value: project.materialsAndFinishes.hardware },
      ],
    },
  ];

  const current = layers[activeLayer];

  return (
    <div className="rounded-3xl bg-[#0E1A2D] text-white border border-slate-700/80 p-5 sm:p-8 shadow-xl hardware-accelerated text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#EEC10E] px-2 py-0.5 rounded bg-[#EEC10E]/15 border border-[#EEC10E]/30 font-mono">
              Interactive 3D Deep Inspection
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Depth Level: 0{activeLayer + 1}/03
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Explore the Interior Architecture in Depth
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setXrayActive(!xrayActive)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border self-start sm:self-auto ${
            xrayActive
              ? "bg-amber-500/20 text-amber-300 border-amber-400"
              : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>X-Ray Skeleton: {xrayActive ? "ON" : "OFF"}</span>
        </button>
      </div>

      {/* Layer Step Selector Tabs */}
      <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-900 border border-white/10 mb-6">
        {layers.map((l, idx) => {
          const isActive = activeLayer === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveLayer(idx)}
              className={`py-2 px-2 sm:px-4 rounded-xl text-xs font-bold transition-all text-center truncate ${
                isActive
                  ? "bg-[#EEC10E] text-[#1F3B6B] shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="hidden sm:inline">Layer 0{l.level}: </span>
              <span>{l.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Viewport & Specs Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left 7 Cols: Image Chamber */}
        <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-inner">
          {xrayActive && (
            <div className="absolute inset-0 bg-blueprint-grid opacity-35 z-10 pointer-events-none" />
          )}

          <div
            className={`relative w-full h-full transition-transform duration-500 ease-out ${
              xrayActive ? "contrast-125 saturate-50 hue-rotate-15" : ""
            }`}
            style={{ transform: `scale(${1 + activeLayer * 0.06})` }}
          >
            <Image
              src={current.image}
              alt={`${project.title} - ${current.title}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-200 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 z-20">
            <span className="text-[#EEC10E] font-bold">
              Layer 0{current.level}: {current.title}
            </span>
            <span className="text-slate-400">Zoom: {1 + activeLayer * 1.5}x</span>
          </div>
        </div>

        {/* Right 5 Cols: Technical Specs */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {current.tagline}
            </span>
            <h4 className="text-lg font-bold text-white mt-0.5">
              {current.title}
            </h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              [Layer Specifications]
            </div>
            {current.specs.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-xs py-1 border-b border-white/5 last:border-0"
              >
                <span className="text-slate-400">{s.label}:</span>
                <span className="text-white font-mono font-semibold text-right">
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setActiveLayer((prev) => (prev > 0 ? prev - 1 : 2))}
              className="text-xs text-slate-400 hover:text-white font-bold"
            >
              ← Previous Depth
            </button>
            <button
              type="button"
              onClick={() => setActiveLayer((prev) => (prev < 2 ? prev + 1 : 0))}
              className="text-xs text-[#EEC10E] hover:text-amber-300 font-bold inline-flex items-center gap-1"
            >
              <span>Next Deeper Layer</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
