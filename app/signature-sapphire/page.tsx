import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import SpecsExplorer from "./SpecsExplorer";
import InquiryForm from "./InquiryForm";
import SignatureCarousel from "@/components/SignatureCarousel";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signature Sapphire | Premium 3BHK Homes in Kolathur",
  description: "Exquisite East-facing 3BHK boutique apartments in Haridoss Nagar, Kolathur. Experience a life of distinction with Mala's Signature Sapphire.",
  openGraph: {
    title: "Signature Sapphire | Boutique Luxury Living",
    description: "Limited edition 3BHK homes designed for those who appreciate the finer things in life.",
    images: ["https://mala-constructions.vercel.app/images/open-graph/open-graph.webp"],
  },
};

const keyFeatures = [
  {
    label: "Security Systems",
    desc: "State-of-the-art surveillance and smart access.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  {
    label: "Auto Genset",
    desc: "Uninterrupted power for all your essential needs.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
  },
  {
    label: "Vastu Compliant",
    desc: "Thoughtfully designed East-facing layouts.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><circle cx="12" cy="12" r="4"/><path d="m12 2 1 1"/><path d="m12 21 1 1"/><path d="m2 12 1 1"/><path d="m21 12 1 1"/></svg>`
  },
  {
    label: "Premium Lift",
    desc: "Whisper-quiet automated 6-passenger elevator.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m7 10 5-5 5 5"/><path d="m7 14 5 5 5-5"/></svg>`
  },
  {
    label: "Covered Parking",
    desc: "Dedicated spacious parking for every residence.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><circle cx="12" cy="12" r="10"/><path d="M9 17V7h3.3a3 3 0 1 1 0 6H9"/></svg>`
  },
];

const floorPlans = [
  {
    type: "Elite Series F1",
    area: "1084",
    config: "3BHK Luxury Suite",
    toilets: "3",
    image: "/images/blue-print/blue-print-1.png",
    details: ["East Facing", "UDS: 485 sq.ft", "Private Balcony", "Ventilated Kitchen"]
  },
  {
    type: "Elite Series F2",
    area: "1154",
    config: "3BHK Grand Suite",
    toilets: "3",
    image: "/images/blue-print/blue-print-2.webp",
    details: ["East Facing", "UDS: 516 sq.ft", "Expansion Living", "Corner Unit"]
  },
];

const specs = [
  {
    title: "Structure & Foundation",
    details: [
      "RCC Framed structure with high-performance Pile Foundation",
      "Scientific Vastu-aligned architectural layouts",
      "Advanced pest control treatment as per IS specifications",
      "Automatic high-speed 6-passenger boutique lift",
      "Full DG backup for common areas and essential points",
      "Signature granite finishes for common areas and staircases",
      "12,000L Underground RCC sump exclusively for Metro water"
    ],
  },
  {
    title: "Carpentry & Openings",
    details: [
      "Custom Teak wood main doors with biometric smart locking",
      "Premium UPVC wind-resistant windows and ventilators",
      "Designer Flush doors with Teak wood frames for all bedrooms",
      "Moisture-resistant WPC doors with granite frames for bathrooms",
    ],
  },
  {
    title: "Electrical & Smart Systems",
    details: [
      "Sophisticated 3-phase power with unified control panels",
      "Dedicated high-amp AC points in all primary suites",
      "ISI certified GM & Orbit concealed wiring systems",
      "Complete CCTV surveillance at strategic exit/entry points",
      "Smart access system for the main lift lobby"
    ],
  },
  {
    title: "Exquisite Flooring",
    details: [
      "Grand Format Vitrified Tiles (6'x4') in common living areas",
      "Premium 4'x2' Vitrified Tiles for bedroom and culinary zones",
      "Floor-to-ceiling Glazed Ceramic tiles in bath suites",
      "Anti-skid matte finish designer tiles for all wet areas",
      "Polished Crystal Black Granite for the gourmet kitchen top"
    ],
  },
  {
    title: "Sanitary & Plumbing",
    details: [
      "European Water Closets (EWC) from Jaquar / Somany",
      "Full Range CP fittings by Jaguar / Parryware",
      "Concealed diverter systems with overhead rain showers",
      "Lead-free Astral/Aashirwad CPVC plumbing infrastructure"
    ],
  },
];

export default function SignatureSapphirePage() {
  return (
    <div className="bg-warm-white selection:bg-gold selection:text-charcoal overflow-x-hidden">

      {/* Premium Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-40">
          <SignatureCarousel />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal" />

        {/* Floating Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] text-[18vw] font-serif font-bold text-white whitespace-nowrap">
          SAPPHIRE
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-md animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Limited Edition: 6 Residences Only</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-warm-white mb-8 tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Signature <span className="text-gold">Sapphire</span>
          </h1>

          <p className="max-w-2xl mx-auto text-warm-white/70 text-lg md:text-xl leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Boutique 3BHK homes designed for high-calibre living. Perfectly situated in Haridoss Nagar, Chennai.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Link href="#inquiry" className="group relative px-10 py-4 bg-gold text-charcoal font-bold rounded overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10 uppercase tracking-widest text-sm text-charcoal">Request Brochure</span>
              <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link href="#features" className="group px-10 py-4 border border-warm-white/20 text-warm-white font-bold rounded transition-all duration-300 hover:bg-white/5 hover:border-gold uppercase tracking-widest text-sm">
              Explore Amenities
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold opacity-50 animate-bounce">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* The Lifestyle Concept */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading
                title="Exquisite Craftsmanship"
                subtitle="Where every detail is polished to perfection, just like a sapphire."
                center={false}
              />
              <div className="space-y-6 text-soft-grey text-lg leading-relaxed">
                <p>
                  <strong className="text-charcoal">Signature Sapphire</strong> is not just a residential project; it is a statement of status. Located on the prestigious Haridoss 1st Main Road, these boutique residences offer the privacy of a focused community with the luxury of a world-class apartment.
                </p>
                <p>
                  With only 2 residences per floor, every home enjoys expansive ventilation, abundant natural light, and a sense of openness that is rare in urban environments.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                <div>
                  <div className="text-4xl font-serif font-bold text-gold mb-1">2/Floor</div>
                  <div className="text-xs uppercase tracking-widest text-soft-grey font-bold">Privacy Ensured</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-gold mb-1">East</div>
                  <div className="text-xs uppercase tracking-widest text-soft-grey font-bold">Vastu Compliant</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <SignatureCarousel />
              </div>
              {/* Decorative Corner */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-gold/20 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-gold/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* The Blueprint of Luxury */}
      <section id="features" className="py-32 bg-charcoal relative overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-gold)_0%,_transparent_55%)] opacity-[0.06]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-gold)_0%,_transparent_55%)] opacity-[0.04]" />

        {/* Architectural grid lines */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />

        {/* Large watermark number row */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around pointer-events-none select-none opacity-[0.025] overflow-hidden">
          {keyFeatures.map((_, i) => (
            <span key={i} className="text-[22rem] font-serif font-bold text-warm-white leading-none">{i + 1}</span>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="The Blueprint of Luxury"
            subtitle="Premium amenities integrated seamlessly into your lifestyle."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px mt-16 rounded-3xl overflow-hidden border border-white/5">
            {keyFeatures.map((feature, i) => (
              <div
                key={feature.label}
                className="group relative p-10 bg-white/[0.02] hover:bg-gold/[0.07] transition-all duration-700 text-center flex flex-col items-center overflow-hidden"
              >
                {/* Vertical divider (not on last) */}
                {i < keyFeatures.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/5" />
                )}

                {/* Number tag */}
                <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] font-bold text-gold/40 group-hover:text-gold/70 transition-colors duration-500">
                  0{i + 1}
                </div>

                {/* Icon container with glow ring */}
                <div className="relative mb-8 mt-4">
                  <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/10 group-hover:border-gold/30 group-hover:from-gold/20 group-hover:to-gold/10 transition-all duration-700 flex items-center justify-center">
                    <div
                      className="text-gold group-hover:scale-110 transition-transform duration-500"
                      dangerouslySetInnerHTML={{ __html: feature.icon }}
                    />
                  </div>
                </div>

                <h4 className="text-warm-white font-serif font-bold text-lg mb-3 group-hover:text-gold transition-colors duration-500">
                  {feature.label}
                </h4>
                <p className="text-warm-white/30 text-xs leading-relaxed group-hover:text-warm-white/60 transition-colors duration-500">
                  {feature.desc}
                </p>

                {/* Bottom gold line reveal */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gold group-hover:w-12 transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans - Blueprint Aesthetic */}
      <section id="floor-plans" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Architectural Blueprints"
            subtitle="Optimized layouts for spacious 3BHK residence profiles."
          />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {floorPlans.map((plan) => (
              <div
                key={plan.type}
                className="group relative bg-white p-12 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-1">{plan.type}</h3>
                    <p className="text-gold text-sm font-bold tracking-widest uppercase">{plan.config}</p>
                  </div>
                  <div className="px-4 py-2 bg-charcoal text-warm-white text-xs font-bold rounded-lg group-hover:bg-gold group-hover:text-charcoal transition-colors">
                    Available
                  </div>
                </div>

                <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-charcoal border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                  <Image
                    src={plan.image}
                    alt={`${plan.type} Floor Plan`}
                    fill
                    priority
                    quality={100}
                    className="object-contain hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle Blueprint Grid Pattern Overlay (Optional) */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')]" />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {plan.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gold" />
                        <span className="text-[11px] text-soft-grey font-medium uppercase tracking-wider">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={plan.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-bold text-gold hover:text-charcoal transition-colors group/link"
                  >
                    FULL PLAN
                    <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                  <div>
                    <span className="block text-[10px] text-soft-grey uppercase tracking-widest font-bold mb-1">Built-up Area</span>
                    <span className="text-3xl font-serif font-bold text-charcoal">{plan.area} <span className="text-sm font-sans font-normal text-soft-grey">sq.ft</span></span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-soft-grey uppercase tracking-widest font-bold mb-1">Bath Suites</span>
                    <span className="text-2xl font-serif font-bold text-charcoal">{plan.toilets}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Gold Standard */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Gold Standard"
            subtitle="Uncompromising quality through premium building materials."
          />
          <div className="mt-12">
            <SpecsExplorer specs={specs} />
          </div>
        </div>
      </section>

      {/* Exclusive Location Section */}
    

      {/* Inquiry Form */}
      <section id="inquiry" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <Image
          src="/images/client-images/Mala-construction-image-5.avif"
          alt="Mala Constructions luxury interior"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        {/* Gold tint bottom-right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — branding + image mosaic */}
            <div className="space-y-10">
              <div>
                <span className="text-gold tracking-[0.4em] uppercase text-[10px] font-bold">Limited Availability</span>
                <h2 className="mt-4 text-5xl md:text-6xl font-serif font-bold text-warm-white leading-tight">
                  Claim Your<br /><span className="text-gold">Sapphire</span>
                </h2>
                <p className="mt-6 text-warm-white/60 text-lg leading-relaxed max-w-md">
                  Only 6 residences. Join the exclusive circle of homeowners at Signature Sapphire — where every detail is a statement.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {[
                  { label: "Brochure Request", desc: "Detailed project specs & pricing" },
                  { label: "Site Visit Booking", desc: "Schedule a personal walkthrough" },
                  { label: "Home Loan Assistance", desc: "We guide you through financing" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </div>
                    <div>
                      <p className="text-warm-white text-sm font-bold tracking-wide">{item.label}</p>
                      <p className="text-warm-white/40 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 2×2 image mosaic */}
              <div className="grid grid-cols-2 gap-3 max-w-sm">
                {[
                  "/images/client-images/Mala-construction-image-1.avif",
                  "/images/client-images/Mala-construction-image-3.avif",
                  "/images/client-images/Mala-construction-image-7.avif",
                  "/images/client-images/Mala-construction-image-10.avif",
                ].map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-white/5">
                    <Image
                      src={src}
                      alt={`Mala project ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 hover:bg-transparent transition-colors duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right — frosted glass form card */}
            <div className="backdrop-blur-md bg-white/[0.06] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-charcoal/40">
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-warm-white mb-1">Send an Enquiry</h3>
                <p className="text-warm-white/40 text-sm">Our team will reach out within 24 hours.</p>
              </div>
              <InquiryForm glass />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
