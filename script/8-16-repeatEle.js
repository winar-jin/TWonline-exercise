module.exports = function (arr) {
    const result = [];
    const finalArr = Array.from(arr).sort();
    finalArr.forEach((_, index) => {
        if (finalArr[index] === finalArr[index+1] && result.indexOf(finalArr[index]) === -1){
            result.push(finalArr[index]);
        }
    });
    return result;
}