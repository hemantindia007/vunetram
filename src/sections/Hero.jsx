import Icon from '../components/Icon'
import CommandCenter from '../components/CommandCenter'
import useCarousel from '../hooks/useCarousel'
import { heroSlides } from '../data'

const trustBadges = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes']

export default function Hero() {
  const { index, setIndex, next, prev, pause, resume } = useCarousel(heroSlides.length, {
    interval: 7500,
  })

  return (
    <section id="home" className="relative overflow-hidden">
      {/* glassy animated color-mesh canvas */}
      <div className="hero-mesh pointer-events-none absolute inset-0 z-0">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <span className="veil" />
      </div>

      <div className="container relative z-10 grid items-center gap-10 pb-16 pt-32 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-36">
        {/* left: slider */}
        <div
          className="relative animate-fade-up"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocusCapture={pause}
          onBlurCapture={resume}
          aria-roledescription="carousel"
          aria-label="Vunetram highlights"
        >
          <div className="relative min-h-[300px] sm:min-h-[310px]">
            {heroSlides.map((slide, i) => {
              const active = i === index
              return (
                <div
                  key={slide.title + i}
                  className={`transition-all ease-out ${
                    active
                      ? 'relative z-10 translate-y-0 opacity-100 duration-500 delay-200'
                      : 'pointer-events-none absolute inset-0 z-0 translate-y-2 opacity-0 duration-200'
                  }`}
                  aria-hidden={!active}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${heroSlides.length}`}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm backdrop-blur">
                    <Icon name="spark" className="h-3.5 w-3.5 text-accent-500" strokeWidth={2} />
                    {slide.eyebrow}
                  </span>
                  <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.3rem]">
                    {slide.title}{' '}
                    <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                      {slide.highlight}
                    </span>
                  </h1>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                    {slide.text}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href={slide.primary.href} className="btn-primary">
                      {slide.primary.label}
                      <Icon name="arrow" className="h-4 w-4" />
                    </a>
                    <a
                      href={slide.secondary.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink-800 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
                    >
                      {slide.secondary.label}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* controls */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-brand-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-brand-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>

            <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
              {heroSlides.map((s, i) => (
                <button
                  key={s.title + i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-brand-600' : 'w-2 bg-brand-300 hover:bg-brand-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* trust badges */}
          <div className="mt-8 border-t border-slate-200/70 pt-5">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
              Certified across
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-3">
              {trustBadges.map((b) => (
                <span key={b} className="text-sm font-bold tracking-tight text-slate-500">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* right: crisp white dashboard with an AI assist card */}
        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/60 to-accent-200/50 blur-2xl" />

          {/* card + floating badges share this relative box so badges sit on the card corners */}
          <div className="relative animate-float">
            <CommandCenter />

            {/* floating badges anchored to the card's top-left and bottom-right corners */}
            <div className="absolute -left-4 -top-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
              <Icon name="ai" className="h-4 w-4 text-brand-600" />
              <span className="text-xs font-semibold text-ink-900">AI-powered</span>
            </div>
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
              <Icon name="devops" className="h-4 w-4 text-brand-600" />
              <span className="text-xs font-semibold text-ink-900">CI/CD automated</span>
            </div>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="relative z-10 border-y border-slate-200/70 bg-white/60 backdrop-blur-sm">
        <dl className="container grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {[
            ['120+', 'Workloads migrated'],
            ['29', 'GenAI solutions shipped'],
            ['99.95%', 'Platform uptime'],
            ['24x7', 'Managed support'],
          ].map(([v, l]) => (
            <div key={l} className="text-center sm:text-left">
              <dt className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                {v}
              </dt>
              <dd className="mt-1 text-xs text-slate-500">{l}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* soft fade so the hero melts into the section below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
