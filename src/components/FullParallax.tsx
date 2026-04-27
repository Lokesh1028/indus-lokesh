'use client'

const services = [
  {
    title: 'Project Discovery',
    desc: 'We walk you through Bliss In The Woods and Farm Hills with the same context we have — what each project is for, who it suits, and what the trade-offs are.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: 'Site Visits',
    desc: 'Guided visits to BIW (ORR corridor) and Farm Hills (Nedunur, Kandukur Mandal) — at a time that works for you, with no high-pressure pitch.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Plot & Villa Selection',
    desc: 'Help shortlisting the right unit — Farm Hills plots by survey number and orientation, BIW villas by phase, vastu, view and proximity to amenities.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: 'Documentation Support',
    desc: 'We coordinate with the developer and trusted legal partners on title verification, agreements and registration — so the paperwork stays clean.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Investment Consulting',
    desc: 'Honest read on what a Farm Hills plot or a BIW villa is likely to mean for you — second home, weekend getaway, or longer-term land hold.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: 'Post-Booking Coordination',
    desc: 'After you book, we stay in the loop — milestone updates, handover walkthroughs, and a single point of contact for whatever comes up.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
]

export default function FullParallax() {
  return (
    <section id="services" className="py-32 md:py-44 px-6 bg-[var(--color-bg-off)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="tp-fade-bottom">
            <span className="section-subtitle">How We Help</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-4xl md:text-6xl leading-tight mb-8">
              From first visit<br /><em>to final handover</em>
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="section-text max-w-2xl mx-auto">
              Six things we actually do for buyers exploring Bliss In The Woods and Farm
              Hills — no fluff, no hidden fees.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className={`tp-fade-bottom stagger-delay-${Math.min(i + 1, 6)} feature-card-clean group`}>
              <span className="text-[var(--color-accent)] mb-6 block transition-colors duration-300 group-hover:text-[var(--color-accent-hover)]">
                {s.icon}
              </span>
              <h4 className="font-heading text-[20px] text-[var(--color-black)] mb-3 font-normal leading-snug">{s.title}</h4>
              <p className="font-body text-[var(--color-text)] text-[14px] font-light leading-[1.8]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
