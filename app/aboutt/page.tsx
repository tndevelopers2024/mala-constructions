import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "./Timeline";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MALA Constructions — from our humble beginnings as an electrical company in 1989 to becoming one of Chennai's trusted construction firms since 1999.",
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
              As we look ahead, MALA Constructions is committed to embracing sustainable building practices, integrating smart home technologies, and expanding our footprint across Tamil Nadu.
            </p>
            <p>
              Our vision is to become the most trusted name in South Indian construction — known not just for the buildings we create, but for the lives we transform and the communities we uplift.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "🌱", title: "Sustainability", desc: "Green building practices for a better tomorrow" },
              { icon: "💡", title: "Innovation", desc: "Smart homes and cutting-edge technology" },
              { icon: "🤝", title: "Community", desc: "Building spaces that bring people together" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-gray-100 bg-white card-hover">
                <div className="text-3xl mb-3">{item.icon}</div>
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
