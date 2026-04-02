"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spec {
  title: string;
  details: string[];
}

export default function SpecsAccordion({ specs }: { specs: Spec[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {specs.map((spec, index) => (
        <div
          key={spec.title}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-serif font-bold text-charcoal text-lg">
              {spec.title}
            </span>
            <motion.svg
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5 text-gold shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <div className="h-px bg-gray-100 mb-4" />
                  <ul className="space-y-2">
                    {spec.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-soft-grey text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
