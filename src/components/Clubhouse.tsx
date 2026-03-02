'use client'
import { useEffect, useRef } from 'react'

const highlights = [
  {
    icon: '🏗️',
    title: 'Grand Entrance & Exit',
    desc: 'Architecturally designed entrance gate with a statement arch',
  },
  {
    icon: '🛣️',
    title: '40\' Wide BT Main Roads',
    desc: 'Premium bitumen-topped roads with 30\' wide internal roads',
  },
  {
    icon: '💡',
    title: 'Underground Infrastructure',
    desc: 'Aesthetic underground street lighting and cabling throughout',
  },
  {
    icon: '🌧️',
    title: 'Rainwater Harvesting',
    desc: 'Eco-friendly rainwater harvesting pits across the community',
  },
  {
    icon: '🌳',
    title: 'Premium Landscaping',
    desc: 'High-quality landscaping with curated green spaces',
  },
  {
    icon: '🏃',
    title: 'Walking Track & Play Area',
    desc: 'Dedicated children\'s play area and scenic walking tracks',
  },
]

export default function Clubhouse() {
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
    <section id="project" ref={sectionRef} className="py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-6">
            Flagship Project
          </p>
          <h2 className="fade-up font-marcellus text-4xl md:text-6xl lg:text-7xl text-dark leading-tight mb-6" style={{ transitionDelay: '0.15s' }}>
            Abhi&apos;s Aloha
          </h2>
          <p className="fade-up font-syne text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4" style={{ transitionDelay: '0.3s' }}>
            240 premium 3 BHK luxury villas spread across 16.1 acres at Pasumamula, Hayathnagar, 
            Rangareddy — near NH65. Ready to move, starting from ₹1.22 Cr.
          </p>
          <div className="fade-up flex flex-wrap justify-center gap-4 mt-8" style={{ transitionDelay: '0.4s' }}>
            <span className="px-5 py-2 bg-accent/10 text-accent rounded-full font-syne text-sm font-medium">3 BHK Villas</span>
            <span className="px-5 py-2 bg-accent/10 text-accent rounded-full font-syne text-sm font-medium">16.1 Acres</span>
            <span className="px-5 py-2 bg-accent/10 text-accent rounded-full font-syne text-sm font-medium">240 Units</span>
            <span className="px-5 py-2 bg-accent/10 text-accent rounded-full font-syne text-sm font-medium">Ready to Move</span>
            <span className="px-5 py-2 bg-accent/10 text-accent rounded-full font-syne text-sm font-medium">From ₹1.22 Cr</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {highlights.map((item, i) => (
            <div key={i} className="fade-up p-8 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${0.1 * i}s` }}>
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h4 className="font-marcellus text-xl text-dark mb-3">{item.title}</h4>
              <p className="font-syne text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
