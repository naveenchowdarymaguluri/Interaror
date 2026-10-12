# Office Elevate — Premium Interior Design & Modular Furniture Website

A production-ready website for **Office Elevate**, specializing in residential interior design, corporate workspaces, and precision modular furniture manufacturing.

---

## 1. Brand Identity & Visual System

- **Official Brand Logo:** Located at `public/images/office-elevate-logo.jpg` and integrated via `src/components/common/Logo.tsx`.
- **Primary Brand Palette:**
  - **Primary Yellow:** `#EEC10E` (10% allocation: High-intent CTAs, active indicators, badges)
  - **Deep Navy Blue:** `#1F3B6B` (20% allocation: Structural elements, typography, hero headers, footer)
  - **Neutral Grey:** `#CFCFCF` (Subtle architectural borders and badges)
  - **Surfaces & Background:** `#FEFEFE` / `#F8FAFC` (70% spacious architectural editorial whitespace)
- **Typography:** `Manrope` (Google Font with weights 300 to 800) for geometric, modern architectural clarity.

---

## 2. Information Architecture & Pages

1. **Homepage (`/`)**:
   - Section 1: Hero with contemporary modular interior photography and dual CTAs.
   - Section 2: Trust and verified capabilities placeholders.
   - Section 3: Visual Service Cards (8 core offerings).
   - Section 4: Products & Modular Solutions (Interactive categories).
   - Section 5: Featured Projects (Filterable portfolio with live category tabs).
   - Section 6: Why Choose Office Elevate (0.5mm precision, BWP Marine carcass, German motion hardware).
   - Section 7: Manufacturing & Craftsmanship (Industrial beam saws, PUR edge banding, QC audits).
   - Section 8: How It Works (6-step transparent project journey).
   - Section 9: Client Testimonials (Configurable feedback placeholders).
   - Section 10: High-impact Consultation CTA Banner.
   - Section 11: Practical FAQ Accordion (10 realistic, configurable answers).
   - Section 12: Comprehensive Footer with full sitemap and legal links.
2. **About Us (`/about`)**:
   - Company introduction, architectural philosophy, mission, vision, and core values.
3. **Services (`/services`)**:
   - Overview hub and 8 dedicated dynamic detail pages (`/services/[slug]`):
     - Complete Home Interiors
     - Modular Kitchen Design
     - Bedroom Interiors & Wardrobes
     - Living Room Interiors
     - Corporate Office Interiors
     - Commercial & Retail Interiors
     - Turnkey Interior Projects
     - Customized Furniture Manufacturing
4. **Products (`/products`)**:
   - Modular furniture catalog with category filters and dedicated dynamic detail pages (`/products/[slug]`):
     - Nordic Minimalist L-Shaped Kitchen
     - Contemporary Monolith Island Kitchen
     - Urban Parallel Galley Kitchen
     - Architectural Tinted Glass Wardrobe
     - Bespoke Walk-in Dressing Suite
     - Fluted Charcoal & Marble Media Wall
     - Apex Modular 4-Person Desking Cluster
     - Monarch Executive Director Suite
     - Signature Architectural Reception Counter
5. **Our Projects (`/projects`)**:
   - Filterable, searchable portfolio and dynamic case study pages (`/projects/[slug]`) with design briefs, verified materials & finishes tables, and consultation triggers.
6. **Manufacturing (`/manufacturing`)**:
   - 6-stage industrial workflow (CAD/CAM, computerized beam saws, PUR edge sealing, multi-spindle boring, trial pre-assembly, knock-down delivery) and certified material specifications.
7. **Budget Estimator (`/estimator`)**:
   - Interactive interior cost estimator with property presets (1BHK, 2BHK, 3BHK, Villa, Office), carpet area slider, finish tiers (Essential, Premium, Luxury), scope selectors, and WhatsApp export.
8. **Contact Us (`/contact`)**:
   - Studio address, phone, email, consultation hours, validated multi-field enquiry form, WhatsApp express chat, and interactive map placeholder.
9. **Blog & Design Ideas (`/blog`)**:
   - Editorial articles (`/blog/[slug]`):
     - BWP Marine Plywood vs HDHMR Guide
     - 5 Ergonomic Kitchen Layouts for Contemporary Homes
     - Designing Productive Workspaces in 2026
10. **Legal Pages**:
    - Privacy Policy (`/privacy-policy`)
    - Terms and Conditions (`/terms-and-conditions`)
11. **SEO & Automation**:
    - `sitemap.xml` generated automatically from static and dynamic content.
    - `robots.txt` configured with search engine guidelines.
    - Structured Schema.org (`HomeAndConstructionBusiness`, `LocalBusiness`, `BreadcrumbList`).

---

## 3. Lead Generation & Backend API

- **Enquiry Endpoint:** `POST /api/enquiry`
  - Validates required fields: Full Name, 10-digit mobile number, Project Type, and Location.
  - Sanitizes user input and logs leads with unique IDs (`lead_<timestamp>_<hash>`).
  - Returns structured JSON response with user-friendly confirmation and lead tracking ID.
  - Development-mode in-memory lead store with fallback documentation for production CRM webhook (e.g. Zoho, Salesforce, Google Sheets).
- **WhatsApp Integration:**
  - `getWhatsAppUrl(customMessage)` dynamically generates user-consenting WhatsApp URLs with pre-filled enquiry parameters and URL encoding.
- **Click-to-Call:**
  - Centralized telephone actions via `getPhoneUrl()`.

---

## 4. Configuration & Customization

Update company details, contact information, and business metrics in a single central file:
`src/data/companyData.ts`:

```typescript
export const companyConfig = {
  name: "Office Elevate",
  phone: "+919876543210",
  whatsappNumber: "+919876543210",
  email: "hello@officeelevate.com",
  address: { ... },
  workingHours: { ... },
  metrics: [ ... ],
};
```

---

## 5. Running the Application

### Development Server
```bash
npm run dev
```

### Production Build & Launch
```bash
npm run build
npm start
```
The application will run on `http://localhost:3000`.

# Interaror
