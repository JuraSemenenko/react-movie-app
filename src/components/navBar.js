import React from "react";
import { logOut } from "../services/auth";
import { Link } from "react-router-dom";

const NavBar = ({ isAuth, profileName }) => {
  return (
    <nav className="nav nav-pills d-flex justify-content-between m-4">
      <ul className="d-flex justify-content-start">
        <li className="nav-item flex-sm-fill text-sm-center">
          <Link className="nav-link" to="/">
            Movie Data Base
          </Link>
        </li>

        <li className="nav-item flex-sm-fill text-sm-center">
          <Link className="nav-link" to="/people-data-base">
            People
          </Link>
        </li>
      </ul>
      <ul className="d-flex justify-content-end">
        <li className="nav-item flex-sm-fill text-sm-center">
          <Link className="nav-link" to="/profile">
            {`Profile ${profileName}`}
          </Link>
        </li>
        {!isAuth && (
          <li className="nav-item flex-sm-fill text-sm-center">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        )}
        {isAuth && (
          <li className="nav-item flex-sm-fill text-sm-center">
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={() => logOut()}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
