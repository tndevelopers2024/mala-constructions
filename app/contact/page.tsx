import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT } from "@/lib/constants";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | MALA Constructions",
  description: "Get in touch with MALA Constructions for residential, commercial, and renovation projects in Chennai. Visit us at Kolathur or call 9840264993.",
  openGraph: {
    title: "Contact MALA Constructions | Chennai's Trusted Builders",
    description: "Ready to start your project? Reach out for a consultation and expert construction services.",
    images: ["https://mala-constructions.vercel.app/images/open-graph/open-graph-by-mala-constructions.webp"],
  },
};


export default function ContactPage() {
  return (
    <>
      <HeroSection
        subtitle="Get in Touch"
        title="Let&apos;s Build Together"
        description="Have a project in mind? We'd love to hear from you. Reach out for a consultation and let's bring your vision to life."
        minHeight="min-h-[60vh]"
      />

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
    </>
  );
}
