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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

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

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <p className="fade-up font-syne text-sm md:text-base tracking-[0.3em] uppercase text-white/70 mb-6">
          Since 2002 · Hyderabad & Bangalore
        </p>
        <h1
          ref={titleRef}
          className="fade-up font-heroDisplay text-5xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] text-white leading-[0.95] tracking-[-0.02em] mb-6 uppercase"
        >
          Life Inspired
          <br />
          <span className="inline-flex items-center">
            By Open
            <span className="hero-inline-img mx-3 lg:mx-5 lg:!w-[150px] lg:!h-[75px] xl:!w-[180px] xl:!h-[90px]">
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
          className="fade-up font-syne text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10"
          style={{ transitionDelay: '0.3s' }}
        >
          Abhi&apos;s Aloha — 240 Premium 3 BHK Luxury Villas on 16.1 Acres at Pasumamula, Hayathnagar. Starting ₹1.22 Cr.
        </p>
        <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.5s' }}>
          <button
            onClick={() => scrollTo('contact')}
            className="font-syne text-sm tracking-[0.15em] uppercase px-10 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-all duration-300"
          >
            Book a Site Visit
          </button>
          <button
            onClick={() => scrollTo('project')}
            className="font-syne text-sm tracking-[0.15em] uppercase px-10 py-4 border-2 border-white/50 text-white rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Explore Project
          </button>
        </div>
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
