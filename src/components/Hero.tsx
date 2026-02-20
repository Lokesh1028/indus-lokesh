'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1
          ref={titleRef}
          className="fade-up font-marcellus text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8"
        >
          Life Inspired By
          <br />
          <span className="inline-flex items-center">
            Open
            <span className="hero-inline-img mx-4">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&q=80"
                alt="Villa"
              />
            </span>
            Skies
          </span>
        </h1>
        <p
          ref={subtitleRef}
          className="fade-up font-syne text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          style={{ transitionDelay: '0.3s' }}
        >
          Where luxury meets serenity — discover AURELIA, a sanctuary of modern elegance by Indus Lokesh
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
