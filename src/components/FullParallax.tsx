'use client'

export default function FullParallax() {
  return (
    <section>
      <div className="py-24 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <div className="tp-fade-bottom">
          <span className="section-subtitle">Wide Pathways &amp; Green Corridors</span>
        </div>
        <div className="tp-fade-bottom stagger-delay-1">
          <h3 className="section-title text-3xl md:text-5xl leading-tight mb-8">
            <em>40-foot wide roads lined with verdant greens,</em> designed for morning strolls and evening conversations
          </h3>
        </div>
        <div className="tp-fade-bottom stagger-delay-2">
          <p className="section-text">
            Every pathway at Abhi&apos;s Aloha has been crafted to connect you with nature, offering a seamless 
            transition between indoor luxury and outdoor tranquility.
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
