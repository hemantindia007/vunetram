import { stats } from '../data'
import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-flow-dark relative overflow-hidden py-24 text-white"
    >
      {/* edge fades blend into the light sections above and below */}
      <div className="fade-top-light pointer-events-none absolute inset-x-0 top-0 h-20" />
      <div className="fade-bottom-light pointer-events-none absolute inset-x-0 bottom-0 h-20" />

      {/* glows + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-400/40 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-brand-400/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let the numbers speak</h2>
          <p className="mt-3 text-brand-100">
            Measurable impact across cloud, delivery, and operations.
          </p>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              as="div"
              key={s.label}
              delay={i * 100}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-md"
            >
              <dt className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                <CountUp value={s.value} />
              </dt>
              <dd className="mt-2 text-sm text-brand-100">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
