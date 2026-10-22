"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Ruler,
  ChevronDown,
  Sliders,
  Award,
  Factory,
  Home,
  Briefcase,
  Star,
  Quote,
} from "lucide-react";
import { companyConfig, getPhoneUrl, getWhatsAppUrl } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import { productCategories, productsData } from "@/data/productsData";
import { projectsData } from "@/data/projectsData";
import { manufacturingSteps } from "@/data/manufacturingData";
import EnquiryForm from "@/components/forms/EnquiryForm";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import ScrollReveal from "@/components/common/ScrollReveal";
import DeepInteriorExplorer from "@/components/interactive/DeepInteriorExplorer";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import MaterialFinishesVisualizer from "@/components/interactive/MaterialFinishesVisualizer";
import HeroShowroom from "@/components/interactive/HeroShowroom";
import SpotlightShowcase from "@/components/interactive/SpotlightShowcase";
import ThreeDIconBadge from "@/components/interactive/ThreeDIconBadge";
import CtaShowcase from "@/components/interactive/CtaShowcase";
import { useStore } from "@/context/StoreContext";

const FAQ_ITEMS = [
  {
    q: "What interior design and modular furniture services does Terraform Modular provide?",
    a: "We provide end-to-end residential interiors (complete apartments, villas, modular kitchens, luxury wardrobes, living & bedroom styling), commercial corporate workplaces (workstations, executive suites, conference rooms), turnkey execution, and custom OEM furniture manufacturing.",
  },
  {
    q: "Can furniture dimensions and internal cabinet configurations be customized?",
    a: "Yes. Every modular unit—from wardrobe partitions and kitchen tandem drawers to TV wall consoles—is custom-manufactured to your exact room dimensions and storage requirements down to the millimeter.",
  },
  {
    q: "Do you offer modular kitchen design with waterproof materials?",
    a: "Absolutely. For all kitchen base carcasses and sink modules, we specify 100% Boiling Water Proof (IS:710 certified BWP) Marine Plywood with moisture-curing PUR edge banding to guarantee complete water resistance.",
  },
  {
    q: "How is an interior project quotation calculated?",
    a: "Quotations are calculated transparently using an itemized Bill of Quantities (BOQ) based on actual square-foot millwork surface area, chosen core substrates (BWP Ply vs HDHMR), surface finishes (Laminate, Acrylic, Veneer, PU), and selected German hardware fittings. We do not use deceptive hidden lump sums.",
  },
  {
    q: "Do you provide on-site measurements and space visits?",
    a: "Yes. Following an initial concept discussion, our senior site architect visits your property with digital laser measuring tools to evaluate room dimensions, ceiling heights, electrical conduit points, and plumbing lines.",
  },
  {
    q: "What factors affect project timelines?",
    a: "Standard residential modular handover takes 45 to 60 working days post final 3D design and material approval. Actual timelines depend on the volume of civil demolition, gypsum ceiling complexity, custom finishes (such as PU paint curing), and site readiness.",
  },
  {
    q: "What materials and surface finishes can I choose from?",
    a: "Our portfolio spans anti-fingerprint super matt laminates, European high-gloss acrylics, polyurethane (PU) satin paints, natural wood veneers, sintered stone slabs, tinted fluted glass, and anodized aluminum profiles.",
  },
  {
    q: "Do you handle commercial and corporate office fit-outs?",
    a: "Yes. We design and manufacture modular desking clusters, director suites, boardroom AV tables, acoustic PET wall baffles, and cafeteria furniture for enterprises and growing businesses.",
  },
  {
    q: "How does factory manufacturing benefit me over on-site carpenter carpentry?",
    a: "Factory manufacturing ensures 0.5mm precision cutting with industrial beam saws, zero-joint PUR edge banding that prevents moisture peel, pre-drilled hardware alignment, and dust-free on-site assembly completed in days rather than months.",
  },
  {
    q: "How can I book a free design consultation?",
    a: "You can book directly by filling out our enquiry form, calling our studio at +91 98765 43210, or messaging us instantly on WhatsApp. Our design team will schedule an online or in-studio session.",
  },
];

export default function HomePage() {
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>("All Projects");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openConsultation } = useStore();

  const filteredProjects =
    activeProjectFilter === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === activeProjectFilter);

  return (
    <div className="flex flex-col w-full bg-[#FEFEFE]">
      {/* SECTION 1: INTERACTIVE HERO SHOWROOM (Inspired by supahero.io & styles.refero.design) */}
      <HeroShowroom />

      {/* SECTION 2: 3D ISOMETRIC VALUE PROPOSITIONS (Inspired by 3dicons.co) */}
      <section className="py-20 bg-stone-100/60 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EEC10E] block">
              Architectural Standards
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mt-1 tracking-tight">
              Why Discerning Homeowners Choose Terraform
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2">
              Factory-milled modular furniture combining aerospace-grade machinery tolerances with European hardware excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ThreeDIconBadge
              type="shield"
              subtitle="Durability Guarantee"
              title="10-Year Marine Carcass Warranty"
              description="100% Boiling Water Proof (IS:710 certified BWP) marine grade core substrate that never delaminates, warps, or rots in moisture-prone zones."
              stat="IS:710 Certified"
            />
            <ThreeDIconBadge
              type="speed"
              subtitle="Execution Reliability"
              title="Guaranteed 45-Day Handover"
              description="Precision factory pre-fabrication enables rapid on-site assembly within days rather than chaotic months of traditional carpentry."
              stat="Penalty Clause"
            />
            <ThreeDIconBadge
              type="precision"
              subtitle="Computerized Machining"
              title="0.5mm Digital CNC Precision"
              description="Computerized beam saws and multi-spindle drilling centers ensure immaculate alignment, zero-gap joints, and laser-accurate hinges."
              stat="Homag CNC"
            />
            <ThreeDIconBadge
              type="german"
              subtitle="Zero-Joint Edge Sealing"
              title="Moisture-Cured PUR Technology"
              description="Seamless PUR edge banding bonds at microscopic molecular levels, completely preventing water penetration and steam swelling."
              stat="Blum / Hettich"
            />
            <ThreeDIconBadge
              type="sustainable"
              subtitle="Eco-Friendly Substrates"
              title="FSC Certified Sustainable Woods"
              description="Ethically sourced plantation hardwoods and E1 low-emission resins ensure clean indoor air quality safe for families and children."
              stat="Eco Conscious"
            />
            <ThreeDIconBadge
              type="guarantee"
              subtitle="Honest Pricing"
              title="Itemized BOQ with Zero Hidden Fees"
              description="Clear square-footage breakdowns based on actual core substrates and finishes. No arbitrary lump sums or mid-project surprises."
              stat="Price Match"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: SPOTLIGHT PRODUCTS HORIZONTAL CAROUSEL (Inspired by scrolltide.co) */}
      <SpotlightShowcase />

      {/* SECTION 4: TRUST & CAPABILITIES METRICS */}
      <section className="bg-white py-16 border-b border-stone-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {companyConfig.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden p-6 sm:p-7 rounded-3xl bg-stone-50 border border-stone-200 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#EEC10E] hover:bg-white"
                >
                  <div className="text-3xl sm:text-5xl font-black text-[#1F3B6B] tracking-tight group-hover:text-stone-900 transition-colors">
                    <AnimatedCounter value={metric.value} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-800 mt-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-stone-500 mt-1 leading-normal">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5: INTERACTIVE DEEP INTERIOR EXPLORER */}
      <section className="py-20 bg-stone-50/70 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Interactive Spatial Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
              Inspect Internal Joinery & Hardware Details
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Explore cabinet carcass joinery, Blum soft-closing drawer runners, and hidden wire channels in high fidelity.
            </p>
          </div>

          <DeepInteriorExplorer />
        </div>
      </section>

      {/* SECTION 6: BEFORE & AFTER SLIDER & MATERIAL VISUALIZER */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Turnkey Transformation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
                From Bare Shell to Architectural Reality
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                Slide horizontally to see how raw civil spaces evolve into refined living environments with precision millwork.
              </p>
            </div>
            <BeforeAfterSlider />
          </div>

          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Finishes Library
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
                Authentic Material Swatches & Surface Metrics
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                Inspect scratch resistance, moisture tolerance, and lighting behavior across our premium finishes.
              </p>
            </div>
            <MaterialFinishesVisualizer />
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICES OVERVIEW */}
      <section className="py-20 bg-stone-50/60 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Our Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] tracking-tight mt-1">
                Comprehensive Interior & Modular Solutions
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl">
                Every service is backed by rigorous space planning, 3D visualization, factory joinery production, and single-point project accountability.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F3B6B] hover:text-[#EEC10E] transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, idx) => (
              <ScrollReveal key={service.slug} delayMs={idx * 60}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl hover:border-[#EEC10E]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full">
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#1F3B6B]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-10">
                        {service.category}
                      </div>
                    </div>
                    <div className="p-5 text-left">
                      <h3 className="font-bold text-base text-stone-900 group-hover:text-[#1F3B6B] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-stone-100 mt-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-[#1F3B6B] group-hover:text-[#EEC10E] pt-3 transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PORTFOLIO SHOWCASE */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Executed Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] tracking-tight mt-1">
                Completed Residences & Commercial Fit-Outs
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F3B6B] hover:text-[#EEC10E] transition-colors"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.slice(0, 3).map((project, idx) => (
              <ScrollReveal key={project.slug} delayMs={idx * 70}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl hover:border-[#EEC10E]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#1F3B6B] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm z-10">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-5 text-left">
                      <div className="text-[11px] text-stone-500 font-medium">
                        {project.location} • {project.area}
                      </div>
                      <h3 className="font-bold text-base text-stone-900 mt-1 group-hover:text-[#1F3B6B] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                        {project.designBrief}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                    <div className="inline-flex items-center justify-between w-full text-xs font-bold text-[#1F3B6B] group-hover:text-[#EEC10E] pt-3 transition-colors">
                      <span>View Specifications & Blueprint</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: HIGH-CONVERTING CTA BANNER (Inspired by cta.gallery) */}
      <CtaShowcase />

      {/* SECTION 10: PRACTICAL FAQ ACCORDION */}
      <section className="py-20 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
              Practical Answers on Process, Quality & Cost
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#EEC10E]/60 bg-white shadow-md"
                      : "border-stone-200/80 bg-white/70 hover:border-stone-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1F3B6B] hover:text-[#EEC10E] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-amber-500" : "text-stone-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
