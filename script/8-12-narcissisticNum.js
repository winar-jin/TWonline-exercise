module.exports = function () {
    let result = [];
    for (let index = 100; index <= 1000; index++) {
        let separate = index.toString().split('');
        let total = separate.reduce((all, val) => all += Math.pow(parseInt(val, 10), 3), 0);
        if (total === index) {
            result.push(index);
        }
    }
    return result;
}