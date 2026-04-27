'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const FADE_SELECTORS = ['.tp-fade-bottom', '.tp-fade-left', '.tp-fade-right', '.tp-scale-up', '.text-reveal']

export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const triggers: ScrollTrigger[] = []

    const register = (selector: string) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        const t = ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          onEnter: () => el.classList.add('animated'),
        })
        triggers.push(t)

        // Reveal immediately if already at/above the trigger threshold on mount.
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.88) {
          el.classList.add('animated')
        }
      })
    }

    FADE_SELECTORS.forEach(register)

    // Parallax effect for images
    const parallaxImages = document.querySelectorAll<HTMLImageElement>('.parallax-img-wrapper img')
    parallaxImages.forEach((img) => {
      const tween = gsap.fromTo(
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
      const st = (tween as gsap.core.Tween).scrollTrigger
      if (st) triggers.push(st)
    })

    // Counter animation for stat numbers
    const statNumbers = document.querySelectorAll<HTMLElement>('.stat-counter')
    statNumbers.forEach((el) => {
      const rawTarget = el.getAttribute('data-target') || '0'
      const target = parseFloat(rawTarget)
      const suffix = el.getAttribute('data-suffix') || ''
      const decimalPlaces = rawTarget.includes('.') ? rawTarget.split('.')[1].length : 0
      const useThousandsSeparator = target >= 1000 && decimalPlaces === 0
      const format = (n: number) => {
        if (decimalPlaces > 0) return n.toFixed(decimalPlaces)
        if (useThousandsSeparator) return Math.round(n).toLocaleString('en-IN')
        return String(Math.round(n))
      }

      const t = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              const current = (this.targets()[0] as { val: number }).val
              el.textContent = format(current) + suffix
            },
          })
        },
      })
      triggers.push(t)

      // If counter is already in view at mount, fire immediately.
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.85) {
        el.textContent = format(target) + suffix
      }
    })

    // Recompute trigger positions after DOM has settled.
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 80)

    return () => {
      window.clearTimeout(refreshId)
      triggers.forEach((t) => t.kill())
    }
  }, [pathname])

  return null
}
