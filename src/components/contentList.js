import React from "react";

import { Link } from "react-router-dom";

const ContentList = ({ data, cardType, title, vote }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Avg. rating</th>
          <th scope="col">Favorites</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item[title]}</td>
              <td>{item[vote]}</td>
              <td>Favorites</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to={`/${cardType}/${item.id}`}
                >
                  Details
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContentList;
