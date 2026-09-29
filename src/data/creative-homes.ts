export const creativeHomes = {
  name: 'VIP Creative Homes',
  location: 'Harshaguda, Maheshwaram, South Hyderabad, Telangana',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=17.173122%2C78.442408',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=17.173122%2C78.442408',
  whatsapp: 'https://wa.me/919912098386',
  image: '/images/vip-creative-homes/villa-concept.webp',
}

export const villaPlans = [
  {
    size: '300',
    orientation: 'West facing',
    plot: '45′ × 60′',
    total: '4,530',
    note: 'Conceptual configuration. Total is the sum of the three supplied floor areas.',
    floors: [
      {
        name: 'Ground floor',
        area: '1,705',
        spaces:
          'Living and drawing rooms, parent bedroom, double-height dining, courtyard, dry and wet kitchens.',
      },
      {
        name: 'First floor',
        area: '1,705',
        spaces:
          'Master and children’s bedrooms, seating lounge, study, puja and sit-outs.',
      },
      {
        name: 'Second floor',
        area: '1,120',
        spaces:
          'Home theatre, guest bedroom, bar and open terraces. This floor is shown as Option 3 in the supplied concept.',
      },
    ],
  },
  {
    size: '400',
    orientation: 'East facing',
    plot: '60′ × 60′',
    total: '4,801',
    note: 'Conceptual configuration. Areas follow the supplied architectural drawings.',
    floors: [
      {
        name: 'Ground floor',
        area: '1,826',
        spaces:
          'Living and drawing rooms, parent bedroom, courtyard, double-height dining, dry and wet kitchens.',
      },
      {
        name: 'First floor',
        area: '1,804',
        spaces:
          'Master and children’s bedrooms, family living, puja and sit-outs overlooking the spaces below.',
      },
      {
        name: 'Second floor',
        area: '1,171',
        spaces: 'Home theatre, bar, guest bedroom and open terraces.',
      },
    ],
  },
  {
    size: '500',
    orientation: 'West facing',
    plot: '90′ × 50′',
    total: '5,348.76',
    note: 'Additional concept for exploration; inclusion in the proposed community is subject to confirmation.',
    floors: [
      {
        name: 'Ground floor',
        area: '1,929.14',
        spaces:
          'Living, drawing and dining areas, parent bedroom, deck, dry and wet kitchens and utility.',
      },
      {
        name: 'First floor',
        area: '2,258.66',
        spaces:
          'Master and children’s bedrooms, family lounge, puja and sit-outs.',
      },
      {
        name: 'Second floor',
        area: '1,160.96',
        spaces: 'Bedroom, hobby space, home theatre and a generous sit-out.',
      },
    ],
  },
] as const

export const floorKeys = ['ground', 'first', 'second'] as const
export const planImage = (size: string, floor: number) =>
  `/images/vip-creative-homes/${size}-${floorKeys[floor]}.webp`
