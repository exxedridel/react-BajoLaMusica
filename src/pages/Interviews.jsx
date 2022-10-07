import React from "react";
import { Link } from "react-router-dom";
import "../styles/Interviews.scss";
import interviewsData from "../data/InterviewsData";

const Interviews = () => {
  React.useEffect(() => {
    document.title = "Entrevistas | Bajo la Música";
  });

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  // const [currentArtist, setCurrentArtist] = React.useState(0);

  // const CoverCards = interviewsData.map((data) => {
  //   return <CoverCard key={data.id} data={data} />;
  // });

  // function changeCurrentArtist(index) {
  //   setCurrentArtist(index)
  // }

  const interviews = interviewsData.map((inter) => (
    <div key={inter.id}>
      <p>
        <Link to={`/interviews/${inter.id}`}>
          <button className="btn btn-artist">{inter.artist}</button>
        </Link>
      </p>
    </div>
  ));

  return (
    <div className="heading-block-Inter">
      <div className="container"></div>

      <div className="container navigation-section">
        <h2 className="center">
          BAJO LA ENTREVISTA <br /> CON:
        </h2>
        <div className="artists-buttons">{interviews}</div>
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
