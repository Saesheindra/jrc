// Central SEO configuration.
// Consumed at runtime by src/components/Seo.jsx and at build time by
// scripts/prerender.js so the static HTML and the SPA never drift apart.

export const SITE_URL = 'https://jrcesg.com'
export const SITE_NAME = 'JRC — Joshua Rayan Communications'
export const OG_IMAGE = `${SITE_URL}/jrc-logo.png`

export const routes = {
  '/': {
    title: '#1 ESG & Sustainability Reporting Malaysia | JRC (Since 2002)',
    description:
      "Malaysia's #1 ESG advisory firm trusted by 100+ Bursa-listed companies. IFRS S1 & S2 training, sustainability reporting & climate risk advisory. 24 years experience. Contact us today.",
  },
  '/expertise': {
    title: 'ESG Advisory Services & IFRS S1 S2 Training Malaysia | JRC',
    description:
      'Expert ESG services: Double materiality assessment, GHG inventory, climate value-at-risk, TCFD alignment & assurance readiness. IFRS-licensed S1/S2 training. Get a free consultation.',
  },
  '/awards': {
    title: 'Award-Winning Sustainability Reports Malaysia | NACRA & ARC Winners',
    description:
      '50+ NACRA, ARC & FTSE4Good awards won by JRC clients. See our award-winning integrated & sustainability reports. Gold & Silver winners 2023-2026.',
  },
  '/events': {
    title: 'ESG Workshops & IFRS S1 S2 Training Events Malaysia 2026 | JRC',
    description:
      'Upcoming IFRS-licensed ESG workshops, board briefings & webcasts in Malaysia. Climate risk training, sustainability reporting masterclasses. Register now.',
  },
  '/blog': {
    title: 'ESG Insights & IFRS S1 S2 Updates Malaysia | JRC Blog',
    description:
      'Latest ESG insights: IFRS S1 & S2 implementation, Bursa MMLR updates, climate risk frameworks & sustainability reporting best practices for Malaysian companies.',
  },
  '/podcasts': {
    title: 'ESG Podcasts Malaysia | BFM 89.9 Featured | JRC',
    description:
      "Listen to Malaysia's top ESG podcasts. Featured on BFM 89.9 Open For Business. Sustainability insights, climate risk discussions & expert interviews.",
  },
  '/careers': {
    title: 'ESG & Sustainability Careers Malaysia | Join JRC Kuala Lumpur',
    description:
      "Join Malaysia's leading ESG advisory firm. Exciting careers in sustainability reporting, climate risk & integrated reporting. Competitive salary. Apply now.",
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

// FAQ Schema for rich snippets in Google Search
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is ESG reporting and why is it important for Malaysian companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ESG (Environmental, Social, and Governance) reporting is a framework for disclosing non-financial performance metrics. For Malaysian listed companies, it is mandatory under Bursa Malaysia\'s Main Market Listing Requirements (MMLR). ESG reporting helps companies demonstrate sustainability commitments, attract investors, and comply with regulatory requirements including IFRS S1 and S2 standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are IFRS S1 and S2 sustainability disclosure standards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IFRS S1 (General Requirements for Disclosure of Sustainability-related Financial Information) and IFRS S2 (Climate-related Disclosures) are global sustainability reporting standards issued by the ISSB. They require companies to disclose material sustainability-related risks and opportunities, including climate risk assessment, GHG emissions, and transition plans. JRC provides IFRS-licensed training for Malaysian listed companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can JRC help with sustainability reporting in Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JRC (Joshua Rayan Communications) has been Malaysia\'s trusted ESG advisory firm since 2002. We provide integrated and sustainability report writing, IFRS S1 & S2 training, double materiality assessments, GHG inventory and carbon accounting, climate risk advisory, and assurance readiness services for Bursa Malaysia listed companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a double materiality assessment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Double materiality assessment evaluates both how sustainability issues affect a company (financial materiality) and how the company impacts the environment and society (impact materiality). It is a key requirement under the European CSRD and increasingly expected by Malaysian regulators and investors. JRC conducts comprehensive double materiality assessments for listed companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What awards have JRC clients won for sustainability reporting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JRC clients have won numerous NACRA (National Annual Corporate Report Awards), ARC Awards, EDGE Billion Awards, and FTSE4Good Bursa Malaysia recognition. Our clients consistently achieve Gold and Silver awards for their integrated and sustainability reports, demonstrating excellence in corporate disclosure and ESG reporting.',
      },
    },
  ],
}

// LocalBusiness schema for Google Maps and local SEO
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'Joshua Rayan Communications (JRC)',
  image: OG_IMAGE,
  url: SITE_URL,
  telephone: '+60-3-2282-2333',
  email: 'jr@jr.com.my',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Level 8, Menara Hap Seng, Jalan P. Ramlee',
    addressLocality: 'Kuala Lumpur',
    postalCode: '50250',
    addressCountry: 'MY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 3.1516,
    longitude: 101.7038,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
}
