"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, MapPin, Calendar, Maximize2, Compass, Layers, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { projectsData } from "@/data/projectsData";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All Projects" ||
      (selectedCategory === "Residences" &&
        (project.category.includes("Living") || project.category.includes("Apartment") || project.category.includes("Residence"))) ||
      (selectedCategory === "Kitchens" && project.category.includes("Kitchen")) ||
      (selectedCategory === "Commercial" &&
        (project.category.includes("Office") || project.category.includes("Commercial")));
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FBF9F5] text-[#1B1C1A] pb-24">
      {/* Editorial Page Intro Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-12">
        <Breadcrumbs items={[{ label: "Lookbook & Architectural Portfolio" }]} />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-6 pb-8 border-b border-[#CDC5BC]/30">
          <div className="max-w-3xl space-y-3 text-left">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#EEC10E]" />
              <span className="font-sans text-xs uppercase text-[#EEC10E] tracking-[0.18em] font-bold">
                Selected Works & Spatial Monograph
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] text-[#122442] leading-tight">
              Lookbook & Architectural Portfolio
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#4A463F] max-w-2xl font-light leading-relaxed">
              A curated chronicle of residences and private commercial spaces transformed through precision modular engineering, tactile materiality, and quiet European discipline.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="flex items-center gap-6 bg-[#F5F3EF] p-5 rounded-xl border border-[#CDC5BC]/30 shadow-sm shrink-0">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-medium text-[#122442]">500+</span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#7C766E] font-bold">
                Realized Spaces
              </span>
            </div>
            <div className="w-px h-8 bg-[#CDC5BC]/40" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-medium text-[#122442]">0.2mm</span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#7C766E] font-bold">
                Joinery Tolerance
              </span>
            </div>
            <div className="w-px h-8 bg-[#CDC5BC]/40" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-medium text-[#EEC10E]">10 Yrs</span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#7C766E] font-bold">
                Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Filter Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <div className="flex flex-wrap items-center gap-2">
            {[
              "All Projects",
              "Residences",
              "Kitchens",
              "Commercial",
            ].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-[0.14em] font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#122442] text-white shadow-md scale-105"
                    : "bg-[#F5F3EF] text-[#4A463F] hover:bg-[#EAE8E4] hover:text-[#122442]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by location, system..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#CDC5BC]/40 rounded-full font-sans text-xs text-[#1B1C1A] placeholder:text-[#7C766E] focus:outline-none focus:ring-2 focus:ring-[#EEC10E]"
            />
          </div>
        </div>
      </section>

      {/* Flagship Hero Case Monograph: The Belgravia Townhouse */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        <article className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#CDC5BC]/30 hover:border-[#EEC10E]/50 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] bg-stone-900">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBImsOWfOBD1ZA2J2SMyWT9B5Hj6-ixHlwjFhJm5y0ccRoKtafzdzIdx_E8Ek_i-35dZWaijr7F_H0g3YaPeFmjd5DzsfRjz_AQhANKkJ3e1tu3zyM-2ajMM3x5u4zKTndN51LkeR1vyVM_4MZxNpmn3rOGPZYEsInKutXiulf8ewVnaeCkAnU2Djhhq4vxPkxZnS-SkSisoPJvlNAhfFilSHmj2luU9JtyUk2uTttq"
                alt="The Belgravia Townhouse"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded font-sans text-[10px] font-bold uppercase tracking-widest text-[#122442] shadow-sm">
                  Flagship Monograph 01
                </span>
                <span className="bg-[#122442]/90 backdrop-blur-md px-3 py-1 rounded font-sans text-[10px] font-bold uppercase tracking-widest text-[#EEC10E] border border-white/10">
                  London SW1
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-lg flex items-center justify-between text-[#1B1C1A]">
                <div className="flex items-center gap-4 font-sans text-xs font-semibold">
                  <span>4,800 sq ft</span>
                  <span>•</span>
                  <span>14 Modular Cores</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-[#EEC10E] uppercase tracking-wider">
                  Completed Q2 2024
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#EEC10E] font-bold">
                    Modular Fit-Out Architecture
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#122442] leading-tight">
                    The Belgravia Townhouse, London
                  </h2>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#4A463F] font-light leading-relaxed">
                  A meticulous five-story Regency restoration uniting structural preservation with ultra-precise pre-engineered joinery. Features a monolithic dual-island kitchen configuration and an uninterrupted two-story dressing suite clad in smoked European oak.
                </p>

                {/* Material Palette Specification */}
                <div className="bg-[#F5F3EF] p-4 rounded-lg space-y-2 border border-[#CDC5BC]/30">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#7C766E] font-bold block">
                    Material Palette Specification
                  </span>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex items-center gap-1.5 font-sans text-xs text-[#1B1C1A]">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#EFECE6] border border-[#CDC5BC]" />
                      <span>Calacatta Viola</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-sans text-xs text-[#1B1C1A]">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#2C2824]" />
                      <span>Smoked Oak</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-sans text-xs text-[#1B1C1A]">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#C5A880]" />
                      <span>Brushed Brass</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-[#122442] hover:bg-[#EEC10E] hover:text-[#122442] text-white font-sans text-xs uppercase tracking-widest font-bold rounded transition-colors duration-300 shadow-sm"
                >
                  <span>Explore Case Drawings & Millwork</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Projects Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-[#CDC5BC]/30 shadow-sm hover:shadow-xl hover:border-[#EEC10E]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#122442] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-sans px-2.5 py-1 rounded">
                    {project.area}
                  </div>
                </div>

                <div className="p-6 text-left">
                  <div className="font-sans text-[11px] text-[#7C766E] font-medium">
                    {project.location}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#122442] mt-1 group-hover:text-[#EEC10E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#4A463F] mt-2 line-clamp-2 leading-relaxed">
                    {project.designBrief}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                <div className="inline-flex items-center justify-between w-full font-sans text-xs font-bold text-[#122442] group-hover:text-[#EEC10E] pt-3 transition-colors">
                  <span>View Specifications & Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
