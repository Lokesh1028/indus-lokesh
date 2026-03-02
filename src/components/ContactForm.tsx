'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! Our team will contact you shortly to schedule your site visit.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-28 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <div className="tp-fade-left">
              <span className="tp-section-subtitle">Get In Touch</span>
            </div>
            <div className="tp-fade-left stagger-delay-1">
              <h2 className="tp-section-title text-4xl md:text-5xl mb-8">
                Book a Site Visit
              </h2>
            </div>
            <div className="tp-fade-left stagger-delay-2">
              <p className="tp-content-text mb-12">
                Interested in Abhi&apos;s Aloha? Reach out to us for exclusive details, pricing, 
                and to schedule a personal site visit.
              </p>
            </div>

            <div className="space-y-10">
              <div className="tp-fade-left stagger-delay-3">
                <h4 className="font-syne text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">Hyderabad Office</h4>
                <p className="font-syne text-[var(--tp-common-black)] text-base leading-relaxed">
                  Plot No. 95, 1st Floor, Road No. 4,<br />
                  Phase-1, Uppal Bhagayath, Shilparamam,<br />
                  Hyderabad
                </p>
              </div>
              <div className="tp-fade-left stagger-delay-4">
                <h4 className="font-syne text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">Bangalore Office</h4>
                <p className="font-syne text-[var(--tp-common-black)] text-base leading-relaxed">
                  #84, 1st Floor, R.V. Road,<br />
                  Basavangudi, Bangalore,<br />
                  Karnataka - 560004
                </p>
              </div>
              <div className="tp-fade-left stagger-delay-5">
                <h4 className="font-syne text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">Phone &amp; Email</h4>
                <a href="tel:+919966333400" className="font-syne text-[var(--tp-common-black)] text-lg block mb-1 hover:text-[var(--tp-accent)] hover-underline">
                  +91 9966 333 400
                </a>
                <a href="mailto:info@indushomes.co.in" className="font-syne text-[var(--tp-common-black)] text-lg block hover:text-[var(--tp-accent)] hover-underline">
                  info@indushomes.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="tp-fade-right">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="contact-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="contact-input mb-8"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                placeholder="I'm interested in Abhi's Aloha..."
                className="contact-input mb-12 resize-none"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                className="tp-btn-primary w-full text-center !bg-[var(--tp-accent)] !border-[var(--tp-accent)] hover:!bg-transparent hover:!text-[var(--tp-common-black)] hover:!border-[var(--tp-common-black)]"
              >
                Get Quote / Book Site Visit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
