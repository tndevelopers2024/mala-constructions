"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 bg-white flex flex-col h-full"
    >
      {/* Project Image */}
      <div className={`relative h-64 w-full bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg viewBox="0 0 400 80" className="w-full h-full p-12" fill="white">
              <rect x="20" y="30" width="40" height="50" />
              <rect x="70" y="10" width="50" height="70" />
              <rect x="130" y="20" width="35" height="60" />
            </svg>
          </div>
        )}

        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full backdrop-blur-md border ${
            project.status === "completed"
              ? "bg-green-500/80 text-white border-green-400/50"
              : "bg-amber-500/80 text-white border-amber-400/50"
          }`}>
            {project.status === "completed" ? "Completed" : "Ongoing"}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-gold transition-colors duration-300 mb-2">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-soft-grey text-sm mb-4">
            <svg className="w-4 h-4 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </div>
          <p className="text-soft-grey text-sm line-clamp-2 leading-relaxed italic">
            {project.description}
          </p>
        </div>
        
        {/* Decorative divider */}
        <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold/60 font-bold">{project.type}</span>
          <div className="w-6 h-px bg-gold/30" />
        </div>
      </div>
    </motion.div>
  );
}
