"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spec {
  title: string;
  details: string[];
}

function SpecItem({ spec, index }: { spec: Spec; index: number }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">
            0{index + 1}
          </span>
          <span className="font-serif font-bold text-charcoal text-xl">
            {spec.title}
          </span>
        </div>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-gold shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-6">
              <div className="h-px bg-gray-100 mb-5" />
              <ul className="space-y-3">
                {spec.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-4 group">
                    <div className="mt-1 shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-gold/5 group-hover:bg-gold transition-all duration-500 border border-gold/10">
                      <svg
                        className="w-3 h-3 text-gold group-hover:text-charcoal transition-colors duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-soft-grey group-hover:text-charcoal text-sm leading-relaxed transition-colors duration-300">
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SpecsExplorer({ specs }: { specs: Spec[] }) {
  const left = specs.slice(0, Math.ceil(specs.length / 2));
  const right = specs.slice(Math.ceil(specs.length / 2));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="space-y-4">
        {left.map((spec, i) => (
          <SpecItem key={spec.title} spec={spec} index={i} />
        ))}
      </div>
      <div className="space-y-4">
        {right.map((spec, i) => (
          <SpecItem key={spec.title} spec={spec} index={Math.ceil(specs.length / 2) + i} />
        ))}
      </div>
    </div>
  );
}
