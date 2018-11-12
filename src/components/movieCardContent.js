import React, { Component } from "react";
import Comments from "./comments";
import firebase from "../services/firebase";
import { getUserIdFromCookie } from "../services/helpers";
import Like from "./common/like";
class MovieCardContent extends Component {
  state = {
    data: {},
    movieId: this.props.match.params.id,
    videos: { results: [] },
    liked: false
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.state.movieId
      }?api_key=340af08aad86d2a893fef0bc25ea615d&language=en-US`
    )
      .then(response => response.json())
      .then(data => this.setState({ data }));

    const cookieUserId = getUserIdFromCookie();

    console.log("data from cookie = ", cookieUserId);

    firebase
      .database()
      .ref("users/" + cookieUserId + "/favorites/movies/" + this.state.movieId)
      .once("value")
      .then(
        snapshot =>
          snapshot.val() ? this.setState({ liked: snapshot.val().liked }) : null
      );
  }
  handleFavorites = () => {
    const cookieUserId = getUserIdFromCookie();
    firebase
      .database()
      .ref("users/" + cookieUserId + "/favorites/movies/" + this.state.movieId)
      .set({
        liked: !this.state.liked
      });

    this.setState({ liked: !this.state.liked });
  };
  render() {
    const { data, movieId, liked, videos } = this.state;

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

              <Like
                onClick={this.handleFavorites}
                liked={liked}
                content="movie"
              />

              <p>{data.overview}</p>
            </div>

            <div className="col-md-8">
              <img
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                className="img-fluid"
                alt="Responsive"
              />
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="row">Avg. vote</th>
                    <td>{data.vote_average}</td>
                  </tr>
                  <tr>
                    <th scope="row">Genres</th>
                    <td>
                      {data.genres
                        ? data.genres.map(genre => genre.name).join(", ")
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Release date</th>
                    <td>
                      {data.release_date
                        ? data.release_date.split("-").join(".")
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Production countries</th>
                    <td>
                      {data.production_countries
                        ? data.production_countries
                            .map(countries => countries.name)
                            .join(", ")
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Original language</th>
                    <td>
                      {data.original_language
                        ? data.original_language.toUpperCase()
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Runtime</th>
                    <td>{data.runtime} minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Comments id={movieId} commentTo={"movie"} />
      </React.Fragment>
    );
  }
}

export default MovieCardContent;
