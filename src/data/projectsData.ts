export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Kitchens" | "Living Rooms" | "Bedrooms" | "Wardrobes" | "Office Interiors" | "Commercial Spaces";
  clientType: "Residential" | "Commercial";
  location: string;
  completionTimeline: string;
  area: string;
  thumbnail: string;
  gallery: string[];
  designBrief: string;
  designObjective: string;
  materialsAndFinishes: {
    substrate: string;
    shutterFinish: string;
    hardware: string;
    countertopOrPanelling?: string;
  };
  keyFeatures: string[];
  isDemonstrationProject: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "the-lumina-penthouse-kitchen",
    slug: "the-lumina-penthouse-kitchen",
    title: "The Lumina Penthouse Island Kitchen",
    category: "Kitchens",
    clientType: "Residential",
    location: "Indiranagar, Bangalore",
    completionTimeline: "38 Working Days",
    area: "340 sq.ft",
    thumbnail:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
    ],
    designBrief:
      "The client required an open culinary focal point capable of hosting weekend gourmet dinners while maintaining a clean, clutter-free appearance during daily family routines.",
    designObjective:
      "Integrate an expansive quartz waterfall island with induction cooking and breakfast bar, concealed appliance garage, and high-efficiency pantry tall-units.",
    materialsAndFinishes: {
      substrate: "710 Grade Marine BWP Plywood",
      shutterFinish: "Matt Charcoal Anti-Fingerprint Laminate & Natural White Oak Veneer",
      hardware: "Blum Clip-Top BLUMOTION & Legrabox Drawer Systems",
      countertopOrPanelling: "Calacatta Gold Sintered Quartz 15mm with seamless mitered waterfall",
    },
    keyFeatures: [
      "Motorized pocket doors concealing microwave, oven, and espresso bar",
      "Integrated 4-tier pull-out pantry with soft-closing dampers",
      "Warm 3000K LED channel lights under upper cabinets with touchless motion trigger",
      "Under-mount double bowl composite granite sink with pull-out spray faucet",
    ],
    isDemonstrationProject: true,
  },
  {
    id: "serenity-master-suite-wardrobe",
    slug: "serenity-master-suite-wardrobe",
    title: "The Serenity Glass & Fluted Wardrobe Suite",
    category: "Wardrobes",
    clientType: "Residential",
    location: "Koramangala, Bangalore",
    completionTimeline: "26 Working Days",
    area: "210 sq.ft",
    thumbnail:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    ],
    designBrief:
      "A tailored floor-to-ceiling wardrobe system for a modern master bedroom that maximizes vertical storage up to the 10-foot ceiling without feeling heavy.",
    designObjective:
      "Use bronze tinted glass sliding doors with slim black aluminum frames to create visual depth, combined with custom illuminated compartments for formal attire, shoes, and luxury accessories.",
    materialsAndFinishes: {
      substrate: "HDHMR (High-Density High Moisture Resistance) Core",
      shutterFinish: "Bronze Toughened Glass in Anodized Matt Black Aluminium Profiles",
      hardware: "Italian Heavy-Duty Soft-Close Top Hung Sliding Gear (Zero Floor Track)",
      countertopOrPanelling: "Fluted Charcoal Acoustic Panelling along side returns",
    },
    keyFeatures: [
      "Vertical recessed sensor LED light profiles embedded into shelf uprights",
      "Soft velvet-lined pull-out drawer organizer for jewelry and timepieces",
      "Drop-down hydraulic wardrobe hanger lifts for effortless top-tier access",
      "Dedicated ventilated shoe shelves with angled display rails",
    ],
    isDemonstrationProject: true,
  },
  {
    id: "horizon-tech-corporate-hq",
    slug: "horizon-tech-corporate-hq",
    title: "Horizon Tech Collaborative Corporate Workspace",
    category: "Office Interiors",
    clientType: "Commercial",
    location: "Outer Ring Road Tech Corridor, Bangalore",
    completionTimeline: "52 Working Days",
    area: "6,800 sq.ft",
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    ],
    designBrief:
      "A fast-growing enterprise needed a modern, agile workplace housing 80 open-plan workstations, 6 executive leadership cabins, 3 acoustic conference rooms, and a breakout cafeteria.",
    designObjective:
      "Maximize natural daylight penetration, integrate heavy-duty power and high-speed data wire troughs, and utilize acoustic felt baffles to maintain noise control.",
    materialsAndFinishes: {
      substrate: "E1 Grade Pre-Laminated Engineered Board & CRCA Steel Understructure",
      shutterFinish: "Highland Pine Tops with Epoxy Powder Coated Black Frames",
      hardware: "Heavy-Duty Ball Bearing Slides, Soft-Close Credenza Hinges",
      countertopOrPanelling: "NRC 0.85 Recycled PET Acoustic Wall & Ceiling Baffles",
    },
    keyFeatures: [
      "Modular 4-person and 6-person desking clusters with flip-up power ports",
      "14-seater board table with integrated video conferencing mic slots and pop-up connectivity",
      "Executive suites with private return credenzas and acoustic sound barriers",
      "Cafeteria booth seating and high-top collaboration island tables",
    ],
    isDemonstrationProject: true,
  },
  {
    id: "crestview-residence-living-lounge",
    slug: "crestview-residence-living-lounge",
    title: "The Crestview Modern Minimalist Living Lounge",
    category: "Living Rooms",
    clientType: "Residential",
    location: "Whitefield, Bangalore",
    completionTimeline: "30 Working Days",
    area: "420 sq.ft",
    thumbnail:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    ],
    designBrief:
      "Transform an echoing living room into a sophisticated, cozy entertainment and conversation space with zero visible wiring.",
    designObjective:
      "Construct a composite entertainment wall featuring warm fluted wooden louvers, sintered stone television backing, and a suspended floating console with acoustic soundbar shelf.",
    materialsAndFinishes: {
      substrate: "Calibrated HDHMR Boards",
      shutterFinish: "PU Satin Matte Taupe & Natural Smoked Oak Fluting",
      hardware: "Hettich Push-to-Open Drawer Runners",
      countertopOrPanelling: "Seamless Bookmatched Statuario Sintered Stone Feature Panel",
    },
    keyFeatures: [
      "Internal conduit routing carrying HDMI 2.1, Ethernet, and audio wiring",
      "Subtle 2700K perimeter cove glow highlighting stone textures",
      "Floating console tested for 60kg load with hidden steel anchors",
      "Integrated entryway shoe console with brass handle inlays",
    ],
    isDemonstrationProject: true,
  },
  {
    id: "aurora-boutique-experience-store",
    slug: "aurora-boutique-experience-store",
    title: "Aurora Flagship Experience Studio",
    category: "Commercial Spaces",
    clientType: "Commercial",
    location: "MG Road, Bangalore",
    completionTimeline: "35 Working Days",
    area: "1,850 sq.ft",
    thumbnail:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    ],
    designBrief:
      "A high-end retail boutique required display millwork that highlights luxury lifestyle products while withstanding daily customer handling.",
    designObjective:
      "Precision curved timber display counters, floating perimeter shelving with integrated LED illumination, and an iconic terrazzo-and-brass cash desk.",
    materialsAndFinishes: {
      substrate: "Commercial Moisture-Resistant Plywood & Solid Surface Acrylic",
      shutterFinish: "Ultra-Matt Scratch-Resistant Laminate & Brass Metallics",
      hardware: "Commercial Heavy-Duty Concealed Hinges and Magnetic Catchers",
      countertopOrPanelling: "Curved Solid Surface Seamless Joints",
    },
    keyFeatures: [
      "Modular perimeter wall display standards with adjustable shelf brackets",
      "High CRI 95 track spotlights calibrated to highlight genuine product colors",
      "Curved customer reception desk with concealed POS wiring and receipts drawer",
      "Reinforced glass display cabinets with tamper-proof cam locks",
    ],
    isDemonstrationProject: true,
  },
  {
    id: "zenith-contemporary-bedroom",
    slug: "zenith-contemporary-bedroom",
    title: "The Zenith Contemporary Bedroom & Study",
    category: "Bedrooms",
    clientType: "Residential",
    location: "HSR Layout, Bangalore",
    completionTimeline: "28 Working Days",
    area: "240 sq.ft",
    thumbnail:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    ],
    designBrief:
      "Design a dual-purpose master suite combining restful sleep acoustics, extensive wardrobe storage, and a dedicated ergonomic work-from-home study alcove.",
    designObjective:
      "Custom upholstered headboard spanning full wall width, hydraulic storage king bed, floor-to-ceiling swing wardrobe with integrated vanity mirror, and a floating study desk.",
    materialsAndFinishes: {
      substrate: "HDHMR & BWP Calibrated Plywood",
      shutterFinish: "Warm Beige Suede Laminate & Muted Fluted Oak",
      hardware: "Hydraulic Bed Gas Lifts (120kg capacity) & Blum Soft Close",
      countertopOrPanelling: "Fabric Acoustic Panelling behind bed headboard",
    },
    keyFeatures: [
      "Hydraulic storage platform bed with smooth pneumatic gas lift pistons",
      "Floating study desk with cable management port and open book shelving",
      "Full-height 4-door wardrobe with integrated backlit mirror console",
      "Dual bedside floating nightstands with concealed wireless charging pads",
    ],
    isDemonstrationProject: true,
  },
];
