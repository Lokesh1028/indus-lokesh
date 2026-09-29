'use client'
import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

const mapViews = [
  {
    id: 'office',
    label: 'Office',
    title: 'VIP Homes Office',
    address:
      '11/P, Brundavan Colony, Narsingi Village, Gandipet, Hyderabad – 500075',
    embedQuery: '11/P Brundavan Colony Narsingi Village Gandipet Hyderabad',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=11%2FP%20Brundavan%20Colony%20Narsingi%20Hyderabad',
    slug: null,
  },
  ...projects.map((project) => ({
    id: project.slug,
    label: project.name,
    title: project.name,
    address: project.location.full,
    embedQuery: project.location.embedQuery,
    mapsUrl: project.location.mapsUrl,
    slug: project.slug,
  })),
]

export default function Location() {
  const [active, setActive] = useState('vip-creative-homes')
  const view = mapViews.find((item) => item.id === active) ?? mapViews[0]
  return (
    <section
      id="location"
      className="py-16 md:py-24 px-6 bg-[var(--color-bg-off)]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div>
          <span className="section-subtitle">Our Locations</span>
          <h2 className="section-title text-4xl md:text-6xl leading-tight mb-8">
            Find your place
            <br />
            <em>in Telangana.</em>
          </h2>
          <p className="section-text mb-8">
            Explore our project locations and our Narsingi office. Speak with
            the team to arrange a visit or learn more about a development.
          </p>
          <div
            className="flex flex-wrap gap-3 mb-8"
            aria-label="Choose a location"
          >
            {mapViews.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={active === item.id}
                onClick={() => setActive(item.id)}
                className={`location-tab ${active === item.id ? 'is-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href={view.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="builder-inline-link"
            >
              Open in Google Maps ↗
            </a>
            {view.slug && (
              <Link
                href={`/projects/${view.slug}`}
                className="builder-inline-link"
              >
                Explore the project ↗
              </Link>
            )}
          </div>
        </div>
        <div className="location-map-card" key={view.id}>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(view.embedQuery)}&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${view.title} map`}
          />
          <div className="bg-white p-7" aria-live="polite">
            <p className="font-heading text-2xl text-[var(--color-black)] mb-1">
              {view.title}
            </p>
            <p className="text-[13px]">{view.address}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
