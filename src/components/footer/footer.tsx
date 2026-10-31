
import "./footer.css";

import logo from "../../assets/logo.png";
import instaLogo from "../../assets/lucide-instagram.svg";
import facebookLogo from "../../assets/devicon-facebook.svg";

const SOCIAL_URL = "https://www.instagram.com/el.sabor.dmt14/";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Restaurant logo */}
        <a href="#home" className="footer-logo">
          <img src={logo} alt="Sabor de Mi Tierra" />
        </a>

        {/* Restaurant description */}
        <h2 className="footer-title">
          Authentic Mexican Flavor
        </h2>

        <p className="footer-description">
          Comida casera, con el sabor de mi tierra.
        </p>

        {/* Decorative divider */}
        <div
          className="footer-divider"
          aria-hidden="true"
        >
          <span />
          <span className="footer-diamond" />
          <span />
        </div>

        {/* Social media */}
        <div className="footer-socials">
          <a
            href={SOCIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Sabor de Mi Tierra"
            className="footer-social-link"
          >
            <img src={instaLogo} alt="" />
          </a>

          <a
            href={SOCIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Sabor de Mi Tierra"
            className="footer-social-link"
          >
            <img src={facebookLogo} alt="" />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} Sabor de Mi Tierra.
            All rights reserved.
          </small>
        </div>

      </div>
    </footer>
  );
}
