"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-charcoal selection:bg-gold selection:text-charcoal">
      {/* Background with thematic overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero/commercial-highrise-by-mala-constructions.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dynamic Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal/95 to-charcoal/90" />
      
      {/* Decorative Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Main Visual Section */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Massive Decorative 404 */}
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="text-[15rem] md:text-[20rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold via-gold/50 to-transparent leading-none select-none"
            >
              404
            </motion.h1>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="h-px w-10 bg-gold/50" />
                    <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold">Lost in Blueprints</span>
                    <span className="h-px w-10 bg-gold/50" />
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-warm-white">
                  Page Not Found
                </h2>
              </motion.div>
            </div>
          </div>

          {/* Description and CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-8 max-w-lg mx-auto"
          >
            <p className="text-warm-white/60 text-lg leading-relaxed font-sans">
              The structure you&apos;re looking for doesn&apos;t exist in our current blueprints. 
              It might have been relocated or is still in the planning phase.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link
                href="/"
                className="group relative px-10 py-4 bg-gold text-charcoal font-bold rounded overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 uppercase tracking-widest text-sm">Return Home</span>
                <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/projects"
                className="group px-10 py-4 border border-gold/30 text-warm-white font-bold rounded transition-all duration-300 hover:bg-gold/5 hover:border-gold hover:text-gold uppercase tracking-widest text-sm"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Corner Framing */}
      <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-gold/10 hidden md:block" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-gold/10 hidden md:block" />
      
      {/* Floating Accent Dots */}
      <div className="absolute top-1/4 left-1/10 w-2 h-2 bg-gold/20 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/10 w-3 h-3 bg-gold/10 rounded-full animate-bounce" />
    </div>
  );
}
