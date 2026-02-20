'use client'
import { useEffect, useRef } from 'react'

export default function Clubhouse() {
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
    <section id="clubhouse" ref={sectionRef} className="py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-6">
          The Clubhouse
        </p>
        <h2 className="fade-up font-marcellus text-4xl md:text-6xl lg:text-7xl text-dark leading-tight mb-8" style={{ transitionDelay: '0.15s' }}>
          A clubhouse designed to take your senses on overdrive
        </h2>
        <p className="fade-up font-syne text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ transitionDelay: '0.3s' }}>
          Spanning over 15,000 sq. ft., the AURELIA clubhouse is an architectural marvel that houses 
          everything from a temperature-controlled infinity pool to a state-of-the-art gymnasium, 
          a rejuvenating spa, and versatile entertainment spaces. It&apos;s not just a clubhouse — 
          it&apos;s a destination.
        </p>
      </div>
    </section>
  )
}
