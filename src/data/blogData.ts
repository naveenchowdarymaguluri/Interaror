export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Kitchen Guide" | "Wardrobes" | "Office Design" | "Materials & Finishes";
  excerpt: string;
  readTime: string;
  publishedDate: string;
  author: string;
  coverImage: string;
  content: {
    heading: string;
    paragraph: string;
    keyPoints?: string[];
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "bwp-plywood-vs-hdhmr-guide",
    slug: "bwp-plywood-vs-hdhmr-guide",
    title: "BWP Marine Plywood vs HDHMR: Which Core Board Should You Choose?",
    category: "Materials & Finishes",
    excerpt:
      "A clear, practical breakdown of Boiling Water Proof (BWP) Plywood and High-Density Moisture-Resistant (HDHMR) boards for Indian homes.",
    readTime: "5 min read",
    publishedDate: "October 8, 2026",
    author: "Terraform Modular Technical Team",
    coverImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        heading: "Understanding the Core Differences",
        paragraph:
          "When planning modular interiors in India, homeowners frequently grapple with whether to specify Boiling Water Proof (BWP) Marine Plywood or High-Density High-Moisture-Resistance (HDHMR) boards. Both materials serve distinct functions, and a successful interior project often strategically leverages both.",
      },
      {
        heading: "When to Choose 710 Grade BWP Plywood",
        paragraph:
          "BWP Marine Plywood is manufactured by bonding wood veneers with phenol formaldehyde synthetic resin under intense temperature and pressure. It is specifically formulated to withstand continuous water exposure, making it the non-negotiable choice for kitchen sink base cabinets, dishwasher enclosures, and bathroom vanities.",
        keyPoints: [
          "Certified to withstand 72 hours in boiling water without delaminating",
          "Superior screw holding along cross-grain layers",
          "Ideal for wet zones exposed to potential pipe leaks or direct moisture",
        ],
      },
      {
        heading: "When HDHMR Delivers Superior Performance",
        paragraph:
          "HDHMR is engineered by pressing wood fibers at densities exceeding 850 kg/m³. Because it lacks the internal voids or grain variations found in timber veneers, it provides an impeccably smooth surface that prevents orange-peel ripples when coated with high-gloss acrylics or PU satin lacquers.",
        keyPoints: [
          "Flawless surface smoothness for mirror-finish acrylic and PU paint shutters",
          "Exceptional machinability for intricate CNC fluting and J-pull grooved handles",
          "Highly cost-effective for dry areas such as bedroom wardrobes, TV walls, and foyer units",
        ],
      },
      {
        heading: "The Hybrid Recommendation",
        paragraph:
          "At Terraform Modular, we recommend the hybrid engineering approach: use calibrated 710 BWP Plywood for wet carcasses (kitchen bases and bathroom vanities) and high-density HDHMR for vertical wardrobe shutters, TV wall paneling, and dry cabinetry.",
      },
    ],
  },
  {
    id: "ergonomic-modular-kitchen-layouts",
    slug: "ergonomic-modular-kitchen-layouts",
    title: "5 Ergonomic Kitchen Layouts for Contemporary Indian Homes",
    category: "Kitchen Guide",
    excerpt:
      "From compact parallel galleys to social island kitchens, discover how the golden work triangle transforms your daily cooking experience.",
    readTime: "6 min read",
    publishedDate: "September 24, 2026",
    author: "Terraform Modular Design Studio",
    coverImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        heading: "The Foundation: The Kitchen Work Triangle",
        paragraph:
          "The work triangle connects the three core functional anchors of any kitchen: the cooking range (stove), the wet preparation area (sink), and the cold food storage (refrigerator). Keeping the sum of these three distances between 13 and 26 feet prevents exhausting pacing back and forth during meal prep.",
      },
      {
        heading: "1. The Parallel Galley: The Chef's Favorite",
        paragraph:
          "Two facing counters create the most efficient workflow in Indian cooking. One counter is dedicated strictly to wet cleaning and chopping, while the opposite counter handles the gas hob, chimney, and plating. This prevents cross-contamination and accommodates two cooks simultaneously.",
      },
      {
        heading: "2. The L-Shaped Layout: Best for Open Plans",
        paragraph:
          "Fitting comfortably into room corners, the L-shaped layout opens up room for a dining table or mobile breakfast bar. Utilizing blind-corner carousels (such as LeMans swing-outs) ensures that corner cabinet space is never wasted.",
      },
      {
        heading: "3. The Social Island Kitchen",
        paragraph:
          "For homes with spacious floor plans, an island creates a multi-generational hub. While dinner is simmering, children can complete homework or guests can enjoy appetizers at the counter overhang without intruding into the hot cooking zone.",
      },
    ],
  },
  {
    id: "modern-office-acoustic-space-planning",
    slug: "modern-office-acoustic-space-planning",
    title: "Designing Productive Workspaces: Noise Control & Ergonomics in 2026",
    category: "Office Design",
    excerpt:
      "How forward-thinking corporate workplaces balance vibrant open collaboration with quiet focus zones using modular furniture and acoustic zoning.",
    readTime: "4 min read",
    publishedDate: "September 15, 2026",
    author: "Terraform Modular Commercial Studio",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        heading: "The Paradox of the Modern Open Office",
        paragraph:
          "While open layouts foster spontaneous team exchanges, ambient chatter and telephone calls can degrade cognitive focus. Modern corporate design addresses this with intentional acoustic zoning rather than rigid drywall barriers.",
      },
      {
        heading: "Tackable PET Acoustic Partitions",
        paragraph:
          "By mounting high-density recycled PET felt screens directly onto modular workstation raceways, sound waves are absorbed right at speech level. This dampens conversational spread without isolating team members behind opaque walls.",
      },
      {
        heading: "Ergonomics That Prevent Work Fatigue",
        paragraph:
          "Workstation height standard (750mm), waterfall desktop edge-banding that protects wrists from sharp pressure points, and integrated cable troughs keep desk surfaces clear of mental and physical clutter.",
      },
    ],
  },
];
