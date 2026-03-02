'use client'

const reasons = [
  {
    number: '01',
    title: 'Quality First',
    description: 'Quality is at the forefront of all our undertakings. We use precision engineering, aesthetic design, and high-class interiors with in-house quality control.',
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
    <section id="whyus" className="py-28 md:py-40 px-6 bg-[var(--tp-common-black)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="tp-fade-bottom">
            <span className="tp-section-subtitle">Why Choose Us</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="tp-section-title-light text-4xl md:text-6xl mb-6">
              Excellence in Every Detail
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="font-syne text-lg text-white/50 max-w-2xl mx-auto">
              Over two decades of transforming the real estate landscape with sophisticated developments 
              that prioritize your delight.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`tp-fade-bottom stagger-delay-${Math.min(i + 1, 6)} why-card`}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl">{reason.icon}</span>
                <span className="font-bigshoulders text-6xl font-bold text-white/5">
                  {reason.number}
                </span>
              </div>
              <h4 className="font-marcellus text-xl text-white mb-4">{reason.title}</h4>
              <p className="font-syne text-white/40 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
