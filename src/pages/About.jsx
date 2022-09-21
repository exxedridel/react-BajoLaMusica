import React from "react";
import "../styles/About.scss";
import BLM_image from "../assets/images/BLM-image.png";

const About = () => {
  React.useEffect(() => {
    document.title = "Acerca | Bajo la Música";
  }, []);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="about-container">
        <div className="background-image-holder">
          <img src={BLM_image} alt="Imagen BLM" />
        </div>
        <div className="about-description">
          <h2>De los Fundadores</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            unde quasi maiores amet error alias omnis ullam, excepturi cumque
            eaque, consequuntur praesentium inventore eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            unde quasi maiores amet error alias omnis ullam, excepturi cumque
            eaque, consequuntur praesentium inventore eum.
          </p>
        </div>
      </div>
      <div className="directives-container">
        <div className="mision-container">
          <h2>Nuestra Misión</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            unde quasi maiores amet error alias omnis ullam, excepturi cumque
            eaque, consequuntur praesentium inventore eum.
          </p>
        </div>
        <div className="values-container">
          <h2>Nuestros Valores</h2>
          <div className="value-elements">
            <div className="value-ele">
              <h4>Lograr la excelencia</h4>
              <p>Luchamos para dejar una vara alta</p>
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
              <h4>Crecer nuestra comunidad</h4>
              <p>Porque más amigos es mejor</p>
            </div>
            <div className="value-ele">
              <h4>Inclusión</h4>
              <p>Valoramos toda forma de contenido</p>
            </div>
            <div className="value-ele">
              <h4>Actualización constante</h4>
              <p>Nunca pararemos de aprender</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
