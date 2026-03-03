'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    caption: 'Where elegance meets everyday living',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    caption: 'Interiors designed for the connoisseur',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
    caption: 'Your private paradise, every single day',
  },
]

export default function FullscreenGallery() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    sectionRefs.current.forEach((section) => {
      if (!section) return
      const img = section.querySelector('img')
      const overlay = section.querySelector('.fullscreen-image-overlay')

      if (img) {
        // Smooth parallax zoom on the image
        gsap.fromTo(
          img,
          { scale: 1.15 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        )
      }

      if (overlay) {
        // Fade in the text overlay
        gsap.fromTo(
          overlay,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 60%',
              end: 'center center',
              scrub: 1,
            },
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div>
      {galleryImages.map((image, i) => (
        <div
          key={i}
          ref={(el) => { sectionRefs.current[i] = el }}
          className="fullscreen-image-section"
        >
          <img
            src={image.src}
            alt={image.caption}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="fullscreen-image-overlay">
            <p className="fullscreen-image-overlay-text">
              <em>{image.caption}</em>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
