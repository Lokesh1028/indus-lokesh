'use client'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Modern Villa Exterior',
    className: 'col-span-1 h-[400px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    alt: 'Villa Interior',
    className: 'col-span-1 h-[500px] mt-16',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    alt: 'Villa Pool',
    className: 'col-span-1 h-[350px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    alt: 'Luxury Home',
    className: 'col-span-1 h-[450px] -mt-12',
  },
]

export default function ImageGallery() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-xl">
          <div className="tp-fade-left">
            <span className="section-subtitle">Crafted Spaces</span>
          </div>
          <div className="tp-fade-left stagger-delay-1">
            <h3 className="section-title text-4xl md:text-5xl leading-tight">
              Where Architecture<br /><em>Meets Artistry</em>
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div key={i} className={`tp-scale-up stagger-delay-${i + 1} ${img.className}`}>
              <div className="parallax-img-wrapper h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
