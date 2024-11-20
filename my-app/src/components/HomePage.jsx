import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <header className="navbar">
        <h1 className="brand">
          Lutho <span>Mtyelwa</span>
        </h1>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <Link to="/education">Education</Link>
            <Link to="/services">Services</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/certificates">Certificates</Link>
          </ul>
        </nav>
      </header>
      <div className="hero-content">
        <div className="hero-text">
          <h2>
            Hi, It's <span>Lutho</span>
          </h2>
          <h3>I'm a</h3>
          <p>
          Aspiring Software Developer | Html | CSS | Javascript.js| React.js|Node & Express| C# | ASP.NET MVC |Java | Python | Python for Data Analysis|
          Nelson Mandela University Graduate, with CISCO Certificates  in Introduction to Cyber Security, Introduction to Networks, 
          </p>
          <div className="hero-buttons">
            <button className="btn hire-btn">Hire</button>
     
          </div>
          <div className="social-icons">
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-github"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-overlay">
            <img
              src="/pdfs/Image.jfif"
              alt="Lutho Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
