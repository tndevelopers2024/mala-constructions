export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "residential",
    icon: "🏠",
    title: "Residential Masterpieces",
    description:
      "We build dream homes with care and precision, crafting personalized living spaces that reflect your unique style and aspirations.",
  },
  {
    id: "commercial",
    icon: "🏢",
    title: "Commercial Excellence",
    description:
      "From modern offices to retail spaces and industrial buildings, we deliver commercial projects that drive business success.",
  },
  {
    id: "renovation",
    icon: "🔨",
    title: "Renovation & Transformation",
    description:
      "Innovative remodeling solutions that breathe new life into existing structures, transforming outdated spaces into modern marvels.",
  },
  {
    id: "infrastructure",
    icon: "🛣️",
    title: "Infrastructure Development",
    description:
      "Building the backbone of communities with roads, utilities, and essential infrastructure that stands the test of time.",
  },
  {
    id: "maintenance",
    icon: "🔧",
    title: "24x7 Maintenance",
    description:
      "Round-the-clock maintenance services for commercial and residential properties, ensuring your spaces remain in pristine condition.",
  },
  {
    id: "stay",
    icon: "✨",
    title: "At The Top (Stay by Mala's)",
    description:
      "Experience luxury living at its finest in our premium penthouse stay, just 6km from Chennai Central. A home away from home.",
  },
];
