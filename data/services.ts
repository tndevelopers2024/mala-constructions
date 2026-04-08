export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "residential",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    title: "Residential Masterpieces",
    description:
      "We build dream homes with care and precision, crafting personalized living spaces that reflect your unique style and aspirations.",
  },
  {
    id: "commercial",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22"/><line x1="15" y1="22" x2="15" y2="22"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="12" y1="6" x2="12" y2="6"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="8" y1="6" x2="8" y2="6"/><line x1="16" y1="18" x2="16" y2="18"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="16" y1="6" x2="16" y2="6"/></svg>`,
    title: "Commercial Excellence",
    description:
      "From modern offices to retail spaces and industrial buildings, we deliver commercial projects that drive business success.",
  },
  {
    id: "renovation",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><path d="m11 2 9 2v5l-9 2-9-2V4l9-2Z"/><path d="M12 9v13"/><path d="M19 12h2"/><path d="M22 15h-3"/><path d="M4 12H2"/><path d="M2 15h3"/></svg>`,
    title: "Renovation & Transformation",
    description:
      "Innovative remodeling solutions that breathe new life into existing structures, transforming outdated spaces into modern marvels.",
  },
  {
    id: "infrastructure",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><rect x="1" y="3" width="22" height="18" rx="2"/><path d="M8 8v8"/><path d="M12 8v8"/><path d="M16 8v8"/></svg>`,
    title: "Infrastructure Development",
    description:
      "Building the backbone of communities with roads, utilities, and essential infrastructure that stands the test of time.",
  },
  {
    id: "maintenance",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    title: "24x7 Maintenance",
    description:
      "Round-the-clock maintenance services for commercial and residential properties, ensuring your spaces remain in pristine condition.",
  },
  {
    id: "stay",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10"><path d="M12 2v4"/><path d="m16.2 4.2 2.8 2.8"/><path d="M18 12h4"/><path d="m16.2 19.8 2.8-2.8"/><path d="M12 18v4"/><path d="m4.8 19.8 2.8-2.8"/><path d="M2 12h4"/><path d="m4.8 4.2 2.8 2.8"/></svg>`,
    title: "At The Top (Stay by Mala's)",
    description:
      "Experience luxury living at its finest in our premium penthouse stay, just 6km from Chennai Central. A home away from home.",
  },
];

