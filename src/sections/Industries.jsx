import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'
import { industries } from '../data'

function IndustryCard({ ind }) {
  return (
    <div className="glass-card gradient-border group flex h-full flex-col items-center gap-3 !p-6 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-white/70 text-brand-600 shadow-sm ring-1 ring-black/5 transition group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={ind.icon} />
      </span>
      <span className="text-sm font-semibold text-ink-900">{ind.name}</span>
    </div>
  )
}

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

        <Reveal className="mt-12">
          <Carousel
            items={industries}
            ariaLabel="Industries we serve"
            perView={{ base: 2, sm: 3, lg: 4 }}
            interval={6000}
            gap={16}
            renderItem={(ind) => <IndustryCard ind={ind} />}
          />
        </Reveal>
      </div>
    </section>
  )
}
