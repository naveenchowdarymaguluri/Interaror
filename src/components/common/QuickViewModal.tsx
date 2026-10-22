"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Star,
  CheckCircle2,
  ShieldCheck,
  ShoppingBag,
  Heart,
  MessageCircle,
  Ruler,
  Layers,
  ArrowRight,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { getWhatsAppUrl } from "@/data/companyData";

export default function QuickViewModal() {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useStore();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState<string>("");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("");

  if (!quickViewProduct) return null;

  const images = quickViewProduct.galleryImages?.length
    ? quickViewProduct.galleryImages
    : [quickViewProduct.primaryImage];

  const currentFinish =
    selectedFinish || quickViewProduct.finishesAvailable?.[0] || "Standard Finish";
  const currentMaterial =
    selectedMaterial || quickViewProduct.materialsAvailable?.[0] || "Marine BWP Ply";

  const isFavorited = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, currentFinish, currentMaterial);
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        {/* Backdrop */}
        <div
          onClick={closeQuickView}
          className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl border border-stone-200">
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/10 hover:bg-stone-900/20 text-stone-700 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Gallery & Swatches */}
            <div className="p-6 bg-stone-50 flex flex-col justify-between border-r border-stone-200/80">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-200 shadow-inner">
                  <Image
                    src={images[activeImageIndex] || quickViewProduct.primaryImage}
                    alt={quickViewProduct.title}
                    fill
                    className="object-cover"
                  />
                  {quickViewProduct.badge && (
                    <div className="absolute top-3 left-3 bg-[#1F3B6B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                      {quickViewProduct.badge}
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-16 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                          activeImageIndex === idx
                            ? "border-[#EEC10E] ring-2 ring-[#EEC10E]/30"
                            : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image src={img} alt="Thumbnail" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Swatch Selector if available */}
              {quickViewProduct.swatches && quickViewProduct.swatches.length > 0 && (
                <div className="mt-4 pt-4 border-t border-stone-200">
                  <label className="text-[11px] font-bold text-stone-600 uppercase tracking-wider block mb-2">
                    Available Surface Finishes ({quickViewProduct.swatches.length})
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {quickViewProduct.swatches.map((swatch) => (
                      <button
                        key={swatch.name}
                        onClick={() => setSelectedFinish(swatch.name)}
                        className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                          currentFinish === swatch.name
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                          style={{ backgroundColor: swatch.colorHex }}
                        />
                        <span>{swatch.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Details & Action */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Category & Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                    {quickViewProduct.categoryName}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{quickViewProduct.rating || 4.9}</span>
                    <span className="text-slate-400 font-normal">
                      ({quickViewProduct.reviewCount || 42} reviews)
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-extrabold text-[#1F3B6B] tracking-tight">
                    {quickViewProduct.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 italic">
                    {quickViewProduct.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-3.5 rounded-2xl bg-stone-100/80 border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">
                      Factory Direct Starting Price
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-[#1F3B6B]">
                        {quickViewProduct.priceFormatted ||
                          `₹${(quickViewProduct.startingPrice || 65000).toLocaleString("en-IN")}`}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        (Custom Millwork)
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    {quickViewProduct.leadTime || "4 Weeks Handover"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {quickViewProduct.shortDescription}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Engineering Highlights
                  </span>
                  <div className="space-y-1">
                    {quickViewProduct.features?.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dimension Guide */}
                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900">
                  <Ruler className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <strong className="font-semibold">Dimensions: </strong>
                    <span className="text-blue-800">{quickViewProduct.dimensionsGuide}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1F3B6B] hover:bg-[#15294b] text-white py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#EEC10E]" />
                    <span>Add to Project Quote Basket</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
                      isFavorited
                        ? "bg-rose-50 border-rose-300 text-rose-600"
                        : "bg-white border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-200"
                    }`}
                    aria-label="Add to moodboard"
                  >
                    <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <Link
                    href={`/products/${quickViewProduct.slug}`}
                    onClick={closeQuickView}
                    className="text-[#1F3B6B] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View Complete Product Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(
                      `Hello, I would like to enquire about the ${quickViewProduct.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold inline-flex items-center gap-1 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Ask Architect on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
