import React from "react";
import "../styles/Interviews.scss"
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
    <div className="heading-block">
      <div className="heading-title">
        <h1>EXCLUSIVO BLM</h1>
      </div>
      {CoverCards.slice(0, 1)}
    </div>
  );
};

export default Interviews;
