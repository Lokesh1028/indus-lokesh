'use client'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

const ongoingProjects = projects.filter(
  (project) => !['Completed', 'Upcoming'].includes(project.status),
)
const completedProject = projects.find(
  (project) => project.status === 'Completed',
)

export default function ProjectsShowcase() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-6 bg-[var(--color-bg-warm)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div className="max-w-2xl tp-fade-bottom">
            <span className="section-subtitle">Our Portfolio</span>
            <h2 className="section-title text-5xl md:text-7xl leading-tight">
              Projects <em>Ongoing</em>
            </h2>
          </div>
          <Link
            href="/projects"
            className="btn-luxury btn-luxury-dark inline-block self-start"
          >
            View All Projects
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {ongoingProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant="showcase"
            />
          ))}
        </div>
        {completedProject && (
          <div className="builder-completed">
            <Link
              href={`/projects/${completedProject.slug}`}
              aria-label="Explore completed Indus Homes"
            >
              <img
                src={completedProject.cardImage}
                alt="Completed Indus Homes villa exterior"
                loading="lazy"
                width="800"
                height="600"
              />
            </Link>
            <div>
              <span className="section-subtitle">Completed · Indus Homes</span>
              <h3>
                A foundation
                <br />
                <em>built on experience.</em>
              </h3>
              <p>
                The completed Indus Homes development in Pasumamula, Hayathnagar
                brings our focus on family living and construction quality into
                view. Explore the villas and the work on the ground.
              </p>
              <Link
                href={`/projects/${completedProject.slug}`}
                className="builder-inline-link"
              >
                Explore completed work ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
