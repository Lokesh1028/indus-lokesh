'use client'
import { useEffect, useRef } from 'react'

const proximities = [
  { time: '2', unit: 'mins', place: 'Exit-14 ORR' },
  { time: '3', unit: 'mins', place: 'Fab City' },
  { time: '10', unit: 'mins', place: 'Wonderla / Airport' },
  { time: '25', unit: 'mins', place: 'Financial District' },
]

export default function Location() {
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
    <section id="location" ref={sectionRef} className="py-24 md:py-36 px-6 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Prime Location
            </p>
            <h2 className="fade-up font-marcellus text-4xl md:text-5xl text-dark leading-tight mb-6">
              Remarkably Different. Comfortably Near at Tukkuguda
            </h2>
            <p className="fade-up font-syne text-lg text-gray-600 mb-10">
              Strategically positioned at Tukkuguda, AURELIA offers the perfect balance of 
              suburban serenity and urban connectivity. With seamless access to major highways, 
              the airport, and the Financial District, everything you need is just minutes away.
            </p>

            <div className="flex flex-wrap gap-4">
              {proximities.map((item, i) => (
                <div key={i} className="fade-up proximity-badge" style={{ transitionDelay: `${0.1 * i}s` }}>
                  <span className="time">{item.time}</span>
                  <div>
                    <span className="font-syne text-xs text-gray-500 block">{item.unit}</span>
                    <span className="font-syne text-sm text-dark">{item.place}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="fade-up">
            <div className="rounded-xl overflow-hidden shadow-lg" style={{ transitionDelay: '0.3s' }}>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Location Map"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="bg-white p-6">
                <p className="font-marcellus text-xl text-dark mb-2">AURELIA by Indus Lokesh</p>
                <p className="font-syne text-gray-600">Tukkuguda, Hyderabad, Telangana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
