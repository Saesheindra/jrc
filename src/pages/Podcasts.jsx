import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../pages.css'

const featuredPodcast = {
  title: 'The ESG Firm That Was 15 Years Early, Then Right On Time',
  show: 'Open For Business',
  description: 'Joshua Rayan discusses how JRC became a vanguard in sustainability advisory — established in 2007, long before ESG became a boardroom mandate.',
  host: 'Audrey Raj',
  guest: 'Joshua Rayan',
  guestTitle: 'CEO, Joshua Rayan Communications',
  duration: '29 min',
  date: 'May 2026',
  image: 'https://bfmcms.s3.ap-southeast-1.amazonaws.com/websiteimages/open-for-business/2026-05-19_the-esg-firm-that-was-15-years-early-then-right-on-time-time/website_e4ada47d-e2c7-43a2-acfe-97f1291fe65c.png',
  link: 'https://www.bfm.my/content/podcast/the-esg-firm-that-was-15-years-early-then-right-on-time',
  platform: 'BFM 89.9'
}

function Podcasts() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    document.title = 'Podcasts - JRC | Joshua Rayan Communications'
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
    <div className="page-podcasts">
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
              <Link to="/blog">Blog</Link>
              <Link to="/podcasts" className="active">Podcasts</Link>
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
          <Link to="/expertise" onClick={() => setMobileMenuOpen(false)}>Our Expertise</Link>
          <Link to="/awards" onClick={() => setMobileMenuOpen(false)}>Awards & Recognitions</Link>
          <Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/podcasts" onClick={() => setMobileMenuOpen(false)}>Podcasts</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
        </nav>
      </div>

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Podcasts.</div>
          <h1>Conversations on <em>sustainability.</em></h1>
          <p>Expert discussions on ESG strategy, climate disclosure, and the future of sustainable business.</p>
        </div>
      </section>

      {/* Featured Podcast - Minimalist Style */}
      <section className="podcast-min-section">
        <div className="container">
          <div className="podcast-min-card rv">
            <a
              href={featuredPodcast.link}
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-min-image"
            >
              <img src={featuredPodcast.image} alt={featuredPodcast.title} />
              <div className="podcast-play-overlay">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </a>

            <div className="podcast-min-content">
              <div className="podcast-min-meta">
                <span className="podcast-min-platform">{featuredPodcast.platform}</span>
                <span className="podcast-min-divider">|</span>
                <span className="podcast-min-show">{featuredPodcast.show}</span>
              </div>

              <h2 className="podcast-min-title">{featuredPodcast.title}</h2>

              <p className="podcast-min-desc">{featuredPodcast.description}</p>

              <div className="podcast-min-presenter">
                <span className="presenter-label">Featuring</span>
                <span className="presenter-name">{featuredPodcast.guest}</span>
                <span className="presenter-title">{featuredPodcast.guestTitle}</span>
              </div>

              <a
                href={featuredPodcast.link}
                target="_blank"
                rel="noopener noreferrer"
                className="podcast-min-link"
              >
                Listen here
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More Episodes */}
      <section className="podcast-more-min">
        <div className="container">
          <div className="podcast-more-inner rv">
            <h3>More episodes coming soon</h3>
            <p>Subscribe to get notified when new episodes are released.</p>
            <a href="mailto:jr@jr.com.my?subject=Podcast Updates - JRC" className="podcast-notify-link">
              Get notified
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
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
                <option value="Podcasts">Podcasts</option>
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

export default Podcasts
