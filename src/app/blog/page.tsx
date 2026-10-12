import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { blogPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Blog & Design Ideas | Modular Interiors & Architecture Guide",
  description:
    "Interior design guides, modular kitchen layout tips, wardrobe planning strategies, and material specifications by Office Elevate experts.",
};

export default function BlogPage() {
  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Design Ideas & Blog" }]} />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Editorial Insights
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1F3B6B] mt-2 tracking-tight">
              Design Ideas & Technical Guides
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Demystifying materials, ergonomic kitchen work triangles, acoustic office planning, and smart storage joinery for contemporary spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#1F3B6B]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {post.publishedDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-extrabold text-base text-slate-900 group-hover:text-[#1F3B6B] transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <div className="inline-flex items-center justify-between w-full text-xs font-bold text-[#1F3B6B] group-hover:text-[#EEC10E] pt-3 transition-colors">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
