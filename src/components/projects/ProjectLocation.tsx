'use client'
import type { Project } from '@/data/projects'

export default function ProjectLocation({ project }: { project: Project }) {
  return (
    <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-off)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="tp-fade-left">
              <span className="section-subtitle">Location</span>
            </div>
            <div className="tp-fade-left stagger-delay-1">
              <h2 className="section-title text-4xl md:text-6xl leading-tight mb-8">
                Where <em>{project.shortName}</em> is
              </h2>
            </div>
            <div className="tp-fade-left stagger-delay-2">
              <p className="section-text mb-10">
                {project.location.full}.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              {project.connectivity.map((item, i) => (
                <div key={i} className={`tp-fade-bottom stagger-delay-${Math.min(i + 1, 6)} proximity-badge`}>
                  <span className="time">{item.time}</span>
                  <div>
                    <span className="font-body text-[10px] font-medium text-[var(--color-text-light)] tracking-[1px] uppercase block">
                      {item.unit}
                    </span>
                    <span className="font-body text-[13px] font-light text-[var(--color-black)]">
                      {item.place}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="tp-fade-left stagger-delay-4">
              <a
                href={project.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-body text-[12px] font-medium tracking-[2px] uppercase text-[var(--color-accent)] hover-underline"
              >
                Open in Google Maps
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="tp-fade-right">
            <div className="overflow-hidden shadow-lg">
              <iframe
                title={`${project.name} location map`}
                src={`https://www.google.com/maps?q=${project.location.embedQuery}&output=embed`}
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              <div className="bg-white p-7">
                <p className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-accent)] mb-2">
                  {project.partner}
                </p>
                <p className="font-heading text-2xl text-[var(--color-black)] mb-1 font-normal">
                  {project.name}
                </p>
                <p className="font-body text-[var(--color-text)] text-[13px] font-light">
                  {project.location.full}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
