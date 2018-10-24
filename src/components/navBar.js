import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = ({ isAuth, profileEmail }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Movies App
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Movie Data Base
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="selections">
              Actors
            </NavLink>
          </li>
          {isAuth ? (
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                {`Profile ${profileEmail}`}
              </NavLink>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
