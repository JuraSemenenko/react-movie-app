import React, { Component } from "react";

import MovieCard from "./contentCard";
import Pagination from "./pagination";
import Checkbox from "./checkbox";

import { GENRES, fetchData } from "../services/fetchingData";
import { queryMaker } from "../services/helpers";

class MoviesDB extends Component {
  state = {
    data: [],
    currentPage: 1,
    totalPages: 13,
    value: "",
    filter: { genres: {} },
    searchType: "discoverMovies",
    movieQuery: "",
    genresQuery: ""
  };
  handlePageClick = page => {
    const { genresQuery, movieQuery, searchType } = this.state;
    const options = {
      type: searchType,
      genres: genresQuery,
      page: page,
      query: movieQuery
    };
    fetchData(options).then(fetchingData =>
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
    const movieQuery = this.state.value.toLowerCase();
    const options = { type: "movie", query: movieQuery };
    fetchData(options).then(fetchingData => {
      console.log("fetchingData", fetchingData);
      this.setState({
        data: fetchingData.results,
        searchType: "movie",
        totalPages: fetchingData.total_pages,
        movieQuery: movieQuery,
        currentPage: 1
      });
    });
  };

  handleGenresSearch = () => {
    const genres = { ...this.state.filter.genres };
    const genresQuery = queryMaker(genres);
    const options = { type: "discoverMovies", genres: genresQuery };
    fetchData(options).then(fetchingData =>
      this.setState({
        data: fetchingData.results,
        searchType: "discoverMovies",
        totalPages: fetchingData.total_pages,
        genresQuery: genresQuery,
        currentPage: 1
      })
    );
  };

  componentDidMount() {
    const { currentPage } = this.state;
    const options = { type: "discoverMovies", page: currentPage };
    fetchData(options).then(fetchingData =>
      this.setState({
        data: fetchingData.results,
        totalPages: fetchingData.total_pages
      })
    );
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
            <div className="d-flex flex-wrap">
              {data.map(item => (
                <MovieCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  posterPath={item.poster_path}
                  cardType="movie"
                />
              ))}
            </div>
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
