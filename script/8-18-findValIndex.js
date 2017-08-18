module.exports = function (arr, item) {
    const result = [];
    arr.forEach((val, index) => {
        if (val === item) {
            result.push(index);
        }
    });
    return result.length === 0 ? -1 : result;
}