import React from "react";
import "./App.css";
import Thiru from "./assets/thiru.svg";

function App() {
  return (
    <div className="main-bg">
      <nav className="navbar">
        {/* Left side: Logo */}
        <div className="logo">
          <img src={Thiru} alt="Thiru Logo" className="logo-img" />
        </div>

        {/* Middle: Navigation Links (centered) */}
        <ul className="nav-links">
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Right side: Login */}
        <div className="logintab">Login</div>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Learning Hub</h1>
          <p>Build modern, responsive, and interactive websites using React!</p>
          <button className="cta-btn">Get Started</button>
        </div>
      </header>
    </div>
  );
}

export default App;
