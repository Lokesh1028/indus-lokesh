'use client'
import Link from 'next/link'
import type { Project } from '@/data/projects'

export default function ProjectCTA({ project }: { project: Project }) {
  return (
    <section className="py-12 md:py-20 px-6 bg-[var(--color-black)] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="tp-fade-bottom">
          <span
            className="section-subtitle"
            style={{ color: 'var(--color-accent)' }}
          >
            {project.status === 'Completed'
              ? 'Discuss our work'
              : 'Ready to visit?'}
          </span>
        </div>
        <div className="tp-fade-bottom stagger-delay-1">
          <h2 className="section-title-light text-5xl md:text-7xl leading-tight mb-10">
            {project.status === 'Completed'
              ? 'Learn more about'
              : 'Plan a site visit to'}
            <br />
            <em>{project.name}</em>
          </h2>
        </div>
        <div className="tp-fade-bottom stagger-delay-2">
          <p className="font-body text-white/55 text-[16px] font-light leading-relaxed max-w-2xl mx-auto mb-14">
            {project.status === 'Completed'
              ? 'Explore our completed work and speak with the team about the design, the development and our current projects.'
              : 'Speak to our team about the project and arrange a guided visit at a time that works for you.'}
          </p>
        </div>
        <div className="tp-fade-bottom stagger-delay-3 flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            href={`/?project=${project.slug}#contact`}
            className="btn-luxury btn-luxury-filled"
          >
            Enquire About {project.shortName}
          </Link>
          <Link href="/projects" className="btn-luxury btn-luxury-outline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
