import React, { Component } from "react";
import Pagination from "./pagination";

import MovieTable from "./movieTable";
import { database } from "../services/firebase";

class PopularMovies extends Component {
  state = {
    data: [],
    currentPage: 1,
    movieOnPage: 20
  };

  componentDidMount() {
    database.ref().on("value", snapshot => {
      //snapshot.val().movies.map(item => console.log(item));
      this.setState({ data: snapshot.val().movies });
    });
  }

  handlePageClick = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { data, movieOnPage } = this.state;
    //const imgPath = "https://image.tmdb.org/t/p/w500/";

    return (
      <React.Fragment>
        <div>
          <MovieTable
            data={data}
            pageInfo={this.state.currentPage}
            movieOnPage={movieOnPage}
          />
          <Pagination
            movieCount={data.length}
            currentPage={this.state.currentPage}
            onClick={this.handlePageClick}
            movieOnPage={movieOnPage}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PopularMovies;
