import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  return (
    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <div
            onClick={() => {
              setIsNavActive(!isNavActive);
            }}
            role="button"
            className={`navbar-burger ${
              isNavActive ? "is-active center" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div id="navbarBasicExample" className={`navbar-menu has-text-centered ${
            isNavActive ? "is-active" : ""
          }`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/calendar" className="navbar-item">
            Calendar
          </Link>

          <Link to="/directory" className="navbar-item">
            Directory
          </Link>

          <Link to="/highschool" className="navbar-item">
            High School
          </Link>

          <Link to="/middleschool" className="navbar-item">
            Middle School
          </Link>

          <Link to="/jobs" className="navbar-item">
            Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
