import React, { Component } from "react";

import CardRender from "./cardRender";
import Pagination from "./pagination";
import ChangeViewButton from "./changeViewButton";
import Filter from "./filter";
import { fetchData } from "../services/fetchingData";
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
    genresQuery: "",
    isRenderGallery: true
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
  handleChangeView = () => {
    this.setState({ isRenderGallery: !this.state.isRenderGallery });
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
    const { data, isRenderGallery } = this.state;

    return (
      <div className="container">
        <div className="d-flex justify-content-around">
          <h2>
            Tatal pages of Movies = {this.state.totalPages}, current page -{" "}
            {this.state.currentPage}
          </h2>
          <div>
            <ChangeViewButton
              btnClick={this.handleChangeView}
              isRenderGallery={isRenderGallery}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Filter
              value={this.state.value}
              searchChange={this.handleInput}
              acceptSearch={this.handleTitleSearch}
              handleChacked={this.handleChacked}
              filteredGenres={this.state.filter.genres}
              acceptGenresSearch={this.handleGenresSearch}
            />
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-wrap">
              <CardRender
                data={data}
                cardType="movie"
                title="title"
                posterPath="poster_path"
                isRenderGallery={isRenderGallery}
              />
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
