'use client'
import Link from 'next/link'
import type { Project } from '@/data/projects'

export default function ProjectCard({
  project,
  variant = 'showcase',
}: {
  project: Project
  variant?: 'showcase' | 'list'
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card group" aria-label={`Open ${project.name} project page`}>
      <div className="project-card-media">
        <img
          src={project.cardImage}
          alt={project.name}
          loading="lazy"
          className="project-card-img"
        />
        <div className="project-card-overlay" />
        <span className="project-card-status">{project.status}</span>
      </div>

      <div className="project-card-body">
        <p className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-accent)] mb-3">
          {project.partner}
        </p>
        <h3 className="font-heading text-[32px] md:text-[38px] text-[var(--color-black)] leading-tight mb-3 font-normal">
          {project.name}
        </h3>
        <p className="font-body italic text-[15px] text-[var(--color-text)] mb-6">
          {project.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-7">
          <span className="flex items-center gap-2 font-body text-[12px] text-[var(--color-text)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {project.location.area}
          </span>
          <span className="flex items-center gap-2 font-body text-[12px] text-[var(--color-text)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            {project.type}
          </span>
        </div>

        {variant === 'showcase' && (
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-[var(--color-border)]">
            {project.stats.slice(0, 4).map((stat, i) => (
              <div key={i}>
                <p className="font-heading text-[26px] text-[var(--color-accent)] leading-none mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-[10px] font-medium tracking-[1.5px] uppercase text-[var(--color-text-light)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <span className="project-card-cta">
          View Project
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 5h14M11 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
