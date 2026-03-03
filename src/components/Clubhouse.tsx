'use client'

const highlights = [
  {
    title: 'Grand Entrance & Exit',
    desc: 'Architecturally designed entrance gate with a statement arch',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M10 9h4" />
        <path d="M12 7v4" />
      </svg>
    ),
  },
  {
    title: '40\' Wide BT Main Roads',
    desc: 'Premium bitumen-topped roads with 30\' wide internal roads',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19L8 5" />
        <path d="M16 5l4 14" />
        <path d="M12 6v3" />
        <path d="M12 13v3" />
        <path d="M12 20v1" />
      </svg>
    ),
  },
  {
    title: 'Underground Infrastructure',
    desc: 'Aesthetic underground street lighting and cabling throughout',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: 'Rainwater Harvesting',
    desc: 'Eco-friendly rainwater harvesting pits across the community',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: 'Premium Landscaping',
    desc: 'High-quality landscaping with curated green spaces',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-7" />
        <path d="M17 8a5 5 0 0 0-10 0c0 6 10 6 10 0z" />
        <path d="M7.3 13.5A7 7 0 0 0 12 22a7 7 0 0 0 4.7-8.5" />
      </svg>
    ),
  },
  {
    title: 'Walking Track & Play Area',
    desc: 'Dedicated children\'s play area and scenic walking tracks',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16s1-1 4-1 5 2 8 2 4-1 4-1" />
        <path d="M2 12s2-2 6-2 6 2 10 2 6-2 6-2" />
        <path d="M2 20s2-1 6-1 6 2 10 2 6-1 6-1" />
      </svg>
    ),
  },
]

export default function Clubhouse() {
  return (
    <section id="project" className="py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="tp-fade-bottom">
            <span className="section-subtitle" style={{ color: 'var(--color-accent)', letterSpacing: '3px' }}>Flagship Project</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-tight mb-10" style={{ letterSpacing: '0.02em' }}>
              <em>Abhi&apos;s Aloha</em>
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="font-body text-[16px] font-normal text-[var(--color-charcoal)] leading-relaxed mx-auto mb-12" style={{ maxWidth: '720px' }}>
              240 premium 3 BHK luxury villas spread across 16.1 acres at Pasumamula, Hayathnagar, 
              Rangareddy — near NH65. Ready to move, starting from ₹1.22 Cr.
            </p>
          </div>
          <div className="tp-fade-bottom stagger-delay-3 flex flex-wrap justify-center items-center gap-x-2 gap-y-3">
            {['3 BHK Villas', '16.1 Acres', '240 Units', 'Ready to Move', 'From ₹1.22 Cr'].map((tag, i, arr) => (
              <span key={i} className="flex items-center gap-2">
                <span className="font-body text-[11px] font-medium tracking-[2px] uppercase text-[var(--color-charcoal)]">
                  {tag}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[var(--color-border)] mx-2 text-xs select-none">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {highlights.map((item, i) => (
            <div key={i} className={`tp-fade-bottom stagger-delay-${Math.min(i + 1, 6)} feature-card-clean group`}>
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
