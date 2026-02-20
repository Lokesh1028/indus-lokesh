'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const panels = [
  { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80', alt: 'Clubhouse Lounge' },
  { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80', alt: 'Clubhouse Interior' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80', alt: 'Clubhouse Pool' },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80', alt: 'Clubhouse Spa' },
]

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const scroll = scrollRef.current
    if (!container || !scroll) return

    const totalWidth = scroll.scrollWidth - window.innerWidth

    const tween = gsap.to(scroll, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={containerRef} className="overflow-hidden bg-light">
      <div ref={scrollRef} className="horizontal-scroll-container py-12 px-6">
        {panels.map((panel, i) => (
          <div key={i} className="horizontal-panel">
            <img src={panel.src} alt={panel.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
