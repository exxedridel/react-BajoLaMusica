import React from "react";
import "../styles/EventCard.scss";

const Card = (props) => {

  let badgeText;

  if (props.data.date.month === props.todayMonth) {
    if (props.data.date.day === props.todayDay) {
      badgeText = "HOY";
    } else {
      badgeText = "ESTE MES";
    }
  }

  const month = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

  return (
    <div className="cardi">
      <a href={`${props.data.link}`}>
      {badgeText && <div className="card--badge">{badgeText}</div>}
        <img
          src={`${props.data.coverImg}`}
          className="card--image"
          alt="Imagen del flyer"
        />
        <div className="center">
          <span className="card--date">{props.data.date.day} {month[props.data.date.month - 1]} •&nbsp;</span>
          <span className="card--time">{props.data.time}</span>
        </div>
        <span className="card--location">({props.data.location})</span>
        <span className="card--title">{props.data.title}</span>
        <span className="card--price">Entrada: {props.data.price} </span>
      </a>
    </div>
  );
};

export default Card;
