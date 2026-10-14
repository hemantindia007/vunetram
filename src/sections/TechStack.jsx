import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import Tilt from '../components/Tilt'
import { techStack } from '../data'

function Card({ cat, i }) {
  return (
    <Reveal delay={i * 80} className={cat.featured ? 'sm:col-span-2' : ''}>
      <Tilt
        className={`group relative h-full overflow-hidden rounded-3xl border bg-white/5 p-6 backdrop-blur-xl card-3d-dark ${
          cat.featured ? 'border-accent-400/40' : 'border-white/10'
        }`}
      >
        {/* top accent bar grows on hover */}
        <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-400 to-accent-400 transition-transform duration-300 group-hover:scale-x-100" />

        {/* featured ribbon */}
        {cat.featured && (
          <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-400 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            <Icon name="spark" className="h-3.5 w-3.5" strokeWidth={2} />
            Focus area
          </span>
        )}

        <div className="flex items-start gap-4">
          <span
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ring-1 ring-white/10 transition ${
              cat.featured
                ? 'bg-gradient-to-br from-brand-500 to-accent-400 text-white'
                : 'bg-white/10 text-accent-300 group-hover:from-brand-500 group-hover:to-accent-400 group-hover:bg-gradient-to-br group-hover:text-white'
            }`}
          >
            <Icon name={cat.icon} />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white">{cat.group}</h3>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-semibold text-slate-300">
                {cat.tools.length}
              </span>
            </div>
            {cat.blurb && <p className="mt-1 text-sm text-slate-400">{cat.blurb}</p>}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {cat.tools.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-400 to-accent-400" />
              {t}
            </span>
          ))}
        </div>
      </Tilt>
    </Reveal>
  )
}

export default function TechStack() {
  return (
    <section
      id="stack"
      className="bg-flow-dark relative overflow-hidden py-24 text-white sm:py-28"
    >
      {/* edge fades blend into the light sections above and below */}
      <div className="fade-top-light pointer-events-none absolute inset-x-0 top-0 h-24" />
      <div className="fade-bottom-light pointer-events-none absolute inset-x-0 bottom-0 h-24" />

      {/* glow orbs + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="animate-drift-slow absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '54px 54px',
            maskImage: 'radial-gradient(circle at 50% 30%, #000 55%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 30%, #000 55%, transparent 100%)',
          }}
        />
      </div>

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Our toolbox
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Built on battle-tested technology
          </h2>
          <p className="mt-4 text-slate-300">
            We work with the tools your engineers already trust — and the ones that make cloud and
            AI operations faster, safer, and observable.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {techStack.map((cat, i) => (
            <Card key={cat.group} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
