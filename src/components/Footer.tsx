'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { projects } from '@/data/projects'
import { smoothScrollTo } from '@/components/SmoothScroll'

type FooterLink =
  | { label: string; id: string; href?: never }
  | { label: string; href: string; id?: never }

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  const handleAnchor = (id: string) => {
    if (!isHome) {
      router.push(`/#${id}`)
      return
    }
    smoothScrollTo(`#${id}`)
  }

  const links: FooterLink[] = [
    { label: 'Home', id: 'hero' },
    { label: 'Our Vision', id: 'founder' },
    { label: 'VIP Creative Homes', href: '/projects/vip-creative-homes' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="bg-[var(--color-black)] text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <h3 className="font-heading text-3xl mb-3 font-normal">VIP Homes</h3>
            <p className="font-body text-white/55 text-[10px] font-medium tracking-[2px] uppercase mb-8">
              Vishwaprerana Creative Homes · Est. 2022
            </p>
            <p className="font-body text-white/65 text-[14px] font-light leading-relaxed">
              Discover VIP Creative Homes, our upcoming villa community in
              Harshaguda, alongside our ongoing and completed developments
              across Telangana.
            </p>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase mb-10 text-white/55">
              Quick Links
            </h4>
            <ul className="space-y-5">
              {links.map((link) => (
                <li key={link.label}>
                  {'href' in link && link.href ? (
                    <Link
                      href={link.href}
                      className="font-body text-white/65 hover:text-[var(--color-accent)] transition-colors text-[13px] font-light"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleAnchor(link.id!)}
                      className="font-body text-white/65 hover:text-[var(--color-accent)] transition-colors text-[13px] font-light"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase mb-10 text-white/55">
              Office
            </h4>
            <div className="space-y-1 font-body text-white/65 text-[13px] font-light mb-12">
              <p>11/P, Brundavan Colony</p>
              <p>Narsingi Village, Gandipet</p>
              <p>Hyderabad, Telangana – 500075</p>
            </div>
            <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase mb-5 text-white/55">
              Business Hours
            </h4>
            <div className="space-y-1 font-body text-white/65 text-[13px] font-light">
              <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-medium tracking-[2px] uppercase mb-10 text-white/55">
              Contact
            </h4>
            <div className="space-y-5 font-body text-white/65 text-[13px] font-light">
              <p>
                <a
                  href="tel:+919912098386"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  +91 99120 98386
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@viphomes.co.in"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  info@viphomes.co.in
                </a>
              </p>
              <p>
                <a
                  href="https://viphomes.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  viphomes.co.in
                </a>
              </p>
            </div>
            <div className="mt-10 space-y-3">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="block font-body text-white/65 hover:text-[var(--color-accent)] text-[13px]"
                >
                  → {project.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-white/55 text-[12px] font-light tracking-wide">
            © {new Date().getFullYear()} Vishwaprerana Creative Homes (OPC)
            Private Limited
          </p>
          <p className="font-body text-white/55 text-[12px] font-light tracking-wide">
            Thoughtful developments · Hyderabad &amp; Telangana
          </p>
        </div>
      </div>
    </footer>
  )
}
