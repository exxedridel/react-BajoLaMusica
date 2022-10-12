import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavInterviews.scss";
import interviewsData from "../data/interviewsData";

const NavInterviews = () => {
  const interviews = interviewsData.map((interview) => (
    <Link to={`/entrevistas/${interview.id}`}>
      <div className="interview-element" key={interview.id}>
        <img className="image-artist" src={`${interview.coverImg}`} alt="" />
        <button className="btn btn-artist">{interview.artist}</button>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="container navigation-section">
        <h2 className="center">
          BAJO LA ENTREVISTA <br /> CON:
        </h2>
        <div className="artists-buttons">{interviews}</div>
      </div>
    </>
  );
};

export default NavInterviews;
