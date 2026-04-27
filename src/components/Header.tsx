'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

type NavLink =
  | { label: string; id: string; href?: never }
  | { label: string; href: string; id?: never }

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Force "scrolled" styling on non-home pages so header is always readable.
  const headerScrolled = scrolled || !isHome

  const navLinks: NavLink[] = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'intro' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', id: 'services' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Location', id: 'location' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleAnchor = (id: string) => {
    setMenuOpen(false)
    if (!isHome) {
      router.push(`/#${id}`)
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleRoute = (href: string) => {
    setMenuOpen(false)
    router.push(href)
  }

  return (
    <>
      <div className="hidden md:flex items-center justify-end gap-8 px-10 py-2 bg-[var(--color-black)] text-white/70 text-[11px] tracking-[1px]">
        <a href="tel:+919999999999" className="hover:text-white transition-colors">+91 99999 99999</a>
        <a href="mailto:info@viphomes.co.in" className="hover:text-white transition-colors">info@viphomes.co.in</a>
        <span className="text-white/40">Mon – Sat · 9 AM – 7 PM</span>
      </div>

      <header className={`header ${headerScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer" onClick={() => setMenuOpen(false)}>
            <span className="font-heading text-2xl md:text-[26px] tracking-wide" style={{ color: headerScrolled ? 'var(--color-black)' : '#fff' }}>
              VipHomes
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              'href' in link && link.href ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-[11px] font-medium tracking-[2px] uppercase transition-colors hover-underline"
                  style={{ color: headerScrolled ? 'var(--color-charcoal)' : 'rgba(255,255,255,0.85)' }}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleAnchor(link.id!)}
                  className="font-body text-[11px] font-medium tracking-[2px] uppercase transition-colors hover-underline"
                  style={{ color: headerScrolled ? 'var(--color-charcoal)' : 'rgba(255,255,255,0.85)' }}
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          <button
            className="flex flex-col gap-[7px]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-7 h-[1.5px] transition-all" style={{ background: headerScrolled ? 'var(--color-black)' : '#fff' }}></span>
            <span className="w-5 h-[1.5px] transition-all ml-auto" style={{ background: headerScrolled ? 'var(--color-black)' : '#fff' }}></span>
          </button>
        </div>
      </header>

      {/* Offcanvas */}
      <div className={`offcanvas-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`offcanvas-menu ${menuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-20">
          <span className="font-heading text-2xl text-[var(--color-black)]">VipHomes</span>
          <button
            className="text-[var(--color-black)] hover:text-[var(--color-accent)] transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mb-20">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() =>
                'href' in link && link.href ? handleRoute(link.href) : handleAnchor(link.id!)
              }
              className="block w-full text-left font-heading text-2xl py-5 border-b border-[var(--color-border)] text-[var(--color-black)] hover:text-[var(--color-accent)] hover:pl-4 transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <p className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-text-light)] mb-4">Contact</p>
            <a href="tel:+919999999999" className="font-body text-[var(--color-black)] block hover:text-[var(--color-accent)] text-sm font-light">
              +91 99999 99999
            </a>
            <a href="mailto:info@viphomes.co.in" className="font-body text-[var(--color-black)] block hover:text-[var(--color-accent)] text-sm font-light mt-1">
              info@viphomes.co.in
            </a>
          </div>
          <div>
            <p className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-text-light)] mb-4">Office</p>
            <p className="font-body text-[var(--color-text)] text-sm font-light leading-relaxed">
              11/P, Brundavan Colony,<br />
              Narsingi Village, Gandipet,<br />
              Hyderabad, Telangana – 500075
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
