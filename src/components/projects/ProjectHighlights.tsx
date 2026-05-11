'use client'
import type { Project } from '@/data/projects'
import HighlightIcon from './HighlightIcon'

export default function ProjectHighlights({ project }: { project: Project }) {
  return (
    <section className="bg-[var(--color-bg-off)]">
      {/* Header — normal vertical scroll */}
      <div className="pt-12 md:pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="tp-fade-bottom">
              <span className="section-subtitle">What Makes It Special</span>
            </div>
            <div className="tp-fade-bottom stagger-delay-1">
              <h2 className="section-title text-4xl md:text-6xl leading-tight">
                Highlights of <em>{project.shortName}</em>
              </h2>
            </div>
            <div className="tp-fade-bottom stagger-delay-2">
              <p className="section-text mt-6 hidden md:block">
                Scroll on — the cards move sideways while you keep going down.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pinned horizontal scroll showcase (desktop) / native overflow (mobile) */}
      <div className="scroll-horizontal-host" data-scroll-horizontal>
        <div className="scroll-horizontal-track" data-scroll-horizontal-track>
          {project.highlights.map((item, i) => (
            <article
              key={item.title}
              className="scroll-horizontal-card feature-card-clean group"
            >
              <span className="text-[var(--color-accent)] mb-6 block transition-colors duration-300 group-hover:text-[var(--color-accent-hover)]">
                <HighlightIcon name={item.icon} size={30} />
              </span>
              <span className="mono text-accent block mb-4" style={{ color: 'var(--color-accent)', fontFamily: 'var(--ff-body)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>
                0{i + 1} · {project.shortName}
              </span>
              <h4 className="font-heading text-[22px] text-[var(--color-black)] mb-4 font-normal leading-snug">
                {item.title}
              </h4>
              <p className="font-body text-[var(--color-text)] text-[14px] font-light leading-[1.8]">
                {item.description}
              </p>
            </article>
          ))}
          {/* Trailing spacer so the last card doesn't sit flush at the right edge */}
          <div className="scroll-horizontal-spacer" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
