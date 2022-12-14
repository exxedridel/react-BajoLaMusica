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
            <Link to="entrevistas" onClick={handleToggleMobile}>
              ENTREVISTAS
            </Link>
          </li>
          <li className="list-e">
            <Link to="vlog" onClick={handleToggleMobile}>
              VLOG
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
        <a
          href="https://wa.me/message/QNWKISFC6MBJI1"
          onClick={handleToggleMobile}
        >
          <button className="btn-contact-mobile">Contáctanos</button>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
