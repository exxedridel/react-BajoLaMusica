import React from "react";
import "../styles/Footer.scss";
import icon from "../assets/icons/icon.png"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          © 2022 Revista Bajo la Música Pvt. Ltd. — All Rights Reserved
        </div>
        <div className="right">
          <img src={icon} alt="icon" />
        </div>
      </div>
    </>
  );
};

export default Footer;
