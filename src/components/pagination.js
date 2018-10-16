import React from "react";

import _ from "lodash";

const Pagination = ({ pageCount, currentPage, onClick }) => {
  const pageRange = _.range(1, pageCount + 1);
  console.log(pageRange);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link">Previous</a>
        </li>
        {pageRange.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
            onClick={() => onClick(page)}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
