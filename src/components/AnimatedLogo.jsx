import eagle from '/logo-eagle.png'
import word from '/logo-word.png'
import { company } from '../data'

/**
 * Vunetram lockup where the eagle "flies" (3D flap + hover) while the
 * VUNETRAM TECHNOLOGIES wordmark stays fixed.
 *
 * Layer positions are measured from the original logo so the two pieces
 * line up exactly: the eagle is 77.29% of the wordmark width, offset 12.18%
 * from the left, and overlaps the wordmark top by 0.86% of its width.
 */
export default function AnimatedLogo({ className = '' }) {
  return (
    <div className={`block ${className}`} aria-label={`${company.name} logo`}>
      <img
        src={eagle}
        alt=""
        aria-hidden="true"
        className="animate-eagle-fly block [filter:drop-shadow(0_6px_10px_rgba(15,32,78,0.2))]"
        style={{ width: '77.29%', marginLeft: '12.18%' }}
        decoding="async"
      />
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
