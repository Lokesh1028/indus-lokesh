'use client'
import Link from 'next/link'

const images = [
  {
    src: '/images/bliss-in-the-woods/villa-exterior.png',
    alt: 'Bliss In The Woods — villa exterior',
    label: 'Bliss In The Woods',
    href: '/projects/bliss-in-the-woods',
    className: 'col-span-1 h-[400px]',
  },
  {
    src: '/images/bliss-in-the-woods/amphitheatre.png',
    alt: 'Bliss In The Woods — colossal amphitheatre',
    label: 'Colossal Amphitheatre',
    href: '/projects/bliss-in-the-woods',
    className: 'col-span-1 h-[500px] mt-16',
  },
  {
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    alt: 'Farm Hills — open farm landscape',
    label: 'Farm Hills',
    href: '/projects/farm-hills',
    className: 'col-span-1 h-[350px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1200&q=80',
    alt: 'Farm Hills — plotted layout',
    label: 'Farm Villa Plots',
    href: '/projects/farm-hills',
    className: 'col-span-1 h-[450px] -mt-12',
  },
]

export default function ImageGallery() {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-xl">
          <div className="tp-fade-left">
            <span className="section-subtitle">Our Partner Projects</span>
          </div>
          <div className="tp-fade-left stagger-delay-1">
            <h3 className="section-title text-4xl md:text-5xl leading-tight">
              A villa community<br /><em>and a farm getaway</em>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => {
            const dir = ['right', 'down', 'left', 'up'][i % 4]
            return (
              <Link
                href={img.href}
                key={i}
                data-scroll-clip={dir}
                className={`${img.className} group block relative overflow-hidden`}
                aria-label={`Open ${img.label}`}
              >
                <div className="parallax-img-wrapper h-full">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-6 left-6 right-6 text-white font-heading text-xl translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {img.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
