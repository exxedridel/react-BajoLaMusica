import React from "react";
import "../styles/Vlog.scss";
import NoteCard from "../containers/NoteCard";
import postsData from "../data/PostsData.js";

const Vlog = () => {
  React.useEffect(() => {
    document.title = "Notas | Bajo la Música";
  }, []);

  // React.useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  const NotesCards = postsData.map((data) => {
    return <NoteCard key={data.id} data={data} />;
  });

  const [arrayShown, setArrayShown] = React.useState(3);

  function addItems() {
    setArrayShown((prevState) => prevState + 1);
  }

  const styles = {
    display: postsData.length > arrayShown ? "" : "none",
  };

  return (
    <>
      <div className="vlog-block">
        <h2 className="center">BAJO EL VLOG</h2>
        <div className="notes-card-list">{NotesCards.slice(0, arrayShown)}</div>
        <div className="center">
          <button onClick={addItems} style={styles} className="btn verMas">
            Ver 1 más
          </button>
        </div>
        <div className="subscribe-vlog center">
          <p>Apoyarnos con tu suscripción es gratis 🥴</p>
          <a href="https://www.youtube.com/channel/UC_aUkl6FZas7RexmZFtGeuw?sub_confirmation=1">
            <button className="btn btn-subscribe">SUSCRIBIRME</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Vlog;
