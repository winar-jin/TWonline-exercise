function judgeStrategies(number) {
  let result = '';
  result += isDivisibleBy3(number) ? 'fizz ' : '';
  result += isDivisibleBy5(number) ? 'buzz ' : '';
  return result;
}
module.exports = function (numbers) {
  let result = '';
  Array(numbers).fill().forEach((_, i) => {
    result += judgeStrategies(i+1);
  });
  return result.substr(0,result.length-1);
};

function isDivisibleBy3(num) {
  return num % 3 ===0;
}
function isDivisibleBy5(num) {
  return num % 5 ===0;
}