"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of construction projects do you handle?",
    answer: "We specialize in a wide range of projects, including luxury residential buildings, custom-built villas, commercial spaces, and comprehensive renovations. From individual homes to large-scale retail outlets, our expertise covers diverse construction needs.",
  },
  {
    question: "How long has MALA Constructions been in business?",
    answer: "Our legacy began in 1989 with a foundation of trust. Since 1999, we have been actively transforming spaces in Chennai, completing over 100+ residential buildings and 50+ villas with a focus on quality and innovation.",
  },
  {
    question: "Do you provide customized building designs?",
    answer: "Yes, customization is at the heart of our service. We work closely with experienced architects and designers to create bespoke plans that align perfectly with your vision, lifestyle, and site requirements while ensuring structural integrity and efficiency.",
  },
  {
    question: "Which areas in Chennai do you serve?",
    answer: "While we are headquartered in Kolathur, we undertake projects across various parts of Chennai and its suburbs. Our team is well-versed in the local regulations and building standards of the region.",
  },
  {
    question: "Is project management included in your services?",
    answer: "Absolutely. We provide end-to-end project management, ensuring that every phase—from planning and permitting to procurement and final finishing—is executed seamlessly, on time, and within the agreed budget.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about building your dream project with us"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-serif font-bold text-lg transition-colors duration-300 ${openIndex === index ? "text-gold" : "text-charcoal"}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-gold border-gold text-charcoal rotate-180" : "bg-white border-gray-200 text-soft-grey"}`}>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={openIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"}
                    />
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-soft-grey leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
