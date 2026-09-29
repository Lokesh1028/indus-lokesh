'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import {
  creativeHomes as project,
  planImage,
  villaPlans,
} from '@/data/creative-homes'
import { smoothScrollTo } from '@/components/SmoothScroll'

const philosophy = [
  [
    'Contemporary by design',
    'Clean lines, generous openings and modern proportions give each home a quiet, distinctive character.',
  ],
  [
    'Open by nature',
    'Double-height spaces, courtyards and terraces connect everyday life with light, air and the outdoors.',
  ],
  [
    'Functional at every level',
    'Social spaces, private retreats and utility areas are thoughtfully distributed across three levels.',
  ],
  [
    'Made for modern families',
    'Room to gather, room to retreat, and flexible spaces that can evolve with the people living in them.',
  ],
]

function StatNumber({ value }: { value: string }) {
  const element = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const node = element.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (time: number) => {
          const progress = Math.min((time - start) / 900, 1)
          node.textContent =
            progress === 1
              ? value
              : value.replace(/[\d,]+/g, (number) =>
                  Math.round(
                    Number(number.replaceAll(',', '')) *
                      (1 - Math.pow(1 - progress, 3)),
                  ).toLocaleString('en-IN'),
                )
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.7 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])
  return (
    <strong aria-label={value}>
      <span ref={element} aria-hidden="true">
        {value}
      </span>
    </strong>
  )
}

export default function CreativeHomesExperience() {
  const [configuration, setConfiguration] = useState(1)
  const [floor, setFloor] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [presentation, setPresentation] = useState(false)
  const [enquiry, setEnquiry] = useState('')
  const dialog = useRef<HTMLDialogElement>(null)
  const plan = villaPlans[configuration]
  const selectedFloor = plan.floors[floor]

  useEffect(() => {
    document.body.classList.toggle('creative-presentation', presentation)
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPresentation(false)
    }
    window.addEventListener('keydown', escape)
    window.dispatchEvent(new Event('resize'))
    return () => {
      document.body.classList.remove('creative-presentation')
      window.removeEventListener('keydown', escape)
    }
  }, [presentation])

  useEffect(() => {
    if (window.location.hash === '#interest') smoothScrollTo('#interest')
  }, [])

  function submitInterest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Hello VIP Homes, I would like to register my interest in VIP Creative Homes.',
      `Name: ${String(data.get('name')).trim()}`,
      `Phone: ${String(data.get('phone')).trim()}`,
      data.get('email') && `Email: ${data.get('email')}`,
      data.get('city') && `City: ${data.get('city')}`,
      `Interested as: ${data.get('role')}`,
      `Preferred villa: ${data.get('villa')}`,
      data.get('message') && `Notes: ${data.get('message')}`,
    ]
      .filter(Boolean)
      .join('\n')
    setEnquiry(`${project.whatsapp}?text=${encodeURIComponent(message)}`)
  }

  return (
    <article className="creative-page">
      <section className="creative-hero" id="creative-top">
        <img
          className="creative-hero-image"
          src={project.image}
          alt="Conceptual villa exterior with clean contemporary lines, a shaded entrance and generous glazing"
          fetchPriority="high"
          width="1819"
          height="1024"
        />
        <div className="creative-hero-shade" />
        <div className="creative-hero-top">
          <span className="creative-eyebrow">
            An upcoming VIP Homes development
          </span>
          <button
            type="button"
            className="creative-presentation-toggle"
            onClick={() => setPresentation(!presentation)}
            aria-pressed={presentation}
          >
            {presentation ? 'Exit presentation ×' : 'Presentation view ↗'}
          </button>
        </div>
        <div className="creative-hero-copy">
          <span className="creative-eyebrow">
            Harshaguda · Maheshwaram · South Hyderabad
          </span>
          <h1>
            VIP Creative
            <br />
            <em>Homes</em>
          </h1>
          <p>A new expression of villa living.</p>
          <div className="creative-actions">
            <a
              href="#interest"
              className="creative-button creative-button-light"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('#interest')
              }}
            >
              Register your interest ↗
            </a>
            <a
              href="#vision"
              className="creative-hero-link"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('#vision')
              }}
            >
              Explore the project ↓
            </a>
          </div>
        </div>
        <p className="creative-hero-caption">
          Conceptual representation. Final specifications are subject to
          approvals and development.
        </p>
      </section>

      <nav className="creative-section-nav" aria-label="Project sections">
        <span>VIP Creative Homes</span>
        {[
          ['vision', 'Vision'],
          ['philosophy', 'Philosophy'],
          ['floor-plans', 'Floor plans'],
          ['location', 'Location'],
          ['interest', 'Enquire'],
        ].map(([id, name]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault()
              smoothScrollTo(`#${id}`)
            }}
          >
            {name}
          </a>
        ))}
      </nav>

      <section className="creative-section creative-intro" id="vision">
        <div>
          <span className="creative-eyebrow">01 / The vision</span>
          <h2>
            Space to live.
            <br />
            <em>Designed to belong.</em>
          </h2>
        </div>
        <div>
          <p className="creative-lead">
            A contemporary villa community for families who value privacy,
            openness and thoughtful design.
          </p>
          <p>
            Envisioned across approximately 10 acres in Harshaguda, VIP Creative
            Homes brings together independent villas and generous living spaces,
            with a design language centred on natural light and functional
            family living.
          </p>
          <p>
            The ambition is simple: homes where architecture improves everyday
            life.
          </p>
        </div>
      </section>

      <section className="creative-stats" aria-label="Project at a glance">
        {[
          ['~10', 'Acres planned'],
          ['70+', 'Villas envisioned'],
          ['300–400', 'Sq. yd. proposed plots'],
          ['~4,500–5,400', 'Sq. ft. planned built-up'],
          ['3', 'Levels of living'],
        ].map(([number, label]) => (
          <div key={label}>
            <StatNumber value={number} />
            <span>{label}</span>
          </div>
        ))}
        <p>
          Indicative project concept. Areas, unit counts and configurations are
          subject to final planning and approvals.
        </p>
      </section>

      <section className="creative-section creative-philosophy" id="philosophy">
        <span className="creative-eyebrow">
          02 / Contemporary · Open · Functional
        </span>
        <h2>
          Architecture shaped around
          <br />
          <em>how families actually live.</em>
        </h2>
        <div className="creative-philosophy-grid">
          {philosophy.map(([title, copy], index) => (
            <div key={title}>
              <span className="creative-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="creative-community">
        <figure>
          <img
            src={planImage('500', 0)}
            alt="Conceptual villa ground floor showing landscaped edges, decks and connected living spaces"
            loading="lazy"
            width="2594"
            height="1420"
          />
          <figcaption>Villa design study · 500 sq. yd. concept</figcaption>
        </figure>
        <div>
          <span className="creative-eyebrow">03 / Community vision</span>
          <h2>
            A community planned
            <br />
            <em>around space.</em>
          </h2>
          <p>
            The proposed community brings the same attention to openness beyond
            the front door: room for landscape, a sense of privacy and an
            architectural identity shared across the neighbourhood.
          </p>
          <p className="creative-note">
            The community master plan and amenity schedule will be shared once
            confirmed. The villa studies illustrate the design approach; they do
            not establish a final site layout.
          </p>
        </div>
      </section>

      <section className="creative-section creative-plans" id="floor-plans">
        <div className="creative-plan-heading">
          <div>
            <span className="creative-eyebrow">
              04 / Explore the architecture
            </span>
            <h2>
              Choose the space
              <br />
              <em>that fits your life.</em>
            </h2>
          </div>
          <p>
            Explore three villa studies, floor by floor. Each drawing is
            presented as a concept for discussion.
          </p>
        </div>
        <div className="creative-configs" aria-label="Villa configuration">
          {villaPlans.map((option, index) => (
            <button
              type="button"
              key={option.size}
              aria-pressed={configuration === index}
              onClick={() => {
                setConfiguration(index)
                setFloor(0)
              }}
            >
              <strong>{option.size}</strong>
              <span>Sq. yds. · {option.orientation}</span>
              {index === 2 && <small>Additional concept</small>}
            </button>
          ))}
        </div>
        <div className="creative-plan-layout">
          <div className="creative-plan-view">
            <div className="creative-plan-brand">
              <span>VIP CREATIVE HOMES</span>
              <span>Conceptual villa floor plan</span>
            </div>
            <div className="creative-floors" aria-label="Floor selection">
              {plan.floors.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  aria-pressed={floor === index}
                  onClick={() => setFloor(index)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="creative-plan-image-button"
              aria-label={`Enlarge ${plan.size} sq. yd. ${selectedFloor.name.toLowerCase()} plan`}
              onClick={() => {
                setZoom(1)
                dialog.current?.showModal()
              }}
            >
              <img
                src={planImage(plan.size, floor)}
                alt={`${plan.size} sq. yd. ${plan.orientation.toLowerCase()} conceptual ${selectedFloor.name.toLowerCase()} plan`}
                loading="lazy"
              />
              <span>View full size ↗</span>
            </button>
          </div>
          <aside className="creative-plan-details" aria-live="polite">
            <span className="creative-eyebrow">{plan.orientation}</span>
            <h3>
              {plan.size} <em>sq. yds.</em>
            </h3>
            <dl>
              <div>
                <dt>Plot dimensions</dt>
                <dd>{plan.plot}</dd>
              </div>
              <div>
                <dt>{selectedFloor.name}</dt>
                <dd>{selectedFloor.area} sq. ft.</dd>
              </div>
              <div>
                <dt>Total built-up area</dt>
                <dd>{plan.total} sq. ft.</dd>
              </div>
            </dl>
            <h4>Spaces on this level</h4>
            <p>{selectedFloor.spaces}</p>
            <p className="creative-note">{plan.note}</p>
            <a
              href="#interest"
              className="creative-text-link"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('#interest')
              }}
            >
              Discuss this configuration ↗
            </a>
          </aside>
        </div>
        <p className="creative-note creative-plan-disclaimer">
          Conceptual plans. Final plans, areas, availability and specifications
          are subject to approvals and development. Features vary by
          configuration.
        </p>
      </section>

      <section className="creative-details">
        <span className="creative-eyebrow">05 / The home experience</span>
        <h2>
          Generous spaces.
          <br />
          <em>Thoughtful connections.</em>
        </h2>
        <div>
          {[
            [
              'Double-height living',
              'Vertical openness connects the social heart of the home.',
            ],
            [
              'Courtyard connection',
              'Selected plans bring an open-air pause into daily life.',
            ],
            [
              'Private retreats',
              'Bedrooms and family lounges sit apart from the main gathering spaces.',
            ],
            [
              'Terraces & entertainment',
              'Upper levels make room for outdoor living and dedicated leisure spaces.',
            ],
          ].map(([title, copy]) => (
            <section key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </section>
          ))}
        </div>
        <p className="creative-note">
          Design features shown in selected concepts; not guaranteed across all
          villas.
        </p>
      </section>

      <section className="creative-section creative-location" id="location">
        <div>
          <span className="creative-eyebrow">06 / The address</span>
          <h2>
            A new chapter
            <br />
            <em>in South Hyderabad.</em>
          </h2>
          <p className="creative-lead">Harshaguda, Maheshwaram</p>
          <p>South Hyderabad, Telangana</p>
          <p className="creative-note">17.173122, 78.442408</p>
          <div className="creative-actions">
            <a
              className="creative-button"
              href={project.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions ↗
            </a>
            <a
              className="creative-text-link"
              href={project.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on map ↗
            </a>
          </div>
        </div>
        <iframe
          src="https://maps.google.com/maps?q=17.173122,78.442408&z=14&output=embed"
          title="VIP Creative Homes proposed location in Harshaguda, Maheshwaram"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      <section className="creative-section creative-interest" id="interest">
        <div>
          <span className="creative-eyebrow">07 / Start a conversation</span>
          <h2>
            Be among
            <br />
            <em>the first to know.</em>
          </h2>
          <p>
            Register your interest to discuss the villa concepts, request a
            private briefing and receive upcoming project announcements from VIP
            Homes.
          </p>
          <a className="creative-text-link" href="tel:+919912098386">
            Talk to VIP Homes · +91 99120 98386 ↗
          </a>
          <a
            className="creative-text-link"
            href={`${project.whatsapp}?text=${encodeURIComponent('Hello VIP Homes, I would like to know more about VIP Creative Homes.')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp ↗
          </a>
        </div>
        <form onSubmit={submitInterest} onChange={() => setEnquiry('')}>
          <div className="creative-form-grid">
            <label>
              Full name *
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                pattern=".*\S.*"
              />
            </label>
            <label>
              Phone number *
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                required
                pattern="[+]?(?:[0-9][ \-]*){10,15}"
                minLength={10}
                maxLength={20}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                maxLength={150}
              />
            </label>
            <label>
              City
              <input
                name="city"
                autoComplete="address-level2"
                maxLength={100}
              />
            </label>
            <label>
              I am interested as
              <select name="role" defaultValue="Home buyer">
                <option>Home buyer</option>
                <option>Investor</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Preferred villa
              <select name="villa" defaultValue="Not sure">
                <option>Not sure</option>
                <option>300 sq. yds.</option>
                <option>400 sq. yds.</option>
                <option>500 sq. yds. (additional concept)</option>
              </select>
            </label>
          </div>
          <label>
            Message / notes
            <textarea name="message" rows={3} maxLength={1500} />
          </label>
          <p className="creative-note">
            Your details will be prepared as a WhatsApp message to VIP Homes.
            Review the message and tap Send in WhatsApp to complete your
            enquiry.
          </p>
          <button type="submit" className="creative-button">
            Register your interest ↗
          </button>
          {enquiry && (
            <div role="status" className="creative-enquiry-ready">
              <strong>Your enquiry is ready.</strong>
              <p>
                Open WhatsApp, review your details and tap Send. Your enquiry
                has not been sent yet.
              </p>
              <a
                className="creative-button"
                href={enquiry}
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue to WhatsApp ↗
              </a>
            </div>
          )}
        </form>
      </section>

      <dialog className="creative-plan-dialog" ref={dialog}>
        <div className="creative-dialog-toolbar">
          <div>
            <strong>VIP Creative Homes</strong>
            <span>
              {plan.size} sq. yds. · {plan.orientation} · {selectedFloor.name} ·
              Conceptual
            </span>
          </div>
          <div>
            <button
              type="button"
              aria-label="Zoom out"
              disabled={zoom <= 1}
              onClick={() => setZoom(Math.max(1, zoom - 0.5))}
            >
              −
            </button>
            <span aria-live="polite">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              aria-label="Zoom in"
              disabled={zoom >= 3}
              onClick={() => setZoom(Math.min(3, zoom + 0.5))}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="Close floor plan"
            >
              Close ×
            </button>
          </div>
        </div>
        <div className="creative-dialog-floors">
          {plan.floors.map((item, index) => (
            <button
              type="button"
              key={item.name}
              aria-pressed={floor === index}
              onClick={() => {
                setFloor(index)
                setZoom(1)
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="creative-dialog-canvas">
          <img
            src={planImage(plan.size, floor)}
            alt={`${plan.size} sq. yd. conceptual ${selectedFloor.name.toLowerCase()}`}
            style={{
              width: `${zoom * 100}%`,
              maxWidth: 'none',
              height: zoom === 1 ? '100%' : 'auto',
            }}
          />
        </div>
      </dialog>
    </article>
  )
}
