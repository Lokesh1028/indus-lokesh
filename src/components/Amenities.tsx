'use client'
import { useState, useEffect, useRef } from 'react'

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
    name: 'Co-Working Spaces',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    name: 'Guest Rooms',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
  },
]

export default function Amenities() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.fade-up')
            els.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="amenities" ref={sectionRef} className="py-24 md:py-36 px-6 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Amenities
          </p>
          <h2 className="fade-up font-marcellus text-4xl md:text-6xl text-dark">
            Unwind in Style
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Amenity List */}
          <div className="fade-up">
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
                <span className="amenity-arrow text-accent">→</span>
              </div>
            ))}
          </div>

          {/* Amenity Image */}
          <div className="fade-up hidden lg:block sticky top-32">
            <div className="amenity-image-container rounded-xl" style={{ height: '500px' }}>
              {amenities.map((amenity, i) => (
                <img
                  key={i}
                  src={amenity.image}
                  alt={amenity.name}
                  className={`rounded-xl ${i === activeIndex ? 'active' : ''}`}
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
