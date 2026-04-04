"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { galleryImages } from "@/data/galleryImages";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectGallery() {
  const [displayCount, setDisplayCount] = useState(12);
  const visibleImages = galleryImages.slice(0, displayCount);
  const hasMore = displayCount < galleryImages.length;

  const loadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 12, galleryImages.length));
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Gallery of Excellence"
          subtitle="A visual journey through our diverse construction and design projects"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {visibleImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={src}
                  alt={`Mala Construction Project ${index + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-10 h-1 bg-gold mb-3" />
                    <p className="text-warm-white font-serif text-lg font-medium">Project Showcase</p>
                    <p className="text-gold text-sm tracking-widest uppercase">Mala Constructions</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center px-10 py-4 bg-charcoal text-warm-white font-semibold rounded hover:bg-gold hover:text-charcoal transition-all duration-500 text-sm uppercase tracking-[0.2em] group"
            >
              Explore More
              <svg 
                className="w-5 h-5 ml-3 transform group-hover:translate-y-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
