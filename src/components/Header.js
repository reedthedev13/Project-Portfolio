import React from "react";
import Styles from "../styles/styles.css";

const Header = () => {
  return (
    <header class="portfolio-header">
      <div class="header-container">
        <div class="logo-section">
          <h1 class="name">Reed Lathop</h1>
          <p class="title">Full Stack Developer</p>
        </div>
        <nav class="main-nav">
          <a href="#projects" class="nav-link">
            Projects
          </a>
          <a href="#skills" class="nav-link">
            Skills
          </a>
          <a href="#contact" class="nav-link">
            Contact
          </a>
          <div className="social-links">
            <a
              href="https://github.com/reedthedev13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/reed-lathrop-3370b4359/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
