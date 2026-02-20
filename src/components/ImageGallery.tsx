'use client'
import { useEffect, useRef } from 'react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Modern Villa Exterior',
    className: 'col-span-1 row-span-1 h-[400px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    alt: 'Villa Interior',
    className: 'col-span-1 row-span-1 h-[500px] mt-16',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    alt: 'Villa Pool',
    className: 'col-span-1 row-span-1 h-[350px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    alt: 'Luxury Home',
    className: 'col-span-1 row-span-1 h-[450px] -mt-12',
  },
]

export default function ImageGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.fade-up')
            els.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (galleryRef.current) observer.observe(galleryRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={galleryRef} className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-xl">
          <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Crafted Spaces
          </p>
          <h3 className="fade-up font-marcellus text-3xl md:text-5xl text-dark leading-tight">
            Where Architecture Meets Artistry
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div key={i} className={`fade-up ${img.className}`}>
              <div className="parallax-img-wrapper h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
