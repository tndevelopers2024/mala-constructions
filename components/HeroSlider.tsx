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
      "https://res.cloudinary.com/rlokioxu/video/upload/v1786360583/hero-crafting_ycigwb.mp4",
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
    const duration = currentSlide === 0 ? 10000 : 5000;

    const timer = setTimeout(() => {
      nextSlide();
    }, duration);

    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide]);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-charcoal
        select-none

        h-[420px]
  sm:h-[460px]
  md:h-[520px]
  lg:h-[580px]
  xl:h-[640px]
  2xl:h-[700px]
      "
    >
      {/* ==========================================================
          SLIDE MEDIA & CONTENT
      ========================================================== */}

      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          {/* ======================================================
              IMAGE / VIDEO
          ====================================================== */}

          <div className="absolute inset-0">
            {current.video ? (
              <video
                key={current.video}
                className="
                  absolute
                  inset-0
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
                    width: 1280,
                  })}
                  type="video/mp4"
                />
              </video>
            ) : (
              <Image
                src={optimizeCloudinaryUrl(current.image!, {
                  width: 1600,
                })}
                alt={current.title}
                fill
                sizes="100vw"
                priority={currentSlide === 0}
                loading={
                  currentSlide === 0 ? "eager" : "lazy"
                }
                className="
                  object-cover
                  object-center
                  pointer-events-none
                "
              />
            )}
          </div>

          {/* ======================================================
              CONTROLLED BOTTOM GRADIENT
              
              Stronger only behind text; keeps upper media clear.
          ====================================================== */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-10
              h-[70%]
              sm:h-[65%]
              bg-gradient-to-t
              from-black/85
              via-black/45
              to-transparent
              pointer-events-none
            "
          />

          {/* ======================================================
              TEXT CONTENT (Inside shared responsive container)
          ====================================================== */}

          <div className="absolute inset-0 z-20 flex flex-col justify-end pointer-events-none pb-[56px] sm:pb-[64px] md:pb-[72px]">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
              <div className="max-w-xl sm:max-w-2xl pointer-events-auto">
                {/* SUBTITLE */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.4,
                  }}
                  className="mb-1.5 sm:mb-2"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <span className="h-px w-5 sm:w-7 bg-gold" />
                    <span
                      className="
                        text-gold
                        uppercase
                        font-semibold
                        text-[9px]
                        sm:text-[10px]
                        md:text-xs
                        tracking-[0.22em]
                        sm:tracking-[0.3em]
                      "
                    >
                      {current.subtitle}
                    </span>
                  </div>
                </motion.div>

                {/* TITLE */}

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.22,
                    duration: 0.5,
                  }}
                  className="
                    font-serif
                    font-bold
                    text-warm-white
                    leading-[1.05]
                    tracking-[-0.02em]
                    drop-shadow-md
                    mb-2
                    sm:mb-3
                    max-w-[20ch]
                  "
                  style={{
                    fontSize: "clamp(1.75rem, 3.8vw, 3.75rem)",
                  }}
                >
                  {current.title}
                </motion.h1>

                {/* DESCRIPTION */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.45,
                  }}
                  className="
                    text-warm-white/85
                    text-xs
                    sm:text-sm
                    md:text-base
                    font-light
                    leading-relaxed
                    max-w-sm
                    sm:max-w-md
                    mb-3.5
                    sm:mb-4.5
                  "
                >
                  {current.description}
                </motion.p>

                {/* CTA BUTTONS */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.38,
                    duration: 0.45,
                  }}
                  className="
                    flex
                    flex-row
                    items-center
                    gap-2
                    sm:gap-3
                  "
                >
                  {/* PRIMARY */}
                  <Link
                    href={current.primaryCta.href}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      h-8
                      sm:h-10
                      px-3.5
                      sm:px-5
                      bg-gold
                      text-charcoal
                      text-[9px]
                      sm:text-[10px]
                      md:text-xs
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      rounded-sm
                      whitespace-nowrap
                      transition-all
                      duration-300
                      hover:bg-gold-light
                      hover:-translate-y-0.5
                      shadow-sm
                    "
                  >
                    {current.primaryCta.label}
                  </Link>

                  {/* SECONDARY */}
                  <Link
                    href={current.secondaryCta.href}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      h-8
                      sm:h-10
                      px-3.5
                      sm:px-5
                      border
                      border-warm-white/40
                      bg-black/20
                      backdrop-blur-xs
                      text-warm-white
                      text-[9px]
                      sm:text-[10px]
                      md:text-xs
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      rounded-sm
                      whitespace-nowrap
                      transition-all
                      duration-300
                      hover:bg-warm-white
                      hover:text-charcoal
                      hover:-translate-y-0.5
                    "
                  >
                    {current.secondaryCta.label}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ==========================================================
          BOTTOM NAVIGATION (SHARED CONTAINER)
      ========================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-30
          pb-3.5
          sm:pb-4.5
          md:pb-5
          pointer-events-none
        "
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div
            className="
              flex
              items-center
              justify-between
              pt-2.5
              border-t
              border-warm-white/15
              pointer-events-auto
            "
          >
            {/* INDICATORS & NUMERICAL COUNTER */}

            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className="
                  text-[10px]
                  sm:text-[11px]
                  font-mono
                  tracking-wider
                  text-warm-white/70
                "
              >
                <span className="text-gold font-bold">
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>
                {" / "}
                {String(slides.length).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-1 sm:gap-1.5 ml-1">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="py-1 px-0.5 focus:outline-none group"
                  >
                    <span
                      className={`
                        block
                        h-[2px]
                        rounded-full
                        transition-all
                        duration-300
                        ${index === currentSlide
                          ? "w-6 sm:w-8 bg-gold"
                          : "w-3 sm:w-4 bg-warm-white/30 group-hover:bg-warm-white/60"
                        }
                      `}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* PREV / NEXT CONTROLS */}

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="
                  flex
                  items-center
                  justify-center
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  md:w-9
                  md:h-9
                  rounded-full
                  border
                  border-warm-white/30
                  bg-black/25
                  backdrop-blur-sm
                  text-warm-white
                  transition-all
                  duration-300
                  hover:bg-gold
                  hover:text-charcoal
                  hover:border-gold
                  active:scale-95
                "
              >
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
                className="
                  flex
                  items-center
                  justify-center
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  md:w-9
                  md:h-9
                  rounded-full
                  border
                  border-warm-white/30
                  bg-black/25
                  backdrop-blur-sm
                  text-warm-white
                  transition-all
                  duration-300
                  hover:bg-gold
                  hover:text-charcoal
                  hover:border-gold
                  active:scale-95
                "
              >
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
        </div>
      </div>

      {/* ==========================================================
          ACCENT BOTTOM GOLD LINE
      ========================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-40
          h-px
          bg-gradient-to-r
          from-gold/50
          via-gold/20
          to-transparent
        "
      />
    </section>
  );
}