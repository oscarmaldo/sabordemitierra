
import { useState } from "react";
import "./navbar.css";

import logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      {/* Mobile menu toggle */}
      <button
        type="button"
        className="navbar-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="navbar-navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile centered logo */}
      <a
        href="#home"
        className="navbar-brand"
        onClick={closeMenu}
      >
        <img src={logo} alt="Sabor de Mi Tierra" />
      </a>

      {/* Navigation links */}
      <nav
        id="navbar-navigation"
        className={`navbar-links ${menuOpen ? "active" : ""}`}
        aria-label="Main navigation"
      >
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#menu" onClick={closeMenu}>
          Menu
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      {/* View Menu CTA */}
      <a
        href="#menu"
        className="navbar-order"
        aria-label="View our menu"
        onClick={closeMenu}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        </svg>

        <span>View Menu</span>
      </a>
    </header>
  );
}
