import React from "react";
import "../styles/Home.scss";
import HeaderBanner from "../components/HeaderBanner";
import Card from "../containers/Card";
import pageData from "../BajoLaData.js";

const Home = () => {
  React.useEffect(() => {
    document.title = "Bajo la Música";
  }, []);

  const Cards = pageData.map((data) => {
    return <Card key={data.id} data={data} />;
  });

  return (
    <>
      <HeaderBanner />
      <section className="heading-block center">
        <div className="heading-title">
          <h1>LO ÚLTIMO:</h1>
        </div>
        <div className="heading-description">
          <h2>
            Entrevista con
            <br />
            <b>ArtistName</b>
          </h2>
          <p>
            Acompáñanos a disfrutar de su hipnotizante sonido grunge. Además te
            presentamos la entrevista exclusiva.
          </p>
        </div>
        <div className="heading-image">
          <img
            src="https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Foto del post más reciente"
          />
        </div>
        <div className="heading-description">
          <p>
            Esta agrupación proveniente de León - Guanajuato se caracteriza por
            un potente sonido en las cuerdas que nos recuerda a bandas icónicas
            de los 90's.
          </p>
          <p>Conoce más acerca de su filosofía e inspiración para lograr este nuevo material y más, solo en BLM!</p>
        </div>
      </section>

      <section className="middle-block center">
        <h2>NOTICIAS</h2>
        <div className="card-list">{Cards}</div>
      </section>

      <section className="bottom-block center">
        <div className="bottom-title">
          <h2>REVIEWS</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
