module.exports = function (str, len, char) {
  if (len <= str.length) {
    return str.slice(-len);
  }
  const originStrArr = str.split('');
  const originStrArrLength = originStrArr.length;
  const resultArr = Array(len - originStrArrLength).fill(char.substr(0, 1));
  return resultArr.concat(originStrArr).join('');
}