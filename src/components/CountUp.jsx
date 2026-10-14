import { useEffect, useRef, useState } from 'react'
import useInView from '../hooks/useInView'

/**
 * Animates a numeric value up from 0 when scrolled into view.
 * Accepts strings like "120+", "99.95%", "40%", "24x7" and animates the
 * leading number while preserving any prefix/suffix text.
 */
export default function CountUp({ value, duration = 1600, className = '' }) {
  const [ref, inView] = useInView()
  const [display, setDisplay] = useState(value)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const match = String(value).match(/^([^\d]*)([\d.,]+)(.*)$/)
    if (!match) {
      setDisplay(value)
      return
    }

    const prefix = match[1]
    const numStr = match[2].replace(/,/g, '')
    const suffix = match[3]
    const target = parseFloat(numStr)
    const decimals = (numStr.split('.')[1] || '').length

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(value)
      return
    }

    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      const current = (target * eased).toFixed(decimals)
      setDisplay(`${prefix}${current}${suffix}`)
      if (t < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
