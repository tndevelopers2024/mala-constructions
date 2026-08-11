"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { optimizeCloudinaryUrl } from "@/lib/cloudinary";

interface Slide {
  id: number;
  image?: string;
  video?: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const slides: Slide[] = [
  {
    id: 1,
    video: "https://res.cloudinary.com/rlokioxu/video/upload/v1786360583/hero-crafting_ycigwb.mp4",
    title: "Crafting Architectural Excellence",
    subtitle: "MALA CONSTRUCTIONS",
    description: "Bespoke modern villas in Chennai.",
    primaryCta: { label: "Explore Projects", href: "/projects" },
    secondaryCta: { label: "Our Story", href: "/about" },
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/rlokioxu/image/upload/v1786455254/hero-2_xzcqyu.png",
    title: "Engineering The Future",
    subtitle: "COMMERCIAL & INDUSTRIAL",
    description: "State-of-the-art commercial construction.",
    primaryCta: { label: "View Services", href: "/services" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/rlokioxu/image/upload/v1786455177/hero-3_zj8b34.png",
    title: "Refined Luxury Living",
    subtitle: "INTERIOR & HOSPITALITY",
    description: "Premium penthouse and interior designs.",
    primaryCta: { label: "Luxury Stay", href: "/contact" },
    secondaryCta: { label: "Get a Quote", href: "/contact" },
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/rlokioxu/image/upload/v1786452383/hero-4_tn0gcp.png",
    title: "Building Dreams, Creating Legacies",
    subtitle: "RESIDENTIAL CONSTRUCTION",
    description:
      "Thoughtfully designed homes built with precision, quality, and lasting craftsmanship.",
    primaryCta: { label: "Explore Projects", href: "/projects" },
    secondaryCta: { label: "Start Your Project", href: "/contact" },
  },

  {
    id: 5,
    image:
      "https://res.cloudinary.com/rlokioxu/image/upload/v1786451951/hero-5_npnl0x.png",
    title: "Built With Trust & Excellence",
    subtitle: "QUALITY • CRAFTSMANSHIP • COMMITMENT",
    description:
      "From concept to completion, we deliver exceptional spaces that stand the test of time.",
    primaryCta: { label: "Discover MALA", href: "/about" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const duration = currentSlide === 0 ? 10000 : 4000;
    const timer = setTimeout(() => {
      nextSlide();
    }, duration);
    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide]);

  const fadeVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <section className="relative h-[550px] sm:h-[600px] lg:h-[700px] w-full overflow-hidden bg-charcoal select-none">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* BACKGROUND MEDIA */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {slides[currentSlide].video ? (
              <video
                key={slides[currentSlide].video}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={optimizeCloudinaryUrl(slides[currentSlide].video!, { width: 1280 })} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={optimizeCloudinaryUrl(slides[currentSlide].image!, { width: 1600 })}
                alt={slides[currentSlide].title}
                fill
                sizes="100vw"
                priority={currentSlide === 0}
                loading={currentSlide === 0 ? "eager" : "lazy"}
                className="object-cover object-center pointer-events-none"
              />
            )}
          </div>

          {/* OVERLAYS FOR OPTIMAL READABILITY */}
          <div className="absolute inset-0 z-10 bg-black/40" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t sm:bg-gradient-to-r from-black/85 via-black/60 to-black/20 sm:to-transparent" />

          {/* CONTENT */}
          <div className="absolute inset-0 z-20 flex items-center pt-12 pb-28 sm:pt-16 sm:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl lg:max-w-4xl">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-gold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-xs sm:text-sm md:text-base font-semibold mb-3 sm:mb-4"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-warm-white leading-tight mb-4 sm:mb-6"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-warm-white/85 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-10 max-w-2xl font-light"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none"
                >
                  <Link
                    href={slides[currentSlide].primaryCta.href}
                    className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gold text-charcoal font-bold rounded-sm hover:bg-gold-light transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest text-center shadow-lg hover:shadow-gold/20"
                  >
                    {slides[currentSlide].primaryCta.label}
                  </Link>

                  <Link
                    href={slides[currentSlide].secondaryCta.href}
                    className="px-6 sm:px-8 py-3.5 sm:py-4 border border-warm-white/30 text-warm-white font-bold rounded-sm hover:bg-warm-white/10 transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest text-center"
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
      <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 z-20 flex gap-2 sm:gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-warm-white/20 text-warm-white hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 rounded-full bg-black/20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-warm-white/20 text-warm-white hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 rounded-full bg-black/20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-10 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
            className="group relative h-8 sm:h-10 w-2 flex items-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-full w-full transition-all duration-500 rounded-full ${index === currentSlide ? "bg-gold scale-y-100" : "bg-warm-white/20 scale-y-50 group-hover:bg-warm-white/40"
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
        <div className="ml-3 sm:ml-4 text-warm-white/60 font-serif text-xs sm:text-sm tracking-tighter">
          <span className="text-gold font-bold">0{currentSlide + 1}</span> / 0{slides.length}
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-gold/50 via-gold/20 to-transparent z-20" />
    </section>
  );
}
