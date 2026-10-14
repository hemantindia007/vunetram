import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Headless carousel logic: auto-advance with pause, and manual controls.
 * Returns index + helpers. Respects prefers-reduced-motion (no auto-advance).
 */
export default function useCarousel(count, { interval = 6000, auto = true } = {}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const go = useCallback(
    (next) => setIndex(((next % count) + count) % count),
    [count],
  )
  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    if (!auto || paused || count <= 1) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    timer.current = setTimeout(() => setIndex((i) => (i + 1) % count), interval)
    return () => clearTimeout(timer.current)
  }, [index, paused, auto, interval, count])

  return {
    index,
    setIndex: go,
    next,
    prev,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  }
}
