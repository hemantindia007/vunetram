import { testimonials } from '../data'
import Reveal from '../components/Reveal'

function Quote() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-200" fill="currentColor" aria-hidden="true">
      <path d="M9.5 7C6.46 7 4 9.46 4 12.5V17h5v-5H6.8c0-1.77 1.43-3.2 3.2-3.2V7Zm9 0c-3.04 0-5.5 2.46-5.5 5.5V17h5v-5h-2.2c0-1.77 1.43-3.2 3.2-3.2V7Z" />
    </svg>
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
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal as="figure" key={t.author} delay={i * 120} className="glass-card gradient-border flex flex-col !p-7">
              <Quote />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/60 pt-4">
                <p className="text-sm font-semibold text-ink-900">{t.author}</p>
                <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
