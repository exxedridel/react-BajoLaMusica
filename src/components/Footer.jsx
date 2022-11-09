import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";
import icon from "../assets/icons/icon.png";
import upArrow from "../assets/icons/up-arrow.png"

function goTop() {
  window.scrollTo(0, 0);
}

const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <div className="template footer">
          <div className="left">
            <Link to="contact">
              <p>Consulta nuestro aviso de privacidad *</p>
            </Link>
            <p>© 2022 WebApp Bajo la Música Pvt. Ltd. — Derechos Reservados</p>
          </div>
          <div onClick={goTop} className="right">
            <img src={upArrow} alt="Back to top"/>
            <img src={icon} alt="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
