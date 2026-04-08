"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/client-images/Mala-construction-image-26.avif",
    title: "Crafting Architectural Excellence",
    subtitle: "MALA CONSTRUCTIONS",
    description: "Bespoke villas designed with a blend of modern aesthetics and functional elegance. Transforming your vision into reality since 1999.",
    primaryCta: { label: "Explore Projects", href: "/projects" },
    secondaryCta: { label: "Our Story", href: "/about" },
  },
  {
    id: 2,
    image: "/images/client-images/Mala-construction-image-38.avif",
    title: "Engineering The Future",
    subtitle: "COMMERCIAL & INDUSTRIAL",
    description: "State-of-the-art commercial spaces that inspire productivity and reflect brand identity. Building infrastructure that stands the test of time.",
    primaryCta: { label: "View Services", href: "/services" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
  {
    id: 3,
    image: "/images/client-images/Mala-construction-image-22.avif",
    title: "Refined Interior Spaces",
    subtitle: "INTERIOR DESIGN & FIT-OUT",
    description: "Transforming interiors into immersive experiences through meticulous detail and premium finishes. Experience luxury in every corner.",
    primaryCta: { label: "Luxury Stay", href: "/stay" },
    secondaryCta: { label: "Get a Quote", href: "/contact" },
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-charcoal">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 },
            scale: { duration: 1.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div className="relative w-full h-full">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-gold tracking-[0.4em] uppercase text-sm md:text-base font-medium mb-4"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-warm-white leading-tight mb-6"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-warm-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <Link
                    href={slides[currentSlide].primaryCta.href}
                    className="w-full sm:w-auto px-8 py-4 bg-gold text-charcoal font-bold rounded-sm hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-widest text-center shadow-lg hover:shadow-gold/20"
                  >
                    {slides[currentSlide].primaryCta.label}
                  </Link>
                  <Link
                    href={slides[currentSlide].secondaryCta.href}
                    className="w-full sm:w-auto px-8 py-4 border border-warm-white/30 text-warm-white font-bold rounded-sm hover:bg-warm-white/10 transition-all duration-300 text-sm uppercase tracking-widest text-center"
                  >
                    {slides[currentSlide].secondaryCta.label}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-4 sm:right-10 z-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center border border-warm-white/20 text-warm-white hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 rounded-full"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center border border-warm-white/20 text-warm-white hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 rounded-full"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-4 sm:left-10 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className="group relative h-10 w-2 flex items-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-full w-full transition-all duration-500 rounded-full ${
                index === currentSlide ? "bg-gold scale-y-100" : "bg-warm-white/20 scale-y-50 group-hover:bg-warm-white/40"
              }`}
            />
            {index === currentSlide && (
              <motion.div
                layoutId="active-indicator"
                className="absolute inset-0 bg-gold rounded-full blur-[2px] opacity-50"
              />
            )}
          </button>
        ))}
        <div className="ml-4 text-warm-white/40 font-serif text-sm tracking-tighter">
          <span className="text-gold">0{currentSlide + 1}</span> / 0{slides.length}
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-gold/50 via-gold/20 to-transparent z-20" />
    </section>
  );
}
