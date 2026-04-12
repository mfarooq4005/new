import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'News & Events', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ]

  const programs = [
    {
      title: 'Elementary School',
      grades: 'K-5',
      description: 'Building strong foundations through engaging, hands-on learning experiences.',
      icon: '🎨',
    },
    {
      title: 'Middle School',
      grades: '6-8',
      description: 'Developing critical thinking and preparing students for academic excellence.',
      icon: '🔬',
    },
    {
      title: 'High School',
      grades: '9-12',
      description: 'College preparatory curriculum with advanced placement and honors courses.',
      icon: '🎓',
    },
  ]

  const stats = [
    { number: '1,200+', label: 'Students' },
    { number: '85', label: 'Certified Teachers' },
    { number: '98%', label: 'College Acceptance' },
    { number: '25:1', label: 'Student-Teacher Ratio' },
  ]

  const news = [
    {
      title: 'Science Fair Winners Announced',
      date: 'March 15, 2024',
      excerpt: 'Our students showcased incredible projects at the annual science fair.',
      category: 'Academics',
    },
    {
      title: 'Spring Sports Registration Open',
      date: 'March 10, 2024',
      excerpt: 'Register now for soccer, track and field, and tennis teams.',
      category: 'Athletics',
    },
    {
      title: 'Parent-Teacher Conference Week',
      date: 'March 5, 2024',
      excerpt: 'Schedule your meetings with teachers to discuss student progress.',
      category: 'Events',
    },
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#home" className="logo">
            <span className="logo-icon">🏫</span>
            <span className="logo-text">Lincoln Elementary</span>
          </a>
          
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
            <li>
              <a href="#portal" className="btn btn-primary">Parent Portal</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="animate-fade-in-up">Excellence in Education</h1>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Empowering students to achieve their full potential through innovative teaching, 
            supportive community, and endless opportunities for growth.
          </p>
          <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#admissions" className="btn btn-primary">Apply Now</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Lincoln?</h2>
            <p>We're committed to providing an exceptional educational experience</p>
          </div>
          
          <div className="grid grid-2">
            <div className="about-content">
              <h3>A Tradition of Excellence Since 1965</h3>
              <p>
                For over 50 years, Lincoln Elementary has been a beacon of educational excellence 
                in our community. Our dedicated faculty and staff work tirelessly to create an 
                environment where every student can thrive.
              </p>
              <p>
                We believe in nurturing not just academic success, but also character development, 
                creativity, and social responsibility. Our holistic approach ensures that students 
                graduate prepared for the challenges of tomorrow.
              </p>
              <ul className="feature-list">
                <li>✓ State-of-the-art facilities and technology</li>
                <li>✓ Award-winning arts and athletics programs</li>
                <li>✓ Personalized learning approaches</li>
                <li>✓ Strong parent and community partnerships</li>
                <li>✓ Comprehensive support services</li>
              </ul>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>🏫</span>
                <p>School Campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="section academics-section bg-secondary">
        <div className="container">
          <div className="section-title">
            <h2>Academic Programs</h2>
            <p>Comprehensive education for every stage of development</p>
          </div>
          
          <div className="grid grid-3">
            {programs.map((program, index) => (
              <div key={index} className="card program-card">
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <div className="program-grades">Grades {program.grades}</div>
                <p>{program.description}</p>
                <a href="#academics" className="btn-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="section admissions-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="admissions-content">
              <h2>Join Our Community</h2>
              <p>
                We're excited that you're considering Lincoln Elementary for your child's education. 
                Our admissions process is designed to be straightforward and supportive.
              </p>
              
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Schedule a Tour</h4>
                    <p>Visit our campus and see our community in action</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Complete Application</h4>
                    <p>Submit your application online with required documents</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Enrollment Decision</h4>
                    <p>Receive notification and complete enrollment process</p>
                  </div>
                </div>
              </div>
              
              <a href="#contact" className="btn btn-primary">Start Application</a>
            </div>
            <div className="admissions-form card">
              <h3>Request Information</h3>
              <form className="form">
                <div className="form-group">
                  <label htmlFor="parentName">Parent/Guardian Name</label>
                  <input type="text" id="parentName" placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="(555) 123-4567" />
                </div>
                <div className="form-group">
                  <label htmlFor="grade">Grade Level</label>
                  <select id="grade">
                    <option value="">Select grade level</option>
                    <option value="k-5">Elementary (K-5)</option>
                    <option value="6-8">Middle School (6-8)</option>
                    <option value="9-12">High School (9-12)</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="section news-section bg-secondary">
        <div className="container">
          <div className="section-title">
            <h2>News & Events</h2>
            <p>Stay updated with what's happening at Lincoln</p>
          </div>
          
          <div className="grid grid-3">
            {news.map((item, index) => (
              <article key={index} className="card news-card">
                <div className="news-category">{item.category}</div>
                <h3>{item.title}</h3>
                <div className="news-date">{item.date}</div>
                <p>{item.excerpt}</p>
                <a href="#news" className="btn-link">Read More →</a>
              </article>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a href="#news" className="btn btn-secondary">View All News</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you</p>
          </div>
          
          <div className="grid grid-3">
            <div className="card contact-info">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <p>123 Education Lane<br/>Springfield, ST 12345</p>
            </div>
            <div className="card contact-info">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>(555) 123-4567<br/>Mon-Fri 8am-4pm</p>
            </div>
            <div className="card contact-info">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>info@lincolnelementary.edu<br/>admissions@lincolnelementary.edu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid grid-4">
            <div className="footer-about">
              <a href="#home" className="logo">
                <span className="logo-icon">🏫</span>
                <span className="logo-text">Lincoln Elementary</span>
              </a>
              <p>Empowering students to achieve excellence since 1965.</p>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#academics">Academics</a></li>
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#news">News & Events</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#portal">Parent Portal</a></li>
                <li><a href="#calendar">Calendar</a></li>
                <li><a href="#staff">Staff Directory</a></li>
                <li><a href="#policies">Policies</a></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook">📘</a>
                <a href="#twitter" aria-label="Twitter">🐦</a>
                <a href="#instagram" aria-label="Instagram">📷</a>
                <a href="#youtube" aria-label="YouTube">📺</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Lincoln Elementary School. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
