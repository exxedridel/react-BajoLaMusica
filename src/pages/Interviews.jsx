import React from "react";
// import { Link } from "react-router-dom";
import "../styles/Interviews.scss";
import NavInterviews from "../containers/NavInterviews";
import Subscribe from "../containers/Subscribe";
// import interviewsData from "../data/interviewsData";

const Interviews = () => {
  React.useEffect(() => {
    document.title = "Entrevistas | Bajo la Música";
  });

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  // const interviews = interviewsData.map((inter) => (
  //   <div key={inter.id}>
  //     <p>
  //       <Link to={`/entrevistas/${inter.id}`}>
  //         <button className="btn btn-artist">{inter.artist}</button>
  //       </Link>
  //     </p>
  //   </div>
  // ));

  return (
    <div className="heading-block-Inter">
      <h2 className="">
        BAJO LA ENTREVISTA <br /> CON:
      </h2>
      <NavInterviews />
      <Subscribe />
    </div>
  );
};

export default Interviews;
