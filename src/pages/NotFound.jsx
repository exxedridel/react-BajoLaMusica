import React from "react";
import img404 from "../assets/images/404.png";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="container-404">
        <h1>BAJO EL ERROR</h1>
        <img src={img404} alt="Imagen de 404" />
        <h2>No se encontró esa página</h2>
      </div>
    </div>
  );
};

export default NotFound;
