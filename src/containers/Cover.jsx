import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss"
import "../styles/Cover.scss";

const Cover = (props) => {
  return (
    <Link to={`entrevistas/${props.data.id}/`} className="cover">
      <div className="cover-header">
        <h2>
          ENTREVISTA CON
          <br />
          <b>{props.data.artist}</b>
        </h2>
        <p>{props.data.introduction}</p>
        <p className="pink">Clic en este post.</p>
      </div>
      <div className="cover-image">
        <img
          src={props.data.coverImg}
          alt={`Foto de ${props.data.artist}`}
        />
      </div>
      <div className="cover-description">
        <p>
          {props.data.descriptionP1}
        </p>
        <p>
          {props.data.descriptionP2}
        </p>
      </div>
    </Link>
  );
};

export default Cover;
