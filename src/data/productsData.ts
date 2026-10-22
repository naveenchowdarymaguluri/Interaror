export interface FinishSwatch {
  name: string;
  colorHex: string;
  textureLabel?: string;
}

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
  startingPrice?: number;
  priceFormatted?: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  leadTime?: string;
  swatches?: FinishSwatch[];
  roomType?: "kitchen" | "living" | "bedroom" | "office" | "dining" | "custom";
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
  // 1. Modular Kitchens
  {
    id: "contemporary-island-kitchen",
    slug: "contemporary-island-kitchen",
    categorySlug: "modular-kitchens",
    categoryName: "Modular Kitchens",
    title: "Contemporary Monolith Island Kitchen",
    tagline: "The centerpiece of social living with integrated waterfall breakfast island",
    shortDescription:
    "A statement kitchen with central waterfall sintered stone island, anti-fingerprint acrylic cabinetry, fluted wooden breakfast bar, and concealed appliance tall-units.",
    fullDescription:
      "Designed for open-plan luxury residences, the Contemporary Monolith Island Kitchen establishes a fluid connection between culinary mastery and social entertaining. Built with 100% Boiling Water Proof (BWP) Marine Plywood and featuring German Blum Aventos lift-ups, it incorporates an induction hob, built-in breakfast bar, and heavy-duty tandem pot drawers.",
    primaryImage:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    ],
    materialsAvailable: ["710-Grade Marine BWP Plywood", "High-Gloss Acrylic", "Sintered Stone Slabs"],
    finishesAvailable: ["Ultra Matt Obsidian", "Smoked Oak Veneer", "Calacatta Gold Sintered Stone", "Cashmere Sand"],
    features: [
      "Continuous-vein waterfall edge island counter with cantilevered seating overhang",
      "Concealed pocket-door pantry for appliances and coffee station",
      "Blum Aventos HK-S motorized touch-to-open bi-fold lift-ups",
      "Under-cabinet 3000K CRI 95+ architectural LED profile lighting",
    ],
    dimensionsGuide: "Custom layout (requires min 14ft x 12ft room span for island clearance)",
    idealApplication: "Luxury Villas, Penthouses, Open Concept Living",
    startingPrice: 385000,
    priceFormatted: "₹3,85,000",
    rating: 4.98,
    reviewCount: 64,
    badge: "Bestseller 2026",
    leadTime: "4-5 Weeks Handover",
    roomType: "kitchen",
    swatches: [
      { name: "Obsidian Matt", colorHex: "#1c1917" },
      { name: "Smoked Oak", colorHex: "#5c4033" },
      { name: "Calacatta Quartz", colorHex: "#ebe7df" },
      { name: "Cashmere Grey", colorHex: "#cbc5b9" },
    ],
  },
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
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
    ],
    materialsAvailable: ["710-Grade BWP Marine Ply", "HDHMR Substrate", "Quartz Countertops"],
    finishesAvailable: ["Ultra Matt Anti-Fingerprint Laminate", "Acrylic Mirror Finish", "Polyurethane (PU) Satin"],
    features: [
      "Hettich InnoTech Atira double-walled soft close drawers",
      "LeMans II blind corner swing-out carousel",
      "Under-cabinet LED profile lighting with motion sensor",
      "Tall pantry unit with 6-tier chrome baskets",
    ],
    dimensionsGuide: "Custom built to exact wall dimensions (Standard counter height: 860mm, depth: 600mm)",
    idealApplication: "Apartments, Duplexes, Modern Villas",
    startingPrice: 245000,
    priceFormatted: "₹2,45,000",
    rating: 4.92,
    reviewCount: 52,
    badge: "Popular Choice",
    leadTime: "4 Weeks Handover",
    roomType: "kitchen",
    swatches: [
      { name: "Slate Grey", colorHex: "#475569" },
      { name: "Nordic Oak", colorHex: "#b58d5f" },
      { name: "Pure White", colorHex: "#f8fafc" },
    ],
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
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
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
    startingPrice: 215000,
    priceFormatted: "₹2,15,000",
    rating: 4.88,
    reviewCount: 39,
    badge: "Ergonomic Pro",
    leadTime: "3-4 Weeks Handover",
    roomType: "kitchen",
    swatches: [
      { name: "Charcoal Matt", colorHex: "#334155" },
      { name: "Warm Maple", colorHex: "#c89d66" },
      { name: "Alabaster", colorHex: "#f1f5f9" },
    ],
  },

  // 2. Wardrobes & Closets
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
      "A show-stopping bedroom centerpiece inspired by contemporary European master suites. Featuring whisper-quiet soft-close sliding hardware and slimline anodized aluminum profiles, this wardrobe showcases your curated collection with subtle elegance.",
    primaryImage:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
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
    startingPrice: 285000,
    priceFormatted: "₹2,85,000",
    rating: 4.96,
    reviewCount: 47,
    badge: "Signature Collection",
    leadTime: "3-4 Weeks Handover",
    roomType: "bedroom",
    swatches: [
      { name: "Bronze Glass", colorHex: "#6e4726" },
      { name: "Smoked Grey", colorHex: "#374151" },
      { name: "Midnight Black", colorHex: "#111827" },
    ],
  },
  {
    id: "walk-in-closet-suite",
    slug: "walk-in-closet-suite",
    categorySlug: "wardrobes-and-closets",
    categoryName: "Wardrobes & Closets",
    title: "Bespoke Walk-in Dressing Suite",
    tagline: "Dedicated luxury dressing room with central glass accessory island",
    shortDescription:
      "An open-bay modular closet suite featuring central glass-topped accessory island, full-height shoe displays, and integrated dressing mirrors.",
    fullDescription:
      "Tailored for spacious master bedrooms and private dressing rooms, this modular walk-in system turns daily preparation into a luxurious experience. Every partition is precision-milled with concealed shelf fixings, providing clean lines and unmatched capacity.",
    primaryImage:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
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
    startingPrice: 340000,
    priceFormatted: "₹3,40,000",
    rating: 4.95,
    reviewCount: 38,
    badge: "Luxury Master Suite",
    leadTime: "4-5 Weeks Handover",
    roomType: "bedroom",
    swatches: [
      { name: "Smoked Walnut", colorHex: "#4a3525" },
      { name: "Cashmere Beige", colorHex: "#d8cfc4" },
      { name: "Charcoal Oak", colorHex: "#27272a" },
    ],
  },

  // 3. TV Units & Media Walls
  {
    id: "architectural-fluted-tv-wall",
    slug: "architectural-fluted-tv-wall",
    categorySlug: "tv-units-entertainment",
    categoryName: "TV Units & Media Walls",
    title: "Fluted Charcoal & Marble Media Wall",
    tagline: "Statement living room feature wall with floating cantilevered console",
    shortDescription:
      "Seamless wall composition with charcoal fluted wooden slats, continuous vein sintered stone slab, and floating soft-close equipment drawers.",
    fullDescription:
      "Elevate your living room with a theater-grade focal point. This architectural wall integrates acoustic fluting to soften sound reverberation, hides all audio-video cabling in concealed ducts, and features a floating console with push-to-open fluted drawers.",
    primaryImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
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
    startingPrice: 165000,
    priceFormatted: "₹1,65,000",
    rating: 4.97,
    reviewCount: 56,
    badge: "Trending Architectural",
    leadTime: "2-3 Weeks Handover",
    roomType: "living",
    swatches: [
      { name: "Statuario White", colorHex: "#f5f5f4" },
      { name: "Fluted Charcoal", colorHex: "#18181b" },
      { name: "Warm Walnut", colorHex: "#624028" },
    ],
  },

  // 4. Bedroom Furniture
  {
    id: "japandi-platform-storage-bed",
    slug: "japandi-platform-storage-bed",
    categorySlug: "bedroom-furniture",
    categoryName: "Beds & Bedroom Furniture",
    title: "Japandi Low Platform Storage Bed",
    tagline: "Minimalist Japanese-Scandinavian bed with hydraulic lift-up storage & floating pedestals",
    shortDescription:
      "An ultra-clean floating platform bed with acoustic upholstered headboard, integrated wireless charging pedestals, and hydraulic under-bed storage.",
    fullDescription:
      "Inspired by the serene balance of Japanese minimalism and Scandinavian warmth, this platform bed creates an oasis of calm. Constructed with reinforced plywood framing and equipped with heavy-duty German hydraulic gas pistons for effortless access to expansive under-bed storage.",
    primaryImage:
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    ],
    materialsAvailable: ["Calibrated BWP Carcass", "High-Density Boucle / Linen Upholstery", "Solid Ash Wood Trims"],
    finishesAvailable: ["Natural Sand Ash", "Smoked Walnut", "Oatmeal Boucle Fabric"],
    features: [
      "Dual German hydraulic gas lift pistons tested for 10,000+ lift cycles",
      "Concealed plinth recess with 2700K floor-wash night illumination",
      "Twin floating bedside tables with integrated Qi wireless phone chargers",
      "Anti-skid mattress retention frame with rounded radius child-safe corners",
    ],
    dimensionsGuide: "Available in Queen (60\"x78\") and King (72\"x78\") mattress configurations",
    idealApplication: "Master Bedrooms, Guest Suites, Modern Lofts",
    startingPrice: 125000,
    priceFormatted: "₹1,25,000",
    rating: 4.93,
    reviewCount: 41,
    badge: "Design Award 2026",
    leadTime: "3 Weeks Handover",
    roomType: "bedroom",
    swatches: [
      { name: "Oatmeal Boucle", colorHex: "#ded7cc" },
      { name: "Natural Ash", colorHex: "#cbb89d" },
      { name: "Smoked Walnut", colorHex: "#453229" },
    ],
  },

  // 5. Crockery & Dining Units
  {
    id: "backlit-glass-crockery-credenza",
    slug: "backlit-glass-crockery-credenza",
    categorySlug: "crockery-and-dining",
    categoryName: "Crockery & Dining Units",
    title: "Aura Backlit Fluted Glass Buffet & Bar",
    tagline: "Illuminated dining room display cabinet with integrated wine cooler housing",
    shortDescription:
      "An elegant dining credenza featuring bronze fluted glass display vitrines, brushed gold handles, continuous marble serving top, and hidden wine storage.",
    fullDescription:
      "The Aura Credenza transforms formal dining areas into hospitality suites. Boasting micro-fluted glass doors that softly obscure internal porcelain and crystal stemware, warm vertical shelf edge illumination, and soft-close lower cutlery drawers with custom velvet dividers.",
    primaryImage:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    ],
    materialsAvailable: ["Anodized Gold Aluminum Frame", "Fluted Glass", "Calacatta Quartz Top"],
    finishesAvailable: ["Champagne Gold with Smoked Glass", "Matte Black with Ribbed Glass", "Walnut Veneer"],
    features: [
      "Edge-to-edge continuous quartz serving counter resistant to hot platters and stains",
      "Concealed wine bottle honeycomb rack accommodating up to 18 bottles",
      "Push-to-open cutlery drawers with tarnish-free velvet felt lining",
      "Touch-sensitive dimmable warm 3000K LED vertical glow",
    ],
    dimensionsGuide: "Width: 1800mm to 2400mm; Depth: 450mm; Height: 900mm (buffet) / 2100mm (tall)",
    idealApplication: "Dining Rooms, Living-Dining Transitions, Penthouses",
    startingPrice: 145000,
    priceFormatted: "₹1,45,000",
    rating: 4.89,
    reviewCount: 33,
    badge: "Entertainer's Pick",
    leadTime: "3 Weeks Handover",
    roomType: "dining",
    swatches: [
      { name: "Champagne Gold", colorHex: "#d4af37" },
      { name: "Smoked Fluted Glass", colorHex: "#4b5563" },
      { name: "Walnut", colorHex: "#523724" },
    ],
  },

  // 6. Study Tables & Home Desks
  {
    id: "floating-architectural-study",
    slug: "floating-architectural-study",
    categorySlug: "study-and-workstations",
    categoryName: "Study Tables & Home Desks",
    title: "Atelier Floating Study Wall & Library",
    tagline: "Ergonomic wall-hung workspace with concealed cabling & integrated acoustic book vitrine",
    shortDescription:
      "A space-conscious study console suspended from the wall, featuring integrated monitor grommets, acoustic pin-board, and overhead fluted book shelving.",
    fullDescription:
      "Engineered for the demands of high-performance work-from-home professionals. Eliminating leg clutter, this wall-suspended system delivers an expansive working span, hidden raceway for monitor power and laptop docking, and modular overhead cabinetry with ambient task lighting.",
    primaryImage:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    ],
    materialsAvailable: ["Structural Marine Ply Carcass", "Anti-Scratch Fenix / Laminate", "Acoustic Felt Backing"],
    finishesAvailable: ["Castano Oak with Matte Black", "Nordic Birch with White", "Midnight Navy"],
    features: [
      "Heavy-duty concealed steel wall brackets load-tested to 85kg",
      "Flip-up brush cable pass-through for dual monitors and USB hubs",
      "Under-shelf glare-free task light with touch proximity switch",
      "Fabric tackable acoustic board for project notes and pinned sketches",
    ],
    dimensionsGuide: "Desk Width: 1500mm to 2100mm; Depth: 600mm; Wall Height: 2400mm",
    idealApplication: "Home Offices, Bedroom Alcoves, Study Dens",
    startingPrice: 95000,
    priceFormatted: "₹95,000",
    rating: 4.91,
    reviewCount: 29,
    badge: "WFH Essential",
    leadTime: "2-3 Weeks Handover",
    roomType: "office",
    swatches: [
      { name: "Castano Oak", colorHex: "#785338" },
      { name: "Fenix Matte Black", colorHex: "#171717" },
      { name: "Birch White", colorHex: "#f3f4f6" },
    ],
  },

  // 7. Office Workstations & Desking
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
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
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
    startingPrice: 110000,
    priceFormatted: "₹1,10,000",
    rating: 4.87,
    reviewCount: 45,
    badge: "Enterprise Standard",
    leadTime: "2-3 Weeks Handover",
    roomType: "office",
    swatches: [
      { name: "Highland Pine / White", colorHex: "#d1c2a5" },
      { name: "Walnut / Black", colorHex: "#3e2723" },
    ],
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
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
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
    startingPrice: 220000,
    priceFormatted: "₹2,20,000",
    rating: 4.98,
    reviewCount: 31,
    badge: "Executive Class",
    leadTime: "3-4 Weeks Handover",
    roomType: "office",
    swatches: [
      { name: "Smoked Walnut", colorHex: "#3e2723" },
      { name: "Ebony Matt", colorHex: "#1c1917" },
      { name: "Leather Saddle", colorHex: "#8d5b4c" },
    ],
  },

  // 8. Reception & Conference
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
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
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
    startingPrice: 265000,
    priceFormatted: "₹2,65,000",
    rating: 4.94,
    reviewCount: 28,
    badge: "Foyer Masterpiece",
    leadTime: "3-4 Weeks Handover",
    roomType: "custom",
    swatches: [
      { name: "Corian White / Oak", colorHex: "#eae6df" },
      { name: "Charcoal / Gold", colorHex: "#262626" },
    ],
  },
];
