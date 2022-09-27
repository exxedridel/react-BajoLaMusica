import React from "react";
import "../styles/Interviews.scss";
import CoverCard from "../containers/CoverCard";
import interviewsData from "../data/InterviewsData.js";

const Interviews = () => {
  React.useEffect(() => {
    document.title = "Videos | Bajo la Música";
  }, []);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const [currentArtist, setCurrentArtist] = React.useState(0);

  function prevArtist() {
    setCurrentArtist(currentArtist - 1);
  }

  function nextArtist() {
    setCurrentArtist(currentArtist + 1);
  }

  const hideBtnAnterior = {
    display: currentArtist == 0 ? "none" : "",
  };
  const hideBtnSiguiente = {
    display: currentArtist == interviewsData.length - 1 ? "none" : "",
  };

  const CoverCards = interviewsData.map((data) => {
    return <CoverCard key={data.id} data={data} />;
  });
  return (
    <div className="heading-block-Inter">
      <div className="container">
        <div className="heading-title exclusive-stripe">
          <h1>EXCLUSIVA BLM</h1>
        </div>
      </div>
      {CoverCards[currentArtist]}
      <div className="container navigation-section">
        <h2 className="center">BAJO LA ENTREVISTA</h2>
        <div className="navigation-buttons">
          <button
            onClick={prevArtist}
            style={hideBtnAnterior}
            className="btn btn-prev"
          >
            Anterior
          </button>

          <button
            onClick={nextArtist}
            style={hideBtnSiguiente}
            className="btn btn-next"
          >
            {interviewsData
              .map((data) => data.artist)
              .slice(currentArtist + 1, currentArtist + 2)}
          </button>
        </div>
      </div>
      <div className="subscribe-home center">
        <p>Apóyanos con tu suscripción a BLM</p>
        <a href="https://www.youtube.com/channel/UC_aUkl6FZas7RexmZFtGeuw?sub_confirmation=1">
          <button className="btn btn-subscribe">SUSCRIBIRME</button>
        </a>
      </div>
    </div>
  );
};

export default Interviews;
