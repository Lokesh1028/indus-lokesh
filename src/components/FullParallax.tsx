'use client'
import { useEffect, useRef } from 'react'

export default function FullParallax() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

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
    if (textRef.current) observer.observe(textRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef}>
      <div ref={textRef} className="py-20 md:py-28 px-6 max-w-4xl mx-auto text-center">
        <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-6">
          Wide Pathways & Green Corridors
        </p>
        <h3 className="fade-up font-marcellus text-3xl md:text-5xl text-dark leading-tight mb-6" style={{ transitionDelay: '0.15s' }}>
          Expansive walkways lined with verdant greens, designed for morning strolls and evening conversations
        </h3>
        <p className="fade-up font-syne text-lg text-gray-600" style={{ transitionDelay: '0.3s' }}>
          Every pathway at AURELIA has been crafted to connect you with nature, offering a seamless 
          transition between indoor luxury and outdoor tranquility.
        </p>
      </div>
      
      <div
        className="full-parallax-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80)',
        }}
      />
    </section>
  )
}
