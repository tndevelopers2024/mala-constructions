export interface Service {
  id: string
  name: string
  desc: string
  deliverables: string[]
  image: string
}

export const services: Service[] = [
  {
    id: 'residential',
    name: 'Residential Masterpieces',
    desc: 'Designing and constructing dream homes with care and precision.',
    deliverables: [
      'Custom villa and bungalow design',
      'Structural engineering and RCC framing',
      'Interior finishing to client specification',
      'Vaasthu-compliant layouts',
      'End-to-end project management',
    ],
    image: 'https://picsum.photos/seed/residential-service/800/600',
  },
  {
    id: 'commercial',
    name: 'Commercial Excellence',
    desc: 'Modern offices, retail outlets, and industrial facilities.',
    deliverables: [
      'Retail outlet construction and fit-out',
      'Office space design and build',
      'Industrial facility construction',
      'Commercial renovation and upgrades',
      'Permit acquisition and compliance',
    ],
    image: 'https://picsum.photos/seed/commercial-service/800/600',
  },
  {
    id: 'renovation',
    name: 'Renovation & Transformation',
    desc: 'Breathing new life into existing spaces with innovative remodeling.',
    deliverables: [
      'Complete interior overhaul',
      'Structural modifications and extensions',
      'Kitchen and bathroom renovation',
      'Facade and exterior upgrades',
      'MEP system upgrades',
    ],
    image: 'https://picsum.photos/seed/renovation-service/800/600',
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure Development',
    desc: 'Roads, utilities, and community infrastructure projects.',
    deliverables: [
      'Road and pavement construction',
      'Underground utility networks',
      'Storm water drainage systems',
      'Community facility development',
      'Government contract execution',
    ],
    image: 'https://picsum.photos/seed/infrastructure-service/800/600',
  },
  {
    id: 'maintenance',
    name: '24×7 Maintenance',
    desc: 'Round-the-clock maintenance for residential and commercial buildings.',
    deliverables: [
      '24-hour emergency response',
      'Scheduled preventive maintenance',
      'Electrical and plumbing repairs',
      'Structural inspection and repair',
      'Annual maintenance contracts',
    ],
    image: 'https://picsum.photos/seed/maintenance-service/800/600',
  },
]
