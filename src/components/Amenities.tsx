'use client'
import { useState } from 'react'
import Link from 'next/link'

const amenities = [
  {
    name: '450-Acre Eco-Tourism Park',
    image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1200&q=80',
  },
  {
    name: '50,000 sqft Imperial Clubhouse',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
  },
  {
    name: 'Central Park & Two Ponds',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1200&q=80',
  },
  {
    name: 'Theme Parks Per Street',
    image: 'https://images.unsplash.com/photo-1505819985416-2b6ca7704d09?w=1200&q=80',
  },
  {
    name: 'Pet Park & Amphitheatre',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=80',
  },
  {
    name: 'Luxury & Natural Pools',
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&q=80',
  },
]

export default function Amenities() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="amenities" className="py-32 md:py-44 px-6 bg-[var(--color-bg-off)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="tp-fade-bottom">
            <span className="section-subtitle">Inside Bliss In The Woods</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-5xl md:text-7xl">
              Six reasons to <em>visit BIW</em>
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="section-text max-w-2xl mx-auto mt-6">
              Highlights pulled straight from the Bliss In The Woods masterplan by the Bhosho
              Design Group.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="tp-fade-left">
            {amenities.map((amenity, i) => (
              <div
                key={i}
                className="amenity-item"
                onMouseEnter={() => setActiveIndex(i)}
              >
                <div className="flex items-center">
                  <span className="amenity-number">0{i + 1}</span>
                  <span className="amenity-name">{amenity.name}</span>
                </div>
                <span className="amenity-arrow">→</span>
              </div>
            ))}

            <div className="mt-12">
              <Link href="/projects/bliss-in-the-woods" className="btn-luxury btn-luxury-dark inline-block">
                Explore Bliss In The Woods
              </Link>
            </div>
          </div>

          <div className="tp-fade-right hidden lg:block sticky top-32">
            <div className="amenity-image-container" style={{ height: '560px' }}>
              {amenities.map((amenity, i) => (
                <img
                  key={i}
                  src={amenity.image}
                  alt={amenity.name}
                  className={i === activeIndex ? 'active' : ''}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
