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
      <div className="card--stats">
        <span className="small">{props.data.stats.date} •&nbsp;</span>
        <span className="small">&nbsp;({props.data.location})</span>
      </div>
      <p className="small center">{props.data.title}</p>
      <div className="card--price">
        <p>
          <span className="small">Entrada: {props.data.price} </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
