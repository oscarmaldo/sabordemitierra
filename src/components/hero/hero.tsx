
import "./hero.css";

import logo from "../../assets/logo.png";
import heroImg from "../../assets/heroImg.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Subtle woven background texture */}
      <div className="hero-texture" aria-hidden="true" />

      {/* Restaurant introduction */}
      <div className="hero-content">
        <img
          src={logo}
          alt="Sabor de Mi Tierra"
          className="hero-logo"
        />

        <h1 className="hero-title">
          The Best Mexican Food
          <span>in the Coachella Valley</span>
        </h1>

        <p className="hero-subtitle">
          Comida casera, con el sabor de mi tierra.
        </p>

        <div className="hero-actions">
          <a href="#menu" className="hero-menu">
            View Menu
          </a>
        </div>
      </div>

      {/* Restaurant food photograph */}
      <div className="hero-image-container">
        <img
          src={heroImg}
          alt="Delicious Mexican tacos with fresh cilantro and lime"
          className="hero-food-image"
          fetchPriority="high"
        />
      </div>

      {/* Talavera mosaic wave */}
      <div className="hero-mosaic" aria-hidden="true">
        <div className="hero-mosaic-tiles" />

        <svg
          className="hero-mosaic-outline"
          viewBox="0 0 1200 110"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path
            d="
              M 0 104
              C 210 108, 340 110, 465 88
              C 610 54, 670 5, 805 18
              C 940 30, 1040 70, 1200 34
            "
            fill="none"
            stroke="#082f55"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
