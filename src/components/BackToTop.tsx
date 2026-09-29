'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { smoothScrollTop } from '@/components/SmoothScroll'

export default function BackToTop() {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)
  useEffect(() => {
    setPortalTarget(document.body)
  }, [])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    const content = () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => smoothScrollTop()

  const content = (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
  return portalTarget ? createPortal(content, portalTarget) : content
}
