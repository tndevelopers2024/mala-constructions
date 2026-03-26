"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={service.id === "stay" ? "/stay" : "/services"}
        className="group block bg-white rounded-xl p-8 border border-gray-100 card-hover h-full"
      >
        <div className="text-4xl mb-6">{service.icon}</div>
        <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-soft-grey text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <div className="flex items-center text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        {/* Gold underline on hover */}
        <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gold transition-all duration-500" />
      </Link>
    </motion.div>
  );
}
