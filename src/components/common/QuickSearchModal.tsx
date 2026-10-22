"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  X,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Ruler,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { productsData, productCategories, ProductItem } from "@/data/productsData";

export default function QuickSearchModal() {
  const { isSearchOpen, closeSearch, openQuickView } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const results = useMemo(() => {
    let items = productsData;
    if (selectedCategory !== "all") {
      items = items.filter((item) => item.categorySlug === selectedCategory);
    }
    if (!searchTerm.trim()) return items.slice(0, 6);

    const term = searchTerm.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.shortDescription.toLowerCase().includes(term) ||
        item.categoryName.toLowerCase().includes(term) ||
        item.finishesAvailable?.some((f) => f.toLowerCase().includes(term)) ||
        item.materialsAvailable?.some((m) => m.toLowerCase().includes(term))
    );
  }, [searchTerm, selectedCategory]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-start justify-center p-4 pt-16 sm:p-6 sm:pt-20 text-center">
        {/* Backdrop */}
        <div
          onClick={closeSearch}
          className="fixed inset-0 bg-stone-950/75 backdrop-blur-md transition-opacity"
        />

        {/* Search Modal Box */}
        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all w-full max-w-2xl border border-stone-200">
          {/* Search Input Bar */}
          <div className="relative p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3">
            <Search className="w-5 h-5 text-stone-400 shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search modular kitchens, wardrobes, TV walls, finishes, materials..."
              className="w-full text-sm sm:text-base font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none bg-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-stone-400 hover:text-stone-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-stone-400 bg-stone-100 rounded border border-stone-200">
              ESC
            </kbd>
          </div>

          {/* Category Filter Chips */}
          <div className="px-5 py-3 bg-stone-50 border-b border-stone-200/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-[#1F3B6B] text-white"
                  : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
              }`}
            >
              All ({productsData.length})
            </button>
            {productCategories.slice(0, 6).map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? "bg-[#1F3B6B] text-white"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto space-y-3">
            {results.length === 0 ? (
              <div className="text-center py-12 text-stone-400">
                <p className="text-sm">No products found matching &quot;{searchTerm}&quot;</p>
                <p className="text-xs text-stone-500 mt-1">
                  Try searching for &quot;kitchen&quot;, &quot;fluted&quot;, &quot;acrylic&quot;, or &quot;wardrobe&quot;.
                </p>
              </div>
            ) : (
              results.map((item) => (
                <div
                  key={item.id}
                  className="group p-3 rounded-2xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                      <Image
                        src={item.primaryImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#EEC10E]">
                          {item.categoryName}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-[#1F3B6B]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#1F3B6B] transition-colors truncate">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 truncate max-w-sm">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-black text-[#1F3B6B] hidden sm:inline">
                      {item.priceFormatted || "Custom BOQ"}
                    </span>
                    <button
                      onClick={() => {
                        closeSearch();
                        openQuickView(item);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-[#1F3B6B] hover:text-white text-stone-700 text-xs font-bold transition-all"
                    >
                      Quick View
                    </button>
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={closeSearch}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 transition-colors"
                      aria-label="View product page"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Search Footer */}
          <div className="px-5 py-3 bg-stone-100/70 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#EEC10E]" />
              Architectural custom sizing available on all units
            </span>
            <Link
              href="/products"
              onClick={closeSearch}
              className="text-[#1F3B6B] font-bold hover:underline"
            >
              View Full Catalog ({productsData.length} items) →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
