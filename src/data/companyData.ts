export interface CompanyConfig {
  name: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  displayWhatsapp: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  workingHours: {
    days: string;
    hours: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    pinterest?: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
    isPlaceholder: boolean;
  }[];
  brandColors: {
    yellow: string;
    navy: string;
    grey: string;
    bg: string;
  };
}

export const companyConfig: CompanyConfig = {
  name: "Office Elevate",
  tagline: "Thoughtfully Designed Spaces. Beautifully Crafted Interiors.",
  phone: "+919876543210", // Verified placeholder configurable by admin
  displayPhone: "+91 98765 43210",
  whatsappNumber: "+919876543210", // Verified placeholder configurable by admin
  displayWhatsapp: "+91 98765 43210",
  email: "hello@officeelevate.com",
  address: {
    line1: "Suite 402, Signature Towers, Commercial District",
    line2: "Outer Ring Road Sector 5",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560103",
    country: "India",
  },
  workingHours: {
    days: "Monday – Saturday",
    hours: "9:30 AM – 7:00 PM IST",
  },
  socialLinks: {
    instagram: "https://instagram.com/officeelevate",
    linkedin: "https://linkedin.com/company/office-elevate",
    facebook: "https://facebook.com/officeelevate",
    pinterest: "https://pinterest.com/officeelevate",
  },
  metrics: [
    {
      label: "Completed Projects",
      value: "500+",
      description: "Residential & corporate spaces designed & delivered",
      isPlaceholder: true,
    },
    {
      label: "Years of Craftsmanship",
      value: "12+",
      description: "Dedicated expertise in modular joinery & fit-outs",
      isPlaceholder: true,
    },
    {
      label: "Modular Precision",
      value: "0.5mm",
      description: "Tolerance standard with industrial beam saws & edge banding",
      isPlaceholder: true,
    },
    {
      label: "Material Warranty Standard",
      value: "10 Yrs*",
      description: "On high-grade BWP plywood and premium hardware",
      isPlaceholder: true,
    },
  ],
  brandColors: {
    yellow: "#EEC10E",
    navy: "#1F3B6B",
    grey: "#CFCFCF",
    bg: "#FEFEFE",
  },
};

/**
 * Builds a direct, user-consenting WhatsApp message URL
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const cleanNumber = companyConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const defaultText =
    "Hello Office Elevate team, I am interested in exploring interior design and modular furniture solutions for my space. Could you share consultation details?";
  const message = customMessage || defaultText;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a click-to-call link
 */
export function getPhoneUrl(): string {
  return `tel:${companyConfig.phone}`;
}
