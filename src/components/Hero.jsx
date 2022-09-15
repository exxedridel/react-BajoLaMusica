import React from "react";
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
          Hola mi vro, ahora ya
          <br />
          estás ¡<b>bajo la música</b>!
        </p>
      </div>
    </div>
  );
};

export default Hero;
