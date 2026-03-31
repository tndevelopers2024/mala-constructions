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
    coverImage: 'https://picsum.photos/seed/everest-bakery/800/600',
    gallery: [],
  },
  {
    slug: 'poorvika-mobiles',
    title: 'Poorvika Mobiles',
    client: 'Ms. Poorvika Mobiles',
    location: 'Perambur, Chennai',
    type: 'commercial',
    status: 'completed',
    coverImage: 'https://picsum.photos/seed/poorvika-mobiles/800/600',
    gallery: [],
  },
  {
    slug: 'gopi-residence',
    title: 'Gopi Residence',
    client: 'Mr. Gopi',
    location: 'Mannivakkam, Chennai',
    type: 'villa',
    status: 'completed',
    coverImage: 'https://picsum.photos/seed/gopi-residence/800/600',
    gallery: [],
  },
  {
    slug: 'premadas-residence',
    title: 'Premadas Residence',
    client: 'Mr. Premadas',
    location: 'Mathur, Chennai',
    type: 'villa',
    status: 'completed',
    coverImage: 'https://picsum.photos/seed/premadas-residence/800/600',
    gallery: [],
  },
  {
    slug: 'veni-residence',
    title: 'Veni Residence',
    client: 'Mrs. Veni',
    location: 'Kolathur, Chennai',
    type: 'villa',
    status: 'completed',
    coverImage: 'https://picsum.photos/seed/veni-residence/800/600',
    gallery: [],
  },
  {
    slug: 'prabin-residence',
    title: 'Prabin Residence',
    client: 'Mr. Prabin',
    location: 'Poompuhar Nagar, Chennai',
    type: 'villa',
    status: 'completed',
    coverImage: 'https://picsum.photos/seed/prabin-residence/800/600',
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
    coverImage: 'https://picsum.photos/seed/lathika-residence/800/600',
    gallery: [],
  },
  {
    slug: 'thomas-apartments',
    title: 'Thomas Apartments',
    client: 'Mr. Thomas',
    location: 'Annapoorna Nagar, Chennai',
    type: 'apartment',
    status: 'ongoing',
    coverImage: 'https://picsum.photos/seed/thomas-apartments/800/600',
    gallery: [],
  },
  {
    slug: 'vasudevan-residence',
    title: 'Vasudevan Residence',
    client: 'Mr. Vasudevan',
    location: 'Poombukar Nagar, Chennai',
    type: 'villa',
    status: 'ongoing',
    coverImage: 'https://picsum.photos/seed/vasudevan-residence/800/600',
    gallery: [],
  },
  {
    slug: 'samuel-sathish-residence',
    title: 'Samuel Sathish Residence',
    client: 'Mr. Samuel Sathish',
    location: 'Vadaperumbakkam, Chennai',
    type: 'villa',
    status: 'ongoing',
    coverImage: 'https://picsum.photos/seed/samuel-sathish-residence/800/600',
    gallery: [],
  },
  {
    slug: 'krishna-menon-residence',
    title: 'Krishna Menon Residence',
    client: 'Mr. Krishna Menon',
    location: 'Tiruvottriyur, Chennai',
    type: 'villa',
    status: 'ongoing',
    coverImage: 'https://picsum.photos/seed/krishna-menon-residence/800/600',
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
    coverImage: 'https://picsum.photos/seed/malas-sapphire/800/600',
    gallery: [
      'https://picsum.photos/seed/sapphire-exterior-1/1200/800',
      'https://picsum.photos/seed/sapphire-exterior-2/1200/800',
      'https://picsum.photos/seed/sapphire-floor-plan/1200/800',
      'https://picsum.photos/seed/sapphire-ground-plan/1200/800',
    ],
    description:
      "Mala's Signature Sapphire — 6 premium East-facing 3BHK boutique residences in Kolathur.",
  },
]
