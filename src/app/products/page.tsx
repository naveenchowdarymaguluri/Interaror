"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  Ruler,
  Layers,
  Sparkles,
  ShoppingBag,
  Eye,
  Heart,
  Star,
  Search,
  Filter,
  Compass,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { productCategories, productsData, ProductItem } from "@/data/productsData";
import { useStore } from "@/context/StoreContext";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");

  const {
    openQuickView,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useStore();

  const filteredAndSortedProducts = useMemo(() => {
    let items = productsData;

    // Filter by category
    if (activeCategory !== "all") {
      items = items.filter((p) => p.categorySlug === activeCategory);
    }

    // Filter by material
    if (selectedMaterial !== "all") {
      const mat = selectedMaterial.toLowerCase();
      items = items.filter(
        (p) =>
          p.materialsAvailable?.some((m) => m.toLowerCase().includes(mat)) ||
          p.finishesAvailable?.some((f) => f.toLowerCase().includes(mat))
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.finishesAvailable?.some((f) => f.toLowerCase().includes(q))
      );
    }

    // Sort
    const sorted = [...items];
    if (sortBy === "price-low") {
      sorted.sort((a, b) => (a.startingPrice || 0) - (b.startingPrice || 0));
    } else if (sortBy === "price-high") {
      sorted.sort((a, b) => (b.startingPrice || 0) - (a.startingPrice || 0));
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return sorted;
  }, [activeCategory, selectedMaterial, searchQuery, sortBy]);

  return (
    <div className="w-full bg-[#FBF9F5] text-[#1B1C1A] pb-24">
      {/* Top Technical Breadcrumb & Index Bar (From Atelier Specification) */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[#4A463F] border-b border-[#CDC5BC]/30 pb-3">
          <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-[#7C766E] font-bold">
            <span>ARCHITECTURAL PORTFOLIO</span>
            <span>/</span>
            <span className="text-[#EEC10E]">SERIES MMXXV MODULES</span>
          </div>
          <div className="flex items-center gap-4 font-sans text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EEC10E]" />
              <span className="text-[#122442] font-semibold">BIM / Revit 2025.2 Ready</span>
            </span>
            <span className="text-[#CDC5BC]">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#122442]" />
              <span className="text-[#122442] font-semibold">DIN EN 14749 Certified</span>
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Section Title & Spatial Matrix Meta */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-2">
            <span className="font-sans text-xs uppercase tracking-[0.18em] text-[#EEC10E] font-bold">
              Spatial Framework Catalog
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] text-[#122442] leading-tight tracking-tight">
              Modular Systems & Specifications
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#4A463F] max-w-2xl pt-1 leading-relaxed">
              Engineered architectural modules customizable by millimeter dimensions, finish materiality, and precision German hardware configurations. Designed for spatial permanence.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="bg-[#F5F3EF] p-4 rounded-xl border border-[#CDC5BC]/30 shadow-sm flex flex-col gap-1 w-full lg:w-auto">
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#7C766E] font-bold">
                Modular Tolerance Standard
              </span>
              <span className="font-serif text-xl sm:text-2xl text-[#122442] font-medium tracking-tight">
                ± 0.35 mm Micro-Fit Joinery
              </span>
              <span className="font-sans text-xs text-[#4A463F]">
                Calibrated for structural ceiling & floor recess
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Filter Architecture */}
      <section className="sticky top-[69px] z-30 bg-[#FBF9F5]/95 backdrop-blur-md border-y border-[#CDC5BC]/30 py-4 mb-8 shadow-xs">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-3">
          {/* Typology Space Filters & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-[0.14em] font-bold transition-all duration-300 shadow-xs whitespace-nowrap ${
                  activeCategory === "all"
                    ? "bg-[#122442] text-white shadow-md scale-105"
                    : "bg-[#F5F3EF] text-[#4A463F] hover:text-[#122442] hover:bg-[#EAE8E4]"
                }`}
              >
                All Systems ({productsData.length})
              </button>

              {productCategories.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-[0.14em] font-bold transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat.slug
                      ? "bg-[#122442] text-white shadow-md scale-105"
                      : "bg-[#F5F3EF] text-[#4A463F] hover:text-[#122442] hover:bg-[#EAE8E4]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search modules, materials..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-[#CDC5BC]/40 rounded-full font-sans text-xs text-[#1B1C1A] placeholder:text-[#7C766E] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
              />
            </div>
          </div>

          {/* Secondary Material Finish Filter Row */}
          <div className="flex items-center gap-3 overflow-x-auto py-1 scrollbar-none">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#7C766E] font-bold whitespace-nowrap">
              Materiality Core:
            </span>
            <div className="flex items-center gap-2">
              {[
                { id: "all", label: "All Materials" },
                { id: "travertine", label: "Travertine & Stone" },
                { id: "walnut", label: "Smoked Alpine Walnut" },
                { id: "acrylic", label: "High-Gloss Acrylic" },
                { id: "glass", label: "Smoked Glass & Bronze" },
              ].map((mat) => (
                <button
                  key={mat.id}
                  type="button"
                  onClick={() => setSelectedMaterial(mat.id)}
                  className={`px-3 py-1 rounded-full font-sans text-[11px] font-semibold transition-colors whitespace-nowrap ${
                    selectedMaterial === mat.id
                      ? "bg-[#EEC10E] text-[#122442]"
                      : "bg-[#F5F3EF] text-[#4A463F] hover:bg-[#EAE8E4]"
                  }`}
                >
                  {mat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Modules Grid */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-6 flex items-center justify-between text-xs text-[#7C766E]">
          <span>
            Displaying <strong>{filteredAndSortedProducts.length}</strong> architectural systems
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#122442] font-bold hover:underline"
            >
              Clear Search Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProducts.map((product) => {
            const isFavorited = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                id={product.categorySlug}
                className="group bg-white rounded-xl overflow-hidden border border-[#CDC5BC]/30 shadow-sm hover:shadow-2xl hover:border-[#EEC10E]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Box */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={product.primaryImage}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Category & Badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                      <span className="bg-[#122442]/95 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                        {product.categoryName}
                      </span>
                      {product.badge && (
                        <span className="bg-[#EEC10E] text-[#122442] text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-xs">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-[#CDC5BC]/40 flex items-center justify-center transition-all ${
                        isFavorited ? "text-rose-500" : "text-stone-400 hover:text-rose-500"
                      }`}
                      aria-label="Add to moodboard"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFavorited ? "fill-current" : ""}`} />
                    </button>

                    {/* Quick Specs Pill */}
                    <button
                      type="button"
                      onClick={() => openQuickView(product)}
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-[#122442]/95 hover:bg-[#122442] text-white text-xs font-bold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5 shadow-lg"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#EEC10E]" />
                      <span>Quick Specs & Finishes</span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 text-left space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        {product.leadTime || "4 Weeks Handover"}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{product.rating || 4.9}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#122442] group-hover:text-[#EEC10E] transition-colors leading-snug">
                      {product.title}
                    </h3>

                    <p className="font-sans text-xs text-[#4A463F] line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Finish Swatches */}
                    {product.swatches && product.swatches.length > 0 && (
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="font-sans text-[10px] text-[#7C766E] font-semibold mr-1">
                          Finishes:
                        </span>
                        {product.swatches.map((sw) => (
                          <span
                            key={sw.name}
                            title={sw.name}
                            className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-inner"
                            style={{ backgroundColor: sw.colorHex }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Key Features List */}
                    <div className="pt-2 border-t border-[#CDC5BC]/20 space-y-1">
                      {product.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#4A463F]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <span className="font-sans text-[9px] uppercase font-bold text-[#7C766E] block">
                        Starting Price
                      </span>
                      <span className="font-serif text-lg font-bold text-[#122442]">
                        {product.priceFormatted || "Custom BOQ"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="flex items-center gap-1.5 bg-[#122442] hover:bg-[#1f3b6b] text-white px-3.5 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#EEC10E]" />
                        <span>Add Quote</span>
                      </button>

                      <Link
                        href={`/products/${product.slug}`}
                        className="p-2.5 rounded border border-[#CDC5BC]/40 text-[#122442] hover:text-[#EEC10E] hover:border-[#EEC10E] transition-colors"
                        aria-label="View product page"
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
      </section>
    </div>
  );
}
