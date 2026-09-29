'use client'
import { projects } from '@/data/projects'

const projectCounts = [
  { value: projects.length, label: 'Projects presented' },
  {
    value: projects.filter((p) => p.status === 'Upcoming').length,
    label: 'Upcoming community',
  },
  {
    value: projects.filter((p) => !['Upcoming', 'Completed'].includes(p.status))
      .length,
    label: 'Ongoing developments',
  },
  {
    value: projects.filter((p) => p.status === 'Completed').length,
    label: 'Completed project',
  },
]

export default function IntroSection() {
  return (
    <section id="intro" className="builder-intro py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          <div className="tp-fade-left">
            <span className="section-subtitle">About VIP Homes</span>
            <h2 className="section-title text-5xl md:text-7xl leading-tight">
              Built with purpose.
              <br />
              <em>Planned for life.</em>
            </h2>
          </div>
          <div className="tp-fade-right">
            <p className="section-text mb-6">
              Vishwaprerana Creative Homes (OPC) Private Limited, operating as
              VIP Homes, develops its own projects and participates in selected
              partnerships across Telangana.
            </p>
            <p className="section-text">
              Our vision starts with how a place will be lived in: the natural
              light, the relationship with the outdoors and the comfort of
              everyday routines. Thoughtful planning and dependable execution
              turn that vision into homes with lasting value.
            </p>
          </div>
        </div>
        <div className="builder-portfolio-stats" aria-label="Our portfolio">
          {projectCounts.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
