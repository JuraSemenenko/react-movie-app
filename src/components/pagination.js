import React from "react";
import { paginationArrMaker } from "../services/helpers";
import _ from "lodash";

const Pagination = ({ currentPage, onClick, totalPages }) => {
  // 1. При количестве страниц totalPages <= 5, создавать масив _.range(1, totalPage)
  // 2. При количестве страниц totalPages > 5, и текущая страница currentPage <= totalPage - 2 -> создавать масив _.range(currentPage - 2, currentPage + 2)
  // 3. При количестве страниц totalPages > 5, и текущая страница currentPage >= totalPage - 2 -> создавать масив _.range(totalPage - 5, totalPage)

  const pagesArr = paginationArrMaker(currentPage, totalPages);

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pagesArr.map(page => (
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
