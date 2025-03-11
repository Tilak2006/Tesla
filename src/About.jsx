import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to <span className="brand-name">TESLA CYBERTRUCK</span>, your premier destination for luxury and high-performance vehicles. 
        We bring you the latest and most exclusive cars, ensuring an unparalleled driving experience. 
      </p>

      <div className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To provide top-tier vehicles with cutting-edge technology, exceptional design, and unmatched performance.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <p>
            We offer an exclusive selection of vehicles, premium customer service, and a passion for automotive excellence.
          </p>
        </div>

        <div className="about-card">
          <h2>Experience Luxury</h2>
          <p>
            From sleek sports cars to luxury sedans, our collection is crafted to elevate your driving lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
