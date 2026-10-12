"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, MapPin, Calendar, Maximize2 } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { projectsData } from "@/data/projectsData";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All Projects" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Our Projects" }]} />
          <div className="max-w-3xl mt-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EEC10E]">
              Portfolio of Realized Spaces
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1F3B6B] mt-2 tracking-tight">
              Crafted Interiors & Modular Installations
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Explore completed case studies across contemporary apartments, villas, and corporate offices. Each project exemplifies tailored spatial planning and precision joinery.
            </p>
          </div>
        </div>
      </section>

      {/* Controls Bar: Search & Category Filter */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-[73px] z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {[
                "All Projects",
                "Kitchens",
                "Living Rooms",
                "Bedrooms",
                "Wardrobes",
                "Office Interiors",
                "Commercial Spaces",
              ].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#1F3B6B] text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 flex-shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by location, room..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EEC10E] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center text-slate-500">
              <p className="text-base font-semibold">No projects found matching your search.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All Projects");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold text-[#1F3B6B] hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#1F3B6B]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                        {project.category}
                      </div>
                      {project.isDemonstrationProject && (
                        <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[9px] px-2 py-0.5 rounded font-mono">
                          Demo Portfolio Case
                        </div>
                      )}
                    </div>

                    <div className="p-6 text-left space-y-2">
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#EEC10E]" />
                          {project.location}
                        </span>
                        <span>•</span>
                        <span>{project.area}</span>
                      </div>

                      <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#1F3B6B] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {project.designBrief}
                      </p>

                      <div className="pt-2 text-[11px] text-slate-500">
                        <strong className="text-slate-700">Substrate:</strong>{" "}
                        {project.materialsAndFinishes.substrate}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                    <div className="inline-flex items-center justify-between w-full text-xs font-bold text-[#1F3B6B] group-hover:text-[#EEC10E] pt-3 transition-colors">
                      <span>View Case Study & Finishes</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-xs text-slate-400 bg-slate-50 p-4 rounded-xl border border-slate-200/60 font-mono">
          *Demonstration Portfolio Note: Case studies reflect genuine design capabilities, material specifications, and architectural tolerances. Client names and specific apartment numbers have been sanitized for privacy.
        </p>
      </section>
    </div>
  );
}
