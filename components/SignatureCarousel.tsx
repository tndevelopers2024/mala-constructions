"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/data/galleryImages";

// Filter for Signature Sapphire specific images or a nice slice from the gallery
const sapphireImages = galleryImages.slice(15, 25);

export default function SignatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sapphireImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-full group rounded-2xl overflow-hidden shadow-2xl border border-gold/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotate: -1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={sapphireImages[currentIndex]}
            alt={`Signature Sapphire Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
          
          {/* Elegant Gradient Overlays */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/20 via-transparent to-gold/10" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Info Badge */}
      <div className="absolute top-6 left-6 z-20">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-charcoal/40 backdrop-blur-md border-l-4 border-gold px-5 py-3 rounded-r-xl"
        >
          <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-1">Project Highlights</p>
          <h4 className="text-warm-white font-serif text-lg font-bold">Premium Living</h4>
        </motion.div>
      </div>

      {/* Modern Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 px-4 py-2 bg-charcoal/30 backdrop-blur-sm rounded-full">
        {sapphireImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentIndex 
                ? "bg-gold w-6 h-1.5" 
                : "bg-warm-white/30 w-1.5 h-1.5 hover:bg-warm-white/60"
            }`}
            aria-label={`Show project image ${index + 1}`}
          />
        ))}
      </div>

      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
    </div>
  );
}
