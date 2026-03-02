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
    <section id="project" className="py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="tp-fade-bottom">
            <span className="tp-section-subtitle">Flagship Project</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="tp-section-title text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Abhi&apos;s Aloha
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="tp-content-text max-w-3xl mx-auto mb-8">
              240 premium 3 BHK luxury villas spread across 16.1 acres at Pasumamula, Hayathnagar, 
              Rangareddy — near NH65. Ready to move, starting from ₹1.22 Cr.
            </p>
          </div>
          <div className="tp-fade-bottom stagger-delay-3 flex flex-wrap justify-center gap-4">
            {['3 BHK Villas', '16.1 Acres', '240 Units', 'Ready to Move', 'From ₹1.22 Cr'].map((tag, i) => (
              <span key={i} className="px-6 py-2.5 bg-[var(--tp-grey-4)] text-[var(--tp-common-black)] font-syne text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className={`tp-fade-bottom stagger-delay-${Math.min(i + 1, 6)} feature-card`}>
              <span className="text-4xl mb-5 block">{item.icon}</span>
              <h4 className="font-marcellus text-xl text-[var(--tp-common-black)] mb-3">{item.title}</h4>
              <p className="font-syne text-[var(--tp-text-body)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
