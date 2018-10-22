import React from "react";

import _ from "lodash";

const Pagination = ({ movieCount, currentPage, movieOnPage, onClick }) => {
  // Расчет числа страниц в зависимости от количества элементов на странице и количества элементов всего.
  const pageCount = Math.ceil(movieCount / movieOnPage);
  // Создание масива из 10-ти элемментов в зависимости от текущей страницы.
  const pageRange =
    currentPage < 6
      ? _.range(1, 11)
      : _.range(
          currentPage - 5,
          currentPage + 5 < pageCount ? currentPage + 5 : pageCount
        );

  return (
    <nav className="d-flex justify-content-center">
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
