'use client'

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark text-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <h3 className="font-marcellus text-2xl mb-4">INDUS LOKESH</h3>
            <p className="font-syne text-white/60 text-sm leading-relaxed">
              Crafting exceptional living spaces that inspire generations. 
              Where luxury meets legacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne text-sm tracking-[0.2em] uppercase mb-6 text-white/40">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Amenities', 'Clubhouse', 'Location', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase() === 'about' ? 'intro' : link.toLowerCase())}
                    className="font-syne text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="font-syne text-sm tracking-[0.2em] uppercase mb-6 text-white/40">Office</h4>
            <div className="space-y-3 font-syne text-white/60 text-sm">
              <p>Plot No. 42, Road No. 7</p>
              <p>Banjara Hills, Hyderabad</p>
              <p>Telangana - 500034</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne text-sm tracking-[0.2em] uppercase mb-6 text-white/40">Contact</h4>
            <div className="space-y-3 font-syne text-white/60 text-sm">
              <p>
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a href="mailto:info@induslokesh.com" className="hover:text-accent transition-colors">
                  info@induslokesh.com
                </a>
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-all text-xs font-syne"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-syne text-white/40 text-sm">
            © 2024 Indus Lokesh. All rights reserved.
          </p>
          <p className="font-syne text-white/40 text-sm">
            Designed with passion for luxury living
          </p>
        </div>
      </div>
    </footer>
  )
}
