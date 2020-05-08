import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <h1>Air Traffic Skills Assessment (ATSA) Practice Activities</h1>
        <p>
          These activities are designed as preparation for the ATSA. However,
          they are also just a fun way to test your memorization, focus, mental
          math, and speed. Have fun!
        </p>
      </div>
      <div className="games">
        <Link className="preview" to="/collision">
          <h2>Collision Scenario</h2>
        </Link>
        <Link className="preview" to="/differences">
          <h2>Differences Memory Challenge</h2>
        </Link>
        <Link className="preview" to="/equations">
          <h2>Equations Memory Challenge</h2>
        </Link>
        <Link className="preview" to="/perspective">
          <h2>Perspective Challenge</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
