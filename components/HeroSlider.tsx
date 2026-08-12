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

        h-[440px]
        min-h-[440px]

        sm:h-[500px]
        sm:min-h-[500px]

        md:h-[540px]
        md:min-h-[540px]

        lg:h-[600px]
        lg:min-h-[600px]

        xl:h-[620px]
        xl:min-h-[620px]
      "
    >
      {/* ==========================================================
          SLIDE
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
              VERY LIGHT OVERLAY
              
              Keep the image visible.
          ====================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-black/10
              z-10
            "
          />

          {/* ======================================================
              BOTTOM GRADIENT

              Strong only where the text is located.
          ====================================================== */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-10

              h-[65%]

              bg-gradient-to-t
              from-black/90
              via-black/55
              to-transparent
            "
          />

          {/* ======================================================
              MOBILE SIDE GRADIENT

              Very subtle so image remains visible.
          ====================================================== */}

          <div
            className="
              absolute
              inset-y-0
              left-0
              w-[45%]
              z-10
              bg-gradient-to-r
              from-black/25
              to-transparent

              hidden
              sm:block
            "
          />

          {/* ======================================================
              CONTENT

              Bottom aligned.
          ====================================================== */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-20
            "
          >
            <div
              className="
                mx-auto
                w-full
                max-w-7xl

                px-5
                sm:px-6
                lg:px-8

                pb-[76px]
                sm:pb-[82px]
                md:pb-[86px]
                lg:pb-[92px]
              "
            >
              <div
                className="
                  max-w-[620px]
                  sm:max-w-[680px]
                  lg:max-w-[760px]
                "
              >
                {/* ==================================================
                    SUBTITLE
                ================================================== */}

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
                  className="mb-2 sm:mb-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="
                        h-px
                        w-6
                        sm:w-8
                        bg-gold
                      "
                    />

                    <span
                      className="
                        text-gold
                        uppercase
                        font-semibold

                        text-[9px]
                        sm:text-[10px]
                        md:text-xs

                        tracking-[0.2em]
                        sm:tracking-[0.3em]
                      "
                    >
                      {current.subtitle}
                    </span>
                  </div>
                </motion.div>

                {/* ==================================================
                    TITLE

                    Much smaller than previous version.
                ================================================== */}

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

                    leading-[1.02]
                    tracking-[-0.02em]

                    text-[2rem]
                    sm:text-[2.8rem]
                    md:text-[3.5rem]
                    lg:text-[4.2rem]

                    max-w-[600px]

                    mb-2.5
                    sm:mb-3
                  "
                >
                  {current.title}
                </motion.h1>

                {/* ==================================================
                    SHORT DESCRIPTION
                ================================================== */}

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
                    text-warm-white/80

                    text-xs
                    sm:text-sm
                    md:text-base

                    leading-relaxed

                    max-w-[470px]

                    mb-4
                    sm:mb-5
                  "
                >
                  {current.description}
                </motion.p>

                {/* ==================================================
                    BUTTONS
                ================================================== */}

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
                    gap-2.5
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

                      min-h-[40px]
                      sm:min-h-[44px]

                      px-4
                      sm:px-6

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

                      min-h-[40px]
                      sm:min-h-[44px]

                      px-4
                      sm:px-6

                      border
                      border-warm-white/40

                      bg-black/10
                      backdrop-blur-sm

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
          BOTTOM NAVIGATION
      ========================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-30

          px-5
          sm:px-6
          lg:px-8

          pb-4
          sm:pb-5
          md:pb-6
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl

            flex
            items-center
            justify-between
          "
        >
          {/* ======================================================
              INDICATORS
          ====================================================== */}

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="p-1"
              >
                <span
                  className={`
                    block
                    h-[2px]
                    rounded-full
                    transition-all
                    duration-300

                    ${index === currentSlide
                      ? "w-8 sm:w-10 bg-gold"
                      : "w-4 sm:w-5 bg-warm-white/40"
                    }
                  `}
                />
              </button>
            ))}

            <span
              className="
                ml-1.5
                text-[9px]
                sm:text-[10px]
                tracking-wider
                text-warm-white/60
              "
            >
              <span className="text-gold font-semibold">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* ======================================================
              ARROWS
          ====================================================== */}

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* PREVIOUS */}

            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="
                flex
                items-center
                justify-center

                w-8
                h-8

                sm:w-9
                sm:h-9

                md:w-10
                md:h-10

                rounded-full

                border
                border-warm-white/30

                bg-black/20
                backdrop-blur-sm

                text-warm-white

                transition-all
                duration-300

                hover:bg-gold
                hover:text-charcoal
                hover:border-gold
              "
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* NEXT */}

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="
                flex
                items-center
                justify-center

                w-8
                h-8

                sm:w-9
                sm:h-9

                md:w-10
                md:h-10

                rounded-full

                border
                border-warm-white/30

                bg-black/20
                backdrop-blur-sm

                text-warm-white

                transition-all
                duration-300

                hover:bg-gold
                hover:text-charcoal
                hover:border-gold
              "
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
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

      {/* ==========================================================
          BOTTOM GOLD LINE
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