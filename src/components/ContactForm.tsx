'use client'
import { useEffect, useState } from 'react'
import { getProject } from '@/data/projects'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const slug = new URLSearchParams(window.location.search).get('project')
    if (!slug) return
    const project = getProject(slug)
    if (!project) return
    setFormData((prev) =>
      prev.message
        ? prev
        : { ...prev, message: `I'm interested in ${project.name}. Please share availability and the next site visit slot.` }
    )
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! Our team will contact you shortly.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 md:py-44 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="tp-fade-left">
              <span className="section-subtitle">Get In Touch</span>
            </div>
            <div className="tp-fade-left stagger-delay-1">
              <h2 className="section-title text-4xl md:text-6xl mb-10">
                Book a <em>Consultation</em>
              </h2>
            </div>
            <div className="tp-fade-left stagger-delay-2">
              <p className="section-text mb-14">
                Curious about Bliss In The Woods or Farm Hills? Drop your details and we&apos;ll
                set up a guided site visit and answer everything from pricing to paperwork.
              </p>
            </div>

            <div className="space-y-12">
              <div className="tp-fade-left stagger-delay-3">
                <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-text-light)] mb-4">Office</h4>
                <p className="font-body text-[var(--color-charcoal)] text-[15px] font-light leading-relaxed">
                  11/P, Brundavan Colony,<br />
                  Narsingi Village, Gandipet,<br />
                  Hyderabad, Telangana – 500075
                </p>
              </div>
              <div className="tp-fade-left stagger-delay-4">
                <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-text-light)] mb-4">Business Hours</h4>
                <p className="font-body text-[var(--color-charcoal)] text-[15px] font-light leading-relaxed">
                  Monday – Saturday: 9:00 AM – 7:00 PM<br />
                  Sunday: By Appointment
                </p>
              </div>
              <div className="tp-fade-left stagger-delay-5">
                <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase text-[var(--color-text-light)] mb-4">Phone &amp; Email</h4>
                <a href="tel:+919999999999" className="font-body text-[var(--color-charcoal)] text-lg block mb-2 hover:text-[var(--color-accent)] font-light hover-underline">
                  +91 99999 99999
                </a>
                <a href="mailto:info@viphomes.co.in" className="font-body text-[var(--color-charcoal)] text-lg block hover:text-[var(--color-accent)] font-light hover-underline">
                  info@viphomes.co.in
                </a>
              </div>
            </div>
          </div>

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
                placeholder="I'm looking for a property in..."
                className="contact-input mb-14 resize-none"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                className="btn-luxury btn-luxury-filled w-full text-center"
              >
                Book a Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
