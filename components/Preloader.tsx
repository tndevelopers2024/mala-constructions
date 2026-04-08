"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Ensure we show the preloader for at least 2 seconds for aesthetic impact
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-charcoal selection:bg-gold selection:text-charcoal cursor-wait"
        >
          {/* Central Content Container */}
          <div className="relative flex flex-col items-center">
            
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                y: { duration: 0.8 },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-48 h-48 md:w-64 md:h-64"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Mala Constructions Logo"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
              
              {/* Soft Ambient Glow */}
              <motion.div 
                animate={{ 
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gold/20 blur-[60px] rounded-full -z-10"
              />
            </motion.div>

            {/* Brand Message Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 text-center space-y-4"
            >
              {/* Letter Spacing Animation for Text */}
              <h2 className="text-warm-white font-serif text-2xl md:text-3xl font-bold tracking-[0.2em]">
                MALA CONSTRUCTIONS
              </h2>

              <div className="flex items-center justify-center gap-4">
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-px bg-gold/50" 
                />
                <span className="text-gold tracking-[0.4em] uppercase text-[10px] font-bold">Building Excellence</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-px bg-gold/50" 
                />
              </div>

              {/* Minimalist Progress Loader */}
              <div className="pt-6">
                <div className="w-48 h-[1px] bg-white/10 rounded-full relative overflow-hidden mx-auto">
                    <motion.div 
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
                    />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Framing Elements */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.2 }}
             className="absolute inset-12 pointer-events-none"
          >
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/10" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/10" />
          </motion.div>
          
          {/* Background Text watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full text-center opacity-[0.02]">
             <span className="text-[20vw] font-serif font-black text-white whitespace-nowrap">MALA MALA MALA</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
