"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { completedProjects, ongoingProjects } from "@/data/projects";

type Tab = "completed" | "ongoing";

export default function ProjectsGrid() {
  const [activeTab, setActiveTab] = useState<Tab>("completed");

  const projects = activeTab === "completed" ? completedProjects : ongoingProjects;

  return (
    <div>
      {/* Tab Filters */}
      <div className="flex items-center justify-center gap-2 mb-12">
        {(["completed", "ongoing"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 ${
              activeTab === tab
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

      {/* Count */}
      <p className="text-center mt-8 text-soft-grey text-sm">
        Showing {projects.length} {activeTab} projects
      </p>
    </div>
  );
}
