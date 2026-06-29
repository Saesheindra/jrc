import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../pages.css'

const awardsData = {
  nacra: {
    title: 'NACRA\u00A0\u00A0Awards',
    subtitle: 'National Annual Corporate Report Awards',
    years: {
      2025: [
        { image: '/assets/awards/nacra-2025/Gold.png', tier: 'gold' },
        { image: '/assets/awards/nacra-2025/Silver.png', tier: 'silver' }
      ],
      2024: [
        { image: '/assets/awards/nacra-2024/Platinum.png', tier: 'platinum' },
        { image: '/assets/awards/nacra-2024/Platinum 2.png', tier: 'platinum' },
        { image: '/assets/awards/nacra-2024/Gold.png', tier: 'gold' },
        { image: '/assets/awards/nacra-2024/Gold 2.png', tier: 'gold' },
        { image: '/assets/awards/nacra-2024/Gold 3.png', tier: 'gold' }
      ],
      2023: [
        { image: '/assets/awards/nacra-2023/Platinum.png', tier: 'platinum' },
        { image: '/assets/awards/nacra-2023/Gold.png', tier: 'gold' },
        { image: '/assets/awards/nacra-2023/Gold (2).png', tier: 'gold' },
        { image: '/assets/awards/nacra-2023/Silver.png', tier: 'silver' },
        { image: '/assets/awards/nacra-2023/Silver 2.png', tier: 'silver' }
      ],
      2022: [
        { image: '/assets/awards/nacra-2022/Platinum.png', tier: 'platinum' },
        { image: '/assets/awards/nacra-2022/Platinum 2.png', tier: 'platinum' },
        { image: '/assets/awards/nacra-2022/Gold.png', tier: 'gold' }
      ]
    }
  },
  edge: {
    title: 'The Edge ESG Awards',
    subtitle: 'Excellence in ESG Reporting',
    years: {
      2025: [
        { image: '/assets/awards/the-edge-2025/GOLD.png', tier: 'gold' },
        { image: '/assets/awards/the-edge-2025/GOLD 2.png', tier: 'gold' },
        { image: '/assets/awards/the-edge-2025/GOLD 3.png', tier: 'gold' }
      ],
      2024: [
        { image: '/assets/awards/the-edge-2024/GOLD.png', tier: 'gold' },
        { image: '/assets/awards/the-edge-2024/GOLD 2.png', tier: 'gold' },
        { image: '/assets/awards/the-edge-2024/GOLD 3.png', tier: 'gold' }
      ],
      2023: [
        { image: '/assets/awards/the-edge-2023/GOLD.png', tier: 'gold' },
        { image: '/assets/awards/the-edge-2023/GOLD 2.png', tier: 'gold' },
        { image: '/assets/awards/the-edge-2023/SILVER.png', tier: 'silver' }
      ]
    }
  },
  ara: {
    title: 'Australasian Reporting Awards',
    subtitle: 'International Recognition for Reporting Excellence',
    years: {
      2025: [
        { image: '/assets/awards/ara/2025 SILVER.png', tier: 'silver' }
      ],
      2024: [
        { image: '/assets/awards/ara/2024 SILVER.png', tier: 'silver' }
      ],
      2023: [
        { image: '/assets/awards/ara/2023 SILVER.png', tier: 'silver' }
      ]
    }
  },
  asra: {
    title: 'ASRA Awards',
    subtitle: 'Asia Sustainability Reporting Awards',
    images: [
      { image: '/assets/awards/asra/Screenshot 2026-03-26 230248.png' }
    ]
  }
}

const ftse4goodImages = [
  '/assets/awards/ftse4good/Screenshot 2026-03-26 230503.png',
  '/assets/awards/ftse4good/Screenshot 2026-03-26 230508.png',
  '/assets/awards/ftse4good/Screenshot 2026-03-26 230515.png',
  '/assets/awards/ftse4good/Screenshot 2026-03-26 230521.png',
  '/assets/awards/ftse4good/Screenshot 2026-03-26 230527.png',
  '/assets/awards/ftse4good/Screenshot 2026-03-26 230542.png',
  '/assets/awards/ftse4good/Screenshot 2026-03-26 230547.png',
  '/assets/awards/ftse4good/Screenshot 2026-03-26 230554.png',
  '/assets/awards/ftse4good/Screenshot 2026-03-26 230600.png',
  '/assets/awards/ftse4good/Screenshot 2026-03-26 230604.png'
]

const f4gbmImages = [
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230722.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230727.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230737.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230742.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230748.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230754.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230758.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230808.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230812.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230817.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230823.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230828.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230832.png',
  '/assets/awards/f4gbm/Screenshot 2026-03-26 230837.png'
]

const awardsOverview = [
  {
    org: 'NACRA',
    year: '2022 — 2025',
    name: 'National Annual Corporate Report Awards',
    medals: [{ label: 'Platinum ×5', type: 'platinum' }, { label: 'Gold ×7', type: 'gold' }, { label: 'Silver ×3', type: 'silver' }],
    logo: '/assets/awards/logos/nacra-logo.png',
    winners: ['Mah Sing Group', 'MMC Corporation', 'Paramount Corporation', 'LBS Bina', 'SkyWorld Development']
  },
  {
    org: 'The Edge',
    year: '2023 — 2025',
    name: 'The Edge ESG Awards',
    medals: [{ label: 'Gold ×9', type: 'gold' }, { label: 'Silver ×6', type: 'silver' }],
    logo: '/assets/awards/logos/esg-logo.png',
    winners: ['Mah Sing Group', 'BAT Malaysia', 'Paramount Corporation', 'Protasco', 'Ajiya']
  },
  {
    org: 'ARA',
    year: '2023 — 2025',
    name: 'Australasian Reporting Awards',
    medals: [{ label: 'Silver ×3', type: 'silver' }, { label: 'Bronze ×2', type: 'bronze' }],
    logo: '/assets/awards/logos/ara-logo.png',
    winners: ['Mah Sing Group', 'MMC Corporation', 'Paramount Corporation']
  },
  {
    org: 'ASRA',
    year: '2024 / 2025',
    name: 'Asia Sustainability Reporting Awards',
    medals: [{ label: 'Platinum ×2', type: 'platinum' }],
    logo: '/assets/awards/logos/asra-logo.png',
    winners: ['Mah Sing Group', 'Paramount Corporation']
  }
]

function Awards() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

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

  const renderAwardCategory = (category, data) => (
    <div key={category} className="award-category">
      <div className="award-category-header">
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </div>

      {data.years ? (
        Object.entries(data.years)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([year, awards]) => (
            <div key={year} className="award-year-section">
              <div className="award-year-badge">{year}</div>
              <div className="award-images-grid">
                {awards.map((award, i) => (
                  <div key={i} className="award-image-card" style={{ animationDelay: `${i * 0.08}s` }}>
                    <img src={award.image} alt={`${data.title} ${year}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))
      ) : (
        <div className="award-images-grid single-category">
          {data.images.map((award, i) => (
            <div key={i} className="award-image-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <img src={award.image} alt={data.title} loading="lazy" />
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="page-awards">
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
                  <Link to="/expertise#workshop">Training</Link>
                  <Link to="/expertise#advisory">Guidance & Advisory</Link>
                  <Link to="/expertise#reporting">Report Writing</Link>
                </div>
              </div>
              <Link to="/our-team">Our Team</Link>
              <Link to="/awards" className="active">Awards & Recognitions</Link>
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
          <div className="eyebrow">Awards & Recognitions.</div>
          <h1>Our clients' reports <em>keep winning.</em></h1>
          <p>Reports developed with JRC have been honoured by the industry's most respected reporting awards — NACRA, The Edge, ARA, ASRA, and more.</p>
        </div>
      </section>

      <section className="awards-overview">
        <div className="container">
          <div className="award-hint rv">— Hover or tap a card to see the winning reports</div>
          <div className="award-grid">
            {awardsOverview.map((award, i) => (
              <div key={i} className={`acard-flip rv d${(i % 4) + 1}`}>
                <div className="acard-inner">
                  <div className="face front">
                    <img src={award.logo} alt={`${award.org} logo`} />
                    <div className="yr">{award.year}</div>
                    <h3>{award.name}</h3>
                    <div className="medals">
                      {award.medals.map((medal, j) => (
                        <span key={j} className={`medal ${medal.type}`}>{medal.label}</span>
                      ))}
                    </div>
                    <div className="see-reports">↻ See the winning reports</div>
                  </div>
                  <div className="face back">
                    <div className="back-header">{award.org} Winners</div>
                    <ul className="winners-list">
                      {award.winners.map((winner, j) => (
                        <li key={j}>{winner}</li>
                      ))}
                    </ul>
                    <div className="back-footer">Reports by JRC</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ftse rv">
            <div className="stars" aria-hidden="true">★★★★</div>
            <div>
              <h3>FTSE4Good Bursa Malaysia — 4-star reports</h3>
              <p>We have helped companies qualify for and retain their positions on the F4GBM Index. A 4-star ranking is the highest awarded, placing these companies in the top 25 percent of Bursa-listed companies for ESG disclosure and performance — and JRC continues to drive client induction into the index.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="awards-section">
        <div className="container">
          {renderAwardCategory('nacra', awardsData.nacra)}
          {renderAwardCategory('edge', awardsData.edge)}
          {renderAwardCategory('ara', awardsData.ara)}
          {renderAwardCategory('asra', awardsData.asra)}

          {/* FTSE4Good Section */}
          <div className="award-category ftse-section">
            <div className="award-category-header">
              <h2>FTSE4Good Bursa Malaysia</h2>
              <p>4-Star ESG Rated Reports</p>
            </div>
            <div className="ftse-intro">
              <div className="stars">★★★★</div>
              <p>We have helped multiple companies qualify for and retain their positions on the F4GBM Index. A 4-star ranking places these companies in the top 25% of Bursa-listed companies for ESG disclosure and performance.</p>
            </div>
            <div className="award-images-grid ftse-grid">
              {ftse4goodImages.map((img, i) => (
                <div key={i} className="award-image-card" style={{ animationDelay: `${i * 0.08}s` }}>
                  <img src={img} alt="FTSE4Good 4-Star Report" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* F4GBM Qualified Companies */}
          <div className="award-category">
            <div className="award-category-header">
              <h2>F4GBM Index Qualified Companies</h2>
              <p>Companies We Helped Qualify & Retain Position on FTSE4Good Bursa Malaysia</p>
            </div>
            <div className="award-images-grid ftse-grid">
              {f4gbmImages.map((img, i) => (
                <div key={i} className="award-image-card" style={{ animationDelay: `${i * 0.06}s` }}>
                  <img src={img} alt="F4GBM Qualified Company" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container rv">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Work With Us.</div>
          <h2>Ready for your <em>award-winning report?</em></h2>
          <p>Let's create a report that earns industry recognition.</p>
          <a className="email" href="mailto:jr@jr.com.my">jr@jr.com.my</a>
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

export default Awards
