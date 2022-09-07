import React from "react";
import "../styles/Home.scss";
import HeaderBanner from "../components/HeaderBanner";

const Home = () => {
  React.useEffect(() => {
    document.title = "Bajo la Música";
  }, []);
  return (
    <>
      <HeaderBanner />
      <section className="heading-block">
        <div className="heading-title">
          <h1>LO ÚLTIMO</h1>
        </div>
        <div className="heading-description">
          <p>
            Acompáñanos a conocer el hipnotizante sonido de <b>ArtistName</b>.
            Además te presentamos la entrevista exclusiva, clic aquí.
          </p>
        </div>
        <div className="heading-image">
          <img
            src="https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Foto del post más reciente"
          />
        </div>
      </section>

      <section className="middle-block">
        <div className="middle-title">
          <h2>NOTICIAS</h2>
        </div>
      </section>

      <section className="bottom-block">
        <div className="bottom-title">
          <h2>REVIEWS</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
