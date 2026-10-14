import { Link } from 'react-router-dom'
import { company, nav, services } from '../data'
import LogoMark from './LogoMark'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-aurora">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent" />
      <div className="container grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/">
            <LogoMark imgClassName="h-20" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
            {company.tagline}. We help enterprises modernize, migrate, and run reliably in the cloud.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900">Services</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.title}>
                <Link to="/#services" className="text-slate-600 transition hover:text-brand-600">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900">Company</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={`/${item.href}`} className="text-slate-600 transition hover:text-brand-600">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/careers" className="text-slate-600 transition hover:text-brand-600">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <a href={`mailto:${company.email}`} className="transition hover:text-brand-600">
                {company.email}
              </a>
            </li>
            <li>{company.phone}</li>
            <li>{company.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/70">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p>Built for the cloud era.</p>
        </div>
      </div>
    </footer>
  )
}
