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
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { productCategories, productsData, ProductItem } from "@/data/productsData";
import { useStore } from "@/context/StoreContext";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
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
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="w-full bg-[#FAF8F5] pb-24">
      {/* Page Header */}
      <section className="bg-white border-b border-stone-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Modular Products & Catalogue" }]} />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EEC10E] block">
              Architectural Modular Collection
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-stone-900 mt-2 tracking-tight">
              Modular Furniture Catalog
            </h1>
            <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
              Explore our factory-engineered modular collections: kitchens, floor-to-ceiling wardrobes, architectural TV walls, and executive office workstations crafted with 0.5mm precision and zero-joint PUR edge sealing.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-[73px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, finishes, or materials..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-200 bg-stone-50 text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1F3B6B] focus:bg-white"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-stone-600 font-semibold whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-xs font-bold text-stone-800 focus:outline-none focus:border-[#1F3B6B]"
              >
                <option value="featured">Featured 2026</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-[#1F3B6B] text-white shadow-sm"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              All Categories ({productsData.length})
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat.slug
                    ? "bg-[#1F3B6B] text-white shadow-sm"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between text-xs text-stone-500">
            <span>
              Showing <strong>{filteredAndSortedProducts.length}</strong> modular designs
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#1F3B6B] font-bold hover:underline"
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
                  className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                      <Image
                        src={product.primaryImage}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Category & Badge */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                        <span className="bg-[#1F3B6B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                          {product.categoryName}
                        </span>
                        {product.badge && (
                          <span className="bg-[#EEC10E] text-stone-950 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow-xs">
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
                        aria-label="Add to moodboard"
                      >
                        <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
                      </button>

                      {/* Quick View Pill */}
                      <button
                        onClick={() => openQuickView(product)}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-900 text-white text-xs font-bold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5 shadow-lg"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#EEC10E]" />
                        <span>Quick Specs & Finishes</span>
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 text-left space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {product.leadTime || "4 Weeks Handover"}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{product.rating || 4.9}</span>
                        </div>
                      </div>

                      <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-[#1F3B6B] transition-colors leading-snug">
                        {product.title}
                      </h3>

                      <p className="text-xs text-stone-500 line-clamp-2">
                        {product.shortDescription}
                      </p>

                      {/* Finish Swatches */}
                      {product.swatches && product.swatches.length > 0 && (
                        <div className="flex items-center gap-1.5 pt-1">
                          <span className="text-[10px] text-stone-600 font-semibold mr-1">
                            Finishes:
                          </span>
                          {product.swatches.map((sw) => (
                            <span
                              key={sw.name}
                              title={sw.name}
                              className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-xs"
                              style={{ backgroundColor: sw.colorHex }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Key Features List */}
                      <div className="pt-2 border-t border-stone-100 space-y-1">
                        {product.features.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-stone-600">
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
                        <span className="text-[9px] uppercase font-bold text-stone-600 block">
                          Starting Price
                        </span>
                        <span className="text-lg font-black text-[#1F3B6B]">
                          {product.priceFormatted || "Custom BOQ"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => addToCart(product)}
                          className="flex items-center gap-1.5 bg-[#1F3B6B] hover:bg-[#15294b] text-white px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm"
                        >
                          <ShoppingBag className="w-3.5 h-3.5 text-[#EEC10E]" />
                          <span>Add Quote</span>
                        </button>

                        <Link
                          href={`/products/${product.slug}`}
                          className="p-2.5 rounded-xl border border-stone-200 text-stone-400 hover:text-stone-900 transition-colors"
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
        </div>
      </section>
    </div>
  );
}
