import React from "react";
import { GENRES } from "../services/fetchingData";
import Checkbox from "./checkbox";
import Input from "./common/input";
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
      <Input
        type="text"
        placeholder="Search Movie"
        value={value}
        handleInputChange={searchChange}
      />
      <button
        type="submit"
        className="btn btn-primary m-1"
        onClick={acceptSearch}
      >
        Search by title
      </button>
      <Checkbox
        data={GENRES}
        handleChacked={handleChacked}
        statusData={filteredGenres}
      />
      <button
        type="submit"
        className="btn btn-primary m-1"
        onClick={acceptGenresSearch}
      >
        Search by genres
      </button>
    </React.Fragment>
  );
};

export default Filter;
