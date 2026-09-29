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
    // Native scrolling keeps floor-plan dialogs and presentation resizing stable.
    if (prefersReduced || window.matchMedia('(pointer: coarse)').matches || pathname === '/projects/vip-creative-homes') return

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const existing = ScrollSmoother.get()
    if (existing) existing.kill()

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 0.45,
      effects: false,
      smoothTouch: false,
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
  const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
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
    window.scrollTo({ top: target, behavior })
    return
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (el instanceof HTMLElement) {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerOffset, behavior })
  }
}

export function smoothScrollTop() {
  smoothScrollTo(0)
}
