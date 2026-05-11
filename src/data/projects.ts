export type ProjectStat = { value: string; label: string }
export type ProjectHighlight = { title: string; description: string; icon: string }
export type ProjectGalleryItem = { src: string; alt: string; caption?: string }
export type ProjectConnectivity = { time: string; unit: string; place: string }

export type Project = {
  slug: 'bliss-in-the-woods' | 'farm-hills' | 'indus-homes'
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
  videos?: { src: string; title: string; poster: string; kind?: string; duration?: string }[]
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
      src: '/videos/bliss-in-the-woods/walkthrough-1.mp4',
      poster: '/images/bliss-in-the-woods/villa-exterior.png',
    },
    cardImage: '/images/bliss-in-the-woods/villa-exterior.png',
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
        src: '/images/bliss-in-the-woods/villa-exterior.png',
        alt: 'BIW villa exterior with king-size parking',
        caption: 'King-size parking · plenty of room for the whole family',
      },
      {
        src: '/images/bliss-in-the-woods/amphitheatre.png',
        alt: 'Colossal amphitheatre at BIW',
        caption: 'Colossal amphitheatre — a treat for your eyes',
      },
      {
        src: '/images/bliss-in-the-woods/theme-parks.png',
        alt: 'Stunning hedge-maze theme parks',
        caption: 'Stunning theme parks — the perfect getaways',
      },
      {
        src: '/images/bliss-in-the-woods/open-space.png',
        alt: '6+ acres of open space',
        caption: '6+ acres of open space — room to wander',
      },
      {
        src: '/images/bliss-in-the-woods/villa-architectural.png',
        alt: 'Customizable villa architectural render',
        caption: 'Customizable villas — your home, your way',
      },
      {
        src: '/images/bliss-in-the-woods/living-room.png',
        alt: 'Modern living room interior',
        caption: 'Living room — designed for slow weekends',
      },
      {
        src: '/images/bliss-in-the-woods/kitchen-dining.png',
        alt: 'Open kitchen and dining',
        caption: 'Kitchen and dining — open, lit, gathered',
      },
      {
        src: '/images/bliss-in-the-woods/bedroom.png',
        alt: 'Master bedroom interior',
        caption: 'Bedroom — quiet textures, warm light',
      },
      {
        src: '/images/bliss-in-the-woods/courtyard-pond.png',
        alt: 'Outdoor courtyard with lily pond',
        caption: 'Courtyard pond — a piece of stillness at home',
      },
      {
        src: '/images/bliss-in-the-woods/balcony-view.png',
        alt: 'Balcony with forest view',
        caption: 'Balcony — long views, longer mornings',
      },
    ],
    connectivity: [
      { time: '10', unit: 'Mins', place: 'Outer Ring Road' },
      { time: '15', unit: 'Mins', place: 'RGI Airport' },
      { time: '30', unit: 'Mins', place: 'Financial District' },
    ],
    videos: [
      {
        src: '/videos/bliss-in-the-woods/walkthrough-1.mp4',
        title: 'Project Walkthrough · I',
        poster: '/images/bliss-in-the-woods/villa-exterior.png',
        kind: 'Walkthrough',
        duration: '0:30',
      },
      {
        src: '/videos/bliss-in-the-woods/walkthrough-2.mp4',
        title: 'Project Walkthrough · II',
        poster: '/images/bliss-in-the-woods/living-room.png',
        kind: 'Walkthrough',
        duration: '0:30',
      },
      {
        src: '/videos/bliss-in-the-woods/construction-1.mp4',
        title: 'Site Progress · Update I',
        poster: '/images/bliss-in-the-woods/open-space.png',
        kind: 'Construction',
        duration: '0:20',
      },
      {
        src: '/videos/bliss-in-the-woods/construction-2.mp4',
        title: 'Site Progress · Update II',
        poster: '/images/bliss-in-the-woods/theme-parks.png',
        kind: 'Construction',
        duration: '0:30',
      },
    ],
  },
  {
    slug: 'indus-homes',
    name: 'Indus Homes',
    shortName: 'Indus Homes',
    partner: 'Indus Homes',
    tagline: 'Completed luxury villa development rooted in transparency, quality and timely delivery',
    status: 'Completed',
    type: 'HMDA Approved Luxury Villa Project',
    location: {
      area: 'Pasumamula, Hayathnagar',
      short: 'East Hyderabad',
      full: 'Pasumamula, Hayathnagar, Rangareddy District, Telangana',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pasumamula%20Hayathnagar%20Rangareddy%20Telangana',
      embedQuery: 'Pasumamula+Hayathnagar+Rangareddy+Telangana',
    },
    surveyNumbers: 'LP No. 000061/LO/LPG/HMDA/2021',
    heroMedia: {
      kind: 'video',
      src: '/videos/indus-homes/indus-homes-video-01.mp4',
      poster: '/images/indus-homes/indus-homes-01.jpg',
    },
    cardImage: '/images/indus-homes/indus-homes-01.jpg',
    overview: [
      'Indus Homes represents Sunil Reddy’s completed real-estate foundation: a customer-first villa development story built around transparency, value for money, quality construction and timely delivery. The project is positioned around Abhi’s Aloha, a premium luxury villa community in Pasumamula, Hayathnagar.',
      'The development brings together HMDA-approved planning, practical connectivity and everyday community infrastructure: wide BT roads, underground cabling and drainage, avenue plantation, landscaped open spaces, children’s play areas and walking tracks. It reflects the Indus Homes belief that a home should feel extraordinary while remaining dependable, secure and easy to live in.',
    ],
    stats: [
      { value: '16.1', label: 'Acres Property' },
      { value: '240', label: 'Villa Units' },
      { value: '3', label: 'BHK Premium Villas' },
      { value: '1.22 Cr', label: 'Starting Price' },
    ],
    highlights: [
      {
        title: 'HMDA Approved Layout',
        description:
          'Approved under LP No. 000061/LO/LPG/HMDA/2021, giving the project a clear planning framework and stronger buyer confidence.',
        icon: 'shield',
      },
      {
        title: 'Luxury Villa Community',
        description:
          'A three-bedroom premium villa development in Pasumamula, created for families seeking an elevated East Hyderabad address.',
        icon: 'home',
      },
      {
        title: 'Quality Construction',
        description:
          'Indus Homes places construction quality at the front of every undertaking, with the goal of creating homes that last a lifetime.',
        icon: 'sustain',
      },
      {
        title: 'Timely Delivery Mindset',
        description:
          'The brand’s operating promise is discipline, management and delivery within committed timelines.',
        icon: 'clock',
      },
      {
        title: 'Planned Infrastructure',
        description:
          '40 ft main BT road, 30 ft internal BT roads, underground cabling, underground drainage and aesthetically designed street lighting.',
        icon: 'road',
      },
      {
        title: 'Green Community Amenities',
        description:
          'Avenue plantation, excellent landscaping, rain-water harvesting pits, children’s play area and walking track support a healthier environment.',
        icon: 'leaf',
      },
    ],
    gallery: [
      {
        src: '/images/indus-homes/indus-homes-01.jpg',
        alt: 'Night front elevation of completed Indus Homes villa',
        caption: 'Completed villa elevation · warm façade lighting and premium frontage',
      },
      {
        src: '/images/indus-homes/indus-homes-02.jpg',
        alt: 'Angled front view of Indus Homes villa',
        caption: 'Modern villa frontage with compound wall and private gate',
      },
      {
        src: '/images/indus-homes/indus-homes-03.jpg',
        alt: 'Straight front elevation of Indus Homes villa',
        caption: 'Full front elevation · balcony, steps and family-home scale',
      },
      {
        src: '/images/indus-homes/indus-homes-04.jpg',
        alt: 'Corner street-side view of Indus Homes villa',
        caption: 'Corner perspective showing the villa scale and street approach',
      },
      {
        src: '/images/indus-homes/indus-homes-05.jpg',
        alt: 'Indus Homes construction-stage villa façade',
        caption: 'Construction-stage façade · proof of execution on ground',
      },
      {
        src: '/images/indus-homes/indus-homes-06.jpg',
        alt: 'Row of modern Indus Homes villas',
        caption: 'Street view of adjacent modern villa elevations',
      },
      {
        src: '/images/indus-homes/indus-homes-07.jpg',
        alt: 'Close front elevation of grey Indus Homes villa',
        caption: 'Completed front elevation with grey cladding and clean lines',
      },
      {
        src: '/images/indus-homes/indus-homes-08.jpg',
        alt: 'Wide angled view of Indus Homes villa pair',
        caption: 'Wide angle view of completed villa pair and street frontage',
      },
    ],
    connectivity: [
      { time: '2.8', unit: 'Kms', place: 'NH65' },
      { time: '5.6', unit: 'Kms', place: 'Hayathnagar' },
      { time: '12', unit: 'Kms', place: 'Nagole' },
      { time: '18', unit: 'Mins', place: 'LB Nagar' },
    ],
    videos: [
      {
        src: '/videos/indus-homes/indus-homes-video-01.mp4',
        title: 'Completed Villa Walkthrough · I',
        poster: '/images/indus-homes/indus-homes-01.jpg',
        kind: 'Walkthrough',
        duration: '0:19',
      },
      {
        src: '/videos/indus-homes/indus-homes-video-02.mp4',
        title: 'Completed Villa Walkthrough · II',
        poster: '/images/indus-homes/indus-homes-07.jpg',
        kind: 'Walkthrough',
        duration: '0:27',
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
