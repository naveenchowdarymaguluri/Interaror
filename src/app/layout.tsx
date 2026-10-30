import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Terraform Modular — Architectural Modular Living & Luxury Joinery",
    template: "%s | Terraform Modular",
  },
  description:
    "Terraform Modular crafts quiet luxury and bespoke architectural interiors. Factory-engineered modular kitchens, dressing sanctuaries, living monoliths, and turnkey architectural fit-outs.",
  keywords: [
    "Terraform Modular",
    "modular furniture",
    "interior architecture",
    "monolith kitchens",
    "bespoke dressing rooms",
    "luxury joinery",
    "architectural interiors",
    "turnkey fit-outs",
  ],
  authors: [{ name: "Terraform Modular Atelier" }],
  creator: "Terraform Modular",
  publisher: "Terraform Modular",
  metadataBase: new URL("https://terraformmodular.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Terraform Modular — Architectural Modular Living & Quiet Luxury",
    description:
      "Bespoke modular interior architecture crafted with precision engineering, Italian concealed hardware, and hand-selected natural stones.",
    url: "https://terraformmodular.com",
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
    title: "Terraform Modular — Architectural Modular Living",
    description:
      "Factory-engineered modular interior architecture and bespoke joinery.",
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
    url: "https://terraformmodular.com",
    logo: "https://terraformmodular.com/images/terraform-modular-logo.png",
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
    priceRange: "₹₹₹₹",
  };

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FBF9F5] text-[#1B1C1A] antialiased selection:bg-[#EEC10E] selection:text-[#122442]">
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
