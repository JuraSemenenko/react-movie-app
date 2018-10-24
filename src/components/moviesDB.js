import React, { Component } from "react";

import MovieTable from "./movieTable";
import Pagination from "./pagination";
import Checkbox from "./checkbox";

import { database } from "../services/firebase";
import { GENRES, fetchData } from "../services/fetchingData";
import { queryMaker } from "../services/helpers";

class MoviesDB extends Component {
  state = {
    data: [],
    currentPage: 1,
    totalPages: 13,
    value: "",
    filter: { genres: {} },
    currentFilter: null,
    currentQuery: ""
  };
  handlePageClick = page => {
    const { currentQuery, currentFilter, currentPage } = this.state;
    fetchData(currentQuery, currentFilter, currentPage).then(fetchingData =>
      this.setState({
        data: fetchingData.results,
        currentPage: page
      })
    );
  };

  handleInput = e => {
    this.setState({ value: e.target.value });
  };

  handleChacked = e => {
    const genre = { ...this.state.filter.genres };
    genre[e.target.id] = !genre[e.target.id];
    this.setState({ filter: { genres: genre } });
  };
  // ТуДу Отрефакторить. Обьеденить футкции в одну handleTitleSearch и handleGenresSearch
  handleTitleSearch = () => {
    const currentQuery = this.state.value.toLowerCase();
    fetchData(currentQuery, "byTitle").then(fetchingData =>
      this.setState({
        data: fetchingData.results,
        currentFilter: "byTitle",
        totalPages: fetchingData.total_pages,
        currentQuery: currentQuery,
        currentPage: 1
      })
    );
  };

  handleGenresSearch = () => {
    const genres = { ...this.state.filter.genres };
    const currentQuery = queryMaker(genres);

    fetchData(currentQuery, "byGenres", this.state.currentPage).then(
      fetchingData =>
        this.setState({
          data: fetchingData.results,
          currentFilter: "byGenres",
          totalPages: fetchingData.total_pages,
          currentQuery: currentQuery,
          currentPage: 1
        })
    );
  };

  componentDidMount() {
    database.ref().on("value", snapshot => {
      this.setState({ data: snapshot.val().movies });
    });
  }

  render() {
    const { data } = this.state;

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
            <MovieTable data={data} pageInfo={this.state.currentPage} />
            <Pagination
              totalPages={this.state.totalPages}
              currentPage={this.state.currentPage}
              onClick={this.handlePageClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesDB;
