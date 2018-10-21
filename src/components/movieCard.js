import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, id, posterPath }) => {
  return (
    <div className="card col-xl-3">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="Poster"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link className="btn btn-primary" to={`/movie/${id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
