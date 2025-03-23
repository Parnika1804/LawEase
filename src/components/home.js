import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.css";
import { 
  faBriefcase, 
  faGavel, 
  faUsers, 
  faBalanceScale, 
  faRobot, 
  faCommentAlt, 
  faSearch,
  faFileAlt,
  faStar,
  faCheckCircle,
  faShieldAlt,
  faLightbulb,
  faClock,
  faChevronLeft,
  faChevronRight,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LawEase</div>
      <div className="nav-links">
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#services" className="nav-item">Services</a>
        <a href="#reviews" className="nav-item">Reviews</a>
        <a href="#contact" className="nav-item">Contact</a>
      </div>
      <button className="cta-button">Try LawEase Now</button>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">AI-POWERED LEGAL ASSISTANCE</h1>
        <p className="hero-subtitle">Get instant legal insights, document analysis, and case summaries with our advanced AI legal chatbot.</p>
        
        <div className="hero-image-container">
          <img src="image.png" alt="AI Legal Assistant Interface" className="hero-image" />
          <div className="chat-demo">
            <div className="chat-bubble">How can I help with your legal questions today?</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const features = [
    {
      icon: faBalanceScale,
      title: "Legal Expertise",
      description: "Trained on millions of legal documents, cases, statutes, and regulations from multiple jurisdictions."
    },
    {
      icon: faShieldAlt,
      title: "Secure & Confidential",
      description: "Enterprise-grade security protocols ensuring your legal inquiries remain completely confidential."
    },
    {
      icon: faClock,
      title: "24/7 Availability",
      description: "Access legal guidance anytime, without scheduling appointments or waiting for callbacks."
    },
    {
      icon: faLightbulb,
      title: "Continuous Learning",
      description: "Our AI system continuously improves through usage and regular updates to legal databases."
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ABOUT LAWEASE</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Revolutionizing Legal Access Through Artificial Intelligence</p>
        </div>

        <div className="about-content">
          <div className="about-text-column">
            <h3 className="about-heading">Bridging The Gap Between Law And Technology</h3>
            <p className="about-description">
              Founded in 2023, LawEase was born from a simple yet powerful vision: to democratize access to legal information through cutting-edge AI technology. Our team of legal experts and AI engineers have collaborated to create a sophisticated platform that understands complex legal queries and delivers accurate, relevant information instantly.
            </p>
            <p className="about-description">
              In today's fast-paced world, waiting days for legal consultations or spending hours researching case law isn't practical. LawEase provides immediate answers to your legal questions, analyzes documents for potential issues, and helps you understand your legal options with confidence.
            </p>
            
            <div className="about-mission">
              <h4 className="mission-title">Our Mission</h4>
              <p className="mission-text">
                To empower individuals and organizations with accessible, accurate legal information through artificial intelligence, making legal knowledge more transparent and understandable for everyone.
              </p>
            </div>
          </div>
          
          <div className="about-image-column">
            <div className="about-image-container">
              <img src="/api/placeholder/480/360" alt="LawEase AI Platform" className="about-image" />
              <div className="image-overlay">
                <div className="overlay-stat">
                  <span className="stat-number">99.4%</span>
                  <span className="stat-label">Accuracy Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-features">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="about-cta">
          <h3 className="cta-heading">Ready to experience legal assistance reimagined?</h3>
          <button className="about-cta-button">Start Using LawEase</button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: faSearch,
      title: "Legal Research Assistant",
      description: "Search through millions of cases, statutes, and regulations in seconds to find relevant legal information."
    },
    {
      icon: faRobot,
      title: "AI Legal Chat",
      description: "Ask questions in plain English and get clear explanations of complex legal concepts based on current laws."
    },
    {
      icon: faFileAlt,
      title: "Document Analysis",
      description: "Upload legal documents and contracts for AI analysis, summaries, and potential issue identification."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">OUR AI LEGAL SERVICES</h2>
        <p className="section-subtitle">Explore how our AI-powered platform can assist with various legal needs</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const allReviews = [
    {
      name: "Sarah J.",
      role: "Law Student",
      image: "/api/placeholder/80/80",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy elit. Sed diam nonummy nibh euismod ut laoreet dolore magna aliquam erat volutpat."
    },
    {
      name: "Michael T.",
      role: "Small Business Owner",
      image: "/api/placeholder/80/80",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod ut tempor invidunt ut labore et dolore magna aliquam erat volutpat."
    },
    {
      name: "Elena R.",
      role: "Paralegal",
      image: "/api/placeholder/80/80",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tempor invidunt ut labore et dolore magna aliquam erat volutpat."
    },
    {
      name: "David K.",
      role: "Attorney",
      image: "/api/placeholder/80/80",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    },
    {
      name: "Olivia P.",
      role: "Legal Consultant",
      image: "/api/placeholder/80/80",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod ut labore et dolore magna aliquam erat volutpat."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(1);
  const [visibleReviews, setVisibleReviews] = useState([]);
  
  useEffect(() => {
    // Calculate visible reviews based on currentIndex
    const updateVisibleReviews = () => {
      const totalReviews = allReviews.length;
      
      // Get previous, current, and next review
      const prev = (currentIndex - 1 + totalReviews) % totalReviews;
      const current = currentIndex;
      const next = (currentIndex + 1) % totalReviews;
      
      setVisibleReviews([
        allReviews[prev],
        allReviews[current],
        allReviews[next]
      ]);
    };
    
    updateVisibleReviews();
  }, [currentIndex]);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + allReviews.length) % allReviews.length
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % allReviews.length
    );
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <h2 className="section-title">WHAT OUR USERS SAY</h2>
        <p className="section-subtitle">See why our users love LawEase</p>
        
        <div className="testimonials-carousel">
          <button 
            className="carousel-button carousel-button-prev" 
            onClick={goToPrevious}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <div className="testimonials-container">
            {visibleReviews.map((review, index) => (
              <div 
                className={`testimonial-card ${index === 1 ? 'testimonial-card-active' : 'testimonial-card-side'} ${index === 0 ? 'testimonial-card-left' : ''} ${index === 2 ? 'testimonial-card-right' : ''}`} 
                key={index}
              >
                <div className="testimonial-logo">
                  <img src="/api/placeholder/110/40" alt="LawEase Logo" className="testimonial-logo-img" />
                </div>
                <div className="testimonial-quote">
                  <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                  <p className="testimonial-text">{review.comment}</p>
                </div>
                <div className="testimonial-author">
                  <img src={review.image} alt={review.name} className="author-image" />
                  <div className="author-details">
                    <h4 className="author-name">{review.name}</h4>
                    <p className="author-role">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-button carousel-button-next" 
            onClick={goToNext}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        
        <div className="testimonial-indicators">
          {allReviews.map((_, index) => (
            <button 
              key={index}
              className={`indicator ${index === currentIndex ? 'indicator-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-title">GET IN TOUCH</h2>
        <p className="contact-subtitle">Have questions about LawEase? We're here to help!</p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-method">
              <h3 className="contact-method-title">Email Us</h3>
              <a href="mailto:hello@lawease.ai" className="contact-method-value">hello@lawease.ai</a>
            </div>
            <div className="contact-method">
              <h3 className="contact-method-title">Call Us</h3>
              <a href="tel:+1234567890" className="contact-method-value">+1 (234) 567-890</a>
            </div>
            <div className="contact-method">
              <h3 className="contact-method-title">Visit Us</h3>
              <p className="contact-method-value">123 Tech Plaza, Suite 400<br />Silicon Valley, CA 94123</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">LawEase</div>
            <p className="footer-tagline">AI-Powered Legal Assistance</p>
            <div className="footer-social">
              <a href="#" className="social-link"><FontAwesomeIcon icon={faRobot} /></a>
              <a href="#" className="social-link"><FontAwesomeIcon icon={faCommentAlt} /></a>
              <a href="#" className="social-link"><FontAwesomeIcon icon={faBalanceScale} /></a>
            </div>
          </div>
          
          <div className="footer-links-container">
            <div className="footer-links-column">
              <h3 className="footer-links-title">Navigation</h3>
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#reviews" className="footer-link">Reviews</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            
            <div className="footer-links-column">
              <h3 className="footer-links-title">Legal</h3>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Cookie Policy</a>
              <a href="#" className="footer-link">Disclaimer</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 LawEase AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default App;