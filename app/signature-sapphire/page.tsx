import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import SpecsAccordion from "./SpecsAccordion";
import InquiryForm from "./InquiryForm";
import SignatureCarousel from "@/components/SignatureCarousel";


export const metadata: Metadata = {
  title: "Mala's Signature Sapphire | Premium 3BHK Homes in Kolathur",
  description: "Your final opportunity to own luxury 3BHK homes at Haridoss Nagar, Kolathur. Premium East-facing flats with security systems, lift, covered car park, and more.",
  openGraph: {
    title: "Signature Sapphire | Luxury 3BHK Homes by Mala's",
    description: "Experience premium East-facing 3BHK homes in the heart of Kolathur. Modern amenities and architectural excellence.",
    images: ["/images/open-graph/open-graph.webp"],
  },
};


const keyFeatures = [
  {
    label: "Security Systems",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mx-auto"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  {
    label: "Auto Genset Backup",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mx-auto"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
  },
  {
    label: "East Facing",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mx-auto"><circle cx="12" cy="12" r="4"/><path d="m12 2 1 1"/><path d="m12 21 1 1"/><path d="m2 12 1 1"/><path d="m21 12 1 1"/><path d="m22 22-2-2"/><path d="m2 2 2 2"/><path d="m20 4-1 1"/><path d="m5 19-1 1"/></svg>`
  },
  {
    label: "Lift",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mx-auto"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m7 10 5-5 5 5"/><path d="m7 14 5 5 5-5"/></svg>`
  },
  {
    label: "Covered Car Park",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mx-auto"><circle cx="12" cy="12" r="10"/><path d="M9 17V7h3.3a3 3 0 1 1 0 6H9"/></svg>`
  },
];

const floorPlans = [
  { type: "Flat F1/S1/T1", area: "1084 sq.ft", config: "3BHK & 3 Toilet" },
  { type: "Flat F2/S2/T2", area: "1154 sq.ft", config: "3BHK & 3 Toilet" },
];

const specs = [
  {
    title: "Structure",
    details: [
      "RCC Framed structure with Pile Foundation",
      " Plans and Drawings as per Vaasthu",
      "Pest control treatment as per IS specifications",
      "6 Passengers lift facility",
      "Suitable capacity Back-up Generator to cover common lighting, pumps sets & apartment essential points as same as all portions",
      "Common lighting arrangement",
      "Headroom Door with M.S grill gate for additional security",
      "Granite for staircase steps",
      "All around compound wall with proper height",
      "RCC Underground sump with 12000 liter capacity for metro water",
      "Individual EB connection& Common Metro water connection",
      "Automation for bore water and metro water"
    ],
  },
  {
    title: "Carpentry",
    details: [
      "Teak wood or ABS main doors with smart lock – Mala’s standard design",
      "UPVC windows and ventilators",
      "Flush doors with Teak wood frames for bedrooms",
      "Granite frames and wpc door for bathrooms",
    ],
  },
  {
    title: "Electrical",
    details: [
      "Three Phase power supply with control panel board arrangement",
      "15 amps AC point to all Bedrooms",
      "15 amps Geyser point to Bathrooms",
      "GM & Orbit for wiring",
      "CCTV camera at all strategic locations & smart system for lift lobby entrance",
      
    ],
  },
  {
    title: "Flooring",
    details: [
      "Vitrified Tiles of size 6'x4' for living room, 4’x2’ for bedrooms and kitchen",
      "Glazed Tiles for Bathroom upto ceiling and kitchen walls – 4‘x2’",
      "Anti skid flooring tiles for bathrooms – 2’x2 matt finish tiles",
      "Crystal black Granite top for kitchen platform",
    ],
  },
  {
    title: "Sanitary",
    details: [
      "European Water Closets (Somany,Essco jaguar ) for all toilets",
      "Branded CP fittings (Parryware, Jaquar)",
      "Wash basins (Parryware, Jaquar)",
      "CPVC pipes for Hot & Cold line (Astral, Aashirwad,Finolex)",
      "Divertor with Shower (Parryware, Jaquar)",
    ],
  },
  {
    title: "Painting",
    details: [
      "Putty finish for interior walls with Birla wall putty",
      "Asian royale matt for interior walls",
      "Apex Ultima shield for Exterior walls",
      "Enamel paint finish for Ms Doors on top floor and Window grills",
    ],
  },
];

export default function SignatureSapphirePage() {
  return (
    <>
      <HeroSection
        subtitle="Mala's Signature Sapphire"
        title="Your Final Opportunity to Own a Luxurious Lifestyle"
        description="6 premium East-facing 3BHK homes at Haridoss Nagar – 1st Main Road, Kolathur, Chennai"
        primaryCta={{ label: "Enquire Now", href: "#inquiry" }}
        secondaryCta={{ label: "View Floor Plans", href: "#floor-plans" }}
      />

      {/* About the Project */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="About the Project"
                subtitle="Premium living redefined in the heart of Chennai"
                center={false}
              />
              <div className="space-y-4 text-soft-grey leading-relaxed">
                <p>
                  <strong className="text-charcoal">Mala&apos;s Signature Sapphire</strong> is an exclusive residential project featuring 6 premium East-facing 3BHK homes, thoughtfully designed for modern families who value luxury, comfort, and convenience.
                </p>
                <p>
                  Located on the prestigious Haridoss Nagar – 1st Main Road, this project offers easy access to schools, hospitals, shopping centers, and public transport, making it the perfect address for your family.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <SignatureCarousel />
            </div>

          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {keyFeatures.map((feature) => (
              <div
                key={feature.label}
                className="text-center p-6 rounded-xl border border-gold/10 bg-charcoal-light/30 hover:border-gold/30 transition-colors"
              >
                <div
                  className="text-gold mb-3"
                  dangerouslySetInnerHTML={{ __html: feature.icon }}
                />
                <p className="text-warm-white text-sm font-medium">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section id="floor-plans" className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Floor Plans"
            subtitle="Thoughtfully designed layouts for maximum space and comfort"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {floorPlans.map((plan) => (
              <div
                key={plan.type}
                className="p-8 rounded-xl border border-gray-100 bg-white card-hover text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-2">{plan.type}</h3>
                <div className="text-3xl font-serif font-bold text-gold mb-1">{plan.area}</div>
                <p className="text-soft-grey text-sm">{plan.config}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technical Specifications"
            subtitle="Premium materials and finishes throughout"
          />
          <SpecsAccordion specs={specs} />
        </div>
      </section>

      {/* Site Address */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Site Location</h3>
          <p className="text-warm-white font-serif text-2xl mb-4">
            No.20, 7/21, Haridas 1st Main Road
          </p>
          <p className="text-warm-white/60">
            Santhi Nagar, Kolathur, Chennai – 600099
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="section-padding bg-warm-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Enquire Now"
            subtitle="Get in touch to book your dream home at Signature Sapphire"
          />
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
