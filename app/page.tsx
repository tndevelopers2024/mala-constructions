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
import ContactForm from "./contact/ContactForm";
import { CONTACT } from "@/lib/constants";
import ProjectGallery from "@/components/ProjectGallery";
import StayCarousel from "@/components/StayCarousel";
import Image from "next/image";


export default function HomePage() {
  const featuredProjects = allProjects.slice(0, 6);

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Marquee Strap */}
      <MarqueeBanner />

      {/* Passion for Quality Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-charcoal text-center text-warm-white flex items-center justify-center min-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/client-images/Mala-construction-image-31.avif"
            alt="Mala Constructions - Passion for Quality"
            fill
            className="object-cover opacity-30 select-none pointer-events-none"
            priority
          />
          {/* Dark gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/95 via-charcoal/80 to-charcoal/95" />
          {/* Subtle grid pattern for premium luxury feel */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-4 block">
            Redefining Construction Standards
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-white mb-6 leading-tight max-w-4xl">
            A Passion for Quality, Innovation and People Excellence
          </h2>
          
          {/* Diamond Separator */}
          <div className="flex items-center gap-3 justify-center mb-8">
            <span className="h-px w-16 bg-gold/75" />
            <span className="w-2.5 h-2.5 bg-gold rotate-45" />
            <span className="h-px w-16 bg-gold/75" />
          </div>

          <p className="text-warm-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-4xl mx-auto">
            A people-driven company with a passion to redefine quality standards in Chennai. Mala Constructions is a leading construction company, shaping the construction market with its state-of-the-art craft and cutting-edge practices. Leading through inspiration from other quality driven industries, our processes and techniques blend to produce world class and futuristic projects that stand the test of time.
          </p>
        </div>
      </section>

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


      {/* At The Top - Luxury Stay Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Hospitality Division</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-white mb-6">
                  At The Top
                </h2>
                <div className="h-1 w-24 bg-gold mb-8" />
                <p className="text-warm-white/80 text-lg leading-relaxed mb-6">
                  Experience the pinnacle of luxury at our premium penthouse stay, located just 6km from Chennai Central. A perfect blend of privacy and sophistication.
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: "Smart Home", icon: "M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10 M12 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" },
                  { label: "Wi-Fi", icon: "M5 12.55a11 11 0 0 1 14.08 0 M1.42 9a16 16 0 0 1 21.16 0 M8.53 16.11a6 6 0 0 1 6.95 0" },
                  { label: "Private Pool", icon: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 M2 12c.6.5 1.2 1 2.5 1" },
                  { label: "Dining", icon: "M3 2v7c0 1.1.9 2 2 2h4V2 M7 2v20 M21 15V2" },
                  { label: "24/7 Service", icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" },
                  { label: "Cab Service", icon: "M5 10V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 group hover:border-gold/30 transition-colors">
                    <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                    <span className="text-warm-white/70 text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-wider"
                >
                  Book Your Stay
                </Link>
                <a
                  href="tel:9840264993"
                  className="inline-flex items-center px-8 py-4 border border-warm-white/20 text-warm-white font-semibold rounded hover:bg-white/5 transition-all duration-300 text-sm uppercase tracking-wider"
                >
                  Call for Inquiry
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold/20 flex items-center justify-center bg-charcoal-light shadow-2xl">
                <StayCarousel />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-xl shadow-xl hidden md:block animate-bounce-slow">
                <p className="text-charcoal font-bold text-lg leading-tight">6KM<br /><span className="text-xs uppercase tracking-widest font-normal opacity-80">From Central</span></p>
              </div>
              {/* Decorative light effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 blur-[120px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>
      {/* Full Project Gallery */}
      <ProjectGallery />






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
