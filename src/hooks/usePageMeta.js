import { useEffect } from 'react'

/**
 * Sets the document <title> and meta description for a page, and restores
 * nothing (each page sets its own on mount). Keeps SEO/meta per-route in a
 * client-rendered SPA.
 */
export default function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)

      // keep Open Graph description in sync
      let og = document.querySelector('meta[property="og:description"]')
      if (og) og.setAttribute('content', description)
    }

    if (title) {
      let ogt = document.querySelector('meta[property="og:title"]')
      if (ogt) ogt.setAttribute('content', title)
    }
  }, [title, description])
}
