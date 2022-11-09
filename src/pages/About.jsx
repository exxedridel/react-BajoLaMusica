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
            <h2>Mensaje de los fundadores</h2>
            <p>
              Todos estamos bajo la música... pues a donde quiera que vayamos o
              intentemos ir estará presente. La música no es una característica
              única de los seres humanos (algunos animales hacen ritmos 🥰), sin
              embargo, se ha demostrado que es una parte hasta esencial en el
              desarrollo de las personas ya que fortalece el aprendizaje, la
              memoria y nos puede hacer sentir emociones muy profundas. ¿Qué sería
              de nosotros sin la música?
            </p>
            <p>
              Afortunadamente somos músicos de profesión y no lo queremos averiguar o siquiera
              imaginar, por eso queremos que cada vez más gente pueda encontrar
              espacios y oportunidades para dar a conocer sus propuestas más
              facilmente y así nutrir un ecosistema sano basado en el simple
              hecho de seguir estando bajo la música. Con ese fin estamos
              creando este portal, ¡hagamos comunidad! 🎶
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
