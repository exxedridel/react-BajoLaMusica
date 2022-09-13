import React from "react";
import "../styles/EventCard.scss";

const Card = (props) => {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "AGOTADO";
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="cardi">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`${props.data.coverImg}`} className="card--image" />
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
