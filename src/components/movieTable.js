import React from "react";

import MovieCard from "./movieCard";

const MovieTable = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map(item => {
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
