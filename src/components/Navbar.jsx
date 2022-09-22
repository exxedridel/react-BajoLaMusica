import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import menu from "../assets/icons/menu-btn.png";
import logo from "../assets/icons/bajo-la-musica-logo.png";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [toggleMobile, setToggleMobile] = React.useState(false);

  const handleToggleMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  return (
    <>
      <nav id="Navbar" className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="logo" className="nav-logo" />
          </Link>
        </div>

        <div className="navbar-right">
          <ul>
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <Link to="interviews">ENTREVISTAS</Link>
            </li>
            <li>
              <Link to="vlog">VLOG</Link>
            </li>
            <li>
              <Link to="about">ACERCA</Link>
            </li>
            <Link to="contact">
              <button className="btn btn-contact">Contáctanos</button>
            </Link>
          </ul>
        </div>
        <img
          src={menu}
          alt="menu button"
          className="menu-btn"
          onClick={handleToggleMobile}
        />
      </nav>
      {toggleMobile && <MobileMenu handleToggleMobile={handleToggleMobile} />}
    </>
  );
};

export default Navbar;
