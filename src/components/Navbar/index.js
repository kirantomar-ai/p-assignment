import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PilgrimLogo from "../../assets/images/Pilgrim-New-Logo.avif"
import "./navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
            <img src={PilgrimLogo} style={{height:'40px'}} alt='logo'/>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/assignment-1"
              className={location.pathname === "/compare" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Compare Products
            </Link>
          </li>
          <li>
            <Link
              to="/assignment-2"
              className={location.pathname === "/configure" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Configure T-shirt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
