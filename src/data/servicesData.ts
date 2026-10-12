export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Manufacturing & Turnkey";
  shortDescription: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  features: {
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  processSteps: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "complete-home-interiors",
    slug: "complete-home-interiors",
    title: "Complete Home Interiors",
    category: "Residential",
    tagline: "End-to-end residential interiors crafted for contemporary living",
    shortDescription:
      "Comprehensive spatial planning, cohesive aesthetic schemes, custom modular millwork, and meticulous on-site execution for apartments, duplexes, and villas.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    ],
    overview:
      "Our full-home interior solutions unite architectural design sensibility with factory-engineered modular execution. From preliminary floor plan optimization and false ceiling lighting designs to bespoke cabinetry, wall paneling, and curated finishes, we coordinate every detail to bring warmth, functionality, and lasting value to your home.",
    features: [
      {
        title: "Holistic Architectural Space Planning",
        description: "Optimized furniture layouts, traffic flow zoning, and functional storage tailored to your family's daily rhythms.",
      },
      {
        title: "Bespoke Material & Color Palette Curation",
        description: "Harmonious combinations of natural wood veneers, acrylics, fluted wall panels, architectural lighting, and soft furnishings.",
      },
      {
        title: "Factory-Engineered Modular Millwork",
        description: "Precision-cut modular units manufactured with German machinery for flawless edge finishes and seamless fits.",
      },
      {
        title: "Single-Point Project Governance",
        description: "Dedicated project manager overseeing civil coordination, electrical, false ceiling, painting, and turnkey installation.",
      },
    ],
    specifications: [
      { label: "Core Substrates", value: "Boiling Water Proof (BWP) Marine Ply & HDHMR Boards" },
      { label: "Finish Options", value: "Anti-fingerprint Matt Laminate, High-Gloss Acrylic, PU Paint, Natural Veneer" },
      { label: "Hardware Standards", value: "Soft-close German fittings (Hettich / Blum / Hafele)" },
      { label: "Typical Handover Time", value: "45 to 60 working days from design sign-off (Scope dependent)" },
    ],
    processSteps: [
      "Discovery & On-site Space Audit",
      "2D Space Planning & 3D Visual Concepts",
      "Material, Hardware & Texture Finalization",
      "Factory Millwork Production & Edge Sealing",
      "Civil, False Ceiling & Electrical Prep",
      "Modular Fit-out, Quality Audit & Handover",
    ],
    faqs: [
      {
        question: "How long does a full home interior project take?",
        answer: "A typical 2BHK or 3BHK interior project takes approximately 45 to 60 working days post final 3D design and material approval. The exact duration depends on civil modifications, customized finishes, and site readiness.",
      },
      {
        question: "Can we customize colors and internal cabinet layouts?",
        answer: "Yes, every module is custom-configured to your exact room dimensions, storage needs, drawer organizers, and preferred surface finishes.",
      },
    ],
  },
  {
    id: "modular-kitchen-design",
    slug: "modular-kitchen-design",
    title: "Modular Kitchen Design",
    category: "Residential",
    tagline: "Ergonomic, moisture-resistant culinary spaces built for modern Indian lifestyles",
    shortDescription:
      "Smart kitchen designs featuring high-capacity tandem drawers, corner carousels, hydraulic lift-ups, quartz worktops, and waterproof marine-grade cabinetry.",
    heroImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
    ],
    overview:
      "The kitchen is the functional heartbeat of any home. Office Elevate designs and manufactures modular kitchens engineered specifically for Indian cooking conditions—resisting heat, moisture, turmeric, and intensive daily usage. Available in L-Shaped, U-Shaped, Parallel, Island, and Straight layouts with European soft-closing mechanisms.",
    features: [
      {
        title: "Golden Kitchen Work Triangle",
        description: "Ergonomically planned distances between hob, sink, and refrigerator to minimize steps and maximize cooking ease.",
      },
      {
        title: "100% Boiling Water Proof (BWP) Carcass",
        description: "Heavy-duty 16mm/18mm calibrated BWP plywood treated against termites, borer, and water swelling.",
      },
      {
        title: "German Soft-Close Motion Hardware",
        description: "Tandem boxes, pantry pull-outs, LeMans corner units, and bi-fold lift-ups tested for over 100,000 cycles.",
      },
      {
        title: "Seamless Countertop & Backsplash Integration",
        description: "Stain-resistant quartz surfaces, nano-white composite, and heat-resistant glass backsplashes.",
      },
    ],
    specifications: [
      { label: "Carcass Material", value: "710 Grade Boiling Water Proof (BWP) Marine Plywood" },
      { label: "Shutter Finishes", value: "Acrylic, Anti-Scratch Matt Laminate, Ceramic, PU Lacquer, Glass Profile" },
      { label: "Hardware & Hinges", value: "Blum Clip-Top BLUMOTION / Hettich Sensys Hinges with Dampers" },
      { label: "Layouts Available", value: "Island, Parallel, L-Shaped, U-Shaped, Straight with Breakfast Bar" },
    ],
    processSteps: [
      "Site Laser Measurement & Appliance Review",
      "3D Kitchen Layout & Work Triangle Optimization",
      "Material, Finish & Internal Organizer Selection",
      "Computerized Beam Saw Cutting & PUR Edge Banding",
      "Factory Dry-Fit & Hardware Alignment Inspection",
      "Dust-Free On-Site Installation & Warranty Handover",
    ],
    faqs: [
      {
        question: "Which material is best for Indian modular kitchens?",
        answer: "We strongly recommend 710-grade BWP Marine Plywood for sink and base cabinets due to its superior water resistance, combined with HDHMR or Acrylic shutters for easy cleaning and scratch resistance.",
      },
      {
        question: "Do you supply chimneys and built-in appliances?",
        answer: "We collaborate with leading appliance brands (Bosch, Faber, Elica, Siemens) and incorporate appliance cut-outs with exact ducting specifications during the 3D design phase.",
      },
    ],
  },
  {
    id: "bedroom-interiors",
    slug: "bedroom-interiors",
    title: "Bedroom Interiors & Wardrobes",
    category: "Residential",
    tagline: "Serene, clutter-free sanctuaries with tailored storage solutions",
    shortDescription:
      "Custom upholstered beds, acoustic bed back panelling, integrated dressing units, and floor-to-ceiling modular wardrobes built with precision hardware.",
    heroImage:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    ],
    overview:
      "Create a restorative retreat that marries relaxing tactile textures with organized, high-capacity modular storage. From sliding glass wardrobes with sensor LED lighting to upholstered platform beds with hydraulic storage, our bedroom designs maximize both visual serenity and day-to-day convenience.",
    features: [
      {
        title: "Floor-to-Ceiling Wardrobe Systems",
        description: "Zero dead space overhead; custom configurations with tie racks, jewelry drawers, and trouser pull-outs.",
      },
      {
        title: "Integrated Lighting & Fluted Accents",
        description: "Concealed warm LED profiles, bedside pendant drops, and textural wooden or fabric headboards.",
      },
      {
        title: "Multipurpose Dressing & Vanity Areas",
        description: "Backlit mirrors, dedicated cosmetic organizers, and seamless integration with master wardrobe banks.",
      },
      {
        title: "Hydraulic Storage Bedframes",
        description: "Smooth gas-lift storage mechanisms for effortless under-bed bedding and luggage storage.",
      },
    ],
    specifications: [
      { label: "Core Board", value: "HDHMR / Calibrated Commercial & BWP Plywood" },
      { label: "Wardrobe Shutters", value: "Sliding, Hinged, Walk-in Tinted Glass with Black Anodized Profiles" },
      { label: "Internal Accessories", value: "Soft-close jewelry trays, pull-out shoe organizers, tie racks" },
      { label: "Finish Textures", value: "Fabric-feel Laminates, Fluted Panels, Matt PU, Tinted Glass" },
    ],
    processSteps: [
      "Spatial Ergonomics & Wardrobe Needs Audit",
      "3D Layout of Bed Position, Wardrobes & Vanity",
      "Selection of Hardware, Lighting & Textures",
      "Factory Fabrication of Wardrobe Modules",
      "Installation of Headboards & Lighting Grooves",
      "Final Shutter Adjustment & Client Inspection",
    ],
    faqs: [
      {
        question: "Can you design walk-in closets in compact bedrooms?",
        answer: "Yes, our space planners utilize glass partition systems and open modular bay configurations to create efficient walk-in closet sensations even in space-conscious bedrooms.",
      },
    ],
  },
  {
    id: "living-room-interiors",
    slug: "living-room-interiors",
    title: "Living Room Interiors",
    category: "Residential",
    tagline: "Contemporary focal walls, entertainment consoles, and welcoming foyers",
    shortDescription:
      "Sophisticated social spaces featuring marble-finish TV units, fluted acoustic panelling, concealed cable management, and architectural foyer shoe consoles.",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    ],
    overview:
      "The living room shapes your home's first impression. We combine architectural paneling, discreet storage, and warm ambient illumination to deliver spaces that are welcoming for guests and comfortable for quiet evenings.",
    features: [
      {
        title: "Statement Entertainment & TV Consoles",
        description: "Zero visible wiring, floating storage drawers, stone or fluted wood backdrops, and acoustic accents.",
      },
      {
        title: "Foyer & Shoe Storage Units",
        description: "Ventilated modular shoe cabinets, seating benches, and decorative niches for entryway elegance.",
      },
      {
        title: "Partition & Crockery Display Solutions",
        description: "Slim metal-framed glass dividers and illuminated display cabinets separating living and dining zones.",
      },
      {
        title: "Integrated False Ceiling & Ambient Lighting",
        description: "Recessed COB spotlights, magnetic track lights, and perimeter cove lighting for balanced luminosity.",
      },
    ],
    specifications: [
      { label: "Surfaces", value: "PU Satin, Sintered Stone Sheets, Fluted Louvers, Veneer" },
      { label: "Lighting", value: "CRI 90+ Warm White LED profiles and magnetic tracks" },
      { label: "Cable Management", value: "Internal conduits and hidden service access ports" },
    ],
    processSteps: [
      "Foyer to Dining Spatial Flow Analysis",
      "Focal Wall Concept & Lighting Simulation",
      "Material Specification & Color Palette",
      "Factory Fabrication of TV & Foyer Millwork",
      "On-site Wall Paneling & Lighting Setup",
      "Finishing, Polishing & Handover",
    ],
    faqs: [
      {
        question: "How do you manage messy TV and gaming console wiring?",
        answer: "All our TV unit designs include built-in hidden conduits and concealed power strips behind removable service panels so not a single wire remains visible.",
      },
    ],
  },
  {
    id: "office-interiors",
    slug: "office-interiors",
    title: "Corporate Office Interiors",
    category: "Commercial",
    tagline: "Dynamic workspaces built for collaboration, focus, and corporate prestige",
    shortDescription:
      "Complete corporate office design and build: executive director suites, open-plan modular workstations, acoustic conference rooms, and ergonomic furniture.",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
    ],
    overview:
      "True to the Office Elevate heritage, we engineer workplaces that boost team morale, support focused deep work, and express brand leadership. We deliver end-to-end commercial solutions—from layout planning adhering to egress codes to modular desking systems with integrated power troughs and acoustic meeting spaces.",
    features: [
      {
        title: "Modular Desking & Workstation Clusters",
        description: "Linear and 120-degree desking systems with aluminum powder-coated raceways and acoustic fabric screens.",
      },
      {
        title: "Executive Director & Cabin Suites",
        description: "Prestigious veneer and leather-finish executive desks, integrated credenzas, and private meeting lounges.",
      },
      {
        title: "Smart Boardrooms & AV Conference Rooms",
        description: "Conference tables with motorized pop-up power boxes, acoustic wall claddings, and video conferencing zoning.",
      },
      {
        title: "Cafeteria & Collaborative Breakout Hubs",
        description: "Vibrant high-top tables, booth seating, and informal collaboration corners that recharge teams.",
      },
    ],
    specifications: [
      { label: "Structure", value: "Heavy-gauge CRCA Steel frames with anti-rust epoxy powder coating" },
      { label: "Table Tops", value: "25mm E1-grade pre-laminated boards with 2mm PVC machine edge banding" },
      { label: "Acoustics", value: "PET felt acoustic panels (NRC 0.85) and double-glazed partition systems" },
      { label: "Electrification", value: "Internal wire raceways with modular switch plates and HDMI/Cat6 pass-throughs" },
    ],
    processSteps: [
      "Headcount Capacity & Workflow Zoning Study",
      "3D Layout, MEP & Lighting Architecture",
      "Furniture Prototype & Material Approval",
      "Factory Production of Workstations & Cabins",
      "On-Site MEP, Partitioning & Modular Assembly",
      "Safety Sign-off, Snag Rectification & Handover",
    ],
    faqs: [
      {
        question: "Can you supply workstations for 50 to 500 seats?",
        answer: "Yes, our automated manufacturing capacity produces modular desking clusters for both growing boutique businesses and large enterprise floor plates with consistent quality.",
      },
    ],
  },
  {
    id: "commercial-interiors",
    slug: "commercial-interiors",
    title: "Commercial & Retail Interiors",
    category: "Commercial",
    tagline: "High-impact retail showrooms, hospitality venues, and institutional spaces",
    shortDescription:
      "Customer-centric commercial interiors engineered for high footfall, eye-catching visual merchandising, durable surfaces, and compliant architectural flow.",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
    ],
    overview:
      "For retail boutiques, client experience centers, healthcare clinics, and hospitality establishments, physical interior ambiance directly drives conversions. We balance inviting aesthetics with commercial-grade durability and strict adherence to public accessibility codes.",
    features: [
      {
        title: "High-Traffic Surface Durability",
        description: "Commercial-grade wear-resistant finishes, impact-resistant edges, and heavy-duty hardware.",
      },
      {
        title: "Custom Display Racks & Merchandising Fixtures",
        description: "Modular wall-mounted and island display units designed for swift product restocking.",
      },
      {
        title: "Striking Brand Experience Points",
        description: "Photogenic reception counters, illuminated 3D signage backdrops, and signature lighting accents.",
      },
    ],
    specifications: [
      { label: "Footfall Durability", value: "Class 33 / High Commercial Grade" },
      { label: "Lighting Integration", value: "High-CRI track spots for true color product rendering" },
    ],
    processSteps: [
      "Customer Footfall Flow & Merchandising Audit",
      "Concept Development & Brand Alignment",
      "Custom Fixture Fabrication in Factory",
      "Rapid On-Site Execution to Minimize Business Downtime",
    ],
    faqs: [
      {
        question: "How do you minimize business downtime during commercial fit-outs?",
        answer: "By manufacturing over 85% of display fixtures and modular casework in our factory before site delivery, on-site assembly is completed in a fraction of traditional carpentry time.",
      },
    ],
  },
  {
    id: "turnkey-interior-projects",
    slug: "turnkey-interior-projects",
    title: "Turnkey Interior Projects",
    category: "Manufacturing & Turnkey",
    tagline: "From bare shell to fully furnished keys—one responsible partner",
    shortDescription:
      "Comprehensive end-to-end design and execution encompassing civil, electrical, HVAC, plumbing, modular furniture, lighting, and final handover.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    ],
    overview:
      "Eliminate the stress of coordinating fragmented contractors. Our turnkey interior model provides complete single-window accountability. We take ownership of civil modifications, electrical routing, gypsum ceilings, modular manufacturing, and final decor styling under a unified milestone schedule.",
    features: [
      {
        title: "Single Point of Accountability",
        description: "One project director, one contract, and transparent milestone-based progress tracking.",
      },
      {
        title: "End-to-End Service Umbrella",
        description: "Covers civil demolition, masonry, waterproofing, MEP, modular woodwork, painting, and deep cleaning.",
      },
      {
        title: "Guaranteed Milestone Governance",
        description: "Structured project planning with weekly photo progress reports and clear handover targets.",
      },
    ],
    specifications: [
      { label: "Scope of Works", value: "Civil + MEP + Gypsum + Modular + Painting + Soft Furnishings" },
      { label: "Governance Model", value: "Dedicated Project Manager + Daily Site Supervisor" },
    ],
    processSteps: [
      "Shell Inspection & Structural Assessment",
      "Detailed Bill of Quantities (BOQ) & Timeline Mapping",
      "Civil, Plumbing & Electrical Rough-ins",
      "Factory Production of Modular Casework",
      "Simultaneous Ceiling, Painting & Tile Works",
      "Modular Installation, Deep Clean & Key Handover",
    ],
    faqs: [
      {
        question: "Why choose Turnkey over managing individual contractors?",
        answer: "Turnkey prevents cost escalations, contractor blame games, and design compromises. Because Office Elevate controls design, manufacturing, and installation directly, delays are drastically reduced.",
      },
    ],
  },
  {
    id: "customized-furniture-manufacturing",
    slug: "customized-furniture-manufacturing",
    title: "Customized Furniture Manufacturing",
    category: "Manufacturing & Turnkey",
    tagline: "Industrial precision millwork for bespoke residential and OEM architectural needs",
    shortDescription:
      "Precision computerized CNC cutting, PUR edge sealing, hydraulic pressing, and bespoke fabrication for architects, builders, and custom home projects.",
    heroImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",
    ],
    overview:
      "Beyond standard catalog modules, our manufacturing plant provides custom OEM and bespoke furniture production. We partner with architects, interior decorators, and commercial project managers to fabricate one-of-a-kind furniture designs to exact millimeter specifications.",
    features: [
      {
        title: "Industrial CNC & Beam Saw Precision",
        description: "Computerized nesting with 0.5mm cutting accuracy ensuring perfect 90-degree square edges.",
      },
      {
        title: "PUR Hot-Melt Zero-Joint Edge Banding",
        description: "Impervious to moisture and steam, preventing peeling or swelling in humid climates.",
      },
      {
        title: "Material Versatility",
        description: "Expert processing of BWP ply, HDHMR, Birch ply, acrylics, high-pressure laminates, and solid wood accents.",
      },
      {
        title: "Architect & OEM Collaboration",
        description: "Direct CAD drawing import, shop drawings generation, and rapid prototype approval.",
      },
    ],
    specifications: [
      { label: "Machinery Standard", value: "Automatic Heavy-Duty Beam Saws, Multi-Boring Units & Throughfeed Edge Banders" },
      { label: "Tolerance Standard", value: "Within 0.5 mm variance" },
      { label: "Edge Banding Adhesive", value: "High-Temperature PUR Moisture-Curing Polyurethane" },
    ],
    processSteps: [
      "CAD Drawings & Material Specs Ingestion",
      "CAM Programming & CNC Cutting Optimization",
      "Automated Edge Banding & Multi-Spindle Boring",
      "Dry-Assembly & 7-Point Quality Audit",
      "Protective Corner-Guard Transit Packaging",
      "Dispatch with Knock-down Assembly Manuals",
    ],
    faqs: [
      {
        question: "Can architects and interior designers send their own CAD files?",
        answer: "Yes, we work directly with architectural drawings, generate manufacturing shop drawings for approval, and fabricate exact custom modules under NDA.",
      },
    ],
  },
];
