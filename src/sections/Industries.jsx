import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { industries } from '../data'

export default function Industries() {
  return (
    <section id="industries" className="section bg-fade-amber">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Industries we serve</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Built for the realities of your industry
          </h2>
          <p className="mt-4 text-slate-600">
            No two industries are the same. We tailor cloud, security, and compliance to the
            demands of your sector.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((ind, i) => (
            <Reveal
              as="div"
              key={ind.name}
              delay={i * 70}
              className="glass-card gradient-border group flex flex-col items-center gap-3 !p-6 text-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/70 text-brand-600 shadow-sm ring-1 ring-black/5 transition group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={ind.icon} />
              </span>
              <span className="text-sm font-semibold text-ink-900">{ind.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
