'use client'

const credentials = [
  'B.Tech, JNTU Hyderabad',
  '20 years in IT and project management',
  'Entrepreneur across IT, real estate, retail and hospitality',
  '15 years of business experience in the USA and India',
  'Founder of Indus Homes',
  'Partner in farm-land and villa-community developments',
]

const principles = [
  {
    label: 'Mission',
    title: 'Challenge the usual way real estate is built and sold.',
    body:
      'Sunil Reddy’s work began with a simple belief: real estate should not be treated as a routine transaction. It should be designed, planned and delivered with the care of a long-term institution. The mission is to make every customer journey more personal, transparent and seamless.',
  },
  {
    label: 'Vision',
    title: 'Create projects that become part of India’s next urban story.',
    body:
      'His vision is to build developments that do more than occupy land. They should improve how people live, use space responsibly and raise the standard for what Indian real estate can become over the next generation.',
  },
  {
    label: 'Design belief',
    title: 'A property can be both a business and a work of art.',
    body:
      'For Sunil, architecture is not decoration added at the end. It is the core of the project. Nature, movement, light, engineering and daily comfort all have to work together before a space can feel truly complete.',
  },
]

const journey = [
  'Handpicking architects, artists, consultants and execution partners who could think beyond standard layouts.',
  'Spending months refining ideas, rejecting average solutions and pushing the final product closer to the original vision.',
  'Managing design complexity, engineering requirements and team coordination without losing sight of the larger purpose.',
]

export default function FounderVision() {
  return (
    <section id="founder" className="py-12 md:py-20 px-6 bg-[var(--color-bg-off)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-start mb-16 lg:mb-24">
          <div>
            <div className="tp-fade-left">
              <span className="section-subtitle">Landowner Partner</span>
            </div>
            <div className="tp-fade-left stagger-delay-1">
              <h2 className="section-title text-5xl md:text-7xl leading-tight mb-8">
                Sunil Reddy<br />
                <em>Kondakrindi</em>
              </h2>
            </div>
            <div className="tp-fade-left stagger-delay-2">
              <p className="section-text mb-10">
                Sunil Reddy is a founder, landowner partner and entrepreneur connected to the
                projects presented here. His role is not limited to land ownership. He brings the
                mindset of a builder, project manager and long-term stakeholder who wants every
                development to carry design value, customer trust and a clear sense of legacy.
              </p>
            </div>

            <div className="tp-fade-left stagger-delay-3 grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white border border-[var(--color-border)] p-6">
                <p className="font-heading text-4xl text-[var(--color-accent)] leading-none mb-2">100</p>
                <p className="font-body text-[10px] font-medium tracking-[1.5px] uppercase text-[var(--color-text-light)]">
                  Acres farm-land development exposure
                </p>
              </div>
              <div className="bg-white border border-[var(--color-border)] p-6">
                <p className="font-heading text-4xl text-[var(--color-accent)] leading-none mb-2">54</p>
                <p className="font-body text-[10px] font-medium tracking-[1.5px] uppercase text-[var(--color-text-light)]">
                  Acre villa-community project exposure
                </p>
              </div>
            </div>

            <div className="tp-fade-left stagger-delay-4 flex flex-wrap gap-3">
              {credentials.map((item) => (
                <span key={item} className="founder-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="tp-fade-right">
            <div className="founder-statement-card">
              <p className="font-body text-[10px] font-medium tracking-[2.5px] uppercase text-[var(--color-accent)] mb-6">
                His Point of View
              </p>
              <p className="font-heading text-3xl md:text-5xl leading-tight text-[var(--color-black)] font-normal mb-8">
                Real estate should not stop at construction. It should create places people are
                proud to live in, invest in and pass on.
              </p>
              <p className="section-text mb-6">
                From the beginning, Sunil’s work was driven by the desire to question established
                practices in the sector. He saw an opportunity to move away from ordinary layouts
                and routine selling, and toward projects shaped by design, planning and a better
                customer experience.
              </p>
              <p className="section-text">
                His larger aim is to create a lasting legacy through projects that feel considered
                from the first sketch to the final handover: thoughtful land use, strong design,
                dependable execution and service that respects the customer’s time and trust.
              </p>
            </div>
          </div>
        </div>

        <div className="founder-alternating-grid" data-scroll-rise>
          <div className="tp-fade-left founder-process-card founder-process-feature">
            <span className="section-subtitle">How the Vision Takes Shape</span>
            <h3 className="font-heading text-4xl md:text-5xl text-[var(--color-black)] leading-tight font-normal mb-8">
              Big ideas only matter when the execution can carry them.
            </h3>
            <p className="section-text mb-8">
              Sunil’s project approach comes from months of discussion, revision and disciplined
              coordination. The ambition may be large, but the work is practical: assemble the
              right team, test the idea from every angle and keep refining until the project can
              stand on its own.
            </p>
            <div className="space-y-4">
              {journey.map((item, index) => (
                <div key={item} className="founder-process-row">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="founder-principles-stack">
            {principles.map((card) => (
              <article key={card.label} className="founder-mission-card">
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <div className="tp-fade-left stagger-delay-2 founder-legacy-panel lg:col-span-2">
            <span className="section-subtitle">Architectural Ambition</span>
            <h3 className="font-heading text-4xl md:text-5xl text-white leading-tight font-normal mb-8">
              The larger dream is to build projects that make India look forward.
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              <p>
                Sunil’s vision for Indian real estate is influenced by the scale and confidence of
                global landmarks. He believes India can create residential and mixed-use projects
                that combine height, elegance, engineering discipline and a strong connection to
                nature.
              </p>
              <p>
                The skyscraper idea in his vision is not only about height. It is about ambition:
                better land use in crowded cities, less pressure on horizontal expansion and
                architecture that can become a point of pride for the country.
              </p>
              <p>
                That same thinking guides the projects showcased here. Whether the development is
                a villa community, farm-land project or future landmark, the goal is to build with
                sustainability, design quality and long-term value at the center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
