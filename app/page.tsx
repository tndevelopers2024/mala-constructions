import HeroSlider from "@/components/HeroSlider";
import MarqueeBanner from "@/components/MarqueeBanner";
import StatsBar from "@/components/StatsBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { services } from "@/data/services";
import { allProjects } from "@/data/projects";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import ContactForm from "./contactt/ContactForm";
import { CONTACT } from "@/lib/constants";
import ProjectGallery from "@/components/ProjectGallery";

export default function HomePage() {
  const featuredProjects = allProjects.slice(0, 6);

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Marquee Strap */}
      <MarqueeBanner />

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

      {/* Stats Bar */}
      <StatsBar />

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

      {/* Full Project Gallery */}
      <ProjectGallery />

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



      {/* Contact Us  */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contact Us"
            subtitle="We're here to help with all your construction needs"
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-charcoal mb-1">Visit Us</h3>
                    <p className="text-soft-grey text-sm">{CONTACT.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-charcoal mb-1">Call Us</h3>
                    {CONTACT.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="block text-soft-grey text-sm hover:text-gold transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-charcoal mb-1">Email Us</h3>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-soft-grey text-sm hover:text-gold transition-colors break-all"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-charcoal mb-1">Website</h3>
                    <p className="text-soft-grey text-sm">{CONTACT.website}</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-xl overflow-hidden border border-gray-100 h-64 shadow-sm relative group">
                <iframe
                  title="Mala Constructions Location"
                  src={CONTACT.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 pointer-events-none border-[6px] border-white/10 rounded-xl" />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl border border-gray-100 p-8">
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                  Send Us a Message
                </h3>
                <p className="text-soft-grey text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
