import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Explore the Future</h2>
        <p className="footer-description">
          Join us to experience cutting-edge technology and innovation.
        </p>

        <div className="footer-social">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
        </div>

        <p className="footer-text">© 2025 All Rights Reserved | Designed for Speed & Style</p>
      </div>
    </footer>
  );
};

export default Footer;
