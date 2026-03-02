'use client'

export default function IntroSection() {
  return (
    <section id="intro" className="py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="tp-fade-bottom">
            <span className="tp-section-subtitle">About Indus Homes</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="tp-section-title text-4xl md:text-6xl lg:text-7xl mb-10">
              Building Dreams Since 2002
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="tp-content-text max-w-3xl mx-auto mb-6">
              Founded on October 23, 2002, Indus Homes Private Limited was born from a vision to transform 
              the real estate industry through sophisticated residential developments that prioritize 
              customer delight, excellence, and uncompromising business ethics.
            </p>
          </div>
          <div className="tp-fade-bottom stagger-delay-3">
            <p className="tp-content-text max-w-3xl mx-auto">
              Under the visionary leadership of Mr. Bhavdeep (Bobby) Reddy, who has been actively involved 
              in real estate since 1985, we design spaces that accentuate natural beauty through seamless 
              functionality and unique forms — committed to transparency, value for money, and an 
              environment-friendly ambiance with timely delivery.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20">
          {[
            { target: '22', suffix: '+', label: 'Years of Excellence' },
            { target: '240', suffix: '', label: 'Luxury Villas' },
            { target: '16.1', suffix: '', label: 'Acres of Development' },
            { target: '100', suffix: '%', label: 'On-Time Delivery' },
          ].map((stat, i) => (
            <div key={i} className={`tp-fade-bottom stagger-delay-${i + 1} text-center`}>
              <p className="stat-number stat-counter text-5xl md:text-7xl mb-3" data-target={stat.target} data-suffix={stat.suffix}>
                0
              </p>
              <p className="font-syne text-sm text-gray-500 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
