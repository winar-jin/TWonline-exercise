module.exports = function (number) {
  // const numberArr = number.split('');
  // kind of confused with the exercise
  let result = 1;
  if (number >= 10 && number <= 26) {
    result += 1;
  }
  return result;
};