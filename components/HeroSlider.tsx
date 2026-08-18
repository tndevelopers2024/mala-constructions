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
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    video:
      "https://res.cloudinary.com/rlokioxu/video/upload/v1786887497/MC_Hero_Video_piyjiw.mp4",
    title: "Crafting Architectural Excellence",
    subtitle: "MALA CONSTRUCTIONS",
    description: "Bespoke modern villas in Chennai.",
    primaryCta: {
      label: "Explore Projects",
      href: "/projects",
    },
    secondaryCta: {
      label: "Our Story",
      href: "/about",
    },
  },

  {
    id: 2,
    image:
      "https://res.cloudinary.com/rlokioxu/image/upload/v1786455254/hero-2_xzcqyu.png",
    title: "Engineering The Future",
    subtitle: "COMMERCIAL & INDUSTRIAL",
    description: "State-of-the-art commercial construction.",
    primaryCta: {
      label: "View Services",
      href: "/services",
    },
    secondaryCta: {
      label: "Contact Us",
      href: "/contact",
    },
  },

  {
    id: 3,
    image:
      "https://res.cloudinary.com/rlokioxu/image/upload/v1786455177/hero-3_zj8b34.png",
    title: "Refined Luxury Living",
    subtitle: "INTERIOR & HOSPITALITY",
    description: "Premium penthouse and interior designs.",
    primaryCta: {
      label: "Luxury Stay",
      href: "/contact",
    },
    secondaryCta: {
      label: "Get a Quote",
      href: "/contact",
    },
  },

  {
    id: 4,
    image:
      "https://res.cloudinary.com/rlokioxu/image/upload/v1786452383/hero-4_tn0gcp.png",
    title: "Building Dreams, Creating Legacies",
    subtitle: "RESIDENTIAL CONSTRUCTION",
    description:
      "Thoughtfully designed homes built with precision and quality.",
    primaryCta: {
      label: "Explore Projects",
      href: "/projects",
    },
    secondaryCta: {
      label: "Start Your Project",
      href: "/contact",
    },
  },

  {
    id: 5,
    image:
      "https://res.cloudinary.com/rlokioxu/image/upload/v1786451951/hero-5_npnl0x.png",
    title: "Built With Trust & Excellence",
    subtitle: "QUALITY • CRAFTSMANSHIP • COMMITMENT",
    description:
      "Exceptional spaces built to stand the test of time.",
    primaryCta: {
      label: "Discover MALA",
      href: "/about",
    },
    secondaryCta: {
      label: "Contact Us",
      href: "/contact",
    },
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const current = slides[currentSlide];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  }, []);

  /* --------------------------------------------------------------
     AUTOPLAY
  -------------------------------------------------------------- */
  useEffect(() => {
    const duration = currentSlide === 0 ? 13000 : 5000;

    const timer = setTimeout(() => {
      nextSlide();
    }, duration);

    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-[#121110] text-warm-white select-none">
      {/* ==========================================================
          1. TOP MEDIA CONTAINER (Carousel / Image / Video)
          Increased height optimized for MacBook Air and desktop displays
      ========================================================== */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-black
          h-[50vh]
          sm:h-[58vh]
          md:h-[62vh]
          lg:h-[66vh]
          xl:h-[70vh]
          min-h-[360px]
          sm:min-h-[460px]
          md:min-h-[520px]
          lg:min-h-[600px]
          xl:min-h-[680px]
          2xl:min-h-[760px]
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 w-full h-full"
          >
            {current.video ? (
              <video
                key={current.video}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  pointer-events-none
                "
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src={optimizeCloudinaryUrl(current.video, {
                    width: 1920,
                  })}
                  type="video/mp4"
                />
              </video>
            ) : (
              <Image
                src={optimizeCloudinaryUrl(current.image!, {
                  width: 1920,
                })}
                alt={current.title}
                fill
                sizes="100vw"
                priority={currentSlide === 0}
                loading={currentSlide === 0 ? "eager" : "lazy"}
                className="
                  object-cover
                  object-center
                  pointer-events-none
                "
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Smooth Radiant Transition overlay at bottom edge of media connecting into text area */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-[#161412]/60 to-[#161412] pointer-events-none z-10" />
      </div>

      {/* ==========================================================
          2. SMOOTH RADIANT GRADIENT & DYNAMIC HERO TEXT CONTAINER
          Harmonized gold & dark charcoal radiant color scheme
      ========================================================== */}
      <div className="relative z-20 w-full bg-gradient-to-b from-[#161412] via-[#211c14] to-[#141210] py-6 sm:py-8 md:py-10 lg:py-12 border-b border-gold/20 shadow-2xl">
        {/* Radiant Decorative Gold Lighting & Grid Texture */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top right radiant gold glow */}
          <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gold/15 via-gold-dark/10 to-transparent rounded-full blur-[100px] opacity-70" />
          {/* Bottom left subtle gold radiance */}
          <div className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-gold-light/10 via-gold/5 to-transparent rounded-full blur-[100px] opacity-60" />
          {/* Subtle luxury grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12">
          {/* Top Divider Accent Line with Radiant Gold Glow */}
          <div className="flex items-center gap-3 mb-5 sm:mb-7">
            <div className="h-[2px] bg-gradient-to-r from-gold via-gold-light to-transparent w-16 sm:w-28 shadow-sm shadow-gold/30" />
            <span className="w-2 h-2 bg-gold rotate-45 shrink-0 shadow-sm shadow-gold/50" />
            <div className="h-[1px] bg-gradient-to-r from-gold/40 via-gold/15 to-transparent flex-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            {/* Dynamic Text Content (Matches Active Slide) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3 sm:space-y-4"
                >
                  {/* SUBTITLE */}
                  <div className="flex items-center gap-2.5">
                    <span className="h-px w-5 sm:w-7 bg-gold" />
                    <span className="text-gold uppercase font-semibold text-[11px] sm:text-xs tracking-[0.25em] drop-shadow-sm">
                      {current.subtitle}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h1 className="font-serif font-bold text-warm-white leading-[1.1] text-2xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight max-w-3xl drop-shadow-md">
                    {current.title}
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="text-warm-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
                    {current.description}
                  </p>

                  {/* CTA BUTTONS */}
                  <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                    <Link
                      href={current.primaryCta.href}
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-charcoal font-bold text-xs sm:text-sm uppercase tracking-wider rounded-sm shadow-md shadow-gold/20 transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
                    >
                      {current.primaryCta.label}
                    </Link>

                    <Link
                      href={current.secondaryCta.href}
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border border-gold/40 bg-black/20 backdrop-blur-xs text-warm-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-gold/10 hover:border-gold hover:text-gold-light hover:-translate-y-0.5"
                    >
                      {current.secondaryCta.label}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation & Controls Column */}
            <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end pt-4 lg:pt-0 border-t border-gold/15 lg:border-t-0">
              {/* Slide Counter & Prev/Next Arrows */}
              <div className="w-full lg:w-auto flex items-center justify-between lg:justify-end gap-4">
                {/* Numerical Counter */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-warm-white/70">
                  <span className="text-gold font-bold text-base sm:text-lg drop-shadow-sm">
                    {String(currentSlide + 1).padStart(2, "0")}
                  </span>
                  <span className="opacity-40">/</span>
                  <span>{String(slides.length).padStart(2, "0")}</span>
                </div>

                {/* Arrow Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold/30 bg-[#1e1a14]/80 hover:bg-gold hover:border-gold hover:text-charcoal text-warm-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md hover:shadow-gold/20 cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold/30 bg-[#1e1a14]/80 hover:bg-gold hover:border-gold hover:text-charcoal text-warm-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md hover:shadow-gold/20 cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Progress Indicator Tabs */}
              <div className="w-full flex items-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className="flex-1 py-2 group cursor-pointer focus:outline-none"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div className="h-1.5 w-full bg-white/15 rounded-full overflow-hidden transition-all">
                      {index === currentSlide ? (
                        <motion.div
                          layoutId="activeSlideIndicator"
                          className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full shadow-sm shadow-gold/50"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: currentSlide === 0 ? 13 : 5,
                            ease: "linear",
                          }}
                        />
                      ) : (
                        <div className="h-full w-0 group-hover:w-full group-hover:bg-gold/40 transition-all duration-300" />
                      )}
                    </div>
                    <span
                      className={`block text-[9px] sm:text-[10px] mt-1.5 truncate font-medium transition-colors ${index === currentSlide
                        ? "text-gold font-semibold"
                        : "text-warm-white/40 group-hover:text-warm-white/70"
                        }`}
                    >
                      0{index + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}