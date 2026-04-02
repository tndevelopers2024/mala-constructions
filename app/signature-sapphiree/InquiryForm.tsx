"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal"
            placeholder="Your phone"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal"
          placeholder="Your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Flat Preference
        </label>
        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal">
          <option value="">Select a flat type</option>
          <option value="f1">Flat F1/S1/T1 – 1084 sq.ft</option>
          <option value="f2">Flat F2/S2/T2 – 1154 sq.ft</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal resize-none"
          placeholder="Any specific requirements or questions..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-wider"
      >
        {submitted ? "✓ Thank You! We'll Contact You Soon" : "Submit Enquiry"}
      </button>
    </form>
  );
}
