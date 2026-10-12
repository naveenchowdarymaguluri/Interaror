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
  Sparkles,
  MessageCircle,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { productsData } from "@/data/productsData";
import { getWhatsAppUrl } from "@/data/companyData";
import EnquiryForm from "@/components/forms/EnquiryForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} | Office Elevate Modular Furniture`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} — Office Elevate`,
      description: product.shortDescription,
      images: [{ url: product.primaryImage }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const waUrl = getWhatsAppUrl(
    `Hello Office Elevate, I am interested in the ${product.title} (${product.categoryName}). Could you share pricing details and material catalog?`
  );

  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: product.categoryName, href: `/products#${product.categorySlug}` },
              { label: product.title },
            ]}
          />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              {product.categoryName}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F3B6B] mt-2 tracking-tight">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
              {product.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Specs */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols: Images, Description, Specs */}
            <div className="lg:col-span-8 space-y-12 text-left">
              {/* Primary Image */}
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src={product.primaryImage}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Gallery */}
              {product.galleryImages.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
                    >
                      <Image
                        src={img}
                        alt={`${product.title} view ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* In-depth Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1F3B6B]">
                  Design & Engineering Description
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1F3B6B]">
                  Engineering & Hardware Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 leading-relaxed font-medium">
                          {feat}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & Dimensions Table */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1F3B6B]">
                  Specifications & Application Guide
                </h3>
                <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
                  <table className="w-full text-left text-xs">
                    <tbody>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="py-3 px-5 font-bold text-slate-800 w-1/3">
                          Substrates Available
                        </td>
                        <td className="py-3 px-5 text-slate-600 font-medium">
                          {product.materialsAvailable.join(", ")}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-5 font-bold text-slate-800">
                          Surface Finishes
                        </td>
                        <td className="py-3 px-5 text-slate-600 font-medium">
                          {product.finishesAvailable.join(", ")}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="py-3 px-5 font-bold text-slate-800">
                          Dimensions & Sizing
                        </td>
                        <td className="py-3 px-5 text-slate-600 font-medium">
                          {product.dimensionsGuide}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 font-bold text-slate-800">
                          Ideal Application
                        </td>
                        <td className="py-3 px-5 text-slate-600 font-medium">
                          {product.idealApplication}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Sticky Inquiry Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl text-left">
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#EEC10E] block">
                      Custom Furniture Inquiry
                    </span>
                    <h3 className="text-xl font-black text-[#1F3B6B] mt-0.5">
                      Request Quote for {product.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Our factory team will provide an indicative quote and 3D layout options.
                    </p>
                  </div>

                  <EnquiryForm
                    initialProjectType={`Modular Product: ${product.title}`}
                    initialRequirements={`Inquiry for ${product.title} (${product.categoryName}).`}
                    sourceContext={`Product Detail Page - ${product.slug}`}
                    compact={true}
                  />
                </div>

                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-left">
                  <h4 className="font-bold text-sm text-emerald-950 mb-1">
                    Direct WhatsApp Quotation
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                    Want to know approximate cost per sq.ft or lead times? Chat with our product team.
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
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
