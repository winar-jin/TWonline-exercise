module.exports = function (arr) {
  let array = arr.slice(0);
  return array.join('-').split(',').join('-').split('-').map(num=>num*1);
};