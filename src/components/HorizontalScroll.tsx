'use client'
import { useEffect, useRef } from 'react'

const reasons = [
  {
    number: '01',
    title: 'Quality First',
    description: 'Quality is at the forefront of all our undertakings. We use precision engineering, aesthetic design, and high-class interiors with in-house quality control.',
    icon: '🏆',
  },
  {
    number: '02',
    title: 'On-Time Delivery',
    description: 'We believe in completing jobs within the specified time frame — streamlining processes, budgets, and performance without cutting corners.',
    icon: '⏰',
  },
  {
    number: '03',
    title: 'Expert Team',
    description: 'Powered by innovative professionals who turn realty dreams into reality, with Mr. Bobby Reddy\'s 39+ years of industry experience at the helm.',
    icon: '👥',
  },
  {
    number: '04',
    title: 'Safety Standards',
    description: 'Emphasis on earthquake-resistant structures and international safety protocols. Every villa is built to withstand and protect.',
    icon: '🛡️',
  },
  {
    number: '05',
    title: 'Transparency',
    description: 'Complete transparency in pricing, documentation, and communication. Value for money with a customer-focused approach at every step.',
    icon: '🤝',
  },
  {
    number: '06',
    title: 'Turnkey Solutions',
    description: 'From architectural design to final construction — in-house handling of precision engineering, metal glazing, and high-class interiors.',
    icon: '🔑',
  },
]

export default function HorizontalScroll() {
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
    <section id="whyus" ref={sectionRef} className="py-24 md:py-36 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Why Choose Us
          </p>
          <h2 className="fade-up font-marcellus text-4xl md:text-6xl text-white mb-6">
            Excellence in Every Detail
          </h2>
          <p className="fade-up font-syne text-lg text-white/60 max-w-2xl mx-auto">
            Over two decades of transforming the real estate landscape with sophisticated developments 
            that prioritize your delight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="fade-up p-8 rounded-2xl border border-white/10 hover:border-accent/40 transition-all duration-300 group"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl">{reason.icon}</span>
                <span className="font-bigshoulders text-5xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">
                  {reason.number}
                </span>
              </div>
              <h4 className="font-marcellus text-xl text-white mb-3">{reason.title}</h4>
              <p className="font-syne text-white/50 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
