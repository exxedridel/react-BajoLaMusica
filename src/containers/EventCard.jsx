import React from "react";
import "../styles/EventCard.scss";

const Card = (props) => {
  

  return (
    <div className="cardi">
      <img src={`${props.data.coverImg}`} className="card--image" alt="Imagen del flyer"/>
      <div className="center">
        <span className="card--date">{props.data.stats.date} •&nbsp;</span>
        <span className="card--time">{props.data.stats.time}</span>
      </div>
      <span className="card--location">({props.data.location})</span>
      <span className="card--title center">{props.data.title}</span>
      <span className="card--price">Entrada: {props.data.price} </span>
    </div>
  );
};

export default Card;
