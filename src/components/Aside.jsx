import React from "react";
import { TikTok } from "react-tiktok";
import { InstagramEmbed } from "react-social-media-embed";
import "../styles/Aside.scss";
import albumsData from "../data/albumsData";

const Aside = () => {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div className="aside-block">
      <div className="review-component">
        <h2 className="review-title center">TE RECOMENDAMOS</h2>
        <div className="spotify">
          <iframe
            src={`https://open.spotify.com/embed?uri=spotify:album:${albumsData[0].urlId}`}
            width="100%"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <button className="btn-review" onClick={toggleShown}>
          {isShown ? "Ocultar" : "Mostrar"} reseña
        </button>
        {isShown && (
          <div className="review-description">
            <p>{AlbumsData[0].descriptionP1}</p>
            <p>{AlbumsData[0].descriptionP2}</p>
            <p>{AlbumsData[0].descriptionP3}</p>
          </div>
        )}
      </div>
      <hr className="division" />
      <h3>SÍGUENOS BLM</h3>
      <div className="aside-component-list">
        <div className="instagram">
          <InstagramEmbed
            url="https://www.instagram.com/reel/ChdhSOpLa4k/"
            width="100%"
          />
        </div>
        <div className="tiktok">
          <TikTok url="https://www.tiktok.com/@bajolamusica432/video/7109317501913271557" />
        </div>
      </div>
      <div className="subscribe-aside">
        <a href="https://www.youtube.com/channel/UC_aUkl6FZas7RexmZFtGeuw?sub_confirmation=1">
          <button className="btn btn-subscribe">SUSCRIBIRME</button>
        </a>
      </div>
    </div>
  );
};

export default Aside;
