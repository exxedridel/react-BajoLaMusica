import React from "react";
import "../styles/global.scss";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h4>Navbar</h4>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
