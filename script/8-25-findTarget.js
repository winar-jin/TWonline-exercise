module.exports = function (arr, ele) {
  const filterArr = [];
  return arr.filter(val => {
    if (val !== ele) {
      return val;
    }
    filterArr.push(val);
  }).concat(filterArr);
};