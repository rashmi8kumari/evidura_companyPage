import React from "react";
import "./Footer.css";

// Optional: You can also use react-icons for social icons
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>© 2025 Evidura. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/evidura/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://x.com/evidura1" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
          <a href="https://www.instagram.com/_evidura_?igsh=bmIwN25vb3dhYWk=" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

