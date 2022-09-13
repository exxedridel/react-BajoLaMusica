import React from "react";
import "../styles/Home.scss";
import HeaderBanner from "../components/HeaderBanner";
import Cover from "../containers/Cover";
import NoteCard from "../containers/NoteCard";
import postsData from "../data/PostsData.js";
import EventCard from "../containers/EventCard";
import eventsData from "../data/EventsData";

const Home = () => {
  React.useEffect(() => {
    document.title = "Bajo la Música";
  }, []);

  const NotesCards = postsData.map((data) => {
    return <NoteCard key={data.id} data={data} />;
  });

  const EventsCards = eventsData.map((data) => {
    return <EventCard key={data.id} data={data} />;
  });

  return (
    <>
      <HeaderBanner />
      <div className="heading-block center">
        <div className="heading-title">
          <h1>LO ÚLTIMO:</h1>
        </div>
        <Cover />
      </div>

      <section className="middle-block">
        <h2 className="center">PRÓXIMOS EVENTOS</h2>
        <div className="events-card-list ">{EventsCards}</div>
      </section>

      <section className="bottom-block">
        <h2 className="center">BAJO LAS NOTAS</h2>
        <div className="notes-card-list">
          {NotesCards}
          <div className="center">
            <p>Ver más</p>
            <p>➕</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
