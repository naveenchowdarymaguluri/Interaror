import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import Logo from "./Logo";
import { companyConfig, getPhoneUrl, getWhatsAppUrl } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import { productCategories } from "@/data/productsData";

export default function Footer() {
  return (
    <footer className="bg-[#122442] text-slate-300 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="dark" showTagline={true} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Office Elevate delivers thoughtful interior architecture and factory-engineered modular furniture. From bespoke residential living spaces and modular kitchens to corporate headquarters, we unite architectural integrity with precision manufacturing.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#EEC10E]" />
                BWP Marine Plywood
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#EEC10E]" />
                Zero-Joint PUR Edge Banding
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#EEC10E]" />
                German Motion Fittings
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={getPhoneUrl()}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#EEC10E]" />
                <span>{companyConfig.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Core Services Col */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#EEC10E] uppercase">
              Interior Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 hover:text-[#EEC10E] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#EEC10E] hover:underline font-semibold inline-flex items-center gap-1 pt-1"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Modular Products Col */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#EEC10E] uppercase">
              Modular Furniture
            </h4>
            <ul className="space-y-2.5 text-xs">
              {productCategories.slice(0, 7).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products#${cat.slug}`}
                    className="text-slate-300 hover:text-[#EEC10E] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-[#EEC10E] hover:underline font-semibold inline-flex items-center gap-1 pt-1"
                >
                  <span>Explore Furniture Catalog</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#EEC10E] uppercase">
              Studio & Workshop
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EEC10E] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyConfig.address.line1}, {companyConfig.address.line2},{" "}
                  {companyConfig.address.city}, {companyConfig.address.state} –{" "}
                  {companyConfig.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EEC10E] flex-shrink-0" />
                <a href={getPhoneUrl()} className="hover:text-white transition-colors">
                  {companyConfig.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EEC10E] flex-shrink-0" />
                <a href={`mailto:${companyConfig.email}`} className="hover:text-white transition-colors">
                  {companyConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#EEC10E] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{companyConfig.workingHours.days}</div>
                  <div className="text-slate-400">{companyConfig.workingHours.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links & Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/projects" className="hover:text-white transition-colors">
              Our Projects
            </Link>
            <Link href="/manufacturing" className="hover:text-white transition-colors">
              Manufacturing
            </Link>
            <Link href="/estimator" className="hover:text-white transition-colors">
              Budget Estimator
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Design Ideas
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <div className="text-center md:text-right">
            © {new Date().getFullYear()} Office Elevate. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
