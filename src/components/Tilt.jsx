import { useRef } from 'react'

/**
 * Adds an interactive 3D tilt that follows the pointer. Pair with the
 * `.card-3d` CSS class for layered depth + sheen. Respects reduced motion.
 */
export default function Tilt({ max = 8, className = '', children, ...rest }) {
  const ref = useRef(null)

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const handleMove = (e) => {
    if (reduce) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0..1
    const py = (e.clientY - rect.top) / rect.height // 0..1
    const rotateY = (px - 0.5) * (max * 2)
    const rotateX = (0.5 - py) * (max * 2)
    el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
  }

  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`card-3d ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
