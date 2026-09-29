'use client'
import Link from 'next/link'
import { smoothScrollTo } from '@/components/SmoothScroll'

export default function Hero() {
  const scrollTo = (id: string) => smoothScrollTo(`#${id}`)

  return (
    <section
      id="hero"
      data-scroll-zoom-host
      className="builder-hero relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        data-scroll-zoom
        data-scroll-zoom-to="1.18"
      >
        <img
          src="/images/bliss-in-the-woods/villa-exterior.webp"
          srcSet="/images/bliss-in-the-woods/villa-exterior-1600.webp 1600w, /images/bliss-in-the-woods/villa-exterior.webp 2974w"
          sizes="100vw"
          alt="Bliss In The Woods villa exterior"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="">
          <p className="font-body text-[11px] font-medium tracking-[3px] uppercase text-white/55 mb-10">
            VIP Homes · Vishwaprerana Creative Homes
          </p>
        </div>
        <div className="">
          <h1 className="hero-title mb-8">
            Designed around
            <br />
            <em>how you live.</em>
          </h1>
        </div>
        <p className="builder-hero-description ">
          Thoughtful architecture, responsible planning and a lasting commitment
          to the places we build.
        </p>
        <div className=" flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/projects" className="btn-luxury btn-luxury-filled">
            Explore Projects
          </Link>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-luxury btn-luxury-outline"
          >
            Book a Site Visit
          </button>
        </div>
      </div>

      <p className="builder-hero-credit">
        Featured concept · Bliss In The Woods
      </p>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[22px] h-[36px] border border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-[2px] h-[10px] bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
