'use client'

const proximities = [
  { time: '5', unit: 'Mins', place: 'NH65 Highway' },
  { time: '10', unit: 'Mins', place: 'Hayathnagar' },
  { time: '15', unit: 'Mins', place: 'LB Nagar' },
  { time: '25', unit: 'Mins', place: 'Uppal / IT Corridor' },
]

export default function Location() {
  return (
    <section id="location" className="py-32 md:py-44 px-6 bg-[var(--color-bg-off)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="tp-fade-left">
              <span className="section-subtitle">Prime Location</span>
            </div>
            <div className="tp-fade-left stagger-delay-1">
              <h2 className="section-title text-4xl md:text-6xl leading-tight mb-10">
                <em>Connected</em> Yet Serene
              </h2>
            </div>
            <div className="tp-fade-left stagger-delay-2">
              <p className="section-text mb-14">
                Strategically located near NH65 in Rangareddy district, Abhi&apos;s Aloha offers the perfect 
                balance of suburban serenity and urban connectivity. Everything you need is just minutes away.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {proximities.map((item, i) => (
                <div key={i} className={`tp-fade-bottom stagger-delay-${i + 1} proximity-badge`}>
                  <span className="time">{item.time}</span>
                  <div>
                    <span className="font-body text-[10px] font-medium text-[var(--color-text-light)] tracking-[1px] uppercase block">{item.unit}</span>
                    <span className="font-body text-[13px] font-light text-[var(--color-black)]">{item.place}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tp-fade-right">
            <div className="overflow-hidden shadow-lg">
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
              <div className="bg-white p-7">
                <p className="font-heading text-2xl text-[var(--color-black)] mb-1 font-normal">Abhi&apos;s Aloha</p>
                <p className="font-body text-[var(--color-text)] text-[13px] font-light">Pasumamula, Hayathnagar, Rangareddy, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
