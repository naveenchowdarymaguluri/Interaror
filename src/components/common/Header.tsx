"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
} from "lucide-react";
import Logo from "./Logo";
import { companyConfig, getPhoneUrl, getWhatsAppUrl } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import { productCategories } from "@/data/productsData";
import EnquiryForm from "@/components/forms/EnquiryForm";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setProductsDropdown(false);
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
              German CNC & PUR Edge Sealing Precision
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] sm:text-xs">
            <a
              href={getPhoneUrl()}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#EEC10E] transition-colors"
              aria-label="Call Office Elevate"
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
              aria-label="WhatsApp Office Elevate"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="font-semibold">WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/60"
            : "bg-white/70 backdrop-blur-xs py-4 border-b border-slate-100/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive("/") && pathname === "/"
                  ? "text-[#1F3B6B] bg-slate-100/80 font-bold"
                  : "text-slate-700 hover:text-[#1F3B6B] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive("/about")
                  ? "text-[#1F3B6B] bg-slate-100/80 font-bold"
                  : "text-slate-700 hover:text-[#1F3B6B] hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive("/services")
                    ? "text-[#1F3B6B] bg-slate-100/80 font-bold"
                    : "text-slate-700 hover:text-[#1F3B6B] hover:bg-slate-50"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-[#EEC10E]" : ""
                  }`}
                />
              </Link>

              <div
                className={`absolute top-full left-0 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 py-3 px-2 z-50 transform origin-top transition-all duration-150 ease-out ${
                  servicesDropdown
                    ? "opacity-100 scale-y-100 pointer-events-auto visible"
                    : "opacity-0 scale-y-95 pointer-events-none invisible"
                }`}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1">
                  Design & Turnkey Services
                </div>
                {servicesData.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#1F3B6B] hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="font-bold text-slate-900">{service.title}</div>
                    <div className="text-[11px] text-slate-500 font-normal line-clamp-1">
                      {service.tagline}
                    </div>
                  </Link>
                ))}
                <div className="pt-2 border-t border-slate-100 mt-1 px-2">
                  <Link
                    href="/services"
                    className="text-xs font-bold text-[#1F3B6B] hover:text-[#EEC10E] flex items-center justify-between p-1.5"
                  >
                    <span>Explore All 8 Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <Link
                href="/products"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive("/products")
                    ? "text-[#1F3B6B] bg-slate-100/80 font-bold"
                    : "text-slate-700 hover:text-[#1F3B6B] hover:bg-slate-50"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsDropdown ? "rotate-180 text-[#EEC10E]" : ""
                  }`}
                />
              </Link>

              <div
                className={`absolute top-full left-0 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 py-3 px-2 z-50 transform origin-top transition-all duration-150 ease-out ${
                  productsDropdown
                    ? "opacity-100 scale-y-100 pointer-events-auto visible"
                    : "opacity-0 scale-y-95 pointer-events-none invisible"
                }`}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1">
                  Modular Furniture Range
                </div>
                {productCategories.slice(0, 6).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products#${cat.slug}`}
                    className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#1F3B6B] hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="font-bold text-slate-900">{cat.name}</div>
                    <div className="text-[11px] text-slate-500 font-normal line-clamp-1">
                      {cat.description}
                    </div>
                  </Link>
                ))}
                <div className="pt-2 border-t border-slate-100 mt-1 px-2">
                  <Link
                    href="/products"
                    className="text-xs font-bold text-[#1F3B6B] hover:text-[#EEC10E] flex items-center justify-between p-1.5"
                  >
                    <span>View All Modular Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive("/projects")
                  ? "text-[#1F3B6B] bg-slate-100/80 font-bold"
                  : "text-slate-700 hover:text-[#1F3B6B] hover:bg-slate-50"
              }`}
            >
              Our Projects
            </Link>

            <Link
              href="/manufacturing"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                isActive("/manufacturing")
                  ? "text-[#1F3B6B] bg-slate-100/90 font-bold"
                  : "text-slate-700 hover:text-[#1F3B6B] hover:bg-slate-50"
              }`}
            >
              Manufacturing
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setConsultationModalOpen(true)}
              className="relative overflow-hidden group bg-gradient-to-r from-[#EEC10E] via-[#F3C920] to-[#E5B708] hover:from-[#E5B708] hover:to-[#D4A705] text-[#1F3B6B] font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-gold-sm hover:shadow-gold-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setConsultationModalOpen(true)}
              className="bg-[#EEC10E] text-[#1F3B6B] font-bold text-[11px] uppercase tracking-wider px-3 py-2 rounded-lg"
            >
              Consult
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#1F3B6B] hover:bg-slate-100"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between animate-slide-left">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-1">
                <Link
                  href="/"
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Services (8 Core Offerings)
                </Link>
                <Link
                  href="/products"
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Products & Modular Solutions
                </Link>
                <Link
                  href="/projects"
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Our Projects Portfolio
                </Link>
                <Link
                  href="/manufacturing"
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Manufacturing & Craftsmanship
                </Link>
                <Link
                  href="/estimator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Interior Budget Estimator</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">Interactive</span>
                </Link>
                <Link
                  href="/#deep-explore"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#EEC10E]" />
                    <span>3D Deep Interior Explorer</span>
                  </span>
                  <span className="text-[10px] bg-[#EEC10E]/20 text-[#1F3B6B] font-extrabold px-2 py-0.5 rounded">3D Tour</span>
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Design Ideas & Editorial Guides
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultationModalOpen(true);
                }}
                className="w-full bg-[#EEC10E] text-[#1F3B6B] font-extrabold text-sm py-3.5 rounded-xl shadow text-center"
              >
                Get Free Consultation
              </button>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <a
                  href={getPhoneUrl()}
                  className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-slate-100 text-slate-800 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EEC10E]" />
                  Call Now
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-emerald-50 text-emerald-700 font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Quick Consultation Modal */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto relative shadow-2xl">
            <button
              type="button"
              onClick={() => setConsultationModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 text-lg font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>
            <div className="mb-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Direct Lead Consultation
              </span>
              <h3 className="text-2xl font-black text-[#1F3B6B] mt-1">
                Book a Free Design Consultation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Share your space details and our design consultant will reach out with layout concepts and itemized quotation.
              </p>
            </div>

            <EnquiryForm
              initialProjectType="Complete Home Interiors"
              sourceContext="Global Header CTA Modal"
              onSuccess={() => {
                setTimeout(() => setConsultationModalOpen(false), 3000);
              }}
              compact={true}
            />
          </div>
        </div>
      )}
    </>
  );
}
