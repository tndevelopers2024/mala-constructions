"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).__preloaderFinished) {
      setIsPreloaderActive(false);
      setHasUserInteracted(true);
      return;
    }

    const handlePreloaderFinished = () => {
      setIsPreloaderActive(false);
    };

    window.addEventListener("preloaderFinished", handlePreloaderFinished);
    return () => {
      window.removeEventListener("preloaderFinished", handlePreloaderFinished);
    };
  }, []);

  useEffect(() => {
    if (isPreloaderActive) return;
    if (hasUserInteracted) return;

    const handleInteraction = () => {
      setHasUserInteracted(true);
    };

    const events = ["scroll", "touchstart", "touchmove", "mousemove", "click", "keydown", "wheel", "pointerdown"];

    events.forEach((event) => {
      window.addEventListener(event, handleInteraction, { passive: true, once: true });
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, [isPreloaderActive, hasUserInteracted]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isLight = true;
  const isHomePage = pathname === "/";
  const isVisible = isHomePage ? (!isPreloaderActive && hasUserInteracted) : true;

  return (
    <nav
      className={`z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-black/5 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      } ${
        isVisible
          ? "sticky top-0 translate-y-0 opacity-100 pointer-events-auto visible block"
          : "fixed top-0 left-0 w-full -translate-y-full opacity-0 pointer-events-none invisible hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-32 h-14 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/images/logo/new-logo-by-mala-constructions.png"
                alt="MALA Constructions"
                fill
                className={`object-contain object-left transition-all duration-300 ${
                  isLight ? "brightness-0" : "brightness-0 invert"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                  pathname === link.href
                    ? "text-gold"
                    : isLight
                    ? "text-charcoal/80 hover:text-gold"
                    : "text-warm-white/80 hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gold text-charcoal text-sm font-semibold rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Contact Us
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isLight ? "text-charcoal" : "text-warm-white"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-black/5 shadow-lg"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      pathname === link.href
                        ? "text-gold bg-charcoal/5"
                        : "text-charcoal/80 hover:text-gold hover:bg-charcoal/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-colors"
                >
                  Enquiry Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
