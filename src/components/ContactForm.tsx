'use client'
import { useEffect, useRef, useState } from 'react'

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.fade-up')
            els.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! Our team will contact you shortly to schedule your site visit.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Get In Touch
            </p>
            <h2 className="fade-up font-marcellus text-4xl md:text-5xl text-dark mb-6">
              Book a Site Visit
            </h2>
            <p className="fade-up font-syne text-lg text-gray-600 mb-10">
              Interested in Abhi&apos;s Aloha? Reach out to us for exclusive details, pricing, 
              and to schedule a personal site visit.
            </p>

            <div className="space-y-8">
              <div className="fade-up">
                <h4 className="font-syne text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Hyderabad Office</h4>
                <p className="font-syne text-dark">
                  Plot No. 95, 1st Floor, Road No. 4,<br />
                  Phase-1, Uppal Bhagayath, Shilparamam,<br />
                  Hyderabad
                </p>
              </div>
              <div className="fade-up">
                <h4 className="font-syne text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Bangalore Office</h4>
                <p className="font-syne text-dark">
                  #84, 1st Floor, R.V. Road,<br />
                  Basavangudi, Bangalore,<br />
                  Karnataka - 560004
                </p>
              </div>
              <div className="fade-up">
                <h4 className="font-syne text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Phone</h4>
                <a href="tel:+919966333400" className="font-syne text-dark text-lg hover:text-accent transition-colors">
                  +91 9966 333 400
                </a>
              </div>
              <div className="fade-up">
                <h4 className="font-syne text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Email</h4>
                <a href="mailto:info@indushomes.co.in" className="font-syne text-dark text-lg hover:text-accent transition-colors">
                  info@indushomes.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="fade-up">
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
                className="contact-input mb-10 resize-none"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                className="w-full font-syne text-sm tracking-[0.2em] uppercase px-12 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-all duration-300"
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
