"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  Award,
  Factory,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface BadgeProps {
  type: "shield" | "precision" | "speed" | "sustainable" | "german" | "guarantee";
  title: string;
  subtitle: string;
  description: string;
  stat?: string;
  className?: string;
}

export default function ThreeDIconBadge({
  type,
  title,
  subtitle,
  description,
  stat,
  className = "",
}: BadgeProps) {
  const getBadgeVisual = () => {
    switch (type) {
      case "shield":
        return {
          gradient: "from-amber-400 via-amber-500 to-yellow-600",
          shadowColor: "shadow-amber-500/25",
          ringColor: "ring-amber-400/40",
          icon: <ShieldCheck className="w-8 h-8 text-white drop-shadow-md" />,
          accentBg: "bg-amber-500/10 text-amber-800 border-amber-200",
          symbol: "🛡️",
        };
      case "speed":
        return {
          gradient: "from-blue-500 via-indigo-600 to-blue-800",
          shadowColor: "shadow-blue-500/25",
          ringColor: "ring-blue-400/40",
          icon: <Zap className="w-8 h-8 text-white drop-shadow-md" />,
          accentBg: "bg-blue-500/10 text-blue-800 border-blue-200",
          symbol: "🚀",
        };
      case "precision":
        return {
          gradient: "from-emerald-500 via-teal-600 to-emerald-800",
          shadowColor: "shadow-emerald-500/25",
          ringColor: "ring-emerald-400/40",
          icon: <Cpu className="w-8 h-8 text-white drop-shadow-md" />,
          accentBg: "bg-emerald-500/10 text-emerald-800 border-emerald-200",
          symbol: "📐",
        };
      case "german":
        return {
          gradient: "from-stone-700 via-stone-800 to-stone-950",
          shadowColor: "shadow-stone-700/25",
          ringColor: "ring-stone-400/40",
          icon: <Factory className="w-8 h-8 text-amber-400 drop-shadow-md" />,
          accentBg: "bg-stone-500/10 text-stone-800 border-stone-200",
          symbol: "⚙️",
        };
      case "sustainable":
        return {
          gradient: "from-teal-400 via-emerald-500 to-green-700",
          shadowColor: "shadow-emerald-500/25",
          ringColor: "ring-emerald-400/40",
          icon: <Layers className="w-8 h-8 text-white drop-shadow-md" />,
          accentBg: "bg-emerald-500/10 text-emerald-800 border-emerald-200",
          symbol: "🌿",
        };
      case "guarantee":
      default:
        return {
          gradient: "from-yellow-400 via-amber-500 to-amber-700",
          shadowColor: "shadow-amber-500/25",
          ringColor: "ring-amber-400/40",
          icon: <Award className="w-8 h-8 text-white drop-shadow-md" />,
          accentBg: "bg-amber-500/10 text-amber-800 border-amber-200",
          symbol: "💎",
        };
    }
  };

  const visual = getBadgeVisual();

  return (
    <div
      className={`group relative rounded-3xl p-6 sm:p-7 bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${className}`}
    >
      {/* Subtle ambient gradient mesh in background */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-36 h-36 rounded-full bg-stone-100/80 blur-2xl group-hover:scale-150 transition-transform duration-500 -z-10" />

      <div>
        {/* 3D-styled Badge Icon with dynamic bevel & drop shadow */}
        <div className="flex items-start justify-between mb-5">
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${visual.gradient} shadow-lg ${visual.shadowColor} flex items-center justify-center p-3 relative transform group-hover:rotate-6 transition-transform duration-300 ring-2 ${visual.ringColor}`}
            >
              {/* Specular 3D highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/20 to-white/40 pointer-events-none" />
              <div className="relative z-10 flex items-center justify-center text-3xl select-none">
                {visual.symbol}
              </div>
            </div>
          </div>

          {stat && (
            <span
              className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${visual.accentBg}`}
            >
              {stat}
            </span>
          )}
        </div>

        {/* Text Details */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 block">
            {subtitle}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 group-hover:text-[#1F3B6B] transition-colors tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
            {description}
          </p>
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-[#1F3B6B]">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        <span>Verified Factory Standard</span>
      </div>
    </div>
  );
}
