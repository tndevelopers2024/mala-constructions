import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectsGrid from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse MALA Constructions' completed and ongoing residential & commercial projects across Chennai including Kolathur, Perambur, Madhavaram, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <HeroSection
        subtitle="Our Portfolio"
        title="Projects That Speak Excellence"
        description="From cozy residences to bustling commercial spaces, explore our diverse portfolio of completed and ongoing projects across Chennai."
        minHeight="min-h-[70vh]"
      />

      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Projects"
            subtitle="Building dreams across Chennai, one project at a time"
          />
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
