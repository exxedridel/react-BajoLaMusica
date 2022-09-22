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
  console.log(NotesCards.length);
  const [arrayShown, setArrayShown] = React.useState(4);

  function addItems() {
    setArrayShown((prevState) => prevState + 2);
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
            Ver 2 más
          </button>
        </div>
      </div>
    </>
  );
};

export default Vlog;
