export const BRAND = {
  name: "MALA Constructions",
  tagline: "Transforming Spaces Since 1999",
  subtitle: "Legacy of Innovation and Customer Satisfaction",
  foundedYear: 1989,
  constructionSince: 1999,
} as const;

export const CONTACT = {
  address: "6, Shanthi Nagar, 1st Main Road, Kolathur, Chennai – 600 099",
  phones: ["9840264993", "9789931141"],
  email: "malaconstructionschennai@gmail.com",
  website: "malaconstructions.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6424911765476!2d80.2016335!3d13.1218567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52646399999999%3A0x1d440d9999999999!2s6%2C%20Shanthi%20Nagar%2C%201st%20Main%20Rd%2C%20Kolathur%2C%20Chennai%2C%20Tamil%20Nadu%20600099!5e0!3m2!1sen!2sin!4v1712061000000!5m2!1sen!2sin",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Signature Sapphire", href: "/signature-sapphire" },
  { label: "Stay", href: "/stay" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { value: "100+", label: "Residential Buildings" },
  { value: "50+", label: "Villas" },
  { value: "25+", label: "Commercial Outlets" },
  { value: "Since 1989", label: "Years of Trust" },
] as const;

export const COLORS = {
  charcoal: "#1a1a1a",
  warmWhite: "#f5f5f0",
  gold: "#c9a84c",
  softGrey: "#8a8a8a",
} as const;
