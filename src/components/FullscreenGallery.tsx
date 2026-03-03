'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=75',
    caption: 'Where elegance meets everyday living',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=75',
    caption: 'Interiors designed for the connoisseur',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=75',
    caption: 'Your private paradise, every single day',
  },
]

export default function FullscreenGallery() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const sections = containerRef.current?.querySelectorAll('.fs-gallery-item')
    if (!sections) return

    const tweens: gsap.core.Tween[] = []

    sections.forEach((section) => {
      const img = section.querySelector('.fs-gallery-img') as HTMLElement
      const text = section.querySelector('.fs-gallery-text') as HTMLElement

      if (img) {
        const t = gsap.fromTo(
          img,
          { scale: 1.08 },
          {
            scale: 1,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        )
        tweens.push(t)
      }

      if (text) {
        const t = gsap.fromTo(
          text,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              trigger: section,
              start: 'top 50%',
              end: 'top 20%',
              scrub: true,
            },
          }
        )
        tweens.push(t)
      }
    })

    return () => {
      tweens.forEach((t) => t.kill())
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef}>
      {galleryImages.map((image, i) => (
        <div
          key={i}
          className="fs-gallery-item"
        >
          <div className="fs-gallery-img-wrapper">
            <img
              className="fs-gallery-img"
              src={image.src}
              alt={image.caption}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
          <div className="fs-gallery-text">
            <p className="fullscreen-image-overlay-text">
              <em>{image.caption}</em>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
