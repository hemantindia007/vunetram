import body from '/logo-eagle-body.png'
import wing from '/logo-eagle-wing.png'
import word from '/logo-word.png'
import { company } from '../data'

/**
 * Vunetram lockup. The eagle's real wing (from the actual logo) flaps from the
 * shoulder while the body/head and the VUNETRAM TECHNOLOGIES wordmark stay fixed.
 *
 * The wing and body layers share the original eagle canvas (1079x703), so they
 * are stacked absolutely to overlay in exact register. Measured layout: eagle is
 * 77.29% of the wordmark width, offset 12.18% from the left, overlapping the
 * wordmark top by 0.86% of its width.
 */
export default function AnimatedLogo({ className = '' }) {
  return (
    <div className={`block ${className}`} aria-label={`${company.name} logo`}>
      <div
        className="relative [filter:drop-shadow(0_6px_10px_rgba(15,32,78,0.2))]"
        style={{ width: '77.29%', marginLeft: '12.18%', aspectRatio: '1079 / 703' }}
      >
        <img
          src={body}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain"
          decoding="async"
        />
        <img
          src={wing}
          alt=""
          aria-hidden="true"
          className="animate-wing-flap absolute inset-0 h-full w-full object-contain"
          decoding="async"
        />
      </div>

      <img
        src={word}
        alt={company.name}
        className="relative block w-full"
        style={{ marginTop: '-0.86%' }}
        decoding="async"
      />
    </div>
  )
}
