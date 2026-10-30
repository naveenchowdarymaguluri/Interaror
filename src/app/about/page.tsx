import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Compass,
  Award,
  ShieldCheck,
  CheckCircle2,
  Users,
  Factory,
  ArrowRight,
  Target,
  Sparkles,
  Layers,
  Ruler,
  Clock,
  Phone,
  MessageCircle,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { companyConfig, getWhatsAppUrl, getPhoneUrl } from "@/data/companyData";

export const metadata: Metadata = {
  title: "About Atelier | Craftsmanship & Engineering Heritage",
  description:
    "Learn about Terraform Modular Atelier, our Swiss CAD precision, Northern Italian artisanal joinery heritage, and commitment to enduring interior architecture.",
};

const PROTOCOL_STEPS = [
  {
    step: "Stage 01",
    title: "Timber Curing & Acoustic Core Selection",
    description:
      "Raw European walnuts and rift-sawn oaks rest in climate-calibrated conditioning chambers for 180 days to equalize internal moisture at 7.8% before any milling begins.",
    metric: "180 Days Stabilization",
  },
  {
    step: "Stage 02",
    title: "Sub-Millimeter 5-Axis Diamond CNC Profiling",
    description:
      "German Homag beam saws and robotic diamond cutting heads carve shadow gaps, concealed hinge mortises, and stone-plinth joints to an exact 0.2mm tolerance.",
    metric: "±0.20 mm Tolerance",
  },
  {
    step: "Stage 03",
    title: "Artisanal Finishing & Vacuum Oil Preservation",
    description:
      "Master polishers hand-apply six cycles of organic plant oils and beeswax, deep-curing the wood pores to achieve a silky satin tactile sheen that resists moisture and stains.",
    metric: "6-Cycle Hand Finish",
  },
  {
    step: "Stage 04",
    title: "Factory Dry-Fitting & White-Glove Installation",
    description:
      "Every kitchen island, wardrobe wall, and media console is completely assembled and laser-measured inside our 14,000m² factory floor prior to protective crating and site delivery.",
    metric: "100% Pre-Assembled",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FBF9F5] text-[#1B1C1A] pb-24">
      {/* Top Heritage Breadcrumbs & Sub-Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumbs items={[{ label: "About Atelier & Craftsmanship" }]} />
      </section>

      {/* Hero Editorial Composition */}
      <section className="relative w-full overflow-hidden pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4 pb-12">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#EEC10E]">
                MANUFACTURE ARCHITECTURALE • EST. 2012
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[62px] leading-[1.1] text-[#122442] tracking-tight">
                The Marriage of Artisanal Craftsmanship and Industrial Precision.
              </h1>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="font-sans text-sm sm:text-base text-[#4A463F] leading-relaxed pb-3">
                Founded at the intersection of Swiss micro-engineering and Northern Italian architectural joinery, Terraform Modular Atelier transforms natural stones, noble woods, and precision metallurgy into modular spatial sanctuaries of permanent grace.
              </p>
              <div className="flex items-center gap-4 text-xs font-sans uppercase tracking-widest text-[#7C766E] font-semibold">
                <span>ISO 9001</span>
                <span>•</span>
                <span>CE CERTIFIED</span>
                <span>•</span>
                <span>PEFC WOODS</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Composition Trio */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
            {/* Main Large Frame */}
            <div className="md:col-span-8 relative group overflow-hidden rounded-xl shadow-xl bg-stone-900 h-[380px] sm:h-[480px] lg:h-[540px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsHoezGCr8gvsWMH4xO_rqGMDdXekIm8DVdYL6bcUt_pZnXtmQJ75oYUWmV3itgYyaHF_UJvR0yckRjQWt72OMMfnfL3XJNbgqETlZQRop7nbwXavQXxc5976afkUz_RzdzsnTDxknPJFMnz8h1X3vjIyPfDXLKnDCRHY-Sh6xBSHrKhVLGpNmxHINqnn760owJ0oNCgiHLpiGepO5LNDhjnV0yTLmHzVBA08QA6xa"
                alt="Architectural Joinery Workshop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between text-white">
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#EEC10E] font-bold block mb-1">
                    Assembly Bay 03 // Precision Engineering
                  </span>
                  <p className="font-serif text-xl sm:text-2xl">
                    Dry-Fitting Modular Façades & Architectural Ribs
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end">
                  <span className="font-sans text-[10px] text-slate-300 uppercase tracking-widest">
                    Miter Tolerance
                  </span>
                  <span className="font-serif text-2xl text-[#EEC10E] font-bold">
                    ±0.20 mm
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Stack Cards */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="relative group overflow-hidden rounded-xl shadow-md bg-stone-900 h-[180px] sm:h-[228px] lg:h-[258px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0-hleBPQkXwW0UusEzZuUOu3VKBCqUkFL-aic_uTz394ITBqi4mmgqOPnRrchbdCGRMQy8jmRTZKqPvcAswrRUOgKJD23hLFd3LZjsOxWMEBGxST1gKL1UdhB3Zsomx9mXhafOr744ZtZoOuWLYbeiCxVnOeY0n3Qpln1QV3JmPUA4qLrFujMVPsxto8PZU4UlHCv6xYNbjdzO_anBLjj-OEABlFecTOj9Fqzvjmi"
                  alt="Diamond CNC Milling"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#EEC10E]">
                    Robotic Diamond Milling
                  </span>
                  <p className="font-sans text-sm font-semibold mt-0.5">
                    Homag 5-Axis Diamond Calibrated Edge
                  </p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-md bg-stone-900 h-[180px] sm:h-[228px] lg:h-[258px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkOIKPgjkn7-HTbj_c3WZR-ED2PMvvcKhKLh0qvdEATwoQwkFMgcZaOs7SM1mnLf6VYlIC_QpCtHi-z_1s89K5wW2x4KV-tWXVsUJLs6rPbQz5MTiRDLi_YAPCwMFjpU2XBG8CdDevWyfkmExDSy8ogg4myD0NoK-AquyXDHHMmiDa-aOMJdAmFapmKcSvI8c4oryx1FCadptO0FI4CRojOYqBTVOuMZpcQCl-LTDh"
                  alt="Artisanal Hand Finishing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#EEC10E]">
                    Artisanal Hand Craft
                  </span>
                  <p className="font-sans text-sm font-semibold mt-0.5">
                    Six-Cycle Vacuum Oil Preservation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Ribbon */}
          <div className="mt-10 p-6 sm:p-8 rounded-xl bg-[#F5F3EF] border border-[#CDC5BC]/30 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#1B1C1A]">
              <div className="flex flex-col">
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#EEC10E] font-bold">
                  Fabrication Floor
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#122442]">
                    14,000
                  </span>
                  <span className="font-sans text-sm text-[#7C766E]">m²</span>
                </div>
                <span className="font-sans text-xs text-[#4A463F] mt-1">
                  Automated CNC joinery facility
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#EEC10E] font-bold">
                  Miter Tolerance
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#122442]">
                    0.2
                  </span>
                  <span className="font-sans text-sm text-[#7C766E]">mm</span>
                </div>
                <span className="font-sans text-xs text-[#4A463F] mt-1">
                  Laser calibrated joint reveals
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#EEC10E] font-bold">
                  Hardware Standards
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#122442]">
                    100%
                  </span>
                </div>
                <span className="font-sans text-xs text-[#4A463F] mt-1">
                  Blum & Hettich German fittings
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#EEC10E] font-bold">
                  Warranty Guarantee
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#122442]">
                    10
                  </span>
                  <span className="font-sans text-sm text-[#7C766E]">Years</span>
                </div>
                <span className="font-sans text-xs text-[#4A463F] mt-1">
                  Full carcass structural protection
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Protocol Section */}
      <section className="py-20 bg-white border-y border-[#CDC5BC]/30" id="factory-tour">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#EEC10E] block">
              Disciplined Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#122442] mt-1 tracking-tight">
              Four-Stage Production Protocol
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4A463F] mt-3">
              How our factory-engineered joinery prevents the warping, delamination, and human errors common in traditional carpentry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROTOCOL_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#FBF9F5] border border-[#CDC5BC]/30 hover:border-[#EEC10E]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#EEC10E] font-bold">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-[#122442] mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-[#4A463F] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#CDC5BC]/30">
                  <span className="font-sans text-[11px] font-bold text-[#122442]">
                    {step.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20">
        <div className="bg-[#122442] text-white p-8 sm:p-12 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#EEC10E]">
              Private Showroom Consultation
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white">
              Experience the Tactile Materials in Person
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              Touch real Navona travertine slabs, rift-sawn smoked walnuts, and soft-closing titanium drawer tracks at our design studios.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#EEC10E] hover:bg-[#d9ae0b] text-[#122442] font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-md shadow-md transition-all text-center"
            >
              Book Studio Appointment
            </Link>
            <a
              href={getWhatsAppUrl("Hello, I would like to schedule a private studio appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-md border border-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
