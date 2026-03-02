'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Grupe Nayan style: fade-bottom animations
    const fadeBottoms = document.querySelectorAll('.tp-fade-bottom')
    fadeBottoms.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('animated'),
      })
    })

    // Fade-left animations
    const fadeLefts = document.querySelectorAll('.tp-fade-left')
    fadeLefts.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('animated'),
      })
    })

    // Fade-right animations
    const fadeRights = document.querySelectorAll('.tp-fade-right')
    fadeRights.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('animated'),
      })
    })

    // Scale-up animations
    const scaleUps = document.querySelectorAll('.tp-scale-up')
    scaleUps.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('animated'),
      })
    })

    // Text reveal animations
    const textReveals = document.querySelectorAll('.text-reveal')
    textReveals.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        onEnter: () => el.classList.add('animated'),
      })
    })

    // Parallax effect for images (Grupe Nayan style)
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
            scrub: 1.5,
          },
        }
      )
    })

    // Counter animation for stat numbers
    const statNumbers = document.querySelectorAll('.stat-counter')
    statNumbers.forEach((el) => {
      const target = parseFloat(el.getAttribute('data-target') || '0')
      const suffix = el.getAttribute('data-suffix') || ''
      const isDecimal = target % 1 !== 0

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              const current = this.targets()[0].val
              el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix
            }
          })
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
