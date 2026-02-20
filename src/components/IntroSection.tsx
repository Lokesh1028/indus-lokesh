'use client'
import { useEffect, useRef } from 'react'

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
      <div className="max-w-4xl mx-auto text-center">
        <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-6">
          A lifestyle of abundance
        </p>
        <h2 className="fade-up font-marcellus text-4xl md:text-6xl lg:text-7xl text-dark mb-8" style={{ transitionDelay: '0.15s' }}>
          Introducing AURELIA
        </h2>
        <p className="fade-up font-syne text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ transitionDelay: '0.3s' }}>
          Nestled amidst lush landscapes and open skies, AURELIA is a masterfully crafted community 
          of luxury villas that redefine contemporary living. Every detail has been thoughtfully designed 
          to offer you an experience that transcends the ordinary — where nature, architecture, and 
          lifestyle converge in perfect harmony.
        </p>
      </div>
    </section>
  )
}
