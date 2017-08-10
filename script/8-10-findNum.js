module.exports = function (arr) {
    let cache = [];
    for (let index = 0; index < arr.length; index++) {
        if (cache.includes(arr[index])) {
            cache = cache.filter(ele => ele !== arr[index]);
        } else {
            cache.push(arr[index]);
        }
    }
    return cache[0];
}