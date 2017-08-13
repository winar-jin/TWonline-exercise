module.exports = function (arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    const middleIndex = sortedArr.length / 2;
    return Number.isInteger(middleIndex) ? (sortedArr[middleIndex] + sortedArr[middleIndex-1]) / 2 :
        sortedArr[Math.floor(middleIndex)];
}