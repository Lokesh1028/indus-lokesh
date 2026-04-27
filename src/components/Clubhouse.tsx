'use client'

const pillars = [
  {
    title: 'Curated Partnerships',
    desc: 'We only represent developments we\'ve walked, vetted and would visit on a weekend ourselves — Nest Makers\' Bliss In The Woods, and Assured Property\'s Farm Hills.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Communities',
    desc: 'BIW is built on chemical-free farming and a 450-acre eco-tourism park. Farm Hills offers verified plots designed for a slower, get-away lifestyle. Nature is the headline, not a feature.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 4 13V8a5 5 0 0 1 5-5h11v5a7 7 0 0 1-7 7" />
        <path d="M2 21c4-6 9-10 15-12" />
      </svg>
    ),
  },
  {
    title: 'Local Expertise',
    desc: 'Headquartered in Narsingi, Gandipet — we know the ORR corridor and the Rangareddy farm-plot belt the way only a local does. Site visits, paperwork, registration: end to end.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function Clubhouse() {
  return (
    <section id="why" className="py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="tp-fade-bottom">
            <span className="section-subtitle" style={{ color: 'var(--color-accent)', letterSpacing: '3px' }}>Why Choose VipHomes</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-tight mb-10" style={{ letterSpacing: '0.02em' }}>
              <em>Built on Trust</em>
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="font-body text-[16px] font-normal text-[var(--color-charcoal)] leading-relaxed mx-auto" style={{ maxWidth: '720px' }}>
              Three principles guide every project we represent — partnerships we&apos;ve
              personally vetted, communities that lean into nature, and the local knowledge
              of a Narsingi-based team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {pillars.map((item, i) => (
            <div key={i} className={`tp-fade-bottom stagger-delay-${i + 1} feature-card-clean group`}>
              <span className="text-[var(--color-accent)] mb-8 block transition-colors duration-300 group-hover:text-[var(--color-accent-hover)]">
                {item.icon}
              </span>
              <h4 className="font-heading text-[22px] text-[var(--color-black)] mb-4 font-normal leading-snug">{item.title}</h4>
              <p className="font-body text-[var(--color-text)] text-[14px] font-light leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
