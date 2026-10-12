import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { companyConfig } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Privacy Policy | Office Elevate",
  description:
    "Privacy Policy for Office Elevate. Understand how we collect, use, and protect your consultation and enquiry details.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#FEFEFE] pb-20">
      <section className="bg-slate-50 border-b border-slate-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F3B6B] mt-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last updated: October 2026 • Office Elevate Modular Solutions
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left text-sm text-slate-700 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1F3B6B]">1. Overview</h2>
            <p>
              At <strong>Office Elevate</strong>, we value the trust you place in us when sharing your personal information and property details. This Privacy Policy outlines our transparent practices regarding data collection, usage, and protection when you interact with our website, request design consultations, or contact us via telephone and WhatsApp.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1F3B6B]">2. Information We Collect</h2>
            <p>
              We collect information strictly necessary to provide tailored interior design consultations, architectural evaluations, and modular furniture quotations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Contact Identifiers:</strong> Your full name, mobile number, and email address.</li>
              <li><strong>Project Attributes:</strong> Property type (e.g. 2BHK, 3BHK, Villa, Office), approximate floor plan area, project city/locality, and estimated budget tier.</li>
              <li><strong>Architectural Briefs:</strong> Floor plans, room photographs, and custom requirements voluntarily submitted for estimation purposes.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1F3B6B]">3. How We Use Your Information</h2>
            <p>We utilize the collected details exclusively for:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Contacting you via phone call or WhatsApp to discuss your interior requirements.</li>
              <li>Generating itemized Bill of Quantities (BOQ) and 3D visual concepts.</li>
              <li>Scheduling site visits, laser measurement audits, and studio consultations.</li>
              <li>Providing post-installation service and warranty support.</li>
            </ul>
            <p className="font-semibold text-slate-900">
              We never sell, rent, or lease your personal information to third-party marketing companies or unauthorized external databases.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1F3B6B]">4. Data Security</h2>
            <p>
              All submissions through our secure forms are processed through encrypted HTTPS channels. Access to project briefs is restricted to authorized designers and project supervisors.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1F3B6B]">5. Contact Us</h2>
            <p>
              If you have any questions regarding our privacy practices or wish to update or delete your submitted enquiry record, please email us at{" "}
              <a href={`mailto:${companyConfig.email}`} className="text-[#1F3B6B] font-bold underline">
                {companyConfig.email}
              </a>{" "}
              or call {companyConfig.displayPhone}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
