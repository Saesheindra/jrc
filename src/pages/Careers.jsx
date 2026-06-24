import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../pages.css'

const jobs = [
  {
    id: 1,
    title: 'Sustainability Reporting and Advisory Intern',
    type: 'Internship',
    location: 'Kuala Lumpur',
    description: 'Gain hands-on experience in ESG reporting, sustainability consulting, and climate-related advisory projects.',
    responsibilities: ['Support ESG data analysis and sustainability report drafting', 'Assist in ESG research, benchmarking, and materiality assessments', 'Prepare presentations, reports, and meeting documentation'],
    requirements: ['Background in Environmental Science, Business, Journalism, or related fields', 'Strong English writing, research, and analytical skills', 'Proficiency in Microsoft Excel, Word, and PowerPoint']
  },
  {
    id: 2,
    title: 'Sustainability Consultant and Writer',
    type: 'Full-time',
    location: 'Kuala Lumpur',
    description: 'Work on sustainability reporting, ESG strategy, climate-related disclosures, and advisory projects for listed companies.',
    responsibilities: ['Develop ESG reports, policies, and climate-related disclosures', 'Conduct ESG gap analysis, benchmarking, and materiality assessments', 'Present ESG findings and strategies to Boards and senior management'],
    requirements: ['Experience in ESG consulting or sustainability reporting (2-5 years preferred)', 'Strong knowledge of ESG frameworks (GRI, IFRS S1 & S2, FTSE, etc.)', 'Excellent English writing, analytical, and communication skills']
  },
  {
    id: 3,
    title: 'Financial-Based Sustainability and Climate Risk Specialist',
    type: 'Full-time',
    location: 'Kuala Lumpur',
    description: 'Lead sustainability-related financial analysis, climate risk quantification, and IFRS S1 & S2 reporting engagements.',
    responsibilities: ['Build financial models and climate scenario analysis (NGFS, SSPs)', 'Quantify climate-related risks and translate into financial impact', 'Support IFRS S1 & S2 disclosures and client reporting deliverables'],
    requirements: ['Finance/Accounting/Economics background with 2-8 years experience', 'Strong financial modelling and corporate finance capability', 'Knowledge of IFRS S1 & S2 and climate risk frameworks']
  }
]


function Careers() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [expandedJob, setExpandedJob] = useState(null)

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
    <div className="page-careers">
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
              <Link to="/">About JRC</Link>
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
              <Link to="/careers" className="active">Careers</Link>
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
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>About JRC</Link>
          <Link to="/expertise" onClick={() => setMobileMenuOpen(false)}>Our Expertise</Link>
          <Link to="/our-team" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
          <Link to="/awards" onClick={() => setMobileMenuOpen(false)}>Awards & Recognitions</Link>
          <Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
        </nav>
      </div>

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Careers.</div>
          <h1>Shape the future of <em>sustainability.</em></h1>
          <p>Join Malaysia's leading ESG & Integrated Reporting consultancy and make an impact on corporate sustainability disclosure.</p>
        </div>
      </section>

      <section className="careers-section">
        <div className="container">
          <div className="sec-head rv">
            <div className="eyebrow">Open Positions.</div>
            <h2>Opportunities <em>available</em></h2>
          </div>
          <div className="jobs-list">
            {jobs.map((job) => (
              <div key={job.id} className="job-item rv" onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}>
                <div className="job-header">
                  <div>
                    <div className="job-title">{job.title}</div>
                    <div className="job-meta">
                      <span className="type">{job.type}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button className="job-toggle">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={expandedJob === job.id ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}/>
                    </svg>
                  </button>
                </div>
                {expandedJob === job.id && (
                  <div className="job-details">
                    <div>
                      <h4>Responsibilities</h4>
                      <ul>
                        {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4>Requirements</h4>
                      <ul>
                        {job.requirements.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                    <div className="job-apply">
                      <a href={`mailto:jr@jr.com.my?subject=Application: ${job.title}`} className="btn">Apply Now</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container rv">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>General Application.</div>
          <h2>No perfect match? <em>Reach out anyway.</em></h2>
          <p>We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.</p>
          <a className="email" href="mailto:jr@jr.com.my?subject=General Application - JRC Careers">jr@jr.com.my</a>
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
    </div>
  )
}

export default Careers
