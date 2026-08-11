"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { completedProjects, ongoingProjects } from "@/data/projects";

type Tab = "completed" | "ongoing";

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState<Tab>("completed");

  const projects = (activeTab === "completed" ? completedProjects : ongoingProjects).slice(0, 6);

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Featured Projects"
          subtitle="A showcase of our finest work across Chennai"
        />

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(["completed", "ongoing"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 ${activeTab === tab
                ? "bg-gold text-charcoal"
                : "bg-transparent text-soft-grey border border-gray-200 hover:border-gold hover:text-gold"
                }`}
            >
              {tab === "completed" ? "Completed" : "Ongoing"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
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
  );
}
