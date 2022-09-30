import React from "react";
import "../styles/Aside.scss";

const Aside = () => {
  return (
    <div className="aside-block">
      <div className="review-component">
        <h2 className="review-title center">ÁLBUM DEL MES</h2>
        <div className="aside-component spotify">
          <iframe
            src="https://open.spotify.com/embed?uri=spotify:album:0rre7z2j7c3zbxasPRhshi"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <p className="center">(drop down info)</p>
        </div>
      </div>
      <hr className="division" />
      <div className="aside-component-list">
        <div className="aside-component tiktok">
          <img
            src="https://images.unsplash.com/photo-1597075095400-fb3f0de70140?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
            alt="Componente TikTok"
          />
        </div>
        <div className="aside-component instagram">
          <img
            src="https://images.unsplash.com/photo-1595039838779-f3780873afdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Componente Instagram"
          />
        </div>
      </div>
      <a href="https://www.youtube.com/channel/UC_aUkl6FZas7RexmZFtGeuw?sub_confirmation=1">
        <button className="btn btn-subscribe">SUSCRIBIRME</button>
      </a>
    </div>
  );
};

export default Aside;
