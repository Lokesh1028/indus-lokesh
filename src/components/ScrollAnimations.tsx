'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Parallax effect for images
    const parallaxImages = document.querySelectorAll('.parallax-img-wrapper img')
    parallaxImages.forEach((img) => {
      gsap.fromTo(
        img,
        { y: '-10%' },
        {
          y: '10%',
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })

    // Fade-up elements triggered by scroll (for elements outside of section observers)
    const fadeUps = document.querySelectorAll('.gsap-fade-up')
    fadeUps.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
