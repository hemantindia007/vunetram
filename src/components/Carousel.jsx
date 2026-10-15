import { useEffect, useState } from 'react'
import useCarousel from '../hooks/useCarousel'

/**
 * Reusable sliding carousel.
 *
 * props:
 *  - items: array of data
 *  - renderItem: (item, index) => node
 *  - perView: { base, sm, lg } items visible per page (default 1 / 1 / 3)
 *  - interval: autoplay ms (default 6000)
 *  - gap: tailwind gap in px between slides (default 24)
 *  - ariaLabel: accessible label
 */
export default function Carousel({
  items,
  renderItem,
  perView = { base: 1, sm: 2, lg: 3 },
  interval = 6000,
  gap = 24,
  ariaLabel = 'carousel',
}) {
  const [view, setView] = useState(perView.base)

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      if (w >= 1024) setView(perView.lg)
      else if (w >= 640) setView(perView.sm)
      else setView(perView.base)
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [perView.base, perView.sm, perView.lg])

  const pages = Math.max(1, Math.ceil(items.length / view))
  const { index, setIndex, next, prev, pause, resume } = useCarousel(pages, { interval })

  // Clamp index if view changes and current page no longer exists
  useEffect(() => {
    if (index > pages - 1) setIndex(pages - 1)
  }, [pages, index, setIndex])

  // Each slide is 100/view percent of the viewport width (minus its share of
  // the gap). Paging moves the track by one full viewport (view slides).
  const slideBasis = `calc(${100 / view}% - ${(gap * (view - 1)) / view}px)`

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {/* viewport */}
      <div className="overflow-hidden px-1 py-2">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${gap}px`,
            transform: `translateX(calc(-${index} * (100% + ${gap}px)))`,
          }}
        >
          {items.map((item, i) => (
            <div key={i} className="shrink-0" style={{ flex: `0 0 ${slideBasis}` }}>
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      {pages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-brand-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
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

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-brand-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      )}
    </div>
  )
}
