const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
const keys = Reflect.ownKeys;
module.exports = function (array) {
  const tempArr = array.split('');
  let result = {};
  if (!Object.values) {
    Object.values = function values(O) {
      return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
    };
  }
  tempArr.forEach(ele => {
    if (result[ele]) {
      result[ele]++;
    } else {
      result[ele] = 1;
    }
  });
  const maxLength = Math.max(...Object.values(result));
  for (let key in result) {
    if (result[key] !== maxLength) {
      delete result[key];
    }
  }
  return result;
};