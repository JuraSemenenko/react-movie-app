import React from "react";

import MovieCard from "./movieCard";

const MovieTable = ({ data, pageInfo, movieOnPage }) => {
  const movieData = data.slice(
    (pageInfo - 1) * movieOnPage,
    pageInfo * movieOnPage + movieOnPage
  );
  return (
    <div className="container">
      <div className="row">
        {movieData.map(item => {
          return (
            <MovieCard
              key={item.id}
              id={item.id}
              title={item.title}
              posterPath={item.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieTable;
