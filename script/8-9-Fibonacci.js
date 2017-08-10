module.exports = function (num) {
    let cache = [0, 0, 1];
    for (let index = 3; index <= num; index++) {
        cache[index] = cache[index - 1] + cache[index - 2];
    }
    return cache[num];
}