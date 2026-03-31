export interface Service {
  name: string
  desc: string
  deliverables: string[]
  image: string
}

export const services: Service[] = [
  {
    name: 'Residential Masterpieces',
    desc: 'Designing and constructing dream homes with care and precision.',
    deliverables: [
      'Custom floor plans tailored to your lifestyle',
      'Premium material sourcing and quality assurance',
      'End-to-end project management from foundation to finish',
      'Vaasthu-compliant designs upon request',
      'Post-construction support and warranty',
    ],
    image: 'https://picsum.photos/seed/residential/800/600',
  },
  {
    name: 'Commercial Excellence',
    desc: 'Modern offices, retail outlets, and industrial facilities.',
    deliverables: [
      'Space optimization for maximum business efficiency',
      'Compliance with commercial building regulations',
      'Modern facade and interior design',
      'Electrical and HVAC integration',
      'Timely delivery for business continuity',
    ],
    image: 'https://picsum.photos/seed/commercial/800/600',
  },
  {
    name: 'Renovation & Transformation',
    desc: 'Breathing new life into existing spaces with innovative remodeling.',
    deliverables: [
      'Structural assessment and reinforcement',
      'Modern interior redesign and space reconfiguration',
      'Plumbing and electrical upgrades',
      'Exterior facade renovation',
      'Minimal disruption during renovation process',
    ],
    image: 'https://picsum.photos/seed/renovation/800/600',
  },
  {
    name: 'Infrastructure Development',
    desc: 'Roads, utilities, and community infrastructure projects.',
    deliverables: [
      'Road construction and repair',
      'Drainage and sewage systems',
      'Water supply and distribution networks',
      'Community building and public spaces',
      'Government project execution experience',
    ],
    image: 'https://picsum.photos/seed/infrastructure/800/600',
  },
  {
    name: '24x7 Maintenance',
    desc: 'Round-the-clock maintenance for residential and commercial buildings.',
    deliverables: [
      'Emergency repair and response services',
      'Scheduled preventive maintenance',
      'Plumbing, electrical, and structural upkeep',
      'Annual maintenance contracts',
      'Dedicated support team on call',
    ],
    image: 'https://picsum.photos/seed/maintenance/800/600',
  },
]
