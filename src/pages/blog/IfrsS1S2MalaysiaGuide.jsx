import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'
import '../../pages.css'

function IfrsS1S2MalaysiaGuide() {
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
              <span className="category">IFRS Standards</span>
              <time dateTime="2026-07-15">July 2026</time>
              <span className="read-time">15 min read</span>
            </div>
            <h1>IFRS S1 and S2 Implementation in Malaysia: A Practical Guide for Listed Companies</h1>
            <p className="article-intro">Malaysia has adopted IFRS Sustainability Disclosure Standards as the baseline for corporate sustainability reporting. Here's what finance leaders and sustainability practitioners need to know about IFRS S1 and IFRS S2 compliance.</p>
          </div>

          <div className="article-content">
            <h2>Understanding IFRS S1 and IFRS S2</h2>
            <p>The International Sustainability Standards Board (ISSB) issued two inaugural standards in June 2023 that have since become the global baseline for sustainability-related financial disclosures:</p>

            <ul>
              <li><strong>IFRS S1 General Requirements:</strong> Requires companies to disclose information about sustainability-related risks and opportunities that could reasonably be expected to affect the entity's cash flows, access to finance, or cost of capital over the short, medium, or long term.</li>
              <li><strong>IFRS S2 Climate-related Disclosures:</strong> Specific requirements for climate-related risks and opportunities, building on the TCFD framework with enhanced metrics and transition planning requirements.</li>
            </ul>

            <h2>Malaysia's Adoption Timeline</h2>
            <p>Through the National Sustainability Reporting Framework (NSRF), Malaysia has established a phased implementation approach:</p>

            <table className="data-table">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Companies</th>
                  <th>Financial Years From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Phase 1</td>
                  <td>~130 Large Main Market issuers (top 80% market cap)</td>
                  <td>1 January 2025</td>
                </tr>
                <tr>
                  <td>Phase 2</td>
                  <td>Remaining Main Market issuers</td>
                  <td>1 January 2026</td>
                </tr>
                <tr>
                  <td>Phase 3</td>
                  <td>ACE Market issuers</td>
                  <td>1 January 2027</td>
                </tr>
              </tbody>
            </table>

            <h2>Key Requirements Under IFRS S1</h2>

            <h3>Governance Disclosures</h3>
            <p>Companies must describe:</p>
            <ul>
              <li>The governance body(s) responsible for oversight of sustainability-related risks and opportunities</li>
              <li>Management's role in governance processes</li>
              <li>How sustainability considerations are factored into strategy, decision-making, and remuneration</li>
            </ul>

            <h3>Strategy Disclosures</h3>
            <p>Disclose how sustainability-related risks and opportunities could affect:</p>
            <ul>
              <li>Business model and value chain</li>
              <li>Strategy and decision-making</li>
              <li>Financial position, financial performance, and cash flows</li>
              <li>Strategy resilience under different scenarios</li>
            </ul>

            <h3>Risk Management Disclosures</h3>
            <p>Explain the processes used to identify, assess, prioritise, and monitor sustainability-related risks and opportunities, including integration with overall risk management.</p>

            <h3>Metrics and Targets</h3>
            <p>Disclose metrics used to measure and manage sustainability-related risks and opportunities, including progress against any targets set.</p>

            <h2>Key Requirements Under IFRS S2 (Climate)</h2>

            <h3>Scope 1, 2, and 3 GHG Emissions</h3>
            <p>Companies must disclose greenhouse gas emissions in accordance with the GHG Protocol:</p>
            <ul>
              <li><strong>Scope 1:</strong> Direct emissions from owned or controlled sources</li>
              <li><strong>Scope 2:</strong> Indirect emissions from purchased electricity, steam, heating, and cooling</li>
              <li><strong>Scope 3:</strong> All other indirect emissions in the value chain (with transition relief available)</li>
            </ul>

            <h3>Climate Scenario Analysis</h3>
            <p>Assess resilience of strategy using climate-related scenario analysis, considering at least two scenarios including a 1.5°C or 2°C scenario.</p>

            <h3>Transition Plans</h3>
            <p>If the company has a transition plan, disclose targets, actions, resources allocated, and progress against the plan.</p>

            <h3>Climate-related Metrics</h3>
            <p>Industry-specific metrics as applicable, including:</p>
            <ul>
              <li>Amount and percentage of assets or business activities vulnerable to physical risks</li>
              <li>Amount and percentage of assets or business activities aligned with climate-related opportunities</li>
              <li>Internal carbon prices used in decision-making</li>
              <li>Climate-related remuneration factors</li>
            </ul>

            <h2>Transition Relief for Malaysian Companies</h2>
            <p>Malaysia has adopted the ISSB Standards with limited transition relief, including:</p>
            <ul>
              <li><strong>Scope 3 emissions:</strong> First year relief from Scope 3 disclosure</li>
              <li><strong>Comparative information:</strong> Not required in the first year of application</li>
              <li><strong>Timing:</strong> Sustainability disclosures can be published within existing annual report timeline</li>
            </ul>

            <h2>Common Implementation Challenges</h2>

            <h3>1. Data Availability and Quality</h3>
            <p>Many companies lack systems to collect sustainability data with the same rigour as financial data. Building robust data collection processes takes time and investment.</p>

            <h3>2. Scope 3 Emissions Complexity</h3>
            <p>Measuring value chain emissions requires engagement with suppliers and customers who may not track their own emissions. This is often the most challenging aspect of climate disclosure.</p>

            <h3>3. Scenario Analysis Expertise</h3>
            <p>Climate scenario analysis requires understanding of climate science, economic modelling, and sector-specific impacts. Most companies need external support for robust analysis.</p>

            <h3>4. Integration with Financial Reporting</h3>
            <p>IFRS S1 and S2 are designed to connect with financial statements. This requires collaboration between sustainability and finance teams that may not have worked closely together.</p>

            <h3>5. Board and Management Capability</h3>
            <p>Governance disclosures require boards and management to demonstrate genuine oversight and competence in sustainability matters.</p>

            <h2>How JRC Helps with IFRS S1 & S2 Implementation</h2>
            <p>As a licensed IFRS Training Partner and member of the IFRS Sustainability Alliance, Joshua Rayan Communications provides:</p>

            <h3>IFRS S1 & S2 Training Workshops</h3>
            <p>Board briefings and management workshops that build understanding of the new requirements, delivered by practitioners actively involved in regulatory engagement with Bursa Malaysia and SIDC.</p>

            <h3>Gap Analysis and Roadmap Development</h3>
            <p>Assessment of current disclosures against IFRS S1 and S2 requirements, with a practical implementation roadmap.</p>

            <h3>Climate Risk Assessment</h3>
            <p>Facilitated workshops to identify physical and transition climate risks, develop scenarios, and assess strategic resilience.</p>

            <h3>Report Writing and Disclosure Support</h3>
            <p>End-to-end support for developing compliant sustainability disclosures that tell a compelling story while meeting regulatory requirements.</p>

            <div className="article-cta">
              <h3>Ready to Implement IFRS S1 & S2?</h3>
              <p>JRC has delivered IFRS S1 & S2 training and implementation support to some of Malaysia's largest listed companies. Contact us for a consultation on your compliance journey.</p>
              <button onClick={() => setContactOpen(true)} className="btn">Book a Consultation</button>
            </div>
          </div>

          <div className="article-footer">
            <div className="author-info">
              <div className="author-details">
                <strong>Joshua Rayan Communications</strong>
                <p>Licensed IFRS Training Partner and member of the IFRS Sustainability Alliance, providing IFRS S1 & S2 training and implementation support across Malaysia and Southeast Asia.</p>
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
            <Link to="/blog/esg-consulting-malaysia-guide" className="related-card">
              <span className="category">ESG Malaysia</span>
              <h3>The Complete Guide to ESG Consulting in Malaysia</h3>
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
                <option value="IFRS Training">IFRS S1 & S2 Training</option>
                <option value="Climate Risk Assessment">Climate Risk Assessment</option>
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

export default IfrsS1S2MalaysiaGuide
