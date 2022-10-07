import React from "react";
import { Link } from "react-router-dom";
import "../styles/Interviews.scss";
import NavInterviews from "../containers/NavInterviews";
import Subscribe from "../containers/Subscribe";
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
      <div className="container">
        {/* Here was rendering the latest interview */}
      </div>
      <NavInterviews />
      <Subscribe />
    </div>
  );
};

export default Interviews;
