import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "../styles/CoverCard.scss";
import NavInterviews from "./NavInterviews";
import Subscribe from "../containers/Subscribe";
import interviewsData from "../data/InterviewsData";

const CoverCard = () => {
  React.useEffect(() => {
    document.title = `${thisInterview.artist} - Entrevista | Bajo la Música`;
  });

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const { artistID } = useParams();
  const thisInterview = interviewsData.find((inter) => inter.id === artistID);

  return (
    <>
      <div className="hero-container-Inter">
        <div className="exclusive-stripe">
          <span>
            <b>{thisInterview.exclusive && "EXCLUSIVA BLM"}</b>
          </span>
        </div>
        <img
          src={thisInterview.coverImg}
          alt={`Foto de ${thisInterview.artist}`}
        />
        <div className="overlap-text-Inter">
          <p>
            ENTREVISTA CON
            <br />
            <b>{thisInterview.artist}</b>
          </p>
          <p className="medium">{thisInterview.from}</p>
        </div>
        <span className="photo-by">Foto: {thisInterview.photoBy}</span>
      </div>
      <div className="container">
        <div className="cover-Inter">
          <div className="cover-description-Inter">
            <p>{thisInterview.descriptionP1}</p>
            <p>{thisInterview.descriptionP2}</p>
          </div>
          <div className="container">
            <p>
              Aquí tienes la entrevista que tuvimos la oportunidad de realizar:
            </p>
            <div className="video video-Inter">
              <ReactPlayer url={thisInterview.url} controls />
            </div>
          </div>
          <div className="article-Inter">
            <p>{thisInterview.articleP1}</p>
            <p>{thisInterview.articleP2}</p>
            <p>{thisInterview.articleP3}</p>
          </div>
          <div className="container">
            <div className="video video-Promo">
              <ReactPlayer url={thisInterview.url2} controls />
            </div>
          </div>
          <div className="closing">
            <p>{thisInterview.closing}</p>
          </div>
          <p>
            <b>Apoya su trabajo siguiendo sus redes:</b>
          </p>
          <div className="artist-links">
            <ul>
              <li>
                <a href={thisInterview.link1}>{thisInterview.media1}</a>
              </li>
              <li>
                <a href={thisInterview.link2}>{thisInterview.media2}</a>
              </li>
              <li>
                <a href={thisInterview.link3}>{thisInterview.media3}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NavInterviews />
      <Subscribe />
    </>
  );
};

export default CoverCard;
