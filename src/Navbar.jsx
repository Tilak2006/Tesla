import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-item">HOME</Link>
          <Link to="/cars" className="nav-item">CARS</Link>
          <Link to="/explore" className="nav-item">EXPLORE</Link>
          <Link to="/about" className="nav-item">ABOUT</Link>
          <Link to="/login" className="nav-item">LOGIN</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
