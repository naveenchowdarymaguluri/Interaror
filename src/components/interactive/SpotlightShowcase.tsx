"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  ShoppingBag,
  Star,
  CheckCircle2,
  Heart,
  Sliders,
} from "lucide-react";
import { productsData, ProductItem } from "@/data/productsData";
import { useStore } from "@/context/StoreContext";

export default function SpotlightShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const { openQuickView, addToCart, toggleWishlist, isInWishlist } = useStore();

  const filteredProducts =
    selectedFilter === "all"
      ? productsData
      : productsData.filter((p) => p.categorySlug === selectedFilter || p.roomType === selectedFilter);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Scroll arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Curated 2026 Flagships</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
              Spotlight Modular Collections
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-xl">
              Precision-crafted millwork with German fittings and 710-grade waterproof marine carcasses.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white flex items-center justify-center transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white flex items-center justify-center transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {[
            { id: "all", label: "All Flagships" },
            { id: "modular-kitchens", label: "Kitchens" },
            { id: "wardrobes-and-closets", label: "Wardrobes" },
            { id: "tv-units-entertainment", label: "Media Walls" },
            { id: "bedroom-furniture", label: "Bedroom" },
            { id: "office-workstations", label: "Office & Study" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedFilter === tab.id
                  ? "bg-[#1F3B6B] text-white shadow-sm"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x scrollbar-thin scrollbar-thumb-stone-300"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {filteredProducts.map((product) => {
            const isFavorited = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="group relative flex-none w-[300px] sm:w-[360px] rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between snap-start"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={product.primaryImage}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#1F3B6B] text-white shadow-xs">
                      {product.categoryName}
                    </span>
                    {product.badge && (
                      <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#EEC10E] text-stone-950 shadow-xs">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200 flex items-center justify-center transition-all ${
                      isFavorited ? "text-rose-500" : "text-stone-400 hover:text-rose-500"
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
                  </button>

                  {/* Quick View Hover Pill */}
                  <button
                    onClick={() => openQuickView(product)}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-900 text-white text-xs font-bold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5 shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#EEC10E]" />
                    <span>Quick Specs & Finishes</span>
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {product.leadTime || "4 Weeks Handover"}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{product.rating || 4.9}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 group-hover:text-[#1F3B6B] transition-colors leading-snug line-clamp-1">
                      {product.title}
                    </h3>

                    <p className="text-xs text-stone-500 line-clamp-2">
                      {product.shortDescription}
                    </p>

                    {/* Finish Swatches preview */}
                    {product.swatches && product.swatches.length > 0 && (
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="text-[10px] text-stone-600 font-medium mr-1">
                          Finishes:
                        </span>
                        {product.swatches.slice(0, 4).map((sw) => (
                          <span
                            key={sw.name}
                            title={sw.name}
                            className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-xs"
                            style={{ backgroundColor: sw.colorHex }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price and Action Buttons */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="block text-[9px] uppercase font-bold tracking-wider text-stone-600">
                        Starting From
                      </span>
                      <span className="text-base font-black text-[#1F3B6B]">
                        {product.priceFormatted || "Custom BOQ"}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => addToCart(product)}
                        className="flex items-center gap-1.5 bg-[#1F3B6B] hover:bg-[#15294b] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
                        aria-label="Add to quote basket"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#EEC10E]" />
                        <span>Add Quote</span>
                      </button>

                      <Link
                        href={`/products/${product.slug}`}
                        className="p-2 rounded-xl border border-stone-200 text-stone-400 hover:text-stone-900 transition-colors"
                        aria-label="View product details"
                      >
                        <ArrowRight className="w-4 h-4" />
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
  );
}
