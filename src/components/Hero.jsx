import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.scss";
import heroData from "../data/HeroData.js";

const Hero = () => {
  const [heroImage, setHeroImage] = React.useState("");

  // Call to unesplash api for random images of a topic
  // React.useEffect(() => {
  //   fetch(
  //     "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=concert"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setHeroImage(data.urls.regular);
  //     });
  // }, []);

  React.useEffect(() => {
    const randomNumber = Math.floor(Math.random() * heroData.length);
    setHeroImage(heroData[randomNumber].imageUrl);
  }, []);

  return (
    <div className="hero-container">
      <img src={`${heroImage}`} alt="Imagen de inicio." />
      <div className="overlap-text">
        <p>
          AHORA ESTÁS <br /> ¡<b>BAJO LA MÚSICA</b> <br /> DE GUANAJUATO!
        </p>
      </div>
      <button className="btn-hero">
        <Link to="about">Conoce más</Link>
      </button>
    </div>
  );
};

export default Hero;
