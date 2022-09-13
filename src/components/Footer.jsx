import React from "react";
import "../styles/Footer.scss";
import icon from "../assets/icons/icon.png"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          © 2022 WebApp Bajo la Música Pvt. Ltd. — Derechos Reservados
        </div>
        <div className="right">
          <img src={icon} alt="icon" />
        </div>
      </div>
    </>
  );
};

export default Footer;
