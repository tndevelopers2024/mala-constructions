"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 ${light ? "text-warm-white" : "text-charcoal"
          }`}
      >
        {title}
      </h2>
      <div
        className={`flex items-center gap-3 ${center ? "justify-center" : ""} mb-4`}
      >
        <span className="h-px w-12 bg-gold" />
        <span className="w-2 h-2 bg-gold rotate-45" />
        <span className="h-px w-12 bg-gold" />
      </div>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-warm-white/70" : "text-soft-grey"
            }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
