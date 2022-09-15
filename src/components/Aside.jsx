import React from "react";
import "../styles/Aside.scss";

const Aside = () => {
  return (
    <div className="aside-block">
      <div className="review-component">
        <h2 className="review-title center">TE RECOMENDAMOS</h2>
        <div className="aside-component spotify">
          <div className="album-stats">
            <p className="center">VarArtistName</p>
            <p>
              <span>VarAlbumName - álbum</span>
              <br />
              <span>VarLenght</span>
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1575836352530-a678424473bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
            className="aside-component-img"
            alt="Componente Spotify"
          />
        </div>
      </div>
      <hr className="division"/>
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
      <button className="btn contact-mobile">SUSCRIBIRME</button>
    </div>
  );
};

export default Aside;
