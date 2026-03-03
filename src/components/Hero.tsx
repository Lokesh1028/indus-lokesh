'use client'

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="tp-fade-bottom">
          <p className="font-body text-[11px] font-medium tracking-[3px] uppercase text-white/50 mb-10">
            Since 2002 · Hyderabad &amp; Bangalore
          </p>
        </div>
        <div className="tp-fade-bottom stagger-delay-1">
          <h1 className="hero-title mb-10">
            <em>Life Inspired</em>
            <br />
            <span className="inline-flex items-center">
              By Open
              <span className="hero-inline-img mx-3 lg:mx-5">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&q=80"
                  alt="Villa"
                />
              </span>
              Skies
            </span>
          </h1>
        </div>
        <div className="tp-fade-bottom stagger-delay-2">
          <p className="font-body text-[15px] font-light text-white/60 max-w-2xl mx-auto mb-14 leading-relaxed tracking-wide">
            Abhi&apos;s Aloha — 240 Premium 3 BHK Luxury Villas on 16.1 Acres at Pasumamula, Hayathnagar. Starting ₹1.22 Cr.
          </p>
        </div>
        <div className="tp-fade-bottom stagger-delay-3 flex flex-col sm:flex-row gap-5 justify-center">
          <button onClick={() => scrollTo('contact')} className="btn-luxury btn-luxury-filled">
            Book a Site Visit
          </button>
          <button onClick={() => scrollTo('project')} className="btn-luxury btn-luxury-outline">
            Explore Project
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[22px] h-[36px] border border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-[2px] h-[10px] bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
