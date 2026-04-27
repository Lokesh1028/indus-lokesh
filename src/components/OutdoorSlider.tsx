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
    desc: 'Comprehensive services from architectural design to final construction.',
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
    <section className="py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="tp-fade-bottom">
            <span className="section-subtitle">Our Expertise</span>
          </div>
          <div className="tp-fade-bottom stagger-delay-1">
            <h2 className="section-title text-5xl md:text-7xl mb-8">
              Services <em>We Offer</em>
            </h2>
          </div>
          <div className="tp-fade-bottom stagger-delay-2">
            <p className="section-text max-w-2xl mx-auto">
              From vision to reality — comprehensive real estate solutions backed by 
              two decades of expertise.
            </p>
          </div>
        </div>

        <div className="tp-fade-bottom stagger-delay-3">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3500}
            loop={true}
            className="swiper-outdoor"
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-full">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-slide-overlay"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                    <h4 className="font-heading text-2xl text-white mb-2 font-normal">{service.title}</h4>
                    <p className="font-body text-white/50 text-[13px] font-light">{service.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
