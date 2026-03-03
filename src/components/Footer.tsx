'use client'

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[var(--color-black)] text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <h3 className="font-heading text-3xl mb-3 font-normal">Indus Homes</h3>
            <p className="font-body text-white/25 text-[10px] font-medium tracking-[2px] uppercase mb-8">Private Limited · Est. 2002</p>
            <p className="font-body text-white/40 text-[14px] font-light leading-relaxed">
              Transforming the real estate industry through sophisticated residential developments 
              that prioritize customer delight and uncompromising business ethics.
            </p>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase mb-10 text-white/25">Quick Links</h4>
            <ul className="space-y-5">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'intro' },
                { label: 'Abhi\'s Aloha', id: 'project' },
                { label: 'Amenities', id: 'amenities' },
                { label: 'Location', id: 'location' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-body text-white/40 hover:text-[var(--color-accent)] transition-colors text-[13px] font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase mb-10 text-white/25">Hyderabad</h4>
            <div className="space-y-1 font-body text-white/40 text-[13px] font-light mb-12">
              <p>Plot No. 95, 1st Floor, Road No. 4</p>
              <p>Phase-1, Uppal Bhagayath, Shilparamam</p>
              <p>Hyderabad</p>
            </div>
            <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase mb-5 text-white/25">Bangalore</h4>
            <div className="space-y-1 font-body text-white/40 text-[13px] font-light">
              <p>#84, 1st Floor, R.V. Road</p>
              <p>Basavangudi, Bangalore</p>
              <p>Karnataka - 560004</p>
            </div>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase mb-10 text-white/25">Contact</h4>
            <div className="space-y-5 font-body text-white/40 text-[13px] font-light">
              <p>
                <a href="tel:+919966333400" className="hover:text-[var(--color-accent)] transition-colors">
                  +91 9966 333 400
                </a>
              </p>
              <p>
                <a href="mailto:info@indushomes.co.in" className="hover:text-[var(--color-accent)] transition-colors">
                  info@indushomes.co.in
                </a>
              </p>
              <p>
                <a href="https://indushomes.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                  indushomes.co.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-white/25 text-[12px] font-light tracking-wide">
            © {new Date().getFullYear()} Indus Homes Private Limited
          </p>
          <p className="font-body text-white/25 text-[12px] font-light tracking-wide">
            Crafting exceptional living spaces since 2002
          </p>
        </div>
      </div>
    </footer>
  )
}
