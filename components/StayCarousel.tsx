"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { StayImages } from "@/data/stays";
import { optimizeCloudinaryUrl } from "@/lib/cloudinary";

const stayImages = StayImages;

// Helper to format optimized image URL with high-DPI crystal clarity
const getOptimizedUrl = (url: string) =>
  optimizeCloudinaryUrl(url, { width: 1000, quality: "q_auto:best" });

export default function StayCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % stayImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + stayImages.length) % stayImages.length);
  }, []);

  // Preload next 3 images and previous image in background
  useEffect(() => {
    const indicesToPreload = [
      (currentIndex + 1) % stayImages.length,
      (currentIndex + 2) % stayImages.length,
      (currentIndex + 3) % stayImages.length,
      (currentIndex - 1 + stayImages.length) % stayImages.length,
    ];

    indicesToPreload.forEach((idx) => {
      const url = getOptimizedUrl(stayImages[idx]);
      const img = new window.Image();
      img.src = url;
    });
  }, [currentIndex]);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const progressPercent = ((currentIndex + 1) / stayImages.length) * 100;

  return (
    <div
      className="relative w-full h-full group overflow-hidden rounded-xl select-none bg-charcoal"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Crossfade */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={getOptimizedUrl(stayImages[currentIndex])}
            alt={`Luxury Stay Photo ${currentIndex + 1} of ${stayImages.length}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading={currentIndex < 3 ? "eager" : "lazy"}
            className="object-cover rounded-xl"
            priority={currentIndex < 3}
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-black/20 rounded-xl" />
        </motion.div>
      </AnimatePresence>

      {/* Side Chevron Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous stay photo"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-charcoal/70 backdrop-blur-md border border-gold/30 text-warm-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-charcoal hover:border-gold active:scale-95 shadow-md"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next stay photo"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-charcoal/70 backdrop-blur-md border border-gold/30 text-warm-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-charcoal hover:border-gold active:scale-95 shadow-md"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Premium Stay Tag (Top Right) */}
      <div className="absolute top-3 right-3 z-20 bg-charcoal/80 backdrop-blur-md border border-gold/30 px-2.5 py-1 rounded-md shadow-md flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
        <span className="text-gold text-[9px] uppercase tracking-widest font-bold">Premium Stay</span>
      </div>

      {/* Tiny Bottom Floating Control Bar */}
      <div className="absolute bottom-3 right-3 z-20 bg-charcoal/90 backdrop-blur-md border border-gold/30 px-2.5 py-1 rounded-full shadow-xl flex items-center gap-2">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="text-warm-white/70 hover:text-gold transition-colors p-0.5 active:scale-90"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Counter & Mini Progress Bar */}
        <div className="flex items-center gap-2">
          <div className="text-[10px] font-mono font-semibold text-warm-white/80 shrink-0 select-none">
            <span className="text-gold font-bold">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="text-warm-white/40">/</span>
            <span>{String(stayImages.length).padStart(2, "0")}</span>
          </div>

          <div className="w-12 sm:w-14 h-0.5 bg-white/20 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gold rounded-full"
              initial={false}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="text-warm-white/70 hover:text-gold transition-colors p-0.5 active:scale-90"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}



