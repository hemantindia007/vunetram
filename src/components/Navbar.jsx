import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { megaMenu } from '../data'
import Icon from './Icon'
import LogoMark from './LogoMark'

function Logo({ scrolled }) {
  return (
    <Link to="/" className="flex items-center" aria-label="Vunetram Technologies — home">
      <LogoMark imgClassName={`w-auto transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`} />
    </Link>
  )
}

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function MenuRow({ item, onClick }) {
  return (
    <Link
      to={item.href}
      onClick={onClick}
      className="group/row flex items-start gap-2.5 rounded-lg px-3 py-2 transition hover:bg-brand-50"
    >
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-50 to-white text-brand-600 ring-1 ring-black/5 transition group-hover/row:from-brand-600 group-hover/row:to-accent-500 group-hover/row:text-white">
        <Icon name={item.icon} className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold leading-tight text-ink-900">{item.label}</span>
        <span className="block text-[11px] leading-tight text-slate-500">{item.desc}</span>
      </span>
    </Link>
  )
}

/* ---------- Desktop dropdown (hover + keyboard) ---------- */
function DesktopMenu({ item }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const wide = item.width === 'wide'

  const openNow = () => {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        className={`flex items-center gap-1.5 text-sm font-semibold transition ${
          open ? 'text-brand-600' : 'text-ink-700 hover:text-brand-600'
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <Chevron open={open} />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 transition-all duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-2xl border border-white/70 bg-white/95 shadow-[0_24px_60px_-18px_rgba(15,32,78,0.35)] backdrop-blur-2xl ${
            wide ? 'w-[900px]' : 'w-[400px]'
          }`}
        >
          <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500" />

          <div className={`grid ${wide ? 'grid-cols-[1fr_240px]' : 'grid-cols-1'}`}>
            {/* link area: grouped (with sub-headings) or flat grid */}
            {item.groups ? (
              <div className="grid grid-cols-3 gap-x-4 gap-y-5 p-5">
                {item.groups.map((g) => (
                  <div key={g.heading}>
                    <p className="mb-1 px-3 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                      {g.heading}
                    </p>
                    <div className="space-y-0.5">
                      {g.items.map((it) => (
                        <MenuRow key={it.label} item={it} onClick={() => setOpen(false)} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-1 p-4">
                {item.items.map((it) => (
                  <MenuRow key={it.label} item={it} onClick={() => setOpen(false)} />
                ))}
              </div>
            )}

            {/* featured tile */}
            {item.featured && (
              <Link
                to={item.featured.href}
                onClick={() => setOpen(false)}
                className="group/feat relative m-4 ml-0 flex flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-br from-brand-700 to-brand-950 p-5 text-white"
              >
                <span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent-400/30 blur-2xl" />
                <span className="relative text-[11px] font-semibold uppercase tracking-wider text-accent-300">
                  {item.featured.eyebrow}
                </span>
                <span className="relative mt-1 text-base font-bold leading-snug">
                  {item.featured.title}
                </span>
                <span className="relative mt-2 text-xs text-brand-100">{item.featured.text}</span>
                <span className="relative mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white transition group-hover/feat:gap-2.5">
                  Explore <Icon name="arrow" className="h-3.5 w-3.5" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Mobile accordion ---------- */
function MobileMenu({ item, onNavigate }) {
  const [open, setOpen] = useState(false)
  // Flatten grouped solutions into labeled sections for mobile.
  const sections = item.groups
    ? item.groups.map((g) => ({ heading: g.heading, items: g.items }))
    : [{ heading: null, items: item.items }]

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between px-3 py-3 text-sm font-semibold text-ink-800"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <Chevron open={open} />
      </button>
      {open && (
        <div className="pb-2">
          {sections.map((sec, si) => (
            <div key={si}>
              {sec.heading && (
                <p className="px-3 pb-1 pt-3 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                  {sec.heading}
                </p>
              )}
              <ul>
                {sec.items.map((it) => (
                  <li key={it.label}>
                    <Link
                      to={it.href}
                      onClick={onNavigate}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-brand-50"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                        <Icon name={it.icon} className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-ink-800">{it.label}</span>
                        <span className="block text-xs text-slate-500">{it.desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled || open
          ? 'border-white/60 bg-white/80 shadow-[0_8px_30px_-12px_rgba(15,32,78,0.25)]'
          : 'border-white/40 bg-white/40 shadow-[0_6px_24px_-16px_rgba(15,32,78,0.25)]'
      }`}
    >
      <div className="container flex h-24 items-center justify-between pl-2 sm:pl-3">
        <Logo scrolled={scrolled || open} />

        <nav className="hidden items-center gap-9 lg:flex">
          {megaMenu.map((item) => (
            <DesktopMenu key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/#contact" className="btn-primary">
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-ink-800 transition lg:hidden"
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
        <div className="border-t border-white/50 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="container flex flex-col py-3">
            {megaMenu.map((item) => (
              <MobileMenu key={item.label} item={item} onNavigate={() => setOpen(false)} />
            ))}
            <Link to="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
