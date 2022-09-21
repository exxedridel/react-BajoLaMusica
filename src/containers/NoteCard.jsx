import React from "react";
import "../styles/NoteCard.scss";

const Card = (props) => {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "NUEVO";
  }
  // } else if (props.data.location === "Online") {
  //   badgeText = "ONLINE";
  // }

  return (
    <div className="note-cardi">
      <img
        src={`${props.data.coverImg}`}
        className="note-card--image"
        alt="Note image"
      />
      <div className="note-card--category">
        <span className="small">{props.data.stats.category}</span>
      </div>
      <div className="note-card--title">
        <p>{props.data.title}</p>
      </div>
    </div>
  );
};

export default Card;
