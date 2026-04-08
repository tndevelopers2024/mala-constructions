import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "./Timeline";

export const metadata: Metadata = {
  title: "About Us | MALA Constructions",
  description: "Learn about MALA Constructions — from our humble beginnings as an electrical company in 1989 to becoming one of Chennai's trusted construction firms since 1999.",
  openGraph: {
    title: "About MALA Constructions | Building Legacy Since 1999",
    description: "Discover the history and quality commitment of one of Chennai's most trusted builders.",
    images: ["/images/open-graph/open-graph.webp"],
  },
};


const milestones = [
  { year: "1989", title: "The Beginning", description: "MALA was founded as an electrical company, laying the foundation for a remarkable journey in the building industry." },
  { year: "1999", title: "Expansion to Construction", description: "Recognizing the growing demand for quality construction, MALA expanded into full-scale residential and commercial construction." },
  { year: "2005", title: "100th Project Milestone", description: "Completed our 100th project, establishing a strong reputation for quality and reliability across Chennai." },
  { year: "2010", title: "Commercial Division", description: "Launched a dedicated commercial construction division, serving offices, retail, and industrial projects." },
  { year: "2018", title: "Luxury Division Launch", description: "Introduced 'At The Top' — a luxury stay experience, diversifying our portfolio into hospitality." },
  { year: "2024", title: "Signature Sapphire", description: "Launched Mala's Signature Sapphire — premium 3BHK homes redefining luxury living in Kolathur, Chennai." },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        subtitle="Our Story"
        title="Building Legacy, Crafting Futures"
        description="From a small electrical company to one of Chennai's most trusted construction firms — our journey is one of passion, precision, and relentless pursuit of excellence."
        minHeight="min-h-[70vh]"
      />

      {/* Company Story */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                title="Our Journey"
                subtitle="Three decades of transforming visions into reality"
                center={false}
              />
              <div className="space-y-4 text-soft-grey leading-relaxed">
                <p>
                  Founded in <strong className="text-charcoal">1989</strong> as a humble electrical company, MALA was born from a simple yet powerful vision — to deliver excellence in every project we undertake.
                </p>
                <p>
                  In <strong className="text-charcoal">1999</strong>, recognizing an opportunity to serve our clients more comprehensively, we expanded into full-scale construction. This pivotal decision marked the beginning of a new chapter, one defined by dream homes, modern commercial spaces, and innovative infrastructure.
                </p>
                <p>
                  Today, MALA Constructions stands as a testament to what passion and perseverance can achieve. With over <strong className="text-charcoal">100+ residential buildings, 50+ villas, and 25+ commercial outlets</strong>, we continue to transform spaces across Chennai with the same dedication that inspired our founding.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-charcoal to-charcoal-light border border-gold/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-7xl font-serif font-bold text-gold mb-2">35+</div>
                    <div className="text-warm-white/60 text-lg">Years of Excellence</div>
                    <div className="w-16 h-px bg-gold mx-auto my-4" />
                    <div className="text-warm-white/40 text-sm">Est. 1989 • Chennai, India</div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 border border-gold/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Milestones"
            subtitle="Key moments that shaped our journey"
            light
          />
          <Timeline milestones={milestones} />
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Vision for the Future"
            subtitle="Continuing to raise the bar in construction excellence"
          />
          <div className="space-y-6 text-soft-grey leading-relaxed text-lg">
            <p>
              With a legacy of excellence and a commitment to innovation,
MALA Construction Firm aims to redefine construction standards.
We envision expanding into larger-scale projects while continuing to
uphold our core values: client satisfaction, quality craftsmanship,
and sustainable practices.
            </p>
            <p>
              As we look ahead, MALA Constructions is committed to embracing sustainable building practices, integrating smart home technologies, and expanding our footprint across Tamil Nadu.
            </p>
            <p>
              Our vision is to become the most trusted name in South Indian construction — known not just for the buildings we create, but for the lives we transform and the communities we uplift.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { 
                icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3 2 5a7 7 0 0 1-10 13z"/><path d="M7 20a4 4 0 0 1 0-8h2.1"/><path d="M13 20v-2"/><path d="M12 21h4"/></svg>`, 
                title: "Sustainability", 
                desc: "Green building practices for a better tomorrow" 
              },
              { 
                icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`, 
                title: "Innovation", 
                desc: "Smart homes and cutting-edge technology" 
              },
              { 
                icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto"><path d="m11 17 2 2 4-4"/><path d="m22 10-6 6"/><path d="M8 8.6a3 3 0 1 0-2.8 2.8"/><path d="M18 8.6a3 3 0 1 1 2.8 2.8"/><path d="M7 21a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4"/></svg>`, 
                title: "Community", 
                desc: "Building spaces that bring people together" 
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-gray-100 bg-white card-hover">
                <div 
                  className="text-gold mb-3"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <h3 className="font-serif font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-soft-grey text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
