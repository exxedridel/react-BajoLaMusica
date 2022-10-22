import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.scss";
// import heroData from "../data/heroData.js";
import axios from "axios";

const Hero = () => {
  const [heroImage, setHeroImage] = React.useState("");

  /* Call to unesplash api for random images of a topic */
  useEffect(() => {
    axios.get("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=concert")
      .then((res) => setHeroImage(res.data.urls.regular))
      .catch((error) => {console.log(error)});
  }, []);

  /* Same call with @babel/plugin-transform-runtime, not working */
  // useEffect(async () => {
  //   const response = await axios("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=concert");
  //   setHeroImage(response.data);
  // }, []);

  /* random images from local array */
  // React.useEffect(() => {
  //   const randomNumber = Math.floor(Math.random() * heroData.length);
  //   setHeroImage(heroData[randomNumber].imageUrl);
  // }, []);

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
