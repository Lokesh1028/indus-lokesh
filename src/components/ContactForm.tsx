'use client'
import { useEffect, useState } from 'react'
import { projects, getProject } from '@/data/projects'
import { creativeHomes } from '@/data/creative-homes'
import { smoothScrollTo } from '@/components/SmoothScroll'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    message: '',
  })
  const [enquiryUrl, setEnquiryUrl] = useState('')
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('project')
    if (slug && getProject(slug)) {
      setFormData((prev) => ({ ...prev, project: slug }))
      smoothScrollTo('#contact')
    }
  }, [])

  const update = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }))
    setEnquiryUrl('')
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const message = [
      'Hello VIP Homes, I would like to arrange a consultation.',
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      formData.email && `Email: ${formData.email}`,
      `Project: ${getProject(formData.project)?.name || 'Please help me explore the projects'}`,
      formData.message.trim() && `Notes: ${formData.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n')
    setEnquiryUrl(
      `${creativeHomes.whatsapp}?text=${encodeURIComponent(message)}`,
    )
  }

  return (
    <section id="contact" className="builder-contact py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title text-5xl md:text-7xl mb-8">
            Let’s talk about
            <br />
            <em>your next home.</em>
          </h2>
          <p className="section-text mb-10">
            Tell us what you’re looking for. We’ll help you understand our
            projects, explore a villa concept or arrange a visit.
          </p>
          <div className="builder-contact-details">
            <div>
              <h3>Visit our office</h3>
              <p>
                11/P, Brundavan Colony,
                <br />
                Narsingi Village, Gandipet,
                <br />
                Hyderabad, Telangana – 500075
              </p>
            </div>
            <div>
              <h3>Speak with the team</h3>
              <a href="tel:+919912098386">+91 99120 98386</a>
              <a href="mailto:info@viphomes.co.in">info@viphomes.co.in</a>
              <p>
                Monday – Saturday · 9 AM – 7 PM
                <br />
                Sunday by appointment
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <label>
              Full name *
              <input
                name="name"
                className="contact-input"
                value={formData.name}
                onChange={(e) => update('name', e.target.value)}
                required
                pattern=".*\S.*"
                autoComplete="name"
                maxLength={100}
              />
            </label>
            <label>
              Phone number *
              <input
                type="tel"
                name="phone"
                className="contact-input"
                value={formData.phone}
                onChange={(e) => update('phone', e.target.value)}
                required
                pattern="[+]?(?:[0-9][ \-]*){10,15}"
                autoComplete="tel"
                maxLength={20}
              />
            </label>
          </div>
          <label>
            Email address
            <input
              type="email"
              name="email"
              className="contact-input mb-6"
              value={formData.email}
              onChange={(e) => update('email', e.target.value)}
              autoComplete="email"
              maxLength={150}
            />
          </label>
          <label>
            Project of interest
            <select
              name="project"
              className="contact-input mb-6"
              value={formData.project}
              onChange={(e) => update('project', e.target.value)}
            >
              <option value="">Help me explore</option>
              {projects.map((project) => (
                <option key={project.slug} value={project.slug}>
                  {project.name} · {project.status}
                </option>
              ))}
            </select>
          </label>
          <label>
            What would you like to know?
            <textarea
              name="message"
              className="contact-input resize-none"
              rows={3}
              maxLength={1500}
              value={formData.message}
              onChange={(e) => update('message', e.target.value)}
            />
          </label>
          <p className="builder-form-note">
            We’ll prepare your enquiry as a WhatsApp message. Review your
            details and tap Send in WhatsApp to reach our team.
          </p>
          <button type="submit" className="btn-luxury btn-luxury-dark">
            Prepare my enquiry ↗
          </button>
          {enquiryUrl && (
            <div className="builder-enquiry-ready" role="status">
              <h3>Your enquiry is ready.</h3>
              <p>Open WhatsApp and tap Send to complete your enquiry.</p>
              <a
                href={enquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury btn-luxury-filled"
              >
                Continue to WhatsApp ↗
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
