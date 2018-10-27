import React, { Component } from "react";

class MovieCardContent extends Component {
  state = {
    data: {},
    peopleId: this.props.match.params.id
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/person/${
        this.state.peopleId
      }?api_key=340af08aad86d2a893fef0bc25ea615d&language=en-US`
    )
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
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
            {/* <div className="container">
              <div className="row">
                <div className="col-md-4">
                  {console.log(this.state)}
                  {videos.results.map(video => (
                    <iframe
                      hey={video.id}
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ))}
                </div>
              </div> </div>*/}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieCardContent;
