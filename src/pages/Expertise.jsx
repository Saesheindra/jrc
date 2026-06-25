import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../pages.css'

const expertiseAreas = [
  {
    id: 'ifrs',
    number: '01',
    kicker: 'Climate-Related Financial Disclosures.',
    title: 'IFRS S1 & IFRS S2',
    titleEm: 'Disclosure Readiness.',
    description: 'Comprehensive support for IFRS Sustainability Disclosure Standards implementation, including climate risk assessments, scenario analysis, and disclosure readiness.',
    services: [
      { title: 'IFRS S1 & IFRS S2 Gap Analysis', desc: 'Roadmap development for compliance readiness', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop' },
      { title: 'Physical Risk, Transition Risk, Climate Scenario Analysis and Mitigation Measures', desc: 'Comprehensive climate risk assessment covering physical and transition risks, scenario analysis using NGFS and SSP frameworks, and mitigation strategies', image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop' },
      { title: 'Financial Impact Modelling', desc: 'Climate-related financial projections', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
      { title: 'Board Training Workshops', desc: 'Climate governance capacity building', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' }
    ]
  },
  {
    id: 'ir',
    number: '02',
    kicker: 'Creating Sustainable Value.',
    title: 'Integrated Reporting',
    titleEm: 'Advisory.',
    description: 'End-to-end integrated reporting advisory connecting strategy, governance, performance, and prospects to create compelling value-creation narratives.',
    services: [
      { title: 'Integrated Thinking Workshops', desc: 'Leadership alignment on value creation', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop' },
      { title: 'Value Creation Model', desc: 'Visual representation of business model', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
      { title: 'Six Capitals Assessment', desc: 'Financial, manufactured, human, social, intellectual, natural', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop' },
      { title: 'Materiality Assessment', desc: 'Stakeholder-driven material topic identification', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop' },
      { title: 'Report Design & Development', desc: 'Compelling narrative and visual design', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop' },
      { title: 'IFRS S1 & IFRS S2 <IR> Training', desc: 'Licensed Integrated Reporting training programs', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop' }
    ]
  },
  {
    id: 'esg',
    number: '03',
    kicker: 'Capacity Development.',
    title: 'ESG Strategy, KPIs and',
    titleEm: 'Target Setting.',
    description: 'Comprehensive ESG strategy development, policy design, and KPI frameworks to drive sustainable business performance.',
    services: [
      { title: 'Double Materiality Assessments', desc: 'Identify and prioritize sustainability topics that matter most to your stakeholders and business. Align with CSRD requirements and enhance strategic decision-making through comprehensive impact and financial materiality analysis.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop' },
      { title: 'GHG Inventory and Carbon Accounting', desc: 'Comprehensive greenhouse gas inventory management and carbon accounting services. Track Scope 1, 2, and 3 emissions with precision and develop decarbonization roadmaps aligned with science-based targets.', image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&h=400&fit=crop' },
      { title: 'Labour & Human Rights Engagements', desc: 'Ensure ethical labour practices and human rights compliance across your value chain. Conduct due diligence assessments, stakeholder engagements, and develop policies aligned with UN Guiding Principles and international standards.', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop' },
      { title: 'ESG KPIs and Targets', desc: 'Develop measurable ESG key performance indicators aligned with global standards. Set science-based targets, create accountability frameworks, and track progress toward sustainable business transformation goals.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' }
    ]
  },
  {
    id: 'assessments',
    number: '04',
    kicker: 'Technical Expertise.',
    title: 'Specialised Sustainability',
    titleEm: 'Assessments.',
    description: 'Deep-dive technical assessments covering carbon accounting, biodiversity, human rights, and emerging sustainability challenges.',
    services: [
      { title: 'GHG Inventory', desc: 'Scope 1, 2 & 3 carbon accounting', image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&h=400&fit=crop' },
      { title: 'Double Materiality', desc: 'CSRD-aligned impact assessment', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop' },
      { title: 'Biodiversity & TNFD', desc: 'Nature-related risk assessment', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop' },
      { title: 'Human Rights Due Diligence', desc: 'Labour practices and supply chain', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop' },
      { title: 'Just Transition Planning', desc: 'Equitable decarbonisation strategies', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop' },
      { title: 'Supply Chain Assessment', desc: 'Value chain sustainability evaluation', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop' }
    ]
  }
]

const frameworks = [
  { name: 'IFRS S1 & S2', category: 'Disclosure Standards' },
  { name: 'GRI Standards', category: 'Reporting Framework' },
  { name: 'TCFD', category: 'Climate Disclosure' },
  { name: 'TNFD', category: 'Nature Disclosure' },
  { name: 'SASB', category: 'Industry Standards' },
  { name: 'FTSE4Good', category: 'ESG Rating' },
  { name: 'CDP', category: 'Environmental Disclosure' },
  { name: 'SBTi', category: 'Science-Based Targets' }
]

function Expertise() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
              <Link to="/">About JRC</Link>
              <div className="nav-dd">
                <Link to="/expertise" className="active">Our Expertise <span className="dd-arrow">▲</span></Link>
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
            <button className="menu-btn" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`m-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>About JRC</Link>
          <Link to="/expertise" onClick={() => setMobileMenuOpen(false)}>Our Expertise</Link>
          <Link to="/our-team" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
          <Link to="/awards" onClick={() => setMobileMenuOpen(false)}>Awards & Recognitions</Link>
          <Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
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

      {/* Expertise Sections */}
      {expertiseAreas.map((area) => (
        <section key={area.id} id={area.id} className="exp-section">
          <div className="container">
            <div className="exp-header rv">
              <div>
                <div className="eyebrow">{area.number} · {area.kicker}</div>
                <h2 className="exp-title">{area.title} <em>{area.titleEm}</em></h2>
                <p className="exp-desc">{area.description}</p>
              </div>
            </div>
            <div className={`exp-grid ${area.services.length === 4 ? 'exp-grid-4' : ''}`}>
              {area.services.map((service, i) => (
                <div key={i} className="exp-card rv">
                  <div className="exp-card-img">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  <div className="exp-card-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
                <option value="IFRS S1 & IFRS S2">IFRS S1 & IFRS S2</option>
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
    </div>
  )
}

export default Expertise
