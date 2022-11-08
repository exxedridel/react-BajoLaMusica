import React from "react";
import "../styles/About.scss";
import BLM_image from "../assets/images/BLM-image.png";
import whatsapp from "../assets/icons/whatsapp-icon.png";

const About = () => {
  React.useEffect(() => {
    document.title = "Acerca | Bajo la Música";
  }, []);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="template">
        <div className="about-container">
          <div className="background-image-holder">
            <img src={BLM_image} alt="Imagen BLM" />
          </div>
          <div className="about-description">
            <h2>De los Fundadores</h2>
            <p>
              Todos estamos bajo la música... ya que forma una actividad hasta
              esencial para el desarrollo del individuo, sin embargo la realidad
              es que este arte se ha convertido en una industria para beneficiar
              a los que menos aportan a ella. De ahí que nuestro objetivo sea
              contribuir dando visibilidad a los que trabajan duro por hacerse
              escuchar.
            </p>
            <p>
              Somos músicos y entendemos que las oportunidades y los espacios
              son cada vez más difíciles de encontrar, por eso estamos
              construyendo este portal donde todo el que tenga una propuesta
              pueda sumarse a esta comunidad y crecer juntos.
            </p>
          </div>
        </div>
        <div className="directives-container">
          <div className="mision-container">
            <h2>Nuestra Misión</h2>
            <p>
              Dar difusión a quien la requiera: ¿tienes nuevo material? ¿vas a
              tener un concierto? o ¿simplemente quieres dar a conocer tu
              propuesta? entonces no dudes en contactarnos, seguro te podemos
              ayudar.
            </p>
          </div>
          <div className="values-container">
            <h2>Nuestros Valores</h2>
            <div className="value-elements">
              <div className="value-ele">
                <h4>Equidad</h4>
                <p>Lograr igualdad de oportunidades</p>
              </div>
              <div className="value-ele">
                <h4>Hacer lo correcto</h4>
                <p>Incluso cuando nadie está viendo</p>
              </div>
              <div className="value-ele">
                <h4>Innovación</h4>
                <p>Encontrar maneras de hacerlo mejor</p>
              </div>
              <div className="value-ele">
                <h4>Crecer como comunidad</h4>
                <p>Porque más amigos es mejor</p>
              </div>
              <div className="value-ele">
                <h4>Inclusión</h4>
                <p>Apreciamos toda forma de contenido</p>
              </div>
              <div className="value-ele">
                <h4>Actualización constante</h4>
                <p>Nunca pararemos de aprender</p>
              </div>
            </div>
          </div>
          <div className="whatsapp">
            <a href="https://wa.me/message/QNWKISFC6MBJI1">
              <img src={whatsapp} alt="whatsapp logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
