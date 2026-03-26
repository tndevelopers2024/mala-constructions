import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "At The Top – Luxury Stay by Mala's",
  description:
    "Experience luxury penthouse living just 6km from Chennai Central. Free Wi-Fi, smart home, private pool, personalized dining, and 24/7 concierge service.",
};

const amenities = [
  { icon: "📶", label: "Free Wi-Fi" },
  { icon: "🏠", label: "Smart Home" },
  { icon: "🧹", label: "Daily Housekeeping" },
  { icon: "🍽️", label: "Personalized Dining" },
  { icon: "🏊", label: "Private Swimming Pool" },
  { icon: "👨‍🍳", label: "Self Cooking Kitchen" },
  { icon: "📞", label: "24/7 Service on Call" },
  { icon: "🍕", label: "Food Delivery" },
  { icon: "🚕", label: "24/7 Cab" },
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
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <p className="text-warm-white text-sm font-medium">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-warm-white">
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
                    <div className="text-4xl mb-2 opacity-60">📷</div>
                    <p className="text-warm-white font-serif text-sm">{galleryLabels[index]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
