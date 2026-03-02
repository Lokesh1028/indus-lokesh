'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const services = [
  {
    title: 'Residential Development',
    desc: 'Premium gated community villas, luxury apartments, and boutique residential spaces.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  },
  {
    title: 'Design-to-Build',
    desc: 'Comprehensive services from architectural design to final construction for residential and commercial projects.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
  },
  {
    title: 'Turnkey Projects',
    desc: 'In-house precision engineering, aesthetic design, metal glazing, and high-class interiors.',
    image: 'https://images.unsplash.com/photo-1598902108854-d1446413a376?w=800&q=80',
  },
  {
    title: 'Project Management',
    desc: 'Streamlining processes, budgets, and performance to deliver quality without cutting corners.',
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80',
  },
  {
    title: 'Property Collaboration',
    desc: 'Partnering with plot owners to rebuild or develop new properties under mutually beneficial contracts.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  },
]

export default function OutdoorSlider() {
  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Our Expertise
          </p>
          <h2 className="fade-up font-marcellus text-4xl md:text-6xl text-dark mb-6">
            Services We Offer
          </h2>
          <p className="fade-up font-syne text-lg text-gray-600 max-w-2xl mx-auto">
            From vision to reality — comprehensive real estate solutions backed by 
            two decades of expertise and an unwavering commitment to quality.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          className="swiper-outdoor"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="font-marcellus text-xl text-white mb-2">{service.title}</h4>
                  <p className="font-syne text-white/70 text-sm">{service.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
