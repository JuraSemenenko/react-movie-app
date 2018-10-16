import React, { Component } from "react";
import movieData from "../data/popularMovies.json";

class MovieCardContent extends Component {
  state = {
    data: {},
    movieId: this.props.match.params.id
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.state.movieId
      }?api_key=340af08aad86d2a893fef0bc25ea615d&language=en-US`
    )
      .then(response => response.json())
      .then(data => this.setState({ data }, () => console.log(this.state)));
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt="Poster"
              />
              <h2>{data.title}</h2>
            </div>

            <div className="col-md-8">
              <img
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                className="img-fluid"
                alt="Responsive"
              />
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Avg. vote</th>
                    <td>{this.state.data.vote_average}</td>
                  </tr>
                  <tr>
                    <th scope="row">Avg. vote</th>
                    <td>{this.state.data.vote_average}</td>
                  </tr>
                  <tr>
                    <th scope="row">Avg. vote</th>
                    <td>{this.state.data.vote_average}</td>
                  </tr>
                  <tr>
                    <th scope="row">Avg. vote</th>
                    <td>{this.state.data.vote_average}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieCardContent;
