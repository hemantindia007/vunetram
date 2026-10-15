import { testimonials } from '../data'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'

function Quote() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-200" fill="currentColor" aria-hidden="true">
      <path d="M9.5 7C6.46 7 4 9.46 4 12.5V17h5v-5H6.8c0-1.77 1.43-3.2 3.2-3.2V7Zm9 0c-3.04 0-5.5 2.46-5.5 5.5V17h5v-5h-2.2c0-1.77 1.43-3.2 3.2-3.2V7Z" />
    </svg>
  )
}

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 ${i < count ? 'text-amber-400' : 'text-slate-200'}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 3l2.6 5.5 6 .8-4.4 4.2 1.1 6L12 16.9 6.7 19.5l1.1-6L3.4 9.3l6-.8L12 3Z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }) {
  return (
    <figure className="glass-card gradient-border flex h-full flex-col !p-7">
      <div className="flex items-center justify-between">
        <Quote />
        <Stars count={t.rating} />
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-white/60 pt-4">
        <p className="text-sm font-semibold text-ink-900">{t.author}</p>
        <p className="text-xs text-slate-500">
          {t.role} · {t.company}
        </p>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section className="section bg-fade-rose">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Client voices</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Don&apos;t just take our word for it
          </h2>
          <p className="mt-4 text-slate-600">
            Business and engineering leaders across fintech, SaaS, healthcare, and retail trust
            Vunetram to run and transform their cloud.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <Carousel
            items={testimonials}
            ariaLabel="Client testimonials"
            perView={{ base: 1, sm: 2, lg: 3 }}
            interval={7000}
            renderItem={(t) => <TestimonialCard t={t} />}
          />
        </Reveal>
      </div>
    </section>
  )
}
