'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const existing = ScrollSmoother.get()
    if (existing) existing.kill()

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.4,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
      ignoreMobileResize: true,
    })

    return () => {
      smoother.kill()
    }
  }, [pathname])

  return null
}

/** Smooth-scroll to an element id or selector. Falls back to native scroll. */
export function smoothScrollTo(target: string | HTMLElement | number, headerOffset = 80) {
  if (typeof window === 'undefined') return
  const smoother = ScrollSmoother.get?.()
  if (smoother) {
    if (typeof target === 'number') {
      smoother.scrollTo(target, true)
      return
    }
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (!el) return
    // "top {offset}px" = align target's top {offset}px below viewport top so
    // it clears the fixed header.
    smoother.scrollTo(el as HTMLElement, true, `top ${headerOffset}px`)
    return
  }
  // Fallback when smoother isn't active (e.g. reduced motion).
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
    return
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (el && el instanceof HTMLElement) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function smoothScrollTop() {
  smoothScrollTo(0)
}
