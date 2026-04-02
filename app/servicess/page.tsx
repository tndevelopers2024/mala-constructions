import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore MALA Constructions' comprehensive services — residential, commercial, renovation, infrastructure, maintenance, and luxury stays in Chennai.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        subtitle="What We Do"
        title="Comprehensive Construction Solutions"
        description="From dream homes to commercial spaces, renovations to maintenance — we deliver end-to-end solutions with unmatched quality and precision."
        minHeight="min-h-[70vh]"
      />

      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Every service designed to bring your vision to life"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Process"
            subtitle="A systematic approach that ensures quality at every stage"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your vision, requirements, and budget to create a tailored plan." },
              { step: "02", title: "Design", description: "Creating detailed architectural plans with Vaasthu compliance and modern aesthetics." },
              { step: "03", title: "Construction", description: "Executing with precision using premium materials and skilled craftsmanship." },
              { step: "04", title: "Handover", description: "Thorough inspection, quality assurance, and seamless handover of your dream space." },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 rounded-xl border border-gold/10 bg-charcoal-light/30"
              >
                <span className="text-5xl font-serif font-bold text-gold/20 absolute top-4 right-4">
                  {item.step}
                </span>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <span className="text-gold font-serif font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-warm-white font-serif text-xl mb-2">{item.title}</h3>
                  <p className="text-warm-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gold/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-soft-grey text-lg mb-8">
            Let&apos;s discuss how we can bring your vision to life with our expertise and dedication.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-wider"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}
