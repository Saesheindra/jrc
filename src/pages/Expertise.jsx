import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../index.css'
import '../pages.css'

const reportingServices = [
  {
    title: 'Integrated Reports',
    description: 'Value-creation reporting to the <IR> framework — strategy, governance and the six capitals woven into one story.'
  },
  {
    title: 'Annual Reports',
    description: 'Compliance-ready annual reporting in line with the MMLRs, drafted with editorial craft from cover to index.'
  },
  {
    title: 'Sustainability Reports',
    description: 'GRI-, IFRS-, FTSE- and Bursa-aligned sustainability disclosures that are credible and assurance-ready.'
  },
  {
    title: 'Corporate Governance',
    description: 'Governance statements, policy reviews, board and committee charters, and governance frameworks aligned with best practice, regulatory expectations, and climate-related risks and opportunities.'
  },
  {
    title: 'Leadership Communications',
    description: 'Leadership narratives, including Chairman\'s Statements, CEO Messages and Management Discussion & Analysis, that communicate strategic direction, business performance and the factors driving enterprise value.'
  },
  {
    title: 'Bursa Compliance Content',
    description: 'Statutory and sustainability content aligned to Bursa Malaysia\'s Sustainability Reporting Guide (3rd Edition) and MMLRs.'
  }
]

const advisoryServices = [
  {
    title: 'ESG Strategy & Policy',
    description: 'Setting the direction, governance and policies — including 3–5 year sustainability roadmaps, and guiding the board and senior management through implementation.'
  },
  {
    title: 'Double Materiality Assessment',
    description: 'Running the impact and financial materiality lenses with your stakeholders to define what the report must cover.'
  },
  {
    title: 'GHG Inventory & Carbon Accounting',
    description: 'Scopes 1, 2 & 3 to the GHG Protocol — boundaries, emission factors and an evidence trail that holds up.'
  },
  {
    title: 'Climate Risk & Climate VaR',
    description: 'Physical climate risk assessment at the ground — we visit your sites to understand land, assets and surroundings — plus transition risk, IFRS S2 scenarios and Climate Value-at-Risk.'
  },
  {
    title: 'SMART KPIs & Target-Setting',
    description: 'Turning ambition into measurable, time-bound targets the board can govern and the market can track.'
  },
  {
    title: 'Life Cycle Assessment',
    description: 'Product and process LCA to understand impact hotspots and support credible environmental claims.'
  },
  {
    title: 'Labour & Human Rights',
    description: 'Assignments and assessments to address the social dimension — workforce, community and rights-based due diligence.'
  },
  {
    title: 'Supply Chain & Corruption Risk',
    description: 'Assessing supply chain and anti-corruption exposure in line with local laws and good governance expectations.'
  },
  {
    title: 'Assurance-Readiness',
    description: 'Getting data, controls and evidence in shape so external assurance is a confirmation, not a scramble.'
  },
  {
    title: 'Biodiversity & TNFD Assessment',
    description: 'Biodiversity and TNFD assessments that identify nature-related risks, opportunities and dependencies to support strategic planning and disclosure readiness.'
  }
]

const trainingServices = [
  {
    tag: 'S1 · S2',
    title: 'IFRS S1 and IFRS S2 Integrated Reporting',
    description: 'Foundations of the IFRS Sustainability Disclosure Standards and the <IR> framework — governance, strategy, risk and metrics, made practical.'
  },
  {
    tag: 'CRA',
    title: 'Climate Risk Assessment',
    description: 'Hands-on Climate Risk Assessment workshops aligned to the NSRF Climate-First approach — identifying physical and transition risks for your business.'
  },
  {
    tag: 'IFRS S2',
    title: 'Scenario Planning & Climate VaR',
    description: 'IFRS S2-aligned scenario analysis and Climate Value-at-Risk — quantifying what climate pathways mean for strategy and the balance sheet.'
  },
  {
    tag: 'GHG',
    title: 'Carbon Accounting & GHG Management',
    description: 'Building a defensible GHG inventory across Scopes 1, 2 & 3 to the GHG Protocol — boundaries, factors and data discipline.'
  },
  {
    tag: 'DMA',
    title: 'Materiality & Double Materiality',
    description: 'Facilitated single and double materiality assessments — running the stakeholder and impact lens that anchors the whole report.'
  },
  {
    tag: 'BOARD',
    title: 'Board & C-Suite ESG Briefings',
    description: 'Concise, strategic briefings that give directors the confidence to govern sustainability and challenge the numbers.'
  },
  {
    tag: 'DATA',
    title: 'Data-Owner Briefings',
    description: 'Getting the people who hold the data ready to collect it, evidence it and own it — so the numbers behind your report stand up.'
  },
  {
    tag: 'GRI',
    title: 'Framework Deep-Dives',
    description: 'Focused sessions on GRI, FTSE4Good, SASB and Bursa\'s Sustainability Reporting Guide for the teams who report against them.'
  },
  {
    tag: 'CUSTOM',
    title: 'Tailored In-House Programmes',
    description: 'Built around your industry, your maturity and your reporting calendar — public webinars through to multi-day in-house series.'
  }
]

function Expertise() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.title = 'Our Expertise - JRC | Joshua Rayan Communications'
  }, [])

  // Handle hash navigation
  useEffect(() => {
    const hash = location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
      { threshold: 0.1 }
    )
    document.querySelectorAll('.rv').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-expertise">
      <div className="grain" aria-hidden="true"></div>
      <div className="rules" aria-hidden="true"></div>

      {/* Header */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="nav-wrap">
            <Link to="/" className="brand">
              <img src="/jrc-logo.png" alt="JRC" className="brand-logo" />
              <span className="brand-name">JOSHUA <span className="gold">RAYAN</span> COMMUNICATIONS</span>
            </Link>
            <nav className="links">
              <div className="nav-dd">
                <Link to="/expertise" className="active">Our Expertise <span className="dd-arrow">▲</span></Link>
                <div className="nav-dropdown">
                  <Link to="/expertise#workshop">Training</Link>
                  <Link to="/expertise#advisory">Guidance & Advisory</Link>
                  <Link to="/expertise#reporting">Report Writing</Link>
                </div>
              </div>
              <Link to="/awards">Awards & Recognitions</Link>
              <Link to="/events">Events</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/podcasts">Podcasts</Link>
              <Link to="/careers">Careers</Link>
              <button onClick={() => setContactOpen(true)} className="btn ghost">Contact Us</button>
            </nav>
            <button className="menu-btn" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`m-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <Link to="/expertise" onClick={() => setMobileMenuOpen(false)}>Our Expertise</Link>
          <Link to="/awards" onClick={() => setMobileMenuOpen(false)}>Awards & Recognitions</Link>
          <Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/podcasts" onClick={() => setMobileMenuOpen(false)}>Podcasts</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
        </nav>
      </div>

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Our Expertise.</div>
          <h1>The full sustainability <em>spectrum.</em></h1>
          <p>A comprehensive range of ESG advisory, integrated reporting, and climate disclosure solutions for organisations across Malaysia, Indonesia, and Singapore.</p>
        </div>
      </section>

      {/* 01 - Training Section */}
      <section className="training-section" id="workshop">
        <div className="training-hero-inner">
          <div className="training-hero-bg"></div>
          <div className="container">
            <div className="training-hero-content rv">
              <div className="training-label">
                <span>01.</span> <span>JRC</span> / <span className="gold">TRAINING</span>
              </div>
              <h2>Workshops that build <em>capability</em> in your team.</h2>
              <p>We're an IFRS-licensed training partner based in Malaysia. We run sessions for boards, management and the people who handle the data — hands-on, and built so your team can do the work themselves afterwards.</p>
              <div className="training-buttons">
                <a href="mailto:jr@jr.com.my?subject=Training Session Inquiry" className="btn training-btn-gold">PLAN A SESSION</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Run Section */}
      <section className="what-we-run" id="what-we-run">
        <div className="container">
          <div className="what-we-run-header rv">
            <div className="what-we-run-label">
              <span className="label-line"></span>
              <span>WHAT WE RUN</span>
            </div>
            <h2>From the basics to <em>hands-on practice.</em></h2>
            <p>The people running these sessions are the same ones who write the reports, so the training reflects how the work is really done.</p>
          </div>
          <div className="training-grid rv">
            {trainingServices.map((service, i) => (
              <div key={i} className="training-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 - Advisory Section */}
      <section className="training-section" id="advisory">
        <div className="training-hero-inner">
          <div className="training-hero-bg"></div>
          <div className="container">
            <div className="training-hero-content rv">
              <div className="training-label">
                <span>02.</span> <span>JRC</span> / <span className="gold">GUIDANCE & ADVISORY</span>
              </div>
              <h2>ESG advice that <em>holds up</em> in the report.</h2>
              <p>We help listed companies decide what matters, measure it properly, and set targets they can defend. Because we also write the reports, the advice is built to stand up when the auditor and the rater assessors arrive.</p>
              <div className="training-buttons">
                <a href="mailto:jr@jr.com.my?subject=Advisory Inquiry" className="btn training-btn-gold">START A CONVERSATION</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Advise On Section */}
      <section className="what-we-run" id="what-we-advise">
        <div className="container">
          <div className="what-we-run-header rv">
            <div className="what-we-run-label">
              <span className="label-line"></span>
              <span>WHAT WE ADVISE ON</span>
            </div>
            <h2>The whole ESG programme, <em>joined up.</em></h2>
            <p>Strategy, measurement and targets — handled together, and always with the report in mind.</p>
          </div>
          <div className="training-grid rv">
            {advisoryServices.map((service, i) => (
              <div key={i} className="training-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - Report Writing Section */}
      <section className="training-section" id="reporting">
        <div className="training-hero-inner">
          <div className="training-hero-bg"></div>
          <div className="container">
            <div className="training-hero-content rv">
              <div className="training-label">
                <span>03.</span> <span>JRC</span> / <span className="gold">REPORT WRITING</span>
              </div>
              <h2>Reports that connect <em>strategy, governance & performance.</em></h2>
              <p>This is where JRC started. For 24 years we've written the integrated, annual, sustainability and corporate governance reports that listed companies are judged on — and many have gone on to win awards.</p>
              <div className="training-buttons">
                <a href="mailto:jr@jr.com.my?subject=Report Writing Inquiry" className="btn training-btn-gold">COMMISSION A REPORT</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Write Section */}
      <section className="what-we-run" id="what-we-write">
        <div className="container">
          <div className="what-we-run-header rv">
            <div className="what-we-run-label">
              <span className="label-line"></span>
              <span>WHAT WE WRITE</span>
            </div>
            <h2>Every report a listed company <em>has to get right.</em></h2>
          </div>
          <div className="training-grid rv">
            {reportingServices.map((service, i) => (
              <div key={i} className="training-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section">
        <div className="container rv">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Get Started.</div>
          <h2>Ready to elevate <em>your reporting?</em></h2>
          <p>Let's discuss how we can support your sustainability journey.</p>
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/expertise">Our Expertise</Link></li>
                <li><Link to="/awards">Awards & Recognitions</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/podcasts">Podcasts</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <div className="footer-heading">Our Expertise</div>
              <ul className="footer-links">
                <li><Link to="/expertise#workshop">Training</Link></li>
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
                <option value="General Inquiry">General Inquiry</option>
                <option value="Services">Services</option>
                <option value="Events">Events</option>
                <option value="Careers">Careers</option>
                <option value="Others">Others</option>
              </select>
              <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default Expertise
