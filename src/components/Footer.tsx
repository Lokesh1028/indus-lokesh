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
            <h3 className="font-marcellus text-2xl mb-2">INDUS HOMES</h3>
            <p className="font-syne text-white/40 text-xs tracking-wider mb-4">PRIVATE LIMITED · EST. 2002</p>
            <p className="font-syne text-white/60 text-sm leading-relaxed">
              Transforming the real estate industry through sophisticated residential developments 
              that prioritize customer delight, excellence, and uncompromising business ethics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne text-sm tracking-[0.2em] uppercase mb-6 text-white/40">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'intro' },
                { label: 'Abhi\'s Aloha', id: 'project' },
                { label: 'Amenities', id: 'amenities' },
                { label: 'Why Choose Us', id: 'whyus' },
                { label: 'Location', id: 'location' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-syne text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-syne text-sm tracking-[0.2em] uppercase mb-6 text-white/40">Hyderabad Office</h4>
            <div className="space-y-2 font-syne text-white/60 text-sm mb-8">
              <p>Plot No. 95, 1st Floor, Road No. 4</p>
              <p>Phase-1, Uppal Bhagayath, Shilparamam</p>
              <p>Hyderabad</p>
            </div>
            <h4 className="font-syne text-sm tracking-[0.2em] uppercase mb-4 text-white/40">Bangalore Office</h4>
            <div className="space-y-2 font-syne text-white/60 text-sm">
              <p>#84, 1st Floor, R.V. Road</p>
              <p>Basavangudi, Bangalore</p>
              <p>Karnataka - 560004</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne text-sm tracking-[0.2em] uppercase mb-6 text-white/40">Contact</h4>
            <div className="space-y-3 font-syne text-white/60 text-sm">
              <p>
                <a href="tel:+919966333400" className="hover:text-accent transition-colors">
                  +91 9966 333 400
                </a>
              </p>
              <p>
                <a href="mailto:info@indushomes.co.in" className="hover:text-accent transition-colors">
                  info@indushomes.co.in
                </a>
              </p>
              <p>
                <a href="https://indushomes.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  indushomes.co.in
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
            © {new Date().getFullYear()} Indus Homes Private Limited. All rights reserved.
          </p>
          <p className="font-syne text-white/40 text-sm">
            Crafting exceptional living spaces since 2002
          </p>
        </div>
      </div>
    </footer>
  )
}
