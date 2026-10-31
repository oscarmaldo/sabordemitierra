
import "./aboutC.css";

import counter from "../../assets/counter.png";
import eatingPlace from "../../assets/eatingplace.png";

export default function AboutC() {
  return (
    <section id="about" className="about-company">
      <div className="about-company-container">

        {/* Heading */}
        <div className="about-company-heading">
          <span className="about-company-eyebrow">
            NUESTRA HISTORIA
          </span>

          <h2>
            Un pedacito de México
            <span> en cada platillo</span>
          </h2>

          <div
            className="about-company-divider"
            aria-hidden="true"
          >
            <span />
            <span className="about-company-diamond" />
            <span />
          </div>
        </div>

        {/* Restaurant introduction */}
        <div className="about-company-description">
          <p>
            En <strong>Sabor de Mi Tierra</strong>, creemos que
            la mejor comida es aquella que nos recuerda a casa.
            Por eso, cada platillo está inspirado en los sabores,
            aromas y tradiciones de la cocina mexicana.
          </p>

          <p>
            Nos encanta compartir nuestra pasión por la comida
            casera, los ingredientes frescos y las recetas que
            reúnen a familias y amigos alrededor de la mesa.
            Queremos que cada visita sea una experiencia cálida,
            llena de sabor y buenos momentos.
          </p>
        </div>

        {/* Restaurant photographs */}
       
{/* Restaurant photo gallery */}
<div className="about-company-gallery">
  <figure className="about-company-photo">
    <div className="about-company-image-wrap">
      <img
        src={counter}
        alt="Mostrador y cocina de Sabor de Mi Tierra"
        loading="lazy"
      />
    </div>

    <figcaption>
      <h3>El sabor de nuestra cocina</h3>
      <p>
        Preparado con cariño, inspirado en nuestras raíces.
      </p>
    </figcaption>
  </figure>

  <figure className="about-company-photo">
    <div className="about-company-image-wrap">
      <img
        src={eatingPlace}
        alt="Comedor de Sabor de Mi Tierra"
        loading="lazy"
      />
    </div>

    <figcaption>
      <h3>Un lugar para sentirte en casa</h3>
      <p>
        Un espacio para disfrutar, compartir y crear recuerdos.
      </p>
    </figcaption>
  </figure>
</div>


        {/* Closing statement */}
        <p className="about-company-closing">
          De nuestra cocina a tu mesa,
          <strong> con mucho cariño.</strong>
        </p>

      </div>
    </section>
  );
}
