module.exports = function (str, len, char) {
  if (len <= str.length) {
    return str.slice(-len);
  } else {
    const resultArr = Array(len).fill(char.substr(0,1));
    const originStrArr = str.split('');
    const originStrArrLength = originStrArr.length;
    resultArr.splice(-originStrArrLength,originStrArrLength,...originStrArr);
    return resultArr.join('');
  }
}