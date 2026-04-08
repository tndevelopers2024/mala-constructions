"use client";

import { motion } from "framer-motion";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

export default function Timeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/20 md:hidden" />

      <div className="space-y-12 md:space-y-16">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-start gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
              <div className="bg-charcoal-light/50 border border-gold/10 rounded-xl p-6 backdrop-blur-sm">
                <span className="text-gold font-serif text-2xl font-bold">
                  {milestone.year}
                </span>
                <h3 className="text-warm-white font-serif text-xl mt-2 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-warm-white/60 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>

            {/* Center dot */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6">
              <div className="w-3 h-3 bg-gold rounded-full ring-4 ring-charcoal" />
            </div>

            {/* Spacer for other side */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
