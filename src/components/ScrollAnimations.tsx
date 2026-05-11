'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const FADE_SELECTORS = ['.tp-fade-bottom', '.tp-fade-left', '.tp-fade-right', '.tp-scale-up', '.text-reveal']
const EASE = 'power3.out'

export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const triggers: ScrollTrigger[] = []
    const tweens: gsap.core.Tween[] = []

    /* ============================================================
       Existing fade reveals (kept as-is)
       ============================================================ */
    const register = (selector: string) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        const t = ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          onEnter: () => el.classList.add('animated'),
        })
        triggers.push(t)

        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.88) {
          el.classList.add('animated')
        }
      })
    }
    FADE_SELECTORS.forEach(register)

    /* ============================================================
       Parallax (existing — image inside .parallax-img-wrapper)
       ============================================================ */
    document.querySelectorAll<HTMLImageElement>('.parallax-img-wrapper img').forEach((img) => {
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
      tweens.push(tween)
      const st = (tween as gsap.core.Tween).scrollTrigger
      if (st) triggers.push(st)
    })

    /* ============================================================
       Counter animation (existing)
       ============================================================ */
    document.querySelectorAll<HTMLElement>('.stat-counter').forEach((el) => {
      const rawTarget = el.getAttribute('data-target') || '0'
      const target = parseFloat(rawTarget)
      const suffix = el.getAttribute('data-suffix') || ''
      const decimalPlaces = rawTarget.includes('.') ? rawTarget.split('.')[1].length : 0
      const useThousands = target >= 1000 && decimalPlaces === 0
      const format = (n: number) => {
        if (decimalPlaces > 0) return n.toFixed(decimalPlaces)
        if (useThousands) return Math.round(n).toLocaleString('en-IN')
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
            onUpdate() {
              const current = (this.targets()[0] as { val: number }).val
              el.textContent = format(current) + suffix
            },
          })
        },
      })
      triggers.push(t)

      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.85) {
        el.textContent = format(target) + suffix
      }
    })

    /* ============================================================
       NEW · data-scroll-zoom — scrubbed scale + opacity on hero media
       ============================================================ */
    document.querySelectorAll<HTMLElement>('[data-scroll-zoom]').forEach((el) => {
      const target = parseFloat(el.dataset.scrollZoomTo || '1.18')
      const fade = el.dataset.scrollZoomFade !== 'false'
      const tween = gsap.fromTo(
        el,
        { scale: 1, opacity: 1 },
        {
          scale: target,
          opacity: fade ? 0.55 : 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('[data-scroll-zoom-host]') ?? el,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      )
      tweens.push(tween)
      const st = (tween as gsap.core.Tween).scrollTrigger
      if (st) triggers.push(st)
    })

    /* ============================================================
       NEW · data-scroll-parallax-y — scrubbed Y translate
       e.g. data-scroll-parallax-y="0.25" (positive = moves up faster)
       ============================================================ */
    document.querySelectorAll<HTMLElement>('[data-scroll-parallax-y]').forEach((el) => {
      const speed = parseFloat(el.dataset.scrollParallaxY || '0.2')
      const distance = window.innerHeight * speed
      const tween = gsap.fromTo(
        el,
        { yPercent: 0 },
        {
          y: -distance,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      )
      tweens.push(tween)
      const st = (tween as gsap.core.Tween).scrollTrigger
      if (st) triggers.push(st)
    })

    /* ============================================================
       NEW · data-scroll-clip — clip-path mask reveal
       direction: "right" (default), "left", "up", "down", "center"
       ============================================================ */
    document.querySelectorAll<HTMLElement>('[data-scroll-clip]').forEach((el) => {
      const dir = el.dataset.scrollClip || 'right'
      const fromMap: Record<string, string> = {
        right: 'inset(0 100% 0 0)',
        left: 'inset(0 0 0 100%)',
        up: 'inset(100% 0 0 0)',
        down: 'inset(0 0 100% 0)',
        center: 'inset(50% 50% 50% 50%)',
      }
      const from = fromMap[dir] ?? fromMap.right
      const tween = gsap.fromTo(
        el,
        { clipPath: from, webkitClipPath: from },
        {
          clipPath: 'inset(0 0 0 0)',
          webkitClipPath: 'inset(0 0 0 0)',
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        }
      )
      tweens.push(tween)
      const st = (tween as gsap.core.Tween).scrollTrigger
      if (st) triggers.push(st)
    })

    /* ============================================================
       NEW · data-scroll-rise — staggered children rise with overshoot
       ============================================================ */
    document.querySelectorAll<HTMLElement>('[data-scroll-rise]').forEach((host) => {
      const items = host.querySelectorAll<HTMLElement>(':scope > *')
      if (!items.length) return
      const tween = gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.4)',
          stagger: 0.08,
          scrollTrigger: { trigger: host, start: 'top 85%' },
        }
      )
      tweens.push(tween)
      const st = (tween as gsap.core.Tween).scrollTrigger
      if (st) triggers.push(st)
    })

    /* ============================================================
       NEW · data-scroll-skew-wave — alternating skew/slide for grids
       Children alternate: even slides from left, odd slides from right.
       ============================================================ */
    document.querySelectorAll<HTMLElement>('[data-scroll-skew-wave]').forEach((host) => {
      const items = host.querySelectorAll<HTMLElement>(':scope > *')
      items.forEach((item, i) => {
        const fromX = i % 2 === 0 ? -60 : 60
        const tween = gsap.fromTo(
          item,
          { x: fromX, skewY: i % 2 === 0 ? 2 : -2, opacity: 0 },
          {
            x: 0,
            skewY: 0,
            opacity: 1,
            duration: 1.1,
            ease: EASE,
            scrollTrigger: { trigger: item, start: 'top 88%' },
          }
        )
        tweens.push(tween)
        const st = (tween as gsap.core.Tween).scrollTrigger
        if (st) triggers.push(st)
      })
    })

    /* ============================================================
       NEW · data-scroll-tilt-cards — alternate rotation entrance
       (used for project teaser cards on home)
       ============================================================ */
    document.querySelectorAll<HTMLElement>('[data-scroll-tilt-cards]').forEach((host) => {
      const items = host.querySelectorAll<HTMLElement>(':scope > *')
      items.forEach((item, i) => {
        const fromX = i % 2 === 0 ? -80 : 80
        const fromRot = i % 2 === 0 ? -2 : 2
        const tween = gsap.fromTo(
          item,
          { x: fromX, rotate: fromRot, opacity: 0 },
          {
            x: 0,
            rotate: 0,
            opacity: 1,
            duration: 1.2,
            ease: EASE,
            scrollTrigger: { trigger: item, start: 'top 80%' },
          }
        )
        tweens.push(tween)
        const st = (tween as gsap.core.Tween).scrollTrigger
        if (st) triggers.push(st)
      })
    })

    /* ============================================================
       NEW · data-scroll-pin-stats — pin a section briefly while
       inner stat counters scrub from 0 → target.
       ============================================================ */
    document.querySelectorAll<HTMLElement>('[data-scroll-pin-stats]').forEach((host) => {
      const counters = host.querySelectorAll<HTMLElement>('.stat-counter[data-target]')
      if (!counters.length) return
      const t = ScrollTrigger.create({
        trigger: host,
        start: 'top 30%',
        end: '+=600',
        pin: true,
        pinSpacing: true,
        scrub: 0.8,
        onUpdate: (self) => {
          counters.forEach((el) => {
            const rawTarget = el.getAttribute('data-target') || '0'
            const target = parseFloat(rawTarget)
            const suffix = el.getAttribute('data-suffix') || ''
            const decimalPlaces = rawTarget.includes('.') ? rawTarget.split('.')[1].length : 0
            const useThousands = target >= 1000 && decimalPlaces === 0
            const value = target * self.progress
            const formatted =
              decimalPlaces > 0 ? value.toFixed(decimalPlaces) :
              useThousands ? Math.round(value).toLocaleString('en-IN') :
              String(Math.round(value))
            el.textContent = formatted + suffix
          })
        },
      })
      triggers.push(t)
    })

    /* ============================================================
       NEW · data-scroll-horizontal — pinned horizontal scroll showcase
       Children scroll horizontally as the page scrolls vertically
       through the host's height.
       ============================================================ */
    document.querySelectorAll<HTMLElement>('[data-scroll-horizontal]').forEach((host) => {
      // Only pin on wider viewports — mobile uses native overflow-x scroll.
      if (!window.matchMedia('(min-width: 901px)').matches) return
      const track = host.querySelector<HTMLElement>('[data-scroll-horizontal-track]')
      if (!track) return
      const distance = track.scrollWidth - window.innerWidth
      if (distance <= 0) return

      const tween = gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: host,
          start: 'top top',
          end: () => `+=${distance + 200}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })
      tweens.push(tween)
      const st = (tween as gsap.core.Tween).scrollTrigger
      if (st) triggers.push(st)
    })

    /* refresh after layout settles */
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 80)

    return () => {
      window.clearTimeout(refreshId)
      tweens.forEach((tw) => tw.kill())
      triggers.forEach((t) => t.kill())
    }
  }, [pathname])

  return null
}
