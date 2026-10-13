import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Calendar,
  Layers,
  Ruler,
  Clock,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { projectsData } from "@/data/projectsData";
import { getWhatsAppUrl } from "@/data/companyData";
import EnquiryForm from "@/components/forms/EnquiryForm";
import ProjectDepthViewer from "@/components/interactive/ProjectDepthViewer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Office Elevate Portfolio`,
    description: project.designBrief,
    openGraph: {
      title: `${project.title} — Office Elevate`,
      description: project.designBrief,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const waUrl = getWhatsAppUrl(
    `Hello Office Elevate, I came across the case study for ${project.title} (${project.location}). I have a similar space requirement and would like to discuss design options.`
  );

  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Our Projects", href: "/projects" },
              { label: project.title },
            ]}
          />
          <div className="max-w-3xl mt-4 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
                {project.category}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-medium">
                {project.clientType} Project
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F3B6B] tracking-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mt-3">
              <span className="flex items-center gap-1 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#EEC10E]" />
                {project.location}
              </span>
              <span>•</span>
              <span className="font-semibold">Area: {project.area}</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Handover: {project.completionTimeline}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols: Gallery, Brief, Objectives, Materials */}
            <div className="lg:col-span-8 space-y-12 text-left">
              {/* Primary Image */}
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Gallery Grid */}
              {project.gallery.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1F3B6B]">Project Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} photo ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive 3D Spatial Depth Inspection */}
              <div className="space-y-4">
                <ProjectDepthViewer project={project} />
              </div>

              {/* Design Brief & Objective */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#EEC10E] block mb-1">
                    Client Context
                  </span>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">The Design Brief</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.designBrief}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F3B6B] block mb-1">
                    Architectural Strategy
                  </span>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Design Objective</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.designObjective}
                  </p>
                </div>
              </div>

              {/* Verified Materials & Finishes Table */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1F3B6B]">
                  Specified Materials & Hardware Standards
                </h3>
                <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
                  <table className="w-full text-left text-xs">
                    <tbody>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="py-3 px-5 font-bold text-slate-800 w-1/3">
                          Core Substrate
                        </td>
                        <td className="py-3 px-5 text-slate-600 font-medium">
                          {project.materialsAndFinishes.substrate}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-5 font-bold text-slate-800">
                          Shutter / Surface Finish
                        </td>
                        <td className="py-3 px-5 text-slate-600 font-medium">
                          {project.materialsAndFinishes.shutterFinish}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="py-3 px-5 font-bold text-slate-800">
                          Hardware & Motions
                        </td>
                        <td className="py-3 px-5 text-slate-600 font-medium">
                          {project.materialsAndFinishes.hardware}
                        </td>
                      </tr>
                      {project.materialsAndFinishes.countertopOrPanelling && (
                        <tr>
                          <td className="py-3 px-5 font-bold text-slate-800">
                            Countertop / Panelling
                          </td>
                          <td className="py-3 px-5 text-slate-600 font-medium">
                            {project.materialsAndFinishes.countertopOrPanelling}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1F3B6B]">
                  Distinctive Custom Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Consultation Box */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl text-left">
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#EEC10E] block">
                      Enquire for Similar Space
                    </span>
                    <h3 className="text-xl font-black text-[#1F3B6B] mt-0.5">
                      Request a Consultation
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Love the finishes and planning in this project? Let&apos;s adapt them to your floor plan.
                    </p>
                  </div>

                  <EnquiryForm
                    initialProjectType={`Inspired by: ${project.title}`}
                    initialRequirements={`Enquiry inspired by ${project.title} (${project.category}). Location: ${project.location}.`}
                    sourceContext={`Project Detail Page - ${project.slug}`}
                    compact={true}
                  />
                </div>

                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-left">
                  <h4 className="font-bold text-sm text-emerald-950 mb-1">
                    Ask on WhatsApp
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                    Have questions about the materials or budget range of this project? Chat directly with our senior designers.
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat About This Project</span>
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
