"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InquiryForm({ glass = false }: { glass?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    flatType: "",
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
              form_type: "Project Inquiry",
            },
          ],
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", flatType: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("Registration failed. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const labelCls = glass
    ? "block text-xs font-bold uppercase tracking-widest text-warm-white/50 mb-2"
    : "block text-sm font-medium text-charcoal mb-2";
  const inputCls = glass
    ? "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-warm-white placeholder:text-white/20 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all backdrop-blur-sm"
    : "w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal";

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelCls}>Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              required
              className={inputCls}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className={labelCls}>Phone Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              required
              className={inputCls}
              placeholder="+91 Mobile Number"
            />
          </div>
        </div>
        <div>
          <label className={labelCls}>Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className={inputCls}
            placeholder="Your email"
          />
        </div>
        <div>
          <label className={labelCls}>Flat Preference</label>
          <select
            name="flatType"
            value={formData.flatType}
            onChange={handleChange}
            className={inputCls}
          >
            <option value="" className="bg-charcoal text-warm-white">Select a flat type</option>
            <option value="f1" className="bg-charcoal text-warm-white">Flat F1/S1/T1 – 1084 sq.ft</option>
            <option value="f2" className="bg-charcoal text-warm-white">Flat F2/S2/T2 – 1154 sq.ft</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`${inputCls} resize-none`}
            placeholder="Any specific requirements or questions..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gold text-charcoal font-bold rounded-xl hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-wider relative overflow-hidden group disabled:opacity-70 disabled:cursor-wait"
        >
          <span className={isSubmitting ? "opacity-0" : "opacity-100"}>
            {submitted ? "Inquiry Sent!" : "Submit Inquiry"}
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
            {/* Confetti Explosion */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0 }}
                animate={{ 
                  x: (Math.random() - 0.5) * 800, 
                  y: (Math.random() - 0.5) * 800, 
                  scale: [0, 1, 0],
                  rotate: Math.random() * 720
                }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute w-3 h-3 z-10"
                style={{ 
                  backgroundColor: ["#C5A059", "#EEE3D3", "#FFFFFF"][i % 3],
                  left: "50%",
                  top: "50%",
                  borderRadius: i % 2 === 0 ? "50%" : "2px"
                }}
              />
            ))}

            <motion.div
              initial={{ scale: 0.2, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100 }}
              className="bg-warm-white rounded-[2.5rem] p-12 max-w-sm w-full shadow-[0_30px_60px_rgba(197,160,89,0.4)] text-center relative border border-gold/30"
            >
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-24 h-24 bg-gold rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg rotate-12"
              >
                <svg className="w-12 h-12 text-white -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <h3 className="text-3xl font-serif font-bold text-charcoal mb-4">Registration Successful!</h3>
              <p className="text-soft-grey text-lg mb-10 leading-relaxed">
                We've received your enquiry for Signature Sapphire. Our team will reach out shortly.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSubmitted(false)}
                className="w-full py-4 bg-charcoal text-white rounded-2xl font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-charcoal transition-all duration-300"
              >
                Awesome
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

