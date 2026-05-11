'use client'

export default function IntroSection() {
  return (
    <section id="intro" className="py-12 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <div className="tp-fade-bottom">
            <span className="section-subtitle">About VipHomes</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-5xl md:text-7xl lg:text-8xl mb-12">
              A vision-led<br /><em>landlord-share partner</em>
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="section-text max-w-3xl mx-auto mb-8">
              Vishwaprerana Creative Homes (OPC) Private Limited, operating as VipHomes, is built
              around a clear partnership model: we participate as landowner partners with a
              landlord share in carefully selected developments. Our role is not just to list
              projects, but to stand behind projects that are shaped by our vision, guided by our
              mission and aligned with the long-term value we want to create.
            </p>
          </div>
          <div className="tp-fade-bottom stagger-delay-3">
            <p className="section-text max-w-3xl mx-auto">
              Each development presented here reflects that partnership approach — from
              <em> Bliss In The Woods</em> and <em>Farm Hills</em> to the completed
              <em> Indus Homes</em> villa community. They are connected by the same belief: land
              should be developed with purpose, planning and responsibility, creating spaces that
              carry both lifestyle value and legacy value.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24"
          data-scroll-rise
        >
          {[
            { target: '3', suffix: '', label: 'Landowner Partner Projects' },
            { target: '450', suffix: '', label: 'Acre Eco-Tourism Park' },
            { target: '54', suffix: '+', label: 'Acre Farm Hills Layout' },
            { target: '16', suffix: '+', label: 'Acre Completed Villa Community' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
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
