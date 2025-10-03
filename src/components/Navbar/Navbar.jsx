import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Evidura</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/legal">Legal</Link></li>
      </ul>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;

