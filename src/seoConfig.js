// Central SEO configuration.
// Consumed at runtime by src/components/Seo.jsx and at build time by
// scripts/prerender.js so the static HTML and the SPA never drift apart.

export const SITE_URL = 'https://jrcesg.com'
export const SITE_NAME = 'JRC — Joshua Rayan Communications'
export const OG_IMAGE = `${SITE_URL}/jrc-logo.png`

export const routes = {
  '/': {
    title: 'ESG & Sustainability Reporting Malaysia | JRC',
    description:
      "Malaysia's trusted ESG advisory firm. Integrated and sustainability reporting, IFRS S1 & S2 training and climate risk advisory for Bursa-listed companies.",
  },
  '/expertise': {
    title: 'ESG Advisory & IFRS S1 S2 Training Malaysia | JRC',
    description:
      'ESG strategy, double materiality, GHG inventory, climate value-at-risk and assurance readiness. IFRS S1 & S2 training for Malaysian listed companies.',
  },
  '/awards': {
    title: 'Award-Winning Sustainability Reports Malaysia | JRC',
    description:
      'JRC clients win NACRA, ARC and FTSE4Good Bursa Malaysia recognition. See the award-winning integrated and sustainability reports we have delivered.',
  },
  '/events': {
    title: 'ESG Workshops & IFRS Training Events Malaysia | JRC',
    description:
      'IFRS-licensed workshops, webcasts and board briefings on sustainability reporting and climate risk, run across Malaysia and Southeast Asia.',
  },
  '/blog': {
    title: 'ESG & Sustainability Reporting Insights | JRC Malaysia',
    description:
      'Analysis on IFRS S1 & S2, climate risk, Bursa MMLR and sustainability reporting for Malaysian listed companies, from JRC advisers.',
  },
  '/podcasts': {
    title: 'ESG Podcasts & Sustainability Conversations | JRC',
    description:
      "Conversations on sustainability, ESG reporting and climate risk in Malaysia — including JRC featured on BFM 89.9's Open For Business.",
  },
  '/careers': {
    title: 'Careers in ESG & Sustainability Reporting | JRC Malaysia',
    description:
      "Join Malaysia's leading sustainability reporting firm. Careers in ESG advisory, climate risk and integrated reporting, based in Kuala Lumpur.",
  },
}

export function getSeo(pathname) {
  const clean =
    pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return routes[clean] || routes['/']
}

export function canonicalFor(pathname) {
  const clean =
    pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return clean === '/' ? `${SITE_URL}/` : `${SITE_URL}${clean}`
}

// Sitewide Organization schema. Only facts verifiable from the site itself —
// no invented phone number or street address.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Joshua Rayan Communications',
  alternateName: 'JRC',
  url: SITE_URL,
  logo: OG_IMAGE,
  image: OG_IMAGE,
  email: 'jr@jr.com.my',
  description:
    "Malaysia's sustainability guidance and advisory firm, helping listed companies strengthen governance, build internal capability, manage climate risk and deliver credible disclosures.",
  foundingDate: '2002',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kuala Lumpur',
    addressCountry: 'MY',
  },
  areaServed: [
    { '@type': 'Country', name: 'Malaysia' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'Indonesia' },
  ],
  sameAs: ['https://www.linkedin.com/company/joshua-rayan-communications/'],
  knowsAbout: [
    'ESG reporting',
    'Sustainability reporting',
    'Integrated reporting',
    'IFRS S1',
    'IFRS S2',
    'Climate risk assessment',
    'GHG Protocol',
    'GRI Standards',
    'Bursa Malaysia MMLR',
    'FTSE4Good Bursa Malaysia',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ESG & Sustainability Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IFRS S1 & S2 and Integrated Reporting Training',
          description:
            'IFRS-licensed workshops equipping boards, management and reporting teams to meet evolving disclosure requirements.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ESG Guidance & Advisory',
          description:
            'ESG strategy, double materiality assessment, GHG inventory, climate value-at-risk, KPIs and assurance readiness.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sustainability Report Writing',
          description:
            'End-to-end development of integrated, annual, sustainability and corporate governance reports for listed companies.',
        },
      },
    ],
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-MY',
}
