import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { services } from "@/data/services";
import { completedProjects } from "@/data/projects";
import Link from "next/link";

export default function HomePage() {
  const featuredProjects = completedProjects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <HeroSection
        subtitle="MALA Constructions"
        title="Transforming Spaces Since 1999"
        description="A legacy of innovation, quality craftsmanship, and unwavering customer satisfaction. Building dreams that stand the test of time."
        primaryCta={{ label: "Explore Projects", href: "/projects" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Overview */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive construction solutions tailored to bring your vision to life"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Projects"
            subtitle="A showcase of our finest work across Chennai"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-3 bg-charcoal text-warm-white font-semibold rounded hover:bg-charcoal-light transition-all duration-300 text-sm uppercase tracking-wider group"
            >
              View All Projects
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* At The Top - Luxury Stay Teaser */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Luxury Living</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-warm-white mb-6">
                At The Top
              </h2>
              <p className="text-warm-white/70 text-lg leading-relaxed mb-4">
                Experience the pinnacle of luxury at our premium penthouse stay, located just 6km from Chennai Central.
              </p>
              <p className="text-warm-white/50 mb-8">
                Smart home technology, private swimming pool, personalized dining, and 24/7 concierge service — a stay designed for those who expect nothing but the best.
              </p>
              <Link
                href="/stay"
                className="inline-flex items-center px-8 py-3 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-wider"
              >
                Discover More
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✨</div>
                    <p className="text-gold font-serif text-xl">Stay by Mala&apos;s</p>
                    <p className="text-warm-white/50 text-sm mt-2">Premium Penthouse Experience</p>
                  </div>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-3 border border-gold/10 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Ready to Build Your Dream?
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="w-2 h-2 bg-gold rotate-45" />
            <span className="h-px w-12 bg-gold" />
          </div>
          <p className="text-soft-grey text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s transform your vision into reality. Contact us today for a consultation and take the first step towards your perfect space.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Get in Touch
            </Link>
            <a
              href="tel:9840264993"
              className="px-8 py-4 border border-charcoal/20 text-charcoal font-semibold rounded hover:bg-charcoal hover:text-warm-white transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Call: 984 026 4993
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
