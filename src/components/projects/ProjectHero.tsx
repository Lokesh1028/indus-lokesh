'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { Project } from '@/data/projects'

export default function ProjectHero({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const isVideo = project.heroMedia.kind === 'video'

  useEffect(() => {
    if (!isVideo) return
    const v = videoRef.current
    if (!v) return
    const onCanPlay = () => setVideoReady(true)
    const onError = () => setVideoFailed(true)
    v.addEventListener('canplay', onCanPlay)
    v.addEventListener('error', onError)
    return () => {
      v.removeEventListener('canplay', onCanPlay)
      v.removeEventListener('error', onError)
    }
  }, [isVideo])

  return (
    <section className="project-hero">
      <div className="project-hero-media">
        {isVideo && !videoFailed ? (
          <>
            <img
              src={project.heroMedia.poster}
              alt=""
              className={`project-hero-poster ${videoReady ? 'is-hidden' : ''}`}
              aria-hidden="true"
            />
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={project.heroMedia.poster}
              className={`project-hero-video ${videoReady ? 'is-visible' : ''}`}
            >
              <source src={project.heroMedia.src} type="video/mp4" />
            </video>
          </>
        ) : (
          <img
            src={project.heroMedia.poster}
            alt={project.name}
            className="project-hero-image"
          />
        )}
        <div className="project-hero-vignette" />
      </div>

      <div className="project-hero-content">
        <nav className="project-hero-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/projects">Projects</Link>
          <span>/</span>
          <span className="current">{project.name}</span>
        </nav>

        <p className="project-hero-partner">
          A {project.partner} development · {project.status}
        </p>
        <h1 className="project-hero-title">
          <em>{project.name}</em>
        </h1>
        <p className="project-hero-tagline">{project.tagline}</p>

        <div className="project-hero-meta">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {project.location.full}
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            {project.type}
          </span>
        </div>
      </div>

      <div className="project-hero-scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
