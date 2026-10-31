
import { useState } from "react";
import "./menu.css";

import smallSplashLeft from "../../assets/smallSplashLeft.png";
import smallSplashRight from "../../assets/smallSplashRight.png";
import MenuJson from "../../assets/menu/sabor-de-mi-tierra-menu-clean.json";

/* ==========================================
   TYPES
========================================== */

type MenuOption = {
  name: string;
  priceDelta?: number;
};

type MenuOptionGroup = {
  name: string;
  required?: boolean;
  values: MenuOption[];
};

type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  notes?: string;
  image: boolean;
  imageSrc: string;
  optionGroups?: MenuOptionGroup[];
  availability?: {
    daysOfWeek?: number[];
    label?: string;
    timeZone?: string;
  };
  needsReview?: boolean;
};

type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

const categories = MenuJson.categories as MenuCategory[];

const menuImages = import.meta.glob(
  "/src/assets/menu/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

function resolveImage(imageSrc: string): string {
  if (!imageSrc) return "";

  if (imageSrc.startsWith("/src/assets/menu/")) {
    return menuImages[imageSrc] ?? "";
  }

  if (imageSrc.startsWith("/menu/")) {
    return `${import.meta.env.BASE_URL}${imageSrc.slice(1)}`;
  }

  return "";
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

/* ==========================================
   IMAGE PLACEHOLDER
========================================== */

function ImagePlaceholder() {
  return (
    <div className="menu-product-placeholder">
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 3v7a3 3 0 0 0 6 0V3" />
        <path d="M7 3v18" />
        <path d="M20 21V3c-4 2-5 7-5 11h5" />
      </svg>

      <span>Sabor de Mi Tierra</span>
    </div>
  );
}

/* ==========================================
   PRODUCT CARD
========================================== */

function ProductCard({ item }: { item: MenuItem }) {
  const [imageFailed, setImageFailed] = useState(false);

  const imageUrl = item.image
    ? resolveImage(item.imageSrc)
    : "";

  const showImage = Boolean(imageUrl) && !imageFailed;

  return (
    <article className="menu-product-card">
      <div className="menu-product-inner">

        {/* Product image */}
        <div className="menu-product-image-container">
          {showImage ? (
            <img
              src={imageUrl}
              alt={item.name}
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <ImagePlaceholder />
          )}

          {item.availability?.label && (
            <span className="menu-product-badge">
              {item.availability.label}
            </span>
          )}
        </div>

        {/* Product details */}
        <div className="menu-product-content">

          <div className="menu-product-header">
            <h3>{item.name}</h3>

            <span className="menu-product-price">
              {formatPrice(item.price)}
            </span>
          </div>

          {item.description && (
            <p className="menu-product-description">
              {item.description}
            </p>
          )}

          {/* Available variations */}
          {item.optionGroups?.map((group) => (
            <div
              className="menu-product-options"
              key={`${item.id}-${group.name}`}
            >
              <span className="menu-product-options-title">
                {group.name}
              </span>

              <div className="menu-option-list">
                {group.values.map((option) => (
                  <span
                    className="menu-option"
                    key={option.name}
                  >
                    {option.name}

                    {option.priceDelta != null &&
                      option.priceDelta !== 0 && (
                        <>
                          {" "}
                          +{formatPrice(option.priceDelta)}
                        </>
                      )}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {item.notes && (
            <p className="menu-product-notes">
              {item.notes}
            </p>
          )}

        </div>
      </div>
    </article>
  );
}

/* ==========================================
   MAIN MENU
========================================== */

export default function Menu() {
  const [selectedCategory, setSelectedCategory] =
    useState(categories[0]?.id ?? "");

  const activeCategory = categories.find(
    (category) => category.id === selectedCategory
  );

  return (
    <section id="menu" className="menu">

      {/* Decorative menu heading */}
      <div className="menu-heading">
       
        

        <div className="menu-heading-text">
          <span className="menu-eyebrow">
            Sabores de nuestra tierra
          </span>

          <h2>Menu</h2>

          <p>
            Platillos con el auténtico sabor de México.
          </p>
        </div>

       
      </div>

      {/* Category navigation */}
      <div className="menu-grid" aria-label="Menu categories">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`menu-card ${
              selectedCategory === category.id
                ? "active"
                : ""
            }`}
            onClick={() => setSelectedCategory(category.id)}
            aria-pressed={selectedCategory === category.id}
          >
            <span className="menu-card-name">
              {category.name}
            </span>
          </button>
        ))}
      </div>

      {/* Menu products */}
      {activeCategory && (
        <div className="menu-products-section">

          <div className="menu-category-heading">
            <div>
              <span className="menu-category-eyebrow">
                Nuestro Menú
              </span>

              <h2>{activeCategory.name}</h2>
            </div>

            <span className="menu-category-count">
              {activeCategory.items.length} platillos
            </span>
          </div>

          <div className="menu-products-grid">
            {activeCategory.items.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      )}

      <p className="menu-disclaimer">
        Precios y disponibilidad sujetos a cambios.
        Consulte con el restaurante.
      </p>
    </section>
  );
}
