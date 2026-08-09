import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'
import '../../pages.css'

function EsgMalaysiaGuide2026() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  return (
    <div className="page-blog-article">
      <div className="grain" aria-hidden="true"></div>
      <div className="rules" aria-hidden="true"></div>

      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="nav-wrap">
            <Link to="/" className="brand">
              <img src="/jrc-logo.png" alt="JRC" className="brand-logo" />
              <span className="brand-name">JOSHUA <span className="gold">RAYAN</span> COMMUNICATIONS</span>
            </Link>
            <nav className="links">
              <div className="nav-dd">
                <Link to="/expertise">Our Expertise <span className="dd-arrow">▲</span></Link>
                <div className="nav-dropdown">
                  <Link to="/expertise#workshop">Training</Link>
                  <Link to="/expertise#advisory">Guidance & Advisory</Link>
                  <Link to="/expertise#reporting">Report Writing</Link>
                </div>
              </div>
              <Link to="/awards">Awards & Recognitions</Link>
              <Link to="/events">Events</Link>
              <Link to="/blog" className="active">Blog</Link>
              <Link to="/podcasts">Podcast</Link>
              <Link to="/careers">Careers</Link>
              <button onClick={() => setContactOpen(true)} className="btn ghost">Contact Us</button>
            </nav>
            <button className="menu-btn" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`m-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <div className="m-menu-dropdown">
            <button
              className={`m-menu-toggle ${mobileExpertiseOpen ? 'open' : ''}`}
              onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
            >
              Our Expertise
              <span className="m-menu-arrow">▼</span>
            </button>
            <div className={`m-menu-subnav ${mobileExpertiseOpen ? 'open' : ''}`}>
              <Link to="/expertise#workshop" onClick={() => { setMobileMenuOpen(false); setMobileExpertiseOpen(false); }}>Training</Link>
              <Link to="/expertise#advisory" onClick={() => { setMobileMenuOpen(false); setMobileExpertiseOpen(false); }}>Guidance & Advisory</Link>
              <Link to="/expertise#reporting" onClick={() => { setMobileMenuOpen(false); setMobileExpertiseOpen(false); }}>Report Writing</Link>
            </div>
          </div>
          <Link to="/awards" onClick={() => setMobileMenuOpen(false)}>Awards & Recognitions</Link>
          <Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/podcasts" onClick={() => setMobileMenuOpen(false)}>Podcast</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
        </nav>
      </div>

      <article className="blog-article">
        <div className="container">
          <div className="article-header">
            <Link to="/blog" className="back-link">← Back to Blog</Link>
            <div className="article-meta">
              <span className="category">ESG Malaysia</span>
              <time dateTime="2026-08-01">August 2026</time>
              <span className="read-time">12 min read</span>
            </div>
            <h1>The Complete Guide to ESG Consulting in Malaysia: What Companies Need to Know in 2026</h1>
            <p className="article-intro">As Malaysia accelerates its sustainability agenda, ESG consulting has become essential for Bursa-listed companies. This comprehensive guide covers everything from regulatory requirements to choosing the right ESG consultant.</p>
          </div>

          <div className="article-content">
            <h2>Why ESG Matters for Malaysian Companies</h2>
            <p>Environmental, Social, and Governance (ESG) factors have moved from optional considerations to mandatory requirements for Malaysian businesses. With the Securities Commission Malaysia launching the National Sustainability Reporting Framework (NSRF) and Bursa Malaysia strengthening its sustainability disclosure requirements, companies can no longer afford to treat ESG as an afterthought.</p>

            <p>Malaysia stands out as the only ASEAN country to adopt IFRS Sustainability Disclosure Standards (IFRS S1 and IFRS S2) with limited transition relief. This positions Malaysian companies at the forefront of sustainability reporting in the region, but also creates urgent compliance needs.</p>

            <h2>Key ESG Regulations in Malaysia</h2>

            <h3>National Sustainability Reporting Framework (NSRF)</h3>
            <p>Launched in September 2024, the NSRF mandates that approximately 130 large Main Market issuers—representing over 80% of Bursa Malaysia's market capitalisation—report under IFRS S1 and IFRS S2 for financial years starting 1 January 2025. Key requirements include:</p>
            <ul>
              <li>Climate-related financial disclosures aligned with TCFD recommendations</li>
              <li>Scope 1, 2, and 3 greenhouse gas emissions reporting</li>
              <li>Climate scenario analysis and transition planning</li>
              <li>Governance structures for sustainability oversight</li>
            </ul>

            <h3>Bursa Malaysia Listing Requirements</h3>
            <p>The Main Market Listing Requirements (MMLR) require all listed issuers to include a Sustainability Statement in their annual reports, covering:</p>
            <ul>
              <li>Material sustainability matters and their management approach</li>
              <li>Governance structure for sustainability</li>
              <li>Scope of sustainability reporting</li>
              <li>Material sustainability risks and opportunities</li>
            </ul>

            <h2>What ESG Consultants Do</h2>
            <p>ESG consultants in Malaysia typically provide a range of services to help companies navigate the complex sustainability landscape:</p>

            <h3>1. Materiality Assessment</h3>
            <p>A double materiality assessment identifies ESG topics that are financially material to the organisation and topics where the organisation has significant environmental or social impacts. This forms the foundation of any sustainability strategy.</p>

            <h3>2. Climate Risk Assessment</h3>
            <p>Understanding physical and transition climate risks is now mandatory under IFRS S2. ESG consultants help companies identify, assess, and manage climate-related risks and opportunities across different time horizons and scenarios.</p>

            <h3>3. GHG Inventory Development</h3>
            <p>Accurate greenhouse gas accounting following the GHG Protocol is essential for credible climate disclosures. Consultants help establish measurement systems for Scope 1, 2, and increasingly Scope 3 emissions.</p>

            <h3>4. Sustainability Report Writing</h3>
            <p>Translating ESG data and strategy into compelling, compliant reports requires expertise in multiple frameworks including GRI Standards, IFRS Sustainability Standards, SASB, and local Bursa requirements.</p>

            <h3>5. IFRS S1 & S2 Training</h3>
            <p>With new reporting standards come new capability requirements. Licensed training providers help boards, management, and reporting teams understand and implement the new requirements.</p>

            <h2>Choosing the Right ESG Consultant in Malaysia</h2>
            <p>When selecting an ESG consulting firm, Malaysian companies should consider:</p>

            <h3>Track Record with Bursa-Listed Companies</h3>
            <p>Experience with Malaysian regulatory requirements and familiarity with Bursa Malaysia's expectations is crucial. Look for consultants who have delivered award-winning reports (NACRA, ARC Awards) for listed companies.</p>

            <h3>IFRS Licensing and Credentials</h3>
            <p>For IFRS S1 and S2 training, ensure your consultant is a licensed IFRS Training Partner. This ensures alignment with official implementation guidance from the IFRS Foundation.</p>

            <h3>Industry Experience</h3>
            <p>Different sectors face different ESG challenges. Oil & gas companies have different material topics than property developers or technology firms. Choose a consultant with relevant sector experience.</p>

            <h3>Integrated Approach</h3>
            <p>The best ESG outcomes come from consultants who understand how sustainability connects to strategy, governance, and financial performance—not just compliance checklists.</p>

            <h2>The Cost of Inaction</h2>
            <p>Companies that delay ESG implementation face multiple risks:</p>
            <ul>
              <li><strong>Regulatory penalties:</strong> Non-compliance with Bursa requirements can result in enforcement action</li>
              <li><strong>Investor exclusion:</strong> ESG-focused funds increasingly screen out poor performers</li>
              <li><strong>Reputational damage:</strong> Greenwashing allegations can destroy brand value</li>
              <li><strong>Competitive disadvantage:</strong> Customers and partners increasingly prefer sustainable suppliers</li>
            </ul>

            <h2>Getting Started with ESG in Malaysia</h2>
            <p>For companies beginning their ESG journey, we recommend a phased approach:</p>
            <ol>
              <li><strong>Baseline assessment:</strong> Understand your current ESG performance and gaps</li>
              <li><strong>Materiality assessment:</strong> Identify what matters most to your business and stakeholders</li>
              <li><strong>Strategy development:</strong> Set targets and roadmaps aligned with your business strategy</li>
              <li><strong>Implementation:</strong> Build systems, processes, and capabilities</li>
              <li><strong>Reporting:</strong> Disclose performance transparently and credibly</li>
              <li><strong>Assurance:</strong> Build confidence through independent verification</li>
            </ol>

            <div className="article-cta">
              <h3>Need Help with ESG Compliance?</h3>
              <p>Joshua Rayan Communications has helped Malaysia's leading listed companies navigate ESG requirements for over 20 years. Our clients consistently achieve top ESG ratings and award recognition.</p>
              <button onClick={() => setContactOpen(true)} className="btn">Get Expert Guidance</button>
            </div>
          </div>

          <div className="article-footer">
            <div className="author-info">
              <div className="author-details">
                <strong>Joshua Rayan Communications</strong>
                <p>Malaysia's leading ESG advisory and sustainability reporting firm, serving Bursa-listed companies across diverse industries.</p>
              </div>
            </div>
            <div className="share-links">
              <span>Share this article:</span>
              <a href="https://www.linkedin.com/company/joshua-rayan-communications/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </article>

      <section className="related-articles">
        <div className="container">
          <h2>Related Articles</h2>
          <div className="related-grid">
            <Link to="/blog/ifrs-s1-s2-malaysia-implementation" className="related-card">
              <span className="category">IFRS</span>
              <h3>IFRS S1 & S2 Implementation Guide for Malaysian Companies</h3>
            </Link>
            <Link to="/blog/bursa-sustainability-reporting-requirements" className="related-card">
              <span className="category">Compliance</span>
              <h3>Bursa Malaysia Sustainability Reporting Requirements Explained</h3>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-brand-link">
                <img src="/jrc-logo.png" alt="JRC" className="footer-logo" />
                <span className="footer-brand-name">JOSHUA <span className="gold">RAYAN</span> COMMUNICATIONS</span>
              </Link>
              <p>Malaysia's leading sustainability guidance and advisory firm, helping organisations strengthen governance, build internal capability, manage sustainability and climate risks and deliver credible disclosures.</p>
            </div>
            <div>
              <div className="footer-heading">Quick Links</div>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/expertise">Our Expertise</Link></li>
                <li><Link to="/awards">Awards & Recognitions</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/podcasts">Podcast</Link></li>
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
                <option value="ESG Consulting">ESG Consulting</option>
                <option value="IFRS Training">IFRS Training</option>
                <option value="Sustainability Reporting">Sustainability Reporting</option>
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

export default EsgMalaysiaGuide2026
