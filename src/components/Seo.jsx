import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeo, canonicalFor, OG_IMAGE } from '../seoConfig.js'

/**
 * Keeps document metadata in sync with the active route.
 *
 * The static HTML for each route already carries the correct title, description,
 * canonical and social tags (baked in by scripts/prerender.js) — that is what
 * crawlers read. This component exists for client-side navigation, where the
 * URL changes without a document load.
 *
 * It updates the existing tags in place rather than rendering new ones, so the
 * document always has exactly one title, one description and one canonical.
 * Rendering React 19 head tags here would instead append a second copy of each
 * alongside the prerendered ones.
 */
function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title, description } = getSeo(pathname)
    const canonical = canonicalFor(pathname)

    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', OG_IMAGE)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', OG_IMAGE)

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)
  }, [pathname])

  return null
}

export default Seo
