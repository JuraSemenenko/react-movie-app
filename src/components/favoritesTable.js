import React from "react";
import { Link } from "react-router-dom";
const FavoritesTable = ({ data, content, contentType }) => {
  return (
    <React.Fragment>
      <h2>Your favorites {contentType}:</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Avg. rating</th>

            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {console.log("data in table ", data)}
          {Object.keys(data.favorites[contentType])
            .filter(item => data.favorites[contentType][item].liked)
            .map(item => {
              const { id, title, raiting } = data.favorites[contentType][item];
              console.log("props = ", id, title, raiting);
              return (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>{title}</td>
                  <td>{raiting}</td>

                  <td>
                    <Link className="btn btn-primary" to={`/${content}/${id}`}>
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default FavoritesTable;
