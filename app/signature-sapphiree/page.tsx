import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import SpecsAccordion from "./SpecsAccordion";
import InquiryForm from "./InquiryForm";

export const metadata: Metadata = {
  title: "Mala's Signature Sapphire – Premium 3BHK Homes in Kolathur",
  description:
    "Your final opportunity to own luxury 3BHK homes at Haridoss Nagar, Kolathur. Premium East-facing flats with security systems, lift, covered car park, and more.",
};

const keyFeatures = [
  { icon: "🔒", label: "Security Systems" },
  { icon: "⚡", label: "Auto Genset Backup" },
  { icon: "☀️", label: "East Facing" },
  { icon: "🛗", label: "Lift" },
  { icon: "🅿️", label: "Covered Car Park" },
];

const floorPlans = [
  { type: "Flat F1/S1/T1", area: "1084 sq.ft", config: "3BHK & 3 Toilet" },
  { type: "Flat F2/S2/T2", area: "1154 sq.ft", config: "3BHK & 3 Toilet" },
];

const specs = [
  {
    title: "Structure",
    details: [
      "RCC Framed Structure",
      "Pile Foundation",
      "Vaasthu-compliant design",
      "Earthquake-resistant construction",
    ],
  },
  {
    title: "Carpentry",
    details: [
      "Teak wood / ABS main doors",
      "UPVC windows for durability",
      "Smart lock system",
      "Premium internal doors with laminate finish",
    ],
  },
  {
    title: "Electrical",
    details: [
      "3-phase power supply",
      "CCTV provision in all common areas",
      "15A AC & geyser points in all rooms",
      "Modular switches throughout",
    ],
  },
  {
    title: "Flooring",
    details: [
      "Vitrified tiles 6x4 in living & dining",
      "Vitrified tiles 4x2 in bedrooms",
      "Crystal black granite kitchen platform",
      "Anti-skid tiles in bathrooms & balcony",
    ],
  },
  {
    title: "Sanitary",
    details: [
      "Somany / Jaquar branded fittings",
      "Parryware sanitary ware",
      "Premium CP fittings",
      "Hot & cold water provision",
    ],
  },
  {
    title: "Painting",
    details: [
      "Asian Royale Matt interior finish",
      "Apex Ultima exterior finish",
      "Waterproof coating on external walls",
      "Premium putty finish on all walls",
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
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gold/20 via-charcoal to-charcoal-light border border-gold/10">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-gold tracking-[0.3em] uppercase text-xs mb-2">Premium</p>
                    <p className="text-warm-white font-serif text-3xl font-bold mb-2">Signature Sapphire</p>
                    <p className="text-warm-white/50 text-sm">6 Exclusive 3BHK Homes</p>
                  </div>
                </div>
              </div>
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
                <div className="text-3xl mb-3">{feature.icon}</div>
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
