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
    { label: 'Project', id: 'project' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Why Us', id: 'whyus' },
    { label: 'Location', id: 'location' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <span className="font-marcellus text-2xl tracking-wider" style={{ color: scrolled ? '#1E1E1E' : '#fff' }}>
              INDUS HOMES
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-syne text-sm tracking-wide hover:text-accent transition-colors"
                style={{ color: scrolled ? '#333' : '#fff' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="font-syne text-sm tracking-wide px-6 py-2.5 bg-accent text-white rounded-full hover:bg-accent/90 transition-all"
            >
              Book Site Visit
            </button>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-6 h-0.5 transition-colors" style={{ background: scrolled ? '#333' : '#fff' }}></span>
            <span className="w-6 h-0.5 transition-colors" style={{ background: scrolled ? '#333' : '#fff' }}></span>
            <span className="w-4 h-0.5 transition-colors" style={{ background: scrolled ? '#333' : '#fff' }}></span>
          </button>
        </div>
      </header>

      {/* Offcanvas Mobile Menu */}
      <div className={`offcanvas-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`offcanvas-menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="absolute top-6 right-6 text-3xl text-dark"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <div className="mt-12">
          <p className="font-marcellus text-2xl mb-2 text-dark">INDUS HOMES</p>
          <p className="font-syne text-xs text-gray-400 mb-8 tracking-wider">SINCE 2002</p>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left font-syne text-lg py-3 border-b border-gray-100 text-dark hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="mt-6 w-full font-syne text-sm tracking-wide px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-all"
          >
            Book Site Visit
          </button>
        </div>
      </div>
    </>
  )
}
