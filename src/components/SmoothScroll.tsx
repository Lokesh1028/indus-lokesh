'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** Keep native browser scrolling so links, forms and dialogs behave consistently. */
export default function SmoothScroll() {
  const pathname = usePathname()
  useEffect(() => {
    if (!window.location.hash) return
    let id: string
    try {
      id = decodeURIComponent(window.location.hash.slice(1))
    } catch {
      return
    }
    const frame = requestAnimationFrame(() => {
      const element = document.getElementById(id)
      if (element) smoothScrollTo(element)
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname])
  return null
}

export function smoothScrollTo(
  target: string | HTMLElement | number,
  headerOffset = 80,
) {
  if (typeof window === 'undefined') return
  const behavior: ScrollBehavior = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
    ? 'auto'
    : 'smooth'
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior })
    return
  }
  const element =
    typeof target === 'string' ? document.querySelector(target) : target
  if (!(element instanceof HTMLElement)) return
  window.scrollTo({
    top: Math.max(
      0,
      window.scrollY + element.getBoundingClientRect().top - headerOffset,
    ),
    behavior,
  })
}

export function smoothScrollTop() {
  smoothScrollTo(0)
}
