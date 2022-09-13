import React from "react";
import "../styles/Cover.scss"

const Cover = () => {
  return (
    <>
      <div className="cover-header">
        <h3>
          ENTREVISTA
          <br />
          <b>Zaratustra</b>
        </h3>
        <p>
          Acompáñanos a disfrutar de su hipnotizante sonido grunge. Además te
          presentamos la entrevista exclusiva.
        </p>
      </div>
      <div className="cover-image">
        <img
          src="https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Foto del post más reciente"
        />
      </div>
      <div className="cover-description">
        <p>
          Esta agrupación proveniente de León - Guanajuato se caracteriza por un
          potente sonido en las cuerdas que nos recuerda a bandas icónicas de
          los 90's y del alternativo.
        </p>
        <p>
          Conoce más acerca de la filosofía e inspiración para lograr su nuevo
          material y más, solo en BLM!
        </p>
      </div>
    </>
  );
};

export default Cover;
