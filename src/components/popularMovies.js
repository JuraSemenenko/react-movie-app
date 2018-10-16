import React, { Component } from "react";
import Pagination from "./pagination";
import movieData from "../data/popularMovies.json";
import MovieTable from "./movieTable";

class PopularMovies extends Component {
  state = {
    data: movieData,
    currentPage: 1
  };

  handlePageClick = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { data } = this.state;
    //const imgPath = "https://image.tmdb.org/t/p/w500/";

    return (
      <React.Fragment>
        <MovieTable data={data} pageInfo={this.state.currentPage} />
        <Pagination
          pageCount={data.length}
          currentPage={this.state.currentPage}
          onClick={this.handlePageClick}
        />
      </React.Fragment>
    );
  }
}

export default PopularMovies;
