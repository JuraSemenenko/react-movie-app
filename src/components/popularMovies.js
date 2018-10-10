import React, { Component } from "react";

import Pagination from "./pagination";
import movieData from "../data/popularMovies.json";
class PopularMovies extends Component {
  state = { data: movieData };

  render() {
    const { data } = this.state;
    const imgPath = "https://image.tmdb.org/t/p/w500/";
    console.log("data= ", movieData);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.data.map(page => {
              return page.results.map(item => {
                return (
                  <div key={item.id} className="card col-xl-2">
                    <img
                      className="card-img-top"
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <a className="btn btn-primary">Details</a>
                    </div>
                  </div>
                );
              });
            })}
          </div>
        </div>
        <Pagination pageCount={data.length} />
      </React.Fragment>
    );
  }
}

export default PopularMovies;
