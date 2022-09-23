import React from "react";
import ReactPlayer from "react-player";
import "../styles/CoverCard.scss";

const CoverCard = (props) => {
  return (
    <div className="cover-Inter">
      <div className="cover-image-Inter">
        <img src={props.data.coverImg} alt="Foto de entrevista más reciente" />
      </div>
      <div className="cover-header-Inter">
        <h2>
          ENTREVISTA CON
          <br />
          <b>{props.data.artist}</b>
        </h2>
      </div>
      <div className="cover-description-Inter">
        <p>{props.data.introduction}</p>
        <p>{props.data.descriptionP1}</p>
        <p>{props.data.descriptionP2}</p>
      </div>
      <div className="container">
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
  );
};

export default CoverCard;
