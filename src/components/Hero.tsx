'use client'

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="tp-fade-bottom">
          <p className="font-syne text-sm md:text-base tracking-[0.3em] uppercase text-white/60 mb-8">
            Since 2002 · Hyderabad &amp; Bangalore
          </p>
        </div>
        <div className="tp-fade-bottom stagger-delay-1">
          <h1 className="tp-hero-title mb-8">
            Life Inspired
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
          <p className="font-syne text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Abhi&apos;s Aloha — 240 Premium 3 BHK Luxury Villas on 16.1 Acres at Pasumamula, Hayathnagar. Starting ₹1.22 Cr.
          </p>
        </div>
        <div className="tp-fade-bottom stagger-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('contact')}
            className="tp-btn-primary !bg-accent !border-accent hover:!bg-transparent hover:!text-white hover:!border-white"
          >
            Book a Site Visit
          </button>
          <button
            onClick={() => scrollTo('project')}
            className="tp-btn-outline"
          >
            Explore Project
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
