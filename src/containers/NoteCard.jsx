import React from "react";
import ReactPlayer from "react-player";
import "../styles/NoteCard.scss";

const Card = (props) => {

  return (
    <div className="note-cardi">
      <ReactPlayer
        url={props.data.url}
        width="100%"
        controls
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
