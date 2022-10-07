import React from "react";
import "../styles/Subscribe.scss";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe-home center">
        <p>Apóyanos con tu suscripción a BLM</p>
        <a href="https://www.youtube.com/channel/UC_aUkl6FZas7RexmZFtGeuw?sub_confirmation=1">
          <button className="btn btn-subscribe">SUSCRIBIRME</button>
        </a>
      </div>
    </>
  );
};

export default Subscribe;
