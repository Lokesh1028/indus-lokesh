'use client'

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      >
        <source
          src="https://static.videezy.com/system/resources/previews/000/041/409/original/Stock-Footage-Luxury-Home-Exterior.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
    </section>
  )
}
