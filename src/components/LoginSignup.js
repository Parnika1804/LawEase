import React from "react";
import "./LoginSignup.css";
import bg from '../assets/bg.png';
import logo from '../assets/logo.png';

const LoginSignup = () => {
  return (
    <div
      className="login-signup-container"
      style={{
        
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="header">
        <img src={logo} alt="LawEase Logo" className="logo" />
        <div className="title-section">
          <h1 className="law-title">LawEase</h1>
          <p>Your legal assistant powered by AI</p>
        </div>
      </div>
      
      <div className="auth-container">
        {/* Login Section */}
        <div className="auth-section login-section">
          <h2>Login</h2>
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <input type="email" id="login-email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input type="password" id="login-password" placeholder="Enter your password" />
            </div>
            <div className="form-footer">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="auth-button">Login</button>
          </form>
        </div>

        {/* Divider */}
        <div className="divider">
          <div className="divider-line"></div>
          <span>OR</span>
          <div className="divider-line"></div>
        </div>
        
        {/* Signup Section */}
        <div className="auth-section signup-section">
          <h2>Sign Up</h2>
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="signup-name">Full Name</label>
              <input type="text" id="signup-name" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <input type="email" id="signup-email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input type="password" id="signup-password" placeholder="Create a password" />
            </div>
            <div className="form-group">
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <input type="password" id="signup-confirm-password" placeholder="Confirm your password" />
            </div>
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
