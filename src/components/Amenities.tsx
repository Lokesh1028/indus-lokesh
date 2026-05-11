'use client'
import { useState } from 'react'
import Link from 'next/link'

const amenities = [
  { name: '450-Acre Eco-Tourism Park', image: '/images/bliss-in-the-woods/open-space.png' },
  { name: 'Customizable Villas', image: '/images/bliss-in-the-woods/villa-architectural.png' },
  { name: 'Colossal Amphitheatre', image: '/images/bliss-in-the-woods/amphitheatre.png' },
  { name: 'Stunning Theme Parks', image: '/images/bliss-in-the-woods/theme-parks.png' },
  { name: 'Designer Interiors', image: '/images/bliss-in-the-woods/living-room.png' },
  { name: 'Courtyards & Long Views', image: '/images/bliss-in-the-woods/courtyard-pond.png' },
]

export default function Amenities() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="amenities" className="py-12 md:py-20 px-6 bg-[var(--color-bg-off)]">
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
            <div
              className="amenity-image-container"
              style={{ height: '560px' }}
              data-scroll-parallax-y="0.08"
            >
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
