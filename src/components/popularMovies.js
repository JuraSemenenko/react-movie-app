import React, { Component } from "react";

import Pagination from "./pagination";
import movieData from "../data/popularMovies.json";

class PopularMovies extends Component {
  state = {
    data: movieData,
    currentPage: 1
  };

  handlePageClick = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  render() {
    const { data, currentPage } = this.state;
    //const imgPath = "https://image.tmdb.org/t/p/w500/";
    console.log("data= ", this.state.data[currentPage]);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.data[currentPage - 1].results.map(item => {
              return (
                <div key={item.id} className="card col-xl-2">
                  <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <a className="btn btn-primary">Details</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
