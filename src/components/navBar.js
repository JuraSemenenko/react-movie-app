import React from "react";
import { logOut } from "../services/auth";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ isAuth, profileName }) => {
  return (
    <nav className="navbar navbar-expand-sm  navbar-dark bg-dark mb-2">
      <NavLink className="navbar-brand" to="/">
        <img
          src="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
          alt="logo"
          width="150"
          height="70"
        />
      </NavLink>

      <div className="navbar-my">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Movie DB
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/people-data-base">
              People DB
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              {`Profile ${profileName}`}
            </NavLink>
          </li>
          {!isAuth && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          )}
          {isAuth && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
