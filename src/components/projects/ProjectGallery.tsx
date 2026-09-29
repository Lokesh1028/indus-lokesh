'use client'
import { useRef, useState } from 'react'
import type { Project } from '@/data/projects'

export default function ProjectGallery({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const visibleImages = expanded ? project.gallery : project.gallery.slice(0, 6)
  const close = () => dialog.current?.close()
  const prev = () =>
    setLightboxIndex(
      (i) => (i - 1 + project.gallery.length) % project.gallery.length,
    )
  const next = () => setLightboxIndex((i) => (i + 1) % project.gallery.length)

  return (
    <section
      className="project-gallery-section py-16 md:py-24 px-6"
      aria-labelledby="project-gallery-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-xl">
          <div className="tp-fade-left">
            <span className="section-subtitle">Gallery</span>
          </div>
          <div className="tp-fade-left stagger-delay-1">
            <h2
              id="project-gallery-title"
              className="section-title text-4xl md:text-5xl leading-tight"
            >
              A glimpse of
              <br />
              <em>{project.shortName}</em>
            </h2>
          </div>
        </div>

        {project.imageryNote && (
          <p className="project-gallery-note">{project.imageryNote}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
          {visibleImages.map((item, i) => {
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
                onClick={() => {
                  setLightboxIndex(i)
                  dialog.current?.showModal()
                }}
                className={`${className} project-gallery-tile group`}
                aria-label={`Open ${item.alt}`}
              >
                <div className="parallax-img-wrapper h-full w-full">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
                {item.caption && (
                  <span className="project-gallery-caption">
                    {item.caption}
                  </span>
                )}
              </button>
            )
          })}
        </div>
        {project.gallery.length > 6 && (
          <button
            type="button"
            className="btn-luxury btn-luxury-dark mt-10"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded
              ? 'Show fewer images'
              : `View all ${project.gallery.length} images`}
          </button>
        )}
        {!!project.videos?.length && (
          <details className="project-gallery-videos">
            <summary>Watch project videos ({project.videos.length})</summary>
            <div>
              {project.videos.map((video) => (
                <figure key={video.src}>
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={video.poster}
                    aria-label={video.title}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <figcaption>{video.title}</figcaption>
                </figure>
              ))}
            </div>
          </details>
        )}
      </div>

      <dialog
        ref={dialog}
        className="project-lightbox"
        aria-label={`${project.name} gallery`}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault()
            prev()
          }
          if (e.key === 'ArrowRight') {
            e.preventDefault()
            next()
          }
        }}
      >
        <button
          type="button"
          className="project-lightbox-close"
          onClick={close}
          aria-label="Close gallery"
        >
          ×
        </button>
        <button
          type="button"
          className="project-lightbox-nav prev"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          aria-label="Previous image"
        >
          ‹
        </button>
        <figure
          className="project-lightbox-figure"
          onClick={(e) => e.stopPropagation()}
        >
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
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          aria-label="Next image"
        >
          ›
        </button>
      </dialog>
    </section>
  )
}
