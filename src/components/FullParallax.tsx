'use client'

export default function FullParallax() {
  return (
    <section>
      <div className="py-20 md:py-28 px-6 max-w-4xl mx-auto text-center">
        <div className="tp-fade-bottom">
          <span className="tp-section-subtitle">Wide Pathways &amp; Green Corridors</span>
        </div>
        <div className="tp-fade-bottom stagger-delay-1">
          <h3 className="tp-section-title text-3xl md:text-5xl leading-tight mb-6">
            40-foot wide roads lined with verdant greens, designed for morning strolls and evening conversations
          </h3>
        </div>
        <div className="tp-fade-bottom stagger-delay-2">
          <p className="tp-content-text">
            Every pathway at Abhi&apos;s Aloha has been crafted to connect you with nature, offering a seamless 
            transition between indoor luxury and outdoor tranquility — with aesthetic underground lighting throughout.
          </p>
        </div>
      </div>
      
      <div
        className="full-parallax-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80)',
        }}
      />
    </section>
  )
}
