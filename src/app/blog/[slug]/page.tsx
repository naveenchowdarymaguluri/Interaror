import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  CheckCircle2,
  Share2,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { blogPosts } from "@/data/blogData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Terraform Modular Design Ideas`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Terraform Modular`,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Design Ideas", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="mt-4 text-left space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F3B6B] tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {post.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cover Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 mb-12">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Sections */}
          <div className="space-y-10 text-left">
            {post.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1F3B6B] tracking-tight">
                  {sec.heading}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {sec.paragraph}
                </p>

                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 mt-4">
                    {sec.keyPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Post Footer Callout */}
          <div className="mt-16 p-8 rounded-3xl bg-[#1F3B6B] text-white text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Consult Our Specialists
            </span>
            <h3 className="text-2xl font-extrabold">
              Have Questions About Your Upcoming Interior Project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Our architects and modular millwork engineers will walk you through material selections and 3D floor plan layout options.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#EEC10E] hover:bg-[#D9AD09] text-[#1F3B6B] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                <span>Book Free Design Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
