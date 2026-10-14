import Reveal from '../components/Reveal'
import { leadership } from '../data'

function initials(name) {
  const parts = name.trim().split(/\s+/)
  return (parts[0]?.[0] || '') + (parts[1]?.[0] || '')
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.5h3.3V21H3.3V8.5ZM9.3 8.5h3.16v1.7h.05c.44-.83 1.52-1.7 3.12-1.7 3.34 0 3.95 2.2 3.95 5.05V21h-3.3v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9.3V8.5Z" />
    </svg>
  )
}

export default function Leadership() {
  return (
    <section id="leadership" className="section bg-fade-sky">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Leadership</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Meet the people behind Vunetram
          </h2>
          <p className="mt-4 text-slate-600">
            Our founders and leadership team bring decades of combined experience across cloud,
            DevOps, and AI engineering.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((person, i) => (
            <Reveal
              as="article"
              key={person.name + i}
              delay={i * 90}
              className="group overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-[0_18px_45px_-18px_rgba(15,32,78,0.3)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-18px_rgba(26,86,240,0.35)]"
            >
              {/* big portrait */}
              <div className="relative aspect-square overflow-hidden">
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    width="400"
                    height="400"
                  />
                ) : (
                  <span className="grid h-full w-full place-items-center bg-gradient-to-br from-brand-600 to-accent-500 text-5xl font-extrabold text-white">
                    {initials(person.name)}
                  </span>
                )}

                {/* gradient scrim + social links on hover */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-end gap-2 bg-gradient-to-t from-black/45 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      aria-label={`${person.name} on LinkedIn`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-700 shadow-md transition hover:bg-brand-50"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  {person.email && (
                    <a
                      href={`mailto:${person.email}`}
                      aria-label={`Email ${person.name}`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-700 shadow-md transition hover:bg-brand-50"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m4 7 8 6 8-6" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* text */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink-900">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-700">{person.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{person.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
