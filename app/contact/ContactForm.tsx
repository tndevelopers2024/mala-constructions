"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const phoneWithCode = formData.phone.startsWith("+91") 
        ? `'${formData.phone}` 
        : `'+91 ${formData.phone.replace(/\D/g, "")}`;


      const response = await fetch("https://sheetdb.io/api/v1/45qi1e25jwjnh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              ...formData,
              phone: phoneWithCode,
              submitted_at: new Date().toLocaleString(),
              form_type: "General Contact",
            },
          ],
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Name *
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal"
            placeholder="Your full name"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Phone *
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal"
              placeholder="+91 Mobile Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal"
              placeholder="Your email address"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Service Interested In
          </label>
          <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal"
          >
            <option value="">Select a service</option>
            <option value="residential">Residential Construction</option>
            <option value="commercial">Commercial Construction</option>
            <option value="renovation">Renovation & Transformation</option>
            <option value="infrastructure">Infrastructure Development</option>
            <option value="maintenance">24x7 Maintenance</option>
            <option value="stay">At The Top – Luxury Stay</option>
            <option value="sapphire">Signature Sapphire</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal resize-none"
            placeholder="Tell us about your project or inquiry..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-wider relative overflow-hidden group disabled:opacity-70 disabled:cursor-wait"
        >
          <span className={isSubmitting ? "opacity-0" : "opacity-100"}>
            {submitted ? "Message Sent!" : "Send Message"}
          </span>
          {isSubmitting && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
            </div>
          )}
        </button>
      </form>

      {/* Amazing Success Pop-up & Celebration */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md"
          >
            {/* Confetti Effect */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0,
                  rotate: 0 
                }}
                animate={{ 
                  x: (Math.random() - 0.5) * 600, 
                  y: (Math.random() - 0.5) * 600, 
                  scale: [0, 1, 0],
                  rotate: Math.random() * 360 
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute w-3 h-3 rounded-sm z-10"
                style={{ 
                  backgroundColor: i % 2 === 0 ? "#C5A059" : "#EEE3D3",
                  left: "50%",
                  top: "50%"
                }}
              />
            ))}

            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 100, rotateX: 45 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="bg-warm-white rounded-xl p-10 max-w-sm w-full shadow-[0_20px_50px_rgba(197,160,89,0.3)] text-center relative border border-gold/20"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-xl border-4 border-warm-white">
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-12 h-12 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </motion.svg>
              </div>

              <div className="mt-8">
                <h3 className="text-3xl font-serif font-bold text-charcoal mb-3">Excellent!</h3>
                <p className="text-soft-grey text-lg mb-8 leading-relaxed">
                  Your inquiry has been stored. Our experts are already reviewing your project!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSubmitted(false)}
                  className="w-full py-4 bg-charcoal text-white rounded-xl font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-all duration-300"
                >
                  Return to Site
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

