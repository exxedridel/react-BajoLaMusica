import React from "react";
import "../styles/PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  React.useEffect(() => {
    document.title = "Contacto | Bajo la Música";
  }, []);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="container">
        <div className="container-privacy">
          <h1>AVISO DE PRIVACIDAD</h1>
          <span>Última modificación noviembre 2022</span>
          <div className="container-body">
            <p>
              Hasta la fecha de edición del presente, Bajo la Música™ no
              recolecta ningún tipo de información personal durante la
              navegación de este sitio o al hacer uso de sus características.
            </p>
            <p>
              <b> La única información que recopilamos por el momento es: </b>
            </p>
            <ul>
              <li>
                Información de los dispositivos o computadoras desde los que
                accedes a esta plataforma y otros datos capturados
                automáticamente por temas de rendimiento (como el tipo o versión del navegador o del
                sistema operativo, configuraciones, datos de conexión y parámetros).
              </li>
              <br />
              <li>
                Dirección IP de internet que utilizas al conectarte al sitio web.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
