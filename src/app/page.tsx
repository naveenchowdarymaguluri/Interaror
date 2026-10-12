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
  ChevronUp,
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

const FAQ_ITEMS = [
  {
    q: "What interior design and modular furniture services does Office Elevate provide?",
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
  const [showConsultModal, setShowConsultModal] = useState<boolean>(false);

  const filteredProjects =
    activeProjectFilter === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === activeProjectFilter);

  return (
    <div className="flex flex-col w-full bg-[#FEFEFE]">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-[#1F3B6B]">
                <span className="w-2 h-2 rounded-full bg-[#EEC10E]" />
                <span>Interior Architecture & Modular Joinery</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F3B6B] tracking-tight leading-[1.12]">
                Thoughtfully Designed Spaces.{" "}
                <span className="text-slate-900 block mt-2">
                  Beautifully Crafted Interiors.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                From modular kitchens and custom wardrobes to complete home and office interiors, Office Elevate brings together thoughtful design, quality craftsmanship and functional solutions tailored to your space.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowConsultModal(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] font-extrabold text-sm px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#1F3B6B] font-bold text-sm px-7 py-4 rounded-xl border border-slate-200 shadow-sm transition-all"
                >
                  <span>Explore Our Projects</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 max-w-lg">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#1F3B6B]">0.5mm</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">CNC Precision</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#1F3B6B]">100%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">BWP Marine Carcass</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#1F3B6B]">10 Yrs*</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Hardware Standard</div>
                </div>
              </div>
            </div>

            {/* Right Architectural Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] max-w-md lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Office Elevate Contemporary Modular Interior"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3B6B]/80 via-transparent to-transparent" />

                {/* Overlaid Floating Architectural Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#EEC10E] block">
                        Featured Execution
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1F3B6B]">
                        Contemporary Penthouse & Modular Kitchen
                      </h4>
                    </div>
                    <Link
                      href="/projects"
                      className="w-8 h-8 rounded-full bg-[#1F3B6B] text-white flex items-center justify-center flex-shrink-0 hover:bg-[#EEC10E] hover:text-[#1F3B6B] transition-colors"
                      aria-label="View Project"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Geometry */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#EEC10E]/15 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-36 h-36 bg-[#1F3B6B]/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST & CAPABILITIES METRICS */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {companyConfig.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-left transition-all hover:border-slate-200"
              >
                <div className="text-3xl sm:text-4xl font-black text-[#1F3B6B] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-normal">
                  {metric.description}
                </div>
                {metric.isPlaceholder && (
                  <div className="mt-2 text-[10px] text-slate-400 font-mono">
                    [Configurable Business Metric]
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F3B6B]/10 text-[#1F3B6B] text-xs font-bold uppercase tracking-wider mb-2">
                <span>Our Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] tracking-tight">
                Comprehensive Interior & Modular Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
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

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#1F3B6B]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {service.category}
                    </div>
                  </div>
                  <div className="p-5 text-left">
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-[#1F3B6B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[#1F3B6B] hover:text-[#EEC10E] pt-3 transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCTS & MODULAR SOLUTIONS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Precision Millwork Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
              Modular Furniture Built for Modern Life
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Factory-manufactured modular cabinets, wardrobes, and executive desking engineered with moisture-curing PUR edge banding and high-durability substrates.
            </p>
          </div>

          {/* Product Categories Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products#${cat.slug}`}
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#EEC10E] transition-all hover:shadow-lg text-left flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 bg-slate-200">
                    <Image
                      src={cat.heroImage}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#1F3B6B] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-bold text-[#1F3B6B] flex items-center gap-1 group-hover:text-[#EEC10E] transition-colors">
                  <span>View Range</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#1F3B6B] hover:bg-[#122442] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow transition-all"
            >
              <span>Explore Complete Furniture Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#EEC10E]" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PROJECTS WITH FILTERS */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Portfolio of Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
                Featured Completed Projects
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Explore our residential and commercial interior transformations. Each space illustrates tailored spatial planning and materials.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F3B6B] hover:text-[#EEC10E] transition-colors"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {[
              "All Projects",
              "Kitchens",
              "Living Rooms",
              "Bedrooms",
              "Wardrobes",
              "Office Interiors",
              "Commercial Spaces",
            ].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveProjectFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeProjectFilter === filter
                    ? "bg-[#1F3B6B] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1F3B6B] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                      {project.category}
                    </div>
                    {project.isDemonstrationProject && (
                      <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[9px] px-2 py-0.5 rounded font-mono">
                        Demo Portfolio Case
                      </div>
                    )}
                  </div>
                  <div className="p-5 text-left">
                    <div className="text-[11px] text-slate-500 font-medium">
                      {project.location} • {project.area}
                    </div>
                    <h3 className="font-bold text-base text-slate-900 mt-1 group-hover:text-[#1F3B6B] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {project.designBrief}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                  <div className="inline-flex items-center justify-between w-full text-xs font-bold text-[#1F3B6B] group-hover:text-[#EEC10E] pt-3 transition-colors">
                    <span>View Project Specifications</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE OFFICE ELEVATE */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              The Office Elevate Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
              Engineered Precision. Architectural Design.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Why clients, architects, and corporate organizations trust us with their critical interior investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Ruler,
                title: "Customized Space Planning",
                desc: "No rigid template cabinets. Every module is modeled to your spatial dimensions and functional routines.",
              },
              {
                icon: Layers,
                title: "Certified Core Substrates",
                desc: "IS:710 Marine BWP Plywood for wet zones and ultra-dense HDHMR boards that never swell or warp.",
              },
              {
                icon: Cpu,
                title: "Computerized Factory Precision",
                desc: "Industrial beam saws and PUR edge banding maintain 0.5mm tolerances and water-sealed seams.",
              },
              {
                icon: ShieldCheck,
                title: "Transparent BOQ Quotations",
                desc: "Itemized line items without hidden lump sums. You know exactly what substrates and hardware you pay for.",
              },
              {
                icon: Factory,
                title: "Fast, Dust-Free Installation",
                desc: "Pre-fabricated knock-down units fit cleanly on-site within days, saving months of disruptive carpentry.",
              },
              {
                icon: Sparkles,
                title: "European Motion Hardware",
                desc: "Tested Blum and Hettich soft-closing hinges and tandem boxes built for 100,000+ flawless operations.",
              },
              {
                icon: Briefcase,
                title: "Single Project Director",
                desc: "Dedicated project manager coordinating civil, electrical, false ceiling, and modular teams.",
              },
              {
                icon: CheckCircle2,
                title: "Verified After-Sales Support",
                desc: "Dedicated customer service team for hardware adjustments and long-term peace of mind.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-[#EEC10E] transition-all hover:shadow-md text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-white text-[#1F3B6B] border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-5 h-5 text-[#EEC10E]" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">{feature.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: MANUFACTURING & CRAFTSMANSHIP */}
      <section className="py-20 bg-[#122442] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Industrial Manufacturing Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Crafted in the Factory. Perfected at Your Space.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                By investing in computerized beam saws, throughfeed PUR edge banders, and multi-spindle boring machinery, Office Elevate delivers consistent quality that traditional on-site carpenters cannot replicate.
              </p>
            </div>
            <div className="lg:col-span-5 text-left lg:text-right">
              <Link
                href="/manufacturing"
                className="inline-flex items-center gap-2 bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                <span>Tour Our Manufacturing Process</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Manufacturing Step Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {manufacturingSteps.slice(0, 3).map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#EEC10E]">{step.stepNumber}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                      Precision Phase
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">{step.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-amber-300/90 font-medium">
                  {step.technicalHighlight}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowConsultModal(true)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <span>Discuss Your Custom Furniture Requirements</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EEC10E]" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW IT WORKS (6-STEP JOURNEY) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Streamlined Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
              How Your Project Moves from Vision to Handover
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              A transparent 6-stage project journey. Actual schedules depend on property scope, civil approvals, and site readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                desc: "We explore your floor plan, family requirements, functional storage needs, and preferred aesthetic style.",
              },
              {
                step: "02",
                title: "Site Visit & Laser Audit",
                desc: "Our architectural survey team takes laser measurements, audits wall levels, electrical points, and plumbing lines.",
              },
              {
                step: "03",
                title: "3D Design & Material Selection",
                desc: "Explore photo-realistic 3D visualizations, touch physical laminate and veneer samples, and finalize fittings.",
              },
              {
                step: "04",
                title: "Quotation & Design Sign-off",
                desc: "Transparent itemized BOQ with exact material specifications, hardware brands, and milestone payment schedules.",
              },
              {
                step: "05",
                title: "Factory Millwork Execution",
                desc: "Computerized beam saw cutting, PUR edge sealing, boring, and trial assembly in our precision facility.",
              },
              {
                step: "06",
                title: "Installation & 7-Point Handover",
                desc: "Clean knock-down on-site assembly, thorough quality snag audit, deep cleaning, and warranty key handover.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-left hover:border-[#1F3B6B] transition-all"
              >
                <div className="text-3xl font-black text-[#1F3B6B] mb-2">{item.step}</div>
                <h3 className="font-bold text-base text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS & CLIENT TRUST */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-1 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-xs text-slate-500 mt-2 font-mono">
              [Configurable Review Section: Verified project feedback published as projects are handed over]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Office Elevate designed and installed our 3BHK modular kitchen and wardrobes. The PUR edge banding quality and Blum hardware operation are flawless.",
                name: "Anand & Priya R.",
                property: "Prestige Lakeview, Bangalore",
                type: "Complete Home Interiors",
              },
              {
                quote:
                  "For our 60-seat tech office, we needed durable workstations and a statement boardroom table. Office Elevate delivered right on schedule with zero site mess.",
                name: "Vikram Mehta",
                property: "Horizon Tech Office Fit-out",
                type: "Corporate Office Interiors",
              },
              {
                quote:
                  "The transparent BOQ without hidden costs made decision-making simple. The 3D render matched the final handover down to the LED strip warmth.",
                name: "Sneha Kulkarni",
                property: "Sobha Dream Acres",
                type: "Modular Kitchen & Wardrobes",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm text-left flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#EEC10E] mb-4 opacity-70" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-[#1F3B6B]">{t.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.property}</div>
                  <div className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider mt-1">
                    {t.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: HIGH-IMPACT CONSULTATION CTA BANNER */}
      <section className="py-20 bg-[#1F3B6B] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEC10E]/20 text-[#EEC10E] text-xs font-bold uppercase tracking-wider">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let&apos;s Create a Space That Works Beautifully for You.
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Tell us about your space, style and requirements. Our team will help you explore the right interior and furniture solutions with layout concepts and transparent pricing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => setShowConsultModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] font-extrabold text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl("Hello Office Elevate, I would like to book an interior design consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm px-8 py-4 rounded-xl shadow transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Subtle Decorative Geometry */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#EEC10E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </section>

      {/* SECTION 11: PRACTICAL FAQ ACCORDION */}
      <section className="py-20 bg-white">
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
                  className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all bg-slate-50/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1F3B6B] hover:text-[#EEC10E] transition-colors"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-3 animate-fade-in">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {showConsultModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto relative shadow-2xl">
            <button
              type="button"
              onClick={() => setShowConsultModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 text-lg font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>
            <div className="mb-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                Direct Consultation Booking
              </span>
              <h3 className="text-2xl font-black text-[#1F3B6B] mt-1">
                Book a Free Design Consultation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill in your details and an Office Elevate interior consultant will contact you within 24 business hours.
              </p>
            </div>

            <EnquiryForm
              initialProjectType="Complete Home Interiors"
              sourceContext="Homepage Hero Modal"
              onSuccess={() => {
                setTimeout(() => setShowConsultModal(false), 3000);
              }}
              compact={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
