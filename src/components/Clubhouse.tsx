'use client'

const highlights = [
  {
    icon: '🏗️',
    title: 'Grand Entrance & Exit',
    desc: 'Architecturally designed entrance gate with a statement arch',
  },
  {
    icon: '🛣️',
    title: '40\' Wide BT Main Roads',
    desc: 'Premium bitumen-topped roads with 30\' wide internal roads',
  },
  {
    icon: '💡',
    title: 'Underground Infrastructure',
    desc: 'Aesthetic underground street lighting and cabling throughout',
  },
  {
    icon: '🌧️',
    title: 'Rainwater Harvesting',
    desc: 'Eco-friendly rainwater harvesting pits across the community',
  },
  {
    icon: '🌳',
    title: 'Premium Landscaping',
    desc: 'High-quality landscaping with curated green spaces',
  },
  {
    icon: '🏃',
    title: 'Walking Track & Play Area',
    desc: 'Dedicated children\'s play area and scenic walking tracks',
  },
]

export default function Clubhouse() {
  return (
    <section id="project" className="py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="tp-fade-bottom">
            <span className="section-subtitle">Flagship Project</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              <em>Abhi&apos;s Aloha</em>
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="section-text max-w-3xl mx-auto mb-10">
              240 premium 3 BHK luxury villas spread across 16.1 acres at Pasumamula, Hayathnagar, 
              Rangareddy — near NH65. Ready to move, starting from ₹1.22 Cr.
            </p>
          </div>
          <div className="tp-fade-bottom stagger-delay-3 flex flex-wrap justify-center gap-3">
            {['3 BHK Villas', '16.1 Acres', '240 Units', 'Ready to Move', 'From ₹1.22 Cr'].map((tag, i) => (
              <span key={i} className="px-6 py-3 bg-[var(--color-bg-warm)] text-[var(--color-charcoal)] font-body text-[11px] font-medium tracking-[1.5px] uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <div key={i} className={`tp-fade-bottom stagger-delay-${Math.min(i + 1, 6)} feature-card`}>
              <span className="text-3xl mb-6 block">{item.icon}</span>
              <h4 className="font-heading text-2xl text-[var(--color-black)] mb-3 font-normal">{item.title}</h4>
              <p className="font-body text-[var(--color-text)] text-[14px] font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
