export type ProjectStat = { value: string; label: string }
export type ProjectHighlight = { title: string; description: string; icon: string }
export type ProjectGalleryItem = { src: string; alt: string; caption?: string }
export type ProjectConnectivity = { time: string; unit: string; place: string }

export type Project = {
  slug: 'bliss-in-the-woods' | 'farm-hills'
  name: string
  shortName: string
  partner: string
  tagline: string
  status: string
  type: string
  location: {
    area: string
    short: string
    full: string
    mapsUrl: string
    embedQuery: string
  }
  surveyNumbers?: string
  heroMedia: { kind: 'video' | 'image'; src: string; poster: string }
  cardImage: string
  overview: string[]
  stats: ProjectStat[]
  highlights: ProjectHighlight[]
  gallery: ProjectGalleryItem[]
  connectivity: ProjectConnectivity[]
  videos?: { src: string; title: string; poster: string }[]
}

export const projects: Project[] = [
  {
    slug: 'bliss-in-the-woods',
    name: 'Bliss In The Woods',
    shortName: 'BIW',
    partner: 'Nest Makers',
    tagline: 'Something like never-before',
    status: 'Ongoing',
    type: 'Premium Villa Community',
    location: {
      area: 'Near ORR, Hyderabad',
      short: 'ORR Corridor',
      full: 'Near Outer Ring Road, Hyderabad, Telangana',
      mapsUrl: 'https://maps.app.goo.gl/bCb9YJ4AHD5iFmCV7',
      embedQuery: 'Bliss+In+The+Woods+Hyderabad',
    },
    heroMedia: {
      kind: 'video',
      src: '/videos/bliss-in-the-woods/hero.mp4',
      poster: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80',
    },
    cardImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80',
    overview: [
      'Bliss In The Woods is a premium villa community embraced by a 450-acre eco-tourism park — a rare living experience where sustainability, luxury and connectivity meet. Conceived and planned by the Bhosho Design Group, every villa is studded with views of open landscape and sky.',
      'A ten-minute drive from the Outer Ring Road, fifteen from the International Airport, and thirty from the Financial District, BIW is the right blend of expansive nature and city access. Naturally grown, chemical-free food is part of everyday living — fruits and vegetables spread across the project.',
    ],
    stats: [
      { value: '450', label: 'Acre Eco-Tourism Park' },
      { value: '50,000', label: 'Sq Ft Imperial Clubhouse' },
      { value: '6', label: 'Acres of Open Space' },
      { value: '15', label: 'Min to RGI Airport' },
    ],
    highlights: [
      {
        title: '450-Acre Eco-Tourism Park',
        description:
          'Wrapped in a 450-acre eco-tourism park with colossal panoramas, lights and water-side bars — a resort-like vacation experience at your doorstep.',
        icon: 'leaf',
      },
      {
        title: 'Imperial Clubhouse',
        description:
          '50,000 sq ft clubhouse with rooftop cycling and skating tracks, amphitheater hosting and luxury amenities surrounded by forest views.',
        icon: 'club',
      },
      {
        title: 'Two 100 ft Vastu Entrances',
        description:
          'V-shaped 100 ft road approach with NE & NW entries planned to comply with Vastu — trees on one side, open sky on the other.',
        icon: 'road',
      },
      {
        title: 'Central Park & Theme Streets',
        description:
          'A central nature-therapy park plus a stunning theme park designed for every street — fun and family time always within reach.',
        icon: 'park',
      },
      {
        title: 'Colossal Amphitheatre',
        description:
          'An open amphitheatre beside the clubhouse for entertainment, performance and gatherings — wrapped in forest views.',
        icon: 'amphitheatre',
      },
      {
        title: 'Pet Park & Two Ponds',
        description:
          'Designed pet park for all breeds plus two man-made water bodies with exotic fish and lake plants for an everyday vacation feel.',
        icon: 'pet',
      },
      {
        title: 'Luxury & Natural Pools',
        description:
          'A scenic natural pool that oozes vacation vibes and a luxury indoor pool that defines fun and adventure through every season.',
        icon: 'pool',
      },
      {
        title: 'The Outhouse for Magic Moments',
        description:
          'A stand-alone farmhouse built for weddings and celebrations, surrounded by large segments of fresh vegetation cover.',
        icon: 'home',
      },
      {
        title: 'Sustainable Living',
        description:
          'Chemical-free farming integrated across the project — fruits and vegetables you can pick fresh from your community.',
        icon: 'sustain',
      },
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80',
        alt: 'Open meadows surrounding Bliss In The Woods',
        caption: 'Embraced by 450 acres of eco-tourism park',
      },
      {
        src: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1400&q=80',
        alt: 'Bamboo canopy walkway',
        caption: 'A piece of heaven — the eco-tourism park',
      },
      {
        src: 'https://images.unsplash.com/photo-1505819985416-2b6ca7704d09?w=1400&q=80',
        alt: 'Central park lawn',
        caption: 'Central park — all yours to wander around',
      },
      {
        src: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1400&q=80',
        alt: 'Designer pond at BIW',
        caption: 'Beautiful ponds — blues are fun',
      },
      {
        src: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=1400&q=80',
        alt: 'Outhouse pavilion render',
        caption: 'The outhouse — hangout with nature',
      },
      {
        src: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1400&q=80',
        alt: 'Natural luxury pool',
        caption: 'Luxury pools — the splash of joy',
      },
    ],
    connectivity: [
      { time: '10', unit: 'Mins', place: 'Outer Ring Road' },
      { time: '15', unit: 'Mins', place: 'RGI Airport' },
      { time: '30', unit: 'Mins', place: 'Financial District' },
    ],
    videos: [
      {
        src: '/videos/bliss-in-the-woods/tour.mp4',
        title: 'Project Walkthrough',
        poster:
          'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1400&q=80',
      },
    ],
  },
  {
    slug: 'farm-hills',
    name: 'Farm Hills',
    shortName: 'Farm Hills',
    partner: 'Assured Property',
    tagline: 'Your getaway to a great lifestyle',
    status: 'Phase II Open',
    type: 'Farm Villa Plots',
    location: {
      area: 'Nedunur, Kandukur Mandal',
      short: 'Rangareddy District',
      full: 'Nedunur (V), Kandukur (M), Rangareddy District, Telangana',
      mapsUrl: 'https://maps.app.goo.gl/zHUmAhu7rknEdKYS7?g_st=aw',
      embedQuery: 'Nedunur+Kandukur+Rangareddy+Telangana',
    },
    surveyNumbers: '525, 526, 527, 529, 530, 531 & 536',
    heroMedia: {
      kind: 'image',
      src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85',
      poster:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85',
    },
    cardImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85',
    overview: [
      'Farm Hills is a verified farm-villa-plot layout by Assured Property — a getaway to a great lifestyle for those looking to own a piece of nature within reach of Hyderabad. Phase I is set across an Ac 54-12 Gts master layout in Nedunur, Kandukur Mandal, with Phase II opening up another 45 acres of farm plots.',
      'Plotted with 40-foot wide internal roads and anchored by a 4.61-acre Hill Top Clubhouse area, Farm Hills is built on the "Buy Verified, Be Secured" promise — clear titles, defined survey numbers and a transparent layout for confident long-term ownership.',
    ],
    stats: [
      { value: '54+', label: 'Acres in Phase I' },
      { value: '45', label: 'Acres in Phase II' },
      { value: '4.61', label: 'Acre Hill Top Clubhouse' },
      { value: '40', label: 'Ft Wide Internal Roads' },
    ],
    highlights: [
      {
        title: 'Verified Farm Villa Plots',
        description:
          'Buy Verified. Be Secured. Defined survey numbers (525–536) and a transparent layout — ownership without the usual land-buy guesswork.',
        icon: 'shield',
      },
      {
        title: 'Hill Top Clubhouse',
        description:
          'A 4.61-acre Hill Top Clubhouse area (22,320 sq yd) anchors the layout — the social and lifestyle hub of the community.',
        icon: 'club',
      },
      {
        title: 'Two-Phase Development',
        description:
          'Phase I master layout of Ac 54-12 Gts, with Phase II opening up a further 45 acres — a community designed to grow.',
        icon: 'expand',
      },
      {
        title: '40 ft Wide Roads',
        description:
          'Generous 40-foot wide internal roads throughout the layout for easy access, future-proofing and a relaxed plotted-villa feel.',
        icon: 'road',
      },
      {
        title: 'Lifestyle Getaway',
        description:
          'A weekend-home-meets-investment proposition: build your farm villa, grow what you eat, and step away from the city when you need to.',
        icon: 'leaf',
      },
      {
        title: 'Telangana Land Corridor',
        description:
          'Located at Nedunur Village, Kandukur Mandal — a Rangareddy district corridor with strong land-value fundamentals.',
        icon: 'pin',
      },
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85',
        alt: 'Open farmland landscape',
        caption: 'Farm villa plots across Phase I',
      },
      {
        src: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1400&q=85',
        alt: 'Plotted layout aerial view',
        caption: 'Plotted layout with 40 ft wide internal roads',
      },
      {
        src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=85',
        alt: 'Hill top vista',
        caption: 'Hill Top Clubhouse zone — 4.61 acres',
      },
      {
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=85',
        alt: 'Telangana countryside',
        caption: 'Nedunur, Kandukur Mandal · Rangareddy District',
      },
    ],
    connectivity: [
      { time: '54+', unit: 'Acres', place: 'Phase I Layout' },
      { time: '45', unit: 'Acres', place: 'Phase II' },
      { time: '40', unit: 'Ft', place: 'Internal Roads' },
    ],
  },
]

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)
