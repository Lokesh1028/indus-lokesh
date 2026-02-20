'use client'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`preloader ${loaded ? 'loaded' : ''}`}>
      <div className="preloader-lines">
        <div className="preloader-line"></div>
        <div className="preloader-line"></div>
        <div className="preloader-line"></div>
        <div className="preloader-line"></div>
        <div className="preloader-line"></div>
      </div>
    </div>
  )
}
