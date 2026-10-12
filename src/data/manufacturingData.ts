export interface ManufacturingStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  technicalHighlight: string;
  image: string;
}

export interface MaterialSpecification {
  category: string;
  name: string;
  grade: string;
  bestUsedFor: string;
  keyBenefits: string[];
}

export const manufacturingSteps: ManufacturingStep[] = [
  {
    stepNumber: "01",
    title: "CAD / CAM Digital Engineering",
    subtitle: "Millimeter-precise digital layouts",
    description:
      "Every approved interior design is translated into Computer-Aided Manufacturing (CAM) machine code. Cutting optimization software automatically calculates board yield to minimize material waste and plan hardware boring locations before a single cut is made.",
    technicalHighlight: "Nesting algorithms eliminate dimensional errors and optimize raw board utilization by over 92%.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
  },
  {
    stepNumber: "02",
    title: "Computerized Beam Saw & CNC Sizing",
    subtitle: "Chipping-free 90-degree panel cutting",
    description:
      "Heavy-duty computerized beam saws with dual blades—a scoring blade followed by the main cutting blade—slice through raw panels and laminates. This guarantees crisp, 90-degree edges with zero chipping or laminate tearing.",
    technicalHighlight: "Cutting accuracy maintained within ±0.5 mm across panels up to 10 feet in length.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
  },
  {
    stepNumber: "03",
    title: "PUR Moisture-Lock Edge Banding",
    subtitle: "Seamless, water-resistant perimeter sealing",
    description:
      "Raw board edges are the most vulnerable entry point for atmospheric moisture and swelling. Our automated throughfeed edge-banders apply 1mm to 2mm PVC/ABS bands using reactive Polyurethane (PUR) hot-melt adhesive, followed by diamond trimming and buffing.",
    technicalHighlight: "Creates an invisible, steam-resistant zero-joint line that outperforms conventional EVA glues.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    stepNumber: "04",
    title: "Multi-Spindle Boring & Grooving",
    subtitle: "Factory-drilled hardware alignment",
    description:
      "Unlike erratic manual drill-work done by on-site carpenters, multi-spindle boring machines drill exact 32mm system holes for hinges, shelf supports, cam locks, and drawer runners at exact depths without through-punching.",
    technicalHighlight: "Guarantees that drawer slides and door hinges remain true and aligned for decades.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
  },
  {
    stepNumber: "05",
    title: "Trial Pre-Assembly & 7-Point QA",
    subtitle: "Zero surprises at your home or office",
    description:
      "Prior to packaging, representative cabinets and custom modular assemblies undergo factory trial fitting. Our inspection officers audit diagonal squareness, door gaps, runner glide friction, edge adhesion, and surface scratch resistance.",
    technicalHighlight: "Every piece must receive an inspector's QA clearance barcode before dispatch.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
  },
  {
    stepNumber: "06",
    title: "Protected Knock-Down Delivery & Fit-out",
    subtitle: "Dust-free, swift on-site installation",
    description:
      "Panels are packed with high-density corner guards and bubble-cushioned stretch film. Because components are pre-cut and bored, on-site assembly is fast, tidy, and virtually dust-free—drastically reducing inconvenience at your property.",
    technicalHighlight: "Installation completed in 5 to 7 days on-site instead of months of noisy manual carpentry.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
  },
];

export const materialSpecifications: MaterialSpecification[] = [
  {
    category: "Core Boards",
    name: "Boiling Water Proof (BWP) Marine Ply",
    grade: "IS:710 Certified Calibrated",
    bestUsedFor: "Modular kitchen sink units, base cabinets, bathroom vanities, and high-humidity areas.",
    keyBenefits: [
      "Tested for 72-hour boiling water immersion without delamination",
      "Calibrated thickness for uniform laminate bonding",
      "Naturally borer and termite resistant",
    ],
  },
  {
    category: "Core Boards",
    name: "HDHMR (High-Density High Moisture Resistance)",
    grade: "High Density (>850 kg/m³)",
    bestUsedFor: "Wardrobe shutters, TV panelling, bedroom furniture, and intricate CNC routing.",
    keyBenefits: [
      "Ultra-dense homogeneous core prevents screw loosening",
      "Superior surface smoothness for high-gloss acrylic and PU paints",
      "High screw holding strength exceeding 2000 N",
    ],
  },
  {
    category: "Surface Finishes",
    name: "Anti-Fingerprint Super Matt Laminates",
    grade: "0.8mm to 1.0mm High Pressure Laminate (HPL)",
    bestUsedFor: "Daily-use kitchen shutters, office desks, and living room cabinets.",
    keyBenefits: [
      "Velvety soft-touch texture that repels greasy fingerprint smudges",
      "High scratch and thermal resistance",
      "Effortless maintenance with standard damp cloth wiping",
    ],
  },
  {
    category: "Surface Finishes",
    name: "European Acrylic Panels",
    grade: "2mm Virgin Acrylic on HDHMR",
    bestUsedFor: "High-end contemporary modular kitchen overhead shutters and accent panels.",
    keyBenefits: [
      "Glass-like 90%+ specular gloss reflectivity",
      "UV-stable colors that do not yellow or fade over years",
      "Minor surface scuffs can be polished out with acrylic paste",
    ],
  },
  {
    category: "Hardware & Fittings",
    name: "Soft-Close Hinges & Motion Hardware",
    grade: "Blum Clip-Top / Hettich Sensys",
    bestUsedFor: "All swinging cabinet doors and drawer runners.",
    keyBenefits: [
      "Tested for over 100,000 opening/closing cycles",
      "Integrated hydraulic dampers for silent, slam-free operation",
      "3-way tool-free clip adjustment for seamless cabinet alignment",
    ],
  },
];
