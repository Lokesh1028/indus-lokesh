'use client'
import type { Project } from '@/data/projects'
import HighlightIcon from './HighlightIcon'

export default function ProjectHighlights({ project }: { project: Project }) {
  return (
    <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-off)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="tp-fade-bottom">
            <span className="section-subtitle">What Makes It Special</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-4xl md:text-6xl leading-tight">
              Highlights of <em>{project.shortName}</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.highlights.map((item, i) => (
            <div
              key={i}
              className={`tp-fade-bottom stagger-delay-${Math.min((i % 6) + 1, 6)} feature-card-clean group`}
            >
              <span className="text-[var(--color-accent)] mb-6 block transition-colors duration-300 group-hover:text-[var(--color-accent-hover)]">
                <HighlightIcon name={item.icon} size={30} />
              </span>
              <h4 className="font-heading text-[22px] text-[var(--color-black)] mb-4 font-normal leading-snug">
                {item.title}
              </h4>
              <p className="font-body text-[var(--color-text)] text-[14px] font-light leading-[1.8]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
