'use client'
import Link from 'next/link'

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="Forest landscape representing Bliss In The Woods"
          className="w-full h-full object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="tp-fade-bottom">
          <p className="font-body text-[11px] font-medium tracking-[3px] uppercase text-white/55 mb-10">
            Vishwaprerana Creative Homes · Bliss In The Woods · Farm Hills
          </p>
        </div>
        <div className="tp-fade-bottom stagger-delay-1">
          <h1 className="hero-title mb-10">
            <em>Living amidst</em>
            <br />
            <span className="inline-flex items-center">
              the
              <span className="hero-inline-img mx-3 lg:mx-5">
                <img
                  src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&q=80"
                  alt=""
                />
              </span>
              woods
            </span>
          </h1>
        </div>
        <div className="tp-fade-bottom stagger-delay-2">
          <p className="font-body text-[15px] font-light text-white/70 max-w-2xl mx-auto mb-14 leading-relaxed tracking-wide">
            Partnered with two developments worth a weekend visit — <em>Bliss In The Woods</em>,
            a forest-wrapped villa community on the ORR corridor, and <em>Farm Hills</em>, a
            verified farm-villa-plot layout in Rangareddy district.
          </p>
        </div>
        <div className="tp-fade-bottom stagger-delay-3 flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/projects" className="btn-luxury btn-luxury-filled">
            Explore Projects
          </Link>
          <button onClick={() => scrollTo('contact')} className="btn-luxury btn-luxury-outline">
            Book a Site Visit
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
