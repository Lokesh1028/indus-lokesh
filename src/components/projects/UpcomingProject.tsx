import Link from 'next/link'
import { creativeHomes } from '@/data/creative-homes'

export default function UpcomingProject() {
  return (
    <section
      className="creative-feature"
      aria-labelledby="upcoming-project-title"
    >
      <div className="creative-feature-copy">
        <span className="creative-eyebrow">Upcoming · VIP Homes</span>
        <h2 id="upcoming-project-title">
          VIP Creative
          <br />
          <em>Homes</em>
        </h2>
        <p className="creative-feature-tagline">
          A new expression of villa living.
        </p>
        <p>
          Contemporary architecture, open spaces and thoughtful family living. A
          new community envisioned for Harshaguda, Maheshwaram.
        </p>
        <div className="creative-feature-facts">
          <span>~10 acres</span>
          <span>70+ planned villas</span>
          <span>300–400 sq. yd. plots</span>
        </div>
        <div className="creative-actions">
          <Link className="creative-button" href="/projects/vip-creative-homes">
            Discover the project <span aria-hidden="true">↗</span>
          </Link>
          <Link
            className="creative-text-link"
            href="/projects/vip-creative-homes#interest"
          >
            Register your interest →
          </Link>
        </div>
      </div>
      <figure>
        <img
          src={creativeHomes.image}
          alt="Conceptual contemporary villa exterior for VIP Creative Homes"
          loading="lazy"
          width="1819"
          height="1024"
        />
        <figcaption>
          Conceptual representation · subject to approvals and development
        </figcaption>
      </figure>
    </section>
  )
}
