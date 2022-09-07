import React from "react";
import { Link } from "react-router-dom";
import "../styles/MobileMenu.scss";

const MobileMenu = ({ handleToggleMobile }) => {
  return (
    <div className="mobile-menu">
      <div className="list-elements">
        <ul>
          <li className="list-e">
            <Link to="/" onClick={handleToggleMobile}>
              INICIO
            </Link>
          </li>
          <li className="list-e">
            <Link to="videos" onClick={handleToggleMobile}>
              VIDEOS
            </Link>
          </li>
          <li className="list-e">
            <Link to="notes" onClick={handleToggleMobile}>
              NOTAS
            </Link>
          </li>
          <li className="list-e">
            <Link to="about" onClick={handleToggleMobile}>
              ACERCA
            </Link>
          </li>
        </ul>
      </div>
      <div className="btn-e">
        <Link to="contact" onClick={handleToggleMobile}>
          <button className="btn-contact-mobile">Contáctanos</button>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
