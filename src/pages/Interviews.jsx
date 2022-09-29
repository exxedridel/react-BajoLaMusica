import React from "react";
import "../styles/Interviews.scss";
import CoverCard from "../containers/CoverCard";
import ArtistButton from "../containers/ArtistButton";
import interviewsData from "../data/InterviewsData.js";

const Interviews = () => {
  React.useEffect(() => {
    document.title = `${interviewsData[currentArtist].artist} - Entrevista | Bajo la Música`;
  });

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const [currentArtist, setCurrentArtist] = React.useState(0);

  const CoverCards = interviewsData.map((data) => {
    return <CoverCard key={data.id} data={data} />;
  });

  const ArtistButtons = interviewsData.map((data, index) => {
    return (
      <ArtistButton
        key={data.id}
        data={data}
        handleClick={() => changeCurrentArtist(index)}
      />
    );
  });

  function changeCurrentArtist(index) {
    setCurrentArtist(index)
  }

  return (
    <div className="heading-block-Inter">
      <div className="container">
      </div>
      {CoverCards[currentArtist]}
      <div className="container navigation-section">
        <h2 className="center">BAJO LA ENTREVISTA <br /> CON:</h2>
        <div className="artists-buttons">{ArtistButtons}</div>
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
