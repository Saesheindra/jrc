import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../pages.css'

// Upcoming Events Data
const upcomingEvents = [
  {
    id: 1,
    date: { day: '15', month: 'Mar', year: '2026' },
    title: 'IFRS S1 & S2 Implementation Workshop',
    description: 'Comprehensive workshop on ISSB sustainability disclosure standards for listed companies. Learn practical approaches to climate risk assessment and scenario analysis.',
    type: 'Workshop',
    location: 'Kuala Lumpur',
    time: '9:00 AM - 5:00 PM',
    featured: true
  },
  {
    id: 2,
    date: { day: '22', month: 'Feb', year: '2026' },
    title: 'Climate Scenario Analysis Masterclass',
    description: 'Deep-dive into NGFS and SSP scenarios for climate risk assessment and disclosure.',
    type: 'Training',
    location: 'Virtual',
    time: '2:00 PM - 4:00 PM',
    featured: false
  },
  {
    id: 3,
    date: { day: '10', month: 'Jan', year: '2026' },
    title: 'ESG Strategy Development Seminar',
    description: 'Best practices in developing company-wide ESG strategies aligned with global frameworks.',
    type: 'Seminar',
    location: 'Kuala Lumpur',
    time: '9:00 AM - 1:00 PM',
    featured: false
  },
  {
    id: 4,
    date: { day: '05', month: 'Dec', year: '2025' },
    title: 'TCFD Reporting Workshop',
    description: 'Practical guidance on Task Force on Climate-related Financial Disclosures.',
    type: 'Workshop',
    location: 'Virtual',
    time: '10:00 AM - 12:00 PM',
    featured: false
  }
]

// Past Events / Workshop Gallery
const pastWorkshops = [
  { name: 'Zetrix AI Berhad', image: '/assets/ifrs/Zetrix MYEG Berhad.png', type: 'IFRS S1 Workshop' },
  { name: 'Matrix Concepts Holdings Berhad', image: '/assets/ifrs/Matrix Concepts Holdings Berhad.png', type: 'Climate Risk Assessment' },
  { name: 'Hengyuan Refining', image: '/assets/ifrs/Hengyuan Refining.png', type: 'IFRS S2 Training' },
  { name: 'LBS Bina Group Berhad', image: '/assets/ifrs/LBS Bina Group Berhad.png', type: 'ESG Strategy' },
  { name: 'Mah Sing Berhad', image: '/assets/ifrs/Mah Sing Berhad.png', type: 'Integrated Reporting' },
  { name: 'Sunway Construction Group Berhad', image: '/assets/ifrs/Sunway Construction Group Berhad.png', type: 'IFRS S1 Workshop' },
  { name: 'IOI Properties Group Berhad', image: '/assets/ifrs/IOI Properties Group Berhad.png', type: 'Climate Scenario Analysis' },
  { name: 'KPS Berhad', image: '/assets/ifrs/KPS Berhad.png', type: 'ESG KPIs Training' }
]

// CRA Clients
const craClients = [
  'Ajiya', 'Ann Joo', 'ANRB', 'Ayer', 'BATM', 'Berjaya Langkawi Resort',
  'CHGB', 'CHGP', 'Hengyuan Refining Company', 'Innoprise Plantations',
  'JAKS Resources', 'KPS Berhad', 'LBS Bina', 'Mah Sing', 'MMC Corp',
  'Muda Holdings', 'Paramount Corporation', 'Protasco', 'SAMEE',
  'Signature International', 'SkyWorld', 'Taliworks', 'Unitrade', 'VSTECS', 'Zetrix'
]

// Training Programs
const trainingPrograms = [
  {
    id: 'cra',
    number: '01',
    title: 'IFRS S2 Aligned Climate Risk Assessment',
    subtitle: 'CRA WORKSHOPS',
    description: 'Comprehensive climate risk assessment workshops aligned with IFRS S2 requirements, covering physical and transition risk identification, scenario analysis, and financial impact quantification.',
    clients: craClients.length
  },
  {
    id: 'ifrs',
    number: '02',
    title: 'IFRS S1 & Integrated Reporting',
    subtitle: 'SUSTAINABILITY DISCLOSURE',
    description: 'Master IFRS S1 sustainability disclosure standards and integrated reporting excellence. Our training programs prepare boards and management teams for the evolving reporting landscape.'
  },
  {
    id: 'esg',
    number: '03',
    title: 'ESG Strategy, KPIs & Target Setting',
    subtitle: 'STRATEGIC ADVISORY',
    description: 'Comprehensive ESG strategy development, policy design, and KPI frameworks to drive sustainable business performance across environmental, social, and governance dimensions.'
  }
]

const eventTypes = ['All', 'Workshops', 'Training', 'Seminars', 'Virtual']

function Events() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [currentSlide, setCurrentSlide] = useState(0)

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

  // Auto-slide for CRA clients
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % craClients.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const filteredEvents = activeFilter === 'All'
    ? upcomingEvents
    : upcomingEvents.filter(e => e.type === activeFilter || (activeFilter === 'Virtual' && e.location === 'Virtual'))

  const featuredEvent = upcomingEvents.find(e => e.featured)

  return (
    <div className="page-events-big4">
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
                <Link to="/expertise">Our Expertise <span className="dd-arrow">▲</span></Link>
                <div className="nav-dropdown">
                  <Link to="/expertise#workshop">Workshop & Training</Link>
                  <Link to="/expertise#advisory">Guidance & Advisory</Link>
                  <Link to="/expertise#reporting">Report Writing</Link>
                </div>
              </div>
              <Link to="/our-team">Our Team</Link>
              <Link to="/awards">Awards & Recognitions</Link>
              <Link to="/events" className="active">Events</Link>
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

      {/* Hero Section - Big 4 Style */}
      <section className="events-hero">
        <div className="container">
          <div className="events-hero-content">
            <div className="eyebrow">Events.</div>
            <h1>Workshops, Webcasts & <em>Collaboration.</em></h1>
            <p>Building capacity for better disclosure through hands-on training, expert-led workshops, and thought leadership sessions on sustainability reporting.</p>
          </div>
        </div>
        <div className="hero-accent"></div>
      </section>

      {/* No Upcoming Events */}
      <section className="no-events-section">
        <div className="container">
          <div className="no-events-content rv">
            <h2>No Upcoming <em>Events</em></h2>
            <p>We're currently preparing our next series of workshops and training sessions. Great things take time — and we're crafting experiences that deliver real value.</p>
            <p className="no-events-cta">Interested in a private workshop or corporate training? <a href="mailto:jr@jr.com.my">Get in touch</a> and let's design something tailored for your team.</p>
          </div>
        </div>
      </section>

      {/* Training Programs Overview */}
      <section className="programs-section">
        <div className="container">
          <div className="programs-header rv">
            <div className="eyebrow">Our Expertise.</div>
            <h2>Training <em>Programs</em></h2>
            <p>Comprehensive sustainability and reporting expertise delivered through hands-on workshops and training sessions.</p>
          </div>
          <div className="programs-grid">
            {trainingPrograms.map((program, i) => (
              <div key={program.id} className="program-card rv" style={{ animationDelay: `${i * 0.15}s` }}>
                <span className="program-number">{program.number}</span>
                <div className="program-subtitle">{program.subtitle}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                {program.clients && (
                  <div className="program-stat">
                    <span className="stat-number">{program.clients}+</span>
                    <span className="stat-label">Clients Trained</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the Room 2026 - Recent Sessions */}
      <section className="clients-showcase-minimal">
        <div className="container">
          <div className="showcase-split rv">
            <div className="showcase-text">
              <div className="in-room-label">In the room · 2026</div>
              <h2>Recent <em>sessions.</em></h2>
              <p className="showcase-desc">A look inside our 2026 workshops with listed companies — climate risk, IFRS, materiality and carbon, across the region.</p>
            </div>
            <div className="showcase-slider">
              <div className="slider-container">
                {craClients.map((client, i) => (
                  <div
                    key={client}
                    className={`slide ${i === currentSlide ? 'active' : ''}`}
                  >
                    <img src={`/assets/cra/${client}.png`} alt={client} />
                  </div>
                ))}
              </div>
              <div className="slider-caption">{craClients[currentSlide]}</div>
              <div className="slider-dots">
                {craClients.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Gallery - PwC Style */}
      <section className="past-events-section">
        <div className="container">
          <div className="past-events-header rv">
            <div className="eyebrow">What We've Done.</div>
            <h2>Past <em>Workshops</em></h2>
          </div>
          <div className="past-events-grid">
            {pastWorkshops.map((workshop, i) => (
              <div key={i} className="past-event-card rv" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="past-event-image">
                  <img src={workshop.image} alt={workshop.name} loading="lazy" />
                </div>
                <h4>{workshop.name}</h4>
                <span className="workshop-type-label">{workshop.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Collaborate - PwC Style */}
      <section className="collaborate-section">
        <div className="container">
          <div className="collaborate-content rv">
            <h2>Let's <em>Collaborate</em></h2>
            <p>We believe the best outcomes happen when bold ideas come together. Looking for customised training for your organisation?</p>
            <div className="collaborate-actions">
              <a href="mailto:jr@jr.com.my" className="collab-btn primary">Get In Touch</a>
              <Link to="/#contact" className="collab-btn secondary">View Contact Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="stay-updated-section">
        <div className="container">
          <div className="stay-updated-content rv">
            <div>
              <h3>Stay Updated</h3>
              <p>Get notified about upcoming workshops, webinars, and sustainability insights.</p>
            </div>
            <a href="mailto:jr@jr.com.my?subject=Subscribe to JRC Events" className="subscribe-btn">
              Subscribe to Updates
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
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
            <div>&copy; 2026 Joshua Rayan Communications. All rights reserved.</div>
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

export default Events
