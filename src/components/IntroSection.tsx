'use client'

export default function IntroSection() {
  return (
    <section id="intro" className="py-32 md:py-44 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <div className="tp-fade-bottom">
            <span className="section-subtitle">About Indus Homes</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-5xl md:text-7xl lg:text-8xl mb-12">
              Building Dreams<br /><em>Since 2002</em>
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="section-text max-w-3xl mx-auto mb-8">
              Founded on October 23, 2002, Indus Homes Private Limited was born from a vision to transform 
              the real estate industry through sophisticated residential developments that prioritize 
              customer delight, excellence, and uncompromising business ethics.
            </p>
          </div>
          <div className="tp-fade-bottom stagger-delay-3">
            <p className="section-text max-w-3xl mx-auto">
              Under the visionary leadership of Mr. Bhavdeep (Bobby) Reddy, who has been actively involved 
              in real estate since 1985, we design spaces that accentuate natural beauty through seamless 
              functionality and unique forms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24">
          {[
            { target: '22', suffix: '+', label: 'Years of Excellence' },
            { target: '240', suffix: '', label: 'Luxury Villas' },
            { target: '16.1', suffix: '', label: 'Acres' },
            { target: '100', suffix: '%', label: 'On-Time Delivery' },
          ].map((stat, i) => (
            <div key={i} className={`tp-fade-bottom stagger-delay-${i + 1} text-center`}>
              <p className="stat-number stat-counter text-6xl md:text-7xl mb-4" data-target={stat.target} data-suffix={stat.suffix}>
                0
              </p>
              <p className="font-body text-[10px] font-medium text-[var(--color-text-light)] tracking-[2px] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
