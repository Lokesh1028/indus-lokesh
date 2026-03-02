'use client'

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[var(--tp-common-black)] text-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <h3 className="font-marcellus text-2xl mb-2">INDUS HOMES</h3>
            <p className="font-syne text-white/30 text-xs tracking-wider mb-6">PRIVATE LIMITED · EST. 2002</p>
            <p className="font-syne text-white/50 text-sm leading-relaxed">
              Transforming the real estate industry through sophisticated residential developments 
              that prioritize customer delight and uncompromising business ethics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne text-xs tracking-[0.2em] uppercase mb-8 text-white/30">Quick Links</h4>
            <ul className="space-y-4">
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
                    className="font-syne text-white/50 hover:text-[var(--tp-accent)] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-syne text-xs tracking-[0.2em] uppercase mb-8 text-white/30">Hyderabad Office</h4>
            <div className="space-y-1 font-syne text-white/50 text-sm mb-10">
              <p>Plot No. 95, 1st Floor, Road No. 4</p>
              <p>Phase-1, Uppal Bhagayath, Shilparamam</p>
              <p>Hyderabad</p>
            </div>
            <h4 className="font-syne text-xs tracking-[0.2em] uppercase mb-4 text-white/30">Bangalore Office</h4>
            <div className="space-y-1 font-syne text-white/50 text-sm">
              <p>#84, 1st Floor, R.V. Road</p>
              <p>Basavangudi, Bangalore</p>
              <p>Karnataka - 560004</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne text-xs tracking-[0.2em] uppercase mb-8 text-white/30">Contact</h4>
            <div className="space-y-4 font-syne text-white/50 text-sm">
              <p>
                <a href="tel:+919966333400" className="hover:text-[var(--tp-accent)] transition-colors">
                  +91 9966 333 400
                </a>
              </p>
              <p>
                <a href="mailto:info@indushomes.co.in" className="hover:text-[var(--tp-accent)] transition-colors">
                  info@indushomes.co.in
                </a>
              </p>
              <p>
                <a href="https://indushomes.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--tp-accent)] transition-colors">
                  indushomes.co.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-syne text-white/30 text-sm">
            © {new Date().getFullYear()} Indus Homes Private Limited. All rights reserved.
          </p>
          <p className="font-syne text-white/30 text-sm">
            Crafting exceptional living spaces since 2002
          </p>
        </div>
      </div>
    </footer>
  )
}
