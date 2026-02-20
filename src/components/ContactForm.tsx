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
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-up font-syne text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Get In Touch
          </p>
          <h2 className="fade-up font-marcellus text-4xl md:text-6xl text-dark mb-4">
            Send A Message
          </h2>
          <p className="fade-up font-syne text-lg text-gray-600">
            Contact us for exclusive details about AURELIA
          </p>
        </div>

        <form onSubmit={handleSubmit} className="fade-up max-w-2xl mx-auto">
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
            placeholder="Your Message"
            className="contact-input mb-10 resize-none"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <div className="text-center">
            <button
              type="submit"
              className="font-syne text-sm tracking-[0.2em] uppercase px-12 py-4 border-2 border-dark text-dark hover:bg-dark hover:text-white transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
