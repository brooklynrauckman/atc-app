import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [navToggle, updateNavToggle] = useState(false);

  return (
    <div>
      <div className="nav-logo" onClick={() => updateNavToggle(!navToggle)}>
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke={navToggle ? "#FCFCFC" : "#000000"}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </div>
      <div className={navToggle === false ? "nav-wrapper" : "slide"}>
        <div className="link-wrapper">
          <Link
            to="/"
            className="link"
            onClick={() => updateNavToggle(!navToggle)}
          >
            Collision Scenario
          </Link>

          <Link
            to="/differences"
            className="link"
            onClick={() => updateNavToggle(!navToggle)}
          >
            Differences
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
