/**
 * Post-build prerender.
 *
 * The site is a client-rendered Vite SPA, so every route used to ship the same
 * <head> — one title and one description across all seven pages, and no
 * canonical. This script emits a static HTML file per route with the correct
 * title, description, canonical, Open Graph / Twitter tags and JSON-LD baked
 * in, so crawlers get the right metadata on the first byte instead of waiting
 * on a JavaScript render pass.
 *
 * Run automatically after `vite build` (see package.json "build").
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  routes,
  canonicalFor,
  organizationSchema,
  websiteSchema,
  OG_IMAGE,
  SITE_NAME,
} from '../src/seoConfig.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const templatePath = join(dist, 'index.html')

if (!existsSync(templatePath)) {
  console.error('[prerender] dist/index.html not found — run vite build first.')
  process.exit(1)
}

const template = readFileSync(templatePath, 'utf-8')

const HEAD_START = '<!--SEO_HEAD_START-->'
const HEAD_END = '<!--SEO_HEAD_END-->'
const NOSCRIPT_START = '<!--SEO_NOSCRIPT_START-->'
const NOSCRIPT_END = '<!--SEO_NOSCRIPT_END-->'

for (const marker of [HEAD_START, HEAD_END, NOSCRIPT_START, NOSCRIPT_END]) {
  if (!template.includes(marker)) {
    console.error(`[prerender] marker ${marker} missing from index.html`)
    process.exit(1)
  }
}

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// Human-readable nav labels, also used for the no-JS fallback links.
const navLabels = {
  '/': 'Home',
  '/expertise': 'Our Expertise',
  '/awards': 'Awards & Recognitions',
  '/events': 'Events & Workshops',
  '/blog': 'Blog',
  '/podcasts': 'Podcasts',
  '/careers': 'Careers',
}

function buildHead(path, { title, description }) {
  const canonical = canonicalFor(path)
  const breadcrumb =
    path === '/'
      ? null
      : {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: canonicalFor('/'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: navLabels[path],
              item: canonical,
            },
          ],
        }

  const schemas = [organizationSchema, websiteSchema]
  if (breadcrumb) schemas.push(breadcrumb)

  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:locale" content="en_MY" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    ...schemas.map(
      (s) =>
        `<script type="application/ld+json">${JSON.stringify(s)}</script>`
    ),
  ].join('\n    ')
}

// Crawlable fallback: gives non-JS crawlers a heading and the internal link
// graph. React's createRoot clears #root on mount, and this sits outside it,
// so it never affects what a real visitor sees once the bundle loads.
function buildNoscript(path, { title, description }) {
  const links = Object.entries(navLabels)
    .filter(([p]) => p !== path)
    .map(([p, label]) => `<li><a href="${p}">${esc(label)}</a></li>`)
    .join('')
  return [
    '<noscript>',
    `<h1>${esc(title)}</h1>`,
    `<p>${esc(description)}</p>`,
    '<nav aria-label="Site"><ul>',
    links,
    '</ul></nav>',
    '<p>This site works best with JavaScript enabled. Contact JRC at <a href="mailto:jr@jr.com.my">jr@jr.com.my</a>.</p>',
    '</noscript>',
  ].join('')
}

function render(path, meta) {
  const head = buildHead(path, meta)
  const noscript = buildNoscript(path, meta)
  return template
    .replace(
      new RegExp(`${HEAD_START}[\\s\\S]*?${HEAD_END}`),
      `${HEAD_START}\n    ${head}\n    ${HEAD_END}`
    )
    .replace(
      new RegExp(`${NOSCRIPT_START}[\\s\\S]*?${NOSCRIPT_END}`),
      `${NOSCRIPT_START}${noscript}${NOSCRIPT_END}`
    )
}

let count = 0
for (const [path, meta] of Object.entries(routes)) {
  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`
  writeFileSync(join(dist, file), render(path, meta), 'utf-8')
  console.log(`[prerender] ${file.padEnd(16)} <- ${meta.title}`)
  count++
}

// 404 shell: noindex, still boots the SPA so client routing can recover.
const notFound = render('/', routes['/']).replace(
  /<meta name="robots" content="[^"]*" \/>/,
  '<meta name="robots" content="noindex, follow" />'
)
writeFileSync(join(dist, '404.html'), notFound, 'utf-8')

console.log(`[prerender] wrote ${count} route shells + 404.html`)
