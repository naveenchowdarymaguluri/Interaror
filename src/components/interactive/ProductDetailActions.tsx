"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Heart,
  MessageCircle,
  ShieldCheck,
  Check,
  Sparkles,
  Download,
  Calendar,
} from "lucide-react";
import { ProductItem } from "@/data/productsData";
import { useStore } from "@/context/StoreContext";
import { getWhatsAppUrl } from "@/data/companyData";

interface Props {
  product: ProductItem;
}

export default function ProductDetailActions({ product }: Props) {
  const { addToCart, toggleWishlist, isInWishlist, openLookbook, openConsultation } = useStore();
  const [selectedFinish, setSelectedFinish] = useState(
    product.finishesAvailable?.[0] || "Standard"
  );
  const [selectedMaterial, setSelectedMaterial] = useState(
    product.materialsAvailable?.[0] || "BWP Marine Ply"
  );

  const isFavorited = isInWishlist(product.id);

  const handleAdd = () => {
    addToCart(product, selectedFinish, selectedMaterial);
  };

  return (
    <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/90 shadow-sm space-y-6">
      {/* Price & Lead time */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-200">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 block">
            Starting Price
          </span>
          <span className="text-2xl sm:text-3xl font-black text-[#1F3B6B]">
            {product.priceFormatted || "Custom Millwork"}
          </span>
          <span className="block text-[11px] text-stone-600">
            *Factory direct with German hardware
          </span>
        </div>
        <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
          {product.leadTime || "4 Weeks Handover"}
        </span>
      </div>

      {/* Surface Finish Swatches */}
      {product.swatches && product.swatches.length > 0 && (
        <div className="space-y-2">
          <label className="text-xs font-bold text-stone-800 block">
            Select Surface Finish: <span className="text-[#1F3B6B]">{selectedFinish}</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {product.swatches.map((swatch) => (
              <button
                key={swatch.name}
                type="button"
                onClick={() => setSelectedFinish(swatch.name)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                  selectedFinish === swatch.name
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
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

      {/* Substrate Options */}
      {product.materialsAvailable && product.materialsAvailable.length > 0 && (
        <div className="space-y-2">
          <label className="text-xs font-bold text-stone-800 block">
            Core Substrate Material: <span className="text-[#1F3B6B]">{selectedMaterial}</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.materialsAvailable.map((mat) => (
              <button
                key={mat}
                type="button"
                onClick={() => setSelectedMaterial(mat)}
                className={`px-3 py-2 rounded-xl text-left border text-xs font-semibold transition-all ${
                  selectedMaterial === mat
                    ? "bg-[#1F3B6B] text-white border-[#1F3B6B] shadow-sm"
                    : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
                }`}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1F3B6B] hover:bg-[#15294b] text-white py-3.5 px-4 rounded-2xl font-bold text-xs shadow-md transition-all hover:scale-[1.01]"
          >
            <ShoppingBag className="w-4 h-4 text-[#EEC10E]" />
            <span>Add to Project Quote Basket</span>
          </button>

          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
              isFavorited
                ? "bg-rose-50 border-rose-300 text-rose-600"
                : "bg-white border-stone-200 text-stone-400 hover:text-rose-500"
            }`}
            aria-label="Add to moodboard"
          >
            <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => openConsultation(`Inquiry for ${product.title}`)}
          className="w-full flex items-center justify-center gap-2 bg-[#EEC10E] hover:bg-[#dfb40a] text-stone-950 py-3 px-4 rounded-2xl font-extrabold text-xs shadow-sm transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Free Laser Measurement & 3D Consult</span>
        </button>

        <a
          href={getWhatsAppUrl(
            `Hello Terraform Modular, I am viewing ${product.title} with finish "${selectedFinish}". Can you share full specs and price quotation?`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl font-bold text-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask Architect on WhatsApp</span>
        </a>
      </div>

      {/* Trust Badges */}
      <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-600 font-medium">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          10-Yr Guarantee
        </span>
        <span>•</span>
        <span>0.5mm CNC Tolerances</span>
        <span>•</span>
        <span>Blum/Hettich Motion</span>
      </div>
    </div>
  );
}
