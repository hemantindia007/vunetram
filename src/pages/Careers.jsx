import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { careers, company } from '../data'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-aurora">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />
      </div>
      <div className="container relative pb-16 pt-36 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <span className="eyebrow glass">Careers at Vunetram</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Build the cloud that{' '}
            <span className="text-gradient-animated">powers businesses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            We&apos;re a team of cloud and DevOps engineers who love hard problems, clean automation,
            and systems that just work. If that sounds like you, let&apos;s talk.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#openings" className="btn-primary">
              See open roles
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <Link
              to="/#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/60 px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm backdrop-blur-xl transition hover:bg-white/80"
            >
              Learn about us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Perks() {
  return (
    <section className="section bg-aurora">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why work here</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            A place to do your best work
          </h2>
          <p className="mt-4 text-slate-600">
            We invest in the people driving transformation for ambitious enterprises.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careers.perks.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              delay={i * 90}
              className="glass-card gradient-border group flex flex-col"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-white text-brand-600 shadow-sm ring-1 ring-black/5 transition group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white">
                <Icon name={p.icon} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-400/30 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-brand-400/40 blur-3xl" />
      </div>
      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How we work</h2>
          <p className="mt-3 text-brand-100">The principles that shape everything we build.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {careers.values.map((v, i) => (
            <Reveal
              as="div"
              key={v.title}
              delay={i * 110}
              className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-md"
            >
              <span className="text-3xl font-black text-accent-400/70">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-brand-100">{v.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Careers() {
  usePageMeta({
    title: 'Careers | Vunetram Technologies',
    description:
      'Join Vunetram Technologies. We are hiring cloud, DevOps, SRE, and AI engineers who love automation, clean systems, and shipping to production.',
  })

  return (
    <>
      <Hero />
      <Perks />
      <Values />
    </>
  )
}
