"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Compass,
  Boxes,
  Briefcase,
  Factory,
  Calculator,
  Search,
  ShoppingBag,
  Sparkles,
  BookOpen,
} from "lucide-react";
import Logo from "./Logo";
import { companyConfig, getPhoneUrl, getWhatsAppUrl } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import { productCategories, productsData } from "@/data/productsData";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { useStore } from "@/context/StoreContext";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMegaMenu, setProductsMegaMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const {
    cartCount,
    setIsCartOpen,
    openSearch,
    openLookbook,
    isConsultationOpen,
    openConsultation,
    closeConsultation,
    consultationInitialNotes,
  } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawers on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsMegaMenu(false);
    setServicesDropdown(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#122442] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#EEC10E] animate-pulse inline-block" />
              Bespoke Residential & Commercial Interiors
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">
              German CNC & Zero-Joint PUR Edge Sealing Precision
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] sm:text-xs">
            <button
              onClick={openLookbook}
              className="hidden lg:inline-flex items-center gap-1.5 text-[#EEC10E] hover:text-amber-300 font-semibold transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Download 2026 Lookbook (PDF)</span>
            </button>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a
              href={getPhoneUrl()}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#EEC10E] transition-colors"
              aria-label="Call studio"
            >
              <Phone className="w-3.5 h-3.5 text-[#EEC10E]" />
              <span className="font-semibold">{companyConfig.displayPhone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              aria-label="WhatsApp enquiry"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="font-semibold">WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header - Glassmorphic Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-stone-200/80"
            : "bg-white/80 backdrop-blur-md py-4 border-b border-stone-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive("/") && pathname === "/"
                  ? "text-[#1F3B6B] bg-stone-100"
                  : "text-stone-700 hover:text-[#1F3B6B] hover:bg-stone-50"
              }`}
            >
              Home
            </Link>

            {/* Modular Products Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setProductsMegaMenu(true)}
              onMouseLeave={() => setProductsMegaMenu(false)}
            >
              <Link
                href="/products"
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive("/products")
                    ? "text-[#1F3B6B] bg-stone-100"
                    : "text-stone-700 hover:text-[#1F3B6B] hover:bg-stone-50"
                }`}
              >
                <span>Modular Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsMegaMenu ? "rotate-180" : ""}`} />
              </Link>

              {/* Mega-Menu Dropdown Panel */}
              {productsMegaMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] bg-white rounded-3xl shadow-2xl border border-stone-200 p-6 z-50 animate-fade-in-up">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#EEC10E] block">
                        Factory-Engineered Millwork
                      </span>
                      <h4 className="text-sm font-extrabold text-stone-900">
                        Modular Furniture Collections
                      </h4>
                    </div>
                    <Link
                      href="/products"
                      className="text-xs font-bold text-[#1F3B6B] hover:underline flex items-center gap-1"
                    >
                      <span>View All ({productsData.length} items)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Category Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {productCategories.slice(0, 6).map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products#${cat.slug}`}
                        className="group p-2.5 rounded-2xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all flex items-center gap-3"
                      >
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                          <Image
                            src={cat.heroImage}
                            alt={cat.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-xs font-bold text-stone-900 group-hover:text-[#1F3B6B] transition-colors truncate">
                            {cat.name}
                          </h5>
                          <span className="text-[10px] text-stone-600 block">
                            {cat.itemCount} Designs Available
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Mega Menu Footer Callout */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs bg-stone-50/80 -mx-6 -mb-6 px-6 py-3 rounded-b-3xl">
                    <span className="flex items-center gap-1.5 text-stone-600">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      100% BWP Marine Carcass with 10-Year Warranty
                    </span>
                    <button
                      onClick={openLookbook}
                      className="text-[#1F3B6B] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Download Spec Catalog</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Interior Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive("/services")
                    ? "text-[#1F3B6B] bg-stone-100"
                    : "text-stone-700 hover:text-[#1F3B6B] hover:bg-stone-50"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdown ? "rotate-180" : ""}`} />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-stone-200 p-3 z-50 animate-fade-in-up">
                  <div className="space-y-1">
                    {servicesData.slice(0, 5).map((srv) => (
                      <Link
                        key={srv.slug}
                        href={`/services/${srv.slug}`}
                        className="block px-3 py-2 rounded-xl text-xs font-medium text-stone-700 hover:bg-stone-50 hover:text-[#1F3B6B] transition-colors"
                      >
                        {srv.title}
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-stone-100">
                      <Link
                        href="/services"
                        className="block px-3 py-1.5 text-xs font-bold text-[#1F3B6B] hover:underline"
                      >
                        All Services Overview →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/manufacturing"
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive("/manufacturing")
                  ? "text-[#1F3B6B] bg-stone-100"
                  : "text-stone-700 hover:text-[#1F3B6B] hover:bg-stone-50"
              }`}
            >
              Factory & OEM
            </Link>

            <Link
              href="/projects"
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive("/projects")
                  ? "text-[#1F3B6B] bg-stone-100"
                  : "text-stone-700 hover:text-[#1F3B6B] hover:bg-stone-50"
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/estimator"
              className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive("/estimator")
                  ? "text-[#1F3B6B] bg-stone-100"
                  : "text-stone-700 hover:text-[#1F3B6B] hover:bg-stone-50"
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-[#EEC10E]" />
              <span>Cost Estimator</span>
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive("/contact")
                  ? "text-[#1F3B6B] bg-stone-100"
                  : "text-stone-700 hover:text-[#1F3B6B] hover:bg-stone-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Tools: Search, Basket, Consultation CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Trigger (Cmd+K) */}
            <button
              onClick={openSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-all border border-stone-200/80"
              aria-label="Search catalog"
            >
              <Search className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden sm:inline text-stone-500 font-normal">Search...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-mono text-stone-400 bg-white rounded border border-stone-200">
                ⌘K
              </kbd>
            </button>

            {/* Cart / Quote Basket Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-all border border-stone-200/80"
              aria-label="View project basket"
            >
              <ShoppingBag className="w-4 h-4 text-[#1F3B6B]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#EEC10E] text-stone-950 text-[10px] font-black flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Free Consult High-Contrast CTA */}
            <button
              onClick={() => openConsultation()}
              className="hidden md:inline-flex items-center gap-1.5 bg-[#1F3B6B] hover:bg-[#15294b] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EEC10E]" />
              <span>Free Consultation</span>
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in-up">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="px-3 py-2 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-50"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="px-3 py-2 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-50 flex items-center justify-between"
              >
                <span>Modular Products ({productsData.length})</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  Catalog
                </span>
              </Link>
              <Link
                href="/services"
                className="px-3 py-2 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-50"
              >
                Interior Services
              </Link>
              <Link
                href="/estimator"
                className="px-3 py-2 rounded-xl text-sm font-bold text-[#1F3B6B] bg-blue-50/60 hover:bg-blue-50 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#EEC10E]" />
                <span>Instant Cost Estimator</span>
              </Link>
              <Link
                href="/manufacturing"
                className="px-3 py-2 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-50"
              >
                Factory & OEM
              </Link>
              <Link
                href="/projects"
                className="px-3 py-2 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-50"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-50"
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full py-3 bg-[#1F3B6B] text-white text-xs font-bold rounded-xl text-center shadow-sm"
              >
                Book Free Site Survey & 3D Consult
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Free Consultation Modal */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <div
              onClick={closeConsultation}
              className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
            />
            <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl border border-stone-200">
              <div className="px-6 py-4 bg-[#122442] text-white flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#EEC10E]" />
                  <h3 className="text-sm font-bold text-white">Book Free 3D Design Consultation</h3>
                </div>
                <button
                  onClick={closeConsultation}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <EnquiryForm
                  sourceContext={consultationInitialNotes || "Enquiry from Navbar Consultation trigger"}
                  initialRequirements={consultationInitialNotes || ""}
                  onSuccess={() => {
                    setTimeout(() => closeConsultation(), 2500);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
