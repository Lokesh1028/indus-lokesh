'use client'

const proximities = [
  { time: '5', unit: 'mins', place: 'NH65 Highway' },
  { time: '10', unit: 'mins', place: 'Hayathnagar' },
  { time: '15', unit: 'mins', place: 'LB Nagar' },
  { time: '25', unit: 'mins', place: 'Uppal / IT Corridor' },
]

export default function Location() {
  return (
    <section id="location" className="py-28 md:py-40 px-6 bg-[var(--tp-grey-4)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="tp-fade-left">
              <span className="tp-section-subtitle">Prime Location</span>
            </div>
            <div className="tp-fade-left stagger-delay-1">
              <h2 className="tp-section-title text-4xl md:text-5xl leading-tight mb-8">
                Pasumamula, Hayathnagar — Connected Yet Serene
              </h2>
            </div>
            <div className="tp-fade-left stagger-delay-2">
              <p className="tp-content-text mb-12">
                Strategically located near NH65 in Rangareddy district, Abhi&apos;s Aloha offers the perfect 
                balance of suburban serenity and urban connectivity. With seamless access to major highways, 
                IT hubs, and essential amenities, everything you need is just minutes away.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {proximities.map((item, i) => (
                <div key={i} className={`tp-fade-bottom stagger-delay-${i + 1} proximity-badge`}>
                  <span className="time">{item.time}</span>
                  <div>
                    <span className="font-syne text-xs text-gray-500 block">{item.unit}</span>
                    <span className="font-syne text-sm text-[var(--tp-common-black)]">{item.place}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="tp-fade-right">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.123456!2d78.55!3d17.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPasumamula%2C+Hayathnagar!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              <div className="bg-white p-6">
                <p className="font-marcellus text-xl text-[var(--tp-common-black)] mb-1">Abhi&apos;s Aloha by Indus Homes</p>
                <p className="font-syne text-[var(--tp-text-body)] text-sm">Pasumamula, Hayathnagar, Rangareddy, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
