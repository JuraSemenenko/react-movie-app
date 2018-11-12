import React, { Component } from "react";
import Comments from "./comments";
import firebase from "../services/firebase";
import { getUserIdFromCookie } from "../services/helpers";
import Like from "./common/like";
import { getDataFromDB, addToFavorites } from "../services/firebase";

class MovieCardContent extends Component {
  state = {
    data: {},
    movieId: this.props.match.params.id,
    videos: { results: [] },
    liked: false,
    title: "",
    userID: ""
  };

  componentDidMount() {
    const cookieUserId = getUserIdFromCookie();
    const URL =
      "users/" + cookieUserId + "/favorites/movies/" + this.state.movieId;
    console.log("cookieUserId", cookieUserId);
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.state.movieId
      }?api_key=340af08aad86d2a893fef0bc25ea615d&language=en-US`
    )
      .then(response => response.json())
      .then(data => this.setState({ data, userID: cookieUserId }));

    getDataFromDB(URL).then(
      data => (data ? this.setState({ liked: data.liked }) : null)
    );
  }
  handleFavorites = () => {
    const { movieId, liked, data } = this.state;
    const cookieUserId = getUserIdFromCookie();
    const setObj = {
      liked: !liked,
      title: data.title,
      id: movieId,
      raiting: data.vote_average
    };
    const URL = "users/" + cookieUserId + "/favorites/movies/" + movieId;
    addToFavorites(URL, setObj);

    this.setState({ liked: !liked });
  };
  render() {
    const { data, movieId, liked, videos, userID } = this.state;

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

              {userID && (
                <Like
                  onClick={this.handleFavorites}
                  liked={liked}
                  content="movie"
                />
              )}

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
