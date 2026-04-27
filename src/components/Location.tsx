'use client'
import { useState } from 'react'

type MapView = {
  id: 'office' | 'biw' | 'farm-hills'
  label: string
  title: string
  address: string
  embedQuery: string
  proximities: { time: string; unit: string; place: string }[]
}

const mapViews: MapView[] = [
  {
    id: 'office',
    label: 'Office',
    title: 'VipHomes Office',
    address: '11/P, Brundavan Colony, Narsingi Village, Gandipet, Hyderabad – 500075',
    embedQuery: 'Narsingi+Village+Gandipet+Hyderabad',
    proximities: [
      { time: '5', unit: 'Mins', place: 'Narsingi Junction' },
      { time: '10', unit: 'Mins', place: 'ORR Exit' },
      { time: '15', unit: 'Mins', place: 'Gachibowli' },
      { time: '20', unit: 'Mins', place: 'Hitech City' },
    ],
  },
  {
    id: 'biw',
    label: 'Bliss In The Woods',
    title: 'Bliss In The Woods',
    address: 'Near Outer Ring Road, Hyderabad, Telangana — a Nest Makers development.',
    embedQuery: 'Bliss+In+The+Woods+Hyderabad',
    proximities: [
      { time: '10', unit: 'Mins', place: 'ORR' },
      { time: '15', unit: 'Mins', place: 'RGI Airport' },
      { time: '30', unit: 'Mins', place: 'Financial District' },
    ],
  },
  {
    id: 'farm-hills',
    label: 'Farm Hills',
    title: 'Farm Hills',
    address: 'Nedunur (V), Kandukur (M), Rangareddy District, Telangana — by Assured Property.',
    embedQuery: 'Nedunur+Kandukur+Rangareddy+Telangana',
    proximities: [
      { time: '54+', unit: 'Acres', place: 'Phase I Layout' },
      { time: '45', unit: 'Acres', place: 'Phase II' },
      { time: '40', unit: 'Ft', place: 'Internal Roads' },
    ],
  },
]

export default function Location() {
  const [active, setActive] = useState<MapView['id']>('biw')
  const view = mapViews.find((v) => v.id === active) ?? mapViews[0]

  return (
    <section id="location" className="py-32 md:py-44 px-6 bg-[var(--color-bg-off)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="tp-fade-left">
              <span className="section-subtitle">Where We Are</span>
            </div>
            <div className="tp-fade-left stagger-delay-1">
              <h2 className="section-title text-4xl md:text-6xl leading-tight mb-10">
                <em>Three pins</em> on the map
              </h2>
            </div>
            <div className="tp-fade-left stagger-delay-2">
              <p className="section-text mb-10">
                Our Narsingi office, the BIW villa community on the ORR corridor, and the
                Farm Hills plotted layout in Rangareddy. Switch the tab below to see each one.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {mapViews.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActive(v.id)}
                  className={`location-tab ${active === v.id ? 'is-active' : ''}`}
                  type="button"
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {view.proximities.map((item, i) => (
                <div key={`${view.id}-${i}`} className="proximity-badge">
                  <span className="time">{item.time}</span>
                  <div>
                    <span className="font-body text-[10px] font-medium text-[var(--color-text-light)] tracking-[1px] uppercase block">{item.unit}</span>
                    <span className="font-body text-[13px] font-light text-[var(--color-black)]">{item.place}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tp-fade-right">
            <div className="overflow-hidden shadow-lg location-map-card" key={view.id}>
              <iframe
                src={`https://www.google.com/maps?q=${view.embedQuery}&output=embed`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title={`${view.title} map`}
              />
              <div className="bg-white p-7">
                <p className="font-heading text-2xl text-[var(--color-black)] mb-1 font-normal">{view.title}</p>
                <p className="font-body text-[var(--color-text)] text-[13px] font-light">{view.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
