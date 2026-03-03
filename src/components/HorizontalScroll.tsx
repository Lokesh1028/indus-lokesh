'use client'

const reasons = [
  {
    number: '01',
    title: 'Quality First',
    description: 'Quality is at the forefront of all our undertakings. Precision engineering, aesthetic design, and high-class interiors with in-house quality control.',
    icon: '🏆',
  },
  {
    number: '02',
    title: 'On-Time Delivery',
    description: 'We believe in completing jobs within the specified time frame — streamlining processes, budgets, and performance without cutting corners.',
    icon: '⏰',
  },
  {
    number: '03',
    title: 'Expert Team',
    description: 'Powered by innovative professionals who turn realty dreams into reality, with Mr. Bobby Reddy\'s 39+ years of industry experience at the helm.',
    icon: '👥',
  },
  {
    number: '04',
    title: 'Safety Standards',
    description: 'Emphasis on earthquake-resistant structures and international safety protocols. Every villa is built to withstand and protect.',
    icon: '🛡️',
  },
  {
    number: '05',
    title: 'Transparency',
    description: 'Complete transparency in pricing, documentation, and communication. Value for money with a customer-focused approach at every step.',
    icon: '🤝',
  },
  {
    number: '06',
    title: 'Turnkey Solutions',
    description: 'From architectural design to final construction — in-house handling of precision engineering, metal glazing, and high-class interiors.',
    icon: '🔑',
  },
]

export default function HorizontalScroll() {
  return (
    <section id="whyus" className="py-32 md:py-44 px-6 bg-[var(--color-black)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="tp-fade-bottom">
            <span className="section-subtitle">Why Choose Us</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title-light text-5xl md:text-7xl mb-8">
              <em>Excellence</em> in Every Detail
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="font-body text-[15px] font-light text-white/40 max-w-2xl mx-auto leading-relaxed">
              Over two decades of transforming the real estate landscape with sophisticated developments 
              that prioritize your delight.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`tp-fade-bottom stagger-delay-${Math.min(i + 1, 6)} why-card`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-3xl">{reason.icon}</span>
                <span className="font-heading text-7xl font-light text-white/[0.03]">
                  {reason.number}
                </span>
              </div>
              <h4 className="font-heading text-2xl text-white mb-4 font-normal">{reason.title}</h4>
              <p className="font-body text-white/35 text-[13px] font-light leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
