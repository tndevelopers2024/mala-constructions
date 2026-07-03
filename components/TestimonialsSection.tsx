"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface Testimonial {
  src: string;
  alt: string;
  type: string;
}

const testimonials: Testimonial[] = [
  {
    src: "/images/testimonials/whatsapp-review-1-by-mala-constructions.png",
    alt: "Mala Constructions Client Feedback - WhatsApp Review",
    type: "Client Review",
  },
  {
    src: "/images/testimonials/google-review-1-by-mala-constructions.png",
    alt: "Mala Constructions Client Feedback - Google Review",
    type: "Client Review",
  },
  {
    src: "/images/testimonials/whatsapp-review-2-by-mala-constructions.png",
    alt: "Mala Constructions Client Feedback - WhatsApp Review",
    type: "Client Review",
  },
  {
    src: "/images/testimonials/google-review-2-by-mala-constructions.png",
    alt: "Mala Constructions Client Feedback - Google Review",
    type: "Client Review",
  },
  {
    src: "/images/testimonials/customer-review-1-by-mala-constructions.png",
    alt: "Mala Constructions Client Feedback - Customer Review",
    type: "Client Review",
  },
  {
    src: "/images/testimonials/whatsapp-review-3-by-mala-constructions.png",
    alt: "Mala Constructions Client Feedback - WhatsApp Review",
    type: "Client Review",
  },
  {
    src: "/images/testimonials/google-review-3-by-mala-constructions.png",
    alt: "Mala Constructions Client Feedback - Google Review",
    type: "Client Review",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
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
      prev !== null ? (prev + 1) % testimonials.length : null
    );
  }, []);

  const navigatePrev = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev - 1 + testimonials.length) % testimonials.length : null
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

  if (!isMounted) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-charcoal">
      {/* Decorative luxury backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real reviews and feedback screenshots from homeowners and clients across Chennai"
          light={true}
        />

        {/* Carousel Container */}
        <div className="relative mt-8">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 z-20 hidden md:block">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 text-warm-white hover:text-gold transition-all duration-300 shadow-lg hover:bg-charcoal/80"
              aria-label="Previous testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 z-20 hidden md:block">
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 text-warm-white hover:text-gold transition-all duration-300 shadow-lg hover:bg-charcoal/80"
              aria-label="Next testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Cards Track */}
          <div className="overflow-hidden px-1">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${currentIndex * (100 / slidesToShow)}% - ${
                  currentIndex * (24 * (slidesToShow - 1) / slidesToShow)
                }px)`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    width: `calc((100% - ${(slidesToShow - 1) * 24}px) / ${slidesToShow})`,
                  }}
                  className="flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openLightbox(idx)}
                    className="group flex flex-col h-[400px] sm:h-[460px] bg-charcoal-light border border-gold/10 hover:border-gold/50 rounded-2xl p-4 cursor-pointer shadow-2xl relative transition-colors duration-300"
                  >
                    {/* Inner image container (displays the screenshot like an screen/paper) */}
                    <div className="relative flex-grow bg-white rounded-xl overflow-hidden shadow-inner flex items-center justify-center p-2 border border-charcoal/20">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain p-2 filter contrast-[1.02] saturate-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      {/* Premium Hover Zoom Overlay */}
                      <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-gold text-charcoal font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded-full flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                          </svg>
                          Expand Review
                        </div>
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-gold fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-gold/80 bg-gold/10 px-2.5 py-1 rounded-md border border-gold/10">
                        {item.type}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicator dots for mobile/tablet paging */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-gold w-6"
                    : "bg-white/20 hover:bg-white/40 w-2.5"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 z-[60] text-warm-white hover:text-gold transition-all duration-300 p-2.5 bg-charcoal-light/50 hover:bg-charcoal-light rounded-full border border-warm-white/10"
              aria-label="Close review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Controls */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] text-warm-white hover:text-gold transition-all duration-300 p-4 bg-charcoal-light/30 hover:bg-charcoal-light/80 rounded-full border border-warm-white/10 group"
              aria-label="Previous review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] text-warm-white hover:text-gold transition-all duration-300 p-4 bg-charcoal-light/30 hover:bg-charcoal-light/80 rounded-full border border-warm-white/10 group"
              aria-label="Next review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image display container */}
            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl h-[70vh] md:h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden p-4 border border-gold/20 shadow-2xl flex items-center justify-center">
                <Image
                  src={testimonials[selectedImageIndex].src}
                  alt={testimonials[selectedImageIndex].alt}
                  fill
                  className="object-contain p-4 filter contrast-[1.02] saturate-[1.02]"
                  priority
                />
              </div>

              {/* Lightbox description */}
              <div className="mt-6 text-center bg-charcoal-light/60 backdrop-blur-md px-6 py-3.5 rounded-xl border border-warm-white/10 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="h-4 w-px bg-warm-white/20" />
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                  {testimonials[selectedImageIndex].type}
                </span>
                <div className="h-4 w-px bg-warm-white/20" />
                <span className="text-warm-white/70 text-xs font-mono">
                  {selectedImageIndex + 1} of {testimonials.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
