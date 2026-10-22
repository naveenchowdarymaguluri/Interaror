"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ShoppingBag,
  Trash2,
  ArrowRight,
  MessageCircle,
  FileSpreadsheet,
  ShieldCheck,
  Plus,
  Minus,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { companyConfig, getWhatsAppUrl } from "@/data/companyData";

export default function CartDrawer() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    cartTotal,
    cartCount,
    openConsultation,
  } = useStore();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemsSummary = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.title} (Qty: ${item.quantity}, Finish: ${
            item.selectedFinish || "Standard"
          }, Est: ₹${((item.product.startingPrice || 65000) * item.quantity).toLocaleString("en-IN")})`
      )
      .join("\n");

    const message = `Hello Terraform Modular! I would like to request an official project BOQ and site estimate for these items:\n\n${itemsSummary}\n\nEstimated Subtotal: ₹${cartTotal.toLocaleString(
      "en-IN"
    )}\n\nPlease connect me with an interior architect to schedule site measurement.`;

    const cleanPhone = companyConfig.whatsappNumber.replace(/[^0-9]/g, "");
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="px-6 py-5 bg-[#122442] text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#EEC10E]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Project Quote Basket</h3>
                <p className="text-xs text-slate-300">
                  {cartCount} item{cartCount === 1 ? "" : "s"} selected for quotation
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close quote basket"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 text-slate-500 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800">Your Basket is Empty</h4>
                  <p className="text-xs text-slate-500 max-w-xs mt-1">
                    Explore our modular kitchens, custom wardrobes, and luxury furniture to add items to your project estimate.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 bg-[#1F3B6B] hover:bg-[#15294b] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                >
                  Browse Modular Catalog
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                  <span className="font-semibold text-slate-500">SELECTED MODULES</span>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 font-semibold transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                {cart.map((item) => {
                  const unitPrice = item.product.startingPrice || 65000;
                  const itemTotal = unitPrice * item.quantity;

                  return (
                    <div
                      key={item.product.id}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex gap-4 transition-all hover:border-[#EEC10E]/60"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                        <Image
                          src={item.product.primaryImage}
                          alt={item.product.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs font-bold text-slate-900 truncate">
                              {item.product.title}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-slate-400 hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="inline-block text-[10px] text-slate-500 mt-0.5">
                            Finish: <strong className="text-slate-700">{item.selectedFinish}</strong>
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="text-slate-500 hover:text-slate-800"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-slate-800 px-1">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="text-slate-500 hover:text-slate-800"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-xs font-extrabold text-[#1F3B6B]">
                              ₹{itemTotal.toLocaleString("en-IN")}
                            </span>
                            <span className="block text-[9px] text-slate-400">
                              (Base Est.)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          {/* Footer actions */}
          {cart.length > 0 && (
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Estimated Total (Excl. Tax & Site Fits)</span>
                  <span className="text-base font-extrabold text-[#1F3B6B]">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  *Includes German Blum/Hettich motion fittings, 710-Grade BWP Marine Carcass, and factory assembly. Exact quotation issued post laser site survey.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Basket to WhatsApp for Instant BOQ</span>
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    openConsultation(
                      `Selected ${cartCount} items: ` +
                        cart.map((c) => c.product.title).join(", ")
                    );
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#1F3B6B] hover:bg-[#15294b] text-white py-3 px-4 rounded-xl font-bold text-xs transition-all shadow-sm"
                >
                  <span>Book Free Laser Measurement & 3D Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  10-Year Warranty
                </span>
                <span>•</span>
                <span>Zero Hidden Fees</span>
                <span>•</span>
                <span>45-Day Handover</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
