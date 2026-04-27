'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { getProject, projects } from '@/data/projects'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectOverview from '@/components/projects/ProjectOverview'
import ProjectHighlights from '@/components/projects/ProjectHighlights'
import ProjectGallery from '@/components/projects/ProjectGallery'
import ProjectLocation from '@/components/projects/ProjectLocation'
import ProjectCTA from '@/components/projects/ProjectCTA'
import Link from 'next/link'

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = typeof params?.slug === 'string' ? params.slug : Array.isArray(params?.slug) ? params!.slug[0] : ''
  const project = getProject(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [slug])

  if (!project) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <span className="section-subtitle">404</span>
        <h1 className="section-title text-5xl md:text-7xl mb-6">
          Project <em>not found</em>
        </h1>
        <p className="section-text mb-10 max-w-md">
          We couldn&apos;t find the project you were looking for. Try one of the developments below.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="btn-luxury btn-luxury-dark">
              {p.name}
            </Link>
          ))}
        </div>
      </section>
    )
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectHighlights project={project} />
      <ProjectGallery project={project} />
      <ProjectLocation project={project} />
      <ProjectCTA project={project} />
    </>
  )
}
