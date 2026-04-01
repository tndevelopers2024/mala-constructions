export interface Project {
  id: string;
  title: string;
  location: string;
  type: "Residential" | "Commercial";
  status: "completed" | "ongoing";
  gradient: string;
  image: string;
  description: string;
}

export const completedProjects: Project[] = [
  {
    id: "gopi-residence",
    title: "Mr. Gopi Residence",
    location: "Mannivakkam, Chennai",
    type: "Residential",
    status: "completed",
    gradient: "from-amber-800 to-amber-600",
    image: "/images/projects/gopi-residence.jpg",
    description: "Premium residential villa with modern architecture",
  },
  {
    id: "luke-thomas-residence",
    title: "Mr. Luke Thomas Residence",
    location: "Perambur, Chennai",
    type: "Residential",
    status: "completed",
    gradient: "from-slate-700 to-slate-500",
    image: "/images/projects/luke-thomas-residence.jpg",
    description: "Contemporary home with elegant design",
  },
  {
    id: "madhu-residence",
    title: "Mr. Madhu Residence",
    location: "Madhavaram, Chennai",
    type: "Residential",
    status: "completed",
    gradient: "from-stone-700 to-stone-500",
    image: "/images/projects/madhu-residence.jpg",
    description: "Modern residential construction with quality finishes",
  },
  {
    id: "prabin-residence",
    title: "Mr. Prabin Residence",
    location: "Poombuhar Nagar, Chennai",
    type: "Residential",
    status: "completed",
    gradient: "from-zinc-700 to-zinc-500",
    image: "/images/projects/prabin-residence.jpg",
    description: "Luxury villa with contemporary amenities",
  },
  {
    id: "veni-residence",
    title: "Mrs. Veni Residence",
    location: "Senthil Nagar, Chennai",
    type: "Residential",
    status: "completed",
    gradient: "from-neutral-700 to-neutral-500",
    image: "/images/projects/veni-residence.jpg",
    description: "Elegant residential home with modern design",
  },
];

export const ongoingProjects: Project[] = [
  {
    id: "lathika-residence",
    title: "Mrs. Lathika Residence",
    location: "West Mambalam",
    type: "Residential",
    status: "ongoing",
    gradient: "from-emerald-800 to-emerald-600",
    image: "",
    description: "",
  },
  {
    id: "thomas-apartments",
    title: "Mr. Thomas Apartments",
    location: "Annapoorna Nagar",
    type: "Residential",
    status: "ongoing",
    gradient: "from-teal-800 to-teal-600",
    image: "",
    description: "",
  },
  {
    id: "vasudevan-residence",
    title: "Mr. Vasudevan Residence",
    location: "Poombukar Nagar",
    type: "Residential",
    status: "ongoing",
    gradient: "from-cyan-800 to-cyan-600",
    image: "",
    description: "",
  },
  {
    id: "samuel-sathish-residence",
    title: "Mr. Samuel Sathish Residence",
    location: "Vadaperumbakkam",
    type: "Residential",
    status: "ongoing",
    gradient: "from-sky-800 to-sky-600",
    image: "",
    description: "",
  },
  {
    id: "krishna-menon-residence",
    title: "Mr. Krishna Menon Residence",
    location: "Tiruvottriyur",
    type: "Residential",
    status: "ongoing",
    gradient: "from-indigo-800 to-indigo-600",
    image: "",
    description: "",
  },
  {
    id: "malas-legacy",
    title: "Mrs. Mala's Legacy Residential Apartment",
    location: "Kolathur",
    type: "Residential",
    status: "ongoing",
    gradient: "from-violet-800 to-violet-600",
    image: "",
    description: "",
  },
];

export const allProjects = [...completedProjects, ...ongoingProjects];
