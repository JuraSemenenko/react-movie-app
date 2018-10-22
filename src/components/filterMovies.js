import React, { Component } from "react";

import MovieTable from "./movieTable";
import Pagination from "./pagination";
import Checkbox from "./checkbox";

import { database } from "../services/firebase";
import { GENRES, fetchData } from "../services/fetchingData";
import { queryMaker } from "../services/helpers";

class FilterMovies extends Component {
  state = {
    data: [],
    currentPage: 1,
    value: "",
    movieOnPage: 20,
    filter: { genres: {} }
  };
  handlePageClick = page => {
    this.setState({ currentPage: page });
  };

  handleInput = e => {
    this.setState({ value: e.target.value });
  };

  handleChacked = e => {
    const genre = { ...this.state.filter.genres };
    genre[e.target.id] = !genre[e.target.id];
    this.setState({ filter: { genres: genre } });
  };

  handleTitleSearch = () => {
    const query = this.state.value.toLowerCase();
    fetchData(query, "byGenres").then(fetchingData =>
      this.setState({ data: fetchingData.results })
    );
  };

  handleGenresSearch = e => {
    e.preventDefault();
    const genres = { ...this.state.filter.genres };
    const query = queryMaker(genres);

    fetchData(query, "byGenres").then(fetchingData =>
      this.setState({ data: fetchingData.results })
    );
  };

  componentDidMount() {
    database.ref().on("value", snapshot => {
      this.setState({ data: snapshot.val().movies });
    });
  }
  movieFilter = () => {
    const { value, data } = this.state;

    const filtredMovie = data.filter(
      movie => movie.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );

    //this.setState({ data: filtredMovie });
    return value ? filtredMovie : data;
  };
  render() {
    const data = this.movieFilter();
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <input
              className="form-control"
              type="text"
              placeholder="Search Movie"
              value={this.state.value}
              onChange={this.handleInput}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleTitleSearch}
            >
              Search by title
            </button>
            <Checkbox
              data={GENRES}
              handleChacked={this.handleChacked}
              statusData={this.state.filter.genres}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleGenresSearch}
            >
              Search by genres
            </button>
          </div>
          <div className="col-md-9">
            <MovieTable
              data={data}
              pageInfo={this.state.currentPage}
              movieOnPage={this.state.movieOnPage}
            />
            <Pagination
              movieCount={data.length}
              currentPage={this.state.currentPage}
              onClick={this.handlePageClick}
              movieOnPage={this.state.movieOnPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FilterMovies;
