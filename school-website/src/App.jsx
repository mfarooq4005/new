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
    { name: 'STREAM', href: '#stream' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ]

  const programs = [
    {
      title: 'Cambridge Primary',
      grades: 'Foundation to Grade 5',
      description: 'Building strong foundations with Cambridge curriculum integrated with Islamic values and character development.',
      icon: '🌟',
    },
    {
      title: 'Cambridge Secondary',
      grades: 'Grades 6-8',
      description: 'Developing critical thinking, creativity and leadership skills through innovative STREAM education.',
      icon: '🚀',
    },
    {
      title: 'O & A Levels',
      grades: 'Grades 9-12',
      description: 'Advanced Cambridge preparation with specialization in Robotics, AI, and cutting-edge technology.',
      icon: '🎓',
    },
  ]

  const specialties = [
    {
      icon: '💎',
      title: 'Holistic Tarbiyah',
      description: 'Nurturing spiritual, moral, intellectual and physical development in harmony with Islamic values.',
    },
    {
      icon: '🏆',
      title: 'Character Building',
      description: 'Developing integrity, leadership, empathy and responsibility through dedicated programs and mentorship.',
    },
    {
      icon: '🤖',
      title: 'Robotics Excellence',
      description: 'State-of-the-art robotics labs where students design, build and compete at national and international levels.',
    },
    {
      icon: '🔬',
      title: 'STREAM Education',
      description: 'Science, Technology, Research, Engineering, Arts & Mathematics integrated with real-world applications.',
    },
  ]

  const stats = [
    { number: '1,500+', label: 'Students' },
    { number: '120+', label: 'Expert Faculty' },
    { number: '100%', label: 'Cambridge Success' },
    { number: '50+', label: 'Robotics Awards' },
  ]

  const news = [
    {
      title: 'National Robotics Championship Winners',
      date: 'March 2024',
      excerpt: 'Our robotics team secured first place at the National Robotics Competition with their innovative AI-powered solution.',
      category: 'Robotics',
    },
    {
      title: 'Cambridge Top Achievers Award',
      date: 'February 2024',
      excerpt: 'Al Qalam students achieve highest marks in Pakistan for Cambridge O & A Level examinations.',
      category: 'Academics',
    },
    {
      title: 'STREAM Innovation Fair 2024',
      date: 'January 2024',
      excerpt: 'Students showcase groundbreaking projects combining technology, art and social impact.',
      category: 'Events',
    },
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#home" className="logo">
            <span className="logo-icon">✒️</span>
            <span className="logo-text">Al Qalam International</span>
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
          <h1 className="animate-fade-in-up">Where Excellence Meets Values</h1>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Al Qalam International Cambridge School - Pioneering Holistic Tarbiyah, Character Building, 
            Robotics & STREAM Education. Nurturing future leaders with Cambridge excellence and Islamic values.
          </p>
          <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#admissions" className="btn btn-primary">Apply Now</a>
            <a href="#about" className="btn btn-secondary">Discover More</a>
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
            <h2>Why Choose Al Qalam?</h2>
            <p>An institution where academic excellence meets character development and innovation</p>
          </div>
          
          <div className="grid grid-2">
            <div className="about-content">
              <h3>A Legacy of Excellence in Holistic Education</h3>
              <p>
                Al Qalam International Cambridge School stands as a beacon of educational excellence, 
                seamlessly blending the prestigious Cambridge curriculum with Islamic values and 
                cutting-edge innovation in Robotics and STREAM education.
              </p>
              <p>
                Our unique approach to Holistic Tarbiyah ensures that every student develops not just 
                academically, but also spiritually, morally, and socially. We believe in nurturing 
                complete individuals who are prepared to lead and serve humanity.
              </p>
              <ul className="feature-list">
                <li>✓ Cambridge International Curriculum with distinction</li>
                <li>✓ Advanced Robotics & AI Laboratories</li>
                <li>✓ Dedicated Character Building Programs</li>
                <li>✓ Holistic Tarbiyah integrated in daily learning</li>
                <li>✓ Expert faculty with international exposure</li>
                <li>✓ State-of-the-art STREAM facilities</li>
              </ul>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span className="animate-float">✒️</span>
                <p>Al Qalam Campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="section specialties-section bg-secondary">
        <div className="container">
          <div className="section-title">
            <h2>Our Pillars of Excellence</h2>
            <p>What makes Al Qalam truly exceptional</p>
          </div>
          
          <div className="grid grid-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="card specialty-card">
                <div className="specialty-icon">{specialty.icon}</div>
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="section academics-section">
        <div className="container">
          <div className="section-title">
            <h2>Academic Programs</h2>
            <p>Cambridge excellence at every stage of development</p>
          </div>
          
          <div className="grid grid-3">
            {programs.map((program, index) => (
              <div key={index} className="card program-card">
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <div className="program-grades">{program.grades}</div>
                <p>{program.description}</p>
                <a href="#academics" className="btn-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STREAM Section */}
      <section id="stream" className="section stream-section bg-secondary">
        <div className="container">
          <div className="section-title">
            <h2>STREAM Innovation Hub</h2>
            <p>Where creativity meets technology and research</p>
          </div>
          
          <div className="grid grid-2">
            <div className="stream-content">
              <h3>Leading the Future of Education</h3>
              <p>
                At Al Qalam, we go beyond STEM. Our STREAM approach integrates Arts and Research, 
                fostering creativity alongside technical excellence. Students engage in hands-on 
                projects that solve real-world problems.
              </p>
              <div className="stream-features">
                <div className="stream-feature">
                  <span>🔬</span>
                  <div>
                    <h4>Advanced Science Labs</h4>
                    <p>Modern laboratories for physics, chemistry, and biology experiments</p>
                  </div>
                </div>
                <div className="stream-feature">
                  <span>💻</span>
                  <div>
                    <h4>Tech & Coding Hub</h4>
                    <p>Programming, AI, machine learning and app development</p>
                  </div>
                </div>
                <div className="stream-feature">
                  <span>🤖</span>
                  <div>
                    <h4>Robotics Workshop</h4>
                    <p>Design, build and program robots for competitions and projects</p>
                  </div>
                </div>
                <div className="stream-feature">
                  <span>🎨</span>
                  <div>
                    <h4>Creative Arts Studio</h4>
                    <p>Digital arts, design thinking and creative expression</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="stream-image">
              <div className="image-placeholder">
                <span className="animate-float">🚀</span>
                <p>STREAM Innovation Lab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="section admissions-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="admissions-content">
              <h2>Join the Al Qalam Family</h2>
              <p>
                We invite you to be part of our thriving community of learners, innovators, and 
                future leaders. Our admissions process is designed to welcome and support families 
                who share our vision.
              </p>
              
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Schedule a Campus Tour</h4>
                    <p>Experience our world-class facilities and meet our dedicated faculty</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Submit Application</h4>
                    <p>Complete the online application with required documents</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Assessment & Interview</h4>
                    <p>Student assessment and family interaction session</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Enrollment Confirmation</h4>
                    <p>Receive admission offer and complete enrollment formalities</p>
                  </div>
                </div>
              </div>
              
              <a href="#contact" className="btn btn-primary">Start Your Journey</a>
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
                  <input type="tel" id="phone" placeholder="+92 XXX XXXXXXX" />
                </div>
                <div className="form-group">
                  <label htmlFor="grade">Grade Level</label>
                  <select id="grade">
                    <option value="">Select grade level</option>
                    <option value="primary">Cambridge Primary (Foundation-Grade 5)</option>
                    <option value="secondary">Cambridge Secondary (Grades 6-8)</option>
                    <option value="olevel">O Levels (Grades 9-10)</option>
                    <option value="alevel">A Levels (Grades 11-12)</option>
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
            <h2>News & Achievements</h2>
            <p>Celebrating success and milestones at Al Qalam</p>
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
            <p>We'd love to hear from you and welcome you to our campus</p>
          </div>
          
          <div className="grid grid-3">
            <div className="card contact-info">
              <div className="contact-icon">📍</div>
              <h3>Campus Address</h3>
              <p>Main Campus Road<br/>City, Pakistan</p>
            </div>
            <div className="card contact-info">
              <div className="contact-icon">📞</div>
              <h3>Contact Us</h3>
              <p>+92 XXX XXXXXXX<br/>Mon-Sat 8am-4pm</p>
            </div>
            <div className="card contact-info">
              <div className="contact-icon">✉️</div>
              <h3>Email Us</h3>
              <p>info@alqalamschool.edu<br/>admissions@alqalamschool.edu</p>
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
                <span className="logo-icon">✒️</span>
                <span className="logo-text">Al Qalam International</span>
              </a>
              <p>Pioneering holistic education with Cambridge excellence, Islamic values, and innovation in Robotics & STREAM.</p>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#academics">Academics</a></li>
                <li><a href="#stream">STREAM Program</a></li>
                <li><a href="#admissions">Admissions</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#portal">Parent Portal</a></li>
                <li><a href="#calendar">Academic Calendar</a></li>
                <li><a href="#staff">Faculty Directory</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook">📘</a>
                <a href="#twitter" aria-label="Twitter">🐦</a>
                <a href="#instagram" aria-label="Instagram">📷</a>
                <a href="#youtube" aria-label="YouTube">📺</a>
                <a href="#linkedin" aria-label="LinkedIn">💼</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Al Qalam International Cambridge School. All rights reserved.</p>
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
