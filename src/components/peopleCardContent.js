import React, { Component } from "react";
import Comments from "./comments";
import Like from "../components/common/like";
import { addToFavorites } from "../services/firebase";
import firebase from "firebase";
import { getUserIdFromCookie } from "../services/helpers";
class MovieCardContent extends Component {
  state = {
    data: {},
    peopleId: this.props.match.params.id,
    liked: false
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/person/${
        this.state.peopleId
      }?api_key=340af08aad86d2a893fef0bc25ea615d&language=en-US`
    )
      .then(response => response.json())
      .then(data => this.setState({ data }));

    const cookieUserId = getUserIdFromCookie();

    firebase
      .database()
      .ref("users/" + cookieUserId + "/favorites/people/" + this.state.peopleId)
      .once("value")
      .then(
        snapshot =>
          snapshot.val() ? this.setState({ liked: snapshot.val().liked }) : null
      );
  }
  handleFavorites = () => {
    const { peopleId, liked } = this.state;
    const cookieUserId = getUserIdFromCookie();
    addToFavorites(cookieUserId, "people", peopleId, liked);
    this.setState({ liked: !liked });
  };

  render() {
    const { data, peopleId, liked } = this.state;
    console.log(data);

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                alt="Poster"
              />
              <Like
                onClick={this.handleFavorites}
                liked={liked}
                content="actor"
              />
            </div>

            <div className="col-md-8">
              <h1>{data.name}</h1>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="row">Place of birth</th>
                    <td>{data.place_of_birth}</td>
                  </tr>
                  <tr>
                    <th scope="row">Popularity</th>
                    <td>{data.popularity}</td>
                  </tr>
                  <tr>
                    <th scope="row">Birthday</th>
                    <td>
                      {data.birthday
                        ? data.birthday.split("-").join(".")
                        : null}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Homepage</th>
                    <td>{data.homepage}</td>
                  </tr>
                </tbody>
              </table>
              <p>{data.biography}</p>
            </div>
          </div>
        </div>
        <Comments id={peopleId} commentTo={"people"} />
      </React.Fragment>
    );
  }
}

export default MovieCardContent;
