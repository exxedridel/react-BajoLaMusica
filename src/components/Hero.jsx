import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.scss";

const Hero = () => {
  const [heroImage, setHeroImage] = React.useState("");
  React.useEffect(() => {
    fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=concert"
    )
      .then((res) => res.json())
      .then((data) => {
        setHeroImage(data.urls.full)
      });
  }, []);
  // "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Loading image..." />
      <div className="overlap-text">
        <p>
          AHORA ESTÁS ¡<b>BAJO LA MÚSICA</b> DE GUANAJUATO!
        </p>
      </div>
      <button className="btn-hero">
        <Link to="about">Conoce más</Link>
      </button>
    </div>
  );
};

export default Hero;
