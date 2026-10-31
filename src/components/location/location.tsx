
import "./location.css";

import smallSplashLeft from "../../assets/smallSplashLeft.png";
import smallSplashRight from "../../assets/smallSplashRight.png";

const ADDRESS =
  "Inside Indoor Swapmeet, 49661 Cesar Chavez St, Coachella, CA 92236";

// Add the restaurant's actual phone number here.
// Example format: "+1760XXXXXXX"
const PHONE_NUMBER = "4423240008";

const MAPS_API_KEY =
  import.meta.env.VITE_GOOGLE_MAPS_EMBED_KEY;

const DIRECTIONS_URL =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS
  )}`;

export default function Location() {
  const mapUrl = MAPS_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(
        MAPS_API_KEY
      )}&q=${encodeURIComponent(ADDRESS)}`
    : "";

  return (
    <section id="contact" className="location-section">
      <div className="location-container">

        {/* Section heading */}
        <div className="location-heading">
          <img
            src={smallSplashLeft}
            alt=""
            className="location-heading-decor"
          />

          <div className="location-heading-content">
            <span className="location-eyebrow">
              VISÍTANOS
            </span>

            <h2>Encuéntranos</h2>

            <p>
              Te esperamos con el auténtico sabor
              de nuestra tierra.
            </p>
          </div>

          <img
            src={smallSplashRight}
            alt=""
            className="location-heading-decor"
          />
        </div>

        {/* Information and map */}
        <div className="location-grid">

          {/* Left side: business information */}
          <div className="location-info-card">

            <div className="location-info-header">
              <span className="location-info-eyebrow">
                SABOR DE MI TIERRA
              </span>

              <h3>Ven a visitarnos</h3>

              <p>
                Disfruta de nuestros platillos
                en un ambiente familiar y acogedor.
              </p>
            </div>

            <div className="location-details">

              {/* Address */}
              <div className="location-detail">
                <div className="location-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div className="location-detail-text">
                  <h4>Dirección</h4>

                  <p>
                    Inside Indoor Swapmeet
                    <br />
                    49661 Cesar Chavez St
                    <br />
                    Coachella, CA 92236
                  </p>
                </div>
              </div>

              {/* Business hours */}
              <div className="location-detail">
                <div className="location-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <div className="location-detail-text">
                  <h4>Horario de atención</h4>
                  <p>9:30 AM – 7:00 PM</p>
                </div>
              </div>

              {/* Phone */}
              <div className="location-detail">
                <div className="location-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.1 10a16 16 0 0 0 6.9 6.9l1.6-1.9a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 2Z" />
                  </svg>
                </div>

                <div className="location-detail-text">
                  <h4>Teléfono</h4>

                  {PHONE_NUMBER ? (
                    <a href={`tel:${PHONE_NUMBER}`}>
                      {PHONE_NUMBER}
                    </a>
                  ) : (
                    <p>Próximamente</p>
                  )}
                </div>
              </div>

            </div>

            {/* Action buttons */}
            <div className="location-actions">

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="location-directions-button"
              >
                Cómo llegar
                <span aria-hidden="true">↗</span>
              </a>

              {PHONE_NUMBER && (
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="location-call-button"
                >
                  Llamar ahora
                </a>
              )}

            </div>

          </div>

          {/* Right side: Google Maps */}
          <div className="location-map-card">
            <div className="location-map-header">
              <div>
                <span>NUESTRA UBICACIÓN</span>
                <h3>Coachella, California</h3>
              </div>

              <div
                className="location-map-marker"
                aria-hidden="true"
              >
                📍
              </div>
            </div>

            <div className="location-map-frame">
              {mapUrl ? (
                <iframe
                  title="Mapa de Sabor de Mi Tierra"
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <div className="location-map-fallback">
                  <p>
                    El mapa estará disponible
                    al configurar Google Maps.
                  </p>
                </div>
              )}
            </div>

            <div className="location-map-footer">
              <span>
                Inside Indoor Swapmeet
              </span>

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir en Google Maps ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
