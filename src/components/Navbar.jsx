import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import menu from "../assets/icons/icon_menu.svg";
import logo from "../assets/images/logo_bajo_musica.png";

const App = () => {
  return (
    <nav className="navbar">
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>

        <ul>
          <li>
            <Link to="/vlog">Vlog</Link>
          </li>
          <li>
            <Link to="/news">Noticias</Link>
          </li>
          <li>
            <Link to="/Contact">Contacto</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">hevedrios@bajolamusica.com</li>
        </ul>
      </div>
    </nav>
  );
};

export default App;
