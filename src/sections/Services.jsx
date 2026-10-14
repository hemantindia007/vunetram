import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="section bg-fade-blue">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            End-to-end cloud engineering
          </h2>
          <p className="mt-4 text-slate-600">
            Four core capabilities that take you from legacy infrastructure to a modern,
            automated, observable cloud platform.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="article"
              key={s.title}
              delay={i * 100}
              className="glass-card gradient-border group relative flex flex-col overflow-hidden"
            >
              {/* decorative number badge */}
              <span className="pointer-events-none absolute right-4 top-3 text-5xl font-black text-brand-500/10 transition group-hover:text-brand-500/20">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* hover glow */}
              <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-400/0 blur-2xl transition duration-500 group-hover:bg-accent-400/30" />

              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-white text-brand-600 shadow-sm ring-1 ring-black/5 transition group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white">
                <Icon name={s.icon} />
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {s.description}
              </p>
              <ul className="relative mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" strokeWidth={2.4} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
