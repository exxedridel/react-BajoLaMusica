import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";
import icon from "../assets/icons/icon.png";

function goTop() {
  console.log("pressed")
  window.scrollTo(0, 0);
}

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          © 2022 WebApp Bajo la Música Pvt. Ltd. — Derechos Reservados
        </div>
        <div onClick={goTop} className="right">
          <p>Volver a arriba</p>
          <img src={icon} alt="icon" />
        </div>
      </div>
    </>
  );
};

export default Footer;
