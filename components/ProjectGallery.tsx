"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { galleryImages } from "@/data/galleryImages";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectGallery() {
  const [displayCount, setDisplayCount] = useState(12);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const visibleImages = galleryImages.slice(0, displayCount);
  const hasMore = displayCount < galleryImages.length;

  const loadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 12, galleryImages.length));
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const navigateNext = useCallback(() => {
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const navigatePrev = useCallback(() => {
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, closeLightbox, navigateNext, navigatePrev]);

  return (
    <section className="section-padding bg-white relative">
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
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
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
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 relative">
                    <div className="w-10 h-1 bg-gold mb-3" />
                    <p className="text-warm-white font-serif text-lg font-medium">Project Showcase</p>
                    <p className="text-gold text-sm tracking-widest uppercase">Mala Constructions</p>
                    
                    {/* Zoom Icon Animation */}
                    <div className="absolute -top-12 right-0 bg-gold/90 p-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-charcoal" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4 md:p-12"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 z-[110] text-warm-white hover:text-gold transition-all duration-300 p-2 bg-charcoal-light/50 hover:bg-charcoal-light rounded-full border border-warm-white/10"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Controls */}
            <button 
              onClick={(e) => { e.stopPropagation(); navigatePrev(); }}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-[110] text-warm-white hover:text-gold transition-all duration-300 p-4 bg-charcoal-light/30 hover:bg-charcoal-light/80 rounded-full border border-warm-white/10 group"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); navigateNext(); }}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-[110] text-warm-white hover:text-gold transition-all duration-300 p-4 bg-charcoal-light/30 hover:bg-charcoal-light/80 rounded-full border border-warm-white/10 group"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Container */}
            <motion.div 
              key={selectedImageIndex}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-[70vh] md:h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={galleryImages[selectedImageIndex]}
                  alt={`Mala Construction Project Full View`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Image Info */}
              <div className="mt-8 text-center bg-charcoal-light/40 backdrop-blur-md px-8 py-4 rounded-xl border border-warm-white/10">
                <p className="text-warm-white font-serif text-xl md:text-2xl mb-1 italic">Project Excellence</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-8 bg-gold" />
                  <p className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase">
                    Image {selectedImageIndex + 1} of {galleryImages.length}
                  </p>
                  <div className="h-px w-8 bg-gold" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
