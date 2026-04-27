'use client'
import { useEffect, useRef, useState } from 'react'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onError = () => setFailed(true)
    v.addEventListener('error', onError)
    return () => v.removeEventListener('error', onError)
  }, [])

  const poster =
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80'

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
      {failed ? (
        <img src={poster} alt="Bliss In The Woods" className="w-full h-full object-cover" />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster={poster}
        >
          <source src="/videos/bliss-in-the-woods/hero.mp4" type="video/mp4" />
          <source
            src="https://static.videezy.com/system/resources/previews/000/041/409/original/Stock-Footage-Luxury-Home-Exterior.mp4"
            type="video/mp4"
          />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
    </section>
  )
}
