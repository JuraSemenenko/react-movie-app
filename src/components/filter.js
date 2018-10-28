import React from "react";
import { GENRES } from "../services/fetchingData";
import Checkbox from "./checkbox";
const Filter = ({
  value,
  searchChange,
  acceptSearch,
  handleChacked,
  filteredGenres,
  acceptGenresSearch
}) => {
  return (
    <React.Fragment>
      <input
        className="form-control"
        type="text"
        placeholder="Search Movie"
        value={value}
        onChange={searchChange}
      />
      <button type="submit" className="btn btn-primary" onClick={acceptSearch}>
        Search by title
      </button>
      <Checkbox
        data={GENRES}
        handleChacked={handleChacked}
        statusData={filteredGenres}
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={acceptGenresSearch}
      >
        Search by genres
      </button>
    </React.Fragment>
  );
};

export default Filter;
