import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingActions from "@/components/common/FloatingActions";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import CartDrawer from "@/components/common/CartDrawer";
import QuickViewModal from "@/components/common/QuickViewModal";
import QuickSearchModal from "@/components/common/QuickSearchModal";
import LookbookModal from "@/components/common/LookbookModal";
import StickyBottomBar from "@/components/common/StickyBottomBar";
import { StoreProvider } from "@/context/StoreContext";
import { companyConfig } from "@/data/companyData";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Terraform Modular — Premium Interior Design & Modular Furniture",
    template: "%s | Terraform Modular",
  },
  description:
    "Thoughtfully designed spaces. Beautifully crafted interiors. Premium residential and commercial interior solutions, modular kitchens, wardrobes, and customized furniture manufacturing.",
  keywords: [
    "Terraform Modular",
    "modular furniture",
    "interior design Bangalore",
    "modular kitchens",
    "custom wardrobes",
    "corporate office interiors",
    "turnkey interior projects",
    "furniture manufacturing",
  ],
  authors: [{ name: "Terraform Modular Design Studio" }],
  creator: "Terraform Modular",
  publisher: "Terraform Modular",
  metadataBase: new URL("https://officeelevate.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Terraform Modular — Thoughtfully Designed Spaces. Beautifully Crafted Interiors.",
    description:
      "From modular kitchens and custom wardrobes to complete home and office interiors, Terraform Modular brings together thoughtful design, quality craftsmanship, and functional solutions.",
    url: "https://officeelevate.com",
    siteName: "Terraform Modular",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/terraform-modular-logo.png",
        width: 1101,
        height: 180,
        alt: "Terraform Modular logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terraform Modular — Premium Interior Design & Modular Furniture",
    description:
      "Thoughtfully designed residential and commercial spaces with factory-engineered modular furniture solutions.",
    images: ["/images/terraform-modular-logo.png"],
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
    legalName: "Terraform Modular",
    description: companyConfig.tagline,
    url: "https://officeelevate.com",
    logo: "https://officeelevate.com/images/terraform-modular-logo.png",
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
        <StoreProvider>
          <ScrollProgressBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <QuickViewModal />
          <QuickSearchModal />
          <LookbookModal />
          <StickyBottomBar />
          <FloatingActions />
        </StoreProvider>
      </body>
    </html>
  );
}
