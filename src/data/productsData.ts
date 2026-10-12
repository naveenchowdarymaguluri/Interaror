export interface ProductItem {
  id: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  primaryImage: string;
  galleryImages: string[];
  materialsAvailable: string[];
  finishesAvailable: string[];
  features: string[];
  dimensionsGuide: string;
  idealApplication: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  itemCount: number;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "modular-kitchens",
    name: "Modular Kitchens",
    description: "Ergonomic, modular cooking zones tailored to Indian culinary workflows with high moisture resistance.",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    itemCount: 4,
  },
  {
    slug: "wardrobes-and-closets",
    name: "Wardrobes & Closets",
    description: "Floor-to-ceiling modular wardrobes, sliding glass systems, and bespoke walk-in dressing suites.",
    heroImage: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
    itemCount: 4,
  },
  {
    slug: "tv-units-entertainment",
    name: "TV Units & Media Walls",
    description: "Architectural focal walls with concealed wire management, fluted panelling, and floating consoles.",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    itemCount: 3,
  },
  {
    slug: "bedroom-furniture",
    name: "Beds & Bedroom Furniture",
    description: "Hydraulic storage platform beds, acoustic headboards, bedside pedestals, and vanity dressers.",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    itemCount: 3,
  },
  {
    slug: "crockery-and-dining",
    name: "Crockery & Dining Units",
    description: "Backlit glass display cabinets, buffet credenzas, and integrated dining bar consoles.",
    heroImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    itemCount: 2,
  },
  {
    slug: "study-and-workstations",
    name: "Study Tables & Home Desks",
    description: "Space-saving floating study desks, dual-user computer tables, and integrated bookshelves.",
    heroImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    itemCount: 2,
  },
  {
    slug: "storage-and-shelving",
    name: "Storage Cabinets & Shelving",
    description: "Shoe consoles, utility storage units, pantry tall-boys, and modular partition dividers.",
    heroImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    itemCount: 2,
  },
  {
    slug: "office-workstations",
    name: "Office Workstations & Desking",
    description: "Linear desking clusters, executive director desks, and modular meeting suites with cable raceways.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    itemCount: 3,
  },
  {
    slug: "reception-and-conference",
    name: "Reception Desks & Conference",
    description: "Signature corporate reception counters and motorized AV conference tables with acoustic detailing.",
    heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    itemCount: 2,
  },
  {
    slug: "customized-furniture",
    name: "Customized Furniture Solutions",
    description: "Architectural bespoke joinery built from custom sketches, CAD models, and non-standard floor plans.",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    itemCount: 2,
  },
];

export const productsData: ProductItem[] = [
  // Modular Kitchens
  {
    id: "l-shaped-modular-kitchen",
    slug: "l-shaped-modular-kitchen",
    categorySlug: "modular-kitchens",
    categoryName: "Modular Kitchens",
    title: "Nordic Minimalist L-Shaped Kitchen",
    tagline: "Efficient corner layout with integrated quartz breakfast counter",
    shortDescription:
      "A high-utility L-layout combining anti-fingerprint slate grey laminate with warm Scandinavian oak overhead cabinets and German soft-close tandem drawers.",
    fullDescription:
      "Engineered for modern urban apartments, this L-shaped kitchen balances sleek architectural lines with heavy-duty cooking durability. Built with a 100% Boiling Water Proof (BWP) Marine Plywood carcass, it features corner carousel pull-outs, bi-fold overhead lift-ups, and a quartz countertop with seamless under-mount sink cut-outs.",
    primaryImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1000&q=80",
    ],
    materialsAvailable: ["710-Grade BWP Marine Ply", "HDHMR Substrate", "Quartz Countertops"],
    finishesAvailable: ["Ultra Matt Anti-Fingerprint Laminate", "Acrylic Mirror Finish", "Polyurethane (PU) Satin"],
    features: [
      "Hettich InnoTech Atira double-walled soft close drawers",
      "LeMans II blind corner swing-out carousel",
      "Under-cabinet LED profile lighting with motion sensor",
      "Tall pantry pantry unit with 6-tier chrome baskets",
    ],
    dimensionsGuide: "Custom built to exact wall dimensions (Standard counter height: 860mm, depth: 600mm)",
    idealApplication: "Apartments, Duplexes, Modern Villas",
  },
  {
    id: "contemporary-island-kitchen",
    slug: "contemporary-island-kitchen",
    categorySlug: "modular-kitchens",
    categoryName: "Modular Kitchens",
    title: "Contemporary Monolith Island Kitchen",
    tagline: "The centerpiece of social living with integrated cooking and dining island",
    shortDescription:
      "A statement kitchen with central waterfall island, high-gloss acrylic cabinets, fluted wooden details, and concealed appliance tall-units.",
    fullDescription:
      "Designed for spacious open-plan homes, the Contemporary Monolith Island Kitchen creates a fluid connection between culinary preparation and social entertaining. The island features an induction hob, built-in breakfast bar, and deep pot drawers, complemented by floor-to-ceiling perimeter cabinetry.",
    primaryImage:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    ],
    materialsAvailable: ["Marine BWP Plywood", "High-Gloss Acrylic", "Nano-White & Sintered Stone"],
    finishesAvailable: ["High Gloss Acrylic", "Super Matt", "Smoked Oak Veneer"],
    features: [
      "Waterfall edge island counter with seating overhang",
      "Concealed pocket-door pantry for small appliances",
      "Blum Aventos HK-S bi-fold lift-up mechanism",
      "Built-in microwave and oven tall column housing",
    ],
    dimensionsGuide: "Requires minimum room dimensions of 14ft x 12ft for comfortable island clearance",
    idealApplication: "Villas, Luxury Penthouses, Open-Plan Living",
  },
  {
    id: "parallel-galley-kitchen",
    slug: "parallel-galley-kitchen",
    categorySlug: "modular-kitchens",
    categoryName: "Modular Kitchens",
    title: "Urban Parallel Galley Kitchen",
    tagline: "Maximum efficiency and counter space for avid home chefs",
    shortDescription:
      "Dual-counter parallel design segregating wet preparation and dry cooking zones with floor-to-ceiling storage tall-boy units.",
    fullDescription:
      "The parallel layout is widely recognized by culinary professionals as the most ergonomic kitchen configuration. With two parallel counters flanking a central corridor, it clearly separates wet cleaning and cooking zones while maximizing countertop workspace.",
    primaryImage:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
    ],
    materialsAvailable: ["Calibrated BWP Plywood", "Anti-Bacterial Laminate", "Granite / Composite"],
    finishesAvailable: ["Anti-Scratch Matte", "High Gloss", "Textured Timber"],
    features: [
      "Distinct wet zone (sink, dishwasher) and dry cooking zone (hob, prep)",
      "High-capacity bottle pull-outs and spice racks",
      "Dual cutlery organizers with beech wood dividers",
      "Durable skirtings with cockroach/pest sealing profiles",
    ],
    dimensionsGuide: "Ideal for rectangular kitchen spaces with minimum 4ft walkway between counters",
    idealApplication: "Contemporary Apartments, Family Homes",
  },

  // Wardrobes & Closets
  {
    id: "sliding-glass-wardrobe",
    slug: "sliding-glass-wardrobe",
    categorySlug: "wardrobes-and-closets",
    categoryName: "Wardrobes & Closets",
    title: "Architectural Tinted Glass Wardrobe",
    tagline: "Floor-to-ceiling tinted glass sliding shutters with integrated LED illumination",
    shortDescription:
      "Sleek black aluminum profile frames with bronze tinted toughened glass, internal leatherette jewelry drawers, and automated proximity lighting.",
    fullDescription:
      "A show-stopping bedroom centerpiece inspired by contemporary European master suites. Featuring whisper-quiet soft-close sliding hardware and slimline anodized aluminum profiles, this wardrobe showcases your curated wardrobe with subtle elegance.",
    primaryImage:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    ],
    materialsAvailable: ["Black Anodized Aluminum Profile", "4mm Fluted / Tinted Toughened Glass", "HDHMR Carcass"],
    finishesAvailable: ["Bronze Tint", "Grey Fluted Glass", "Clear Glass with Black Border"],
    features: [
      "Italian heavy-duty top-hung sliding mechanism with zero bottom channel tripping hazard",
      "Automated sensor LED strip profiles routed flush into shelf verticals",
      "Velvet-lined sliding accessories drawer for watches and jewelry",
      "Full-height hanger zone with drop-down wardrobe lift for high garments",
    ],
    dimensionsGuide: "Custom heights up to 10 feet; depth 600mm to 650mm",
    idealApplication: "Master Bedrooms, Walk-in Dressing Suites",
  },
  {
    id: "walk-in-closet-suite",
    slug: "walk-in-closet-suite",
    categorySlug: "wardrobes-and-closets",
    categoryName: "Wardrobes & Closets",
    title: "Bespoke Walk-in Dressing Suite",
    tagline: "Dedicated luxury dressing room with central island display",
    shortDescription:
      "An open-bay modular closet suite featuring central glass-topped accessory island, full-height shoe displays, and integrated dressing mirrors.",
    fullDescription:
      "Tailored for spacious master bedrooms and private dressing rooms, this modular walk-in system turns daily preparation into a luxurious experience. Every partition is precision-milled with concealed shelf fixings, providing clean lines and unmatched capacity.",
    primaryImage:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80",
    ],
    materialsAvailable: ["High-Density Moisture Resistant (HDHMR)", "Natural Veneer", "Brushed Brass Accents"],
    finishesAvailable: ["Natural Smoked Walnut", "Cashmere Beige Matt", "Dark Charcoal Oak"],
    features: [
      "Central freestanding accessory island with tempered glass showcase top",
      "Angled illuminated shoe shelving for up to 40 pairs",
      "Pull-out trouser racks with non-slip silicone ribs",
      "Full-length backlit mirror console with integrated electrical socket",
    ],
    dimensionsGuide: "Custom modular bays configured to fit any dedicated dressing room layout",
    idealApplication: "Villas, Luxury Apartments, Penthouses",
  },

  // TV Units & Media Walls
  {
    id: "architectural-fluted-tv-wall",
    slug: "architectural-fluted-tv-wall",
    categorySlug: "tv-units-entertainment",
    categoryName: "TV Units & Media Walls",
    title: "Fluted Charcoal & Marble Media Wall",
    tagline: "Statement living room feature wall with floating media console",
    shortDescription:
      "Seamless wall composition with charcoal fluted wooden slats, continuous vein sintered stone slab, and floating soft-close equipment drawers.",
    fullDescription:
      "Elevate your living room with a theater-grade focal point. This architectural wall integrates acoustic fluting to soften sound reverberation, hides all audio-video cabling in concealed ducts, and features a floating console with push-to-open fluted drawers.",
    primaryImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    ],
    materialsAvailable: ["Sintered Stone Sheet", "HDHMR Fluted Louvers", "Powder Coated Metal Trim"],
    finishesAvailable: ["Statuario White Marble Finish", "Warm Taupe Matt", "Nero Marquina Black"],
    features: [
      "Hidden conduit for TV power cords, HDMI 2.1, and gaming cables",
      "Perimeter 3000K warm LED backlighting with remote dimmer",
      "Floating console tested for 60kg wall load with heavy-duty anchors",
      "Acoustic fluted wooden background dampens TV echo",
    ],
    dimensionsGuide: "Scalable for 55-inch to 85-inch television screens (Standard wall span: 9ft to 14ft)",
    idealApplication: "Living Rooms, Home Theaters, Executive Suites",
  },

  // Office Workstations & Desking
  {
    id: "linear-collaborative-workstation",
    slug: "linear-collaborative-workstation",
    categorySlug: "office-workstations",
    categoryName: "Office Workstations & Desking",
    title: "Apex Modular 4-Person Desking Cluster",
    tagline: "Ergonomic open-plan workstations with integrated wire raceway and acoustic partition",
    shortDescription:
      "Heavy-duty CRCA steel understructure with pre-laminated engineered tops, PET acoustic dividers, and flip-up power access modules.",
    fullDescription:
      "Built for collaborative corporate environments, the Apex 4-Person Cluster optimizes floor density while ensuring individual privacy and cable tidiness. Designed for rapid assembly and reconfiguration as your workforce expands.",
    primaryImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
    ],
    materialsAvailable: ["CRCA Steel 50x50mm Loop Legs", "25mm E1 Pre-Laminated Board", "PET Acoustic Felt"],
    finishesAvailable: ["Highland Pine Top with White Frame", "Classic Walnut Top with Matte Black Frame"],
    features: [
      "Central concealed cable tray housing data and power channels",
      "Desk-mounted tackable acoustic fabric partition (450mm height)",
      "2mm impact-resistant machine edge banding on all worktop borders",
      "Lockable mobile drawer pedestal with master key option",
    ],
    dimensionsGuide: "Standard workstation footprint: 1200mm x 600mm per person (Total cluster: 2400mm x 1200mm)",
    idealApplication: "Corporate Offices, Coworking Hubs, Tech Companies",
  },
  {
    id: "executive-director-suite",
    slug: "executive-director-suite",
    categorySlug: "office-workstations",
    categoryName: "Office Workstations & Desking",
    title: "Monarch Executive Director Suite",
    tagline: "Imposing executive desk with integrated return credenza and modesty panel",
    shortDescription:
      "A prestigious executive desk balancing architectural veneer surfaces, leather writing pad, and concealed wire management with spacious side storage.",
    fullDescription:
      "Crafted for executive leadership offices, the Monarch Suite conveys authority, design sophistication, and functional ease. Features an expansive desktop with chamfered edges, integrated side credenza with drawer banks, and hidden CPU/electrical routing.",
    primaryImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
    ],
    materialsAvailable: ["Natural Smoked Walnut Veneer", "Italian Leather Inlay", "Brushed Brass Trims"],
    finishesAvailable: ["Open Pore Walnut PU", "Smoked Oak Satin", "Ebony Matt"],
    features: [
      "Motorized flip-up electrical connectivity box (Power, USB-C 65W, HDMI, RJ45)",
      "Multi-drawer storage credenza with central digital code lock",
      "Recessed architectural modesty panel with ambient LED floor glow",
      "Wire-free desktop routing into base plinth",
    ],
    dimensionsGuide: "Main desk: 2100mm x 950mm; Side credenza: 1800mm x 500mm",
    idealApplication: "CEO Cabins, Director Suites, Managing Partner Offices",
  },

  // Reception & Conference
  {
    id: "sculptural-reception-desk",
    slug: "sculptural-reception-desk",
    categorySlug: "reception-and-conference",
    categoryName: "Reception Desks & Conference",
    title: "Signature Architectural Reception Counter",
    tagline: "The decisive first impression for corporate headquarters and design studios",
    shortDescription:
      "Curved fluted timber frontage with seamless solid-surface quartz transaction top and ergonomically organized receptionist work area.",
    fullDescription:
      "First impressions shape corporate reputations. Our reception counters are custom-engineered to command respect, reflect company identity, and maintain total operator comfort with built-in storage, terminal housing, and acoustic privacy.",
    primaryImage:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
    ],
    materialsAvailable: ["Solid Surface Acrylic", "CNC Curved Fluted Wood", "Metallic Accent Kickplates"],
    finishesAvailable: ["Corian White with Natural Oak", "Charcoal Quartz with Brushed Gold"],
    features: [
      "Dual-level counter: High front privacy screen (1050mm) and ergonomic desk (750mm)",
      "Recessed plinth LED kick-lighting creating a floating visual effect",
      "Integrated visitor sign-in terminal routing and visitor parcel storage",
      "Lockable cash/documents drawers and telephone ducting",
    ],
    dimensionsGuide: "Available in lengths from 2400mm (8ft) to 4200mm (14ft) based on lobby foyer scale",
    idealApplication: "Corporate Foyers, Luxury Clinics, High-End Showrooms",
  },
];
