import React, { Component } from "react";

import MovieTable from "./movieTable";
import Pagination from "./pagination";

import { database } from "../services/firebase";

class FilterMovies extends Component {
  state = {
    data: [],
    currentPage: 1,
    value: ""
  };
  handlePageClick = page => {
    this.setState({ currentPage: page });
  };

  handleInput = e => {
    this.setState({ value: e.target.value });
  };

  componentDidMount() {
    database.ref().on("value", snapshot => {
      this.setState({ data: snapshot.val().movies });
    });
  }
  movieFilter = () => {
    const { value, data } = this.state;

    const filtredMovie = data.filter(
      movie => movie.title.indexOf(value) !== -1
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
          </div>
          <div className="col-md-9">
            <MovieTable data={data} pageInfo={this.state.currentPage} />
            <Pagination
              pageCount={data.length}
              currentPage={this.state.currentPage}
              onClick={this.handlePageClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FilterMovies;
