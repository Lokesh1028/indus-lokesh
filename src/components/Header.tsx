'use client'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'intro' },
    { label: 'Abhi\'s Aloha', id: 'project' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Location', id: 'location' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
            <span className="font-heading text-2xl md:text-[26px] tracking-wide" style={{ color: scrolled ? 'var(--color-black)' : '#fff' }}>
              Indus Homes
            </span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-body text-[11px] font-medium tracking-[2px] uppercase transition-colors hover-underline"
                style={{ color: scrolled ? 'var(--color-charcoal)' : 'rgba(255,255,255,0.85)' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            className="flex flex-col gap-[7px]"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-7 h-[1.5px] transition-all" style={{ background: scrolled ? 'var(--color-black)' : '#fff' }}></span>
            <span className="w-5 h-[1.5px] transition-all ml-auto" style={{ background: scrolled ? 'var(--color-black)' : '#fff' }}></span>
          </button>
        </div>
      </header>

      {/* Offcanvas */}
      <div className={`offcanvas-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`offcanvas-menu ${menuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-20">
          <span className="font-heading text-2xl text-[var(--color-black)]">Indus Homes</span>
          <button
            className="text-[var(--color-black)] hover:text-[var(--color-accent)] transition-colors"
            onClick={() => setMenuOpen(false)}
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
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left font-heading text-2xl py-5 border-b border-[var(--color-border)] text-[var(--color-black)] hover:text-[var(--color-accent)] hover:pl-4 transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <p className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-text-light)] mb-4">Contact</p>
            <a href="tel:+919966333400" className="font-body text-[var(--color-black)] block hover:text-[var(--color-accent)] text-sm font-light">
              +91 9966 333 400
            </a>
            <a href="mailto:info@indushomes.co.in" className="font-body text-[var(--color-black)] block hover:text-[var(--color-accent)] text-sm font-light mt-1">
              info@indushomes.co.in
            </a>
          </div>
          <div>
            <p className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-text-light)] mb-4">Office</p>
            <p className="font-body text-[var(--color-text)] text-sm font-light leading-relaxed">
              Plot No. 95, 1st Floor, Road No. 4,<br />
              Phase-1, Uppal Bhagayath, Shilparamam,<br />
              Hyderabad
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
