import React from "react";
import "../styles/Vlog.scss";
import NoteCard from "../containers/NoteCard";
import postsData from "../data/PostsData.js";

const Vlog = () => {
  React.useEffect(() => {
    document.title = "Notas | Bajo la Música";
  }, []);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const NotesCards = postsData.map((data) => {
    return <NoteCard key={data.id} data={data} />;
  });

  return (
    <>
      <div className="vlog-block">
        <h2 className="center">BAJO EL VLOG</h2>
        <div className="notes-card-list">{NotesCards.slice(0, 4)}</div>
        <div className="center">
          <button className="btn verMas">Ver más</button>
        </div>
      </div>
    </>
  );
};

export default Vlog;
