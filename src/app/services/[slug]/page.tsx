import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Ruler,
  Layers,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { getWhatsAppUrl } from "@/data/companyData";
import EnquiryForm from "@/components/forms/EnquiryForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Terraform Modular Interior Services`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} — Terraform Modular`,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const waUrl = getWhatsAppUrl(
    `Hello Terraform Modular, I am looking for details and quotation on ${service.title}. Could you assist?`
  );

  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              {service.category} Service
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F3B6B] mt-2 tracking-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols: Overview, Gallery, Features, Specs, FAQ */}
            <div className="lg:col-span-8 space-y-12 text-left">
              {/* Hero Image */}
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Service Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1F3B6B]">
                  Service Overview & Scope
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Curated Gallery */}
              {service.galleryImages.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1F3B6B]">Visual Inspirations</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {service.galleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
                      >
                        <Image
                          src={img}
                          alt={`${service.title} execution preview ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1F3B6B]">
                  Key Architectural & Functional Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80"
                    >
                      <h4 className="font-bold text-sm text-slate-900 mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{feature.title}</span>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed pl-6">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1F3B6B]">
                  Technical Specifications & Material Benchmarks
                </h3>
                <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
                  <table className="w-full text-left text-xs">
                    <tbody>
                      {service.specifications.map((spec, idx) => (
                        <tr
                          key={idx}
                          className={`border-b border-slate-100 last:border-0 ${
                            idx % 2 === 0 ? "bg-slate-50/50" : "bg-white"
                          }`}
                        >
                          <td className="py-3 px-5 font-bold text-slate-800 w-1/3">
                            {spec.label}
                          </td>
                          <td className="py-3 px-5 text-slate-600 font-medium">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1F3B6B]">Project Execution Phases</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#1F3B6B] text-white font-extrabold flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-bold text-slate-800">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1F3B6B]">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80"
                      >
                        <h4 className="font-bold text-sm text-[#1F3B6B] mb-2 flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#EEC10E] flex-shrink-0" />
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 4 Cols: Sticky Enquiry Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl text-left">
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#EEC10E] block">
                      Direct Consultation
                    </span>
                    <h3 className="text-xl font-black text-[#1F3B6B] mt-0.5">
                      Enquire for {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Receive tailored concepts and an itemized Bill of Quantities.
                    </p>
                  </div>

                  <EnquiryForm
                    initialProjectType={service.title}
                    sourceContext={`Service Detail Page - ${service.title}`}
                    compact={true}
                  />
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-left">
                  <h4 className="font-bold text-sm text-emerald-950 mb-1">
                    Have Space Drawings or Floor Plans?
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                    Send your architect CAD file or builder PDF directly on WhatsApp for an express spatial feasibility review.
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Your Floor Plan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
