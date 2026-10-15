import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import Carousel from '../components/Carousel'
import { caseStudies } from '../data'

function CaseCard({ cs }) {
  return (
    <article className="glass-card gradient-border group flex h-full flex-col overflow-hidden !p-0">
      <div className="relative overflow-hidden">
        <img
          src={cs.image}
          alt={cs.title}
          loading="lazy"
          decoding="async"
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
          {cs.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink-900">{cs.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{cs.summary}</p>

        <dl className="mt-6 grid grid-cols-2 gap-3">
          {cs.metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-white/60 p-3 ring-1 ring-black/5">
              <dt className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-2xl font-extrabold text-transparent">
                {m.value}
              </dt>
              <dd className="mt-0.5 text-xs text-slate-500">{m.label}</dd>
            </div>
          ))}
        </dl>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:gap-2.5"
        >
          Talk about a similar project
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" className="section bg-fade-mint">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our work</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Real transformations, real numbers
          </h2>
          <p className="mt-4 text-slate-600">
            Outcomes across cloud, delivery, and operations that move the business — not just the
            infrastructure.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <Carousel
            items={caseStudies}
            ariaLabel="Case studies"
            perView={{ base: 1, sm: 2, lg: 3 }}
            interval={8000}
            renderItem={(cs) => <CaseCard cs={cs} />}
          />
        </Reveal>
      </div>
    </section>
  )
}
