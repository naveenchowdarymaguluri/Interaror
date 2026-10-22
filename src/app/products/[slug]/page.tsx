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
  Star,
  Award,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { productsData } from "@/data/productsData";
import { getWhatsAppUrl } from "@/data/companyData";
import ProductDetailActions from "@/components/interactive/ProductDetailActions";

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
    title: `${product.title} | Terraform Modular Furniture`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} — Terraform Modular`,
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

  const relatedProducts = productsData
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="w-full bg-[#FAF8F5] pb-24">
      {/* Page Header */}
      <section className="bg-white border-b border-stone-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: product.categoryName, href: `/products#${product.categorySlug}` },
              { label: product.title },
            ]}
          />
          <div className="max-w-3xl mt-4 text-left">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EEC10E]">
                {product.categoryName}
              </span>
              {product.badge && (
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-100 text-[#1F3B6B]">
                  {product.badge}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900 mt-2 tracking-tight">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg text-stone-600 mt-2 leading-relaxed">
              {product.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Specs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 7 Cols: Image Gallery, Description, Specs */}
            <div className="lg:col-span-7 space-y-10 text-left">
              {/* Primary Image */}
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-md border border-stone-200 bg-stone-100">
                <Image
                  src={product.primaryImage}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Gallery Thumbnails */}
              {product.galleryImages.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 shadow-xs bg-stone-100"
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
              <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
                <h2 className="text-2xl font-black text-stone-900">
                  Architectural Blueprint & Design Overview
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
                <h3 className="text-xl font-bold text-stone-900">
                  Engineering & Hardware Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-stone-700 leading-relaxed font-semibold">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & Dimensions Table */}
              <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
                <h3 className="text-xl font-bold text-stone-900">
                  Technical Specifications
                </h3>
                <div className="rounded-2xl border border-stone-200 overflow-hidden bg-white">
                  <table className="w-full text-left text-xs">
                    <tbody>
                      <tr className="border-b border-stone-100 bg-stone-50/60">
                        <td className="py-3 px-5 font-bold text-stone-800 w-1/3">
                          Core Substrates
                        </td>
                        <td className="py-3 px-5 text-stone-600 font-medium">
                          {product.materialsAvailable.join(", ")}
                        </td>
                      </tr>
                      <tr className="border-b border-stone-100">
                        <td className="py-3 px-5 font-bold text-stone-800">
                          Surface Finishes
                        </td>
                        <td className="py-3 px-5 text-stone-600 font-medium">
                          {product.finishesAvailable.join(", ")}
                        </td>
                      </tr>
                      <tr className="border-b border-stone-100 bg-stone-50/60">
                        <td className="py-3 px-5 font-bold text-stone-800">
                          Dimension Guidelines
                        </td>
                        <td className="py-3 px-5 text-stone-600 font-medium">
                          {product.dimensionsGuide}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 font-bold text-stone-800">
                          Ideal Application
                        </td>
                        <td className="py-3 px-5 text-stone-600 font-medium">
                          {product.idealApplication}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Sticky Actions Box */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <ProductDetailActions product={product} />

                {/* Related Category Items */}
                {relatedProducts.length > 0 && (
                  <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-4 text-left">
                    <h4 className="text-sm font-bold text-stone-900">
                      More in {product.categoryName}
                    </h4>
                    <div className="space-y-3">
                      {relatedProducts.map((rel) => (
                        <Link
                          key={rel.id}
                          href={`/products/${rel.slug}`}
                          className="group flex items-center gap-3 p-2 rounded-2xl hover:bg-stone-50 transition-colors"
                        >
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                            <Image
                              src={rel.primaryImage}
                              alt={rel.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h5 className="text-xs font-bold text-stone-900 group-hover:text-[#1F3B6B] transition-colors truncate">
                              {rel.title}
                            </h5>
                            <span className="text-[11px] font-black text-[#1F3B6B]">
                              {rel.priceFormatted || "Custom BOQ"}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
