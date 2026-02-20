'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const slides = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
  'https://images.unsplash.com/photo-1598902108854-d1446413a376?w=800&q=80',
  'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  'https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?w=800&q=80',
]

export default function OutdoorSlider() {
  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-4">
            The Great Outdoors
          </p>
          <h2 className="fade-up font-marcellus text-4xl md:text-6xl text-dark mb-6">
            Outdoor Enchantment
          </h2>
          <p className="fade-up font-syne text-lg text-gray-600 max-w-2xl mx-auto">
            Step outside and be embraced by meticulously landscaped gardens, 
            meditation zones, jogging trails, and spaces that bring families together.
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
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`Outdoor ${i + 1}`} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
