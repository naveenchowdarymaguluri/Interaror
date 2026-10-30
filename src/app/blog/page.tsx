import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Clock, Calendar, BookOpen, Search, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { blogPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "The Atelier Journal | Architecture, Materiality & Modular Discourse",
  description:
    "Critical reflections on contemporary residential architecture, millimetric fabrication, acoustic science, and the eternal tactile dialogue between raw stone and curated timber.",
};

export default function BlogPage() {
  return (
    <div className="w-full bg-[#FBF9F5] text-[#1B1C1A] pb-24">
      {/* Masthead & Editorial Hero Header */}
      <section className="w-full bg-[#F5F3EF] px-4 sm:px-6 lg:px-12 pt-8 pb-10 border-b border-[#CDC5BC]/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <Breadcrumbs items={[{ label: "The Atelier Journal" }]} />

          {/* Meta Badge / Volume Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#CDC5BC]/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#EEC10E]" />
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#122442] font-bold">
                Curation & Journal • Volume IV • Architectural Essays & Material Studies
              </span>
            </div>
            <div className="flex items-center gap-2 font-sans text-xs text-[#7C766E] uppercase tracking-wider font-semibold">
              <span className="text-[#EEC10E] font-bold">ISSN 2814-9912</span>
              <span>/</span>
              <span>Bangalore • Milan • London</span>
            </div>
          </div>

          {/* Main Headline & Editorial Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] text-[#122442] leading-tight tracking-tight">
                The Atelier Journal <span className="italic font-light text-[#EEC10E]">—</span> Architecture, Materiality & Modular Discourse
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="font-sans text-sm text-[#4A463F] leading-relaxed">
                Critical reflections on contemporary residential architecture, millimetric fabrication, acoustic science, and the eternal tactile dialogue between raw stone and curated timber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Monograph Spread */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#CDC5BC]/30 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Monograph Image */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-xl group aspect-[16/10] bg-stone-900">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB11mPkYgoCzhDcv2Evu9Dii5354yfwLmvu9noAeziarGDs8gep3mXnrICXy0ZGP3phU0fFhi-UgjZP-OxRveNpPwmw2bgaqHenTMjMCNHHV1N7r04tr84116-Ermatf94fvRdNLpJg6rgoDdMJlMe_7yBkjFUf9ZYIQcT6JHzcU17JVsWcZ_nEi7i9AMtTp4FQNqLgP9yEfIDc54wewJUesSdW4rS2kQOLDnivDvug"
                alt="Architectural Material Study"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute top-4 left-4 bg-[#122442]/90 backdrop-blur-md px-3 py-1.5 rounded text-white font-sans text-[10px] uppercase tracking-widest font-bold">
                Cover Study // Volume IV
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-[#122442] font-sans text-[10px] tracking-wider font-semibold">
                Metrology Lab • Fig 4.2
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="font-sans text-xs uppercase tracking-widest text-[#EEC10E] font-bold">
                  Materiality & Engineering
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#122442] leading-tight">
                  Marine Grade Plywood vs HDHMR: The Science of Moisture Resistance
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#4A463F] leading-relaxed">
                  Why IS:710 certified BWP marine plywood remains the gold standard for kitchen and bathroom modular carcasses, and how moisture-curing reactive PUR edge sealing prevents irreversible steam delamination.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/blog/bwp-plywood-vs-hdhmr-guide"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#122442] hover:bg-[#EEC10E] hover:text-[#122442] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-lg transition-colors duration-300 shadow-sm"
                >
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#CDC5BC]/30">
          <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#7C766E] font-bold">
            Recent Publications & Technical Guides
          </span>
          <span className="font-sans text-xs text-[#7C766E]">
            {blogPosts.length} Monograph Articles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-[#CDC5BC]/30 shadow-sm hover:shadow-xl hover:border-[#EEC10E]/60 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#122442]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-[#7C766E] font-medium font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#EEC10E]" />
                      {post.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#EEC10E]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-medium text-[#122442] group-hover:text-[#EEC10E] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="font-sans text-xs text-[#4A463F] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                <div className="inline-flex items-center justify-between w-full font-sans text-xs font-bold text-[#122442] group-hover:text-[#EEC10E] pt-3 transition-colors">
                  <span>Read Monograph</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
