import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavInterviews.scss";
import interviewsData from "../data/InterviewsData";

const NavInterviews = () => {
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
    <div>
      <div className="container navigation-section">
        <h2 className="center">
          BAJO LA ENTREVISTA <br /> CON:
        </h2>
        <div className="artists-buttons">{interviews}</div>
      </div>
    </div>
  );
};

export default NavInterviews;
