"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { productCategories, productsData, ProductItem } from "@/data/productsData";
import EnquiryForm from "@/components/forms/EnquiryForm";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<ProductItem | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? productsData
      : productsData.filter((p) => p.categorySlug === activeCategory);

  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Products & Modular Solutions" }]} />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Precision Modular Range
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1F3B6B] mt-2 tracking-tight">
              Factory-Engineered Modular Furniture
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Explore our modular collections: kitchens, floor-to-ceiling wardrobes, architectural TV walls, and executive office workstations crafted with 0.5mm precision.
            </p>
          </div>
        </div>
      </section>

      {/* Category Pills & Filters */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[73px] z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-[#1F3B6B] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.slug}
                id={product.categorySlug}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={product.primaryImage}
                      alt={product.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#1F3B6B]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {product.categoryName}
                    </div>
                  </div>

                  <div className="p-6 text-left space-y-3">
                    <h3 className="font-extrabold text-lg text-slate-900">
                      {product.title}
                    </h3>
                    <p className="text-xs text-amber-600 font-semibold">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Features Snippet */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Key Engineering Highlights:
                      </div>
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500 font-medium">
                      <span className="font-semibold text-slate-700">Substrates:</span>{" "}
                      {product.materialsAvailable.join(", ")}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F3B6B] hover:text-[#EEC10E] transition-colors py-2"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedProductForQuote(product)}
                    className="bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-xs transition-all"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote Modal */}
      {selectedProductForQuote && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProductForQuote(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 text-lg font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>
            <div className="mb-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Modular Product Quotation
              </span>
              <h3 className="text-2xl font-black text-[#1F3B6B] mt-1">
                {selectedProductForQuote.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Tell us your room dimensions or floor plan and our joinery estimators will provide an itemized quote.
              </p>
            </div>

            <EnquiryForm
              initialProjectType={`Product: ${selectedProductForQuote.title}`}
              initialRequirements={`Enquiry regarding ${selectedProductForQuote.title} (${selectedProductForQuote.categoryName}).`}
              sourceContext={`Product Catalog - ${selectedProductForQuote.slug}`}
              onSuccess={() => {
                setTimeout(() => setSelectedProductForQuote(null), 3000);
              }}
              compact={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
