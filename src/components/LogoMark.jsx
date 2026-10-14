import logo from '/logo.png'
import { company } from '../data'

/**
 * Brand logo (transparent PNG — background removed), so it merges cleanly
 * into any surface for a 3D glassy feel. A soft drop shadow adds depth.
 */
export default function LogoMark({ className = '', imgClassName = 'h-10' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logo}
        alt={`${company.name} logo`}
        className={`${imgClassName} w-auto object-contain [filter:drop-shadow(0_6px_14px_rgba(15,32,78,0.18))]`}
        width="1396"
        height="944"
        loading="eager"
        decoding="async"
      />
    </span>
  )
}
