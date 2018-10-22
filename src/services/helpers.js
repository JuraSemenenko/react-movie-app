export const queryMaker = dataArray => {
  let filtredData = [];
  for (let key in dataArray) {
    if (dataArray[key]) filtredData.push(key);
  }
  return filtredData.join(",");
};
