'use client'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'

export default function ProjectsListPage() {
  return (
    <>
      <section className="projects-list-hero">
        <div className="projects-list-hero-inner">
          <div className="tp-fade-bottom">
            <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>
              Our Partner Projects
            </span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h1 className="section-title text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              Two stories,<br /><em>two getaways</em>
            </h1>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="font-body text-[16px] font-light text-[var(--color-text)] max-w-2xl leading-relaxed">
              VipHomes partners with developments we&apos;d genuinely visit on a weekend — a
              forest-wrapped villa community on the ORR corridor, and a verified farm-villa-plot
              layout in the Rangareddy land belt.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-list-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {projects.map((project, i) => (
              <div key={project.slug} className={`tp-fade-bottom stagger-delay-${i + 1}`}>
                <ProjectCard project={project} variant="showcase" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
