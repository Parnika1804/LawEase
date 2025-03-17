import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import bg from '../assets/bg.png';
import logo from '../assets/logo.png';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/auth');
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${bg})`,
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
      
      <div className="description-section">
        <h2>About Our Platform</h2>
        <p>
          LawEase simplifies legal complexities through artificial intelligence. Our platform provides 
          accurate legal information, resources, and guidance on common legal questions. 
          Whether you're a legal professional or an individual seeking answers, 
          LawEase is designed to make legal knowledge more accessible to everyone.
        </p>
      </div>
      
      <div className="button-container">
        <button className="explore-button" onClick={handleExploreClick}>Explore Now</button>
      </div>
    </div>
  );
};

export default Home;