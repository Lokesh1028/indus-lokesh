'use client'
import type { Project } from '@/data/projects'

const splitNumeric = (value: string): { target: string; suffix: string } => {
  const match = value.match(/^([\d.,]+)(.*)$/)
  if (!match) return { target: '0', suffix: value }
  return { target: match[1].replace(/,/g, ''), suffix: match[2] || '' }
}

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <div className="tp-fade-left">
            <span className="section-subtitle">About the Project</span>
          </div>
          <div className="tp-fade-left stagger-delay-1">
            <h2 className="section-title text-4xl md:text-6xl leading-tight mb-10">
              <em>{project.shortName}</em> — {project.tagline.toLowerCase()}
            </h2>
          </div>
          {project.overview.map((para, i) => (
            <div key={i} className={`tp-fade-left stagger-delay-${Math.min(i + 2, 6)}`}>
              <p className="section-text mb-6">{para}</p>
            </div>
          ))}
          {project.surveyNumbers && (
            <div className="tp-fade-left stagger-delay-4 mt-8 p-6 border-l-2 border-[var(--color-accent)] bg-[var(--color-bg-off)]">
              <p className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-text-light)] mb-2">
                Survey Numbers
              </p>
              <p className="font-heading text-xl text-[var(--color-black)]">
                {project.surveyNumbers}
              </p>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-[var(--color-border)]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {project.stats.map((stat, i) => {
              const { target, suffix } = splitNumeric(stat.value)
              return (
                <div key={i} className={`tp-fade-bottom stagger-delay-${i + 1}`}>
                  <p
                    className="stat-number stat-counter text-5xl md:text-6xl mb-3"
                    data-target={target}
                    data-suffix={suffix}
                  >
                    0{suffix}
                  </p>
                  <p className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-text-light)] leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
