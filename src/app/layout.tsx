import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingActions from "@/components/common/FloatingActions";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import { companyConfig } from "@/data/companyData";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Office Elevate — Premium Interior Design & Modular Furniture",
    template: "%s | Office Elevate",
  },
  description:
    "Thoughtfully designed spaces. Beautifully crafted interiors. Premium residential and commercial interior solutions, modular kitchens, wardrobes, and customized furniture manufacturing.",
  keywords: [
    "Office Elevate",
    "modular furniture",
    "interior design Bangalore",
    "modular kitchens",
    "custom wardrobes",
    "corporate office interiors",
    "turnkey interior projects",
    "furniture manufacturing",
  ],
  authors: [{ name: "Office Elevate Design Studio" }],
  creator: "Office Elevate",
  publisher: "Office Elevate",
  metadataBase: new URL("https://officeelevate.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Office Elevate — Thoughtfully Designed Spaces. Beautifully Crafted Interiors.",
    description:
      "From modular kitchens and custom wardrobes to complete home and office interiors, Office Elevate brings together thoughtful design, quality craftsmanship, and functional solutions.",
    url: "https://officeelevate.com",
    siteName: "Office Elevate",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/office-elevate-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Office Elevate Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Elevate — Premium Interior Design & Modular Furniture",
    description:
      "Thoughtfully designed residential and commercial spaces with factory-engineered modular furniture solutions.",
    images: ["/images/office-elevate-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: companyConfig.name,
    legalName: "Office Elevate Modular Solutions",
    description: companyConfig.tagline,
    url: "https://officeelevate.com",
    logo: "https://officeelevate.com/images/office-elevate-logo.jpg",
    telephone: companyConfig.phone,
    email: companyConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${companyConfig.address.line1}, ${companyConfig.address.line2}`,
      addressLocality: companyConfig.address.city,
      addressRegion: companyConfig.address.state,
      postalCode: companyConfig.address.pincode,
      addressCountry: companyConfig.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹₹",
  };

  return (
    <html lang="en" className={`${manrope.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FEFEFE] text-[#1F3B6B] antialiased selection:bg-[#EEC10E] selection:text-[#1F3B6B]">
        <ScrollProgressBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
