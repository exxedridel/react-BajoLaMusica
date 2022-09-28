import React from "react";
import "../styles/ArtistButton.scss";

const ArtistButton = (props) => {
  return (
    <div className="container">
      <button onClick={props.handleClick} className="btn btn-next">{props.data.artist}</button>
    </div>
  );
};

export default ArtistButton;
