'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { value: '22+', label: 'Years of Excellence' },
  { value: '240', label: 'Luxury Villas' },
  { value: '16.1', label: 'Acres of Development' },
  { value: '100%', label: 'On-Time Delivery' },
]

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.fade-up')
            els.forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="intro" ref={sectionRef} className="py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-6">
            About Indus Homes
          </p>
          <h2 className="fade-up font-marcellus text-4xl md:text-6xl lg:text-7xl text-dark mb-8" style={{ transitionDelay: '0.15s' }}>
            Building Dreams Since 2002
          </h2>
          <p className="fade-up font-syne text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6" style={{ transitionDelay: '0.3s' }}>
            Founded on October 23, 2002, Indus Homes Private Limited was born from a vision to transform 
            the real estate industry through sophisticated residential developments that prioritize 
            customer delight, excellence, and uncompromising business ethics.
          </p>
          <p className="fade-up font-syne text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ transitionDelay: '0.4s' }}>
            Under the visionary leadership of Mr. Bhavdeep (Bobby) Reddy, who has been actively involved 
            in real estate since 1985, we design spaces that accentuate natural beauty through seamless 
            functionality and unique forms — committed to transparency, value for money, and an 
            environment-friendly ambiance with timely delivery.
          </p>
        </div>

        {/* Stats */}
        <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-8 mt-16" style={{ transitionDelay: '0.5s' }}>
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-bigshoulders text-5xl md:text-6xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="font-syne text-sm text-gray-500 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
