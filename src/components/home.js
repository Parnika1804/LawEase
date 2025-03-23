import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./home.css";
import LoginSignup from "./LoginSignup";
import bg from '../assets/bg.png';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} alt="LawEase Logo" className="logo" />
        <div className="nav-links">
          <Link to="contact" smooth={true} duration={500} className="nav-item">
            Contact/Help
          </Link>
          <Link to="signup" smooth={true} duration={500} className="nav-item">
            Signup/Login
          </Link>
        </div>
      </nav>

      {/* Home Section */}
      <div className="home-container">
        <div className="header">
          <img src={logo} alt="LawEase Logo" className="logo" />
          <h1 className="law-title">Welcome to LawEase</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="description-section">
        <h2>About Our Platform</h2>
        <div className="about-section">
          <h2>About LawEase</h2>
          <p><strong>LawEase</strong> is an innovative platform designed to bridge the gap between legal complexities and accessibility through the power of artificial intelligence. We believe that legal knowledge should not be limited to professionals alone—everyone deserves the right to understand their legal rights, obligations, and available options.</p>

          <p>Navigating legal matters can often feel overwhelming, especially for individuals without a background in law. Complex terminologies, lengthy legal documents, and evolving regulations can make it difficult to find clear and accurate information. At LawEase, we simplify the legal landscape by providing an intuitive and user-friendly platform that empowers individuals and businesses with reliable legal insights.</p>

          <p>Whether you are drafting contracts, seeking answers to common legal questions, or trying to understand your rights in different situations, LawEase ensures that you have the right resources at your fingertips. Our AI-driven system streamlines legal research by analyzing vast databases of case laws, statutes, and legal precedents, making it easier to find relevant legal information without the hassle of manual research.</p>

          <p>LawEase serves both legal professionals and everyday users by offering cutting-edge tools that enhance legal understanding and decision-making. We provide services such as AI-powered contract analysis, automated document drafting, legal consultation assistance, and personalized legal recommendations tailored to your specific needs.</p>

          <p>At the core of LawEase is a commitment to <strong>accuracy, transparency, and accessibility</strong>. Our mission is to revolutionize the way legal assistance is accessed, ensuring that justice and legal awareness are within everyone's reach. By leveraging technology, we aim to make legal processes more efficient, cost-effective, and user-friendly.</p>

          <p>Join us on our journey to simplify legal complexities and make the law more accessible to all.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="description-section">
        <h2>Contact Us</h2>
        <p>At <strong>LawEase</strong>, we are committed to providing excellent support and assistance to our users. If you have any questions, concerns, or need help navigating our platform, our team is here to assist you.</p>

        <h3>General Support</h3>
        <p>For any general inquiries, troubleshooting issues, or guidance on how to use our platform, feel free to reach out to our support team.</p>
        <p>📧 <strong>Email:</strong> [Support Email]</p>
        <p>📞 <strong>Phone:</strong> [Support Phone Number]</p>
        <p>🕒 <strong>Support Hours:</strong> [Operating Hours]</p>

        <h3>Account & Login Assistance</h3>
        <p>Having trouble accessing your account? Whether it's a login issue, password reset, or profile update, our account support team is ready to help.</p>
        <p>📧 <strong>Email:</strong> [Account Support Email]</p>

        <h3>Legal Assistance & AI Consultation</h3>
        <p>If you're looking for legal resources or need help understanding how our AI-powered legal tools work, our team can provide guidance. Please note that we do not offer legal representation but can direct you to valuable resources.</p>
        <p>📧 <strong>Email:</strong> [Legal Assistance Email]</p>

        <h3>Business & Partnerships</h3>
        <p>Interested in collaborating with LawEase? For business inquiries, partnerships, media relations, or investment opportunities, contact our business development team.</p>
        <p>📧 <strong>Email:</strong> [Business Inquiry Email]</p>

        <h3>Follow Us & Stay Updated</h3>
        <p>Stay connected with us for the latest updates, new features, and legal insights.</p>
        <p>🌐 <strong>Website:</strong> [Website URL]</p>
        <p>📱 <strong>Social Media:</strong> <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">LinkedIn</a> | <a href="#">Instagram</a></p>

        <h3>Office Address</h3>
        <p>📍 <strong>Location:</strong> [Company Address]</p>

        <p>We strive to respond to all inquiries as quickly as possible. Thank you for choosing <strong>LawEase</strong>—we’re here to make legal knowledge more accessible to everyone!</p>
      </div>

      {/* Signup/Login Section */}
      <div id="signup" className="description-section">
        <h2>Signup/Login</h2>
        <LoginSignup />
      </div>
    </div>
  );
};

export default Home;
