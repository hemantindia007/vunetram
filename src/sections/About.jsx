import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { differentiators } from '../data'

export default function About() {
  return (
    <section id="about" className="section bg-fade-violet">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Why Vunetram</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            A cloud partner that moves business forward
          </h2>
          <p className="mt-4 text-slate-600">
            We&apos;re a team of cloud and DevOps engineers who care about outcomes: lower cost,
            faster releases, and systems you can trust. Whether you&apos;re lifting a monolith to the
            cloud or standardizing a sprawling hybrid estate, we meet you where you are and build a
            clear path forward.
          </p>

          <div className="mt-8 space-y-5">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-600/10 text-brand-600">
                  <Icon name="check" strokeWidth={2.4} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900">{d.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{d.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-outline mt-9">
            Book a discovery call
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={150} className="relative">
          {/* floating architecture illustration for depth */}
          <img
            src="/images/architecture.svg"
            alt="Cloud architecture diagram"
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute -right-6 -top-16 hidden w-44 drop-shadow-xl lg:block"
          />
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-200/50 to-accent-200/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 p-8 text-white shadow-2xl ring-1 ring-white/10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent" />
            <h3 className="relative text-lg font-bold">How we engage</h3>
            <ol className="mt-6 space-y-6">
              {[
                ['Assess', 'We map your current estate, costs, risks, and goals.'],
                ['Design', 'We architect the target state and a pragmatic migration plan.'],
                ['Build & migrate', 'We automate, migrate, and validate with minimal downtime.'],
                ['Operate', 'We run and optimize with monitoring and 24x7 support.'],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-bold text-accent-400">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-0.5 text-sm text-slate-300">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
