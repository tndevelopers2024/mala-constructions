import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "At The Top | Luxury Stay by Mala's",
  description: "Experience luxury penthouse living just 6km from Chennai Central. Free Wi-Fi, smart home, private pool, personalized dining, and 24/7 concierge service.",
  openGraph: {
    title: "At The Top | Luxury Penthouse Stay in Chennai",
    description: "Discover a home away from home with premium amenities and panoramic city views.",
    images: ["/images/open-graph/open-graph.webp"],
  },
};


const amenities = [
  { 
    label: "Free Wi-Fi", 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>` 
  },
  { 
    label: "Smart Home", 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/><path d="M12 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>` 
  },
  { 
    label: "Daily Housekeeping", 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="M7 21a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"/><path d="m3 21 1.9-1.9"/><path d="M21 3.5V5a2 2 0 0 1-2 2h-1"/><path d="M11 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z"/><path d="M15 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z"/><path d="M11 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z"/><path d="M15 11l-3.5 3.5"/></svg>` 
  },
  { 
    label: "Personalized Dining", 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="M3 2v7c0 1.1.9 2 2 2h4V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>` 
  },
  { 
    label: "Private Swimming Pool", 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>` 
  },
  { 
    label: "Self Cooking Kitchen", 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="M6 13.5a6 6 0 0 0 12 0"/><path d="M12 21a6 6 0 0 0 6-6c0-3.3-2.7-6-6-6s-6 2.7-6 6a6 6 0 0 0 6 6Z"/><path d="M12 9V5"/><path d="M9 5h6"/><path d="M10 2h4"/></svg>` 
  },
  { 
    label: "24/7 Service on Call", 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>` 
  },
  { 
    label: "Food Delivery", 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><path d="M18 18h1a1 1 0 0 0 1-1v-4l-3-4h-3"/><circle cx="17" cy="18" r="2"/></svg>` 
  },
  { 
    label: "24/7 Cab", 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><rect x="1" y="10" width="22" height="12" rx="2"/><path d="M5 10V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="16" r="2"/></svg>` 
  },
];

const galleryGradients = [
  "from-amber-700 to-amber-500",
  "from-gold-dark to-gold",
  "from-stone-600 to-stone-400",
  "from-zinc-600 to-zinc-400",
  "from-neutral-600 to-neutral-400",
  "from-gray-600 to-gray-400",
];

const galleryLabels = [
  "Luxurious Living Room",
  "Master Bedroom Suite",
  "Private Swimming Pool",
  "Gourmet Kitchen",
  "Panoramic City View",
  "Elegant Dining Space",
];

export default function StayPage() {
  return (
    <>
      <HeroSection
        subtitle="Stay by Mala's"
        title="At The Top"
        description="Luxury penthouse experience just 6km from Chennai Central. Where every moment is crafted for comfort and elegance."
        primaryCta={{ label: "Book Your Stay", href: "/contact" }}
        minHeight="min-h-[80vh]"
      />

      {/* About */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="A Home Away From Home"
            subtitle="Where luxury meets comfort in the heart of Chennai"
          />
          <p className="text-soft-grey text-lg leading-relaxed mb-6">
            <strong className="text-charcoal">At The Top</strong> is more than just a stay — it&apos;s an experience. Our premium penthouse, located just 6km from Chennai Central, offers a curated living experience with smart home technology, personalized services, and world-class amenities.
          </p>
          <p className="text-soft-grey leading-relaxed">
            Whether you&apos;re visiting Chennai for business, leisure, or a special occasion, At The Top offers the perfect blend of privacy, luxury, and convenience.
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Amenities"
            subtitle="Everything you need for a luxurious stay"
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="group p-6 rounded-xl border border-gold/10 bg-charcoal-light/30 hover:border-gold/30 transition-all duration-300 text-center"
              >
                <div 
                  className="text-gold mb-3 group-hover:scale-110 transition-transform duration-300"
                  dangerouslySetInnerHTML={{ __html: amenity.icon }}
                />
                <p className="text-warm-white text-sm font-medium">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {/* <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Gallery"
            subtitle="A glimpse into the At The Top experience"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryGradients.map((gradient, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden card-hover border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-gold mb-2 opacity-60">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mx-auto"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                    </div>
                    <p className="text-warm-white font-serif text-sm">{galleryLabels[index]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery */}
      <ProjectGallery/>


      {/* Booking CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-white mb-4">
            Book Your Luxury Stay
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="w-2 h-2 bg-gold rotate-45" />
            <span className="h-px w-12 bg-gold" />
          </div>
          <p className="text-warm-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Ready to experience the pinnacle of luxury living? Contact us to book your stay at At The Top.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Book Now
            </Link>
            <a
              href="tel:9840264993"
              className="px-8 py-4 border border-warm-white/30 text-warm-white font-semibold rounded hover:bg-warm-white/10 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Call: 984 026 4993
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
