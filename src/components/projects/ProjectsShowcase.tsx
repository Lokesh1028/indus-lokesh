'use client'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-32 md:py-44 px-6 bg-[var(--color-bg-warm)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="tp-fade-bottom">
              <span className="section-subtitle">Our Partner Projects</span>
            </div>
            <div className="tp-fade-bottom stagger-delay-1">
              <h2 className="section-title text-5xl md:text-7xl leading-tight">
                Two developments,<br /><em>one promise</em>
              </h2>
            </div>
            <div className="tp-fade-bottom stagger-delay-2">
              <p className="section-text mt-8">
                We represent two carefully chosen partner developments — a forest-wrapped villa
                community and a verified farm-villa-plot layout. Each one different, each one
                vetted, each one ready for a site visit.
              </p>
            </div>
          </div>

          <div className="tp-fade-right">
            <Link href="/projects" className="btn-luxury btn-luxury-dark inline-block">
              View All Projects
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {projects.map((project, i) => (
            <div key={project.slug} className={`tp-fade-bottom stagger-delay-${i + 1}`}>
              <ProjectCard project={project} variant="showcase" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
