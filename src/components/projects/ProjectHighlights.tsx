'use client'
import type { Project } from '@/data/projects'
import HighlightIcon from './HighlightIcon'

export default function ProjectHighlights({ project }: { project: Project }) {
  return (
    <section
      className="project-highlights py-16 md:py-24 px-6 bg-[var(--color-bg-off)]"
      aria-labelledby="project-highlights-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl tp-fade-bottom">
          <span className="section-subtitle">What Makes It Special</span>
          <h2
            id="project-highlights-title"
            className="section-title text-4xl md:text-6xl leading-tight"
          >
            Highlights of <em>{project.shortName}</em>
          </h2>
        </div>
        <div className="project-highlights-grid">
          {project.highlights.map((item, index) => (
            <article key={item.title}>
              <div className="project-highlight-number">
                <span>0{index + 1}</span>
                <HighlightIcon name={item.icon} size={26} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
