'use client'
import Link from 'next/link'
import type { Project } from '@/data/projects'

export default function ProjectCTA({ project }: { project: Project }) {
  return (
    <section className="py-28 md:py-36 px-6 bg-[var(--color-black)] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="tp-fade-bottom">
          <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>
            Ready to visit?
          </span>
        </div>
        <div className="tp-fade-bottom stagger-delay-1">
          <h2 className="section-title-light text-5xl md:text-7xl leading-tight mb-10">
            Plan a site visit to<br /><em>{project.name}</em>
          </h2>
        </div>
        <div className="tp-fade-bottom stagger-delay-2">
          <p className="font-body text-white/55 text-[16px] font-light leading-relaxed max-w-2xl mx-auto mb-14">
            Speak to our team about availability, pricing and the best time to walk the site.
            We&apos;ll arrange a guided visit and answer every question — no pressure.
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
