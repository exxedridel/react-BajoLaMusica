import React from "react";
import ReactPlayer from "react-player";
import "../styles/CoverCard.scss";

const CoverCard = (props) => {
  return (
    <>
      <div className="hero-container-Inter">
        <div className="exclusive-stripe">
          <span><b>{props.data.exclusive && "EXCLUSIVA BLM"}</b></span>
        </div>
        <img src={props.data.coverImg} alt={`Foto de ${props.data.artist}`} />
        <div className="overlap-text-Inter">
          <p>
            ENTREVISTA CON
            <br />
            <b>{props.data.artist}</b>
          </p>
          <p className="medium">{props.data.from}</p>
        </div>
        <span className="photo-by">Foto: {props.data.photoBy}</span>
      </div>
      <div className="container">
        <div className="cover-Inter">
          <div className="cover-description-Inter">
            <p>{props.data.descriptionP1}</p>
            <p>{props.data.descriptionP2}</p>
          </div>
          <div className="container">
            <p>
              Aquí tienes la entrevista que tuvimos la oportunidad de realizar:
            </p>
            <div className="video video-Inter">
              <ReactPlayer url={props.data.url} controls />
            </div>
          </div>
          <div className="article-Inter">
            <p>{props.data.articleP1}</p>
            <p>{props.data.articleP2}</p>
            <p>{props.data.articleP3}</p>
          </div>
          <div className="container">
            <div className="video video-Promo">
              <ReactPlayer url={props.data.url2} controls />
            </div>
          </div>
          <div className="closing">
            <p>{props.data.closing}</p>
          </div>
          <p>
            <b>Apoya su trabajo siguiendo sus redes:</b>
          </p>
          <div className="artist-links">
            <ul>
              <li>
                <a href={props.data.link1}>{props.data.media1}</a>
              </li>
              <li>
                <a href={props.data.link2}>{props.data.media2}</a>
              </li>
              <li>
                <a href={props.data.link3}>{props.data.media3}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverCard;
