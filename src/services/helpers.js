import _ from "lodash";

export const queryMaker = dataArray => {
  let filtredData = [];
  for (let key in dataArray) {
    if (dataArray[key]) filtredData.push(key);
  }
  return filtredData.join(",");
};

export const paginationArrMaker = (currentPage, totalPage) => {
  // 1. При количестве страниц totalPages <= 5, создавать масив _.range(1, totalPage)
  // 2. При количестве страниц totalPages > 5, и текущая страница currentPage <= totalPage - 2 -> создавать масив _.range(currentPage - 2, currentPage + 2)
  // 3. При количестве страниц totalPages > 5, и текущая страница currentPage >= totalPage - 2 -> создавать масив _.range(totalPage - 5, totalPage)

  if (currentPage <= 5 && totalPage <= 5) {
    return _.range(1, totalPage + 1);
  } else if (currentPage <= 3 && totalPage > 5) {
    return _.range(1, 6);
  } else if (totalPage > 5 && currentPage <= totalPage - 2) {
    return _.range(currentPage - 2, currentPage + 3);
  } else if (totalPage > 5 && totalPage - 2 <= currentPage <= totalPage) {
    return _.range(totalPage - 4, totalPage + 1);
  }
};

export const getUserIdFromCookie = () =>
  document.cookie.replace(
    /(?:(?:^|.*;\s*)userid\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

export const dateFromTime = UNIX_time => {
  var a = new Date(+UNIX_time);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " at " + hour + ":" + min + ":" + sec;
  return time;
};
