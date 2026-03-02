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
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <span className="font-marcellus text-xl md:text-2xl tracking-wider" style={{ color: scrolled ? '#1E1E1E' : '#fff' }}>
              INDUS HOMES
            </span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-syne text-[13px] tracking-wide transition-colors hover-underline"
                style={{ color: scrolled ? 'var(--tp-common-black)' : '#fff' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Hamburger (Grupe Nayan style - two lines) */}
          <button
            className="flex flex-col gap-2"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-7 h-[2px] transition-all" style={{ background: scrolled ? 'var(--tp-common-black)' : '#fff' }}></span>
            <span className="w-5 h-[2px] transition-all ml-auto" style={{ background: scrolled ? 'var(--tp-common-black)' : '#fff' }}></span>
          </button>
        </div>
      </header>

      {/* Offcanvas Menu (Grupe Nayan style) */}
      <div className={`offcanvas-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`offcanvas-menu ${menuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-16">
          <span className="font-marcellus text-xl text-[var(--tp-common-black)]">INDUS HOMES</span>
          <button
            className="text-[var(--tp-common-black)] hover:text-[var(--tp-accent)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="28" height="28" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mb-16">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left font-syne text-lg py-4 border-b border-[var(--tp-border-1)] text-[var(--tp-common-black)] hover:text-[var(--tp-accent)] hover:pl-4 transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <p className="font-syne text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">Contact Us</p>
            <a href="tel:+919966333400" className="font-syne text-[var(--tp-common-black)] block hover:text-[var(--tp-accent)] transition-colors">
              +91 9966 333 400
            </a>
            <a href="mailto:info@indushomes.co.in" className="font-syne text-[var(--tp-common-black)] block hover:text-[var(--tp-accent)] transition-colors text-sm mt-1">
              info@indushomes.co.in
            </a>
          </div>
          <div>
            <p className="font-syne text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">Office</p>
            <p className="font-syne text-[var(--tp-text-body)] text-sm leading-relaxed">
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
