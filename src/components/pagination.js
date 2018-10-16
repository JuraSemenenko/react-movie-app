import React from "react";

import _ from "lodash";

const Pagination = ({ pageCount, currentPage, onClick }) => {
  const pageRange = _.range(1, pageCount + 1);

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
