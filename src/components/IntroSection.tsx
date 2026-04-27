'use client'

export default function IntroSection() {
  return (
    <section id="intro" className="py-32 md:py-44 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <div className="tp-fade-bottom">
            <span className="section-subtitle">About VipHomes</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-5xl md:text-7xl lg:text-8xl mb-12">
              A boutique<br /><em>real estate partner</em>
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="section-text max-w-3xl mx-auto mb-8">
              Vishwaprerana Creative Homes (OPC) Private Limited, operating as VipHomes, was
              incorporated on January 21, 2026. Based in Narsingi Village, Gandipet, we partner
              with carefully chosen developers across Telangana — projects we&apos;d genuinely
              recommend to a friend.
            </p>
          </div>
          <div className="tp-fade-bottom stagger-delay-3">
            <p className="section-text max-w-3xl mx-auto">
              Today our focus is two: <em>Bliss In The Woods</em>, a Nest Makers villa community
              wrapped in a 450-acre eco-tourism park near the ORR, and <em>Farm Hills</em> by
              Assured Property — a verified farm-villa-plot layout in Nedunur, Rangareddy. Two
              very different ways to step away from the city.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24">
          {[
            { target: '2', suffix: '', label: 'Partner Developments' },
            { target: '450', suffix: '', label: 'Acre Eco-Tourism Park' },
            { target: '54', suffix: '+', label: 'Acre Farm Hills Layout' },
            { target: '15', suffix: '', label: 'Min to RGI Airport' },
          ].map((stat, i) => (
            <div key={i} className={`tp-fade-bottom stagger-delay-${i + 1} text-center`}>
              <p
                className="stat-number stat-counter text-6xl md:text-7xl mb-4"
                data-target={stat.target}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </p>
              <p className="font-body text-[10px] font-medium text-[var(--color-text-light)] tracking-[2px] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
