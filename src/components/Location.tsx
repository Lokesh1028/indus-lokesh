'use client'
import { useEffect, useRef } from 'react'

const proximities = [
  { time: '5', unit: 'mins', place: 'NH65 Highway' },
  { time: '10', unit: 'mins', place: 'Hayathnagar' },
  { time: '15', unit: 'mins', place: 'LB Nagar' },
  { time: '25', unit: 'mins', place: 'Uppal / IT Corridor' },
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
              Pasumamula, Hayathnagar — Connected Yet Serene
            </h2>
            <p className="fade-up font-syne text-lg text-gray-600 mb-10">
              Strategically located near NH65 in Rangareddy district, Abhi&apos;s Aloha offers the perfect 
              balance of suburban serenity and urban connectivity. With seamless access to major highways, 
              IT hubs, and essential amenities, everything you need is just minutes away.
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

          {/* Map */}
          <div className="fade-up">
            <div className="rounded-xl overflow-hidden shadow-lg" style={{ transitionDelay: '0.3s' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.123456!2d78.55!3d17.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPasumamula%2C+Hayathnagar!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              <div className="bg-white p-6">
                <p className="font-marcellus text-xl text-dark mb-2">Abhi&apos;s Aloha by Indus Homes</p>
                <p className="font-syne text-gray-600">Pasumamula, Hayathnagar, Rangareddy, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
