'use client'
import { useState } from 'react'
import type { Project } from '@/data/projects'

export default function ProjectGallery({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const close = () => setLightboxIndex(null)
  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + project.gallery.length) % project.gallery.length))
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % project.gallery.length))

  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-xl">
          <div className="tp-fade-left">
            <span className="section-subtitle">Gallery</span>
          </div>
          <div className="tp-fade-left stagger-delay-1">
            <h2 className="section-title text-4xl md:text-5xl leading-tight">
              A glimpse of<br /><em>{project.shortName}</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
          {project.gallery.map((item, i) => {
            const layouts = [
              'lg:col-span-7 h-[420px] md:h-[520px]',
              'lg:col-span-5 h-[420px] md:h-[520px] lg:mt-12',
              'lg:col-span-4 h-[360px] md:h-[420px]',
              'lg:col-span-4 h-[360px] md:h-[420px] lg:mt-10',
              'lg:col-span-4 h-[360px] md:h-[420px]',
              'lg:col-span-12 h-[420px] md:h-[560px]',
            ]
            const className = layouts[i % layouts.length]
            return (
              <button
                key={i}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className={`tp-scale-up stagger-delay-${Math.min((i % 6) + 1, 6)} ${className} project-gallery-tile group`}
                aria-label={`Open ${item.alt}`}
              >
                <div className="parallax-img-wrapper h-full w-full">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
                {item.caption && (
                  <span className="project-gallery-caption">{item.caption}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="project-lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className="project-lightbox-close" onClick={close} aria-label="Close gallery">
            ×
          </button>
          <button
            type="button"
            className="project-lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <figure className="project-lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.gallery[lightboxIndex].src}
              alt={project.gallery[lightboxIndex].alt}
            />
            {project.gallery[lightboxIndex].caption && (
              <figcaption>{project.gallery[lightboxIndex].caption}</figcaption>
            )}
          </figure>
          <button
            type="button"
            className="project-lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
