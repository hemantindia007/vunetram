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
            A full set of capabilities that take you from legacy infrastructure to a modern,
            secure, automated, and AI-ready cloud platform.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="article"
              key={s.title}
              delay={i * 100}
              className="gradient-border group relative flex flex-col overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-white/40 to-white/10 p-6 shadow-[0_18px_45px_-16px_rgba(15,32,78,0.25),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:from-white/55 hover:to-white/25 hover:shadow-[0_26px_60px_-16px_rgba(26,86,240,0.3)]"
            >
              {/* top sheen */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-16 rounded-t-3xl bg-gradient-to-b from-white/60 to-transparent" />

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
