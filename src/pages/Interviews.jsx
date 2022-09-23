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

  const CoverCards = interviewsData.map((data) => {
    return <CoverCard key={data.id} data={data} />;
  });

  // const [arrayShown, setArrayShown] = React.useState(2);

  return (
    <div className="heading-block-Inter">
      <div className="container">
        <div className="heading-title exclusive-stripe">
          <h1>EXCLUSIVA BLM</h1>
        </div>
      </div>
      {CoverCards.slice(0, 1)}
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
