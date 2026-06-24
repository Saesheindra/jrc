import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../pages.css'

const leadership = [
  { name: 'Joshua Rayan', role: 'Founder & Principal Consultant', image: '/assets/profile-pictures/Joshua Rayan.png', bio: 'Founder with 23+ years pioneering integrated reporting and ESG advisory in Malaysia. Licensed Integrated Reporting trainer and advisor to PLCs across Southeast Asia.' },
  { name: 'Ng Tse Mei', role: 'Director, Sustainability Advisory', image: '/assets/profile-pictures/Ng Tse Mei.png', bio: 'Led 120+ corporate reports for PLCs aligned to GRI, FTSE4Good, and Bursa frameworks. Expert in double materiality and stakeholder engagement.' }
]

const generalManagers = [
  { name: 'Liz Chai', role: 'Director, Climate & Risk', image: '/assets/profile-pictures/Liz Chai.png', bio: 'GARP SCR Certified specialist in climate risks and IFRS S2-aligned disclosures. Leads physical and transition risk assessments.' },
  { name: 'Jordan Raj', role: 'Senior Sustainability Consultant', image: '/assets/profile-pictures/Jordan Raj.png', bio: 'Delivered 50+ sustainability reports with expertise in GRI, SASB, and FTSE4Good frameworks.' },
  { name: 'Pavithran', role: 'Biodiversity & Nature Lead', image: '/assets/profile-pictures/Pavithran.png', bio: 'Practicing ecologist leading biodiversity assessments and TNFD-aligned nature strategies.' },
  { name: 'Tom Lee', role: 'Carbon Accounting Lead', image: '/assets/profile-pictures/Tom Lee.png', bio: 'Award-winning carbon accounting expert specializing in Scope 1, 2 & 3 emissions inventories.' },
  { name: 'Kyle Sebastian Mulya', role: 'Research & GHG Specialist', image: '/assets/profile-pictures/Kyle Sebastian Mulya.png', bio: 'Published researcher in GHG inventories and lifecycle assessment methodology.' },
  { name: 'Keith Ong', role: 'ESG Data & Analytics', image: '/assets/profile-pictures/Keith Ong.png', bio: 'Data-driven ESG analyst with expertise in KPI development and performance tracking.' }
]

const seniorConsultants = [
  { name: 'Lim Kai Sin', role: 'Sustainability Consultant', image: '/assets/profile-pictures/Lim Kai.png', bio: 'Supports integrated reporting and sustainability disclosure projects across multiple sectors.' },
  { name: 'Lim Jia Xin', role: 'Sustainability Consultant', image: '/assets/profile-pictures/Lim Jia Xin.png', bio: 'Specializes in materiality assessments and stakeholder engagement processes.' },
  { name: 'Wey Wei Le', role: 'Sustainability Consultant', image: '/assets/profile-pictures/Wey Wei Le.png', bio: 'Focuses on ESG reporting and corporate sustainability strategy development.' },
  { name: 'Nakhaie Mirza', role: 'Sustainability Consultant', image: '/assets/profile-pictures/Nakhaie Mirza.png', bio: 'Supports clients in GRI reporting and sustainability performance improvement.' },
  { name: 'Yashirdisai Sampasivam', role: 'Sustainability Consultant', image: '/assets/profile-pictures/Yashirdisai Sampasivam.png', bio: 'Works on climate risk analysis and TCFD-aligned disclosure frameworks.' },
  { name: 'Zaynab Hawat', role: 'Sustainability Consultant', image: '/assets/profile-pictures/Zaynab Hawat.png', bio: 'Contributes to sustainability assessments and ESG integration projects.' },
  { name: 'Kanmani Batumalai', role: 'Sustainability Consultant', image: '/assets/profile-pictures/Kanmani Batumalai.png', bio: 'Supports labour and human rights due diligence engagements.' },
  { name: 'Sugathini Shunmugam', role: 'Sustainability Consultant', image: '/assets/profile-pictures/Sugathini Shunmugam.png', bio: 'Works on supply chain sustainability and value chain assessments.' },
  { name: 'Joann Amalaa', role: 'Brand & Marketing Lead', image: '/assets/profile-pictures/Joann Amalaa.png', bio: 'Brand strategist enhancing JRC\'s market presence through content and digital marketing.' },
  { name: 'Jazmine Poh', role: 'Project Coordinator', image: '/assets/profile-pictures/Jazmine Poh.png', bio: 'Ensures seamless project delivery and client engagement coordination.' }
]

const operations = [
  { name: 'Shafirah Masha', role: 'Operations Executive', image: '/assets/profile-pictures/Shafirah Masha.png', bio: 'Manages operational processes and administrative functions.' },
  { name: 'Nur Nadzirah', role: 'Operations Executive', image: '/assets/profile-pictures/Nur Nadzirah.png', bio: 'Supports day-to-day operations and client service delivery.' }
]

function OurTeam() {
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

  const TeamCard = ({ member, featured = false, index = 0 }) => (
    <div className={`team-card ${featured ? 'featured' : ''}`} style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="team-card-img">
        <img
          src={member.image}
          alt={member.name}
          onError={(e) => { e.target.style.background = 'var(--gold-deep)' }}
        />
      </div>
      <div className="team-card-info">
        <div className="team-card-role">{member.role}</div>
        <h3 className="team-card-name">{member.name}</h3>
        <p className="team-card-bio">{member.bio}</p>
      </div>
    </div>
  )

  return (
    <div className="page-team">
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
              <Link to="/our-team" className="active">Our Team</Link>
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
          <div className="eyebrow">Our Team.</div>
          <h1>The people behind <em>the work.</em></h1>
          <p>Practitioners who write the reports, run the workshops, and sit across the table from boards — every engagement, every time.</p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="team-section">
        <div className="container">
          <div className="sec-head rv">
            <div className="eyebrow">Leadership.</div>
            <h2>Guiding our <em>mission.</em></h2>
          </div>
          <div className="team-grid leadership-grid">
            {leadership.map((member, i) => (
              <TeamCard key={i} member={member} featured index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* General Managers Section */}
      <section className="team-section">
        <div className="container">
          <div className="sec-head rv">
            <div className="eyebrow">General Managers.</div>
            <h2>Deep expertise, <em>real impact.</em></h2>
          </div>
          <div className="team-grid">
            {generalManagers.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Senior Consultants Section */}
      <section className="team-section">
        <div className="container">
          <div className="sec-head rv">
            <div className="eyebrow">Senior Consultants.</div>
            <h2>Driving <em>delivery.</em></h2>
          </div>
          <div className="team-grid">
            {seniorConsultants.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="team-section">
        <div className="container">
          <div className="sec-head rv">
            <div className="eyebrow">Operations.</div>
            <h2>Keeping things <em>running.</em></h2>
          </div>
          <div className="team-grid team-grid-centered">
            {operations.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container rv">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Join Us.</div>
          <h2>Want to be part of <em>our team?</em></h2>
          <p>We're always looking for exceptional talent in sustainability, ESG, and corporate reporting.</p>
          <Link to="/careers" className="btn" style={{ marginTop: '32px' }}>View Openings</Link>
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

export default OurTeam
