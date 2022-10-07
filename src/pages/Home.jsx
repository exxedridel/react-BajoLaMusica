import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
import Hero from "../components/Hero";
import Cover from "../containers/Cover";
import interviewsData from "../data/InterviewsData.js";
import NoteCard from "../containers/NoteCard";
import postsData from "../data/PostsData.js";
import EventCard from "../containers/EventCard";
import eventsData from "../data/EventsData";
import Aside from "../components/Aside";
import Subscribe from "../containers/Subscribe";

const Home = () => {
  React.useEffect(() => {
    document.title = "Bajo la Música | Home ";
    console.log(date);
  }, []);

  const CoverCard = interviewsData.map((data) => {
    return <Cover key={data.id} data={data} />;
  });

  const date = new Date();
  const todayDayNumber = date.getDate();
  const todayMonth = date.getMonth() + 1;
  const todayYear = date.getFullYear();

  const EventsCards = eventsData.map((data) => {
    if (data.date.fullYear >= todayYear) {
      if (data.date.month > todayMonth) {
        return (
          <EventCard
            key={data.id}
            data={data}
            todayDay={todayDayNumber}
            todayMonth={todayMonth}
          />
        );
      } else if (data.date.month === todayMonth) {
        if (data.date.day >= todayDayNumber) {
          return (
            <EventCard
              key={data.id}
              data={data}
              todayDay={todayDayNumber}
              todayMonth={todayMonth}
            />
          );
        }
      }
    }
  });

  const NotesCards = postsData.map((data) => {
    return <NoteCard key={data.id} data={data} />;
  });

  return (
    <>
      <Hero />
      <div className="Template">
        <div className="Cover heading-block center">
          <div className="heading-title">
            <h1>LO ÚLTIMO BLM</h1>
          </div>
          {CoverCard[0]}
        </div>

        <div className="Events middle-block">
          <h2 className="center">PRÓXIMOS EVENTOS</h2>
          <div className="events-card-list ">{EventsCards}</div>
        </div>

        <div className="Videos bottom-block">
          <h2 className="center">BAJO EL VLOG</h2>
          <div className="notes-card-list">
            {NotesCards.slice(0, 2)}
            <div className="center">
              <Link to="vlog">
                <button className="btn verMas">Ver 1 más</button>
              </Link>
            </div>
          </div>
          <Subscribe />
        </div>
        <div className="Aside">
          <Aside />
        </div>
      </div>
    </>
  );
};

export default Home;
