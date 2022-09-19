import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <img
        src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Concierto portada BLM"
      />
      <div className="overlap-text">
        <p>
          AHORA ESTÁS ¡<b>BAJO LA MÚSICA</b> DE GUANAJUATO!
        </p>
      </div>
      <button className="btn btn-hero"><Link to="about">Conoce más</Link></button>
    </div>
  );
};

export default Hero;
