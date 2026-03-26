export interface Project {
  id: string;
  title: string;
  location: string;
  type: "Residential" | "Commercial";
  status: "completed" | "ongoing";
  gradient: string;
}

export const completedProjects: Project[] = [
  {
    id: "everest-bakery",
    title: "Ms. Everest Bakery",
    location: "Madhavaram",
    type: "Commercial",
    status: "completed",
    gradient: "from-amber-800 to-amber-600",
  },
  {
    id: "poorvika-mobiles",
    title: "Ms. Poorvika Mobiles",
    location: "Perambur",
    type: "Commercial",
    status: "completed",
    gradient: "from-slate-700 to-slate-500",
  },
  {
    id: "gopi-residence",
    title: "Mr. Gopi Residence",
    location: "Mannivakkam",
    type: "Residential",
    status: "completed",
    gradient: "from-stone-700 to-stone-500",
  },
  {
    id: "premadas-residence",
    title: "Mr. Premadas Residence",
    location: "Mathur",
    type: "Residential",
    status: "completed",
    gradient: "from-zinc-700 to-zinc-500",
  },
  {
    id: "veni-residence",
    title: "Mrs. Veni Residence",
    location: "Kolathur",
    type: "Residential",
    status: "completed",
    gradient: "from-neutral-700 to-neutral-500",
  },
  {
    id: "prabin-residence",
    title: "Mr. Prabin Residence",
    location: "Poompuhar Nagar",
    type: "Residential",
    status: "completed",
    gradient: "from-gray-700 to-gray-500",
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
  },
  {
    id: "thomas-apartments",
    title: "Mr. Thomas Apartments",
    location: "Annapoorna Nagar",
    type: "Residential",
    status: "ongoing",
    gradient: "from-teal-800 to-teal-600",
  },
  {
    id: "vasudevan-residence",
    title: "Mr. Vasudevan Residence",
    location: "Poombukar Nagar",
    type: "Residential",
    status: "ongoing",
    gradient: "from-cyan-800 to-cyan-600",
  },
  {
    id: "samuel-sathish-residence",
    title: "Mr. Samuel Sathish Residence",
    location: "Vadaperumbakkam",
    type: "Residential",
    status: "ongoing",
    gradient: "from-sky-800 to-sky-600",
  },
  {
    id: "krishna-menon-residence",
    title: "Mr. Krishna Menon Residence",
    location: "Tiruvottriyur",
    type: "Residential",
    status: "ongoing",
    gradient: "from-indigo-800 to-indigo-600",
  },
  {
    id: "malas-legacy",
    title: "Mrs. Mala's Legacy Residential Apartment",
    location: "Kolathur",
    type: "Residential",
    status: "ongoing",
    gradient: "from-violet-800 to-violet-600",
  },
];

export const allProjects = [...completedProjects, ...ongoingProjects];
