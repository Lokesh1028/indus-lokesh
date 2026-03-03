'use client'
import { useState } from 'react'

const amenities = [
  {
    name: 'Swimming Pool',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80',
  },
  {
    name: 'Indoor Games',
    image: 'https://images.unsplash.com/photo-1611361276804-b53e5e8e5e72?w=800&q=80',
  },
  {
    name: 'Banquet Hall',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
  },
  {
    name: 'Gymnasium',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  },
  {
    name: 'Children\'s Play Area',
    image: 'https://images.unsplash.com/photo-1596997000103-e597b3ca50df?w=800&q=80',
  },
  {
    name: 'Walking Track',
    image: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=800&q=80',
  },
]

export default function Amenities() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="amenities" className="py-32 md:py-44 px-6 bg-[var(--color-bg-off)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="tp-fade-bottom">
            <span className="section-subtitle">Amenities</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-5xl md:text-7xl">
              <em>Unwind</em> in Style
            </h2>
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
