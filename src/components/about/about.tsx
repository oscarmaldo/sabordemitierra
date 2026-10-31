
import "./about.css";

import tacoIcon from "../../assets/taco.svg";
import chiliIcon from "../../assets/chili.svg";
import heartIcon from "../../assets/heart.svg";
import locationIcon from "../../assets/location.svg";

const features = [
  {
    icon: tacoIcon,
    title: "Fresh Ingredients",
    subtitle: "Siempre frescos",
  },
  {
    icon: chiliIcon,
    title: "Authentic Recipes",
    subtitle: "Recetas tradicionales",
  },
  {
    icon: heartIcon,
    title: "Made with Family",
    subtitle: "Hecho con amor",
  },
  {
    icon: locationIcon,
    title: "Easy Takeout",
    subtitle: "Rápido y conveniente",
  },
];

export default function About() {
  return (
    <section  className="about">
      <div className="about-features">
        {features.map((feature) => (
          <div className="about-feature" key={feature.title}>
            <img src={feature.icon} alt="" />
            <h3>{feature.title}</h3>
            <p>{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
