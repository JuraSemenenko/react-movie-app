import React from "react";

import _ from "lodash";

const Pagination = ({ movieCount, currentPage, movieOnPage, onClick }) => {
  const pageCount = Math.ceil(movieCount / movieOnPage);
  const pageRange = _.range(1, pageCount);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageRange.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
            onClick={() => onClick(page)}
          >
            <button className="page-link">{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
