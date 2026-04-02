"use client";

import React from 'react';

const marqueeItems = [
  "20+ Years of Excellence",
  "1000+ Projects Completed",
  "Premium Quality Construction",
  "Expert Craftsmanship",
  "Customer Satisfaction Guaranteed",
  "Building Dreams Since 2004",
  "Innovative Designs",
  "Structural Integrity First",
];

export default function MarqueeBanner() {
  // Use two sets of items for a seamless loop with translateX(-50%)
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-gold py-4 overflow-hidden border-y border-gold-dark/20 relative z-10 shadow-sm cursor-default">
      <div className="flex animate-marquee hover-pause whitespace-nowrap w-max px-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-charcoal font-serif font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              {item}
            </span>
            <span className="ml-16 w-1.5 h-1.5 bg-charcoal rotate-45 opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
}
