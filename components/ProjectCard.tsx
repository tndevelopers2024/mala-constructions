"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-xl overflow-hidden card-hover border border-gray-100 bg-white"
    >
      {/* Gradient Placeholder Image */}
      <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
            }}
          />
        </div>

        {/* Building silhouette decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 400 80" className="w-full opacity-20" fill="white">
            <rect x="20" y="30" width="40" height="50" />
            <rect x="70" y="10" width="50" height="70" />
            <rect x="130" y="20" width="35" height="60" />
            <rect x="175" y="40" width="45" height="40" />
            <rect x="230" y="15" width="40" height="65" />
            <rect x="280" y="25" width="50" height="55" />
            <rect x="340" y="35" width="40" height="45" />
          </svg>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            project.type === "Commercial"
              ? "bg-gold text-charcoal"
              : "bg-charcoal/80 text-warm-white backdrop-blur-sm"
          }`}>
            {project.type}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            project.status === "completed"
              ? "bg-green-500/90 text-white"
              : "bg-amber-500/90 text-white"
          }`}>
            {project.status === "completed" ? "Completed" : "Ongoing"}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300" />
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="text-lg font-serif font-bold text-charcoal group-hover:text-gold transition-colors duration-300 mb-1">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-soft-grey text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </div>
      </div>
    </motion.div>
  );
}
