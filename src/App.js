import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [colorScheme, setColorScheme] = useState('color-scheme-1');
  const [animatedText, setAnimatedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Frount End Developer', 'Cyber Security Enthusiast'];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedColorScheme = localStorage.getItem('colorScheme') || 'color-scheme-1';
    setTheme(savedTheme);
    setColorScheme(savedColorScheme);
    document.body.className = `${savedTheme} ${savedColorScheme}`;
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentRoleIndex = loopNum % roles.length;
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        setAnimatedText(currentRole.substring(0, animatedText.length - 1));
        setTypingSpeed(100);
      } else {
        setAnimatedText(currentRole.substring(0, animatedText.length + 1));
        setTypingSpeed(150);
      }
      
      if (!isDeleting && animatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && animatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [animatedText, isDeleting, loopNum, roles, typingSpeed]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = `${newTheme} ${colorScheme}`;
  };

  const changeColorScheme = (scheme) => {
    setColorScheme(scheme);
    localStorage.setItem('colorScheme', scheme);
    document.body.className = `${theme} ${scheme}`;
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`App ${theme}`}>
      {/* Header */}
      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">MALLIKARJUN</div>
            
            {/* Desktop Navigation */}
            <nav className="nav desktop-nav">
              {['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={activeSection === item ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            {/* Theme Toggle */}
            <div className="theme-controls">
              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <select className="color-scheme-selector" onChange={(e) => changeColorScheme(e.target.value)} value={colorScheme}>
                <option value="color-scheme-1">Red</option>
                <option value="color-scheme-2">Green</option>
                <option value="color-scheme-3">Blue</option>
                <option value="color-scheme-4">Orange</option>
                <option value="color-scheme-5">Brown</option>
              </select>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="nav mobile-nav">
              {['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={activeSection === item ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-image">
                <div className="profile-photo">
                  <img 
                    src={`${process.env.PUBLIC_URL || ''}/images/profile.jpg`} 
                    alt="Mallikarjun" 
                    className="profile-img" 
                    onError={(e) => {
                      console.error('Image failed to load. Attempted path:', e.target.src);
                    }}
                  />
                </div>
              </div>
              <div className="hero-text">
                <h1>Mallikarjun</h1>
                <div className="animated-text">
                  <span className="text-content">{animatedText}</span>
                  <span className="cursor">|</span>
                </div>
                <p className="hero-subtitle">
                  Computer Science Engineering student passionate about building interactive web applications and solving problems through code.
                </p>
                <div className="hero-actions">
                  <a 
                    href={`${process.env.PUBLIC_URL || ''}/resume.pdf`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn primary"
                    download="Mallikarjun_Resume.pdf"
                    type="application/pdf"
                  >
                    Resume
                  </a>
                  <button className="btn secondary" onClick={() => scrollToSection('projects')}>
                    View Work
                  </button>
                  <a
                    href="https://github.com/Mallikarjun-9610"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
              <p>
                I'm a Computer Science Engineering student at Government Engineering College, Mosalehosahalli (VTU). I specialize in web development and cybersecurity with a passion for creating clean, efficient, and responsive web experiences.
              </p>
              <p>
                I am contributing to meaningful projects and continue growing as a developer.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="container">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-group">
                <h3><i className="fas fa-code"></i> Programming Languages</h3>
                <div className="chip-row">
                  <span className="chip">Python (Intermediate)</span>
                  <span className="chip">Java (Intermediate)</span>
                  <span className="chip">C (Beginner)</span>
                </div>
              </div>
              <div className="skill-group">
                <h3><i className="fas fa-laptop-code"></i> Web Technologies</h3>
                <div className="chip-row">
                  <span className="chip">React.js</span>
                  <span className="chip">Node.js</span>
                  <span className="chip">HTML5</span>
                  <span className="chip">CSS3</span>
                </div>
              </div>

              <div className="skill-group">
                <h3><i className="fas fa-tools"></i> Tools & Others</h3>
                <div className="chip-row">
                  <span className="chip">Firebase</span>
                  <span className="chip">Git</span>
                  <span className="chip">Unix</span>
                  <span className="chip">VS Code</span>
                  <span className="chip">Supabase</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              <article className="project-card">
                <div className="project-header">
                  <h3>Find Investors for Startups</h3>
                  <span className="project-tag">Ongoing</span>
                </div>
                <p className="project-description">
                  A comprehensive platform designed to connect startups with potential investors. This project aims to streamline the funding process by providing a centralized hub where entrepreneurs can showcase their ventures and investors can discover promising opportunities.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Express.js</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Mallikarjun-9610" target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href="#" className="project-link disabled" aria-disabled="true">
                    <i className="fas fa-external-link-alt"></i> Live Demo (Coming Soon)
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <div className="container">
            <h2>Education Journey</h2>
            <div className="education-timeline">
              <div className="education-item">
                <div className="education-year">2021</div>
                <div className="education-content">
                  <h3>SSLC (10th Grade)</h3>
                  <p className="education-institution">Adarsha Vidyalaya (RMSA), Itagi</p>
                  <p className="education-status">Completed</p>
                </div>
              </div>
              <div className="education-item">
                <div className="education-year">2023</div>
                <div className="education-content">
                  <h3>Pre-University Course (PUC)</h3>
                  <p className="education-institution">Karnataka Lingayata Education (KLE) Society, Kukanoor</p>
                  <p className="education-major">Stream: PCMB (Physics, Chemistry, Mathematics, Biology)</p>
                  <p className="education-status">Completed</p>
                </div>
              </div>
              <div className="education-item">
                <div className="education-year">2023 - 2027</div>
                <div className="education-content">
                  <h3>Bachelor of Engineering</h3>
                  <p className="education-institution">Government Engineering College, Mosalehosahalli (VTU), Karnataka</p>
                  <p className="education-major">Major: Computer Science And Engineering</p>
                  <p className="education-status">CGPA: 8.44</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section">
          <div className="container">
            <h2>Achievements & Involvement</h2>
            <div className="achievements-content">
              <div className="achievement-category">
                <h3><i className="fas fa-trophy"></i> Leadership Roles</h3>
                <div className="achievement-item">
                  <h4>Magazine Coordinator</h4>
                  <p>Led college magazine Design Team "Arohana" & "Kannada Siri Sampada".</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact-inner">
              <div className="contact-info">
                <h2>Get In Touch <span id="visitorCounter" className="visitor-count">0</span></h2>
                <p className="section-subtitle">
                  Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology!
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-label"><i className="fas fa-envelope"></i> Email</span>
                    <a href="mailto:ehmallikarjun@gmail.com">ehmallikarjun@gmail.com</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label"><i className="fab fa-linkedin"></i> LinkedIn</span>
                    <a href="https://www.linkedin.com/in/mallikarjun-h-424a37342" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/mallikarjun-h-424a37342
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label"><i className="fab fa-github"></i> GitHub</span>
                    <a href="https://github.com/Mallikarjun-9610" target="_blank" rel="noopener noreferrer">
                      github.com/Mallikarjun-9610
                    </a>
                  </div>
                </div>
              </div>
              <form className="contact-form">
                <h3>Send a Message</h3>
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Subject" />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn primary full-width">
                  Send Message
                </button>
                <p className="form-note">
                  This is a demo form. To make it functional, connect it to a backend or a form service.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>© <span id="year">{new Date().getFullYear()}</span> Mallikarjun | Designed with ❤️ by Mallikarjun</p>
          <p className="footer-note">Passionate Computer Science Engineer | Building the Future with Code</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
