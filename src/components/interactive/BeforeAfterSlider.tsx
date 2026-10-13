"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Sliders, ArrowLeftRight, CheckCircle2 } from "lucide-react";

interface Props {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  afterImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  beforeLabel = "Civil Bare Shell",
  afterLabel = "Office Elevate Turnkey Finish",
  title = "The Transformation Experience",
  subtitle = "Drag the slider to reveal how Office Elevate transforms bare construction shells into refined architectural living spaces.",
}: Props) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full text-center">
      <div className="mb-8 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEC10E]/15 text-[#1F3B6B] text-xs font-bold uppercase tracking-wider mb-2 font-mono border border-[#EEC10E]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#EEC10E]" />
          <span>Interactive Visualizer</span>
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-[#1F3B6B] tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Interactive Slider Chamber */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative mx-auto aspect-[16/10] sm:aspect-[21/9] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200 select-none cursor-ew-resize group"
      >
        {/* After Image (Full Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-lg pointer-events-none flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{afterLabel}</span>
          </div>
        </div>

        {/* Before Image (Clipped Left Layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[320px] max-w-none">
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              className="object-cover"
              style={{
                width: containerRef.current
                  ? `${containerRef.current.clientWidth}px`
                  : "100%",
              }}
              priority
            />
          </div>
          <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-lg pointer-events-none flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#EEC10E] pointer-events-none shadow-[0_0_15px_rgba(238,193,14,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Drag Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1F3B6B] border-2 border-[#EEC10E] shadow-2xl flex items-center justify-center text-[#EEC10E] group-hover:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Floating Hint Tag */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          Drag horizontally to inspect transformation
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-6 text-left">
        {[
          { title: "Civil Audit", desc: "Laser leveling of raw masonry" },
          { title: "Factory Production", desc: "0.5mm beam saw cut panels" },
          { title: "Dust-Free Fitment", desc: "Rapid 5-day on-site assembly" },
          { title: "Snag-Free Handover", desc: "7-point QA key delivery" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-2.5"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-xs text-[#1F3B6B]">{item.title}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
