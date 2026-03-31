export type ProjectType = 'villa' | 'apartment' | 'commercial'
export type ProjectStatus = 'completed' | 'ongoing' | 'flagship'

export interface Project {
  slug: string
  title: string
  client: string
  location: string
  type: ProjectType
  status: ProjectStatus
  coverImage: string
  gallery: string[]
  description?: string
}

export const projects: Project[] = [
  // COMPLETED
  {
    slug: 'everest-bakery',
    title: 'Everest Bakery',
    client: 'Ms. Everest Bakery',
    location: 'Madhavaram, Chennai',
    type: 'commercial',
    status: 'completed',
    coverImage: '/images/projects/everest-bakery.jpg',
    gallery: [],
  },
  {
    slug: 'poorvika-mobiles',
    title: 'Poorvika Mobiles',
    client: 'Ms. Poorvika Mobiles',
    location: 'Perambur, Chennai',
    type: 'commercial',
    status: 'completed',
    coverImage: '/images/projects/poorvika-mobiles.jpg',
    gallery: [],
  },
  {
    slug: 'gopi-residence',
    title: 'Gopi Residence',
    client: 'Mr. Gopi',
    location: 'Mannivakkam, Chennai',
    type: 'villa',
    status: 'completed',
    coverImage: '/images/projects/gopi-residence.jpg',
    gallery: [],
  },
  {
    slug: 'premadas-residence',
    title: 'Premadas Residence',
    client: 'Mr. Premadas',
    location: 'Mathur, Chennai',
    type: 'villa',
    status: 'completed',
    coverImage: '/images/projects/premadas-residence.jpg',
    gallery: [],
  },
  {
    slug: 'veni-residence',
    title: 'Veni Residence',
    client: 'Mrs. Veni',
    location: 'Kolathur, Chennai',
    type: 'villa',
    status: 'completed',
    coverImage: '/images/projects/veni-residence.jpg',
    gallery: [],
  },
  {
    slug: 'prabin-residence',
    title: 'Prabin Residence',
    client: 'Mr. Prabin',
    location: 'Poompuhar Nagar, Chennai',
    type: 'villa',
    status: 'completed',
    coverImage: '/images/projects/prabin-residence.jpg',
    gallery: [],
  },
  // ONGOING
  {
    slug: 'lathika-residence',
    title: 'Lathika Residence',
    client: 'Mrs. Lathika',
    location: 'West Mambalam, Chennai',
    type: 'villa',
    status: 'ongoing',
    coverImage: '/images/projects/lathika-residence.jpg',
    gallery: [],
  },
  {
    slug: 'thomas-apartments',
    title: 'Thomas Apartments',
    client: 'Mr. Thomas',
    location: 'Annapoorna Nagar, Chennai',
    type: 'apartment',
    status: 'ongoing',
    coverImage: '/images/projects/thomas-apartments.jpg',
    gallery: [],
  },
  {
    slug: 'vasudevan-residence',
    title: 'Vasudevan Residence',
    client: 'Mr. Vasudevan',
    location: 'Poombukar Nagar, Chennai',
    type: 'villa',
    status: 'ongoing',
    coverImage: '/images/projects/vasudevan-residence.jpg',
    gallery: [],
  },
  {
    slug: 'samuel-sathish-residence',
    title: 'Samuel Sathish Residence',
    client: 'Mr. Samuel Sathish',
    location: 'Vadaperumbakkam, Chennai',
    type: 'villa',
    status: 'ongoing',
    coverImage: '/images/projects/samuel-sathish-residence.jpg',
    gallery: [],
  },
  {
    slug: 'krishna-menon-residence',
    title: 'Krishna Menon Residence',
    client: 'Mr. Krishna Menon',
    location: 'Tiruvottriyur, Chennai',
    type: 'villa',
    status: 'ongoing',
    coverImage: '/images/projects/krishna-menon-residence.jpg',
    gallery: [],
  },
  // FLAGSHIP
  {
    slug: 'malas-sapphire',
    title: "Mala's Sapphire",
    client: 'Mala Constructions',
    location: 'Haridoss Nagar 1st Main Road, Kolathur, Chennai',
    type: 'apartment',
    status: 'flagship',
    coverImage: '/images/projects/malas-sapphire.jpg',
    gallery: [
      '/images/sapphire/exterior-1.jpg',
      '/images/sapphire/exterior-2.jpg',
      '/images/sapphire/floor-plan.jpg',
      '/images/sapphire/ground-plan.jpg',
    ],
    description:
      "Mala's Signature Sapphire — 6 premium East-facing 3BHK boutique residences in Kolathur.",
  },
]
