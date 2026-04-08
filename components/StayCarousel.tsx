"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/data/galleryImages";

// Filter for some particularly nice images if needed, or just use a slice
const stayImages = galleryImages.slice(0, 15);


export default function StayCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % stayImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={stayImages[currentIndex]}
            alt={`Luxury Stay Image ${currentIndex + 1}`}
            fill
            className="object-cover rounded-xl"
            priority
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent rounded-xl" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {stayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-gold w-4" 
                : "bg-warm-white/40 hover:bg-warm-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Badge */}
      <div className="absolute top-4 right-4 z-20 bg-charcoal/80 backdrop-blur-md border border-gold/30 px-4 py-2 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-gold text-[10px] uppercase tracking-widest font-bold">Premium Stay</span>
        </div>
      </div>
    </div>
  );
}
