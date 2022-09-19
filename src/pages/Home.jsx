import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
import Hero from "../components/Hero";
import Cover from "../containers/Cover";
import NoteCard from "../containers/NoteCard";
import postsData from "../data/PostsData.js";
import EventCard from "../containers/EventCard";
import eventsData from "../data/EventsData";
import Aside from "../components/Aside";

const Home = () => {
  React.useEffect(() => {
    document.title = "Bajo la Música | Home ";
  }, []);

  const NotesCards = postsData.map((data) => {
    return <NoteCard key={data.id} data={data} />;
  });

  const EventsCards = eventsData.map((data) => {
    return <EventCard key={data.id} data={data} />;
  });

  return (
    <>
      <Hero />
      <div className="Template">
        <div className="Cover heading-block center">
          <div className="heading-title">
            <h1>LO ÚLTIMO:</h1>
          </div>
          <Cover />
        </div>

        <div className="Events middle-block">
          <h2 className="center">PRÓXIMOS EVENTOS</h2>
          <div className="events-card-list ">{EventsCards}</div>
        </div>

        <div className="Videos bottom-block">
          <h2 className="center">BAJO LAS NOTAS</h2>
          <div className="notes-card-list">
            {NotesCards.slice(0, 3)}
            <div className="center">
              <button className="btn verMas"><Link to="notes">Ver más</Link></button>
            </div>
          </div>
        </div>
        <div className="Aside">
          <Aside />
        </div>
      </div>
    </>
  );
};

export default Home;
