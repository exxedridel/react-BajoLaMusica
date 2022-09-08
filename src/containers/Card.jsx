import React from "react";
import "../styles/Card.scss";

const Card = (props) => {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "NUEVO";
  }
  // } else if (props.data.location === "Online") {
  //   badgeText = "ONLINE";
  // }

  return (
    <div className="cardi">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`${props.data.coverImg}`} className="card--image" />
      {/* given name doesnt matter | you can change it here but be carefull to call it correctly */}
      <div className="card--stats">
        {/* <img
          src="https://cdn-icons.flaticon.com/png/128/4369/premium/4369505.png?token=exp=1656623882~hmac=1ae6bf564e87178c73efe4ab04070a62"
          className="card--star"
        /> */}
        <span className="small">{props.data.stats.date}</span>
        {/* <span className="gray">{props.data.stats.reviewCount}&nbsp;•&nbsp;</span> */}
        <span className="gray small">&nbsp;({props.data.location})</span>
      </div>
      <p>{props.data.title}</p>
      <p>
        <span className="small">Lectura: {props.data.price} min</span>
      </p>
    </div>
  );
};

export default Card;
