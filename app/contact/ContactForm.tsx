"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Name *
        </label>
        <input
          type="text"
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
            type="tel"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Email
          </label>
          <input
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
        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal">
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
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white text-charcoal resize-none"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-wider"
      >
        {submitted ? "✓ Message Sent Successfully!" : "Send Message"}
      </button>
    </form>
  );
}
