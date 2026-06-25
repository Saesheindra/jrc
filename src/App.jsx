import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import ClientGlobe from './ClientGlobe'

// Data
const services = [
  {
    id: 'training',
    kicker: 'Capability Building.',
    title: 'Training',
    desc: 'IFRS-licensed workshops for boards, management and the people who handle the data.',
    items: [
      'IFRS S1 & IFRS S2',
      'Climate Risk Assessment & scenario planning',
      'Carbon, materiality & board briefings'
    ]
  },
  {
    id: 'advisory',
    kicker: 'Strategy to Data.',
    title: 'Advisory',
    desc: 'ESG advisory — what matters, the carbon numbers, the targets — all built for the report.',
    items: [
      'ESG strategy & double materiality',
      'GHG inventory & Climate Value-at-Risk',
      'KPIs, targets & assurance-readiness'
    ]
  },
  {
    id: 'reporting',
    kicker: 'Our Founding Craft.',
    title: 'Report Writing',
    desc: 'Integrated, annual, sustainability and corporate governance reports for listed companies — many of them award-winning.',
    items: [
      '<IR>, Annual & Sustainability reports',
      'MCCG & Bursa MMLR / SRG content',
      'GRI · IFRS · FTSE · SASB aligned'
    ]
  }
]

const frameworks = [
  { category: 'Reporting Standard', name: 'GRI', desc: 'Universal & Topic Standards for impact reporting' },
  { category: 'ISSB Disclosure', name: 'IFRS S1', desc: 'General sustainability-related financial disclosures' },
  { category: 'ISSB Disclosure', name: 'IFRS S2', desc: 'Climate-related disclosures & transition planning' },
  { category: 'Index & Rating', name: 'FTSE4Good', desc: 'ESG index inclusion — incl. 4-star Bursa ratings' },
  { category: 'Carbon Standard', name: 'GHG Protocol', desc: 'Corporate carbon accounting, Scopes 1, 2 & 3' },
  { category: 'Industry Metrics', name: 'SASB', desc: 'Industry-specific sustainability accounting' },
  { category: 'Value Creation', name: '<IR>', desc: 'Integrated Reporting framework' },
  { category: 'Capital Markets', name: 'Bursa SRG', desc: 'Bursa Malaysia SRG (3rd Edition) & MMLR' }
]

const awards = [
  {
    org: 'NACRA',
    year: '2022 — 2023',
    name: 'National Annual Corporate Report Awards',
    medals: [{ label: 'Platinum ×2', type: 'platinum' }, { label: 'Gold', type: 'gold' }],
    logo: '/assets/awards/logos/nacra-logo.png'
  },
  {
    org: 'The Edge',
    year: '2023',
    name: 'The Edge ESG Awards',
    medals: [{ label: 'Gold ×3', type: 'gold' }, { label: 'Silver ×3', type: 'silver' }],
    logo: '/assets/awards/logos/esg-logo.png'
  },
  {
    org: 'ARA',
    year: '2023 — 2025',
    name: 'Australasian Reporting Awards',
    medals: [{ label: 'Silver ×3', type: 'silver' }, { label: 'Bronze ×2', type: 'bronze' }],
    logo: '/assets/awards/logos/ara-logo.png'
  },
  {
    org: 'ASRA',
    year: '2024 / 2025',
    name: 'Asia Sustainability Reporting Awards',
    medals: [{ label: 'Platinum', type: 'platinum' }],
    logo: '/assets/awards/logos/asra-logo.png'
  }
]

const clients = [
  { name: 'Mah Sing', logo: '/assets/logos/Mah Sing.png' },
  { name: 'MMC Corporation', logo: '/assets/logos/MMC Corp.png' },
  { name: 'BAT Malaysia', logo: '/assets/logos/BATM.png' },
  { name: 'Berjaya', logo: '/assets/logos/berjaya.jpg' },
  { name: 'SkyWorld', logo: '/assets/logos/SkyWorld.png' },
  { name: 'Paramount', logo: '/assets/logos/Paramount Corporation.png' },
  { name: 'LBS Bina', logo: '/assets/logos/LBS Bina.png' },
  { name: 'Protasco', logo: '/assets/logos/Protasco.png' },
  { name: 'Ajiya', logo: '/assets/logos/Ajiya.png' },
  { name: 'Ancom Nylex', logo: '/assets/logos/ancom-nylex.webp' },
  { name: 'JAKS Resources', logo: '/assets/logos/JAKS Resources.png' },
  { name: 'Kimlun', logo: '/assets/logos/kimlun.webp' },
  { name: 'Hume Cement', logo: '/assets/logos/hume-cement.png' },
  { name: 'KPS Berhad', logo: '/assets/logos/KPS Berhad.png' },
  { name: 'Ann Joo', logo: '/assets/logos/Ann Joo.png' },
  { name: 'Ayer Holdings', logo: '/assets/logos/Ayer.png' },
  { name: 'Hengyuan', logo: '/assets/logos/Hengyuan Refining Company.png' },
  { name: 'Innoprise', logo: '/assets/logos/Innoprise Plantations.png' },
  { name: 'Muda Holdings', logo: '/assets/logos/Muda Holdings.png' },
  { name: 'Signature Intl', logo: '/assets/logos/Signature International.png' },
  { name: 'Taliworks', logo: '/assets/logos/Taliworks.png' },
  { name: 'VSTECS', logo: '/assets/logos/VSTECS.png' },
  { name: 'Zetrix', logo: '/assets/logos/Zetrix.png' },
  { name: 'Apollo', logo: '/assets/logos/apollo.png' }
]

const team = [
  {
    name: 'Joshua Rayan',
    role: 'Founder & Principal Consultant',
    bio: 'Founder of JRC and an ESG consultant to large and mid-cap public listed companies. A certified GRI Sustainability Reporting Specialist and IIRC-certified <IR> Practitioner.',
    image: '/assets/team/joshua.jpg'
  },
  {
    name: 'Ng Tse Mei',
    role: 'Corporate Reporting & Sustainability',
    bio: 'A corporate report writer and sustainability consultant with a portfolio of 120+ corporate reports for listed companies and government agencies.',
    image: '/assets/team/tsemei.jpg'
  },
  {
    name: 'Jordan Raj',
    role: 'Reporting & Sustainability Consultant',
    bio: 'A specialist in corporate and sustainability reporting working across GRI, SASB, IFRS S1 & S2, FTSE4Good and Bursa Malaysia frameworks.',
    image: '/assets/team/jordan.jpg'
  },
  {
    name: 'Liz Chai',
    role: 'Climate Risk & Sustainability',
    bio: 'GARP-certified Sustainability & Climate Risk (SCR) professional specialising in physical and transition climate-risk assessment.',
    image: '/assets/team/liz.jpg'
  }
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const heroRef = useRef(null)

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.scrollY / scrollHeight) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.rv').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Service row mouse tracking for radial gradient
  useEffect(() => {
    const rows = document.querySelectorAll('.svc-row')
    rows.forEach(row => {
      row.addEventListener('mousemove', (e) => {
        const rect = row.getBoundingClientRect()
        row.style.setProperty('--mx', `${e.clientX - rect.left}px`)
        row.style.setProperty('--my', `${e.clientY - rect.top}px`)
      })
    })
  }, [])

  return (
    <>
      {/* Film Grain */}
      <div className="grain" aria-hidden="true"></div>

      {/* Editorial Rules */}
      <div className="rules" aria-hidden="true"></div>

      {/* Header */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="scrollbar" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <div className="container">
          <div className="nav-wrap">
            <Link to="/" className="brand">
              <img src="/jrc-logo.png" alt="JRC" className="brand-logo" />
              <span className="brand-name">JOSHUA <span className="gold">RAYAN</span> COMMUNICATIONS</span>
            </Link>
            <nav className="links">
              <a href="#about">About JRC</a>
              <div className="nav-dd">
                <Link to="/expertise">Our Expertise <span className="dd-arrow">▲</span></Link>
                <div className="nav-dropdown">
                  <Link to="/expertise#workshop">Workshop & Training</Link>
                  <Link to="/expertise#advisory">Guidance & Advisory</Link>
                  <Link to="/expertise#reporting">Report Writing</Link>
                </div>
              </div>
              <Link to="/our-team">Our Team</Link>
              <Link to="/awards">Awards & Recognitions</Link>
              <Link to="/events">Events</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/careers">Careers</Link>
              <button onClick={() => setContactOpen(true)} className="btn ghost">Contact Us</button>
            </nav>
            <button
              className="menu-btn"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`m-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About JRC</a>
          <Link to="/expertise" onClick={() => setMobileMenuOpen(false)}>Our Expertise</Link>
          <Link to="/our-team" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
          <Link to="/awards" onClick={() => setMobileMenuOpen(false)}>Awards & Recognitions</Link>
          <Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
        </nav>
        <div className="m-contact">
          <span className="mk">Email</span>
          <a href="mailto:jr@jr.com.my">jr@jr.com.my</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="container">
          <div className="inner">
            <div className="eyebrow">Integrated & Sustainability Reporting Specialists.</div>
            <h1>
              <span className="line"><span>The sustainability guidance and</span></span>
              <span className="line"><span>advisory partner</span></span>
              <span className="line"><span><em>trusted</em> by leading listed companies.</span></span>
            </h1>
            <p className="lede">
              For 24 years, we've supported listed companies and government agencies across the region at every stage of the reporting journey—as advisers, trainers, and reporting specialists.
            </p>
            <div className="cta-row">
              <a href="mailto:jr@jr.com.my" className="btn">Start a conversation</a>
              <a href="#services" className="btn ghost">Explore our services</a>
            </div>
            <div className="cred-row">
              <div className="cred">
                <b><span className="num">24-year</span> track record</b>
                <span>Serving listed companies across Asia and beyond, from our Kuala Lumpur base</span>
              </div>
              <a href="https://www.ifrs.org/products-and-services/sustainability-products-and-services/training-programme/#directory" target="_blank" rel="noopener noreferrer" className="cred cred-link">
                <b><span className="num">ISSB</span> Training Partner</b>
                <span>Accredited to deliver official IFRS Sustainability training — see the directory ↗</span>
              </a>
              <div className="cred">
                <b><span className="num">IFRS</span> Sustainability Alliance</b>
                <span>Member, collaborating directly with the IFRS Foundation</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
        </div>
      </section>

      {/* Ticker Band */}
      <div className="ticker-band" role="marquee" aria-label="Client awards: NACRA Platinum and Gold, The Edge ESG Awards, Australasian Reporting Awards, Asia Sustainability Reporting Awards, FTSE4Good 4-star reports">
        <div className="ticker">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              <span>NACRA PLATINUM · 2022 & 2023</span>
              <span className="sep">◆</span>
              <span>NACRA GOLD · 2023</span>
              <span className="sep">◆</span>
              <span>THE EDGE ESG AWARDS · 3× GOLD · 3× SILVER · 2023</span>
              <span className="sep">◆</span>
              <span>AUSTRALASIAN REPORTING AWARDS · 2023</span>
              <span className="sep">◆</span>
              <span>ASIA SUSTAINABILITY REPORTING AWARDS · 2023</span>
              <span className="sep">◆</span>
              <span>FTSE4GOOD · 4-STAR REPORTS</span>
              <span className="sep">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="sec-head rv">
            <div className="eyebrow">01 · Who we are.</div>
            <h2>Fifteen years early on ESG — <em>then right on time.</em></h2>
          </div>
          <div className="about-grid">
            <div className="rv d1">
              <p>JRC has played a key role in the successful adoption of integrated reporting by many of the region's leading public-listed organisations — long before sustainability disclosure became a boardroom mandate.</p>
              <p>Our diverse client base spans oil & gas, property development, REITs, construction, aviation, energy, utilities, water, finance, retail and technology — including large conglomerates operating both in Malaysia and internationally.</p>
              <p>As a licensed IFRS Training Partner and a member of the IFRS Sustainability Alliance, JRC works at the frontier of IFRS S1 & IFRS S2 implementation — and maintains regular engagement with Bursa Malaysia and SIDC to advance reporting standards for PLCs.</p>
            </div>
            <div className="stat-grid rv d2">
              <div className="stat">
                <div className="n"><span>24</span></div>
                <div className="l">Years of corporate reporting experience</div>
              </div>
              <div className="stat">
                <div className="n"><span>80</span><span className="suf">+</span></div>
                <div className="l">Listed companies & organisations served</div>
              </div>
              <div className="stat">
                <div className="n"><span>3</span></div>
                <div className="l">Markets — Malaysia, Indonesia & Singapore</div>
              </div>
              <div className="stat">
                <div className="n"><span>200</span><span className="suf">+</span></div>
                <div className="l">Reports published — IAR, AR & SR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="sec-head rv">
            <div className="eyebrow">02 · What we do.</div>
            <h2>One Partner across the <em>full reporting cycle.</em></h2>
            <p>From capacity building to strategic guidance and reporting delivery, we support every stage of the reporting journey.</p>
          </div>
          <div className="svc-grid">
            {services.map((svc, i) => (
              <div key={svc.id} className={`svc-card rv d${i + 1}`}>
                <div className="svc-kicker">{svc.kicker}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <ul>
                  {svc.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="svc-cta rv">
            <Link to="/expertise" className="btn">Explore our services</Link>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section id="frameworks" className="fw">
        <div className="container">
          <div className="sec-head rv">
            <div className="eyebrow">03 · Standards & frameworks.</div>
            <h2>Fluent in every framework <em>that matters.</em></h2>
            <p>From sustainability frameworks to corporate reporting requirements, we work across the full disclosure landscape—so your reporting speaks the language your stakeholders expect.</p>
          </div>
          <div className="fw-grid">
            {frameworks.map((fw, i) => (
              <div key={fw.name} className={`fwc rv d${(i % 4) + 1}`}>
                <div className="fw-category">{fw.category}</div>
                <div className="fw-name">{fw.name}</div>
                <div className="fw-desc">{fw.desc}</div>
              </div>
            ))}
          </div>
          <div className="svc-cta rv">
            <Link to="/expertise" className="btn">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="clients">
        <div className="container">
          <div className="sec-head rv" style={{ textAlign: 'center', margin: '0 auto 50px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>04 · Who we serve.</div>
            <h2>One firm. <em>Every industry.</em></h2>
            <p>A selection of the 80+ listed companies and organisations we've partnered with — across O&G, property, REITs, construction, aviation, energy, utilities, water, finance, retail and technology.</p>
          </div>
        </div>
        <ClientGlobe />
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container rv">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>05 · Get in touch.</div>
          <h2>Ready to elevate <em>your next report?</em></h2>
          <p>Whether you're preparing for IFRS S1 & IFRS S2, improving ESG performance, or embarking on your first Integrated Report, we'd love to explore how we can help.</p>
          <a className="email" href="mailto:jr@jr.com.my">jr@jr.com.my</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-brand-link">
                <img src="/jrc-logo.png" alt="JRC" className="footer-logo" />
                <span className="footer-brand-name">JOSHUA <span className="gold">RAYAN</span> COMMUNICATIONS</span>
              </Link>
              <p>Malaysia's leading sustainability guidance and advisory firm, helping organisations strengthen governance, build internal capability, manage sustainability and climate risks, and deliver credible disclosures.</p>
            </div>
            <div>
              <div className="footer-heading">Quick Links</div>
              <ul className="footer-links">
                <li><Link to="/">About JRC</Link></li>
                <li><Link to="/expertise">Our Expertise</Link></li>
                <li><Link to="/our-team">Our Team</Link></li>
                <li><Link to="/awards">Awards & Recognitions</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <div className="footer-heading">Our Expertise</div>
              <ul className="footer-links">
                <li><Link to="/expertise#workshop">Workshop & Training</Link></li>
                <li><Link to="/expertise#advisory">Guidance & Advisory</Link></li>
                <li><Link to="/expertise#reporting">Report Writing</Link></li>
              </ul>
            </div>
            <div>
              <div className="footer-heading">Contact Us</div>
              <div className="footer-social">
                <a href="mailto:jr@jr.com.my" aria-label="Email us">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/joshua-rayan-communications/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2026 Joshua Rayan Communications. All rights reserved.</div>
            <div>IFRS Sustainability Alliance Member · IFRS Licensed Training Partner</div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {contactOpen && (
        <div className="modal-overlay" onClick={() => setContactOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setContactOpen(false)}>×</button>
            <h2>Get in Touch</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const company = formData.get('company');
                const subject = formData.get('subject');
                const message = formData.get('message');
                const subjectLine = `Website Inquiry: ${subject}`;
                const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone || 'Not provided'}%0D%0ACompany: ${company || 'Not provided'}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                window.location.href = `mailto:jr@jr.com.my?subject=${encodeURIComponent(subjectLine)}&body=${body}`;
                setContactOpen(false);
              }}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-row">
                <input type="tel" name="phone" placeholder="Phone Number" />
                <input type="text" name="company" placeholder="Company Name" />
              </div>
              <select name="subject" required>
                <option value="">Select Subject</option>
                <option value="IFRS S1/S2">IFRS S1/S2</option>
                <option value="Integrated Reporting">Integrated Reporting</option>
                <option value="ESG Strategy">ESG Strategy</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default App
