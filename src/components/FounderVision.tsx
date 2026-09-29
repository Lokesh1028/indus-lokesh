'use client'

const principles = [
  {
    label: 'Our Mission',
    title: 'Care at every stage.',
    body: 'Make the journey from project discovery to handover more personal and transparent, with considered planning and clear communication.',
  },
  {
    label: 'Our Vision',
    title: 'Places with a lasting purpose.',
    body: 'Create developments that improve everyday life, use land responsibly and contribute to a better standard of residential design in India.',
  },
  {
    label: 'Our Design Belief',
    title: 'Architecture begins with living.',
    body: 'Plan for light, movement and comfort from the first sketch. A home should work as thoughtfully as it looks.',
  },
]
const approach = [
  [
    'Choose the right team',
    'Bring architects, consultants and execution partners together around a shared understanding of the project.',
  ],
  [
    'Refine the design',
    'Test layouts against everyday needs and keep improving how spaces connect, function and feel.',
  ],
  [
    'Carry the vision through',
    'Coordinate design and engineering decisions so the original intent remains clear through execution.',
  ],
]

export default function FounderVision() {
  return (
    <section
      id="founder"
      className="builder-vision py-16 md:py-24 px-6 bg-[var(--color-bg-off)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="builder-vision-heading">
          <div className="tp-fade-left">
            <span className="section-subtitle">Our Vision</span>
            <h2 className="section-title text-5xl md:text-7xl leading-tight">
              A home is more
              <br />
              <em>than a building.</em>
            </h2>
          </div>
          <p className="section-text tp-fade-right">
            We want to create places people are proud to live in and pass on.
            That calls for responsible land use, thoughtful architecture and a
            builder who stays involved in the details.
          </p>
        </div>
        <div className="builder-principles">
          {principles.map((card) => (
            <article key={card.label}>
              <span className="section-subtitle">{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <div className="builder-ambition">
          <div>
            <span className="section-subtitle">Our Architectural Ambition</span>
            <h3>
              Design that contributes
              <br />
              <em>to a better urban future.</em>
            </h3>
          </div>
          <div>
            <p>
              Our ambition reaches beyond individual homes. We believe Indian
              real estate can combine confident architecture with careful land
              use and a stronger connection to nature.
            </p>
            <p>
              The same thinking informs our villa communities and our
              longer-term interest in urban landmarks: make space work better,
              and build with the next generation in mind.
            </p>
          </div>
        </div>
        <div className="builder-approach">
          <span className="section-subtitle">Our Project Approach</span>
          <div>
            {approach.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="builder-founder">
          <div>
            <span className="section-subtitle">The Founder</span>
            <h3>
              Sunil Reddy <em>Kondakrindi</em>
            </h3>
          </div>
          <div>
            <p>
              Founder of Indus Homes and an entrepreneur with experience in IT,
              project management, real estate, retail and hospitality. His work
              across India and the USA informs VIP Homes’ focus on design,
              disciplined execution and customer trust.
            </p>
            <p className="builder-founder-credentials">
              B.Tech, JNTU Hyderabad · 20 years in IT and project management ·
              15 years of business experience in the USA and India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
