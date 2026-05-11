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

  const poster = '/images/bliss-in-the-woods/villa-exterior.png'

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
          <source src="/videos/bliss-in-the-woods/walkthrough-1.mp4" type="video/mp4" />
          <source src="/videos/bliss-in-the-woods/walkthrough-2.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
    </section>
  )
}
