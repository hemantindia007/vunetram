import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav } from '../data'
import AnimatedLogo from './AnimatedLogo'

function Logo({ scrolled }) {
  return (
    <Link to="/" className="flex items-center" aria-label="Vunetram Technologies — home">
      <AnimatedLogo
        className={`transition-all duration-300 ${scrolled ? 'w-32' : 'w-40'}`}
      />
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Section anchors live on the home page, so prefix with "/" to work from any route.
  const toHome = (href) => `/${href}`

  // Hero and inner pages are light at the top, so links stay dark throughout.
  const darkOverlay = false
  const linkBase = 'text-ink-700 hover:text-brand-600'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled || open
          ? 'border-white/60 bg-white/70 shadow-[0_8px_30px_-12px_rgba(15,32,78,0.25)]'
          : 'border-white/40 bg-white/30 shadow-[0_6px_24px_-16px_rgba(15,32,78,0.25)]'
      }`}
    >
      <div className="container flex h-32 items-center justify-between pl-2 sm:pl-3">
        <Logo scrolled={scrolled || open} />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={toHome(item.href)}
              className={`text-sm font-medium transition ${linkBase}`}
            >
              {item.label}
            </Link>
          ))}
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive ? (darkOverlay ? 'text-accent-300' : 'text-brand-600') : linkBase
              }`
            }
          >
            Careers
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Link to="/#contact" className="btn-primary">
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          className={`grid h-10 w-10 place-items-center rounded-lg border transition md:hidden ${
            darkOverlay ? 'border-white/30 text-white' : 'border-slate-200 text-ink-800'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/50 bg-white/80 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={toHome(item.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-white/70"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/careers"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-white/70"
            >
              Careers
            </Link>
            <Link to="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
