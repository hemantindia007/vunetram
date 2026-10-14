import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On route change: if the URL has a hash, scroll to that element; otherwise
 * scroll to the top. Keeps anchor links (e.g. /#services) working across pages.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // wait a tick for the target page to render
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          return
        }
        window.scrollTo({ top: 0 })
      })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])

  return null
}
